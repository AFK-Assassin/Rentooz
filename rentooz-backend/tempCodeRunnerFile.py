from flask import Flask
from flask_cors import CORS
from extensions import db, jwt  # ✅ use db and jwt from extensions
from models import User, WishlistItem, DonationItem  # ✅ now safe

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite3'
app.config['JWT_SECRET_KEY'] = 'your-secret-key'

db.init_app(app)
jwt.init_app(app)
CORS(app)

# Import routes (blueprints)
from routes.auth import auth_bp
from routes.items import items_bp
from routes.wishlist import wishlist_bp
from routes.donations import donations_bp

# Register blueprints
app.register_blueprint(auth_bp, url_prefix='/api/auth')
app.register_blueprint(items_bp, url_prefix='/api/items')
app.register_blueprint(wishlist_bp, url_prefix='/api/wishlist')
app.register_blueprint(donations_bp, url_prefix='/api/donate')

@app.route('/')
def home():
    return 'Rentooz Backend is Running!'

# Run the app
if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
