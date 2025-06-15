import os
from flask import Blueprint, request, jsonify
from werkzeug.utils import secure_filename
from flask_jwt_extended import jwt_required, get_jwt_identity
from extensions import db
from models import DonationItem

donations_bp = Blueprint('donations', __name__)

UPLOAD_FOLDER = 'uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@donations_bp.route('/upload', methods=['POST'])
@jwt_required()  # ✅ Only logged-in users can donate
def upload_donation():
    current_user = get_jwt_identity()  # ✅ Get username from token

    item_name = request.form.get('item_name')
    message = request.form.get('message')
    image = request.files.get('image')

    if not item_name:
        return jsonify({'msg': 'Item name is required'}), 400

    image_filename = None
    if image:
        filename = secure_filename(image.filename)
        image_path = os.path.join(UPLOAD_FOLDER, filename)
        image.save(image_path)
        image_filename = filename

    donation = DonationItem(
        item_name=item_name,
        donor_name=current_user,  # ✅ use username from JWT
        message=message,
        image_path=image_filename
    )
    db.session.add(donation)
    db.session.commit()

    return jsonify({'msg': 'Donation submitted!'}), 201
