//  get all meals by first letter
const getMealItems = meal => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${meal}`;
    fetch(url)
        .then(res => res.json())
        .then(data =>
            displayMeals(data.meals));
}

const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", () => {
    const inputMeal = document.getElementById("meal").value;
    getMealItems(inputMeal);
})

const displayMeals = meals => {
    let mealsDiv = document.getElementById("meals");
    for (let i = 0; i < meals.length; i++) {
        const meal = meals[i].strMeal;
        const mealPic = meals[i].strMealThumb;
        const mealDiv = document.createElement("div");
        mealDiv.className = "meal";
        const mealInfo = ` 
        <div onclick="displayMealRecipe('${meal}')">
        <img class= "meal-img" src="${mealPic}" alt="Name"> 
        <h3 class ="meal-name">${meal}</h3>
       </div>
        `
        mealDiv.innerHTML = mealInfo;
        mealsDiv.appendChild(mealDiv);
    }
}


//  get meal ingredients/details 
const displayMealRecipe = name => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => renderMealInfo(data.meals));
}

const renderMealInfo = meals => {
    const mealDiv = document.getElementById("meal-details");
    meals.forEach(meal => {
        mealDiv.innerHTML = `
    <img class= "meal-img" src="${meal.strMealThumb}" alt="Name"> 
    <h3 class="ingredient-meal-name">${meal.strMeal}</h3>
    <h6 class ="ingredients">Ingredients:</h6>
    <li>${meal.strIngredient1}</li>
    <li>${meal.strIngredient2}</li>
    <li>${meal.strIngredient3}</li>
    <li>${meal.strIngredient4}</li>
    <li>${meal.strIngredient6}</li>
    <li>${meal.strIngredient7}</li>
    <li>${meal.strIngredient8}</li>
    `
    });
}
