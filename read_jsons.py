import json
import os
from pathlib import Path

resources_dir = Path("resources")
json_files = sorted(resources_dir.glob("*.json"))

for i, json_file in enumerate(json_files):
    print(f"{json_file.name}\n--")
    
    with open(json_file, "r", encoding="utf-8") as f:
        data = json.load(f)
    
    if isinstance(data, dict) and "items" in data and len(data["items"]) > 0:
        print(json.dumps(data["items"][0], indent=2, ensure_ascii=False))
    elif isinstance(data, list) and len(data) > 0:
        print(json.dumps(data[0], indent=2, ensure_ascii=False))
    else:
        print("No items found")
    
    if i < len(json_files) - 1:
        print("--")