from typing import List
from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    EDENAI_API_KEY: str

    class Config:
        env_file = ".env"


settings = Settings()