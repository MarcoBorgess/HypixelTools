const getBtn = document.getElementById('get-btn');

window.onload = () => {
  getData();
}

let sortDirection = false;

//PRODUTOS

let product = [
              ['ENCHANTED_RAW_SALMON', 0, "Baby Yeti", 12, "E. Raw Salmon", 16, 20000000], 
              ['ENCHANTED_RED_MUSHROOM', 0, "Bat", 3, "E. Red Mushroom", 64, 250000],
              ['ENCHANTED_GOLD_BLOCK', 0, "Bee", 3, "E. Gold Block", 9, 450000],
            ];

//PETS

let pets = [];

function carregaTabela(pets) {
  const tableBody = document.getElementById('tableData');
  let dataHtml = '';
  for(let pet of pets) {
    dataHtml += `<tr>
                  <td>${pet.nome}</td>
                  <td>${pet.dias}</td>
                  <td>${pet.item}</td>
                  <td>${pet.qntd}</td>
                  <td>${pet.valor}</td>
                  <td>${pet.total().toLocaleString('pt-BR')}</td>
                  <td>${pet.upgrade}</td>
                  <td>${pet.epicb}</td>
                  <td>${pet.legb}</td>
                  <td>${pet.profit().toLocaleString('pt-BR')}</td>
                  <td>${pet.pdia().toLocaleString('pt-BR')}</td>
                <tr/>`
  }

  tableBody.innerHTML = dataHtml;
}

const getData = () => {
  fetch('https://api.slothpixel.me/api/skyblock/bazaar/').then(response => {
    return response.json();
  })
  .then(responseData => {
    for (var i = 0; i < product.length; i++) {
      product[i][1] = Math.round(responseData[product[i][0]].quick_status.buyPrice*100)/100
      pets[i] = {
        valor: product[i][1],
        nome: product[i][2],
        dias: product[i][3],
        item: product[i][4],
        qntd: product[i][5],
        upgrade: product[i][6],
        epicb: 200000000,
        legb: 200000000,
        total: function(){
          return Math.round(this.qntd*this.valor);
        },
        profit: function(){
          return Math.round(this.legb-(this.epicb+this.upgrade+this.total()))
        },
        pdia: function(){
          return Math.round(this.profit()/this.dias)
        }
      }
    }
  });
};


getBtn.addEventListener('click', function() {
  carregaTabela(pets);
});

/*
LEMBRAR DE ADICIONAR:
  1. ORDENAÇÃO
  2. AUCTION HOUSE
*/