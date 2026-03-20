from fastapi import FastAPI
from routers import products, orders, users

app = FastAPI(title="Smart Inventory System")

app.include_router(products.router)
app.include_router(orders.router)
app.include_router(users.router)