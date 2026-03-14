import os
from dotenv import load_dotenv 
from fastapi import FastAPI, UploadFile, File
load_dotenv() 
app = FastAPI() 
from scripts.detector import get_detections
from scripts.risk_engine import calculate_wildlife_risk
from scripts.cohere_logic import get_explanation
from utils.weather_service import get_environmental_factor
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Add this to allow the Frontend to talk to your AI
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, you'd specify your URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/analyze-wildlife")
async def analyze_wildlife(lat: float, lon: float, file: UploadFile = File(...)):
    try:
        print(f" Lat: {lat}, Lon: {lon}")
        
        temp_path = f"temp_{file.filename}"
        with open(temp_path, "wb") as buffer:
            buffer.write(await file.read())
        print("File saved temporarily")

        raw_detections = get_detections(temp_path)
        print(f"Raw Detections from Roboflow: {raw_detections}")

        id_map = {"0": "buffalo", 
            "1": "elephant", 
            "2": "rhino",   
            "3": "zebra"
        }
        

        detections = [id_map.get(d, d) for d in raw_detections]
        
        primary_animal = detections[0] if detections else "Unknown Species"
        print(f"Mapped Animal: {primary_animal}")

        threat_context = "Habitat Fragmentation/Degradation" if "rhino" in detections else "General Environmental Risk"
        
        weather_factor = get_environmental_factor(lat, lon)
        print(f" Weather factor: {weather_factor}")
        
        risk_score = calculate_wildlife_risk(detections, weather_factor)
        print(f"Risk score calculated: {risk_score}")
        explanation = get_explanation(primary_animal, threat_context, risk_score)
        
        os.remove(temp_path)

        return {
            "detections": detections,
            "primary_animal": primary_animal,
            "risk_score": risk_score,
            "environmental_impact": "High" if weather_factor > 1.0 else "Low",
            "explanation": explanation,
            "map_marker_color": "red" if primary_animal in ["rhino", "hippo"] else ("yellow" if risk_score > 30 else "green"),
            "actionable_insight": "Immediate response required" if risk_score > 75 else "Monitor situation"
        }

    except Exception as e:
        print(f"ERROR: {str(e)}")
        if os.path.exists(temp_path): os.remove(temp_path)
        return {"error": str(e),}