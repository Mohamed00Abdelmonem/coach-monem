function calculateBMI(weight, height) {
  const h = height / 100;
  return +(weight / (h * h)).toFixed(1);
}

function bmiStatus(bmi) {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Normal";
  if (bmi < 30) return "Overweight";
  return "Obese";
}

function calculateBMR(weight, height, age, gender) {
  return gender === "male"
    ? 10 * weight + 6.25 * height - 5 * age + 5
    : 10 * weight + 6.25 * height - 5 * age - 161;
}

function calculateCalories(bmr, activity, goal) {
  let calories = bmr * activity;

  if (goal === "lose") calories -= 500;
  if (goal === "gain") calories += 300;

  return Math.round(calories);
}

function calculateMacros(calories, weight) {
  const protein = Math.round(weight * 2);
  const proteinCalories = protein * 4;

  const fatCalories = calories * 0.25;
  const fat = Math.round(fatCalories / 9);

  const carbsCalories = calories - (proteinCalories + fatCalories);
  const carbs = Math.round(carbsCalories / 4);

  return { protein, fat, carbs };
}
