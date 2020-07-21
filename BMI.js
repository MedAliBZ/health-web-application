let age = document.getElementById("age")
let height = document.getElementById("height")
let weight = document.getElementById("weight")
let calculate = document.getElementById("calculate")
let resultat = document.querySelector(".resultat")
let spinner = document.querySelectorAll(".spinner-grow")

let bmi = document.getElementById("bmii")
let health = document.getElementById("health")
let ktiba1 = document.querySelector(".ktiba1")


let gender = document.getElementById("gender")
let ideall = document.getElementById("ideal")
var ideal = 0


calculate.addEventListener("click", function () {
	spinner[0].style.display = "block"
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
			if (age.value == "" || weight.value == "" || height.value == "") {
				resultat.style.display = "none"
				alert("You got some empty inputs")
			}
			else if (!parseInt(age.value) || !parseInt(height.value) || !parseInt(weight.value)) {
				resultat.style.display = "none"
				alert("Something wrong happened, please check your inputs")
			}
			else {
				age1.value = age.value
				height1.value = height.value
				weight1.value = weight.value
				gender1.value = gender.value
				if (gender.value == "male") {
					ideal = 50 + (0.91 * (parseInt(height.value) - 152.4))
					ideall.innerHTML = ideal.toFixed(1)
				}
				else {
					ideal = 45.5 + (0.91 * (parseInt(height.value) - 152.4))
					ideall.innerHTML = ideal.toFixed(1)
				}

				if (parseInt(weight.value) < ideal + 2 && parseInt(weight.value) > ideal - 2) {
					bmi.style.color = "green"
					health.style.color = "green"
					health.previousSibling.innerHTML = "you are  "
					health.innerHTML = "perfect"
				}
				else if (data.bmi >= 40) {
					bmi.style.color = "#E71D36"
					health.style.color = "#E71D36"
					health.previousSibling.innerHTML = "you are  "
					health.innerHTML = "obese class 3"
				}
				else if (data.bmi >= 35) {
					bmi.style.color = "#E71D36"
					health.style.color = "#E71D36"
					health.previousSibling.innerHTML = "you are  "
					health.innerHTML = "obese class 2"
				}
				else if (data.bmi < 35 && data.bmi >= 30) {
					bmi.style.color = "#E71D36"
					health.style.color = "#E71D36"
					health.previousSibling.innerHTML = "you are  "
					health.innerHTML = "obese class 1"
				}
				else if (data.bmi < 30 && data.bmi >= 25) {
					bmi.style.color = "#FF9F1C"
					health.style.color = "#FF9F1C"
					health.previousSibling.innerHTML = "you are  "
					health.innerHTML = "overweight"
				}
				else if (data.bmi < 25 && data.bmi >= 18.5) {
					bmi.style.color = "#457b9d"
					health.style.color = "#457b9d"
					health.previousSibling.innerHTML = "you are  "
					health.innerHTML = "normal"
				}
				else if (data.bmi < 18.5 && data.bmi >= 17) {
					bmi.style.color = "#FF9F1C"
					health.style.color = "#FF9F1C"
					health.previousSibling.innerHTML += " in a "
					health.innerHTML = "mild thinness"
				}
				else if (data.bmi < 17 && data.bmi >= 16) {
					bmi.style.color = "#E71D36"
					health.style.color = "#E71D36"
					health.previousSibling.innerHTML += " in a "
					health.innerHTML = "moderate thinness"
				}
				else {
					bmi.style.color = "#E71D36"
					health.style.color = "#E71D36"
					health.previousSibling.innerHTML += " in a "
					health.innerHTML = "severe thinness"
				}


				bmi.innerHTML = data.bmi.toFixed(2)
				spinner[0].style.display = "none"
				resultat.style.display = "block"
				ktiba1.style.display = "inherit"
				console.log(data)
			}
		})
		.catch(err => {
			console.log(err);
		});
})




// calories



let age1 = document.getElementById("age1")
let height1 = document.getElementById("height1")
let weight1 = document.getElementById("weight1")
let gender1 = document.getElementById("gender1")
let goal1 = document.getElementById("goal1")

let calculate1 = document.getElementById("calculate1")

