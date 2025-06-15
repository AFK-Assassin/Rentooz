from flask import Blueprint, jsonify

items_bp = Blueprint('items', __name__)

@items_bp.route('/featured', methods=['GET'])
def get_featured_items():
    return jsonify([
        {'id': 1, 'name': 'Electric Drill', 'price': 150, 'image': '/images/drill.jpg'},
        {'id': 2, 'name': 'Camping Tent', 'price': 100, 'image': '/images/tent.jpg'}
    ])