// Remove spaces from beginning and end
function cleanText(text) {
  return text.trim();
}

// Split text into words
function splitIntoWords(text) {
  return text.split(" ");
}

// Remove empty items from array
function removeEmptyWords(words) {
  return words.filter(function(word) {
    return word !== "";
  });
}

// Estimate token count
function estimateTokens(words) {
  return Math.ceil(words.length * 0.75);
}

// Main function
function countTokens(text) {
  const cleaned = cleanText(text);
  const words = splitIntoWords(cleaned);
  const filtered = removeEmptyWords(words);

  return estimateTokens(filtered);
}

// Bonus: Character count
function characterCount(text) {
  const cleaned = cleanText(text);
  return cleaned.length;
}

// Bonus: Estimate API cost
function estimateCost(tokens, pricePerMillion) {
  return (tokens / 1000000) * pricePerMillion;
}

// Tests
console.log(cleanText("  Hello world  "));

console.log(splitIntoWords("The quick brown fox"));

const messy = splitIntoWords("Hello   world");
console.log(messy);
console.log(removeEmptyWords(messy));

const words = ["The", "quick", "brown", "fox"];
console.log(estimateTokens(words));

console.log(countTokens("Hello"));
console.log(countTokens("Hello, world!"));
console.log(countTokens("The quick brown fox jumps over the lazy dog"));
console.log(countTokens("  I am learning JavaScript   today  "));

console.log(characterCount("   Hello JavaScript   "));

const sampleTokens = countTokens("This is a sample email for token cost testing.");
console.log(estimateCost(sampleTokens, 5));   