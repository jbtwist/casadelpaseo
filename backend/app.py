from flask import Flask, render_template, Blueprint

frontend = Blueprint('frontend', __name__, url_prefix='/frontend')
backend = Blueprint('backend', __name__, url_prefix='/backend')

app = Flask(__name__,
            static_folder='../frontend/build/static',
            static_url_path='/',
            template_folder='../frontend/templates'
            )

app.register_blueprint(frontend)
app.register_blueprint(backend)


@app.route('/')
def index():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True)
