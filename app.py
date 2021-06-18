from flask import Flask, Response, render_template, request, redirect, url_for
from werkzeug.utils import secure_filename
import os

##app name
app = Flask(__name__, template_folder='templates')

##encryption key
app.secret_key = "banane"

##absolute path
path = os.getcwd()
UPLOAD_FOLDER = os.path.join(path, 'uploads')

if not os.path.isdir(UPLOAD_FOLDER):
    os.mkdir(UPLOAD_FOLDER)

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/')
def index():
    return render_template('index.html', titulo="ApolloScores")

@app.route('/', methods=['GET','POST'])
def upload_file():
    try:
        if request.method == 'POST':
            file = request.files['file']
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))            
            print('Filename:', file.filename)
            
            freshly_loaded_file_again_for_no_reason = open(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            contents = freshly_loaded_file_again_for_no_reason.read()
            freshly_loaded_file_again_for_no_reason.close()
            print('Contents', contents)
            return Response(contents, mimetype='text/xml')
        
    except Exception as exc:
        print(exc)



if __name__ == '__main__':
    app.run()