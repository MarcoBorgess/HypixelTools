const getBtn = document.getElementById('get-btn');

window.onload = () => {
  getData();
}

//PRODUTOS

let product = [
              ['ENCHANTED_RAW_SALMON', 0, "Baby Yeti", 12, "E. Raw Salmon", 16, 20000000, "] Baby Yeti", 999999999, 999999999], 
              ['ENCHANTED_RED_MUSHROOM', 0, "Bat", 3, "E. Red Mushroom", 64, 250000, "] Bat", 999999999, 999999999],
              ['ENCHANTED_GOLD_BLOCK', 0, "Bee", 3, "E. Gold Block", 9, 450000, "] Bee", 999999999, 999999999],
            ];

let pets = [];

function carregaTabela(pets, pets2) {
  const tableBody = document.getElementById('tableData');
  let dataHtml = '';
  for (let pet of pets) {
    dataHtml += `<tr>
                  <td>${pet.nome}</td>
                  <td>${pet.dias}</td>
                  <td>${pet.item}</td>
                  <td>${pet.qntd}</td>
                  <td>${pet.valor}</td>
                  <td>${pet.upgrade}</td>
                  <td>${pet.epicb}</td>
                  <td>${pet.total().toLocaleString('pt-BR')}</td>
                  <td>${pet.legb}</td>
                  <td>${pet.profit().toLocaleString('pt-BR')}</td>
                  <td>${pet.pdia().toLocaleString('pt-BR')}</td>
                <tr/>
                `
  }
  tableBody.innerHTML = dataHtml;
}

const getData = async () => {
  fetch('https://api.hypixel.net/skyblock/auctions').then(resp => {
    return resp.json();
  }).then(respData => {
    for (var x = 0; x < respData.totalPages; x++){
      fetch('https://api.hypixel.net/skyblock/auctions?page='+x).then(resp => {
      return resp.json();
      }).then(respData => {
        for (var p = 0; p < product.length; p++){
          for (var x = 0; x < respData.auctions.length; x++) {
            if (respData.auctions[x].bin == true && respData.auctions[x].tier == "EPIC"){
              if(respData.auctions[x].item_name.includes(product[p][7])) {
                if(respData.auctions[x].starting_bid <= product[p][8]){
                  product[p][8] = respData.auctions[x].starting_bid;
                  console.log("Loading...")
                  
                }
              }
            }
            if (respData.auctions[x].bin == true && respData.auctions[x].tier == "LEGENDARY"){
              if(respData.auctions[x].item_name.includes(product[p][7])) {
                if(respData.auctions[x].starting_bid <= product[p][9]){
                  product[p][9] = respData.auctions[x].starting_bid;
                  console.log("Loading...")
                }
              }
            }
          }
        };       
      }).then(fetch('https://api.slothpixel.me/api/skyblock/bazaar/').then(response => {
        return response.json();
      }).then(responseData => {
        for (var i = 0; i < product.length; i++) {
          product[i][1] = Math.round(responseData[product[i][0]].quick_status.buyPrice*100)/100  
          pets[i] = {
            valor: product[i][1],
            nome: product[i][2],
            dias: product[i][3],
            item: product[i][4],
            qntd: product[i][5],
            upgrade: product[i][6],
            epicb: product[i][8],
            legb: product[i][9],
            total: function(){
              return Math.round((this.qntd*this.valor)+this.epicb+this.upgrade);
            },
            profit: function(){
              return Math.round(this.legb-this.total());
            },
            pdia: function(){
              return Math.round(this.profit()/this.dias);
            }
          }
        }
      }))
    }  
  })
}


getBtn.addEventListener('click', function() {
  carregaTabela(pets);
});
