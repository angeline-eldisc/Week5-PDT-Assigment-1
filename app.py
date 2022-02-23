from urllib import response
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('home.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/convert_score_to_letter', methods=['GET', 'POST'])
def convertScoreToLetter():
    if request.method == 'GET':
        return render_template('convertScoreToLetter.html')
    else:
        response = {}
        data = request.get_json()
        if data.get('letter'):
            letter = data['letter']
            message = letter
            
            response = {'status': 500, 'result': letter}
        else:
            response = {'status': 500, 'result': 'Error'}
    return jsonify(response), message

@app.route('/square_root', methods=['GET', 'POST'])
def squareRoot():
    if request.method == 'GET':
        return render_template('squareRoot.html')
    else:
        response = {}
        data = request.get_json()
        if data.get('num'):
            squareRoot = data['num']
            
            response = {'status': 500, 'result': squareRoot}
        else:
            response = {'status': 500, 'result': 'Error'}
    return jsonify(response)

@app.route('/hypotenuse', methods=['GET', 'POST'])
def findHypotenuse():
    if request.method == 'GET':
        return render_template('hypotenuse.html')
    else:
        response = {}
        data = request.get_json()
        if data.get('hypotenuse'):
            hypotenuse = data['hypotenuse']
            
            response = {'status': 500, 'result': hypotenuse}
        else:
            response = {'status': 500, 'result': 'Error'}
    return jsonify(response)