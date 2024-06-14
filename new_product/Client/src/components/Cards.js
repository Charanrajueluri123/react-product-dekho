import React from "react";
import '../css/cards.css'
const Cards = ({item , handleClick}) =>{
    const {name,rating,price,img1}=item;
    return(
        <div className="cards">
            <div className="image_box">
                <img src={img1} alt="Image"/>            
            </div>
            <div className="details">
                <p>{name}</p>
                <p>{rating}</p>
                <p>Price - {price}Rs</p>
                <button onClick={()=>handleClick(item)}>Add to Cart</button>
            </div>
        </div>
    )
}

export default Cards;