const form = document.querySelector("form");
const searchInput = document.getElementById("search");
const mealList = document.getElementById("meal");
const mealModal = document.querySelector(".meal-modal");
const recipe = document.querySelector(".recipe-content");
const closeBtn = document.querySelector(".close-btn");

const searchURL = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";
const lookupURL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

form.addEventListener("submit", getMeals);

async function getMeals() {
    let searchInputVal = searchInput.value.trim();
    const res = await fetch(`${searchURL}${searchInputVal}`);
    const data = await res.json();
    // console.log(data);
    displayMeals(data.meals);
}

// Display meals
function displayMeals(meals) {
    let html = "";
    if (meals) {
        meals.forEach((meal) => {
            html += `
            <div class="meal" data-id=${meal.idMeal}>
                <div class="meal-img">
                    <img src="${meal.strMealThumb}" alt="">
                </div>
                <div class="meal-name">
                    <h3>${meal.strMeal}</h3>
                    <a href="#" class="recipe-btn">View Recipe &rarr;</a>
                </div>
            </div>
            `;

        })
    } else {
        html = "No meal was found, please try again"
    }

    mealList.innerHTML = html;
}

