const params = new URLSearchParams(window.location.search);

const recipeId = Number(params.get("id"));

const recipe = recipes.find(item => item.id === recipeId);

const container = document.getElementById("recipeDetailsContainer");

if (!recipe) {

    container.innerHTML = `
        <div class="detail-card">
            <h1>Recipe Not Found</h1>
            <p>The requested recipe does not exist.</p>
        </div>
    `;

} else {

    container.innerHTML = `
    
        <img
            src="${recipe.image}"
            alt="${recipe.title}"
            class="detail-image"
        >

        <div class="detail-card">

            <span class="recipe-category">
                ${recipe.category}
            </span>

            <h1>${recipe.title}</h1>

            <p>
                <strong>Cooking Time:</strong>
                ${recipe.cookingTime}
            </p>

            <h2>Ingredients</h2>

            <ul>
                ${recipe.ingredients
                    .map(item => `<li>${item}</li>`)
                    .join("")}
            </ul>

            <h2>Instructions</h2>

            <ol>
                ${recipe.instructions
                    .map(step => `<li>${step}</li>`)
                    .join("")}
            </ol>

        </div>

    `;
}