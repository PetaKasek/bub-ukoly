function filterRecipes() {
    const categorySelect = document.getElementById('category-select');
    const selectedCategory = categorySelect.value;

    const recipeWindows = document.querySelectorAll('.recipe-window');

    
    recipeWindows.forEach(recipeWindow => {
        const recipeDetails = recipeWindow.querySelector('ul');
        const recipeDetailsItems = recipeDetails.querySelectorAll('li');

        
        let categoryMatch = false;
        recipeDetailsItems.forEach(item => {
            if (item.textContent.includes(selectedCategory)) {
                categoryMatch = true;
            }
        });

        if (selectedCategory === 'all' || categoryMatch) {
            recipeWindow.style.display = 'block';
        } else {
            recipeWindow.style.display = 'none';
        }
    });
}


document.getElementById('category-select').addEventListener('change', filterRecipes);

filterRecipes();
