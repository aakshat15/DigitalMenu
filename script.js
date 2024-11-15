// F1
function mainFunction() {
  let main = document.getElementById("main");
  // main.setAttribute('class' , 'container-fluid')
  main.setAttribute("style", "background-color:rgb(255 247 237); height:auto; width:100%; font-family:Rubik, sans-serif;");


  var Dataname = [];
  let innerMain = document.createElement("div");
  innerMain.setAttribute("id", "innermain");
  // innerMain.setAttribute("class", "container");
  innerMain.setAttribute("style", "height:auto; width:100%; display:flex; flex-direction:column;");
  main.appendChild(innerMain);

  let header = document.createElement("header");
  header.setAttribute("style", " height:10vh; , width:100%; , font-size: 1.5em; display:flex; justify-content: space-between;");
  innerMain.appendChild(header);

  //CUSTIOM SELECT MENU
  let select = document.createElement("select");
  select.setAttribute("style", "color:black; width:20%; height:7.5  vh; margin:0.5%; border-radius:15px; ");
  header.appendChild(select);

  let option1 = document.createElement("option");
  option1.innerText = "All items";
  select.appendChild(option1);

  let option2 = document.createElement("option");
  option2.innerText = "Food";
  select.appendChild(option2);

  let option3 = document.createElement("option");
  option3.innerText = "Dresserts";
  select.appendChild(option3);

  let option4 = document.createElement("option");
  option4.innerText = "Beverages";
  select.appendChild(option4);

  select.addEventListener('change' , function(){
    if(select.value === 'All items'){
      mainFunction();
      innerMain.remove();
    }
    else if(select.value === 'Food'){
      list2.remove();//Drink
      list5.remove();//Choclate
      list7.remove();//Desserts;
      list8.remove();//Icecream
    }
    else if(select.value === 'Dresserts'){
      list1.remove();
      list3.remove();
      list4.remove();
      list6.remove();
      list9.remove();
      list10.remove();
      list11.remove();
    }
    else if(select.value === 'Beverages'){
      list1.remove()
      list3.remove()
      list4.remove()
      list5.remove()
      list6.remove()
      list7.remove()
      list8.remove()
      list9.remove()
      list10.remove()
      list11.remove()
    }
  })

  // QR BUTTON
  let qrBtn = document.createElement("button");
  qrBtn.innerHTML = "Share";
  qrBtn.id = 'qrBtn'
  qrBtn.setAttribute("class", "btn-secondary btn-lg m-2 ");
  qrBtn.setAttribute("style", "border-radius:10px;");
  header.appendChild(qrBtn);

  //ACCOUNT BUTTON
  let accountBtn = document.createElement("button");
  accountBtn.innerHTML = "Account";
  accountBtn.id = 'accountBtn'
  accountBtn.setAttribute("class", "btn-secondary btn-lg m-2 ");
  accountBtn.setAttribute("style", "border-radius:10px;");
  header.appendChild(accountBtn);




  //DIV FOR MID
  let section = document.createElement("section");
  section.setAttribute("style", "height:auto; width:100%; border:0px solid blue;");
  innerMain.appendChild(section);

  //LIST STRACTURE
  let unOrderd = document.createElement("ul");
  unOrderd.setAttribute("style", "height:auto; width:100%; padding-left:0; border:0px solid green;");
  section.appendChild(unOrderd);


  //Burger
  let list1 = document.createElement("li");
  list1.setAttribute("style", "height:15vh; cursor: pointer; width:100%; border:2px solid white; box-shadow: 0px 5px 10px rgba(255, 182, 193, 0.8); font-family:Rubik, sans-serif;");
  list1.setAttribute("class", "d-flex");
  //IN LIST IMAGE 
  let img1 = document.createElement("img");
  img1.setAttribute("style", "height:90%; width:100px; margin:5px; border-radius:4px;");
  img1.setAttribute("src", "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137148/Gramercy-Tavern-Burger-and-Kielbasa-Kit-6.4.21-72ppi-1x1-15.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1");
  list1.appendChild(img1);
  //TITLE OF
  let title1 = document.createElement("h4");
  title1.setAttribute("style", "padding:5vh; 2px;");
  title1.innerHTML = "Burger'S ➤";
  list1.appendChild(title1);
  list1.addEventListener('click', function () {
    menuList(getDataburger())
  });


  //DRINK
  let list2 = document.createElement("li");
  list2.setAttribute("style", "height:15vh; cursor: pointer; width:100%; border:2px solid white; box-shadow: 0px 5px 10px rgba(255, 182, 193, 0.8); font-family:Rubik, sans-serif;");
  list2.setAttribute("class", "d-flex");
  //IN LIST IMAGE 
  let img2 = document.createElement("img");
  img2.setAttribute("style", "height:90%; width:100px; margin:5px; border-radius:4px;");
  img2.setAttribute("src", "https://goldbelly.imgix.net/uploads/product_image/image/42820/evan-williams-gourmet-mint-julep-mix-2-pack.a0bd561099dd14bfb33e3363c1c025d0.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1");
  list2.appendChild(img2);
  //TITLE OF
  let title2 = document.createElement("h4");
  title2.setAttribute("style", "padding:5vh; 2px;");
  title2.innerHTML = "Drink'S ➤";
  list2.appendChild(title2);
  list2.addEventListener('click', function () {
    menuList(getdatadrink())
  });


  // BBQ'S
  let list3 = document.createElement("li");
  list3.setAttribute("style", "height:15vh; cursor: pointer; width:100%; border:2px solid white; box-shadow: 0px 5px 10px rgba(255, 182, 193, 0.8); font-family:Rubik, sans-serif;");
  list3.setAttribute("class", "d-flex");
  //IN LIST IMAGE 
  let img3 = document.createElement("img");
  img3.setAttribute("style", "height:90%; width:100px; margin:5px; border-radius:4px;");
  img3.setAttribute("src", "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/79619/joes-kc-ribs-brisket-and-burnt-ends.6710e994980e485e6441b794717ad6fb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1");
  list3.appendChild(img3);
  //TITLE OF
  let title3 = document.createElement("h4");
  title3.setAttribute("style", "padding:5vh; 2px;");
  title3.innerHTML = "Bbq's ➤";
  list3.appendChild(title3);
  list3.addEventListener('click', function () {
    menuList(getdataBbq())
  });


  // BREADS
  let list4 = document.createElement("li");
  list4.setAttribute("style", "height:15vh; cursor: pointer; width:100%; border:2px solid white; box-shadow: 0px 5px 10px rgba(255, 182, 193, 0.8); font-family:Rubik, sans-serif;");
  list4.setAttribute("class", "d-flex");
  //IN LIST IMAGE 
  let img4 = document.createElement("img");
  img4.setAttribute("style", "height:90%; width:100px; margin:5px; border-radius:4px;");
  img4.setAttribute("src", "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133923/corn-cheese-bread-2-pack.703937ce3943d6caad78d3612cd9dcef.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1");
  list4.appendChild(img4);
  //TITLE OF
  let title4 = document.createElement("h4");
  title4.setAttribute("style", "padding:5vh; 2px;");
  title4.innerHTML = "Bread's ➤";
  list4.appendChild(title4);
  list4.addEventListener('click', function () {
    menuList(getdata())
  });


  // CHOCOLATES
  let list5 = document.createElement("li");
  list5.setAttribute("style", "height:15vh; cursor: pointer; width:100%; border:2px solid white; box-shadow: 0px 5px 10px rgba(255, 182, 193, 0.8); font-family:Rubik, sans-serif;");
  list5.setAttribute("class", "d-flex");
  //IN LIST IMAGE 
  let img5 = document.createElement("img");
  img5.setAttribute("style", "height:90%; width:100px; margin:5px; border-radius:4px;");
  img5.setAttribute("src", "https://www.thespruceeats.com/thmb/IPz-vGjYi6_vyT1UyQBOLiaOFw8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/chocolate_hero1-d62e5444a8734f8d8fe91f5631d51ca5.jpg");
  list5.appendChild(img5);
  //TITLE OF
  let title5 = document.createElement("h4");
  title5.setAttribute("style", "padding:5vh; 2px;");
  title5.innerHTML = "Chocolate's ➤";
  list5.appendChild(title5);
  list5.addEventListener('click', function () {
    menuList(getdatachocolate())
  });


  //CHICKEN
  let list6 = document.createElement("li");
  list6.setAttribute("style", "height:15vh; cursor: pointer; width:100%; border:2px solid white; box-shadow: 0px 5px 10px rgba(255, 182, 193, 0.8); font-family:Rubik, sans-serif;");
  list6.setAttribute("class", "d-flex");
  //IN LIST IMAGE 
  let img6 = document.createElement("img");
  img6.setAttribute("style", "height:90%; width:100px; margin:5px; border-radius:4px;");
  img6.setAttribute("src", "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134235/complete-fried-chicken-dinner-for-4.aeabf841c124b9cc2fb0166f27790999.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1");
  list6.appendChild(img6);
  //TITLE OF
  let title6 = document.createElement("h4");
  title6.setAttribute("style", "padding:5vh; 2px;");
  title6.innerHTML = "Chicken's ➤";
  list6.appendChild(title6);
  list6.addEventListener('click', function () {
    menuList(getdatachicken())
  });


  //DESSERT
  let list7 = document.createElement("li");
  list7.setAttribute("style", "height:15vh; cursor: pointer; width:100%; border:2px solid white; box-shadow: 0px 5px 10px rgba(255, 182, 193, 0.8); font-family:Rubik, sans-serif;");
  list7.setAttribute("class", "d-flex");
  //IN LIST IMAGE 
  let img7 = document.createElement("img");
  img7.setAttribute("style", "height:90%; width:100px; margin:5px; border-radius:4px;");
  img7.setAttribute("src", "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134006/sea-salted-caramel-swirl-cheesecake.e2825335433fb7a272a5d77649a6849e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1");
  list7.appendChild(img7);
  //TITLE OF
  let title7 = document.createElement("h4");
  title7.setAttribute("style", "padding:5vh; 2px;");
  title7.innerHTML = "Dessert's ➤";
  list7.appendChild(title7);
  list7.addEventListener('click', function () {
    menuList(getdatadessert())
  });


  //ICE CREAM
  let list8 = document.createElement("li");
  list8.setAttribute("style", "height:15vh; cursor: pointer; width:100%; border:2px solid white; box-shadow: 0px 5px 10px rgba(255, 182, 193, 0.8); font-family:Rubik, sans-serif;");
  list8.setAttribute("class", "d-flex");
  //IN LIST IMAGE 
  let img8 = document.createElement("img");
  img8.setAttribute("style", "height:90%; width:100px; margin:5px; border-radius:4px;");
  img8.setAttribute("src", "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/103337/build-your-own-ice-cream-sandwich-kit-9-pack.e972c9c8819bfc245d671eaf98107247.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1");
  list8.appendChild(img8);
  //TITLE OF
  let title8 = document.createElement("h4");
  title8.setAttribute("style", "padding:5vh; 2px;");
  title8.innerHTML = "Ice-cream's ➤";
  list8.appendChild(title8);
  list8.addEventListener('click', function () {
    menuList(getdataicecream())
  });

  //PIZZA
  let list9 = document.createElement("li");
  list9.setAttribute("style", "height:15vh; cursor: pointer; width:100%; border:2px solid white; box-shadow: 0px 5px 10px rgba(255, 182, 193, 0.8); font-family:Rubik, sans-serif;");
  list9.setAttribute("class", "d-flex");
  //IN LIST IMAGE 
  let img9 = document.createElement("img");
  img9.setAttribute("style", "height:90%; width:100px; margin:5px; border-radius:4px;");
  img9.setAttribute("src", "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/71231/wood-fired-pizza-4-pack.8818b2e71ad1149790d0c03413d11996.png?ixlib=react-9.0.2&auto=format&ar=1%3A1");
  list9.appendChild(img9);
  //TITLE OF
  let title9 = document.createElement("h4");
  title9.setAttribute("style", "padding:5vh; 2px;");
  title9.innerHTML = "Pizza's ➤";
  list9.appendChild(title9);
  list9.addEventListener('click', function () {
    menuList(getdatapizza())
  });

  //SANDWICH
  let list10 = document.createElement("li");
  list10.setAttribute("style", "height:15vh; cursor: pointer; width:100%; border:2px solid white; box-shadow: 0px 5px 10px rgba(255, 182, 193, 0.8); font-family:Rubik, sans-serif;");
  list10.setAttribute("class", "d-flex");
  //IN LIST IMAGE 
  let img10 = document.createElement("img");
  img10.setAttribute("style", "height:90%; width:100px; margin:5px; border-radius:4px;");
  img10.setAttribute("src", "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/135494/Joe_s-KC-Z-Man-Product-6.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1");
  list10.appendChild(img10);
  //TITLE OF
  let title10 = document.createElement("h4");
  title10.setAttribute("style", "padding:5vh; 2px;");
  title10.innerHTML = "Sandwich's ➤";
  list10.appendChild(title10);
  list10.addEventListener('click', function () {
    menuList(getdatasandwich())
  });

  //SAUSGE
  let list11 = document.createElement("li");
  list11.setAttribute("style", "height:15vh; cursor: pointer; width:100%; border:2px solid white; box-shadow: 0px 5px 10px rgba(255, 182, 193, 0.8); font-family:Rubik, sans-serif;");
  list11.setAttribute("class", "d-flex");
  //IN LIST IMAGE 
  let img11 = document.createElement("img");
  img11.setAttribute("style", "height:90%; width:100px; margin:5px; border-radius:4px;");
  img11.setAttribute("src", "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131684/choose-your-own-korean-bbq-grilling-sausage-12-pack.cf65a78dff1380f12d408831c8ef51d1.jpeg?ixlib=react-9.0.2&auto=format&ar=1%3A1");
  list11.appendChild(img11);
  //TITLE OF
  let title11 = document.createElement("h4");
  title11.setAttribute("style", "padding:5vh; 2px;");
  title11.innerHTML = "Sausage's ➤";
  list11.appendChild(title11);
  list11.addEventListener('click', function () {
    menuList(getdatasandwich())
  });
  unOrderd.appendChild(list1);
  unOrderd.appendChild(list2);
  unOrderd.appendChild(list3);
  unOrderd.appendChild(list4);
  unOrderd.appendChild(list5);
  unOrderd.appendChild(list6);
  unOrderd.appendChild(list7);
  unOrderd.appendChild(list8);
  unOrderd.appendChild(list9);
  unOrderd.appendChild(list10);
  unOrderd.appendChild(list11);
}


