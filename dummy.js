function setData(){
    let burger = [
        {
          "id": "the-gramercy-tavern-burger-4-pack",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137148/Gramercy-Tavern-Burger-and-Kielbasa-Kit-6.4.21-72ppi-1x1-15.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Gramercy Tavern",
          "dsc": "The Gramercy Tavern Burger - 4 Pack",
          "price": 99,
          "rate": 5,
          "country": "New York, NY"
        },
        {
          "id": "shake-shack-shackburger-16-pack",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134022/shake-shack-shackburger-16-pack.316f8b09144db65931ea29e34869287a.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Shake Shack",
          "dsc": "Shake Shack Shackburger® – 16 Pack",
          "price": 89,
          "rate": 4,
          "country": "New York, NY"
        },     
        {
          "id": "burger-bomb-kit-for-6",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133829/burger-bomb-kit-for-6.b0430200cfc153c1c15c7997236a6152.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Old Homestead Steakhouse",
          "dsc": "Burger Bomb Kit for 6",
          "price": 129,
          "rate": 5,
          "country": "New York, NY"
        }]
      localStorage.setItem("burgerList", JSON.stringify(burger));

     let drink = [
        {
          "id": "hong-kong-boba-tea-kit-for-6",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/108725/hong-kong-boba-tea-kit-for-6.63841de36d8e5edfafa13023fc303285.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "New Territories",
          "dsc": "Hong Kong Boba Tea Kit for 6",
          "price": 59,
          "rate": 4,
          "country": "New York, NY"
        },
        {
          "id": "guys-caliente-margaritas-for-12",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/126836/guys-caliente-margaritas-for-12.ca8c6bc06b8f1039549385ffcebc749d.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Guy Fieri",
          "dsc": "Guy's Caliente Margaritas for 12",
          "price": 69,
          "rate": 5,
          "country": "Flavortown, USA"
        },
        {
          "id": "woodford-reserve-mint-julep-syrup",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134036/woodford-reserve-mint-julep-syrup.ef523ac7cbae5f4aba6b058207f490d2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Woodford Reserve",
          "dsc": "Woodford Reserve Mint Julep Syrup",
          "price": 39,
          "rate": 4,
          "country": "Louisville, KY"
        },
        {
          "id": "new-orleans-hurricane-mix",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/84522/new-orleans-hurricane-mix.4613584fc65cb0787024dd24d2a8f4b3.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Franco's Hurricane Mix",
          "dsc": "New Orleans Hurricane Mix",
          "price": 39,
          "rate": 5,
          "country": "Natchitoches, LA"
        },
        {
          "id": "evan-williams-gourmet-mint-julep-mix-2-pack",
          "img": "https://goldbelly.imgix.net/uploads/product_image/image/42820/evan-williams-gourmet-mint-julep-mix-2-pack.a0bd561099dd14bfb33e3363c1c025d0.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Evan Williams",
          "dsc": "Evan Williams Gourmet Mint Julep Mix - 2 Pack",
          "price": 39,
          "rate": 4,
          "country": "Louisville, KY"
        }] 
        localStorage.setItem("drinkList", JSON.stringify(drink));
    let bbq = [
        {
          "id": "ribs-brisket-and-burnt-ends",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/79619/joes-kc-ribs-brisket-and-burnt-ends.6710e994980e485e6441b794717ad6fb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Joe's KC BBQ",
          "dsc": "Joe's KC Ribs, Brisket & Burnt Ends",
          "price": 110.99,
          "rate": 4,
          "country": "Kansas City, KS"
        },
        {
          "id": "005-kings-carolina-oink-sampler",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/66752/carolina-bbq-oink-sampler.1340b5a10cedc238cb2280306dd1d5a5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Kings BBQ",
          "dsc": "Carolina BBQ Oink Sampler",
          "price": 89,
          "rate": 4,
          "country": "Kinston, NC"
        },
        {
          "id": "texas-monthlys-1-bbq-brisket",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131249/texas-monthlys-1-bbq-brisket.1006a061be7acae03992e420fbca995a.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Snow's BBQ",
          "dsc": "Texas Monthly's #1 BBQ Brisket",
          "price": 199,
          "rate": 4,
          "country": "Lexington, TX"
        },
        {
          "id": "17352-ribs-and-pulled-pork-small-combo-pack",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137366/Central-BBQ-Ribs-Pulled-Pork-Dinner-1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Central BBQ",
          "dsc": "Ribs & Pulled Pork Dinner for 4",
          "price": 79,
          "rate": 4,
          "country": "Memphis, TN"
        }]
        localStorage.setItem("bbqList", JSON.stringify(bbq));
        let bread = [
        {
            "id": "artisanal-bread-choose-your-own-3-pack",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132332/artisanal-bread-choose-your-own-3-pack.c64d8dc0584457116b91a24f43cd861c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Orwashers Bakery",
          "dsc": "Artisanal Bread - Choose Your Own 3 Pack",
          "price": 45,
          "rate": 5,
          "country": "New York, NY"
        },
        {
          "id": "artisanal-bread-choose-your-own-4-pack",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132426/bread-choose-your-own-4-pack.78f96938f1a3a5bc6a7fefa564bf878c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Grateful Bread Company",
          "dsc": "Artisanal Bread - Choose Your Own 4 Pack",
          "price": 59,
          "rate": 5,
          "country": "Sacramento, CA"
        },
        {
          "id": "corn-cheese-bread-2-pack",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133923/corn-cheese-bread-2-pack.703937ce3943d6caad78d3612cd9dcef.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Calic Bread",
          "dsc": "Corn Cheese Bread - 2 Pack",
          "price": 89,
          "rate": 5,
          "country": "Los Angeles, CA"
        },
        {
            "id": "tartine-bread-loaves-choose-your-own-2-pack",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133401/tartine-bread-loaves-choose-your-own-2-pack.aa052bf998aa1b627e1fa71a482311a7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Tartine Bakery",
          "dsc": "Tartine Bread Loaves - Choose Your Own 2 Pack",
          "price": 39,
          "rate": 4,
          "country": "San Francisco, CA"
        }]
        localStorage.setItem("breadList", JSON.stringify(bread));    

    
    let chocolate = [
        {
          "id": "signature-chocolate-collection-25-piece",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106318/large-signature-collection.6f21146f2b1945d80f7931d69b763ba7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Knipschildt Chocolatier",
          "dsc": "Signature Chocolate Collection Chocolate Gift Box - 25 Piece",
          "price": 60,
          "rate": 4,
          "country": "Norwalk, CT"
        },
        {
          "id": "20482-chocolate-truffle-cake",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131261/chocolate-truffle-cake.289d1e58e4f0ca2dd39568fba9c17e91.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Ferrara Bakery",
          "dsc": "Chocolate Truffle Cake",
          "price": 59,
          "rate": 5,
          "country": "New York, NY"
        },
        {
          "id": "signature-macarons-chocolates-16-pieces",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132333/signature-macarons-chocolates-16-pieces.6072c1e13db3f2ebca89db228f421715.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Sucré",
          "dsc": "Signature Macarons + Chocolates - 16 Pieces",
          "price": 65,
          "rate": 4,
          "country": "New Orleans, LA"
        }]
        localStorage.setItem("chocolateList", JSON.stringify(chocolate));


        let dessert =[
            {
              "id": "15259-german-chocolate-killer-brownie-tin-pack",
              "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132029/german-chocolate-killer-brownie-tin-pack.5ebc34160f28767a9d94c4da2e04c4b9.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
              "name": "Killer Brownie®",
              "dsc": "German Chocolate Killer Brownie®",
              "price": 39.99,
              "rate": 4,
              "country": "Dayton, OH"
            },
            {
              "id": "world-famous-banana-pudding-party-sized",
              "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/84893/world-famous-banana-pudding-bowl-64-oz.85af650f8f51512f8f3181a11d6587d6.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
              "name": "Magnolia Bakery",
              "dsc": "World Famous Banana Pudding Bowl (64 oz.)",
              "price": 56,
              "rate": 4,
              "country": "New York, NY"
            },
            {
              "id": "jacques-world-famous-chocolate-chip-cookies",
              "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/81172/jacques-world-famous-chocolate-chip-cookies-6-pack.2217a14c443602493bba88aa9335319a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
              "name": "Jacques Torres Chocolate",
              "dsc": "Jacques’ World Famous Chocolate Chip Cookies - 6 Pack",
              "price": 39.95,
              "rate": 4,
              "country": "New York, NY"
            },
            {
              "id": "luigis-original-cannoli-pie",
              "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132206/original-cannoli-pie.4cb5b9ba82f57b69b90765fd9f07aa1a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
              "name": "The Cannoli Pie Company",
              "dsc": "Original Cannoli Pie",
              "price": 69,
              "rate": 4,
              "country": "Bridgeport, CT"
            },
            {
              "id": "sea-salted-caramel-swirl-cheesecake",
              "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134006/sea-salted-caramel-swirl-cheesecake.e2825335433fb7a272a5d77649a6849e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
              "name": "Cotton Blues Cheesecake Company",
              "dsc": "Sea-Salted Caramel Swirl Cheesecake",
              "price": 65,
              "rate": 4,
              "country": "Hattiesburg, MS"
            },
            {
              "id": "brooklyn-blackout-cookie-brownie-combo-pack-2-tins",
              "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/123456/brooklyn-blackout-cookie-brownie-combo-pack-2-tins.d8805325baf6b23b4f01d119dc4531a7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
              "name": "Brooklyn Blackout Company",
              "dsc": "Brooklyn Blackout Cookie + Brownie Combo Pack - 2 Tins",
              "price": 89,
              "rate": 5,
              "country": "Brooklyn, NY"
            },
            {
              "id": "smores-variety-pack",
              "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/78037/smores-variety-pack.86cf47d40c0c3508ce14d2659b3f99d4.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
              "name": "Gotta Have S'more",
              "dsc": "S'mores - Variety Pack",
              "price": 49,
              "rate": 5,
              "country": "Los Angeles, CA"
            },
            {
              "id": "best-seller-cupcake-dozen",
              "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/94478/best-seller-cupcake-dozen.f93b21993f6a2da11c975d45b9b0d08f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
              "name": "Crave Cupcakes",
              "dsc": "Best Seller Cupcake Dozen",
              "price": 89,
              "rate": 4,
              "country": "Houston, TX"
            }]
            
            localStorage.setItem("dessertList", JSON.stringify(dessert) );

        let chicken = [
            {
              "id": "the-coop-complete-fried-chicken-dinner-for-4",
              "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134235/complete-fried-chicken-dinner-for-4.aeabf841c124b9cc2fb0166f27790999.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
              "name": "Blue Ribbon",
              "dsc": "\"The Coop\" Complete Fried Chicken Dinner for 4",
              "price": 119,
              "rate": 5,
              "country": "New York, NY"
            },
            {
              "id": "hot-chicken-whole-bird",
              "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/110733/hot-chicken-whole-bird.bfd696b1cf611210ee813293c4c1bf28.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
              "name": "Hattie B's Hot Chicken",
              "dsc": "Hot Chicken - Whole Bird",
              "price": 89,
              "rate": 5,
              "country": "Nashville, TN"
            },
            {
              "id": "the-bird-fried-chicken-for-4",
              "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132392/fried-chicken-for-4.0e6dfb35e3b83144791a5ddae71836e7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
              "name": "Blue Ribbon",
              "dsc": "\"The Bird\" Fried Chicken for 4",
              "price": 99,
              "rate": 4,
              "country": "New York, NY"
            },
            {
              "id": "fried-chicken-biscuit-sandwich-kit",
              "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/85286/fried-chicken-biscuit-sandwich-kit.44b29820e6389324a2dd7ccb0b677a22.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
              "name": "Sunrise Biscuit Kitchen",
              "dsc": "Fried Chicken Biscuit Sandwich Kit",
              "price": 109,
              "rate": 4,
              "country": "Chapel Hill, NC"
            },
            {
              "id": "nashville-hot-chicken-family-meal-for-4",
              "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/103169/nashville-hot-chicken-family-meal-for-4.43a0ea9ae1b7663ff18d82f4930fa561.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
              "name": "Big Shake's Hot Chicken",
              "dsc": "Nashville Hot Chicken Family Meal for 4",
              "price": 99,
              "rate": 5,
              "country": "Franklin, TN"
            },
            {
              "id": "the-family-coop-complete-fried-chicken-dinner-for-8",
              "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132341/complete-fried-chicken-dinner-for-8.512f5bff5f9f22995de1408764b7c0ff.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
              "name": "Blue Ribbon",
              "dsc": "\"The Family Coop\" Complete Fried Chicken Dinner for 8-10",
              "price": 189,
              "rate": 5,
              "country": "New York, NY"
            },
            {
              "id": "korean-fried-chicken-kit-for-4",
              "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/108361/korean-fried-chicken-kit-for-4.4c354ab17c40cd78402d4697b1e075e7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
              "name": "Seoul Sausage",
              "dsc": "Korean Fried Chicken Kit for 4",
              "price": 89,
              "rate": 5,
              "country": "Los Angeles, CA"
            },
            {
              "id": "the-family-bird-fried-chicken-for-8",
              "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132849/fried-chicken-for-8.7f488618ab57ac91a8e230eb70a35a19.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
              "name": "Blue Ribbon",
              "dsc": "\"The Family Bird\" Fried Chicken for 8",
              "price": 169,
              "rate": 5,
              "country": "New York, NY"
            },
            {
              "id": "nashville-hot-chicken-family-meal-for-8",
              "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/103192/nashville-hot-chicken-family-meal-for-8.9b522371aa18fb4be255db66e39e3e1e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
              "name": "Big Shake's Hot Chicken",
              "dsc": "Nashville Hot Chicken Family Meal for 8",
              "price": 129,
              "rate": 5,
              "country": "Franklin, TN"
            },
            {
              "id": "hot-honey-chicken-and-cornbread-waffles-for-2",
              "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131336/marcus-hot-honey-chicken-and-cornbread-waffles-kit-for-4.618df9b9613b506f65c8342ab2e28b32.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
              "name": "Marcus Samuelsson's Streetbird",
              "dsc": "Marcus’ Hot Honey Chicken & Cornbread Waffles Kit for 4",
              "price": 99,
              "rate": 4,
              "country": "Harlem, NY"
            },
            {
              "id": "fried-chicken-dinner-kit-for-2-4",
              "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/118643/fried-chicken-dinner-kit-for-2-4.2f685dc798e641bed96151b31e4b9910.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
              "name": "Yardbird",
              "dsc": "Fried Chicken Dinner Kit for 2-4",
              "price": 89,
              "rate": 4,
              "country": "Miami Beach, FL"
            },
            {
              "id": "fried-chicken-sandwich-combo-kit-for-6",
              "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/115433/fried-chicken-sandwich-combo-kit-for-6.649e00580828a749ee120ec205cf9bb8.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
              "name": "Shaq's Big Chicken",
              "dsc": "Fried Chicken Sandwich Combo Kit for 6",
              "price": 79,
              "rate": 4,
              "country": "Las Vegas, NV"
            }]
            
            localStorage.setItem("chickenList" , JSON.stringify(chicken));


        let icecream = [
            {
              "id": "choose-your-own-ice-cream-6-pints",
              "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/95947/ice-cream-choose-your-own-6-pints.ae6a75a1b5d518d9cbf2982ebc504f4c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
              "name": "Graeter's Ice Cream",
              "dsc": "Ice Cream - Choose Your Own 6 Pints",
              "price": 79.95,
              "rate": 5,
              "country": "Cincinnati, OH"
            },
            {
              "id": "23952-nancys-italian-gelato-gift-box",
              "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/90388/nancys-italian-gelato-gift-box.d44dba927ca67daf7765e0c3a59f3587.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
              "name": "Nancy Silverton's Nancy's Fancy",
              "dsc": "Nancy Silverton's Favorite Gelato Gift Box",
              "price": 89,
              "rate": 4,
              "country": "Los Angeles, CA"
            },
            {
              "id": "237283342-choose-your-own-frozen-custard-6-pack",
              "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133888/choose-your-own-frozen-custard-6-pack.f13e3415fd09547371a184d04166ff77.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
              "name": "Anderson's Frozen Custard",
              "dsc": "Frozen Custard + Handmade Ice Cream - Choose Your Own - 6 Pack",
              "price": 109,
              "rate": 4,
              "country": "Buffalo, NY"
            },
            {
              "id": "ice-cream-choose-your-own-5-pints",
              "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/103364/ice-cream-choose-your-own-5-pints.05ed6c9fab612b8e5f0367e87428ebf7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
              "name": "The Baked Bear",
              "dsc": "Ice Cream - Choose Your Own 5 Pints",
              "price": 99,
              "rate": 4,
              "country": "San Diego, CA"
            },
            {
              "id": "17228-4-pint-pack",
              "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/71773/choose-your-own-boozy-ice-cream-4-pints.cecb4c1a4d29b16b44c2b88fa59b3e86.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
              "name": "Tipsy Scoop Boozy Ice Cream",
              "dsc": "Choose Your Own Boozy Ice Cream - 4 Pints",
              "price": 99,
              "rate": 5,
              "country": "New York, NY"
            },
            {
              "id": "ice-cream-choose-your-own-6-pints",
              "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/110356/ice-cream-choose-your-own-6-pints.7e3199bc794ac9d43c69d8a632430dc8.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
              "name": "Museum of Ice Cream",
              "dsc": "Ice Cream - Choose Your Own 6 Pints",
              "price": 99,
              "rate": 5,
              "country": "New York, NY"
            }]

            localStorage.setItem("icecreamList", JSON.stringify(icecream) );


        let pizza = [
            {
              "id": "2-lou-malnatis-deep-dish-pizzas",
              "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/97981/2-lou-malnatis-deep-dish-pizzas.bf0fe065d251a9cca3925b269d443a27.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
              "name": "Lou Malnati's Pizza",
              "dsc": "2 Lou Malnati's Deep Dish Pizzas",
              "price": 67.99,
              "rate": 4,
              "country": "Chicago, IL"
            },
            {
              "id": "23699-choose-your-own-thin-crust-pizza-4-pack",
              "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/89781/choose-your-own-thin-crust-pizza-4-pack.b928a2008eab50c65dc87e59b5952190.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
              "name": "Bartolini’s",
              "dsc": "Choose Your Own Thin Crust Pizza - 4 Pack",
              "price": 139,
              "rate": 4,
              "country": "Chicago, IL"
            },
            {
              "id": "choose-your-own-new-haven-style-pizza-6-pack",
              "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131840/choose-your-own-new-haven-style-pizza-6-pack.ab82828afc6172cdd4017556c15e36dd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
              "name": "Zuppardi's Apizza",
              "dsc": "New Haven-Style Pizza - 6 Pack (Choose Your Own)",
              "price": 79,
              "rate": 4,
              "country": "West Haven, CT"
            },
            {
              "id": "6-lou-malnatis-deep-dish-pizzas",
              "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106829/6-lou-malnatis-deep-dish-pizzas.f59993181da5d295668c8a6fb856055e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
              "name": "Lou Malnati's Pizza",
              "dsc": "6 Lou Malnati's Deep Dish Pizzas",
              "price": 116.99,
              "rate": 4,
              "country": "Chicago, IL"
            },
            {
              "id": "wood-fired-pizzas-best-seller-4-pack",
              "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106027/wood-fired-pizzas-best-seller-4-pack.1653bb05922ba153ac178f8365d27f6d.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
              "name": "Pizzeria Bianco",
              "dsc": "Wood Fired Pizzas Best Seller - 4 Pack",
              "price": 129,
              "rate": 5,
              "country": "Phoenix, AZ"
            },
            {
              "id": "236991-choose-your-own-deep-dish-pizza-3-pack",
              "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133398/choose-your-own-deep-dish-pizza-3-pack.4111791511244a4946bb5c9ad2c17da9.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
              "name": "Bartolini’s",
              "dsc": "Choose Your Own Deep Dish Pizza - 3 Pack",
              "price": 139,
              "rate": 5,
              "country": "Chicago, IL"
            },
            {
              "id": "choose-your-own-detroit-style-pizza-3-pack",
              "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132973/detroit-style-pizza-choose-your-own-3-pack.6b6f4909ffd4066d5471e70eac5c3d89.jpeg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
              "name": "Emmy Squared",
              "dsc": "Detroit-Style Pizza - Choose Your Own 3 Pack",
              "price": 89,
              "rate": 4,
              "country": "Brooklyn, NY"
            }]

            localStorage.setItem("pizzaList" , JSON.stringify(pizza));

        
        let sandwich = [
            {
              "id": "the-gothamist-prosciutto-burrata-sandwich-kit-4-pack",
              "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/129490/the-gothamist-prosciutto-burrata-sandwich-kit-4-pack.4238b1e274d50b6e09d0b488aebe64bd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
              "name": "Alidoro",
              "dsc": "\"The Gothamist\" Prosciutto + Burrata Sandwich Kit - 4 Pack",
              "price": 99,
              "rate": 4,
              "country": "New York, NY"
            },
            {
              "id": "15504-original-muffuletta-sandwich-2-pack",
              "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/68615/original-muffuletta-sandwich-2-pack.ee9a97c691374b6866ea5b7083dd46d5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
              "name": "Central Grocery Muffulettas",
              "dsc": "Original Muffuletta Sandwich - 2-Pack (Serves 6-8)",
              "price": 109,
              "rate": 5,
              "country": "New Orleans, LA"
            },
            {
              "id": "the-bomb-sandwich-for-4",
              "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/85102/the-bomb-sandwich-for-4.78f5f65f8b94d6b3c81f70761b8d0f87.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
              "name": "Sal, Kris & Charlie's Deli",
              "dsc": "The Bomb Sandwich for 4",
              "price": 89,
              "rate": 5,
              "country": "Astoria, NY"
            },
            {
              "id": "15428-pittsburgh-party-pack",
              "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132404/primanti-bros-sandwich-pack-choose-your-meat.db41e477a72d6957e98f860204ce356c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
              "name": "Primanti Bros.",
              "dsc": "Primanti Bros Sandwich Pack - (Choose Your Meat)",
              "price": 89,
              "rate": 4,
              "country": "Pittsburgh, PA"
            },
            {
              "id": "pastrami-burnt-end-sandwich-kit",
              "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/101923/ugly-buns-burnt-end-sandwich-kit-4-pack.cadca40421c5a2b09d46673a8e2a8d37.jpeg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
              "name": "Ugly Drum",
              "dsc": "Ugly Buns \"Burnt End\" Sandwich Kit - 6 Pack",
              "price": 109,
              "rate": 5,
              "country": "Los Angeles, CA"
            },
            {
              "id": "favorite-sloppy-joe-sandwich",
              "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/67768/new-jersey-sloppy-joe-sandwich-feeds-3.b866e4c84e09ad65cb8c6b9f4949ec7d.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
              "name": "Town Hall Deli",
              "dsc": "Favorite Sloppy Joe Sandwich",
              "price": 79,
              "rate": 5,
              "country": "South Orange, NJ"
            },
            {
              "id": "sandwich-best-sellers-4-pack",
              "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133197/italian-sandwich-kit-best-sellers-4-pack.746c4cdd37eb5855178bcb6492fd66f6.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
              "name": "Alidoro",
              "dsc": "Italian Sandwich Kit Best Sellers - 4 Pack",
              "price": 99,
              "rate": 5,
              "country": "New York, NY"
            }]

            localStorage.setItem("sandwichList" , JSON.stringify(sandwich));

        let sausage = [
            {
              "id": "original-texas-smoked-sausage",
              "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/101114/original-texas-smoked-sausage.a298e25643030c5500e225c7996fb153.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
              "name": "Terry Black's Barbecue",
              "dsc": "Original Texas Smoked Sausage",
              "price": 89,
              "rate": 4,
              "country": "Austin, TX"
            },
            {
              "id": "fresh-ribeye-sausage",
              "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/105558/fresh-ribeye-sausage-2-lbs.9e0c22fd028026e78c079c5ef64d9579.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
              "name": "Hebert's Specialty Meats",
              "dsc": "Fresh Ribeye Sausage",
              "price": 59,
              "rate": 5,
              "country": "Maurice, LA"
            },
            {
              "id": "001-5-pound-sausage-sampler",
              "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/66440/sausage-sampler-for-10.0ca584a30121a79d612254a9f7c10bb4.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
              "name": "Esposito Sausage",
              "dsc": "Sausage Sampler For 10",
              "price": 69,
              "rate": 4,
              "country": "New York, NY"
            },
            {
              "id": "6-sausage-sampler-pack",
              "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/79253/sausage-sampler-pack-serves-10-12.e2d63273c29b923ca4ad80cf63669b12.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
              "name": "Southside Market & Barbeque",
              "dsc": "Sausage Sampler Pack - Serves 10-12",
              "price": 89,
              "rate": 5,
              "country": "Elgin, TX"
            },
            {
              "id": "20154-bacon-wrapped-cheddar-jalapeno-sausage-slammers",
              "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131365/bacon-wrapped-cheddar-jalapeno-sausage-slammers.1aad356ed0b86ebefde0c645520fddb3.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
              "name": "Southside Market & Barbeque",
              "dsc": "Bacon Wrapped Cheddar Jalapeño Sausage Slammers",
              "price": 79,
              "rate": 4,
              "country": "Elgin, TX"
            },
            {
              "id": "jalapeno-and-cheddar-texas-smoked-sausage",
              "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/101125/jalapeno-and-cheddar-texas-smoked-sausage.dc663b24836b39e0d57df946f529c90b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
              "name": "Terry Black's Barbecue",
              "dsc": "Jalapeno and Cheddar Texas Smoked Sausage",
              "price": 89,
              "rate": 4,
              "country": "Austin, TX"
            },
            {
              "id": "toulouse-sausage-coil-3-pack",
              "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/117565/toulouse-sausage-coil-3-pack.ebe77727730b4f8fd7e0a888cb6ebe02.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
              "name": "Fabrique Délices",
              "dsc": "Toulouse Sausage Coil - 3 Pack",
              "price": 89,
              "rate": 5,
              "country": "Hayward, CA"
            },
            {
              "id": "hog-heaven",
              "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/79576/hog-heaven-pulled-pork-sausage-links.5012c36f6f049c131b04345c5326e4d3.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
              "name": "Joe's KC BBQ",
              "dsc": "Hog Heaven - Pulled Pork + Sausage Links",
              "price": 69.99,
              "rate": 5,
              "country": "Kansas City, KS"
            }]

            localStorage.setItem("sausageList" , JSON.stringify(sausage));
    }