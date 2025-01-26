from flask import Flask, render_template, request, redirect, jsonify, send_file, abortimport os

app = Flask(__name__)
app.secret_key = 'your_secret_key'


@app.route("/")
def index():
    return render_template("index.html")

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 8080))
    app.run(debug=True, host='0.0.0.0', port=port)