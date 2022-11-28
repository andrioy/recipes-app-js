    console.log("script started!");

    const categoriesFilterDiv = document.getElementById("detailed-categories-filter");

    const apiBaseUrl= 'https://www.themealdb.com/api/json/v1/1';
    const categoriesEndpoint = '/categories.php';
    async function fetchData(url) {
        try {

           const response = await fetch(url);
           const data = await response.json();
           return data;
        } catch (err) {
            console.log(err);
        }
    }

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