const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '99c7f6a833msh0f8dc93e0f54be3p198904jsn4fd9eefd0cbf',
		'X-RapidAPI-Host': 'address-from-to-latitude-longitude.p.rapidapi.com'
	}
};
const address = '14a kajola street, ikola, lagos, Nigeria.'
const link = `https://address-from-to-latitude-longitude.p.rapidapi.com/geolocationapi?address= ${address}`;
fetch(link, options)
	.then(response => response.json())
	.then(response => console.log(response.Results[06].latitude))
	.catch(err => console.error(err));