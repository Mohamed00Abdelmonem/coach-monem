// ===== GLOBAL PDF DATA =====
let globalPdfData = null;

// ===== FORM & OUTPUT =====
const form = document.getElementById("userForm");
const output = document.getElementById("output");

// ===== SUBMIT HANDLER =====
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // ===== READ INPUTS =====
  const name = document.getElementById("nameInput").value.trim();
  const age = +document.getElementById("ageInput").value;
  const gender = document.getElementById("genderInput").value;
  const weight = +document.getElementById("weightInput").value;
  const height = +document.getElementById("heightInput").value;
  const activity = +document.getElementById("activityInput").value;
  const goal = document.getElementById("goalInput").value;
  const nationality = document.getElementById("nationalityInput").value;

  const allergies = [...document.querySelectorAll(".allergy:checked")]
    .map(el => el.value);

  const preferences = [...document.querySelectorAll(".foodPref:checked")]
    .map(el => el.value);

  // ===== CALCULATIONS =====
  const bmi = calculateBMI(weight, height);
  const bmr = calculateBMR(weight, height, age, gender);
  const calories = calculateCalories(bmr, activity, goal);
  const macros = calculateMacros(calories, weight);

  // ===== MEAL PLAN =====
  const mealPlan = generateMealPlan(nationality, allergies, preferences);

  // ===== STORE DATA FOR PDF =====
  globalPdfData = {
    name,
    bmi,
    bmiStatus: bmiStatus(bmi),
    calories,
    macros,
    mealPlan
  };

  // ===== RENDER RESULT =====
  output.innerHTML = `
    <div class="result-card">

      <h2>Hello ${name} 👋</h2>

      <p><strong>BMI:</strong> ${bmi} (${bmiStatus(bmi)})</p>
      <p><strong>Daily Calories:</strong> ${calories} kcal</p>

      <h5>Macronutrients</h5>
      <ul>
        <li>Protein: ${macros.protein} g</li>
        <li>Fat: ${macros.fat} g</li>
        <li>Carbs: ${macros.carbs} g</li>
      </ul>

      <h4 class="mt-3">7-Day Meal Plan</h4>

      ${mealPlan.map(day => `
        <div class="meal-box">
          <strong>${day.day}</strong><br>
          Breakfast: ${day.breakfast.name} (${day.breakfast.calories} kcal)<br>
          Lunch: ${day.lunch.name} (${day.lunch.calories} kcal)<br>
          Dinner: ${day.dinner.name} (${day.dinner.calories} kcal)
        </div>
      `).join("")}

      <button class="btn btn-dark mt-3" id="downloadPdfBtn">
        📄 Download PDF
      </button>

    </div>
  `;

  // ===== PDF BUTTON EVENT =====
  document.getElementById("downloadPdfBtn")
    .addEventListener("click", function () {
      if (!globalPdfData) {
        alert("No data to export");
        return;
      }
      downloadPDF(globalPdfData);
    });
});
