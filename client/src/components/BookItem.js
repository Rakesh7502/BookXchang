import { React, useContext,useEffect  } from 'react'
import bookContext from '../context/books/bookContext';
import { useNavigate} from 'react-router-dom';
// import java2 from './java2.webp'
const BookItem = (props) => {
    const context = useContext(bookContext);
    

    const {books}=props;                                                                                    

    
    const { viewBook, getBooks } = context;

    const navigate = useNavigate();
    // useEffect(() => {
    //     if (localStorage.getItem('token')) {

    //         getBooks()
    //         viewBook()
    //     }
    //     else {
    //         navigate("/login")

    //     }
    //     // eslint-disable-next-line  

    // }, [])
    const viewDetails = (id) => {
      
        viewBook(id)
        
        navigate(`/buy/viewBookDetails/${id}`)
     


    }
    return (




        <div className="products-list">
            <div className="products-detail">
                <div className="product-image">
                    // {/* {console.log(books.image)} */}
        {console.log(books)}
                    <img src={require(`../images/${books.image}`)} height="120" width="120">

                    </img>
                </div>
                <div className="product-specs">
                    <h3>{books.title}</h3>
                    {/* <p><span>Book Name:</span>Name</p> */}
                    <p><span>author:</span>{books.author}</p>

                    <p><span>description:</span>{books.description.slice(0,50)}...</p>
                    <p><span>category:</span>{books.category}</p>

                </div>
            </div>
            <div className="products-detail">
                <div className="product-info">
                    <h4>Price:{books.price}</h4>
                </div>
                {/* <div className="product-info">
                            <h4>Price:123</h4>
                        </div> */}
                <div className="product-info">
                    {/* <button className="btn btn-primary">Buy Now</button> */}
                    <button onClick={() => { viewDetails(books._id) }} className="btn btn-secondary">show Details</button>

                </div>
            </div>

        </div>



    )
}

export default BookItem
