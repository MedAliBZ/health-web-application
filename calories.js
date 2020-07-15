fetch("https://fitness-calculator.p.rapidapi.com/dailycalory?heigth=180&age=25&gender=male&weigth=70", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "fitness-calculator.p.rapidapi.com",
		"x-rapidapi-key": "34d319fce6msh24364e0e0846afbp16acf3jsneb303f62097d"
	}
})
.then(response => {
	return response.json()
}).then(data=>console.log(data))
.catch(err => {
	console.log(err);
});