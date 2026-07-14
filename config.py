import os

# Base directory of the project
BASE_DIR = os.path.abspath(os.path.dirname(__file__))


class Config:
    """Base configuration for the Cyber Portfolio."""

    # ==========================
    # Security
    # ==========================
    SECRET_KEY = os.environ.get(
        "SECRET_KEY",
        "change-this-to-a-long-random-secret-key"
    )

    # ==========================
    # Upload Settings
    # ==========================
    UPLOAD_FOLDER = os.path.join(BASE_DIR, "static", "uploads")
    DOWNLOAD_FOLDER = os.path.join(BASE_DIR, "static", "downloads")

    MAX_CONTENT_LENGTH = 500 * 1024 * 1024  # 500 MB

    # ==========================
    # Database
    # ==========================
    SQLALCHEMY_DATABASE_URI = os.environ.get(
        "DATABASE_URL",
        f"sqlite:///{os.path.join(BASE_DIR, 'instance', 'portfolio.db')}"
    )

    SQLALCHEMY_TRACK_MODIFICATIONS = False

    # ==========================
    # Website Information
    # ==========================
    SITE_NAME = "Ani Cyber Portfolio"

    AUTHOR = "Animesh Acharya"

    VERSION = "1.0.0"

    COPYRIGHT = "© 2026 Animesh Acharya"

    # ==========================
    # Pagination
    # ==========================
    POSTS_PER_PAGE = 6

    PROJECTS_PER_PAGE = 6

    WRITEUPS_PER_PAGE = 6

    # ==========================
    # Theme
    # ==========================
    DEFAULT_THEME = "cyber-purple"

    # ==========================
    # Download Settings
    # ==========================
    ALLOWED_EXTENSIONS = {
        "zip",
        "7z",
        "rar",
        "ova",
        "ovf",
        "vmdk",
        "pdf",
        "png",
        "jpg",
        "jpeg",
        "gif",
        "md"
    }