/**
 * Animal Object Manager
 * Demonstrates core JavaScript object operations: accessing properties 
 * (dot vs. bracket notation), adding/updating properties, deleting keys, 
 * and checking property existence.
 */

// ==========================================
// 1. Initial Object Declarations
// ==========================================

const tiger = {
  species: "Tiger",
  age: 5,
  isEndangered: true
};

const elephant = {
  species: "Elephant",
  age: 10,
  isEndangered: true
};

// ==========================================
// 2. Reading Object Properties (Dot Notation)
// ==========================================

/**
 * Retrieves the species of an animal.
 * Uses dot notation because the property name ("species") is static and known ahead of time.
 *
 * @param {Object} animal - The animal object.
 * @returns {string} The species name.
 */
const getSpecies = (animal) => {
  return animal.species;
};

console.log(getSpecies(tiger)); 
// Expected Output: "Tiger"

/**
 * Retrieves the age of an animal.
 *
 * @param {Object} animal - The animal object.
 * @returns {number} The age of the animal.
 */
const getAge = (animal) => {
  return animal.age;
};

console.log(getAge(tiger)); 
// Expected Output: 5

// ==========================================
// 3. Modifying Objects (Adding, Updating, Deleting)
// ==========================================

/**
 * Adds a new 'habitat' property to the animal object.
 * NOTE: Objects in JavaScript are passed by reference. Modifying 'animal' inside 
 * this function directly mutates the original object passed into it.
 *
 * @param {Object} animal - The animal object to modify.
 * @param {string} habitat - The habitat to assign.
 * @returns {Object} The updated animal object.
 */
const addHabitat = (animal, habitat) => {
  animal.habitat = habitat; // Creates the 'habitat' key if it doesn't exist yet
  return animal;
};

console.log(addHabitat(tiger, "Rainforest")); 
// Expected Output: { species: 'Tiger', age: 5, isEndangered: true, habitat: 'Rainforest' }

/**
 * Updates the 'age' property of an existing animal object.
 *
 * @param {Object} animal - The animal object to update.
 * @param {number} newAge - The new age value.
 * @returns {Object} The updated animal object.
 */
const updateAge = (animal, newAge) => {
  animal.age = newAge; // Overwrites the existing 'age' value
  return animal;
};

console.log(updateAge(elephant, 12)); 
// Expected Output: { species: 'Elephant', age: 12, isEndangered: true }

/**
 * Removes the 'isEndangered' property from an animal object.
 * Uses the 'delete' operator, which completely removes both the key and its value from the object.
 *
 * @param {Object} animal - The animal object to modify.
 * @returns {Object} The updated animal object without 'isEndangered'.
 */
const removeEndangeredStatus = (animal) => {
  delete animal.isEndangered;
  return animal;
};

console.log(removeEndangeredStatus(tiger)); 
// Expected Output: { species: 'Tiger', age: 5, habitat: 'Rainforest' }

// ==========================================
// 4. Checking & Dynamically Accessing Properties
// ==========================================

/**
 * Checks whether the animal object directly contains a 'habitat' property.
 * hasOwnProperty() returns true if the key exists on the object itself (not inherited).
 *
 * @param {Object} animal - The animal object to inspect.
 * @returns {boolean} True if 'habitat' exists, false otherwise.
 */
const hasHabitat = (animal) => {
  return animal.hasOwnProperty("habitat");
};

console.log(hasHabitat(tiger));    // Expected Output: true (added earlier via addHabitat)
console.log(hasHabitat(elephant)); // Expected Output: false (never added to elephant)

/**
 * Dynamically retrieves a property value using a variable key name.
 * HARD STEP EXPLANATION: We must use bracket notation (animal[propertyName]) here 
 * instead of dot notation (animal.propertyName). 
 * - Dot notation looks for a literal key named "propertyName" (which returns undefined).
 * - Bracket notation evaluates the variable 'propertyName' first (e.g., "species" or "age") 
 *   and looks up that matching key on the object.
 *
 * @param {Object} animal - The animal object.
 * @param {string} propertyName - The name of the property to look up dynamically.
 * @returns {*} The value of the requested property.
 */
const getProperty = (animal, propertyName) => {
  return animal[propertyName];
};

console.log(getProperty(tiger, "species")); // Expected Output: "Tiger"
console.log(getProperty(elephant, "age"));  // Expected Output: 12 (updated earlier via updateAge)
