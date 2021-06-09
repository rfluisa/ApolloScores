from flask import Flask, render_template

app = Flask(__name__, template_folder='templates')

@app.route('/')
@app.route('/inicio')
def init():
    return render_template('index.html', titulo="ApolloScores")

if __name__ == '__main__':
    app.run()