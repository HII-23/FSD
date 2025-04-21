const EventEmitter = require("events");

// Create an EventEmitter instance
const eventEmitter = new EventEmitter();

// Define an event listener for 'messageReceived' event
eventEmitter.on("messageReceived", (user, message) => {
    console.log(`📩 New message from ${user}: "${message}"`);
});

// Define another event listener for 'errorEvent'
eventEmitter.on("errorEvent", (error) => {
    console.error(`❌ Error Occurred: ${error}`);
});

// Simulate event triggering in a loop
setInterval(() => {
    const users = ["Alice", "Bob", "Charlie"];
    const randomUser = users[Math.floor(Math.random() * users.length)];
    const messages = ["Hello!", "How are you?", "Good morning!", "Let's meet up!"];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    // Emit 'messageReceived' event
    eventEmitter.emit("messageReceived", randomUser, randomMessage);

    // Randomly trigger an error event
    if (Math.random() > 0.8) {
        eventEmitter.emit("errorEvent", "Something went wrong!");
    }
}, 2000); // Runs every 2 seconds

console.log("✅ Event-driven application started. Listening for events...");
