import React from 'react'
import "./Home.css"
import Product from "./Product.js"
function Home() {
    return (
        <div className="Home">
           <img alt="Amazon Banner" className="Home_img" src="https://wallpaperset.com/w/full/9/e/e/31949.jpg" />
           <div className="Products_Time">
           <div className="Home_row"> 
           <Product id="11123" title="a dick soccer shoes for your broke ass nigga" price={100.84} rating={2} image="https://images-na.ssl-images-amazon.com/images/I/81qkLvA%2B20L._AC_UL270_SR270,270_.jpg"/>
           </div>
               <div className="Home_row"> 
           <Product id="12234544" title="a dick soccer shoes for your broke ass nigga" price={123.54} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/61n86i1sJ%2BL._AC_UL160_SR160,160_.jpg"/>
           </div>
               <div className="Home_row"> 
           <Product id="1256756234" title="a dick soccer shoes for your broke ass nigga" price={223.54} rating={4} image="https://images-na.ssl-images-amazon.com/images/I/61bMqeJy8NL._AC_UL270_SR270,270_.jpg"/>
           </div>
               <div className="Home_row"> 
           <Product id="122378894" title="a dick soccer shoes for your broke ass nigga" price={174.4} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/71zKmTHcHUL._AC_UL270_SR270,270_.jpg"/>
           </div>
               <div className="Home_row"> 
           <Product id="122389004" title="a dick soccer shoes for your broke ass nigga" price={185.5} rating={4} image="https://images-na.ssl-images-amazon.com/images/I/81zN34Whk2L._AC_UL270_SR270,270_.jpg"/>
           </div>
               <div className="Home_row"> 
           <Product id="12238954" title="a dick soccer shoes for your broke ass nigga" price={512.41} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/510AKYaMqLL._AC_UL160_SR160,160_.jpg"/>
           </div>
           </div>
               <div className="Products_Time">
           <div className="Home_row"> 
           <Product id="122332424" title="a dick soccer shoes for your broke ass nigga" price={414.3} rating={3} image="https://images-na.ssl-images-amazon.com/images/I/71ANOkc%2BOdL._AC_UL160_SR160,160_.jpg"/>
           </div>
               <div className="Home_row"> 
           <Product id="12230974" title="a dick soccer shoes for your broke ass nigga" price={322.3} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/61pb9g1xNjL._AC_UL160_SR160,160_.jpg"/>
           </div>
               <div className="Home_row"> 
           <Product id="122347686" title="a dick soccer shoes for your broke ass nigga" price={82.3} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/61WJhWjZBzL._AC_UL160_SR160,160_.jpg"/>
           </div>
               <div className="Home_row"> 
           <Product id="12237864" title="a dick soccer shoes for your broke ass nigga" price={422.3} rating={4} image="https://images-na.ssl-images-amazon.com/images/I/618xv8u1b2L._AC_UL160_SR160,160_.jpg"/>
           </div>
               <div className="Home_row"> 
           <Product id="122333454" title="a dick soccer shoes for your broke ass nigga" price={622.3} rating={4} image="https://images-na.ssl-images-amazon.com/images/I/515c%2BVe5A-L._AC_UL160_SR160,160_.jpg"/>
           </div>
               <div className="Home_row"> 
           <Product id="12234" title="a dick soccer shoes for your broke ass nigga" price={122.4} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/51irfr7WPrL._AC_UL160_SR160,160_.jpg"/>
           </div>
           </div>
           
    </div>)
}

export default Home
