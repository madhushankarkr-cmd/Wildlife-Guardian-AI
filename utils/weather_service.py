import os 
import requests

def get_environmental_factor(lat, lon):
    import os, requests
    api_key = os.getenv('WEATHER_API_KEY')
    url = f"http://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={api_key}"
    
    try:
        response = requests.get(url)
        data = response.json()
        
        if response.status_code != 200:
            print(f"{response.status_code}")
            return 1.0
            
        weather_condition = data['weather'][0]['main'].lower()
        if weather_condition in ['thunderstorm', 'flood', 'rain', 'extreme']:
            return 1.5  
        return 1.0     
    except Exception as e:
        print(f"{e}")
        return 1.0