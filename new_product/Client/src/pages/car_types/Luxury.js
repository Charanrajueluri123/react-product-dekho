import React from "react";
import electric1 from '../../images/electric1.png';
import { useNavigate } from "react-router-dom";
import '../../css/electric.css';
import list from '../../components/data';

const Luxury = () =>{
    const navigate = useNavigate();

    const handleCardClick = (item) => {
        navigate("/car-details", { state: { item } });
    };

    return (
        <div>
            <div className="electric-root">
                <div className="electric-css">
                    <img src={electric1} className="img" alt="Electric Vehicles Promotion" />
                </div>
                <div className="heading">
                    <h1>80% off on Electric Vehicles</h1>
                </div>
            </div>
            <div className="card-container">
                {
                    list.map((item) => {
                        const { img1, name, price } = item;
                        return (
                            <Data
                                key={name}
                                img1={img1}
                                name={name}
                                price={price}
                                onClick={() => handleCardClick(item)}
                            />
                        );
                    })
                }
            </div>
        </div>
    )
}


const Data = ({ img1, name, price, onClick }) => {
    return (
        <div className="card" onClick={onClick}>
            <img src={img1} alt={name} className="card-image" />
            <div className="card-text">
                <h3>{name}</h3>
                <p>From ₹{price}</p>
            </div>
        </div>
    );
}

export default Luxury;   