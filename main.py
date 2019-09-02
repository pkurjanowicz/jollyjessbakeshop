from flask import Flask, render_template, request, redirect, session, flash, url_for
from flask_sqlalchemy import SQLAlchemy 
import os

app = Flask(__name__)
app.config['DEBUG'] = True

project_dir = os.path.dirname(os.path.abspath(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///{}".format(os.path.join(project_dir, "jollyjess.db"))
# app.config['SQLALCHEMY_ECHO'] = True
db = SQLAlchemy(app)

class Contact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120))
    email = db.Column(db.String(120))
    phone = db.Column(db.String(120))

    def __init__(self, name ,email, phone):
        self.name = name
        self.email = email
        self.phone = phone

def contact_submit(template_string):
    name = request.form["name"]
    email = request.form["email"] 
    phone = request.form["phone"]   
    new_post = Contact(name,email,phone)
    db.session.add(new_post)
    db.session.commit()

@app.route('/', methods=["GET", "POST"])
def homepage():
    if request.method == "POST":
        contact_submit("homepage.html")
        return redirect("/")
    return render_template('homepage.html')

@app.route("/about", methods=["GET", "POST"])
def aboutpage():
    if request.method == "POST":
        contact_submit("about.html")
        return redirect("/about")
    return render_template('about.html')

@app.route("/cakes", methods=["GET", "POST"])
def cakes():
    if request.method == "POST":
        contact_submit("cakes.html")
        return redirect("/cakes")
    return render_template('cakes.html')

@app.route("/cookies", methods=["GET", "POST"])
def cookies():
    if request.method == "POST":
        contact_submit("cookies.html")
        return redirect("/cookies")
    return render_template('cookies.html')

@app.route("/cupcakes", methods=["GET", "POST"])
def cupcakes():
    if request.method == "POST":
        contact_submit("cupcakes.html")
        return redirect("/cupcakes")
    return render_template('cupcakes.html')

@app.route("/brownies", methods=["GET", "POST"])
def brownies():
    if request.method == "POST":
        contact_submit("brownies.html")
        return redirect("/brownies")
    return render_template('brownies.html')

@app.route("/contact-us", methods=["GET", "POST"])
def contact_us():
    if request.method == "POST":
        contact_submit("contact.html")
        return redirect("/contact-us")
    return render_template('contact.html')

if __name__ == "__main__":
    app.run()