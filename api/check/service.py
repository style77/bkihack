from typing import Any
from api.check.schemas import ChatPayload
from api.settings import settings
import httpx

EDENAI_HEADERS = {
    "Authorization": f"Bearer {settings.EDENAI_API_KEY}",
    "Content-Type": "application/json"
}

class CheckService:
    EDENAI_API_URL = "https://api.edenai.run/v2/"

    def request_edenai(self, url: str, payload: ChatPayload):
        return httpx.post(self.EDENAI_API_URL + url, json=payload.model_dump(), headers=EDENAI_HEADERS)

    def chat(self, payload: ChatPayload):
        response = self.request_edenai(
            "text/chat",
            payload
        )
        return response.json()

service = CheckService()