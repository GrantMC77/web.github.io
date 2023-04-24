
		function searchNutrition() {
			const food = document.getElementById("food").value;
			const appId = "3405ea64";
			const apiKey = "a686c1f86a4bbf9c351c98b4f2ac6328";
			const url = `https://api.nutritionix.com/v1_1/search/${food}?results=0:1&fields=item_name,nf_calories,nf_total_fat,nf_protein,nf_total_carbohydrate&appId=${appId}&appKey=${apiKey}`;
			
			fetch(url)
				.then(response => response.json())
				.then(data => {
					const item = data.hits[0].fields;
					const nutrition = `
						<h2>${item.item_name}</h2>
						<p>Calories: ${item.nf_calories}</p>
						<p>Total Fat: ${item.nf_total_fat}g</p>
						<p>Protein: ${item.nf_protein}g</p>
						<p>Total Carbohydrate: ${item.nf_total_carbohydrate}g</p>
					`;
					document.getElementById("nutrition").innerHTML = nutrition;
				})
				.catch(error => console.error(error));
		}

        