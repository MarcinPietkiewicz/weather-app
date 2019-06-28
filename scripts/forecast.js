const key = '0AHBe3pZQpXQa1GzoKAhsFLGlynio3bx';

const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;


    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
}

getCity('Manchester')
    .then(data => console.log(data))
    .catch(err => HTMLFormControlsCollection.log(err))