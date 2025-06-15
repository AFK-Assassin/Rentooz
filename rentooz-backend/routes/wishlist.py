from flask import Blueprint, request, jsonify
from models import WishlistItem
from extensions import db

wishlist_bp = Blueprint('wishlist', __name__)

@wishlist_bp.route('/', methods=['GET'], strict_slashes=False)
def get_wishlist():
    user_id = request.args.get('user_id')
    if not user_id:
        return jsonify({'msg': 'user_id is required'}), 400

    items = WishlistItem.query.filter_by(user_id=user_id).all()
    wishlist = [
        {
            'id': item.id,
            'title': item.title,
            'description': item.description
        } for item in items
    ]
    return jsonify(wishlist), 200

@wishlist_bp.route('/', methods=['POST'], strict_slashes=False)
def add_to_wishlist():
    data = request.get_json()
    user_id = data.get('user_id')
    title = data.get('title')
    description = data.get('description')

    print(f"Received data: user_id={user_id}, title={title}, description={description}")

    if not user_id or not title:
        return jsonify({'msg': 'user_id and title are required'}), 400

    exists = WishlistItem.query.filter_by(title=title, user_id=user_id).first()
    if exists:
        print("Item already exists in wishlist.")
        return jsonify({'msg': 'Item already in wishlist'}), 200

    try:
        new_item = WishlistItem(title=title, description=description, user_id=user_id)
        db.session.add(new_item)
        db.session.commit()
        print("Item added successfully.")
        return jsonify({'msg': 'Item added to wishlist'}), 201
    except Exception as e:
        print("Error while adding item to wishlist:", str(e))
        db.session.rollback()
        return jsonify({'msg': 'Error while adding item'}), 500

@wishlist_bp.route('/<int:item_id>', methods=['DELETE'], strict_slashes=False)
def delete_wishlist_item(item_id):
    item = WishlistItem.query.get(item_id)
    if not item:
        return jsonify({'msg': 'Item not found'}), 404

    try:
        db.session.delete(item)
        db.session.commit()
        return jsonify({'msg': 'Item deleted successfully'}), 200
    except Exception as e:
        print("Error while deleting wishlist item:", str(e))
        db.session.rollback()
        return jsonify({'msg': 'Error while deleting item'}), 500
