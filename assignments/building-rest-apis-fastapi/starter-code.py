from fastapi import FastAPI

app = FastAPI()

items = [
    {"id": 1, "name": "Example item", "done": False},
]


@app.get("/")
def read_root():
    return {"message": "Welcome to the API!"}


@app.get("/items")
def get_items():
    return {"items": items}
