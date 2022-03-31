var shopData = [
    { 
      image_url:
        "https://cfcdn20.candere.com/media/catalog/product/cache/1/yellow_gold_default/310x310/040ec09b1e35df139433887a97daa66f/c/0/c012928_1_3.jpg?v=1646647233",
      name: "EDELWEISS MIRACLE PLATE DIAMOND RING",
      price: "Rs. 28,603",
      offprice: "Offer Price:Rs. 22,250",
      category: "Ring",
    },
    
   
    {
        image_url:
          "https://cfcdn20.candere.com/media/catalog/product/cache/1/yellow_gold_default/310x310/040ec09b1e35df139433887a97daa66f/c/0/c004016_1_1.jpg?v=1646647185",
        name: "DEEPALI DIAMOND ENGAGEMENT RING",
        price: "Rs. 31,436",
        offprice: "Offer Price:Rs. 23,368",
        category: "Ring",
      },
      {
          image_url:
            "https://cfcdn20.candere.com/media/catalog/product/cache/1/yellow_gold_default/310x310/040ec09b1e35df139433887a97daa66f/c/0/c015983_1.jpeg?v=1646647236",
          name: "ROSS DIAMOND RING",
          price: "Rs. 24,436",
          offprice: "Offer Price:Rs. 17,746",
          category: "Ring",
      },
      {
        image_url:
          "https://cfcdn20.candere.com/media/catalog/product/cache/1/white_gold_default/310x310/040ec09b1e35df139433887a97daa66f/c/0/c005493_1.jpg?v=1646647185",
        name: "MARYANN SOLITAIRE DIAMOND RING",
        price: "Rs. 286,192",
        offprice: "Offer Price:Rs. 110,746",
        category: "Ring",
      },
      {
        image_url:
          "https://cfcdn20.candere.com/media/catalog/product/cache/1/yellow_gold_default/310x310/040ec09b1e35df139433887a97daa66f/c/0/c013134_1.jpg?v=1646647377",
        name: "ASTEROIDS MIRACLE PLATE DIAMOND EARRINGS",
        price: "Rs. 33,327",
        offprice: "Offer Price:Rs. 27,250",
        category: "Ear Ring",
      },
      
      {
        image_url:
          "https://cfcdn20.candere.com/media/catalog/product/cache/1/yellow_gold_default/310x310/040ec09b1e35df139433887a97daa66f/l/c/lce0022_1_1.jpeg?v=1646647697",
        name: "FUSCIA DIAMOND EARRINGS",
        price: "Rs. 30,327",
        offprice: "Offer Price:Rs. 23,250",
        category: "Ear Ring",
      },
      {
        image_url:
          "https://cfcdn20.candere.com/media/catalog/product/cache/1/yellow_gold_default/310x310/040ec09b1e35df139433887a97daa66f/c/0/c016318_1.jpeg?v=1646647378",
        name: "HAKINI DIAMOND MANGALSUTRA PENDANT",
        price: "Rs. 19,527",
        offprice: "Offer Price:Rs. 16,421",
        category: "Necklace",
      },
      
      {
        image_url:
          "https://cfcdn20.candere.com/media/catalog/product/cache/1/rose_gold_default/310x310/040ec09b1e35df139433887a97daa66f/l/c/lcn0290_1.jpg?v=1646647510",
        name: "ZENAIDA DIAMOND NECKLACE",
        price: "Rs. 39,794",
        offprice: "Offer Price:Rs. 31,904",
        category: "Necklace",
      },

      {
        image_url:
          "https://cfcdn20.candere.com/media/catalog/product/cache/1/yellow_gold_default/310x310/040ec09b1e35df139433887a97daa66f/k/c/kc01388_1.jpeg?v=1646647311",
        name: "ASTEROIDS MIRACLE PLATE DIAMOND EARRINGS",
        price: "Rs. 33,327",
        offprice: "Offer Price:Rs. 27,250",
        category: "Braclet",
      },
      {
        image_url:
          "https://cfcdn20.candere.com/media/catalog/product/cache/1/rose_gold_default/310x310/040ec09b1e35df139433887a97daa66f/l/c/lcb0245_1.jpeg?v=1646647379",
        name: "ARIANE DIAMOND BRACELET",
        price: "Rs. 15,527",
        offprice: "Offer Price:Rs. 12,021",
        category: "Braclet",
      },
      
      {
        image_url:
          "https://cfcdn20.candere.com/media/catalog/product/cache/1/yellow_gold_default/310x310/040ec09b1e35df139433887a97daa66f/c/0/c018292_1.jpeg?v=1646647310",
        name: "DAYANARA DIAMOND KADA",
        price: "Rs. 33,412",
        offprice: "Offer Price:Rs. 21,238",
        category: "Braclet",
      },

      {
        image_url:
          "https://cfcdn20.candere.com/media/catalog/product/cache/1/yellow_gold_default/310x310/040ec09b1e35df139433887a97daa66f/l/c/lcd0022_1.jpeg?v=1646647666",
        name: "LILAS DIAMOND KADA",
        price: "Rs. 37,812",
        offprice: "Offer Price:Rs. 26,896",
        category: "Braclet",
      },
  ];

  var cartData = JSON.parse(localStorage.getItem("cart")) || [];

  shopData.map(function (elem) {
    var box = document.createElement("div");

    var img = document.createElement("img");
    img.src = elem.image_url;


    var name = document.createElement("p");
    name.textContent = elem.name;
    name.style.paddingLeft="10px";


    var price = document.createElement("p");
    price.innerText = elem.price;
    price.style.paddingLeft="10px";


    var offerPrice = document.createElement("p");
    offerPrice.innerText = elem.offprice;
    offerPrice.style.color="red";
    offerPrice.style.paddingLeft="10px";


   var btn=document.createElement("button");
   btn.innerText="Add To Cart";
   btn.style.marginLeft="10px";
   btn.style.color="teal";
  
   btn.addEventListener("click",function(){
     addToCart(elem)
   })


   
   
    box.append(img, name, price,offerPrice,btn);

    document.querySelector("#contain").append(box);
  });

  function addToCart(elem) {
    console.log(elem);
    cartData.push(elem);
    localStorage.setItem("cart", JSON.stringify(cartData));
    alert("item added to cart");
  }

