document.addEventListener('DOMContentLoaded', function () {
    const categoryFilter = document.getElementById('category');
    const recipesContainer = document.getElementById('recipes');

    // Funkce pro získání receptů z JSON
    async function getRecipes() {
        try {
            const response = await fetch('C:\Users\pavel\OneDrive\Plocha\web\soup 1.json'); // Změňte cestu k souboru s recepty
            const data = await response.json();
            return data.recipes;
        } catch (error) {
            console.error('Chyba při načítání receptů:', error);
            return [];
        }
    }

    // Funkce pro vykreslení receptů
    function renderRecipes(recipes) {
        recipesContainer.innerHTML = '';
        recipes.forEach(recipe => {
            const recipeCard = document.createElement('div');
            recipeCard.classList.add('recipe');
            recipeCard.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.name}">
                <h2>${recipe.name}</h2>
                <p>Kategorie: ${recipe.category}</p>
            `;
            recipesContainer.appendChild(recipeCard);
        });
    }

    // Filtrování receptů podle kategorie
    categoryFilter.addEventListener('change', async function () {
        const selectedCategory = categoryFilter.value;
        const recipes = await getRecipes(); // Získání všech receptů
        if (selectedCategory === 'all') {
            renderRecipes(recipes);
        } else {
            const filteredRecipes = recipes.filter(recipe => recipe.category === selectedCategory);
            renderRecipes(filteredRecipes);
        }
    });

    // Inicializace - zobrazení všech receptů při načtení stránky
    async function initialize() {
        const recipes = await getRecipes();
        renderRecipes(recipes);
    }

    initialize();
});
