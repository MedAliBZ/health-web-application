let age1=document.getElementById("age1")
let height1=document.getElementById("height1")
let weight1=document.getElementById("weight1")
let gender1=document.getElementById("gender1")
let goal1=document.getElementById("goal1")

let calculate1= document.getElementById("calculate1")

let calories1=document.getElementById("calories1")
let gl1=document.getElementById("gl1")


calculate1.addEventListener("click",function result(){
	fetch(`https://fitness-calculator.p.rapidapi.com/dailycalory?heigth=${height1.value}&age=${age1.value}&gender=${gender1.value}&weigth=${weight1.value}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "fitness-calculator.p.rapidapi.com",
		"x-rapidapi-key": "34d319fce6msh24364e0e0846afbp16acf3jsneb303f62097d"
	}
})
.then(response => {
	return response.json()
}).then(data=>{
	if(goal1.value=="Maintain weight"){
		calories1.innerHTML=data.data.goals[`maintain weight`]
		gl1.innerHTML="maintain weight"
		gl1.nextSibling.innerHTML=""
	}
	else if (goal1.value=="Weight gain" || goal1.value=="Mild weight gain" || goal1.value=="Extreme weight gain"){
		calories1.innerHTML=data.data.goals[`${goal1.value}`].calory
		gl1.innerHTML=`gain ${data.data.goals[`${goal1.value}`]["gain weight"]}`
		gl1.nextSibling.innerHTML=" per week"
	}
	else {
		calories1.innerHTML=data.data.goals[`${goal1.value}`].calory
		gl1.innerHTML=`lose ${data.data.goals[`${goal1.value}`]["loss weight"]}`
		gl1.nextSibling.innerHTML=" per week"
	}
})
.catch(err => {
	console.log(err);
});
})