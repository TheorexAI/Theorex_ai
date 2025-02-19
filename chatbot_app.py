from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Configure a separate SQLite database for chatbotweb.html
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///chatbot_contacts.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Define the Contact model for chatbot submissions
class ChatbotContact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    phone = db.Column(db.String(20), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    message = db.Column(db.Text, nullable=False)

# Create the database tables
with app.app_context():
    db.create_all()

@app.route('/chatbot_submit', methods=['POST'])
def chatbot_submit():
    try:
        name = request.form.get('name')
        phone = request.form.get('phone')
        email = request.form.get('email')
        message = request.form.get('message')

        if not (name and phone and email and message):
            return jsonify({"error": "All fields are required"}), 400

        new_contact = ChatbotContact(name=name, phone=phone, email=email, message=message)
        db.session.add(new_contact)
        db.session.commit()

        return jsonify({"message": "Form submitted successfully!"})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
