export const categories = [
    { id: 1, name: 'Pizza', image: "../images/pizza.jpg" },
    { id: 2, name: 'Salad', image: "../images/salad.jpg" },
    { id: 3, name: 'Drink', image: "../images/drink.jpg" },
];

export const menu = [
    {
        id: 1,
        name: "Margherita Pizza",
        category: "Pizza",
        description: "Classic Italian pizza with fresh mozzarella and basil.",
        ingredients: ["Tomato sauce", "Fresh mozzarella", "Basil", "Olive oil"],
        image: "/images/pizzas/margherita.jpg",
        sizes: [
            { name: "Small", price: 120 },
            { name: "Medium", price: 180 },
            { name: "Large", price: 240 }
        ]
    },
    {
        id: 2,
        name: "Pepperoni Pizza",
        category: "Pizza",
        description: "Crispy pepperoni layered over melted cheese and tomato sauce.",
        ingredients: ["Tomato sauce", "Mozzarella", "Pepperoni"],
        image: "/images/pizzas/pepperoni.jpg",
        sizes: [
            { name: "Small", price: 140 },
            { name: "Medium", price: 200 },
            { name: "Large", price: 260 }
        ]
    },
    {
        id: 3,
        name: "BBQ Chicken Pizza",
        category: "Pizza",
        description: "Smoky BBQ sauce base with grilled chicken and onions.",
        ingredients: ["BBQ sauce", "Mozzarella", "Grilled chicken", "Onions", "Cilantro"],
        image: "/images/pizzas/bbq-chicken.jpg",
        sizes: [
            { name: "Small", price: 150 },
            { name: "Medium", price: 220 },
            { name: "Large", price: 290 }
        ]
    },
    {
        id: 4,
        name: "Veggie Pizza",
        category: "Pizza",
        description: "A colorful pizza packed with garden-fresh veggies.",
        ingredients: ["Tomato sauce", "Mozzarella", "Bell peppers", "Onions", "Olives", "Mushrooms"],
        image: "/images/pizzas/veggie.jpg",
        sizes: [
            { name: "Small", price: 110 },
            { name: "Medium", price: 170 },
            { name: "Large", price: 230 }
        ]
    },
    {
        id: 5,
        name: "Four Cheese Pizza",
        category: "Pizza",
        description: "A rich blend of four delicious cheeses.",
        ingredients: ["Tomato sauce", "Mozzarella", "Parmesan", "Ricotta", "Gorgonzola"],
        image: "/images/pizzas/four-cheese.jpg",
        sizes: [
            { name: "Small", price: 160 },
            { name: "Medium", price: 230 },
            { name: "Large", price: 300 }
        ]
    },
    {
        id: 6,
        name: "Hawaiian Pizza",
        category: "Pizza",
        description: "A sweet and savory pizza with ham and pineapple.",
        ingredients: ["Tomato sauce", "Mozzarella", "Ham", "Pineapple"],
        image: "/images/pizzas/hawaiian.jpg",
        sizes: [
            { name: "Small", price: 140 },
            { name: "Medium", price: 200 },
            { name: "Large", price: 260 }
        ]
    },
    {
        id: 7,
        name: "Meat Lovers Pizza",
        category: "Pizza",
        description: "Packed with a variety of savory meats.",
        ingredients: ["Tomato sauce", "Mozzarella", "Pepperoni", "Sausage", "Ham", "Bacon"],
        image: "/images/pizzas/meat-lovers.jpg",
        sizes: [
            { name: "Small", price: 180 },
            { name: "Medium", price: 260 },
            { name: "Large", price: 340 }
        ]
    },
    {
        id: 8,
        name: "Buffalo Chicken Pizza",
        category: "Pizza",
        description: "Spicy buffalo chicken topped with ranch drizzle.",
        ingredients: ["Buffalo sauce", "Mozzarella", "Chicken", "Ranch dressing"],
        image: "/images/pizzas/buffalo.jpg",
        sizes: [
            { name: "Small", price: 170 },
            { name: "Medium", price: 240 },
            { name: "Large", price: 310 }
        ]
    },
    {
        id: 9,
        name: "Mushroom Truffle Pizza",
        category: "Pizza",
        description: "Gourmet mushrooms with a hint of truffle oil.",
        ingredients: ["White sauce", "Mozzarella", "Mushrooms", "Truffle oil"],
        image: "/images/pizzas/truffle.jpg",
        sizes: [
            { name: "Small", price: 190 },
            { name: "Medium", price: 260 },
            { name: "Large", price: 330 }
        ]
    },
    {
        id: 10,
        name: "White Garlic Pizza",
        category: "Pizza",
        description: "Creamy garlic sauce base topped with mozzarella and parmesan.",
        ingredients: ["Garlic cream sauce", "Mozzarella", "Parmesan", "Parsley"],
        image: "/images/pizzas/white.jpg",
        sizes: [
            { name: "Small", price: 150 },
            { name: "Medium", price: 210 },
            { name: "Large", price: 270 }
        ]
    },
    {
        id: 11,
        name: "Spinach & Feta Pizza",
        category: "Pizza",
        description: "A light and fresh pizza with spinach and feta cheese.",
        ingredients: ["White sauce", "Mozzarella", "Spinach", "Feta cheese", "Garlic"],
        image: "/images/pizzas/spinach-feta.jpg",
        sizes: [
            { name: "Small", price: 160 },
            { name: "Medium", price: 220 },
            { name: "Large", price: 280 }
        ]
    },
    {
        id: 12,
        name: "Chicken Alfredo Pizza",
        category: "Pizza",
        description: "Creamy Alfredo base with grilled chicken and parmesan.",
        ingredients: ["Alfredo sauce", "Mozzarella", "Grilled chicken", "Parmesan"],
        image: "/images/pizzas/alfredo.jpg",
        sizes: [
            { name: "Small", price: 170 },
            { name: "Medium", price: 240 },
            { name: "Large", price: 310 }
        ]
    },
    {
        id: 13,
        name: "Mediterranean Pizza",
        category: "Pizza",
        description: "Mediterranean flavors with olives and sun-dried tomatoes.",
        ingredients: ["Tomato sauce", "Mozzarella", "Olives", "Sun-dried tomatoes", "Red onions", "Feta"],
        image: "/images/pizzas/mediterranean.jpg",
        sizes: [
            { name: "Small", price: 160 },
            { name: "Medium", price: 220 },
            { name: "Large", price: 280 }
        ]
    },
    {
        id: 14,
        name: "Cheeseburger Pizza",
        category: "Pizza",
        description: "All the flavors of a cheeseburger in pizza form.",
        ingredients: ["Tomato sauce", "Mozzarella", "Ground beef", "Cheddar", "Pickles", "Onions"],
        image: "/images/pizzas/cheeseburger.jpg",
        sizes: [
            { name: "Small", price: 170 },
            { name: "Medium", price: 230 },
            { name: "Large", price: 290 }
        ]
    },
    {
        id: 15,
        name: "Seafood Pizza",
        category: "Pizza",
        description: "Delicious seafood mix on a cheesy crust.",
        ingredients: ["Tomato sauce", "Mozzarella", "Shrimp", "Calamari", "Garlic", "Parsley"],
        image: "/images/pizzas/seafood.jpg",
        sizes: [
            { name: "Small", price: 200 },
            { name: "Medium", price: 280 },
            { name: "Large", price: 360 }
        ]
    },
    {
        id: 16,
        name: "Philly Cheesesteak Pizza",
        category: "Pizza",
        description: "Inspired by the Philly cheesesteak sandwich.",
        ingredients: ["White sauce", "Mozzarella", "Steak slices", "Green peppers", "Onions"],
        image: "/images/pizzas/philly.jpg",
        sizes: [
            { name: "Small", price: 180 },
            { name: "Medium", price: 250 },
            { name: "Large", price: 320 }
        ]
    },
    {
        id: 17,
        name: "Mexican Taco Pizza",
        category: "Pizza",
        description: "Zesty taco-seasoned beef with fresh toppings.",
        ingredients: ["Tomato sauce", "Mozzarella", "Ground beef", "Cheddar", "Lettuce", "Tomatoes", "Sour cream"],
        image: "/images/pizzas/mexican-taco.jpg",
        sizes: [
            { name: "Small", price: 170 },
            { name: "Medium", price: 240 },
            { name: "Large", price: 310 }
        ]
    },
    {
        id: 18,
        name: "Pesto Chicken Pizza",
        category: "Pizza",
        description: "Fresh basil pesto with grilled chicken and parmesan.",
        ingredients: ["Pesto sauce", "Mozzarella", "Grilled chicken", "Parmesan"],
        image: "/images/pizzas/pesto-chicken.jpg",
        sizes: [
            { name: "Small", price: 160 },
            { name: "Medium", price: 230 },
            { name: "Large", price: 300 }
        ]
    },
    {
        id: 19,
        name: "Sausage & Peppers Pizza",
        category: "Pizza",
        description: "Italian sausage with roasted peppers and onions.",
        ingredients: ["Tomato sauce", "Mozzarella", "Italian sausage", "Bell peppers", "Onions"],
        image: "/images/pizzas/sausage-peppers.jpg",
        sizes: [
            { name: "Small", price: 150 },
            { name: "Medium", price: 210 },
            { name: "Large", price: 270 }
        ]
    },
    {
        id: 20,
        name: "Capricciosa Pizza",
        category: "Pizza",
        description: "Traditional Italian pizza with ham and artichokes.",
        ingredients: ["Tomato sauce", "Mozzarella", "Ham", "Artichokes", "Mushrooms", "Olives"],
        image: "/images/pizzas/capricciosa.jpg",
        sizes: [
            { name: "Small", price: 160 },
            { name: "Medium", price: 220 },
            { name: "Large", price: 280 }
        ]
    },
    {
        id: 21,
        name: "Eggplant Parmesan Pizza",
        category: "Pizza",
        description: "Crispy eggplant slices baked on a cheesy crust.",
        ingredients: ["Tomato sauce", "Mozzarella", "Fried eggplant", "Parmesan"],
        image: "/images/pizzas/eggplant.jpg",
        sizes: [
            { name: "Small", price: 150 },
            { name: "Medium", price: 210 },
            { name: "Large", price: 270 }
        ]
    },
    {
        id: 22,
        name: "Greek Pizza",
        category: "Pizza",
        description: "A Greek-inspired pizza with feta and olives.",
        ingredients: ["Tomato sauce", "Mozzarella", "Feta", "Black olives", "Spinach", "Onions"],
        image: "/images/pizzas/greek.jpg",
        sizes: [
            { name: "Small", price: 170 },
            { name: "Medium", price: 230 },
            { name: "Large", price: 290 }
        ]
    },
    {
        id: 23,
        name: "Buffalo Veggie Pizza",
        category: "Pizza",
        description: "A spicy vegetarian option with buffalo sauce.",
        ingredients: ["Buffalo sauce", "Mozzarella", "Mushrooms", "Onions", "Bell peppers"],
        image: "/images/pizzas/buffalo-veggie.jpg",
        sizes: [
            { name: "Small", price: 140 },
            { name: "Medium", price: 200 },
            { name: "Large", price: 260 }
        ]
    },
    {
        id: 24,
        name: "Prosciutto & Arugula Pizza",
        category: "Pizza",
        description: "Thin prosciutto topped with fresh arugula after baking.",
        ingredients: ["Tomato sauce", "Mozzarella", "Prosciutto", "Arugula", "Parmesan"],
        image: "/images/pizzas/prosciutto-arugula.jpg",
        sizes: [
            { name: "Small", price: 200 },
            { name: "Medium", price: 270 },
            { name: "Large", price: 340 }
        ]
    },
    {
        id: 25,
        name: "Breakfast Pizza",
        category: "Pizza",
        description: "A morning twist with eggs and bacon.",
        ingredients: ["White sauce", "Mozzarella", "Scrambled eggs", "Bacon", "Cheddar"],
        image: "/images/pizzas/breakfast.jpg",
        sizes: [
            { name: "Small", price: 150 },
            { name: "Medium", price: 210 },
            { name: "Large", price: 270 }
        ]
    },

    // Salads
    {
        id: 26,
        name: "Caesar Salad",
        category: "Salad",
        price: 75,
        description: "Crisp romaine with Caesar dressing, croutons, and parmesan.",
        ingredients: ["Romaine lettuce", "Caesar dressing", "Croutons", "Parmesan"],
        image: "/images/salads/ceaser.jpg"
    },
    {
        id: 27,
        name: "Greek Salad",
        category: "Salad",
        price: 110,
        description: "Fresh Greek salad with olives and feta cheese.",
        ingredients: ["Tomatoes", "Cucumber", "Onions", "Olives", "Feta cheese"],
        image: "/images/salads/greek.jpg"
    },
    {
        id: 28,
        name: "Caprese Salad",
        category: "Salad",
        price: 95,
        description: "Tomatoes, mozzarella, and basil with olive oil drizzle.",
        ingredients: ["Tomatoes", "Mozzarella", "Basil", "Olive oil"],
        image: "/images/salads/caprese.jpg"
    },
    {
        id: 29,
        name: "Garden Salad",
        category: "Salad",
        price: 70,
        description: "Mixed greens with fresh vegetables and vinaigrette.",
        ingredients: ["Lettuce", "Cucumber", "Carrots", "Tomatoes", "Vinaigrette"],
        image: "/images/salads/garden.jpg"
    },
    {
        id: 30,
        name: "Spinach Salad",
        category: "Salad",
        price: 80,
        description: "Baby spinach with mushrooms, red onions, and balsamic.",
        ingredients: ["Spinach", "Mushrooms", "Red onions", "Balsamic dressing"],
        image: "/images/salads/spinach.jpg"
    },

    // Drinks
    {
        id: 31,
        name: "Mineral Water",
        category: "Drink",
        price: 15,
        description: "Pure bottled mineral water.",
        ingredients: ["Natural spring water"],
        image: "/images/drinks/water.jpeg"
    },
    {
        id: 32,
        name: "Spiro Spathis - Cola",
        category: "Drink",
        price: 30,
        description: "Classic Cola, chilled and ready.",
        ingredients: ["Carbonated water", "Sugar", "Caramel color"],
        image: "/images/drinks/spiro-cola.jpeg"
    },
    {
        id: 33,
        name: "Spiro Spathis - Apple",
        category: "Drink",
        price: 30,
        description: "Refreshing apple soda.",
        ingredients: ["Carbonated water", "Sugar", "Apple flavor"],
        image: "/images/drinks/spiro-apple.jpg"
    },
    {
        id: 34,
        name: "Spiro Spathis - Grape",
        category: "Drink",
        price: 30,
        description: "Sweet grape soda.",
        ingredients: ["Carbonated water", "Sugar", "Grape flavor"],
        image: "/images/drinks/spiro-grape.png"
    },
    {
        id: 35,
        name: "Spiro Spathis - Orange",
        category: "Drink",
        price: 30,
        description: "Zesty orange soda.",
        ingredients: ["Carbonated water", "Sugar", "Orange flavor"],
        image: "/images/drinks/spiro-orange.webp"
    },
    {
        id: 36,
        name: "Spiro Spathis - Soda",
        category: "Drink",
        price: 30,
        description: "Classic soda water.",
        ingredients: ["Carbonated water", "Sugar"],
        image: "/images/drinks/spiro-soda.jpg"
    }
];
