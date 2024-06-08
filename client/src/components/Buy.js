import { React, useContext, useEffect } from 'react'
import BookItem from './BookItem'
import { useNavigate } from 'react-router-dom';
import bookContext from '../context/books/bookContext';
const Buy = (props) => {
  const { showAlert } = props;
  const context = useContext(bookContext);
  const { books, getBooks } = context;
  const navigate = useNavigate();

  
  useEffect(() => {
    if (localStorage.getItem('token')) {

      getBooks()
    }
    else {
      navigate("/login")

    }
    // eslint-disable-next-line  

  }, [])
  return (
    

    
    <div class="page-content">
    
        <h2>Books</h2>
        <div className="container mx-2">
    {console.log(books)}
          {books.length === 0 && "No Books available to Buy"}

        </div>
        {localStorage.getItem("token") && books.map((book) => {
          // {console.log(note.id,note)}

          return <BookItem key={book._id} books={book} showAlert={showAlert} />
        })}

      </div>

    
  )
}

export default Buy
