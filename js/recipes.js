const recipes = [
  {
    id: 1,
    title: "Fluffy Pancakes",
    category: "Breakfast",
    image: "assets/images/pancakes.jpg",
    description: "Soft and fluffy pancakes served with maple syrup.",
    cookingTime: "20 Minutes",
    ingredients: [
      "1 Cup Flour",
      "1 Egg",
      "1 Cup Milk",
      "2 Tbsp Sugar",
      "1 Tsp Baking Powder",
      "Butter"
    ],
    instructions: [
      "Mix all dry ingredients in a bowl.",
      "Add milk and egg, then whisk until smooth.",
      "Heat a non-stick pan.",
      "Pour batter and cook until golden brown.",
      "Serve with syrup and butter."
    ]
  },

  {
    id: 2,
    title: "Cheese Omelette",
    category: "Breakfast",
    image: "assets/images/omlette.jpg",
    description: "A protein-rich cheese omelette perfect for mornings.",
    cookingTime: "10 Minutes",
    ingredients: [
      "2 Eggs",
      "Cheese",
      "Salt",
      "Black Pepper",
      "Butter"
    ],
    instructions: [
      "Beat eggs with salt and pepper.",
      "Heat butter in a pan.",
      "Pour eggs into pan.",
      "Add cheese on top.",
      "Fold and serve hot."
    ]
  },

  {
    id: 3,
    title: "French Toast",
    category: "Breakfast",
    image: "assets/images/french-toast.jpg",
    description: "Golden French toast topped with honey and berries.",
    cookingTime: "15 Minutes",
    ingredients: [
      "Bread Slices",
      "2 Eggs",
      "Milk",
      "Honey",
      "Butter"
    ],
    instructions: [
      "Whisk eggs and milk together.",
      "Dip bread slices into mixture.",
      "Cook on buttered pan until golden.",
      "Drizzle with honey.",
      "Serve warm."
    ]
  },

  {
    id: 4,
    title: "Chicken Biryani",
    category: "Lunch",
    image: "assets/images/biryani.jpg",
    description: "Aromatic rice cooked with spiced chicken.",
    cookingTime: "60 Minutes",
    ingredients: [
      "Chicken",
      "Basmati Rice",
      "Onions",
      "Yogurt",
      "Biryani Masala"
    ],
    instructions: [
      "Marinate chicken.",
      "Cook rice separately.",
      "Prepare chicken gravy.",
      "Layer rice and chicken.",
      "Cook on low heat and serve."
    ]
  },

  {
    id: 5,
    title: "Vegetable Fried Rice",
    category: "Lunch",
    image: "assets/images/fried-rice.jpg",
    description: "Quick and delicious fried rice with vegetables.",
    cookingTime: "25 Minutes",
    ingredients: [
      "Rice",
      "Carrots",
      "Peas",
      "Soy Sauce",
      "Spring Onions"
    ],
    instructions: [
      "Cook rice and let it cool.",
      "Stir-fry vegetables.",
      "Add rice and soy sauce.",
      "Mix well.",
      "Serve hot."
    ]
  },

  {
    id: 6,
    title: "Creamy White Sauce Pasta",
    category: "Lunch",
    image: "assets/images/pasta.jpg",
    description: "Creamy pasta tossed in rich white sauce.",
    cookingTime: "30 Minutes",
    ingredients: [
      "Pasta",
      "Milk",
      "Butter",
      "Flour",
      "Cheese"
    ],
    instructions: [
      "Boil pasta.",
      "Prepare white sauce.",
      "Mix pasta with sauce.",
      "Add cheese.",
      "Serve warm."
    ]
  },

  {
    id: 7,
    title: "Butter Chicken",
    category: "Dinner",
    image: "assets/images/butter-chicken.jpg",
    description: "Creamy and flavorful Indian butter chicken.",
    cookingTime: "45 Minutes",
    ingredients: [
      "Chicken",
      "Tomatoes",
      "Cream",
      "Butter",
      "Spices"
    ],
    instructions: [
      "Cook marinated chicken.",
      "Prepare tomato gravy.",
      "Add cream and butter.",
      "Combine chicken with gravy.",
      "Serve with naan or rice."
    ]
  },

  {
    id: 8,
    title: "Grilled Fish",
    category: "Dinner",
    image: "assets/images/grilled-fish.jpg",
    description: "Healthy grilled fish with herbs and lemon.",
    cookingTime: "35 Minutes",
    ingredients: [
      "Fish Fillet",
      "Lemon",
      "Olive Oil",
      "Garlic",
      "Herbs"
    ],
    instructions: [
      "Season fish.",
      "Marinate with herbs and lemon.",
      "Grill until cooked through.",
      "Garnish with lemon slices.",
      "Serve hot."
    ]
  },

  {
    id: 9,
    title: "Chicken Curry",
    category: "Dinner",
    image: "assets/images/chicken-curry.jpg",
    description: "Classic chicken curry with rich spices.",
    cookingTime: "50 Minutes",
    ingredients: [
      "Chicken",
      "Onions",
      "Tomatoes",
      "Garlic",
      "Spices"
    ],
    instructions: [
      "Cook onions until golden.",
      "Add spices and tomatoes.",
      "Add chicken.",
      "Simmer until tender.",
      "Serve with rice."
    ]
  },

  {
    id: 10,
    title: "Chocolate Cake",
    category: "Dessert",
    image: "assets/images/chocolate-cake.jpg",
    description: "Rich chocolate cake for sweet cravings.",
    cookingTime: "50 Minutes",
    ingredients: [
      "Flour",
      "Cocoa Powder",
      "Eggs",
      "Sugar",
      "Butter"
    ],
    instructions: [
      "Prepare cake batter.",
      "Pour into baking pan.",
      "Bake until done.",
      "Cool completely.",
      "Decorate and serve."
    ]
  },

  {
    id: 11,
    title: "Chocolate Brownie",
    category: "Dessert",
    image: "assets/images/brownie.jpg",
    description: "Fudgy brownies loaded with chocolate flavor.",
    cookingTime: "35 Minutes",
    ingredients: [
      "Chocolate",
      "Butter",
      "Sugar",
      "Flour",
      "Eggs"
    ],
    instructions: [
      "Melt chocolate and butter.",
      "Mix ingredients.",
      "Bake in tray.",
      "Cool before cutting.",
      "Serve."
    ]
  },

  {
    id: 12,
    title: "Ice Cream Sundae",
    category: "Dessert",
    image: "assets/images/sundae.jpg",
    description: "Ice cream topped with chocolate syrup and nuts.",
    cookingTime: "5 Minutes",
    ingredients: [
      "Vanilla Ice Cream",
      "Chocolate Syrup",
      "Nuts",
      "Whipped Cream"
    ],
    instructions: [
      "Place ice cream in bowl.",
      "Add chocolate syrup.",
      "Top with nuts.",
      "Add whipped cream.",
      "Serve immediately."
    ]
  }
];