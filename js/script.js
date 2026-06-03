const recipesContainer = document.getElementById("recipesContainer");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");
const recipeCount = document.getElementById("recipeCount");
const noResults = document.getElementById("noResults");

let currentCategory = "All";

function displayRecipes(recipesToShow) {

    recipesContainer.innerHTML = "";

    recipeCount.textContent =
        `Showing ${recipesToShow.length} Recipe${recipesToShow.length !== 1 ? "s" : ""}`;

    if (recipesToShow.length === 0) {
        noResults.classList.remove("hidden");
        return;
    }

    noResults.classList.add("hidden");

    recipesToShow.forEach(recipe => {

        const card = document.createElement("div");

        card.classList.add("recipe-card");

        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}">

            <div class="recipe-content">

                <span class="recipe-category">
                    ${recipe.category}
                </span>

                <h3>${recipe.title}</h3>

                <p>${recipe.description}</p>

                <div class="recipe-time">
                    ⏱ ${recipe.cookingTime}
                </div>

                <a href="recipe.html?id=${recipe.id}" class="view-btn">
                    View Recipe
                </a>

            </div>
        `;

        recipesContainer.appendChild(card);
    });
}

function filterRecipes() {

    const searchTerm = searchInput.value.toLowerCase();

    const filteredRecipes = recipes.filter(recipe => {

        const matchesCategory =
            currentCategory === "All" ||
            recipe.category === currentCategory;

        const matchesTitle =
            recipe.title.toLowerCase().includes(searchTerm);

        const matchesIngredients =
            recipe.ingredients.some(ingredient =>
                ingredient.toLowerCase().includes(searchTerm)
            );

        return matchesCategory &&
               (matchesTitle || matchesIngredients);
    });

    displayRecipes(filteredRecipes);
}

searchInput.addEventListener("input", filterRecipes);

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        currentCategory = button.dataset.category;

        filterRecipes();
    });
});

displayRecipes(recipes);