let calories1 = document.getElementById("calories1")
let gl1 = document.getElementById("gl1")
let resultat1 = document.querySelector(".resultat1")
let ktiba = document.querySelector(".ktiba")

height1.innerHTML = height.value
age1.value = age.value
weight1.value = weight.value

calculate1.addEventListener("click", function () {
	if (age1.value == "" || weight1.value == "" || height1.value == "")
		alert("You got some empty inputs")
	else if (!parseInt(age1.value) || !parseInt(height1.value) || !parseInt(weight1.value)) {
		alert("Something wrong happened, please check your inputs")
	}
	else {
		console.log(age1.value)
		resultat1.style.display = "inherit"
		spinner[1].style.display = "inherit"
		ktiba.style.display = "none"
		fetch(`https://fitness-calculator.p.rapidapi.com/dailycalory?heigth=${height1.value}&age=${age1.value}&gender=${gender1.value}&weigth=${weight1.value}`, {
			"method": "GET",
			"headers": {
				"x-rapidapi-host": "fitness-calculator.p.rapidapi.com",
				"x-rapidapi-key": "34d319fce6msh24364e0e0846afbp16acf3jsneb303f62097d"
			}
		})
			.then(response => {
				return response.json()
			}).then(data => {
				if (goal1.value == "Maintain weight") {
					spinner[1].style.display = "none"
					ktiba.style.display = "inherit"
					calories1.innerHTML = data.data.goals[`maintain weight`]
					gl1.innerHTML = "maintain weight"
					gl1.nextSibling.innerHTML = ""
				}
				else if (goal1.value == "Weight gain" || goal1.value == "Mild weight gain" || goal1.value == "Extreme weight gain") {
					spinner[1].style.display = "none"
					ktiba.style.display = "inherit"
					calories1.innerHTML = data.data.goals[`${goal1.value}`].calory
					gl1.innerHTML = `gain ${data.data.goals[`${goal1.value}`]["gain weight"]}`
					gl1.nextSibling.innerHTML = " per week"
				}
				else {
					spinner[1].style.display = "none"
					ktiba.style.display = "inherit"
					calories1.innerHTML = data.data.goals[`${goal1.value}`].calory
					gl1.innerHTML = `lose ${data.data.goals[`${goal1.value}`]["loss weight"]}`
					gl1.nextSibling.innerHTML = " per week"
				}
			})
			.catch(err => {
				console.log(err);
			});
	}
})


// customiser


// let dropnav = document.querySelector(".dropdown-menu")
let nav2 = document.querySelector(".navbar")
let navcolor = document.getElementById("navcolor")
let navchange = document.getElementById("navchange")

let bodycolor = document.getElementById("bodycolor")
let bodychange = document.getElementById("bodychange")

let footercolor = document.getElementById("footercolor")
let footerchange = document.getElementById("footerchange")
let foot = document.querySelector(".site-footer")

let navtextcolor = document.getElementById("navtextcolor")
let navtextchange = document.getElementById("navtextchange")
let text2 = document.getElementsByClassName("nav-link")

let footertextcolor = document.getElementById("footertextcolor")
let footertextchange = document.getElementById("footertextchange")
let footertext = document.getElementsByClassName("cus")
let footertexta = document.getElementsByClassName("cusa")

let bodybuttoncolor = document.getElementById("bodybuttonscolor")
let bodybuttonchange = document.getElementById("bodybuttonschange")
let bodybutton = document.getElementsByClassName("btn")

let bodytextcolor = document.getElementById("bodytextcolor")
let bodytextchange = document.getElementById("bodytextchange")
let bodytext = document.getElementsByClassName("loun")

let quotescolor = document.querySelector(".quotes")

let reset = document.getElementById("reset")

let log = document.querySelectorAll(".log")

let kimanav=document.querySelectorAll(".kimanavbar")

bodytextcolor.value = "#FFFFFF"
bodybuttoncolor.value = "#457b9d"
navcolor.value = "#457b9d"
bodycolor.value = "#011627"
footercolor.value = "#457b9d"
footertextcolor.value = "#011627"
navtextcolor.value = "#22313F"



