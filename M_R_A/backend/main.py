from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
from bson.objectid import ObjectId
import os

def serialize_doc(doc):
    if "_id" in doc:
        doc["_id"] = str(doc["_id"])
    return doc

# Create FastAPI app
app = FastAPI()

# Add CORS middleware (must be right after app creation)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost",
				   "http://localhost:3000"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load MongoDB env vars
MONGODB_URI = os.getenv("MONGODB_URI")
MONGODB_DATABASE = os.getenv("MONGODB_DATABASE")
MONGODB_COLLECTION = os.getenv("MONGODB_COLLECTION")

# Connect to MongoDB
client = MongoClient(MONGODB_URI)
db = client[MONGODB_DATABASE]
collection = db[MONGODB_COLLECTION]

client = MongoClient(MONGODB_URI)

db = client["ai_agents"]
collection = db["full_docs"]

# Routes
@app.get("/documents")
def get_documents(
    title: str = Query(None, description="Case-insensitive partial match for document title"),
    tag: str = Query(None, description="Tag to filter documents")
):
    query = {}
    if title:
        query["title"] = {"$regex": title, "$options": "i"}
    if tag:
        query["metadata.tags"] = tag

    documents = collection.find(query)
    return [serialize_doc(doc) for doc in documents]


from fastapi import HTTPException

@app.get("/documents/{document_id}")
def get_document(document_id: str):
    document = collection.find_one({"_id": ObjectId(document_id)})
    if not document:
        raise HTTPException(status_code=404, detail="Document not found")

    return serialize_doc(document)

