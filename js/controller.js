function clickOspiti(id) {
  for (let i = 1; i <= ospiti.length; i++) {
    document.getElementById(i).children[0].classList.remove("active");
  }
  document.getElementById(id).children[0].classList.add("active");

  document.getElementById("name").value = ospiti[id - 1].nome;
  document.getElementById("cognome").value = ospiti[id - 1].cognome;
  document.getElementById("ruolo").value = ospiti[id - 1].ruolo;

  document.querySelector("#now").innerHTML = ospiti[id - 1].nome + " " + ospiti[id - 1].cognome
  document.querySelector("#now").dataset.id = id;
  document.querySelector("#now").dataset.anim = "ospiti";
}

function clickNext(event, id){
  for (let i = 0; i < nexts.length; i++) {
    document.getElementsByClassName("nextArgomento")[i].classList.remove("active");
  }
  event.classList.add('active')
  let ids = nexts.map(item => item.id);
  document.getElementById("ruolo").value = nexts[ids.indexOf(id)].argomento;
}

function clickRuolo(event, id){
  for (let i = 0; i < ruoliRp.length; i++) {
    document.getElementsByClassName("ruoloRp")[i].classList.remove("active");
  }
  event.classList.add('active')
  let ids = ruoliRp.map(item => item.id);
  document.getElementById("name").value = ruoliRp[ids.indexOf(id)].nome;

  let people = ruoliRp[ids.indexOf(id)].persone.map((person, index) => {
    virgola = index == ruoliRp[ids.indexOf(id)].persone.length-2 ? ' e ' : index < ruoliRp[ids.indexOf(id)].persone.length-1 ? ', ' : " ";
    return person.nome + " " + person.cognome + virgola
  });
  document.getElementById("ruolo").value = people.join("");

  document.querySelector("#now").innerHTML = ruoliRp[ids.indexOf(id)].nome + " " + people.join("")
  document.querySelector("#now").dataset.id = id;
  document.querySelector("#now").dataset.anim = "rp";
}

function alert() {
  console.error("I campi non possono essere vuoti");
  document.getElementById("alert").innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert" style="background-color: #f12c2c; border-style: none; border-radius: 0px;"><strong>ATTENZIONE!</strong> I campi indicati non posso essere vuoti!<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`
}

function btn(time) {
  document.getElementById("show").innerHTML = "IN ESECUZIONE";
  document.getElementById("show").classList.add("btn-nascondi");
  document.getElementById("show").setAttribute("disabled", "true");
  document.querySelector("#now").parentNode.classList.add("blink");
  setTimeout(() => {
    document.getElementById("show").innerHTML = "MOSTRA";
    document.getElementById("show").classList.remove("btn-nascondi");
    document.getElementById("show").removeAttribute("disabled");
    document.querySelector("#now").parentNode.classList.remove("blink");
  }, time);
}

let anim = "ospiti";
document.getElementById("ospiti").classList.add("active");
generateOspiti(anim)
function changeAnim(e) {
  anim = e.id;
  for(let i = 0; i < document.getElementById("btns").children.length; i++){
    document.getElementById("btns").children[i].classList.remove("active");
  }
  e.classList.add("active");
  generateOspiti(anim)
  document.querySelector("#now").dataset.anim = anim;
  document.querySelector("#now").dataset.id = 0;
}

function mostra() {
  let nome = document.getElementById("name").value;
  let cognome = document.getElementById("cognome").value;
  let ruolo = document.getElementById("ruolo").value;
  let posizione;
  if (document.getElementById("position-left").checked == true) {
    posizione = "sx"
  } else if (document.getElementById("position-right").checked == true) {
    posizione = "dx"
  } else {
    posizione = "";
  }

  let bc = new BroadcastChannel('obs-supermessage')
  if(anim == 'ospiti'){
    if (nome.length != 0 && cognome.length != 0 && ruolo.length != 0 && posizione != "") {
      bc.postMessage(anim + "|" + nome + " " + cognome + "|" + ruolo + "|" + posizione);
      btn(6000);
      console.log("Messaggio inviato!")
    } else {
      alert();
    }
  }else if(anim == "rp"){
    if (nome.length != 0 && ruolo.length != 0 && posizione != "") {
      bc.postMessage(anim + "|" + nome + "|" + ruolo + "|" + posizione);
      btn(6000);
      console.log("Messaggio inviato!")
    } else {
      alert();
    }
  }else if(anim == "nexts"){
    if (ruolo.length != 0 && posizione != "") {
      bc.postMessage(anim + "|" + ruolo + "|" + posizione);
      btn(6000);
      console.log("Messaggio inviato!")
    } else {
      alert();
    }
  }

}

