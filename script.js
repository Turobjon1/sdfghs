const url = 'https://currency-converter-pro1.p.rapidapi.com/latest-rates?base=USD';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'e80817e796msh7b3f36681206841p1c7ad2jsnc779c41fa5de',
		'x-rapidapi-host': 'currency-converter-pro1.p.rapidapi.com'
	}
};

async function getCountry() {
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }   
} 

getCountry()