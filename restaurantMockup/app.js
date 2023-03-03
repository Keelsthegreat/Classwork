

let menu = {
    beverages:{
    name:'Soft Drinks',
    url:'https://www.webstaurantstore.com/images/products/large/473849/1928114.jpg',
    text:'Pepsi, cherry pepsi, pepsi zero, sierra mist, orange crush, schweppes ginger ale, pure leaf sweet tea',
    price: '$3.50',
    },
    appetizers:{
    name:'Parmesan Truffle Fries',
    url:'https://kitchenswagger.com/wp-content/uploads/2022/10/parmesan-truffle-fries-4.jpg',
    text:'French fries, truffle oil, parmesan cheese, chives, garlic aioli',
    price: '$12',
    }, 
    entrees:{
    name:'Southern Fried Chicken',
    url:'https://www.currytrail.in/wp-content/uploads/2019/03/Southern-Fried-Chicken-12.jpg',
    text:'Half bird, house seasoned batter, pressure fried, mashed potato, poulet gravy, house slaw',   
    price: '$24', 
    },
    desserts: {
    name:'Key Lime Pie',
    url:'https://www.momontimeout.com/wp-content/uploads/2015/03/best-key-lime-pie-recipe-easy.jpg',
    text:'Graham cracker crust, fresh whipped cream',
    price: '$7',
        },
}

let holiTheme = {
    birthday: 20,
    vday:{

    },
    christmas:{

    },
    halloween: {

    },
    patricks: {

    }
}

const beverageItems = ()=>{
    let bevName = document.querySelector ('.menuName')
    bevName.innerHTML= menu.beverages.name
    let  bevPic =document.querySelector ('.menuPic')
    bevPic.setAttribute('src', menu.beverages.url)
    let bevText = document.querySelector ('.menuText')
    bevText.innerHTML = menu.beverages.text
    let bevPrice = document.querySelector ('.menuPrice')
    bevPrice.innerHTML=menu.beverages.price
}

const appetizerItems = ()=>{
    let appName = document.querySelector ('.menuName')
    appName.innerHTML= menu.appetizers.name
    let  appPic =document.querySelector ('.menuPic')
    appPic.setAttribute('src', menu.appetizers.url)
    let appText = document.querySelector ('.menuText')
    appText.innerHTML = menu.appetizers.text
    let appPrice = document.querySelector ('.menuPrice')
    appPrice.innerHTML=menu.appetizers.price
}


const entreeItems = ()=>{
    let entName = document.querySelector ('.menuName')
    entName.innerHTML= menu.entrees.name
    let  entPic =document.querySelector ('.menuPic')
    entPic.setAttribute('src', menu.entrees.url)
    let entText = document.querySelector ('.menuText')
    entText.innerHTML = menu.entrees.text
    let entPrice = document.querySelector ('.menuPrice')
    entPrice.innerHTML=menu.entrees.price
    
}

const dessertItems = ()=>{
    let dessName = document.querySelector ('.menuName')
    dessName.innerHTML= menu.desserts.name
    let  dessPic =document.querySelector ('.menuPic')
    dessPic.setAttribute('src', menu.desserts.url)
    let dessText = document.querySelector ('.menuText')
    dessText.innerHTML = menu.desserts.text
    let dessPrice = document.querySelector ('.menuPrice')
    dessPrice.innerHTML=menu.desserts.price
}

//--------------------------carousel js--------------------------------//

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

