# /run.py
import os
from dotenv import load_dotenv, find_dotenv

from src.app import create_app
from src.models import UserModel, BlogpostModel, db
from flask_migrate import Migrate
load_dotenv(find_dotenv())

env_name = os.getenv('FLASK_ENV')
app = create_app(env_name)
migrate = Migrate(app, db)

@app.shell_context_processor
def make_shell_context():
    return dict(app=app, db=db, UserModel=UserModel, BlogpostModel=BlogpostModel)

if __name__ == '__main__':
  port = os.getenv('PORT')
  # run app
  app.run(host='0.0.0.0', port=port)
