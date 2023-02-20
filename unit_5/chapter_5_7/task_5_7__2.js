// Filter anagrams

// Anagrams are words that have the same number of same letters, but in different order.
// Write a function aclean(arr) that returns an array cleaned from anagrams.

// From every anagram group should remain only one word, no matter which one.

// https://javascript.info/task/filter-anagrams

const aclean = (arr) => {
    let map = new Map();  // for sorted normalized strings

    for (let word of arr) {

        let normalized = word   // normalization: 
            .toLowerCase()      // case normalization 
            .split("")          // split to letters 
            .sort()             // sort letters
            .join("");          // create string

        map.set(normalized, word); // use normalized word as a key for word (overwrite if anagram)
    }

    return Array.from(map.values());
}


let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));