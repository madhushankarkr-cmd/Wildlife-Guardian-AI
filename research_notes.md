# Wildlife Guardian AI – Research Notes

## 1. Species Selection
- Focused on **endangered and critically endangered species** globally.
- Selected species have **available images** for AI detection.
- **20 priority species** include: Tiger, Black Rhinoceros, Pangolin, Sea Turtle, Polar Bear, Orangutan, Snow Leopard, Asian Elephant, Giant Panda, Blue Whale, African Elephant, Green Sea Turtle, Snow Monkey, Red Panda, Leatherback Turtle, Cheetah, Gorilla, Whale Shark, Komodo Dragon, Hawksbill Turtle.

---

## 2. Threats and Risk Factors

| Threat Type         | Explanation                                    | Example Species                    | Risk Impact |
|---------------------|------------------------------------------------|------------------------------------|-------------|
| Poaching            | Hunted for skins, horns, or bones              | Tiger, Black Rhino, Pangolin       | Very High   |
| Plastic Pollution   | Ingestion, entanglement, habitat contamination | Sea Turtle, Leatherback Turtle     | Very High   |
| Habitat Loss        | Deforestation, urban expansion                 | Orangutan, Panda, Snow Leopard     | High        |
| Climate Change      | Melting ice, temperature changes               | Polar Bear                         | High        |
| Ship Collisions / Fishing | Injuries from human activity             | Blue Whale, Whale Shark            | High        |
| Wildfire            | Fires destroy habitat                          | Forest species                     | Medium       |
---

## 3. Risk Scoring Logic
- **Base Risk**: Assigned per species based on **IUCN Red List status**  
- Critically Endangered (CR) → 95  
- Endangered (EN) → 85  
- Vulnerable (VU) → 70  
- **Threat Impact**: Added to base risk according to severity  
- **Total Risk Score** = Base Risk + Threat Weight (0–100)  
- Used for **priority ranking and heatmap visualization**  

---

## 4. AI Usage
- Species dataset + threat mapping = AI inputs  
- Test cases validate detection and risk scoring  
- Generates **Wildlife Risk Score** and **explanations**  
- Scores feed into **global heatmap visualization** for awareness  

---

## 5. Sources
- [IUCN Red List](https://www.iucnredlist.org/)  
- [WWF Species Reports](https://www.worldwildlife.org/species)  
- National Geographic – Wildlife Threats