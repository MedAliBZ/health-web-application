let age = document.getElementById("age")
let height = document.getElementById("height")
let weight = document.getElementById("weight")
let calculate = document.getElementById("calculate")
let resultat = document.querySelector(".resultat")
let spinner=document.querySelectorAll(".spinner-grow")

let bmi = document.getElementById("bmii")
let health = document.getElementById("health")
let ktiba1=document.querySelector(".ktiba1")



calculate.addEventListener("click", function calcul(){
	spinner[0].style.display="block"
	resultat.style.display = "inherit"
	ktiba1.style.display = "none"
	event.preventDefault();
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
				health.previousSibling.innerHTML="you are  "
				health.innerHTML = "perfect"
			}
			else if (data.bmi >= 40) {
				bmi.style.color = "#E71D36"
				health.style.color = "#E71D36"
				health.previousSibling.innerHTML="you are  "
				health.innerHTML = "obese class 3"
			}
			else if (data.bmi >= 35) {
				bmi.style.color = "#E71D36"
				health.style.color = "#E71D36"
				health.previousSibling.innerHTML="you are  "
				health.innerHTML = "obese class 2"
			}
			else if (data.bmi < 35 && data.bmi >= 30) {
				bmi.style.color = "#E71D36"
				health.style.color = "#E71D36"
				health.previousSibling.innerHTML="you are  "
				health.innerHTML = "obese class 1"
			}
			else if (data.bmi < 30 && data.bmi >= 25) {
				bmi.style.color = "#FF9F1C"
				health.style.color = "#FF9F1C"
				health.previousSibling.innerHTML="you are  "
				health.innerHTML = "overweight"
			}
			else if (data.bmi < 23 && data.bmi >= 18.5) {
				bmi.style.color = "#457b9d"
				health.style.color = "#457b9d"
				health.previousSibling.innerHTML="you are  "
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
			spinner[0].style.display="none"
			resultat.style.display = "block"
			ktiba1.style.display = "inherit"
			console.log(data)
		})
		.catch(err => {
			console.log(err);
		});
})




// calories



let age1=document.getElementById("age1")
let height1=document.getElementById("height1")
let weight1=document.getElementById("weight1")
let gender1=document.getElementById("gender1")
let goal1=document.getElementById("goal1")

let calculate1= document.getElementById("calculate1")

let calories1=document.getElementById("calories1")
let gl1=document.getElementById("gl1")
let resultat1=document.querySelector(".resultat1")
let ktiba=document.querySelector(".ktiba")


calculate1.addEventListener("click",function result(){
	resultat1.style.display="inherit"
	spinner[1].style.display="inherit"
	ktiba.style.display="none"
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
		spinner[1].style.display="none"
		ktiba.style.display="inherit"
		calories1.innerHTML=data.data.goals[`maintain weight`]
		gl1.innerHTML="maintain weight"
		gl1.nextSibling.innerHTML=""
	}
	else if (goal1.value=="Weight gain" || goal1.value=="Mild weight gain" || goal1.value=="Extreme weight gain"){
		spinner[1].style.display="none"
		ktiba.style.display="inherit"
		calories1.innerHTML=data.data.goals[`${goal1.value}`].calory
		gl1.innerHTML=`gain ${data.data.goals[`${goal1.value}`]["gain weight"]}`
		gl1.nextSibling.innerHTML=" per week"
	}
	else {
		spinner[1].style.display="none"
		ktiba.style.display="inherit"
		calories1.innerHTML=data.data.goals[`${goal1.value}`].calory
		gl1.innerHTML=`lose ${data.data.goals[`${goal1.value}`]["loss weight"]}`
		gl1.nextSibling.innerHTML=" per week"
	}
})
.catch(err => {
	console.log(err);
});
})


// customiser


let dropnav=document.querySelector(".dropdown-menu")
let nav2=document.querySelector(".navbar")
let navcolor=document.getElementById("navcolor")
let navchange=document.getElementById("navchange")

let bodycolor=document.getElementById("bodycolor")
let bodychange=document.getElementById("bodychange")

let footercolor=document.getElementById("footercolor")
let footerchange=document.getElementById("footerchange")
let foot=document.querySelector(".site-footer")

