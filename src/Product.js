import React from 'react'
import "./Product.css"
function Product({id, title,image,price ,rating}) {
    return (
        <div className="Product">

        <div className="Product_div">
        <p>{title}</p>
        <p className="product_price"></p>
        <small>$</small>
        <strong>{price}</strong>
       
            <div className="Product_rating">
            {
            Array(rating).fill().map(function(e){
                return <span>&#11088;</span>
            })
            }
            

            </div>
             <img src={image} />
             <button className="button_product">Add to Basket</button>
        </div>
        </div>
    )
}

export default Product
