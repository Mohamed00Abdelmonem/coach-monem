/* =========================
   Helper Functions
========================= */

// Shuffle array (Fisher–Yates)
function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Fallback meal if everything is filtered
function fallbackMeal() {
  return {
    name: "Custom Safe Meal",
    calories: 0,
    type: []
  };
}

// Filter meals by allergies & preferences
function filterMeals(meals, allergies, preferences) {
  return meals.filter(meal => {
    // remove meals with allergies
    const hasAllergy = meal.type.some(t => allergies.includes(t));
    if (hasAllergy) return false;

    // if user selected preferences, respect them
    if (preferences.length > 0) {
      return meal.type.some(t => preferences.includes(t));
    }

    return true;
  });
}

/* =========================
   Main Meal Planner
========================= */

function generateMealPlan(nationality, allergies, preferences) {
  const data = mealsDB[nationality];

  // Filter + shuffle meals
  let breakfasts = shuffleArray(
    filterMeals(data.breakfast, allergies, preferences)
  );
  let lunches = shuffleArray(
    filterMeals(data.lunch, allergies, preferences)
  );
  let dinners = shuffleArray(
    filterMeals(data.dinner, allergies, preferences)
  );

  let bIndex = 0;
  let lIndex = 0;
  let dIndex = 0;

  const days = [];

  for (let day = 1; day <= 7; day++) {

    // reshuffle if list is finished
    if (bIndex >= breakfasts.length) {
      breakfasts = shuffleArray(breakfasts);
      bIndex = 0;
    }
    if (lIndex >= lunches.length) {
      lunches = shuffleArray(lunches);
      lIndex = 0;
    }
    if (dIndex >= dinners.length) {
      dinners = shuffleArray(dinners);
      dIndex = 0;
    }

    days.push({
      day: `Day ${day}`,
      breakfast: breakfasts[bIndex++] || fallbackMeal(),
      lunch: lunches[lIndex++] || fallbackMeal(),
      dinner: dinners[dIndex++] || fallbackMeal()
    });
  }

  return days;
}
