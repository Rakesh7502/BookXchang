import { useState } from "react";
import bookContext from "./bookContext";

const BookState = (props) => {
    const host = "https://book-xchange.vercel.app/"
    const BooksInitial = [];
    const prod_info = [];
    const [books, setBooks] = useState(BooksInitial)
    const [book_details, setBookDetails] = useState(prod_info)
    //get all books 
    const getBooks = async () => {
        //TODO:API Call
        if (localStorage.getItem('token')) {
            const response = await fetch(`${host}/api/books/fetchallbooks`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token')

                },


            });
            const json = await response.json();
           
           setBooks(json);
        }



    }
        //get  books Details 
    const viewBook = async (id) => {
            //TODO:API Call
            if (localStorage.getItem('token')) {
                const response = await fetch(`${host}/api/books/viewBookDetails/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'auth-token': localStorage.getItem('token')
    
                    },
    
    
                });
                const json = await response.json();
             
               setBookDetails(json);
              
            }
    
    
    
    }
    //send notification to seller
    const sendEmailToSeller=async(id,sellerEmail,bookTitle)=>{
        if (localStorage.getItem('token')) {
            const response = await fetch(`${host}/api/books/viewBookDetails/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token')

                },
                body: JSON.stringify({sellerEmail,bookTitle })


            });
            const json = await response.json();
            // console.log(sellerEmail,bookTitle)
           setBookDetails(json);
          
        }

    }
    
    
 
  

  
    return (
        <bookContext.Provider value={{ books,book_details, getBooks,viewBook ,sendEmailToSeller}} >
            {props.children}
        </bookContext.Provider>

    )
}
export default BookState
