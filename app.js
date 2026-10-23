 let menu = document.querySelector(".nav_bar_02");
    let button = document.querySelector("#menu-btn");

    button.addEventListener("click", function() {
        menu.classList.toggle("hidden");
    })



    const config = {
  base: {
    espresso: { name: "Espresso", price: 18 },
    filtre: { name: "Filtre", price: 16 }
  },
  taille: {
    s: { name: "S · 150 ml", price: 0 },
    m: { name: "M · 250 ml", price: 4 },
    l: { name: "L · 350 ml", price: 8 }
  },
  lait: {
    vache: { name: "Lait de vache", price: 0 },
    avoine: { name: "Lait d'avoine", price: 4 },
    amande: { name: "Lait d'amande", price: 5 }
  },
  supplements: {
    caramel: { name: "Caramel", price: 3 },
    vanille: { name: "Vanille", price: 3 }
  }
};



const spans = document.getElementsByTagName("span");
spans[1].textContent = config.base.espresso.name;
spans[2].textContent = config.base.filtre.name;
spans[3].textContent = config.taille.s.name;
spans[4].textContent = config.taille.m.name;
spans[5].textContent = config.taille.l.name;
spans[6].textContent = config.lait.vache.name;
spans[7].textContent = config.lait.avoine.name;
spans[8].textContent = config.lait.amande.name;
spans[9].textContent = config.supplements.caramel.name;
spans[10].textContent = config.supplements.vanille.name;

const smalls = document.getElementsByTagName("small");
smalls[0].textContent = "+ " + config.base.espresso.price + " DH";
smalls[1].textContent = "+ " + config.base.filtre.price + " DH";
smalls[2].textContent = "+ " + config.taille.s.price + " DH";
smalls[3].textContent = "+ " + config.taille.m.price + " DH";
smalls[4].textContent = "+ " + config.taille.l.price + " DH";
smalls[5].textContent = "+ " + config.lait.vache.price + " DH";
smalls[6].textContent = "+ " + config.lait.avoine.price + " DH";
smalls[7].textContent = "+ " + config.lait.amande.price + " DH";
smalls[8].textContent = "+ " + config.supplements.vanille.price + " DH";
smalls[9].textContent = "+ " + config.supplements.caramel.price + " DH";





let selectedConfig = {
  base: null,
  taille: null,
  lait: null,
  caramel: null,
  vanille: null
};

let labels = document.querySelectorAll(".choices label");
let inputs = document.querySelectorAll(".choices input");

labels[0].addEventListener("click", choisirEspresso);
labels[1].addEventListener("click", choisirFiltre);
labels[2].addEventListener("click", choisirTailleS);
labels[3].addEventListener("click", choisirTailleM);
labels[4].addEventListener("click", choisirTailleL);
labels[5].addEventListener("click", choisirLaitVache);
labels[6].addEventListener("click", choisirLaitAvoine);
labels[7].addEventListener("click", choisirLaitAmande);
labels[8].addEventListener("click", choisirCaramel);
labels[9].addEventListener("click", choisirVanille);

for (let i = 0; i < inputs.length; i++) {
  const element = inputs[i];
  element.addEventListener("click", function (event) {
    event.stopPropagation()
  })
}

function choisirEspresso() {
  selectedConfig.base = config.base.espresso.price;
calculerPrixTotal();
}

function choisirFiltre() {
  selectedConfig.base = config.base.filtre.price;
calculerPrixTotal();
}
function choisirTailleS() {
  selectedConfig.taille = config.taille.s.price;
  calculerPrixTotal();
}

function choisirTailleM() {
  selectedConfig.taille = config.taille.m.price;
 calculerPrixTotal();
}
function choisirTailleL() {
  selectedConfig.taille = config.taille.l.price;
  calculerPrixTotal();
}
function choisirLaitVache() {
  selectedConfig.lait = config.lait.vache.price;
 calculerPrixTotal();
}   
function choisirLaitAvoine() {
  selectedConfig.lait = config.lait.avoine.price;
calculerPrixTotal();
}  
function choisirLaitAmande() {
  selectedConfig.lait = config.lait.amande.price;
calculerPrixTotal();
}

function choisirCaramel() {
  if(selectedConfig.caramel === null)
  selectedConfig.caramel = config.supplements.caramel.price;
else 
  selectedConfig.caramel = null;
 calculerPrixTotal();
}
function choisirVanille() {
  if(selectedConfig.vanille === null)
  selectedConfig.vanille = config.supplements.vanille.price;
else
  selectedConfig.vanille = null;
  calculerPrixTotal();
} 
function calculerPrixTotal() {
    let total = 0;

    for (let key in selectedConfig) {

        total += selectedConfig[key];
    }

    document.getElementById("total-price").textContent = total + " DH";
}

calculerPrixTotal();




const inpu = document.querySelectorAll("label");

for (let i = 0; i < inputs.length; i++) {
    inpu[i].addEventListener("change", function() {
      // remove color from all items
      let grpInputs =  inpu[i].parentElement.querySelectorAll("input[type=radio]")
      for (let j = 0; j < grpInputs.length; j++) 
        {
          grpInputs[j].parentElement.style.backgroundColor = "white";
          grpInputs[j].parentElement.style.color = "white";
          grpInputs[j].parentElement.style.border = "1px solid #ded3c2";
      }
      // colorize selected item
        if (inpu[i].querySelector("input").checked) {
          inpu[i].style.backgroundColor = "#8da984";
          inpu[i].style.color = "white";
          inpu[i].style.border = "2px solid #000000";
        }
        else 
        {
          inpu[i].style.backgroundColor = "#8da984";
          inpu[i].style.color = "white";
          inpu[i].style.border = "2px solid #000000";
        }
    });
}
