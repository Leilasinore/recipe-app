const searchBtn =document.getElementById('searchfor-button');
const meallist = document.getElementById('meal');
const mealDetailsContent = document.querySelector('.meal-details-content');
const recipeClosebtn = document.getElementById('recipe-close-btn');

//event listeners
searchBtn.addEventListener('click' ,getMeallist);

function getMeallist(){

    let searchInputTxt = document.getElementById("search-input").value.trim();
   fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=egg")
   .then(response => response.json())
   .then(data=>{console.log(data);})
}