// F2
function menuList(data) {

  //MAIN CONTAINER
  let main = document.getElementById("innermain");

  let qrBtn = document.getElementById('qrBtn');
  qrBtn.remove();
  let accountBtn = document.getElementById('accountBtn');
  accountBtn.remove();
  let select = document.querySelector("select");
  let section = document.querySelector("section");
  section.remove();
  select.remove();


  // HOME BUTTON
  let header = document.querySelector("header");
  let homebtn = document.createElement("button");
  homebtn.innerHTML = '🏠︎';
  homebtn.setAttribute("class", "btn-secondary btn-lg m-2 ");
  homebtn.setAttribute("style", "border-radius:10px;");
  homebtn.id = "homebtn";
  header.appendChild(homebtn);
  homebtn.addEventListener('click', function () {
    main.remove();
    mainFunction();
  });


  //CARD BTN
  let cartbtn = document.createElement("button");
  cartbtn.id = "cartbtn";
  cartbtn.innerHTML = '🛒'
  cartbtn.setAttribute("class", "btn-secondary btn-lg m-2 ");
  cartbtn.setAttribute("style", "border-radius:10px;");
  header.appendChild(cartbtn);
  cartbtn.addEventListener('click', function () {
    cartFunction();
  });

  //SECTOIN 
  let innerMain = document.createElement("div");
  innerMain.id = "row's"
  innerMain.setAttribute("style", "height:auto; width:100%; border:2px solid white; box-shadow: 0px 5px 10px rgba(255, 182, 193, 0.8); font-family:Rubik, sans-serif;");
  main.appendChild(innerMain);

  for (var product of data) {
    let row = document.createElement("div");

    row.setAttribute("style", "width:99%; height:15vh; border:2px solid cream; margin:5px; border-radius:10px; box-shadow: 0px 5px 10px rgba(255, 182, 193, 0.8); display:flex; justify-content:center; align-items:center;");
    innerMain.appendChild(row);

    let imgUrl = document.createElement("h6");
    imgUrl.setAttribute("style", "width:0; height:0; font-size:0; display:none;")
    imgUrl.innerHTML = `${product.img}`
    row.appendChild(imgUrl);


    let img = document.createElement("img");
    img.setAttribute("style", "height:90%; width:100px; margin:2px; border-radius:6px;");
    img.setAttribute("src", `${product.img}`);
    row.appendChild(img);

    let name = document.createElement("h6");
    name.setAttribute("style", "padding:20px 2px; width:80%; border:0px solid black");
    name.innerHTML = `${product.name}`
    row.appendChild(name);

    let price = document.createElement("h6");
    price.setAttribute("style", "height:6vh; padding:20px 2px; width:20%:; text-align:center; border:0px solid black");
    price.innerHTML = `<span>$</span><span>${product.price}</span>`
    row.appendChild(price);


    let addToCart = document.createElement("button");
    addToCart.innerHTML = "Add To Cart";
    addToCart.setAttribute("class", "btn-secondary btn-md m-2 ");
    addToCart.setAttribute("style", "border-radius:10px;");
    row.appendChild(addToCart);

    if (cartProductName.includes(product.name)) {
      addToCart.innerHTML = "Remove";
    } else {
      addToCart.innerHTML = "Add to Cart";
    }
    addToCart.setAttribute('onclick', `addToCart(this)`);
  }
}


