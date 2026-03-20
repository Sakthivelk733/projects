from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import SessionLocal
from models import Product

router = APIRouter(prefix="/products", tags=["Products"])

def db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/")
def get_products(db: Session = Depends(db)):
    return db.query(Product).all()

@router.post("/")
def add_product(data: dict, db: Session = Depends(db)):
    new_product = Product(
        name=data["name"],
        sku=data["sku"],
        stock=data["stock"],
        price=data["price"]
    )
    db.add(new_product)
    db.commit()
    return {"message": "Product Added"}