reset.addEventListener("click", function () {
	event.preventDefault()
	bodytextcolor.value = "#FFFFFF"
	bodybuttoncolor.value = "#457b9d"
	navcolor.value = "#457b9d"
	bodycolor.value = "#011627"
	footercolor.value = "#457b9d"
	footertextcolor.value = "#011627"
	navtextcolor.value = "#22313F"
	foot.style.cssText = `background-color: #457b9d !important;`
	document.body.style.cssText = `background-color: #011627 !important;`
	document.querySelector("#tot").style.cssText = `background-color: ${navcolor.value} !important;`
	nav2.style.cssText = `background-color: #457b9d !important;`
	for (let i = 0; i < log.length; i++)
		log[i].style.cssText = `background-color: ${navcolor.value} !important;`
	// dropnav.style.cssText = `background-color: #457b9d !important;`
	quotescolor.style.cssText = `background-color: #457b9d !important;`
	document.querySelector(".carousel").style.cssText = `background-color: ${navcolor.value} !important;`
	document.querySelector(".main00").style.cssText = `background-color: #457b9d !important;`
	for (let i = 0; i < text2.length; i++)
		text2[i].style.cssText = `color: #22313F !important;`
	for (let i = 0; i < footertext.length; i++)
		footertext[i].style.cssText = `color: #011627 !important;`
	foot.style.cssText = `background-color: #457b9d !important;`
	for (let i = 0; i < bodybutton.length; i++)
		bodybutton[i].style.cssText = `color: ${bodybuttoncolor.value} !important; border-color:${bodybuttoncolor.value} !important;`
	for (let i = 0; i < bodytext.length; i++)
		bodytext[i].style.cssText = `color: ${bodytextcolor.value} !important;`
	for (let i = 0; i < kimanav.length; i++)
	kimanav[i].style.cssText = `color: ${navcolor.value} !important;`
})



bodytextchange.addEventListener("click", function () {
	event.preventDefault();
	for (let i = 0; i < bodytext.length; i++)
		bodytext[i].style.cssText = `color: ${bodytextcolor.value} !important;`

})

for (let i = 0; i < bodybutton.length; i++) {
	bodybutton[i].addEventListener("mousedown", function () {
		event.preventDefault();
		bodybutton[i].style.cssText = `color: ${bodycolor.value} !important; background-color:${bodybuttoncolor.value} !important; outline-color:${bodybuttoncolor.value} !important;  border-color:${bodybuttoncolor.value} !important;`
	})
}
for (let i = 0; i < bodybutton.length; i++) {
	bodybutton[i].addEventListener("mouseover", function () {
		event.preventDefault();
		bodybutton[i].style.cssText = `color: ${bodycolor.value} !important; background-color:${bodybuttoncolor.value} !important; outline-color:${bodybuttoncolor.value} !important;  border-color:${bodybuttoncolor.value} !important;`
	})
}

for (let i = 0; i < bodybutton.length; i++) {
	bodybutton[i].addEventListener("mouseout", function () {
		event.preventDefault();
		bodybutton[i].style.cssText = `color: ${bodybuttoncolor.value} !important; border-color:${bodybuttoncolor.value} !important;`
	})
}

bodybuttonchange.addEventListener("click", function () {
	event.preventDefault();
	for (let i = 0; i < bodybutton.length; i++) {
		bodybutton[i].style.cssText = `color: ${bodybuttoncolor.value} !important; border-color:${bodybuttoncolor.value} !important; background-color:transparent !important;`
	}
})


for (let i = 0; i < footertexta.length; i++) {
	footertexta[i].addEventListener("mouseout", function () {
		event.preventDefault();
		footertexta[i].style.cssText = `color: ${footertextcolor.value} !important;`
	})
}

for (let i = 0; i < footertexta.length; i++) {
	footertexta[i].addEventListener("mouseover", function () {
		event.preventDefault();
		footertexta[i].style.cssText = `color: #a8dadc !important;`
	})
}

footertextchange.addEventListener("click", function () {
	event.preventDefault();
	for (let i = 0; i < footertext.length; i++)
		footertext[i].style.cssText = `color: ${footertextcolor.value} !important;`
	foot.style.cssText = `background-color: ${footercolor.value} !important;`
})

navtextchange.addEventListener("click", function () {
	event.preventDefault();
	for (let i = 0; i < text2.length; i++)
		text2[i].style.cssText = `color: ${navtextcolor.value} !important;`
})

