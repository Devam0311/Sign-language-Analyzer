from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Dict
import numpy as np
import cv2
from keras.models import load_model

app = FastAPI()

# Allow our React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load model once
try:
    model = load_model("sign_language_model.h5")
except Exception as e:
    raise RuntimeError(f"Failed to load model: {e}")

index_to_letter = {
    0:'A',1:'B',2:'C',3:'D',4:'E',
    5:'F',6:'G',7:'H',8:'I',9:'K',
    10:'L',11:'M',12:'N',13:'O',14:'P',
    15:'Q',16:'R',17:'S',18:'T',19:'U',
    20:'V',21:'W',22:'X',23:'Y',24:'Z'
}
BOX_W, BOX_H = 200, 200

def process_image(image_bytes: bytes) -> str:
    arr = np.frombuffer(image_bytes, np.uint8)
    img = cv2.imdecode(arr, cv2.IMREAD_COLOR)
    if img is None:
        return "❌"
    crop = img[0:BOX_H, 0:BOX_W]
    gray = cv2.cvtColor(crop, cv2.COLOR_BGR2GRAY)
    resized = cv2.resize(gray, (28, 28))
    x = resized.astype("float32") / 255.0
    x = np.expand_dims(x, axis=(0, -1))  # (1,28,28,1)

    preds = model.predict(x)[0]
    idx = int(np.argmax(preds))
    if float(preds[idx]) < 0.6:
        return "❌"
    return index_to_letter.get(idx, "?")

@app.post("/predict")
async def predict(files: List[UploadFile] = File(...)) -> Dict[str, str]:
    """
    Accepts one or more images under field name "files",
    returns a single string of predicted letters.
    """
    try:
        letters = []
        for f in files:
            b = await f.read()
            letters.append(process_image(b))
        word = "".join(letters)
        return {"letter": f"👑 YOUR WORD IS HERE MONARCH : {word}"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
