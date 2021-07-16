const getBtn = document.getElementById('get-btn');

const getData = () => {
  fetch('https://api.slothpixel.me/api/skyblock/bazaar/').then(response => {
    return response.json();
  })
  .then(responseData => {
    console.log(responseData);
  });
};


getBtn.addEventListener('click', getData);