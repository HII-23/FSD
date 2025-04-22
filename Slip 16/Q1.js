const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let recipes = [];

// Get all recipes
app.get('/recipes', (req, res) => {
  res.json(recipes);
});

// Add a new recipe
app.post('/recipes', (req, res) => {
  const recipe = req.body;
  recipes.push(recipe);
  res.status(201).json({ message: 'Recipe added!', recipe });
});

// Get a recipe by index
app.get('/recipes/:id', (req, res) => {
  const id = req.params.id;
  const recipe = recipes[id];
  if (recipe) {
    res.json(recipe);
  } else {
    res.status(404).json({ message: 'Recipe not found' });
  }
});

// Delete a recipe by index
app.delete('/recipes/:id', (req, res) => {
  const id = req.params.id;
  if (recipes[id]) {
    recipes.splice(id, 1);
    res.json({ message: 'Recipe deleted!' });
  } else {
    res.status(404).json({ message: 'Recipe not found' });
  }
});

app.listen(port, () => {
  console.log(`Recipe Book app running at http://localhost:${port}`);
});
