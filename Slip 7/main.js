// main.js

const EventEmitter = require('events');

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Callback function to handle events
function handleEvent(eventData) {
    console.log(`Event received: ${eventData.name}`);
    console.log(`Message: ${eventData.message}`);
}

// Register the event and its callback
eventEmitter.on('customEvent', handleEvent);

// Simulated "main loop" that listens and emits events periodically
console.log('Main loop started. Listening for events...');

let eventCount = 0;

const interval = setInterval(() => {
    eventCount++;

    // Emit a custom event every 2 seconds
    eventEmitter.emit('customEvent', {
        name: `Event #${eventCount}`,
        message: 'This is a custom event message.'
    });

    // Stop after 5 events
    if (eventCount >= 5) {
        clearInterval(interval);
        console.log('Main loop stopped. No more events.');
    }
}, 2000);
