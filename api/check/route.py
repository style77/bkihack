import json
from fastapi import APIRouter
from api.check.schemas import ChatPayload, CheckRequest, CheckResponse, ImageCheckRequest, ImageCheckResponse, ImagePayload
from api.check.service import service

router = APIRouter()

QUERY = """
Oceń i przeanalizuj post, pod kątem potencjalnego zagrożenia dla innych. Podaj 'damageRatio' w skali od 0 do 1, gdzie 0-0.3 oznacza bezpieczny post, 0.3-0.7 wskazuje na post z potencjalnie szkodliwą lub pełną nienawiści treścią, a 0.7-1 wskazuje na post zawierający nękanie, rasizm lub terroryzm. Jeśli post jest szkodliwy, podaj 'explanation', dlaczego taka treść jest nieodpowiednia i jak można ją poprawić, aby była bezpieczna i odpowiednia. Jeśli post jest bezpieczny, wyjaśnienie nie jest potrzebne (Podaj je jako pusty string ""). Wyjście powinno być w surowym formacie JSON dla łatwego parsowania. Odpowiedz w tym samym języku, co treść posta.
Limit znakow w wyjasnieniu to okolo 150. Uwazaj, zeby nie przesadzac nazwy seriali, ksiazek, filmow nie sa niczym zlym, tak samo jak fakty, newsy i wydarzenia historyczne.

Przykładowe wyjście:
{
"damageRatio": 0.6,
"explanation": "Post zawiera negatywne emocje i może być potencjalnie szkodliwy dla innych. Zamiast wyrażać negatywne uczucia w taki sposób, można napisać: 'Mam problem z tym, co zrobiłeś. Możemy o tym porozmawiać?'"
}

Tresc postu: 
"""


@router.post("/post")
async def check_post(data: CheckRequest):
    q = QUERY + f'"{data.post_text}"'
    payload = ChatPayload(text=q)

    response = await service.chat(payload)
    print(response.get("openai")["generated_text"])
    parsed_response = json.loads(response.get("openai")["generated_text"])
    damage_score = float(parsed_response.get("damageRatio"))
    explanation = parsed_response.get("explanation")
    return CheckResponse(damage_score=damage_score, explanation=explanation)


@router.post("/image")
async def check_image(data: ImageCheckRequest):
    payload = ImagePayload(file_url=data.file_url)
    response = await service.image_detect(payload)
    print(response)
    item = response["amazon"]["items"][0]
    potential_tw = item["label"]
    score = item["likelihood_score"]
    return ImageCheckResponse(potential_tw=potential_tw, score=score)
