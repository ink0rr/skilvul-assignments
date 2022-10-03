const form = document.getElementById("form")
const result = document.getElementById("result")

form.addEventListener("submit", (event) => {
  event.preventDefault()
  const data = new FormData(event.target)
  const weight = data.get("weight")
  const height = data.get("height")

  const bmi = weight / (height / 100) ** 2
  const category = bmi < 18.5 ? "Underweight" : bmi < 25 ? "Normal" : bmi < 30 ? "Overweight" : "Obese"

  result.innerHTML = /*html*/ `
    Your BMI is <strong>${bmi.toFixed(1)}</strong>
    Which is considered <strong>${category}</strong>`
})
