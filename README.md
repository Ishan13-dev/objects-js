# JavaScript Objects Practice (`objects-js`)

A collection of JavaScript exercises and mini-projects focused on mastering object manipulation, nested data structures, non-mutating updates, and dynamic property access.

---

## 📂 Repository Contents

### 1. Animal Object Manager
Demonstrates core CRUD operations on JavaScript objects:
- **Dot vs. Bracket Notation:** Accessing static keys (`animal.species`) vs. dynamic variable keys (`animal[propertyName]`).
- **Property Mutation:** Adding new keys (`habitat`), updating values (`age`), and removing properties with the `delete` operator.
- **Existence Checks:** Verifying direct object properties using `.hasOwnProperty()`.

### 2. Cargo Manifest Validator
A data-normalization and schema-validation utility for shipping manifests:
- **Immutability (`normalizeUnits`):** Uses the spread operator (`{ ...manifest }`) to clone objects and convert weights from pounds (`lb`) to kilograms (`kg`) without mutating the original input.
- **Schema Validation (`validateManifest`):** Checks required fields (`containerId`, `destination`, `weight`, `unit`, `hazmat`) for missing keys or invalid data types (`NaN`, non-integers, empty trimmed strings).
- **Pipeline Logging (`processManifest`):** Combines validation and unit normalization to output structured status logs.

### 3. Recipe Tracker
Illustrates storing objects inside arrays and updating properties by reference:
- Computes derived metadata (`totalIngredients`, `difficultyLevel`) via helper functions.
- Mutates object references shared between standalone variables and a central `recipes` array.

### 4. Quiz Game Simulator
Builds an interactive multiple-choice question engine:
- Stores structured question objects (`category`, `question`, `choices`, `answer`) in a question bank array.
- Uses `Math.floor(Math.random() * array.length)` to select random questions and simulate computer guesses.
- Enforces strict equality (`===`) to validate answers.

### 5. Record Collection Manager
Maintains a nested database of musical albums indexed by unique IDs:
- Uses chained bracket notation (`records[id][prop]`) to dynamically read, update, or delete album properties.
- Safely initializes missing `tracks` arrays before appending new songs with `.push()`.

### 6. Museum Artifact Collection Manager
Manages deeply nested objects containing sub-objects (`curator`), historical arrays (`locations`), and tag lists (`tags`):
- **Guard Clauses:** Prevents `TypeError` crashes when looking up non-existent artifact IDs.
- **Deduplicated Updates:** Prevents duplicate entries in `tags` using `.includes()`.
- **Historical Tracking:** Appends `{ gallery, year }` records using ES6 property shorthand and retrieves the latest location via `locations[locations.length - 1]`.
- **Report Generation:** Formats multi-line artifact summaries using template literals.

---

## 🧠 Key JavaScript Concepts Covered

| Concept | Syntax / Pattern | Purpose |
| :--- | :--- | :--- |
| **Dynamic Property Access** | `obj[keyVar]` | Read or write properties when the key name is stored in a variable |
| **Shallow Cloning** | `{ ...originalObj }` | Copy an object before modifying it to avoid unintended side effects |
| **Safe Property Lookup** | `"key" in obj` / `obj.hasOwnProperty("key")` | Verify a property exists before reading or mutating it |
| **Property Deletion** | `delete obj.prop` | Completely remove a key-value pair from an object |
| **ES6 Property Shorthand** | `{ gallery, year }` | Map variables directly to matching object property names |

---

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Ishan13-dev/objects-js.git](https://github.com/Ishan13-dev/objects-js.git)
   cd objects-js

Run any script using Node.js:
  ``` bash
  node <filename>.js
