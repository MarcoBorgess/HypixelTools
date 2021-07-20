const getBtn = document.getElementById('get-btn');

window.onload = () => {
  getData();
}

let product = [ //img, nome, bits, lowest bin
  ['https://i.imgur.com/7WSG5o2.png', 'God Potion', 1500, 999999999],
  ['https://i.imgur.com/C0znTFR.png', 'Kat Flower', 500, 999999999],
  ['https://i.imgur.com/tK2l6Oc.png', 'Kismet Feather', 1350, 999999999],
  ['https://i.imgur.com/noMfRhp.png', "Builder's Wand", 12000, 999999999],
  ['https://i.imgur.com/94Yda4F.png', 'Block Zapper', 5000, 999999999],
  ['https://i.imgur.com/jHSpdsi.png', 'Bits Talisman', 15000, 999999999],
  ['https://i.imgur.com/Rp8oGxd.png', 'Autopet Rules 2-Pack', 21000, 999999999],
  ['https://i.imgur.com/1ohrX59.png', 'Heat Core', 3000, 999999999],
  ['https://i.imgur.com/P2FyNbG.png', 'Hyper Catalyst Upgrade', 300, 999999999],
  ['https://i.imgur.com/aNuaWmR.png', 'Ultimate Carrot Candy Upgrade', 8000, 999999999],
  ['https://i.imgur.com/G2MP7iL.png', 'Colossal Experience Bottle Upgrade', 1200, 999999999],
  ['https://i.imgur.com/O4CQl6X.png', 'Jumbo Backpack Upgrade', 4000, 999999999],
  ['https://i.imgur.com/WB72xLY.png', 'Minion Storage X-pender', 1500, 999999999],
  ['https://i.imgur.com/YqAR4BA.png', 'Hologram', 2000, 999999999],
  ['https://i.imgur.com/1LaMDyo.png', 'Accessory Enrichment Swapper', 200, 999999999],
  ['https://i.imgur.com/p3GgOf3.png', 'Speed Enrichment', 5000, 999999999],
  ['https://i.imgur.com/8sIEsfR.png', 'Intelligence Enrichment', 5000, 999999999],
  ['https://i.imgur.com/1oH1iEm.png', 'Critical Damage Enrichment', 5000, 999999999],
  ['https://i.imgur.com/x3cOimC.png', 'Critical Chance Enrichment', 5000, 999999999],
  ['https://i.imgur.com/Bwsd1Kj.png', 'Strength Enrichment', 5000, 999999999],
  ['https://i.imgur.com/sPIbhDj.png', 'Defense Enrichment', 5000, 999999999],
  ['https://i.imgur.com/I9NsajF.png', 'Health Enrichment', 5000, 999999999],
  ['https://i.imgur.com/YEltvGM.png', 'Magic Find Enrichment', 5000, 999999999],
  ['https://i.imgur.com/nt2hNKd.png', 'Ferocity Enrichment', 5000, 999999999],
  ['https://i.imgur.com/GCVWdsD.png', 'Sea Creature Chance Enrichment', 5000, 999999999],
  ['https://i.imgur.com/Ahrdyma.png', 'Attack Speed Enrichment', 5000, 999999999],
];
let productBooks = [ //img, nome, bits, lowest bin, search name
  ['https://i.imgur.com/6zc6Nwd.png', 'Cultivating', 4000, 999999999, 'Enchanted Book', '§9Cultivating'],
  ['https://i.imgur.com/6zc6Nwd.png', 'Compact', 4000, 999999999, 'Enchanted Book', '§9Compact'],
  ['https://i.imgur.com/6zc6Nwd.png', 'Expertise', 4000, 999999999, 'Enchanted Book', '§9Expertise'],
];

let ATTproducts = [];

function carregaTabela(ATTproducts) {
  const tableBody = document.getElementById('tableData');
  let dataHtml = '';
  for (let p of ATTproducts) {
    dataHtml += `<tr>
                  <td><img
                  id="logo"
                  src="${p.img}"
                  alt="Logo"
                  draggable="false"
                  height="25"
                  /></td>
                  <td>${p.nome}</td>
                  <td>${p.bits}</td>
                  <td>${p.bin().toLocaleString('pt-BR')}</td>
                  <td>${p.cb().toLocaleString('pt-BR')}</td>
                <tr/>
                `
  }
  tableBody.innerHTML = dataHtml;
}
const getData = () => {
  fetch('https://api.hypixel.net/skyblock/auctions').then(resp => {
    return resp.json();
  }).then(respData => {
    for (var x = 0; x < respData.totalPages; x++){
      fetch('https://api.hypixel.net/skyblock/auctions?page='+x).then(resp => {
      return resp.json();
      }).then(respData => {
        for (var p = 0; p < product.length; p++){
          for (var x = 0; x < respData.auctions.length; x++){
            if (respData.auctions[x].bin == true){
              if(respData.auctions[x].item_name.includes(product[p][1])){
                if(respData.auctions[x].starting_bid <= product[p][3]){
                  product[p][3] = respData.auctions[x].starting_bid;
                  console.log("Loading...")
                }
              }
            }
          }
        }
        for (var p = 0; p < productBooks.length; p++){
          for (var x = 0; x < respData.auctions.length; x++){
            if (respData.auctions[x].bin == true){
              if(respData.auctions[x].item_name.includes(productBooks[p][4])) {
                if(respData.auctions[x].item_lore.includes([productBooks[p][5]])){
                  if(respData.auctions[x].starting_bid <= productBooks[p][3]){
                    productBooks[p][3] = respData.auctions[x].starting_bid;
                    console.log("Books loading...")
                  }
                }
              }
            }
          }
        }
        for (var i = 0; i < product.length; i++){
          ATTproducts[i] = {
            img: product[i][0],
            nome: product[i][1],
            bits: product[i][2],
            lbin: product[i][3],
            bin: function(){
              return Math.round(this.lbin);
            },
            cb: function(){
              return Math.round(this.lbin/this.bits)
            }
          }
        }
        for (var j = 0; j < productBooks.length; j++){
          ATTproducts[j+product.length] = {
            img: productBooks[j][0],
            nome: productBooks[j][1],
            bits: productBooks[j][2],
            lbin: productBooks[j][3],
            bin: function(){
              return Math.round(this.lbin);
            },
            cb: function(){
              return Math.round(this.lbin/this.bits)
            }
          }
        }
      })
    }
  })
}


getBtn.addEventListener('click', function() {
    carregaTabela(ATTproducts);
  });
  