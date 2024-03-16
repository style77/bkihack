from typing import Any, Union
from api.check.schemas import ChatPayload, ImagePayload
from api.settings import settings
import httpx

EDENAI_HEADERS = {
    "Authorization": f"Bearer {settings.EDENAI_API_KEY}",
    "Content-Type": "application/json"
}

CACHE = {}

class CheckService:
    EDENAI_API_URL = "https://api.edenai.run/v2/"

    def get_cached_response(self, content: str):
        if content in CACHE:
            return CACHE[content]
        return None

    async def request_edenai(self, url: str, payload: Union[ChatPayload, ImagePayload]):
        if isinstance(payload, ChatPayload):
            cached_response = get_cached_response(payload.text)
            if cached_response:
                return cached_response
                
        async with httpx.AsyncClient() as client:
            response = await client.post(self.EDENAI_API_URL + url, json=payload.model_dump(), headers=EDENAI_HEADERS)
            data = response.json()
            if isinstance(payload, ChatPayload):
                CACHE[payload.text] = data
            return data

    async def chat(self, payload: ChatPayload):
        response = await self.request_edenai(
            "text/chat",
            payload
        )
        return response

    async def image_detect(self, payload: ImagePayload):
        response = await self.request_edenai(
            "image/explicit_content",
            payload
        )
        return response

service = CheckService()