// menu items array

const items = [

    {
        id: 1,
        title: 'Pancakes',
        category: 'breakfast',
        price: 12.99,
        img: './images/pancakes.jpg',
        desc: 'Our club sandwiches are a crowd favorite, made with the finest ingredients and prepared with care by our skilled chefs.'
    },
    {
        id: 2,
        title: 'crunchy waffles',
        category: 'breakfast',
        price: 12.99,
        img: './images/waffles.jpg',
        desc: 'For a classic taste, try our fettuccine Alfredo, featuring a creamy sauce made with fresh cream, Parmesan cheese, and butter. '
    },
    {
        id: 3,
        title: 'hearty croissants',
        category: 'breakfast',
        price: 12.99,
        img: './images/croissant.jpg',
        desc: 'At our restaurant, we pride ourselves on offering an array of fresh, crisp salads that are both delicious and nutritious. '
    },
    {
        id: 3,
        title: 'salads',
        category: 'lunch',
        price: 12.99,
        img: './images/salads.jpg',
        desc: 'At our restaurant, we pride ourselves on offering an array of fresh, crisp salads that are both delicious and nutritious. '
    },
    {
        id: 4,
        title: 'club sandwiches',
        category: 'lunch',
        price: 12.99,
        img: './images/sandwich.jpg',
        desc: 'Our club sandwiches are a crowd favorite, made with the finest ingredients and prepared with care by our skilled chefs. '
    },
    {
        id: 5,
        title: 'gourmet burgers',
        category: 'lunch',
        price: 12.99,
        img: './images/burger.png',
        desc: 'Our gourmet burgers are made using high-quality, fresh ingredients. We use ground beef patty, which may be made from grass-fed or organic beef.'
    },
    {
        id: 6,
        title: 'fettuccine Alfredo',
        category: 'lunch',
        price: 12.99,
        img: './images/pasta.png',
        desc: 'For a classic taste, try our fettuccine Alfredo, featuring a creamy sauce made with fresh cream, Parmesan cheese, and butter. '
    },
    {
        id: 7,
        title: 'Cream Coffee',
        category: 'coffee',
        price: 12.99,
        img: './images/hot-chocolate3.jpg',
        desc: 'Our club sandwiches are a crowd favorite, made with the finest ingredients and prepared with care by our skilled chefs. '
    },
    {
        id: 8,
        title: 'Warm hot choco',
        category: 'coffee',
        price: 12.99,
        img: './images/hot-chocolate2.jpg',
        desc: 'Our club sandwiches are a crowd favorite, made with the finest ingredients and prepared with care by our skilled chefs.'
    },
    {
        id: 9,
        title: 'iced coffee',
        category: 'coffee',
        price: 12.99,
        img: './images/iced-coffee.jpg',
        desc: 'Our club sandwiches are a crowd favorite, made with the finest ingredients and prepared with care by our skilled chefs. '
    },
  
]


const menuSection = document.querySelector('.menu-section')
const allBtns = document.querySelectorAll('.menu-btn')


// When our page first loads
window.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(items)
     
})

// Creating a function that will map over the array and return each menu item as a collection of HTML elements
function displayMenuItems(menuItems) {
    let singleMenuItem = items.map(item => {

        const foodImage = item.img
        const foodTitle = item.title 
        const foodPrice = item.price
        const foodDesc = item.desc 
        return  `<!-- start of single menu -->
        <article class="single-menu">
            <!-- menu image -->
                <img src="${foodImage}" alt="${foodTitle}" class="menu-img">
            <!-- menu-info -->
            <div class="menu-info">
            <!-- menu item header -->
            <div class="menu-text">
                <h3 class="menu-name">${foodTitle}</h3>
                <h4 class="menu-price">${foodPrice}</h4>
            </div>
            <!-- menu item description -->
                <p class="menu-desc">${foodDesc}</p> 
            </div>
        </article>
        <!-- end of single menu -->`
        
     })
     singleMenuItem = singleMenuItem.join('')
    //  console.log(singleMenuItem)
     menuSection.innerHTML = singleMenuItem
} 

allBtns.forEach(btn => {
    btn.addEventListener('click', (event) => {
        const category = event.currentTarget.dataset.id
        console.log(category)
        // chosenItems is holding a filtered array of menu items that match the user's choice
        const chosenItems = items.filter(item => {
            if(item.category === category) {
                return item
            }
        })
            // if the user selects all, then we want to display ALL the menu items
                if(category === "all") {
                    displayMenuItems(items)
                } else {
                    displayMenuItems(chosenItems)
                }
            // if the user selects a particular category, we want to display only those items
    })
})




