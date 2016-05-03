from pyechonest import *
from pyechonest import song
import urllib2
import json
import sys
import time

config.ECHO_NEST_API_KEY = "FMT861FPQXQF34W2H"

# title = sys.argv[1]
# artist = sys.argv[2]
with open("static/data/list_of_songs.json", "r") as file_name:
    song_list = json.loads(file_name.read())
count = 0

for i, val in enumerate(song_list):
    artist = val['artist']
    title = val['name']
    print artist, title
    results = song.search(artist=artist, title=title)
    try:
        songs = results[0]
    except:
        print title," not found"

    url = songs.audio_summary.get('analysis_url')

    data = urllib2.urlopen(songs.audio_summary.get('analysis_url')).read()
    output = json.loads(data)

    timbres = []
    pitches = []
    loudness = []
    energy = []

    for segment in output["segments"]:
        timbre_total = 0
        timbre_avg = 0

        pitch_total = 0
        pitch_avg = 0

        for timbre in segment["timbre"]:
            timbre_total += timbre
        timbre_avg = timbre_total / len(segment["timbre"])
        timbres.append(timbre_avg)

        for pitch in segment["pitches"]:
            pitch_total += pitch
        pitch_avg = pitch_total / len(segment["pitches"])
        pitches.append(pitch_avg)

        loudness.append(segment["loudness_max"])

    if min(timbres) < 0:
        timbres = [i - min(timbres) for i in timbres]
    timbres = [float(i) * 100 / max(timbres) for i in timbres]

    if min(pitches) < 0:
        pitches = [i - min(pitches) for i in pitches]
    pitches = [float(i) * 100 / max(pitches) for i in pitches]

    if min(loudness) < 0:
        loudness = [i - min(loudness) for i in loudness]
    loudness = [float(i) * 100 / max(loudness) for i in loudness]

    energy =  [x + y for x, y in zip(loudness, pitches)]
    energy = [x / 2 for x in energy]

    output = {}
    output["title"] = title
    output["artist"] = artist
    output["timbres"] = timbres
    output["pitches"] = pitches
    output["loudness"] = loudness
    output["energy"] = energy


    with open("static/data/songs/" + title + "-" + artist + ".json", "w") as file_name:
        json.dump(output, file_name)

        # TODO: make an array for a composition of timbre, pitch, and loudness as the 4th feature
    count = count + 1
    if count%7 == 0:
        time.sleep(60)
