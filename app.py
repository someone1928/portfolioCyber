from flask import Flask
from routes.main import main_bp
from config import Config


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # Register Blueprints
    app.register_blueprint(main_bp)

    return app


app = create_app()


if __name__ == "__main__":
    app.run(debug=True)