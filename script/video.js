console.log('video.js');
// 1) fetch, load and show catagories on html

//create loadCatagories
const loadCategories = () => {
    //fetch the data
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error))
};

//create displayCatagories
const displayCategories = (categories) => {
    const categoryContainer = document.getElementById('categories');

    categories.forEach((item) => {
        console.log(item);
        //create a button

        const button = document.createElement('button');
        button.classList = 'btn';
        button.innerText = item.category;

        //add button to categoryContainer
        categoryContainer.append(button);
    });
} 

loadCategories();