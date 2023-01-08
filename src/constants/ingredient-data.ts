// TODO: Convert this to the top 5 of each

export const INGREDIENT_DATA = {
    '🥛 Milk, egg products': ['Beaten egg',
        'Butter',
        'Buttermilk',
        'Cottage cheese',
        'Cream',
        'Egg noodles',
        'Egg white',
        'Egg whites',
        'Egg yolk',
        'Egg yolks',
        'Eggs',
        'Ground nutmeg',
        'Milk',
        'Mozzarella',
        'Parmesan cheese',
        'Skim milk',
        'Vanilla',
        'Yogurt'],
    '🥜 Fats and Oils': ['Canola oil', 'Mayonnaise', 'Oil', 'Oil cooking spray'],
    '🍎 Fruits': ['Apple',
        'Apricot',
        'Banana',
        'Blueberries',
        'Mango',
        'Oranges',
        'Peach',
        'Pear',
        'Pears',
        'Pineapple',
        'Raisins',
        'Strawberries'],
    '🌾 Grains': ['Almond',
        'Barley',
        'Brown sugar',
        'Cashew',
        'Chocolate chips',
        'Cookies',
        'Corn tortillas',
        'Egg roll wrappers',
        'Flour',
        'Lasagna noodles',
        'Linguine',
        'Oats',
        'Pasta',
        'Pecans',
        'Quinoa',
        'Ramen noodles',
        'Rice',
        'Rice noodles',
        'Spaghetti',
        'Walnuts',
        'Wheat',
        'Wheat bran'],
    '🌿 Herbs and spices': ['Basil',
        'Basil leaves',
        'Cayenne',
        'Cayenne pepper',
        'Chili powder',
        'Cilantro',
        'Cilantro leaves',
        'Cloves',
        'Cumin',
        'Cumin seeds',
        'Curry powder',
        'Ground chipotle chile',
        'Ground cinnamon',
        'Ground cumin',
        'Ground ginger',
        'Marjoram',
        'Mexican',
        'Mint leaves',
        'Oregano',
        'Paprika',
        'Parsley',
        'Powder',
        'Rosemary',
        'Sage',
        'Salt',
        'Tarragon',
        'Thyme'],
    '🍗 Meats': ['Beef',
        'Beef round',
        'Chicken',
        'Salmon',
        'Shrimp',
        'Sirloin steak',
        'Tuna',
        'Turkey'],
    '🍝 Pasta, rice, pulses': ['Beans',
        'Black beans',
        'Black-eyed peas',
        'Chickpeas',
        'Kidney beans',
        'Lentils',
        'Peas',
        'Split peas',
        'White beans'],
    '🥦 Vegetables ': ['Bell pepper',
        'Broccoli',
        'Brussels sprouts',
        'Carrot',
        'Carrots',
        'Cauliflower',
        'Celery',
        'Chard',
        'Chiles',
        'Garlic',
        'Kale',
        'Leeks',
        'Lettuce',
        'Mushrooms',
        'Olives',
        'Onion',
        'Onions',
        'Peppers',
        'Scallion',
        'Shallot',
        'Spinach',
        'Tomato',
        'Tomatoes',
        'Zucchini']
}


export const FITNESS_GOALS: { [key: string]: string } = {
    "Gain muscle": "muscleGain",
    "Lose fat": "fatLoss",
    "Lose weight": "weightLoss"
}

export const FITNESS_GOALS_PARAMETERS: { [key: string]: string[] } = {
    "muscleGain": ["protein", "carbohydrates"],
    "fatLoss": ["protein", "carbohyddrates", "sugar", "fat"],
    "weightLoss": ["protein", "carbohydrates"],
}