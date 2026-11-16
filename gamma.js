/**
 * Recipe Tracker
 * Demonstrates storing objects in arrays, computing derived values using 
 * helper functions, and dynamically updating object properties by reference.
 */

// ==========================================
// 1. Initialize Recipe Collection & Objects
// ==========================================

// Empty array to store all recipe objects
const recipes = [];

// Initial recipe objects with placeholder values (`null` and `""`) 
// for properties that will be calculated dynamically later.
const recipe1 = {
  name: "Spaghetti Carbonara",
  ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
  cookingTime: 22,
  totalIngredients: null,
  difficultyLevel: ""
};

const recipe2 = {
  name: "Chicken Curry",
  ingredients: ["chicken breast", "coconut milk", "curry powder", "onion", "garlic"],
  cookingTime: 42,
  totalIngredients: null,
  difficultyLevel: ""
};

const recipe3 = {
  name: "Vegetable Stir Fry",
  ingredients: ["broccoli", "carrot", "bell pepper"],
  cookingTime: 15,
  totalIngredients: null,
  difficultyLevel: ""
};

// Add all three recipe objects into the `recipes` array at once.
// HARD STEP EXPLANATION: `recipes` stores references (memory pointers) to 
// `recipe1`, `recipe2`, and `recipe3`—not separate copies. When we update 
// `recipe1.totalIngredients` later, the object inside `recipes` updates automatically!
recipes.push(recipe1, recipe2, recipe3);

// ==========================================
// 2. Helper Functions
// ==========================================

/**
 * Counts the number of items in an ingredients array.
 *
 * @param {string[]} ingredients - Array of ingredient names.
 * @returns {number} The total count of ingredients.
 */
function getTotalIngredients(ingredients) {
  return ingredients.length;
}

/**
 * Determines the cooking difficulty based on total cooking time in minutes.
 * - 0 to 30 mins: "easy"
 * - 31 to 60 mins: "medium"
 * - Over 60 mins: "hard"
 *
 * @param {number} cookingTime - Cooking time in minutes.
 * @returns {string} The difficulty rating ("easy", "medium", or "hard").
 */
function getDifficultyLevel(cookingTime) {
  if (cookingTime <= 30) {
    return "easy";
  } else if (cookingTime <= 60) {
    // Because `cookingTime <= 30` was already checked above, 
    // this branch only runs when cookingTime is between 31 and 60.
    return "medium";
  } else {
    return "hard";
  }
}

// ==========================================
// 3. Test Helper Functions on `recipe1`
// ==========================================

const recipe1TotalIngredients = getTotalIngredients(recipe1.ingredients);
console.log(recipe1TotalIngredients); 
// Expected Output: 4

const recipe1DifficultyLevel = getDifficultyLevel(recipe1.cookingTime);
console.log(recipe1DifficultyLevel); 
// Expected Output: "easy"

// ==========================================
// 4. Populate Calculated Properties
// ==========================================

// Update recipe1 properties
recipe1.totalIngredients = getTotalIngredients(recipe1.ingredients);
recipe1.difficultyLevel = getDifficultyLevel(recipe1.cookingTime);

// Update recipe2 properties
recipe2.totalIngredients = getTotalIngredients(recipe2.ingredients);
recipe2.difficultyLevel = getDifficultyLevel(recipe2.cookingTime);

// Update recipe3 properties
recipe3.totalIngredients = getTotalIngredients(recipe3.ingredients);
recipe3.difficultyLevel = getDifficultyLevel(recipe3.cookingTime);

// ==========================================
// 5. Final Output
// ==========================================

console.log(recipes);
/* Expected Output:
[
  {
    name: 'Spaghetti Carbonara',
    ingredients: [ 'spaghetti', 'Parmesan cheese', 'pancetta', 'black pepper' ],
    cookingTime: 22,
    totalIngredients: 4,
    difficultyLevel: 'easy'
  },
  {
    name: 'Chicken Curry',
    ingredients: [ 'chicken breast', 'coconut milk', 'curry powder', 'onion', 'garlic' ],
    cookingTime: 42,
    totalIngredients: 5,
    difficultyLevel: 'medium'
  },
  {
    name: 'Vegetable Stir Fry',
    ingredients: [ 'broccoli', 'carrot', 'bell pepper' ],
    cookingTime: 15,
    totalIngredients: 3,
    difficultyLevel: 'easy'
  }
]
*/
