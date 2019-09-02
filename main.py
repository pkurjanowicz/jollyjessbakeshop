from flask import Flask, request, render_template, session, flash, redirect

app = Flask(__name__)
app.config["CACHE_TYPE"] = "null"
app.config['DEBUG'] = True

@app.route('/')
def homepage():
    return render_template('homepage.html')

@app.route("/about", methods=["GET"])
def aboutpage():
    return render_template('about.html')

@app.route("/cakes", methods=["GET"])
def cakes():
    return render_template('cakes.html')

@app.route("/cookies", methods=["GET"])
def cookies():
    return render_template('cookies.html')

@app.route("/cupcakes", methods=["GET"])
def cupcakes():
    return render_template('cupcakes.html')

@app.route("/brownies", methods=["GET"])
def brownies():
    return render_template('brownies.html')

@app.route("/contact-us", methods=["GET"])
def contact_us():
    return render_template('contact.html')

if __name__ == "__main__":
    app.run()