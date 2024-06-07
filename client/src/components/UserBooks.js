import React, { useContext } from 'react'

import bookContext from '../context/books/bookContext';
const UserBooks = (props) => {
    let { description, title, imageUrl, author, book ,category,id} = props;
    const context = useContext(bookContext);
    const { deleteBook } = context;

    // console.log(imageUrl)


    return (
        <>

            <div className='my-3'>
                <div className="card" >
                    <div style={{ display: "flex", justifyContent: "flex-end", position: "absolute", top: "0", right: "0" }}>
                        
                        <span class="  badge rounded-pill bg-danger" >
                            {category}

                        </span>
                    </div>
                    {/* {console.log(imageUrl)} */}
                    <img src={!imageUrl ? "https://media.cnn.com/api/v1/images/stellar/prod/231231063130-01-kharkiv-ukraine-attack-1231.jpg?c=16x9&q=w_800,c_fill" : require(`../images/${imageUrl}`)} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <div className="d-flex align-items-center">

                            <h5 className="card-title">{title}


                            </h5>
                            <i className="fa-regular fa-trash-can mx-2"
                                onClick={() => {
                                   
                                    deleteBook(book._id);
                                   
                                }}></i>
                        </div>



                        <p className="card-text">{description.slice(0,100)}....</p>
                        <p className="card-text"><small class="text-muted">By {!author ? "Unknown" : author}  </small></p>
                        <a rel="noreferrer" href={`http://localhost:3000/buy/viewBookDetails/${id}`}  className="btn btn-dark">See More</a>
                    </div>
                </div>
            </div>
        </>
    )

}

export default UserBooks

