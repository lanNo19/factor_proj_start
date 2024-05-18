const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '8ee9925c3emsh28988b89e58b2fep1af706jsn323dbb2c5931',
    'X-RapidAPI-Host': 'shazam-core7.p.rapidapi.com'
  }
};

fetch('https://shazam-core7.p.rapidapi.com/charts/get-top-songs-in-world', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));