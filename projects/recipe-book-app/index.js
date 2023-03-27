const API_KEY = "275d58779ccf4e22af03e792e8819fff";

// Call the API and retrieve a list of recipes
const recipeList = document.getElementById("recipe-list");

async function getRecipes() {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`
  );
  const data = await response.json();
  return data.recipes;
}

function displayRecipes(recipes) {
  recipeList.innerHTML = "";
  recipes.forEach((recipe) => {
    const recipeItem = document.createElement("li");
    recipeItem.classList.add("recipe-item");
    const recipeImage = document.createElement("img");
    recipeImage.src = recipe.image;

    const recipeTitle = document.createElement("h2");
    recipeTitle.innerText = recipe.title;

    const recipeIngredients = document.createElement("p");
    recipeIngredients.innerHTML = `<strong>Ingredients:</strong> ${recipe.extendedIngredients
      .map((ingredient) => ingredient.original)
      .join(", ")}`;

    const recipeLink = document.createElement("a");
    recipeLink.href = recipe.sourceUrl;
    recipeLink.innerText = "View Recipe";

    recipeItem.appendChild(recipeImage);
    recipeItem.appendChild(recipeTitle);
    recipeItem.appendChild(recipeIngredients);
    recipeItem.appendChild(recipeLink);

    recipeList.appendChild(recipeItem);
  });
}

async function init() {
  const recipes = await getRecipes();
  displayRecipes(recipes);
}

init();
