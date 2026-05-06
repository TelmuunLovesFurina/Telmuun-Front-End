import json
from pathlib import Path

path = Path(__file__).resolve().parent.parent / "src" / "utils" / "data.json"
with path.open("r", encoding="utf-8") as f:
    data = json.load(f)

url1 = "https://ridermagazine.com/wp-content/uploads/2010/10/2011-Kawasaki-Ninja-ZX-10R-21.jpg"
url2 = "https://tiimg.tistatic.com/fp/1/008/366/white-school-chalk-for-black-board-350.jpg"
updated_1 = updated_2 = 0
for item in data:
    if "item_1" in item:
        item["item_1"] = url1
        updated_1 += 1
    if "item_2" in item:
        item["item_2"] = url2
        updated_2 += 1

with path.open("w", encoding="utf-8") as f:
    json.dump(data, f, indent=4, ensure_ascii=False)

print(f"updated item_1: {updated_1}, updated item_2: {updated_2}")