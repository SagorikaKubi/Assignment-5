//  meal items by first letter of meal
const getMealItem = meal => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${meal}`;
    fetch(url)
        .then(res => res.json())
        .then(data =>
            displayMeals(data.meals));
}

const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", () => {
    const inputMeal = document.getElementById("meal").value;
    getMealItem(inputMeal);
})


const displayMeals = meals => {
    const mealsDiv = document.getElementById("meals");
    for (let i = 0; i < meals.length; i++) {
        const meal = meals[i].strMeal;
        const mealPic = meals[i].strMealThumb;
        const mealDiv = document.createElement("div");
        mealDiv.className = "meal";
        const mealInfo = ` 
        <img class= "meal-img" src="${mealPic}" alt="Name"> 
        <h3 class ="meal-name">${meal}</h3>
        <button onclick="displayMealRecipe('${meal}')"> Recipe</button>
        `
        mealDiv.innerHTML = mealInfo;
        mealsDiv.appendChild(mealDiv);
    }
}

// meal recipe/details 
const displayMealRecipe = recipe => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipe}`
    fetch(url)
        .then(res => res.json())
        .then(data =>
            renderMealInfo(data[0]));

}
const renderMealInfo = meal => {
    const mealDiv = document.getElementById("meal-detail");
    mealDiv.innerHTML = `
        <h3>${meal}</h3>
       `
}
