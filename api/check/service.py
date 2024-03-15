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

    async def request_edenai(self, url: str, payload: ChatPayload):
        async with httpx.AsyncClient() as client:
            return await client.post(self.EDENAI_API_URL + url, json=payload.model_dump(), headers=EDENAI_HEADERS)

    async def chat(self, payload: ChatPayload):
        response = await self.request_edenai(
            "text/chat",
            payload
        )
        return response.json()

service = CheckService()