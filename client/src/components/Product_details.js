import { React, useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import bookContext from '../context/books/bookContext'
import confetti from 'confetti-js'; 
import confirm_order from './confirm_order.gif';
import java2 from './java2.webp'
import BookItem from './BookItem';
const Product_details = (props) => {


    const context = useContext(bookContext)
    const { book_details, sendEmailToSeller} = context
    // console.log("produc")
    // console.log(book_details)
    const [isConfirmationModalOpen, setConfirmationModalOpen] = useState(false);
    const [isOrderConfirmed, setOrderConfirmed] = useState(false);

    const handleBuyNow = () => {
        // console.log(book_details._id);

        setConfirmationModalOpen(true);
    };

    const confirmOrder = () => {
        // Simulate order confirmation, replace with actual API call
        setTimeout(() => {
            setConfirmationModalOpen(false);
            setOrderConfirmed(true);

            sendNotificationToSeller(book_details._id,book_details.seller_gmail,book_details.title); // Call function to send notification to seller
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

    const sendNotificationToSeller = (id,gmail,book_name) => {
        // Simulate sending notification to seller, replace with actual API call
        sendEmailToSeller(id,gmail,book_name);

        console.log('Notification sent to seller');
        
    };

    const showConfetti = () => {
        // Show confetti animation
        // console.log('Confetti animation triggered');
        
        // You can use a library like confetti-js to add confetti animation
        // Example usage: https://www.npmjs.com/package/confetti-js
    };
    return (
        <div>
            <div class="page-content">
                <div class="product-page">
                    <div class="product-desc">
                        <div class="product-desc-image">
                            <img src={java2} width="280" height="320" />
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
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia tenetur ipsa quidem, molestias maiores maxime laboriosam exercitationem enim, labore nostrum reiciendis? moora tempore neque, eveniet veniam nam fuga, cupiditate ad similique non quod, alias placeat iusto aspernatur ullam deserunt! Ab eaque perspiciatis hic modi. Reiciendis velit vero dignissimos blanditiis, eaque ad enim eveniet cumque quis ipsum placeat. Inventore dolores a
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
                                <p>Do you want to confirm the order?</p>
                                <button onClick={confirmOrder}>Confirm</button>
                                <button onClick={cancelOrder}>Cancel</button>
                            </div>
                        </div>
                    )}

                    {/* Order Confirmation Message */}
                    {isOrderConfirmed && (
                        <div className="order-confirmation">
                            <p>Your order has been confirmed!</p>
                            <p>An email notification has been sent to the seller.</p>
                            <img class="confirm-gif" src={confirm_order} alt="Hurray GIF"  height="120" width="120"/>
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

