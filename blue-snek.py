from flask_frozen import Freezer
from pools import app

blue_snek = Freezer(app)

if __name__ == '__main__':
    blue_snek.freeze()
