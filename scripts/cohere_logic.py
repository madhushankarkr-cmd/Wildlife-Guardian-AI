import os
import cohere
co = cohere.Client(os.getenv("COHERE_API_KEY"))
def get_explanation(animal, threats, score):
    system_message = (
        "You are an expert Wildlife Conservationist and Data Scientist. "
        "Your goal is to explain AI detection results to non-experts."
    )
    
    user_message = f"""
    AI ANALYSIS REPORT:
    - Detected Animal: {animal}
    - Visible/Environmental Threats: {threats}
    - Calculated Risk Score: {score}/100

    TASK:
    1. Risk Explanation: Why is this specific {animal} at risk? 
       (If it's a Rhino, mention the critical danger of poaching for horns. 
       If it's an Elephant, mention ivory trade and habitat fragmentation.)
    
    2. Survival Impact: How does the threat of {threats} affect the long-term 
       survival of this species?

    3. Mitigation Actions: Provide 3 clear, actionable steps for local rangers 
       or conservation groups.

    Format the response with professional, urgent, yet hopeful language.
    """

    response = co.chat(
        model='command-r-plus-08-2024',
        message=user_message,
        preamble=system_message 
    )
    return response.text