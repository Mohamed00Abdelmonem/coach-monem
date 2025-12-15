const mealsDB = {
  egyptian: {
  breakfast: [
    { name: "Fava Beans & Baladi Bread", calories: 400, type: ["vegetarian"] },
    { name: "Boiled Eggs & Bread", calories: 450, type: ["eggs"] },
    { name: "Cottage Cheese & Vegetables", calories: 350, type: ["dairy"] },
    { name: "Yogurt & Oats", calories: 380, type: ["dairy"] },
    { name: "Grilled Falafel", calories: 420, type: ["vegetarian"] }
  ],
  lunch: [
    { name: "Grilled Chicken & Rice", calories: 650, type: ["chicken"] },
    { name: "Grilled Kofta & Potatoes", calories: 700, type: ["meat"] },
    { name: "Grilled Fish & Salad", calories: 600, type: ["fish"] },
    { name: "Molokhia & Rice", calories: 550, type: ["vegetarian"] },
    { name: "Lentils & Bread", calories: 520, type: ["vegetarian"] }
  ],
  dinner: [
    { name: "Tuna Salad", calories: 450, type: ["fish"] },
    { name: "Egg Omelette", calories: 400, type: ["eggs"] },
    { name: "Cheese & Vegetables", calories: 350, type: ["dairy"] },
    { name: "Fava Bean Salad", calories: 380, type: ["vegetarian"] }
  ]
},


  german: {
    breakfast: [
      { name: "Brot & Käse", calories: 420, type: ["dairy"] },
      { name: "Haferflocken mit Milch", calories: 450, type: ["dairy"] },
      { name: "Eier & Vollkornbrot", calories: 430, type: ["eggs"] }
    ],
    lunch: [
      { name: "Hähnchen Schnitzel", calories: 680, type: ["chicken"] },
      { name: "Rindfleisch & Kartoffeln", calories: 750, type: ["meat"] },
      { name: "Fisch mit Gemüse", calories: 620, type: ["fish"] }
    ],
    dinner: [
      { name: "Quark & Früchte", calories: 400, type: ["dairy"] },
      { name: "Omelette & Salat", calories: 420, type: ["eggs"] }
    ]
  },

  american: {
    breakfast: [
      { name: "Oatmeal & Peanut Butter", calories: 480, type: ["vegetarian"] },
      { name: "Eggs & Toast", calories: 500, type: ["eggs"] },
      { name: "Greek Yogurt & Berries", calories: 420, type: ["dairy"] }
    ],
    lunch: [
      { name: "Grilled Chicken Sandwich", calories: 650, type: ["chicken"] },
      { name: "Beef Steak & Rice", calories: 750, type: ["meat"] },
      { name: "Salmon & Vegetables", calories: 700, type: ["fish"] }
    ],
    dinner: [
      { name: "Chicken Salad", calories: 520, type: ["chicken"] },
      { name: "Egg Omelette", calories: 450, type: ["eggs"] }
    ]
  }
};
