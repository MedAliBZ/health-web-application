let age = document.getElementById("age")
let height = document.getElementById("height")
let weight = document.getElementById("weight")
let calculate = document.getElementById("calculate")
let resultat = document.querySelector(".resultat")


let bmi = document.getElementById("bmii")
let health = document.getElementById("health")

calculate.addEventListener("click", function calcul() {
	fetch(`https://fitness-calculator.p.rapidapi.com/bmi?age=${age.value}&height=${height.value}&weight=${weight.value}`, {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "fitness-calculator.p.rapidapi.com",
			"x-rapidapi-key": "34d319fce6msh24364e0e0846afbp16acf3jsneb303f62097d"
		}
	})
		.then(response => {
			return response.json();
		})
		.then(data => {
			if (data.bmi < 25 && data.bmi > 23) {
				bmi.style.color = "green"
				health.style.color = "green"
				health.innerHTML = "perfect"
			}
			else if (data.bmi >= 40) {
				bmi.style.color = "#E71D36"
				health.style.color = "#E71D36"
				health.innerHTML = "obese class 3"
			}
			else if (data.bmi >= 35) {
				bmi.style.color = "#E71D36"
				health.style.color = "#E71D36"
				health.innerHTML = "obese class 2"
			}
			else if (data.bmi < 35 && data.bmi >= 30) {
				bmi.style.color = "#E71D36"
				health.style.color = "#E71D36"
				health.innerHTML = "obese class 1"
			}
			else if (data.bmi < 30 && data.bmi >= 25) {
				bmi.style.color = "#FF9F1C"
				health.style.color = "#FF9F1C"
				health.innerHTML = "overweight"
			}
			else if (data.bmi < 23 && data.bmi >= 18.5) {
				bmi.style.color = "#457b9d"
				health.style.color = "#457b9d"
				health.innerHTML = "normal"
			}
			else if (data.bmi < 18.5 && data.bmi >= 17) {
				bmi.style.color = "#FF9F1C"
				health.style.color = "#FF9F1C"
				health.previousSibling.innerHTML+=" in a "
				health.innerHTML = "mild thinness"
			}
			else if (data.bmi < 17 && data.bmi >= 16){
				bmi.style.color = "#E71D36"
				health.style.color = "#E71D36"
				health.previousSibling.innerHTML+=" in a "
				health.innerHTML ="moderate thinness"
			}
			else{
				bmi.style.color = "#E71D36"
				health.style.color = "#E71D36"
				health.previousSibling.innerHTML+=" in a "
				health.innerHTML ="severe thinness"
			}

			bmi.innerHTML = data.bmi.toFixed(2)
			resultat.style.display = "block"
			console.log(data)
		})
		.catch(err => {
			console.log(err);
		});
})
