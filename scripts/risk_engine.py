def calculate_wildlife_risk(detections, weather_factor):
    if weather_factor is None:
        weather_factor = 1.0
        
        
    status_weights = {"rhino": 1.8, "elephant": 1.3, "hippo": 1.4}
    is_high_risk_species = any(d in ["rhino", "hippo"] for d in detections)
    base_threat = 1.5 if is_high_risk_species else 1.0
    status = max([status_weights.get(d, 1.0) for d in detections])
    
    risk_score = (base_threat * status * len(detections)) * weather_factor * 10
    return min(risk_score, 100)