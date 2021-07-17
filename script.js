const getBtn = document.getElementById('get-btn');

let product = [['ENCHANTED_RAW_SALMON', 0], ['ENCHANTED_ACACIA_LOG', 0], ['ENCHANTED_BLAZE_POWDER', 0], ['ENCHANTED_BLAZE_ROD', 0], ['ENCHANTED_COAL_BLOCK', 0], ['ENCHANTED_BONE', 0]];

//OBJETOS (PETS)

const BabyYeti = {
  name: "Baby Yeti",
  dias: 12,
  item: "E. Raw Salmon",
  qntd: 16,
  valor: product[0][1],
  total: function() {
    return this.qntd*this.valor;
  },
  upgrade: 20000000,
  epicb: 0,
  legb: 0,
  profit: function() {
    return this.legb-(this.epicb+this.upgrade+this.total);
  },
  pdia: function() {
    return this.profit/this.dias;
  },
}




const getData = () => {
  fetch('https://api.slothpixel.me/api/skyblock/bazaar/').then(response => {
    return response.json();
  })
  .then(responseData => {
    for (var i = 0; i < product.length; i++) {
      if (product[i][0] == "ENCHANTED_ACACIA_LOG") {
        console.log('index: '+i);
      }
    }
    if (BabyYeti.profit() > 1) {
      
    }
  });
};


getBtn.addEventListener('click', getData);