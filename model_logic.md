# Model Logic – Wildlife Guardian AI

## Purpose
This document explains the basic logic used by Wildlife Guardian AI to detect animals, identify threats, and calculate the Wildlife Risk Score.

---

## Step 1: Image Input
Users upload an image or video containing wildlife.

Example sources:
- Camera trap images
- Satellite images
- Photos uploaded by citizens
- NGO wildlife monitoring systems

---

## Step 2: Animal Detection

The AI model detects animals using a pre-trained object detection model.

Possible models:
- YOLOv8
- TensorFlow Object Detection
- OpenCV detection models

The model identifies:
- Animal species
- Number of animals in the image
- Location of the animal in the image

Example Output:

Tiger detected  
Confidence: 92%

---

## Step 3: Threat Detection

The system scans the image for environmental threats.

Threat indicators include:
- Plastic waste
- Fishing nets
- Fire or smoke
- Deforestation
- Humans or weapons (poaching)

Example:

Tiger detected near humans → Possible Poaching Risk

---

## Step 4: Base Risk from Species

Each species has a **base risk score** based on its IUCN Red List status.

| Status | Risk Score |
|------|------|
| Critically Endangered (CR) | 95 |
| Endangered (EN) | 85 |
| Vulnerable (VU) | 70 |

Example:

Black Rhino → CR → Base Risk = 95

---

## Step 5: Threat Weight Addition

Each detected threat has a weight value.

Example:

| Threat | Weight |
|------|------|
| Poaching | +25 |
| Plastic Pollution | +20 |
| Habitat Loss | +18 |
| Climate Change | +20 |

---

## Step 6: Final Risk Score

Formula:

Final Risk Score = Base Risk + Threat Weight

Maximum score is capped at **100**.

Example:

Tiger (Base Risk 85)  
Threat: Poaching (+25)

Final Score = 100

---

## Step 7: Heatmap Update

Once risk is calculated:

The system updates the **global wildlife threat heatmap**.

Color scale example:

Green → Low Risk  
Yellow → Medium Risk  
Red → High Risk

This helps conservation teams quickly identify high-risk areas.

---

## MVP Note

For the hackathon prototype:
- Pre-trained models will be used
- Detection accuracy may vary
- Focus is on **concept demonstration and impact visualization**