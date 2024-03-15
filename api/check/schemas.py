from typing import List, Optional
from pydantic import BaseModel


class CheckRequest(BaseModel):
    # Post text to be checked
    post_text: str


class CheckResponse(BaseModel):
    # Damage score of the post 0-1 in float
    damage_score: float
    # AI generated comment about how the post is damaging other users
    explanation: str


class ImageCheckRequest(BaseModel):
    # Image file to be checked
    file_url: str


class ImageCheckResponse(BaseModel):
    potential_tw: str
    score: float


class ChatPayload(BaseModel):
    providers: str = "openai"
    text: str
    chatbot_global_action: Optional[str] = "Act as an assistant."
    previous_history: List[str] = []
    temperature: float = 0.0
    max_tokens: int = 225
    fallback_providers: Optional[str] = ""


class ImagePayload(BaseModel):
    providers: str = "amazon"
    file_url: str
    fallback_providers: Optional[str] = ""