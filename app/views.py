from flask import Flask, Blueprint
from flask import render_template, request, session, jsonify, redirect
import os
import json
import pprint
import glob

app = Flask(__name__)
data_first = {}
data_second = {}
song_list = {}
songs = []
songs_second = []
all_songs = {}
# [u'title', u'energy', u'artist', u'pitches', u'timbres', u'loudness']
first_song = "Hello"
second_song = "Animals"

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    global first_song
    global second_song
    if "favicon" not in path:
        if path is "":
            # RENDERING DEFAULT INDEX WITH HELLO AND ANIMALS
            first_song_info = all_songs[first_song]['title'] + ' by ' + all_songs[first_song]['artist']
            second_song_info = all_songs[second_song]['title'] + ' by ' + all_songs[second_song]['artist']

            return render_template('base.html', first_song_info =first_song_info, second_song_info = second_song_info,  songs_second = songs_second, songs = songs, \
                data_loudness = all_songs[first_song]['loudness'], data_pitches = all_songs[first_song]['pitches'], \
                data_timbres = all_songs[first_song]['timbres'], data_energy = all_songs[first_song]['energy'],\
                data_loudness_1 = all_songs[second_song]['loudness'], data_pitches_1 = all_songs[second_song]['pitches'], \
                data_timbres_1 = all_songs[second_song]['timbres'], data_energy_1 = all_songs[second_song]['energy'])
        if "SECOND" in path:
            # IN SECOND SONG
            print(path)
            key = path[:-7]
            print(key)
            print(key in all_songs.keys())
            second_song = key
            first_song_info = all_songs[first_song]['title'] + ' by ' + all_songs[first_song]['artist']
            second_song_info = all_songs[second_song]['title'] + ' by ' + all_songs[second_song]['artist']

            return render_template('base.html', first_song_info =first_song_info, second_song_info = second_song_info,  songs_second = songs_second, songs = songs, \
                data_loudness = all_songs[first_song]['loudness'], data_pitches = all_songs[first_song]['pitches'], \
                data_timbres = all_songs[first_song]['timbres'], data_energy = all_songs[first_song]['energy'],\
                data_loudness_1 = all_songs[second_song]['loudness'], data_pitches_1 = all_songs[second_song]['pitches'], \
                data_timbres_1 = all_songs[second_song]['timbres'], data_energy_1 = all_songs[second_song]['energy'])
        else:
            # Updating First Song
            first_song = path
            first_song_info = all_songs[first_song]['title'] + ' by ' + all_songs[first_song]['artist']
            second_song_info = all_songs[second_song]['title'] + ' by ' + all_songs[second_song]['artist']

            return render_template('base.html', first_song_info =first_song_info, second_song_info = second_song_info,  songs_second = songs_second, songs = songs, \
                data_loudness = all_songs[first_song]['loudness'], data_pitches = all_songs[first_song]['pitches'], \
                data_timbres = all_songs[first_song]['timbres'], data_energy = all_songs[first_song]['energy'],\
                data_loudness_1 = all_songs[second_song]['loudness'], data_pitches_1 = all_songs[second_song]['pitches'], \
                data_timbres_1 = all_songs[second_song]['timbres'], data_energy_1 = all_songs[second_song]['energy'])

@app.errorhandler(Exception)
def exception_handler(error):
    """
    Handles exceptions that are raised by the program during run time
    :param error: Error code that is raised
    :return: Error information
    """
    return 'ERROR ' + repr(error)


if __name__ == '__main__':

    path_to_json = 'static/data/songs'
    json_files = [pos_json for pos_json in os.listdir(path_to_json) if pos_json.endswith('.json')]
    for js in json_files:
        with open(os.path.join(path_to_json, js)) as json_file:
            # do something with your json; I'll just print
            key = js.split('-')[0]
            all_songs[key] = json.load(json_file)
    with open("static/data/list_of_songs.json", "r") as file_name:
        song_list = json.loads(file_name.read())
    for key, value in enumerate(song_list):
        songs.append({"name":value['name'] + ", " + value['artist'], "href":value['name']})
        songs_second.append({"name":value['name'] + ", " + value['artist'], "href":value['name'] + "_SECOND"})
	songs = sorted(songs)
	songs_second = sorted(songs_second)
    print(all_songs.keys())
    # print(all_songs.keys())
    app.run(host ='0.0.0.0', port = 5002)




