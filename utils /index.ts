export async function fetchCars(){
    const headers = {
        'x-rapidapi-key': '5fd1d8de81msha16425d72e2e3aap1b2009jsnfeb813d17bbc',
		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,
    });

    const result = await response.json();

    return result;
}