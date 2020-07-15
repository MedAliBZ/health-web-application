let age=document.getElementById("age")
let height=document.getElementById("height")
let weight=document.getElementById("weight")
let gender=document.getElementById("gender")
let goal=document.getElementById("goal")

let calculate = document.getElementById("calculate")
let k=goal.value
console.log(k)


calculate.addEventListener("click",function result(){
	fetch(`https://fitness-calculator.p.rapidapi.com/dailycalory?heigth=${height.value}&age=${age.value}&gender=${gender.value}&weigth=${weight.value}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "fitness-calculator.p.rapidapi.com",
		"x-rapidapi-key": "34d319fce6msh24364e0e0846afbp16acf3jsneb303f62097d"
	}
})
.then(response => {
	return response.json()
}).then(data=>console.log(data.data.goals["maintain weight"]))
.catch(err => {
	console.log(err);
});
})