from flask import Flask,render_template
app = Flask(__name__)

#追記：flask_httpauth のインポート
from flask_httpauth import HTTPBasicAuth

#追記：認証機能を変数に代入
auth = HTTPBasicAuth()

#追記：認証に使用するユーザ名とパスワードを設定
users = {
    "admin": "password"
}

#追記：認証関数
@auth.get_password
def get_pw(username):
    if username in users:
        return users.get(username)
    return None

@app.route('/')
def topView():
    return render_template("index.html")
