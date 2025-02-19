from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests

# Configure a separate SQLite database for AI Agent contacts
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///aiagent_contacts.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Define the model for AI Agent contact submissions
class AIContact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(100), nullable=False)
    last_name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    phone = db.Column(db.String(20), nullable=False)
    message = db.Column(db.Text, nullable=False)

# Create the database tables (if they don't exist)
with app.app_context():
    db.create_all()

@app.route('/aiagent_submit', methods=['POST'])
def aiagent_submit():
    try:
        # Retrieve form data
        first_name = request.form.get('first_name')
        last_name = request.form.get('last_name')
        email = request.form.get('email')
        phone = request.form.get('phone')
        message = request.form.get('message')
        
        # Validate all fields are provided
        if not all([first_name, last_name, email, phone, message]):
            return jsonify({"error": "All fields are required."}), 400
        
        # Save the new contact
        new_contact = AIContact(
            first_name=first_name,
            last_name=last_name,
            email=email,
            phone=phone,
            message=message
        )
        db.session.add(new_contact)
        db.session.commit()
        
        return jsonify({"message": "Form submitted successfully!"})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    # Run on port 5001 to avoid conflict with your other Flask apps
    app.run(debug=True, port=5001)
