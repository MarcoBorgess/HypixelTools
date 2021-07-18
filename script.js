const getBtn = document.getElementById('get-btn');

window.onload = () => {
  getData();
}

//PRODUTOS
//['ITEMID', 0, "PETNAME", DIAS, "ITEM", QNTD, UPGRADE, "] PETNAME", 999999999, 999999999],

let product = [
              ['REVENANT_FLESH', 0, "Armadillo", 5, "Nenhum", 0, 1000000, "] Armadillo", 999999999, 999999999],
              ['ENCHANTED_RAW_SALMON', 0, "Baby Yeti", 12, "E. Raw Salmon", 16, 20000000, "] Baby Yeti", 999999999, 999999999], 
              ['ENCHANTED_RED_MUSHROOM', 0, "Bat", 3, "E. Red Mushroom", 64, 250000, "] Bat", 999999999, 999999999],
              ['ENCHANTED_GOLD_BLOCK', 0, "Bee", 3, "E. Gold Block", 9, 450000, "] Bee", 999999999, 999999999],
              ['ENCHANTED_BLAZE_ROD', 0, "Blaze", 12, "E. Blaze Rod", 64, 200000, "] Blaze", 999999999, 999999999],
              ['ENCHANTED_COOKED_FISH', 0, "Blue Whale", 12, "E. Cooked Fish", 8, 9000000, "] Blue Whale", 999999999, 999999999],
              ['ENCHANTED_RAW_CHICKEN', 0, "Chicken", 1, "E. Raw Chicken", 8, 250000, "] Chicken", 999999999, 999999999],
              ['ENCHANTED_RAW_FISH', 0, "Dolphin", 14, "E. Raw Fish", 16, 50000000, "] Dolphin", 999999999, 999999999],
              ['REVENANT_FLESH', 0, "Elephant", 10, "Nenhum", 0, 14000000, "] Elephant", 999999999, 999999999],
              ['SUMMONING_EYE', 0, "Ender Dragon", 20, "Summoning Eye", 8, 400000000, "] Ender Dragon", 9999999999, 9999999999],
              ['ENCHANTED_EYE_OF_ENDER', 0, "Enderman", 12, "E. Eye of Ender", 8, 40000000, "] Enderman", 999999999, 999999999],
              ['ENCHANTED_ENDSTONE', 0, "Endermite", 7, "E. End Stone", 512, 250000, "] Endermite", 999999999, 999999999],
              ['ENCHANTED_RAW_FISH', 0, "Flying Fish", 10, "E. Raw Fish", 64, 450000, "] Flying Fish", 999999999, 999999999],
              ['REVENANT_FLESH', 0, "Ghoul", 10, "Revenant Flesh", 512, 5000000, "] Ghoul", 999999999, 999999999],
              ['ENCHANTED_ACACIA_LOG', 0, "Giraffe", 12, "E. Acacia Wood", 512, 9000000, "] Giraffe", 999999999, 999999999],
              ['ENCHANTED_IRON_BLOCK', 0, "Golem", 20, "E. Iron Block", 8, 10000000, "] Golem", 999999999, 999999999],
              ['ENCHANTED_PRISMARINE_SHARD', 0, "Guardian", 5, "E. Prismarine Shard", 64, 3000000, "] Guardian", 999999999, 999999999],
              ['ENCHANTED_LEATHER', 0, "Horse", 1, "E. Leather", 8, 250000, "] Horse", 999999999, 999999999],
              ['ENCHANTED_SLIME_BALL', 0, "Jellyfish", 10, "E. Slimeball", 16, 15000000, "] Jellyfish", 999999999, 999999999],
              ['REVENANT_FLESH', 0, "Jerry", 3, "Move Jerry", 1, 100000, "] Jerry", 999999999, 999999999],
              ['ENCHANTED_RAW_BEEF', 0, "Lion", 14, "E. Raw Beef", 1024, 14000000, "] Lion", 999999999, 999999999],
              ['ENCHANTED_MAGMA_CREAM', 0, "Magma Cube", 10, "E. Magma Cream", 16, 500000, "] Magma Cube", 999999999, 999999999],
              ['REVENANT_FLESH', 0, "Megalodon", 20, "Nenhum", 0, 10000000, "] Megalodon", 999999999, 999999999],
              ['REVENANT_FLESH', 0, "Monkey", 12, "Nenhum", 0, 17000000, "] Monkey", 999999999, 999999999],
              ['ENCHANTED_JUNGLE_LOG', 0, "Ocelot", 5, "E. Jungle Wood", 512, 250000, "] Ocelot", 999999999, 999999999],
              ['ENCHANTED_FEATHER', 0, "Parrot", 14, "E. Feather", 16, 250000, "] Parrot", 999999999, 999999999],
              ['ENCHANTED_BLAZE_POWDER', 0, "Phoenix", 20, "E. Blaze Powder", 1024, 100000000, "] Phoenix", 9999999999, 9999999999],
              ['PORK', 0, "Pig", 1, "Raw Porkchop", 512, 250000, "] Pig", 999999999, 999999999],
              ['ENCHANTED_GRILLED_PORK', 0, "Pigman", 10, "E. Grilled Pork", 8, 250000, "] Pigman", 999999999, 999999999],
              ['RABBIT', 0, "Rabbit", 1, "Raw Rabbit", 64, 250000, "] Rabbit", 999999999, 999999999],
              ['ENCHANTED_COBBLESTONE', 0, "Rock", 14, "E. Cobblestone", 8, 50000000, "] Rock", 999999999, 999999999],
              ['ENCHANTED_MUTTON', 0, "Sheep", 7, "E. Mutton", 512, 250000, "] Sheep", 999999999, 999999999],
              ['ENCHANTED_COBBLESTONE', 0, "Silverfish", 3, "E. Cobblestone", 64, 250000, "] Silverfish", 999999999, 999999999],
              ['ENCHANTED_BONE', 0, "Skeleton", 3, "E. Bone", 128, 250000, "] Skeleton", 999999999, 999999999],
              ['ENCHANTED_STRING', 0, "Spider", 7, "E. String", 512, 250000, "] Spider", 999999999, 999999999],
              ['ENCHANTED_GHAST_TEAR', 0, "Spirit", 10, "E. Ghast Tear", 64, 5000000, "] Spirit", 999999999, 999999999],
              ['ENCHANTED_INK_SACK', 0, "Squid", 5, "E. Ink Sack", 64, 3000000, "] Squid", 999999999, 999999999],
              ['TARANTULA_WEB', 0, "Tarantula", 10, "Tarantula Web", 512, 5000000, "] Tarantula", 999999999, 999999999],
              ['ENCHANTED_RAW_CHICKEN', 0, "Tiger", 14, "E. Raw Chicken", 1024, 14000000, "] Tiger", 999999999, 999999999],
              ['ENCHANTED_RAW_FISH', 0, "Turtle", 10, "E. Raw Fish", 16, 15000000, "] Turtle", 999999999, 999999999],
              ['ENCHANTED_COAL_BLOCK', 0, "Wither Skeleton", 5, "E. Block of Coal", 8, 250000, "] Wither Skeleton", 999999999, 999999999],
              ['ENCHANTED_SPRUCE_LOG', 0, "Wolf", 5, "E. Spruce Wood", 512, 250000, "] Wolf", 999999999, 999999999],
              ['ENCHANTED_ROTTEN_FLESH', 0, "Zombie", 10, "Zombie's Heart", 2048, 250000, "] Zombie", 999999999, 999999999],
            ];

let pets = [];

function carregaTabela(pets) {
  const tableBody = document.getElementById('tableData');
  let dataHtml = '';
  for (let pet of pets) {
    dataHtml += `<tr>
                  <td>${pet.nome}</td>
                  <td>${pet.dias}</td>
                  <td>${pet.item}</td>
                  <td>${pet.valor}</td>
                  <td>${pet.qntd}</td>
                  <td>${pet.fup().toLocaleString('pt-BR')}</td>
                  <td>${pet.fepic().toLocaleString('pt-BR')}</td>
                  <td>${pet.total().toLocaleString('pt-BR')}</td>
                  <td>${pet.fleg().toLocaleString('pt-BR')}</td>
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
            fup: function(){
              return Math.round(this.upgrade);
            },
            fepic: function(){
              return Math.round(this.epicb);
            },
            fleg: function(){
              return Math.round(this.legb);
            },
            total: function(){
              return Math.round((this.valor*this.qntd)+this.epicb+this.upgrade);
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
