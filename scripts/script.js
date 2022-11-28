
import fetchData, {apiBaseUrl, categoriesEndpoint} from "./fetchData.js";  
const categoriesFilterDiv = document.getElementById("detailed-categories-filter");

 // 1. Fetch categories
 // 2. Visualize all categories

function creatCategoryElement(categoryObject) {
   const {strCategory : title, strCategoryThumb : imgSrc} = categoryObject;
    const titleAlt = categoryObject.strCategory

    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'category-box';

    const CategoryThumb = document.createElement('img');
    CategoryThumb.setAttribute("src", imgSrc);
    CategoryThumb.setAttribute("alt", `${title} category image`);

    const categoryTitle = document.createElement("h4");
    categoryTitle.textContent = title;

    categoryDiv.appendChild(CategoryThumb);
    categoryDiv.appendChild(categoryTitle)
    return categoryDiv;
}

async function main() {
   const { categories } = await fetchData(apiBaseUrl + categoriesEndpoint);
       categories.forEach(element => {
          const newCategoryElement =  creatCategoryElement(element)
          categoriesFilterDiv.appendChild(newCategoryElement); 
        });
    }

    main();