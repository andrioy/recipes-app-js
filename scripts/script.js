
import fetchData, {apiBaseUrl, categoriesEndpoint} from "./fetchData.js";  
const categoriesFilterDiv = document.getElementById("detailed-categories-filter");

 // 1. Fetch categories
 // 2. Visualize all categories

function creatCategoryElement(categoryObject) {
   const {strCategory, strCategoryThumb} = categoryObject;

    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'category-box';
    const CategoryThumb = document.createElement('img');
    CategoryThumb.setAttribute("src", strCategoryThumb);
    CategoryThumb.setAttribute("alt", `${strCategory} category image`);

    categoryDiv.appendChild(CategoryThumb)
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