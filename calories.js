let age=document.getElementById("age")
let height=document.getElementById("height")
let weight=document.getElementById("weight")
let gender=document.getElementById("gender")
let goal=document.getElementById("goal")

let calculate = document.getElementById("calculate")

let calories=document.getElementById("calories")
let gl=document.getElementById("gl")


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
}).then(data=>{
	if(goal.value=="Maintain weight"){
		calories.innerHTML=data.data.goals[`maintain weight`]
		gl.innerHTML="maintain weight"
		gl.nextSibling.innerHTML=""
	}
	else if (goal.value=="Weight gain" || goal.value=="Mild weight gain" || goal.value=="Extreme weight gain"){
		calories.innerHTML=data.data.goals[`${goal.value}`].calory
		gl.innerHTML=`gain ${data.data.goals[`${goal.value}`]["gain weight"]}`
		gl.nextSibling.innerHTML=" per week"
	}
	else {
		calories.innerHTML=data.data.goals[`${goal.value}`].calory
		gl.innerHTML=`lose ${data.data.goals[`${goal.value}`]["loss weight"]}`
		gl.nextSibling.innerHTML=" per week"
	}
})
.catch(err => {
	console.log(err);
});
})