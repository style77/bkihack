from fastapi import FastAPI
from api.check.route import router as check_router


app = FastAPI()

app.include_router(check_router)