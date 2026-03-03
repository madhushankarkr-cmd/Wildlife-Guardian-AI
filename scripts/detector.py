import os
from inference import get_model

_model = None

def get_detections(image_path):
    global _model
    if _model is None:
        api_key = os.getenv("ROBOFLOW_API_KEY")
        _model = get_model(model_id="african-wildlife-detection/1", api_key=api_key)
    
    results = _model.infer(image_path)[0]
    return [p.class_name for p in results.predictions]