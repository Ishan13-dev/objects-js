/**
 * Cargo Manifest Validator
 * Normalizes cargo weights to kilograms, validates manifest properties
 * against strict schema rules, and logs processing results.
 */

/**
 * Returns a new manifest object with weight converted to kilograms ("kg").
 * Does not mutate the original input object.
 *
 * @param {Object} manifest - The cargo manifest object.
 * @returns {Object} A new manifest object normalized to kilograms.
 */
function normalizeUnits(manifest) {
  // Clone the object using the spread operator so the original is never mutated
  const normalized = { ...manifest };

  if (normalized.unit === "lb") {
    normalized.weight = normalized.weight * 0.45;
    normalized.unit = "kg";
  }

  return normalized;
}

/**
 * Validates all required properties of a cargo manifest object.
 * Returns an empty object {} if valid, or an object mapping problematic 
 * keys to "Missing" or "Invalid".
 *
 * @param {Object} manifest - The cargo manifest object to validate.
 * @returns {Object} An object containing any validation errors.
 */
function validateManifest(manifest) {
  const errors = {};

  // 1. Validate containerId: must be a positive integer (> 0)
  if (!("containerId" in manifest) || manifest.containerId === undefined) {
    errors.containerId = "Missing";
  } else if (
    typeof manifest.containerId !== "number" ||
    !Number.isInteger(manifest.containerId) ||
    manifest.containerId <= 0
  ) {
    errors.containerId = "Invalid";
  }

  // 2. Validate destination: must be a non-empty string after trimming whitespace
  if (!("destination" in manifest) || manifest.destination === undefined) {
    errors.destination = "Missing";
  } else if (
    typeof manifest.destination !== "string" ||
    manifest.destination.trim().length === 0
  ) {
    errors.destination = "Invalid";
  }

  // 3. Validate weight: must be a positive number (and not NaN)
  // Note: typeof NaN is "number" in JS, so Number.isNaN() must be checked explicitly
  if (!("weight" in manifest) || manifest.weight === undefined) {
    errors.weight = "Missing";
  } else if (
    typeof manifest.weight !== "number" ||
    Number.isNaN(manifest.weight) ||
    manifest.weight <= 0
  ) {
    errors.weight = "Invalid";
  }

  // 4. Validate unit: must be either "kg" or "lb"
  if (!("unit" in manifest) || manifest.unit === undefined) {
    errors.unit = "Missing";
  } else if (manifest.unit !== "kg" && manifest.unit !== "lb") {
    errors.unit = "Invalid";
  }

  // 5. Validate hazmat: must be a boolean (true or false)
  if (!("hazmat" in manifest) || manifest.hazmat === undefined) {
    errors.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    errors.hazmat = "Invalid";
  }

  return errors;
}

/**
 * Processes a cargo manifest by validating it first and logging either
 * the normalized weight (on success) or the validation error object (on failure).
 *
 * @param {Object} manifest - The cargo manifest object to process.
 */
function processManifest(manifest) {
  const validationErrors = validateManifest(manifest);

  // Object.keys(validationErrors).length === 0 means no errors were found
  if (Object.keys(validationErrors).length === 0) {
    const normalized = normalizeUnits(manifest);
    console.log(`Validation success: ${manifest.containerId}`);
    console.log(`Total weight: ${normalized.weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(validationErrors);
  }
}