// F3 
var cartProductImg = [];
var cartProductName = [];
var cartProductPrice = [];
var cartProductQty = [];
//ADD TO CART BUTTON
function addToCart(x) {

  let dataImg = x.parentElement.children[0].innerText;
  let dataName = x.parentElement.children[2].innerText;
  let dataPrice = x.parentElement.children[3].innerText;
  let dataQty = 1;

  let itemIndex = cartProductName.indexOf(dataName);
  if (itemIndex === -1) {
    cartProductImg.push(dataImg);
    cartProductName.push(dataName);
    cartProductPrice.push(dataPrice);
    cartProductQty.push(dataQty);
    x.innerHTML = "Remove";
  } else {
    // Remove from cart if it already exists in the cart
    cartProductImg.splice(itemIndex, 1);
    cartProductName.splice(itemIndex, 1);
    cartProductPrice.splice(itemIndex, 1);
    cartProductQty.splice(itemIndex, 1);
    x.innerHTML = "Add to Cart";
  }
}
var total = 0;
function cartFunction() {
  let main = document.getElementById("innermain");

  let cartbtn = document.getElementById("cartbtn");
  cartbtn.remove();
  let section = document.getElementById("row's");
  section.remove();
   
  let innerMain = document.createElement("div");
  innerMain.setAttribute("style", "height:90vh; width:100%; border:2px solid white; box-shadow: 0px 5px 10px rgba(255, 182, 193, 0.8); font-family:Rubik, sans-serif;");
  main.appendChild(innerMain);

  let totalshow = document.createElement("h6");
  totalshow.setAttribute("style", "text-align:right; padding:10px; font-size:3rem;");
  
  function renderCart() {
    innerMain.innerHTML = ""; 
    total = 0; 

    for (let i = 0; i < cartProductName.length; i++) {
      let row = document.createElement("div");
      row.setAttribute("style", "width:99%; height:10vh; border:2px solid cream; margin:5px; border-radius:10px; box-shadow: 0px 5px 10px rgba(255, 182, 193, 0.8); display:flex;");
      innerMain.appendChild(row);
      
      let imgOfCart = document.createElement("img");
      imgOfCart.setAttribute("style", "height:90%; width:100px; margin:2px; border-radius:6px;");
      imgOfCart.setAttribute("src", `${cartProductImg[i]}`);
      row.appendChild(imgOfCart);
      
      let nameOfCart = document.createElement("h6");
      nameOfCart.setAttribute("style", "padding:20px 2px; width:50%; border:0px solid black;");
      nameOfCart.innerHTML = `${cartProductName[i]}`;
      row.appendChild(nameOfCart);

      let basePrice = parseFloat(cartProductPrice[i].replace('$', ''));
      let priceOfCart = document.createElement("h6");
      priceOfCart.setAttribute("style", "height:6vh; padding:20px 2px; width:20%; text-align:center; border:0px solid black");
      row.appendChild(priceOfCart);

      let quantity = document.createElement("input");
      quantity.type = "number";
      quantity.min = 1;
      quantity.value = cartProductQty[i];
      quantity.setAttribute("style", "height:6vh; width:10%; margin:1%; border-radius:10px; text-align:center;");
      row.appendChild(quantity);
      
      let itemTotal = basePrice * cartProductQty[i];
      priceOfCart.innerHTML = `$${itemTotal.toFixed(2)}`;
      total += itemTotal;
      
      // QUANTITY UPDATE FILD
      quantity.addEventListener('input', function () {
        let newQty = parseInt(quantity.value);
        if (newQty <= 0 || isNaN(newQty)) {
          alert("Enter a valid quantity");
          quantity.value = cartProductQty[i];
        } else {
          cartProductQty[i] = newQty;
          renderCart(); 
        }
      });

      let removeBtn = document.createElement("button");
      removeBtn.innerHTML = `Remove`;
      removeBtn.setAttribute("class", "btn-secondary btn-md m-2 ");
      removeBtn.setAttribute("style", "border-radius:10px;");
      row.appendChild(removeBtn);
      
      removeBtn.addEventListener("click", function () {
        cartProductImg.splice(i, 1);
        cartProductName.splice(i, 1);
        cartProductPrice.splice(i, 1);
        cartProductQty.splice(i, 1);
        renderCart();
      });
    }
    innerMain.appendChild(totalshow);
    totalshow.innerHTML = `Total: $${total.toFixed(2)}`;
    if(total){
      let placedOrder = document.createElement("button");
      placedOrder.innerHTML = `Placed order`;
      placedOrder.setAttribute("style", "height:10vh; width:20%; float:right; margin:1%; border-radius:5px; text-align:center;");
      placedOrder.classList.add("btn-success");
      innerMain.appendChild(placedOrder);

      placedOrder.addEventListener('click' , function(){
        // DetalisFunction();
      });
    }
  }
  renderCart();
}
DetalisFunction()
function DetalisFunction(){
    
}





