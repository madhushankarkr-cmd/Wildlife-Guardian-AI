import os
from dotenv import load_dotenv
load_dotenv()

cohere_key = os.getenv("COHERE_API_KEY")
weather_key = os.getenv("WEATHER_API_KEY")

if cohere_key and weather_key:
    print("Your .env file is connected.")
    print(f"Cohere Key found: {cohere_key[:5]}")
    print(f"Weather Key found: {weather_key[:5]})")
else:
    if not cohere_key:
        print("COHERE_API_KEY not found in .env")
    if not weather_key:
        print("WEATHER_API_KEY not found in .env")