let navtextcolor=document.getElementById("navtextcolor")
let navtextchange=document.getElementById("navtextchange")
let text2=document.getElementsByClassName("nav-link")

let footertextcolor=document.getElementById("footertextcolor")
let footertextchange=document.getElementById("footertextchange")
let footertext=document.getElementsByClassName("cus")
let footertexta=document.getElementsByClassName("cusa")

let bodybuttoncolor=document.getElementById("bodybuttonscolor")
let bodybuttonchange=document.getElementById("bodybuttonschange")
let bodybutton=document.getElementsByClassName("btn")

let bodytextcolor=document.getElementById("bodytextcolor")
let bodytextchange=document.getElementById("bodytextchange")
let bodytext=document.getElementsByClassName("loun")

bodytextcolor.value="#FFFFFF"
bodybuttoncolor.value="#457b9d"
navcolor.value="#457b9d"
bodycolor.value="#011627"
footercolor.value="#457b9d"
footertextcolor.value="#011627"



bodytextchange.addEventListener("click",function ch(){
	event.preventDefault();
	for(let i=0;i<bodytext.length;i++)
	bodytext[i].style.cssText=`color: ${bodytextcolor.value} !important;`
	
})

bodybuttonchange.addEventListener("click",function ch(){
	event.preventDefault();
	for(let i=0;i<bodybutton.length;i++){
	bodybutton[i].style.cssText=`color: ${bodybuttoncolor.value} !important; border-color:${bodybuttoncolor.value} !important;`
	}
	for(let i=0;i<bodybutton.length;i++){
		bodybutton[i].addEventListener("mouseover",function ch(){
			event.preventDefault();
			bodybutton[i].style.cssText=`color: ${bodycolor.value} !important; background-color:${bodybuttoncolor.value} !important; outline-color:${bodybuttoncolor.value} !important;  border-color:${bodybuttoncolor.value} !important;`
		})}
	
	for(let i=0;i<bodybutton.length;i++){
		bodybutton[i].addEventListener("mouseout",function ch(){
			event.preventDefault();
			bodybutton[i].style.cssText=`color: ${bodybuttoncolor.value} !important; border-color:${bodybuttoncolor.value} !important;`
		})}
})


for(let i=0;i<footertexta.length;i++){
	footertexta[i].addEventListener("mouseout",function ch(){
		event.preventDefault();
		footertexta[i].style.cssText=`color: ${footertextcolor.value} !important;`
	})}

for(let i=0;i<footertexta.length;i++){
footertexta[i].addEventListener("mouseover",function ch(){
	event.preventDefault();
	footertexta[i].style.cssText=`color: #a8dadc !important;`
})}

footertextchange.addEventListener("click",function ch(){
	event.preventDefault();
	for(let i=0;i<footertext.length;i++)
	footertext[i].style.cssText=`color: ${footertextcolor.value} !important;`
	document.hr.style.cssText=`color: ${footertextcolor.value} !important;`
})

navtextchange.addEventListener("click",function ch(){
	event.preventDefault();
	for(let i=0;i<text2.length;i++)
	text2[i].style.cssText=`color: ${navtextcolor.value} !important;`
})

navchange.addEventListener("click",function ch(){
	event.preventDefault();
	nav2.style.cssText=`background-color: ${navcolor.value} !important;`
	dropnav.style.cssText=`background-color: ${navcolor.value} !important;`
})

bodychange.addEventListener("click",function ch(){
	event.preventDefault();
	document.body.style.cssText=`background-color: ${bodycolor.value} !important;`
})

footerchange.addEventListener("click",function ch(){
	event.preventDefault();
	foot.style.cssText=`background-color: ${footercolor.value} !important;`
})
	
// change page

let nBMI=document.getElementById("nBMI")
let nCAL=document.getElementById("nCAL")
let nCUS=document.getElementById("nCUS")
let m=document.getElementById("main")
let m1=document.getElementById("main1")
let m2=document.getElementById("main2")

nBMI.addEventListener("click",function dis(){
	m.style.display="block"
	m1.style.display="none"
	m2.style.display="none"
})

nCAL.addEventListener("click",function dis(){
	m1.style.display="block"
	m.style.display="none"
	m2.style.display="none"
})

nCUS.addEventListener("click",function dis(){
	m2.style.display="block"
	m1.style.display="none"
	m.style.display="none"
})