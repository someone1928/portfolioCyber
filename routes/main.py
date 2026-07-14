from flask import Blueprint, render_template

# Blueprint
main_bp = Blueprint("main", __name__)


# ============================
# Home
# ============================
@main_bp.route("/")
def index():
    return render_template("index.html")


# ============================
# About
# ============================
@main_bp.route("/about")
def about():
    return render_template("about.html")


# ============================
# Projects
# ============================
@main_bp.route("/projects")
def projects():
    return render_template("projects.html")


# ============================
# HTB Writeups
# ============================
@main_bp.route("/writeups")
def writeups():
    return render_template("writeups.html")


# ============================
# Blog
# ============================
@main_bp.route("/blog")
def blog():
    return render_template("blog.html")


# ============================
# Contact
# ============================
@main_bp.route("/contact")
def contact():
    return render_template("contact.html")


# ============================
# 404 Error Page
# ============================
@main_bp.app_errorhandler(404)
def page_not_found(error):
    return render_template("404.html"), 404