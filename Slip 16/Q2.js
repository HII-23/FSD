const EventEmitter = require('events');

// Create an event emitter instance
const eventEmitter = new EventEmitter();

// Callback functions
function onStart() {
  console.log('Recipe Book App Started!');
}

function onNewRecipe(recipe) {
  console.log(`New Recipe Added: ${recipe.title}`);
  console.log(`   Ingredients: ${recipe.ingredients.join(', ')}`);
  console.log(`   Instructions: ${recipe.instructions}`);
}

function onExit() {
  console.log('Exiting Recipe Book App...');
  process.exit();
}

// Registering events with callbacks
eventEmitter.on('start', onStart);
eventEmitter.on('new-recipe', onNewRecipe);
eventEmitter.on('exit', onExit);

// Simulated main loop
function mainLoop() {
  // Start the app
  eventEmitter.emit('start');

  // Simulate adding recipes
  setTimeout(() => {
    eventEmitter.emit('new-recipe', {
      title: 'Aloo Paratha',
      ingredients: ['Potato', 'Flour', 'Spices'],
      instructions: 'Mix mashed potato with spices, stuff in dough, and cook on tawa.'
    });
  }, 1000);

  setTimeout(() => {
    eventEmitter.emit('new-recipe', {
      title: 'Chai',
      ingredients: ['Water', 'Tea leaves', 'Milk', 'Sugar'],
      instructions: 'Boil water, add tea leaves, milk, and sugar. Strain and serve.'
    });
  }, 2000);

  // Exit after all tasks
  setTimeout(() => {
    eventEmitter.emit('exit');
  }, 3000);
}

// Run the main loop
mainLoop();
