require('./');

// catches console outputs
console.log("Hello World!");
console.error("Failed Hello World?!");

// also catches more low-level stuff
process.stdout.write("Who does that?\n");
process.stderr.write("Seriously!?\n");