const sectionCenter = document.querySelector(".sect-centr")

const menu = [
  {
    id: 9,
    title: "Pokemons",
    category: "lunch",
    name: "Grass, Poison",
    img: "./images/drago_pakemon.png",
    desc: "6.9kg 99 age",
  },   {
    id: 9,
    title: "Pokemons",
    category: "lunch",
    name: "Grass, Poison",
    img: "./images/drago_pakemon.png",
    desc: "6.9kg 99 age",
  },   {
    id: 9,
    title: "Pokemons",
    category: "lunch",
    name: "Grass, Poison",
    img: "./images/drago_pakemon.png",
    desc: "6.9kg 99 age",
  },   {
    id: 9,
    title: "Pokemons",
    category: "shakes",
    name: "Grass, Poison",
    img: "./images/drago_pakemon.png",
    desc: "6.9kg 99 age",
  },   {
    id: 9,
    title: "Pokemons",
    category: "shakes",
    name: "Grass, Poison",
    img: "./images/drago_pakemon.png",
    desc: "6.9kg 99 age",
  },   {
    id: 9,
    title: "Pokemons",
    category: "shakes",
    name: "Grass, Poison",
    img: "./images/drago_pakemon.png",
    desc: "6.9kg 99 age",
  },   {
    id: 9,
    title: "Pokemons",
    category: "salat",
    name: "Grass, Poison",
    img: "./images/drago_pakemon.png",
    desc: "6.9kg 99 age",
  },   {
    id: 9,
    title: "Pokemons",
    category: "salat",
    name: "Grass, Poison",
    img: "./images/drago_pakemon.png",
    desc: "6.9kg 99 age",
  },   {
    id: 9,
    title: "Pokemons",
    category: "salat",
    name: "Grass, Poison",
    img: "./images/drago_pakemon.png",
    desc: "6.9kg 99 age",
  },
 
  ];
  const btn1 = document.querySelector(".lunch");
  const bnt2 = document.querySelector(".salat");
  const btn3 = document.querySelector(".shakes")
  const show = document.querySelector(".sect-centr")
  const chiqar = document.querySelector(".sect-centr")
  window.addEventListener("DOMContentLoaded", function () {
    let displayMenu = menu.map(function (item) {
        

        return `<article class="menu-item">
        <img src="${item.img}" alt=${item.title} class="photo"/>
        <div class="item-info">
            <header>
                <h2 class="item-tilte">${item.title}</h2>
                <h4 class="price">${item.name}</h4>
                </header>
                <p class="item-text">
                    ${item.desc}
                </p>
                </header>
            </div>
            </article>
        `
    })
    displayMenu = displayMenu.join("")
    console.log(displayMenu);


    sectionCenter.innerHTML = displayMenu;

    btn1.addEventListener("click", function (event) {
      event.preventDefault();
      let displayMenu = menu.map(function (item) {
  
        if (item.category == "lunch") {
          return `<article class="menu-item">
          <img src="${item.img}" alt="${item.title}">
          <div class="item-info">
              <header>
                  <h2 class="item-tilte">${item.title}</h2>
                  <h4 class="price">${item.name}</h4>
                  </header>
                  <p class="item-text">
                      ${item.desc}
                  </p>
              </header>
              </div>
          </article>
          `
        }
      })
      displayMenu = displayMenu.join("")
      chiqar.innerHTML = displayMenu;
    });
    bnt2.addEventListener("click", function (event) {
      event.preventDefault();
      let displayMenu = menu.map(function (item) {
  
        if (item.category == "salat") {
          return `<article class="menu-item">
          <img src="${item.img}" alt="${item.title}">
          <div class="item-info">
              <header>
                  <h2 class="item-tilte">${item.title}</h2>
                  <h4 class="price">${item.name}</h4>
                  </header>
                  <p class="item-text">
                      ${item.desc}
                  </p>
              </header>
              </div>
          </article>
          `
        }
      })
      displayMenu = displayMenu.join("")
      chiqar.innerHTML = displayMenu;
    });
    btn3.addEventListener("click", function (event) {
      event.preventDefault();
      let displayMenu = menu.map(function (item) {
  
        if (item.category == "shakes") {
          return `<article class="menu-item">
          <img src="${item.img}" alt="${item.title}">
          <div class="item-info">
              <header>
                  <h2 class="item-tilte">${item.title}</h2>
                  <h4 class="price">${item.name}</h4>
                  </header>
                  <p class="item-text">
                      ${item.desc}
                  </p>
              </header>
              </div>
          </article>
          `
        }
      })
      displayMenu = displayMenu.join("")
      chiqar.innerHTML = displayMenu;
    });
  });