/**
 * Record Collection Manager
 * Maintains a nested object of musical albums, allowing dynamic updates,
 * track list initialization/appending, and property deletion.
 */

// ==========================================
// 1. Initial Record Collection Data
// ==========================================

const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"]
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"]
  },
  1245: {
    artist: "Robert Palmer",
    tracks: []
  },
  5439: {
    albumTitle: "ABBA Gold"
  }
};

// ==========================================
// 2. Record Update Function
// ==========================================

/**
 * Updates a specific album in the records collection based on the given rules.
 *
 * HARD STEP EXPLANATION (Chained Bracket Notation):
 * Because `id` and `prop` are variables passed into the function, we must use
 * bracket notation: `records[id][prop]`.
 * - `records[id]` accesses the specific album object (e.g., album 5439).
 * - `records[id][prop]` accesses the specific property inside that album (e.g., "artist" or "tracks").
 *
 * @param {Object} records - The complete collection of album objects.
 * @param {number} id - The unique ID of the album to update.
 * @param {string} prop - The property name to modify (e.g., "artist", "tracks", "albumTitle").
 * @param {string} value - The new value to assign, or "" to delete the property.
 * @returns {Object} The updated `records` object.
 */
function updateRecords(records, id, prop, value) {
  // RULE 1 (User Story 2): If value is an empty string, delete the property from the album.
  // Checking this first simplifies the rest of the conditions because we know `value !== ""` afterward.
  if (value === "") {
    delete records[id][prop];
  } 
  // RULE 2 (User Story 3): If prop isn't "tracks" and value isn't empty, assign the value directly.
  else if (prop !== "tracks") {
    records[id][prop] = value;
  } 
  // RULE 3 (User Stories 4 & 5): If prop IS "tracks" and value isn't empty:
  else {
    // Check if the album does NOT have a "tracks" property yet.
    // If missing, initialize it as an empty array `[]` first so `.push()` won't throw an error.
    if (!records[id].hasOwnProperty("tracks")) {
      records[id].tracks = [];
    }
    // Add the new track to the end of the album's `tracks` array.
    records[id].tracks.push(value);
  }

  // Always return the entire modified records object (User Story 1)
  return records;
}

// ==========================================
// 3. Example Usage & Test Cases
// ==========================================

// Test 2: Set artist on album 5439
updateRecords(recordCollection, 5439, "artist", "ABBA");

// Test 3: Create `tracks` array on album 5439 and add first song
updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");

// Test 4: Delete `artist` from album 2548 by passing an empty string
updateRecords(recordCollection, 2548, "artist", "");

// Test 5: Append a track to an existing `tracks` array on album 1245
updateRecords(recordCollection, 1245, "tracks", "Addicted to Love");

console.log(recordCollection);
