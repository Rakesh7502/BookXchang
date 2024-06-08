import { React, useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import bookContext from '../context/books/bookContext'
import confetti from 'confetti-js';
import confirm_order from './confirm_order.gif';
// import java2 from './java2.webp'
import BookItem from './BookItem';
import { useNavigate } from 'react-router-dom';
const Product_details = (props) => {
    const { id } = useParams()
    const navigate = useNavigate();
    
    const context = useContext(bookContext)
    const { book_details, sendEmailToSeller, viewBook } = context
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchBookDetails = async () => {
            if (localStorage.getItem('token')) {
                console.log(id);
                await viewBook(id);
                setIsLoading(false);
            } else {
                navigate('/login');
            }
        };
        fetchBookDetails();
        // eslint-disable-next-line
    }, [id, viewBook, navigate]);

    // console.log(book_details)
    const [buyerDetails, setBuyerDetails] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    // viewBook(props.id)

    // console.log("produc")
    // console.log(book_details)
    const [isConfirmationModalOpen, setConfirmationModalOpen] = useState(false);
    const [isOrderConfirmed, setOrderConfirmed] = useState(false);

    const handleBuyNow = () => {
        // console.log(book_details._id);
        // console.log("produc")

        // console.log(book_details)
        setConfirmationModalOpen(true);
    };

    const confirmOrder = () => {
        // Simulate order confirmation, replace with actual API call
        setTimeout(() => {
            setConfirmationModalOpen(false);
            setOrderConfirmed(true);

            // sendNotificationToSeller(book_details._id,book_details.seller_gmail,book_details.title); // Call function to send notification to seller
            sendNotificationToSeller(book_details, buyerDetails)
            // console.log(book_details._id,book_details.gmail);
            showConfetti(); // Show confetti animation
            setTimeout(() => {
                setOrderConfirmed(false); // Hide confirmation message after 5 seconds
            }, 5000);
        }, 2000); // Simulating 2 seconds delay for confirmation
    };

    const cancelOrder = () => {
        setConfirmationModalOpen(false);
    };
    const handleInputChange = (e) => {
        setBuyerDetails({ ...buyerDetails, [e.target.name]: e.target.value });
    };

    const sendNotificationToSeller = (book_details, buyerDetails) => {
        // Simulate sending notification to seller, replace with actual API call
        sendEmailToSeller(book_details, buyerDetails);

        // console.log('Notification sent to seller');
        // console.log(book_details)

    };

    const showConfetti = () => {
        // Show confetti animation
        // console.log('Confetti animation triggered');

        // You can use a library like confetti-js to add confetti animation
        // Example usage: https://www.npmjs.com/package/confetti-js
    };
    const isFormValid = () => {
        // Check if all required fields have values
        return (
          buyerDetails.name !== "" &&
          buyerDetails.email !== "" &&
          buyerDetails.phone !== "" &&
          buyerDetails.message !== ""
        );
      };
      
    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div class="page-content">
                <div class="product-page">
                    <div class="product-desc">
                        <div class="product-desc-image">
                            {console.log(book_details)}
                            <img src={require(`../images/${book_details.image}`)} width="280" height="320" />
                        </div>
                        <div class="product-details-info">
                            <h1>{book_details.title}</h1>
                            <h2 style={{ "color": "green" }}></h2>
                            <div class="product-desc-details">
                                <h3>Product Details</h3>
                                {/* <p class="product-desc-p"></p>
                                <p class="product-desc-p"></p> */}
                                <p class="product-desc-p"><b>Author:{book_details.author}</b></p>
                                <p class="product-desc-p"><b>Category:{book_details.category}</b></p>
                                <p class="product-desc-p"><b>Seller:{book_details.seller}</b></p>
                            </div>
                            <div class="product-details-desc">
                                <h3>Product Description</h3>
                                <p class="product-desc-p">
                                    {book_details.description}

                                </p>
                            </div>
                        </div>
                        <div>
                            <a href="/buy" class="btn-back">Back</a>
                        </div>
                    </div>
                    {/* Confirmation Modal */}
                    {isConfirmationModalOpen && (
                        <div className="modal">
                            <div className="modal-content">
                                <h3>Enter your details to confirm the order</h3>
                                <form>
                                    <label>
                                        Name:
                                        <input type="text" name="name" value={buyerDetails.name} onChange={handleInputChange} required />
                                    </label>
                                    <label>
                                        Email:
                                        <input type="email" name="email" value={buyerDetails.email} onChange={handleInputChange} required />
                                    </label>
                                    <label>
                                        Phone:
                                        <input type="text" name="phone" value={buyerDetails.phone} onChange={handleInputChange} required />
                                    </label>
                                    <label>
                                        Message:
                                        <textarea name="message" value={buyerDetails.message} onChange={handleInputChange} required></textarea>
                                    </label>
                                    <button type="button" onClick={confirmOrder} disabled={!isFormValid()}>
                                        Confirm
                                    </button>

                                    <button type="button" onClick={cancelOrder}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    )}

                    {/* Order Confirmation Message */}
                    {isOrderConfirmed && (
                        <div className="order-confirmation">
                            <p>Your order has been confirmed!</p>
                            <p>An email notification has been sent to the seller.</p>
                            <img class="confirm-gif" src={confirm_order} alt="Hurray GIF" height="120" width="120" />
                        </div>
                    )}

                    {/* Disclaimer */}
                    <div className="disclaimer">
                        <p>Disclaimer: Our site is a mediator between buyers and sellers. We do not handle product delivery or pricing negotiations. Buyers and sellers must communicate via email and WhatsApp to finalize the transaction.</p>
                    </div>
                    <div className="btn mx-2">
                        <button onClick={handleBuyNow} className="btn btn-primary">Buy Now</button>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product_details