navchange.addEventListener("click", function () {
	event.preventDefault();
	nav2.style.cssText = `background-color: ${navcolor.value} !important;`
	// dropnav.style.cssText = `background-color: ${navcolor.value} !important;`
	quotescolor.style.cssText = `background-color: ${navcolor.value} !important;`
	document.querySelector(".main00").style.cssText = `background-color: ${navcolor.value} !important;`
	for (let i = 0; i < log.length; i++)
		log[i].style.cssText = `background-color: ${navcolor.value} !important;`
	document.querySelector(".carousel").style.cssText = `background-color: ${navcolor.value} !important;`
	document.querySelector("#tot").style.cssText = `background-color: ${navcolor.value} !important;`
	for (let i = 0; i < kimanav.length; i++)
	kimanav[i].style.cssText = `color: ${navcolor.value} !important;`
})

bodychange.addEventListener("click", function () {
	event.preventDefault();
	document.body.style.cssText = `background-color: ${bodycolor.value} !important;`
})

footerchange.addEventListener("click", function () {
	event.preventDefault();
	foot.style.cssText = `background-color: ${footercolor.value} !important;`
})

// change page

let nBMI = document.getElementsByClassName("nBMI")
let nCAL = document.getElementsByClassName("nCAL")
let nCUS = document.getElementsByClassName("nCUS")
let nhome = document.getElementsByClassName("nhome")
let nfoood = document.getElementsByClassName("nfood")
let f = document.getElementById("food")
let m = document.getElementById("main")
let m1 = document.getElementById("main1")
let m2 = document.getElementById("main2")
let h = document.getElementById("home")

for (let i = 0; i < 2; i++) {
	nhome[i].addEventListener("click", function () {
		h.style.display = "block"
		h.scrollTop = 0;
		f.style.display = "none"
		m1.style.display = "none"
		m2.style.display = "none"
		m.style.display = "none"
	})

	nfoood[i].addEventListener("click", function () {
		f.style.display = "flex"
		h.style.display = "none"
		f.scrollTop = 0;
		m1.style.display = "none"
		m2.style.display = "none"
		m.style.display = "none"
	})

	nBMI[i].addEventListener("click", function () {
		m.style.display = "block"
		m.scrollTop = 0;
		f.style.display = "none"
		m1.style.display = "none"
		m2.style.display = "none"
		h.style.display = "none"
	})

	nCAL[i].addEventListener("click", function () {
		m1.style.display = "block"
		m1.scrollTop = 0;
		f.style.display = "none"
		m.style.display = "none"
		m2.style.display = "none"
		h.style.display = "none"
	})

	nCUS[i].addEventListener("click", function () {
		m2.style.display = "block"
		m2.scrollTop = 0;
		f.style.display = "none"
		m1.style.display = "none"
		m.style.display = "none"
		h.style.display = "none"
	})
}


//home 
let Calsc = document.getElementById("Calsc")
let Bmic = document.getElementById("Bmic")
let Custc = document.getElementById("Custc")



Custc.addEventListener("click", function () {
	m2.style.display = "block"
	m2.scrollTop = 0;
	f.style.display = "none"
	m1.style.display = "none"
	m.style.display = "none"
	h.style.display = "none"
})


Calsc.addEventListener("click", function () {
	m1.style.display = "block"
	m1.scrollTop = 0;
	f.style.display = "none"
	m.style.display = "none"
	m2.style.display = "none"
	h.style.display = "none"
})


Bmic.addEventListener("click", function () {
	m.style.display = "block"
	m.scrollTop = 0;
	f.style.display = "none"
	m1.style.display = "none"
	m2.style.display = "none"
	h.style.display = "none"
})



// food


let foodtext = document.getElementById("food-text")
let foodsearch = document.getElementById("food-search")


let kcal = document.getElementById("ENERC_KCAL")

let spinnerf = document.getElementById("spinner-food")//grid
let carte = document.querySelector(".car")//flex

let foodqte = document.getElementById("food-qte")

let addfood = document.getElementById("food-add")

let rem = document.getElementById("meal-remove")
let rem1 = document.getElementById("meal-remove1")

let textnode
let s


