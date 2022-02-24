const hexaValues = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];

function randomHexaValue() {
  randomIndex = Math.floor(Math.random() * 16);
  return hexaValues[randomIndex];
}

function generateHexaString(length) {
  let string = '';
  for (let i = 1; i <= length; i += 1) {
    string += randomHexaValue();
  }
  return string;
}

function generateUUID() {
  return `${generateHexaString(8)}-${generateHexaString(4)}-${generateHexaString(4)}-${generateHexaString(4)}-${generateHexaString(12)}`;
}

console.log(generateUUID());