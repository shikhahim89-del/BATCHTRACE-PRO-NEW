from flask import Flask, jsonify, request
from flask_cors import CORS

# Create Flask app
app = Flask(__name__)

# Enable CORS (VERY IMPORTANT for React)
CORS(app)

# Dummy data
items = [
    {"id": 1, "name": "Item 1"},
    {"id": 2, "name": "Item 2"},
    {"id": 3, "name": "Item 3"}
]

# ---------------- ROUTES ----------------

# GET all items
@app.route("/api/items", methods=["GET"])
def get_items():
    return jsonify(items)

# GET single item by id
@app.route("/api/items/<int:item_id>", methods=["GET"])
def get_item(item_id):
    item = next((i for i in items if i["id"] == item_id), None)
    if item:
        return jsonify(item)
    return jsonify({"error": "Item not found"}), 404

# POST add new item
@app.route("/api/items", methods=["POST"])
def add_item():
    data = request.json
    new_item = {
        "id": len(items) + 1,
        "name": data.get("name")
    }
    items.append(new_item)
    return jsonify(new_item), 201

# PUT update item
@app.route("/api/items/<int:item_id>", methods=["PUT"])
def update_item(item_id):
    data = request.json
    for item in items:
        if item["id"] == item_id:
            item["name"] = data.get("name")
            return jsonify(item)
    return jsonify({"error": "Item not found"}), 404

# DELETE item
@app.route("/api/items/<int:item_id>", methods=["DELETE"])
def delete_item(item_id):
    global items
    items = [i for i in items if i["id"] != item_id]
    return jsonify({"message": "Item deleted"})


# ---------------- RUN SERVER ----------------
if __name__ == "__main__":
    app.run(debug=True, host="127.0.0.1", port=5000)