foodsearch.addEventListener("click", function () {
	spinnerf.style.cssText = "display:grid !important;"
	carte.style.cssText = "display:none !important;"
	if (foodtext.value == "" || foodqte.value == "") {
		alert("You have to write something!!")
		spinnerf.style.cssText = "display:none !important;"
	}
	if (!parseFloat(foodqte.value)) {
		alert("Please write a valid value!")
		spinnerf.style.cssText = "display:none !important;"
	}
	else {
		fetch(`https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=${foodtext.value}`, {
			"method": "GET",
			"headers": {
				"x-rapidapi-host": "edamam-food-and-grocery-database.p.rapidapi.com",
				"x-rapidapi-key": "34d319fce6msh24364e0e0846afbp16acf3jsneb303f62097d"
			}
		})
			.then(response => {
				return response.json();
			})
			.then(data => {
				if (data.parsed.length != 0) {
					spinnerf.style.cssText = "display:none !important;"
					carte.style.cssText = "display:inline !important;"
					let k = ((parseFloat(data.parsed[0].food.nutrients.ENERC_KCAL) / 100) * parseFloat(foodqte.value))
					kcal.innerHTML = k
					textnode = document.createTextNode(`${foodtext.value}: ${kcal.innerHTML} Calories`);
					s = parseFloat(document.getElementById("tot-text").innerHTML) + parseFloat(kcal.innerHTML)
				}
				else {
					alert("Something wrong happened there is no food with that name!")
					spinnerf.style.cssText = "display:none !important;"
				}
			})
			.catch(err => {
				console.log(err);
			});
	}
})

let mealt=document.getElementById("meal1-remove")
let mealrt=document.getElementById("meal-remove1")
let mealr=document.getElementById("meal-remove")

mealr.style.cssText=`background-color:transparent !important;color:${bodybuttoncolor.value} !important;`
mealrt.style.cssText=`background-color:transparent !important;color:${bodybuttoncolor.value} !important;`

mealr.addEventListener("mouseover",function(){
	event.preventDefault()
})

addfood.addEventListener("click", function () {
	let node = document.createElement("LI");
	carte.style.cssText = "display:none !important;"
	document.getElementById("tot-text").innerHTML = s;
	node.appendChild(textnode);
	document.getElementById("ingredients").appendChild(node);
	foodtext.value = ""
	foodqte.value = ""
	node.replaceChild(textnode, textnode)
	if (document.getElementById("ingredients").childElementCount > 0){
		mealr.removeAttribute("disabled")
		mealrt.removeAttribute("disabled")
		mealt.removeAttribute("disabled")
	}
})

rem.addEventListener("click", function () {
	let no = document.getElementById("ingredients")
	no.querySelectorAll('*').forEach(n => n.remove())
	mealr.setAttribute("disabled","true")
	mealrt.setAttribute("disabled","true")
	mealr.style.cssText=`background-color:transparent !important;color:${bodybuttoncolor.value} !important;border-color:${bodybuttoncolor.value} !important;`
	mealrt.style.cssText=`background-color:transparent !important;color:${bodybuttoncolor.value} !important;border-color:${bodybuttoncolor.value} !important;`
	mealt.setAttribute("disabled","true")
	document.getElementById("tot-text").innerHTML = 0
})

rem1.addEventListener("click",function(){
	let no =document.getElementById("ingredients")
	let childs=no.childNodes
	let tab=childs[document.getElementById("meal1-remove").value].innerHTML.split(" ")
	console.log(tab)

	document.getElementById("tot-text").innerHTML = parseFloat(document.getElementById("tot-text").innerHTML)-parseFloat(tab[tab.length-2])
	no.removeChild(no.childNodes[document.getElementById("meal1-remove").value])
	
	document.getElementById("meal1-remove").value=""
	if(no.childElementCount==0){
	mealr.setAttribute("disabled","true")
	mealrt.setAttribute("disabled","true")
	mealt.setAttribute("disabled","true")
	mealr.style.cssText=`background-color:transparent !important;color:${bodybuttoncolor.value} !important;border-color:${bodybuttoncolor.value} !important;`
	mealrt.style.cssText=`background-color:transparent !important;color:${bodybuttoncolor.value} !important;border-color:${bodybuttoncolor.value} !important;`
	}
})