//GENERA LISTA OSPITI
function generateOspiti(anim){
  let lista = document.getElementById("lista");
  lista.innerHTML = "";

  if(anim == "ospiti"){
    lista.classList.add("pt-5");
    let div = document.createElement("DIV");
    let ul = document.createElement("UL");
    let ul2 = document.createElement("UL");
    let ul3 = document.createElement("UL");
    let ul4 = document.createElement("UL");

    ospiti.forEach((item, index) => {
      if(index < 5){
        ul.innerHTML += `
          <li id="${item.id}" data-name="${item.nome + " " + item.cognome}" class="marg" onClick="clickOspiti(${item.id})"><img src="${item.img}" /></li>
          `
      }else if(index >= 5 && index < 10){
        ul2.innerHTML += `
          <li id="${item.id}" data-name="${item.nome + " " + item.cognome}" class="marg" onClick="clickOspiti(${item.id})"><img src="${item.img}" /></li>
          `
      }else if(index >= 10 && index < 15){
        ul3.innerHTML += `
          <li id="${item.id}" data-name="${item.nome + " " + item.cognome}" class="marg" onClick="clickOspiti(${item.id})"><img src="${item.img}" /></li>
          `
      }else{
        ul4.innerHTML += `
          <li id="${item.id}" data-name="${item.nome + " " + item.cognome}" class="marg" onClick="clickOspiti(${item.id})"><img src="${item.img}" /></li>
          `
      }
    })
    ul.classList.add("timeline", "d-flex", "justify-content-center", "mb-6");
    ul2.classList.add("timeline", "d-flex", "justify-content-center", "mb-6");
    ul3.classList.add("timeline", "d-flex", "justify-content-center", "mb-6");
    ul4.classList.add("timeline", "d-flex", "justify-content-center");
    div.appendChild(ul);
    div.appendChild(ul2);
    div.appendChild(ul3);
    div.appendChild(ul4);
    lista.appendChild(div);
  }
  if(anim == "rp"){
    lista.classList.remove("pt-5");
    let div = document.createElement("DIV");
    div.classList.add("row")

    let cards;
    ruoliRp.forEach(item => {
      let people = item.persone.map((person, index) => {
        virgola = index == item.persone.length-2 ? ' e ' : index < item.persone.length-1 ? ', ' : "";
        return person.nome + " " + person.cognome + virgola
      });
      cards = `
    <div class="col-sm-6 mb-3">
  <div class="card ruoloRp" onClick="clickRuolo(this, ${item.id})">
    <div class="card-body">
      <h5 class="card-title">${item.nome}</h5>
      <p class="card-text">${people.join("")}</p>
    </div>
  </div>
</div>
      `
      div.innerHTML += cards;
    });
    lista.appendChild(div);
  }
  if(anim == "nexts"){
    lista.classList.remove("pt-5");
    let div = document.createElement("DIV");
    div.classList.add("row");
    nexts.forEach(item => {
      cards = `
    <div class="col-sm-6 mb-3">
  <div class="card nextArgomento" onClick="clickNext(this, ${item.id})">
    <div class="card-body">
      <p class="card-text">${item.argomento}</p>
    </div>
  </div>
  </div>
      `
      div.innerHTML += cards
    });
    lista.appendChild(div);
  }

}


const change = (op) => {
  let now = document.querySelector("#now");
  let dataset = now.dataset.id ? parseInt(now.dataset.id) : 0;
  if(op == "add"){
    if(now.dataset.anim == "ospiti" && dataset+1 <= ospiti.length){
      clickOspiti(dataset+1)
    }
    if(now.dataset.anim == "rp" && dataset+1 < ruoliRp.length){
      let ruolo = document.querySelectorAll(".ruoloRp");
      clickRuolo(ruolo[dataset] ? ruolo[dataset] : ruolo[ruolo.length-1], dataset+1)
    }
  }else if(op == "sub"){
    if(now.dataset.anim == "ospiti" && dataset-1 > 0){
      clickOspiti(dataset-1)
    }
    if(now.dataset.anim == "rp" && dataset-1 > 0){
      let ruolo = document.querySelectorAll(".ruoloRp")[dataset-2];
      clickRuolo(ruolo, dataset-1)
    }
  }
}

document.addEventListener("keydown", (e) => {
  if(e.ctrlKey && e.altKey && e.shiftKey && e.code == "Period"){
    change("add")
  }else if(e.ctrlKey && e.altKey && e.shiftKey && e.code == "Comma"){
    change("sub")
  }

  if(e.ctrlKey && e.altKey && e.shiftKey && e.code == "KeyO"){
    changeAnim(document.querySelector("#ospiti"))
  }
  if(e.ctrlKey && e.altKey && e.shiftKey && e.code == "KeyI"){
    changeAnim(document.querySelector("#rp"))
  }
})

//Ctrl + Alt + Shift + O == Switch to Ospiti
//Ctrl + Alt + Shift + I == Switch to Rp
//Ctrl + Alt + Shift + Period == NextLower (+)
//Ctrl + Alt + Shift + Comma == PreviousLower (-)