//GET FUNCION FOR PERTICULAR CATAGORY
function getDataburger() {
  let burgerList = localStorage.getItem("burgerList");
  burgerList = JSON.parse(burgerList);
  return burgerList;
}
function getdatadrink() {
  let drinkList = localStorage.getItem("drinkList");
  drinkList = JSON.parse(drinkList);
  return drinkList;
}
function getdataBbq() {
  let bbqList = localStorage.getItem("bbqList");
  bbqList = JSON.parse(bbqList);
  return bbqList;
}
function getdatabread() {
  let breadList = localStorage.getItem("breadList");
  breadList = JSON.parse(breadList);
  return breadList;
}
function getdatachicken() {
  let chickenList = localStorage.getItem("chickenList");
  chickenList = JSON.parse(chickenList);
  return chickenList;
}
function getdatachocolate() {
  let chocolateList = localStorage.getItem("chocolateList");
  chocolateList = JSON.parse(chocolateList);
  return chocolateList;
}
function getdatadessert() {
  let dessertList = localStorage.getItem("dessertList");
  dessertList = JSON.parse(dessertList);
  return dessertList;
}
function getdataicecream() {
  let icecreamList = localStorage.getItem("icecreamList");
  icecreamList = JSON.parse(icecreamList);
  return icecreamList;
}
function getdatapizza() {
  let pizzaList = localStorage.getItem("pizzaList");
  pizzaList = JSON.parse(pizzaList);
  return pizzaList;
}
function getdatasandwich() {
  let sandwichList = localStorage.getItem("sandwichList");
  sandwichList = JSON.parse(sandwichList);
  return sandwichList;
}
function getdatasausage() {
  let sausageList = localStorage.getItem("sausageList");
  sausageList = JSON.parse(sausageList);
  return sausageList;
}

