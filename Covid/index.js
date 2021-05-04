console.log("This is Covid Project")
// Start

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.covid19api.com/summary", true);

xhr.onload = function () {
	if (this.status === 200) {
		let json = JSON.parse(this.responseText);
		let countries = json.Countries;

		let aTag = document.getElementById("aTag")
		aTag.innerText = `Date:  ${json.Date}`
		let countryAll = ""
		countries.forEach(function (element) {

			//h7 for H7

			countryAll += `<div  class="card border-primary mx-3 my-3 countryAll " style="max-width: 18rem ;" id = "">
			<div class="card-header country">${element.Country}</div> 
			<div class="card-body text-dark">
			  
			  <h7 class="text-danger ">New Cases: ${element.NewConfirmed}</h7>
			  <p class="text-dark">Total Confirmed: ${element.TotalConfirmed}</p>
			  <p class="text-dark">Total Death: ${element.TotalDeaths}</p>
			  <p class="text-danger">New Death: ${element.NewDeaths}</p>
			  <p class="text-success">New Recoverd: ${element.NewRecovered}</p>
			  <p class="text-dark">Total Recoverd: ${element.TotalRecovered}</p>
			
			  
			</div>
		  </div>`

		});



		let covid = document.getElementById("covid");
		covid.innerHTML = countryAll;

		// Search Countries

		let search = document.getElementById("search");
		search.addEventListener("input", function () {
			let searchVal = search.value;
			let inputVal = searchVal.toLowerCase();
			let searchCountry = document.getElementsByClassName("countryAll");
			Array.from(searchCountry).forEach(function (value) {
				let srhValCo = value.getElementsByTagName("div")[0].innerText;		// country value
				let srhValCoLower = srhValCo.toLowerCase();
				if (srhValCoLower.includes(inputVal)) {
					value.style.display = "block"
				} else {
					value.style.display = "none"
				}

			})

		})


	}
}


xhr.send();

