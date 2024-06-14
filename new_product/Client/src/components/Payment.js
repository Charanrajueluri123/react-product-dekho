import React, { useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import '../css/payment.css';
import card_img from '../images/card_img.png';

const Payment = ({ isLoggedIn }) => {
    const { cost } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login', { state: { from: location } });
        }
    }, [isLoggedIn, navigate, location]);

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/paid');
    };

    return (
        <div>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col">
                            <h3 className="title" style={{ color: "whitesmoke" }}>Billing Address</h3>
                            <div className="inputBox">
                                <span>Full Name :</span>
                                <input type="text" placeholder="John Doe" />
                            </div>
                            <div className="inputBox">
                                <span>Email :</span>
                                <input type="text" placeholder="example@example.com" />
                            </div>
                            <div className="inputBox">
                                <span>Address :</span>
                                <input type="text" placeholder="room - street - locality" />
                            </div>
                            <div className="inputBox">
                                <span>City :</span>
                                <input type="text" placeholder="Mumbai" />
                            </div>
                            <div className="inputBox">
                                <span>State :</span>
                                <input type="text" placeholder="India" />
                            </div>
                            <div className="inputBox">
                                <span>Zip code :</span>
                                <input type="text" placeholder="123 456" />
                            </div>
                        </div>
                        <div className="col">
                            <h3 className="title" style={{ color: "whitesmoke" }}>Payment Details</h3>
                            <div className="inputBox">
                                <span>Cards accepted :</span>
                                <img src={card_img} alt="Cards" className='img-tag' />
                            </div>
                            <div className="inputBox">
                                <span>Name on card :</span>
                                <input type="text" placeholder="John Doe" />
                            </div>
                            <div className="inputBox">
                                <span>Credit Card Number :</span>
                                <input type="number" placeholder="1111-2222-3333-4444" />
                            </div>
                            <div className="inputBox">
                                <span>Exp month :</span>
                                <input type="text" placeholder="January" />
                            </div>
                            <div className="inputBox">
                                <span>Exp year:</span>
                                <input type="number" placeholder="2022" />
                            </div>
                            <div className="inputBox">
                                <span>CVV :</span>
                                <input type="text" placeholder="123" />
                            </div>
                        </div>
                        <div className="amountBox">
                            <span>Amount :</span>
                            <input type="number" value={cost} readOnly />
                        </div>
                    </div>

                    <input type="submit" value="Proceed to Checkout" className="submit-btn" />
                </form>
            </div>
        </div>
    );
};

export default Payment;
