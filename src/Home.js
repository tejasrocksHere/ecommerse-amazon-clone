import React from "react";
import "./Home.css";
import Product from "./Products";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
          
        </div>
        <div className="home__row">
         
<Product id='3454' image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61XO4bORHUL._AC_UY218_.jpg"  price={14324} rating={5} title="Apple iPhone 14 Pro (256 GB) - Space Black"/>
<Product id='25454' image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61VuVU94RnL._AC_UY218_.jpg" price={4532.5} rating={4} title="Apple iPhone 13 (128GB) - Midnight" />


        </div>

        <div className="home__row">
        <Product id='83454' image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/711wsjBtWeL._AC_UY218_.jpg" price={8643.5} rating={4} title="Apple iPhone 12 (64GB) - White" />
<Product id='3454' image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71xlN-a7s0L._AC_UY218_.jpg" price={74.5} rating={5} title="The Book-harry potter murder myst" />
<Product id='3454' image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61o6pfHHU-L._AC_UY218_.jpg" price={84.5} rating={5} title="A Game of Thrones: Book 1 (A Song of Ice and Fire)" /> 


</div>
   

   <div className="home__row">
   <Product id='63445' image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71eUwDk8z+L._AC_UL400_.jpg" price={34.5} rating={5} title="Ts-shirts for kids" />
    <Product id='73445' image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/4161s4qxWiL._AC_UL400_.jpg" price={6.5} rating={2} title="Offo™ Marvel Avengers Action Figure [15 cm] for Home Decors, Office Desk and Study Table, (Loki)" />
    
</div>

<div className="home__row">

<Product id='83445' image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81UnrtXrTML._AC_UL400_.jpg" price={44.5} rating={5} title="MARVEL Avengers:Endgame Red Infinity Gauntlet Electronic Fist Roleplay Toy, Lights, Sounds,Kids Ages" />
    <Product id='3454' image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71xlN-a7s0L._AC_UY218_.jpg" price={74.5} rating={5} title="The Book-harry potter murder myst" />
<Product id='3454' image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61o6pfHHU-L._AC_UY218_.jpg" price={84.5} rating={5} title="A Game of Thrones: Book 1 (A Song of Ice and Fire)
" />

</div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
        
      </div>
    </div>
  );
}

export default Home;