import { useState } from "react";
import bookContext from "./bookContext";

const BookState = (props) => {
    const host = "https://book-xchange-client.vercel.app"
    // const host = "http://localhost:9000"
    const BooksInitial = [];
    const prod_info = [];
    
    const [books, setBooks] = useState(BooksInitial)
    const [book_details, setBookDetails] = useState(prod_info)
    //get all books 
const getBooks = async () => {
    // Check if token exists
    const token = localStorage.getItem('token');
    if (token) {
        try {
            const response = await fetch(`${host}/api/books/fetchallbooks`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                }
            });

            // Check if response is ok
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            // Parse JSON response
            const json = await response.json();
            setBooks(json);
        } catch (error) {
            console.error('Failed to fetch user books:', error);
        }
    } else {
        console.error('No auth token found in local storage');
    }
};

    //fetch user books
    const getUserBooks = async () => {
        //TODO:API Call
        if (localStorage.getItem('token')) {
            const response = await fetch(`${host}/api/books/fetchuserbooks`, {
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
    const sendEmailToSeller=async(book_details,buyerDetails)=>{
        if (localStorage.getItem('token')) {
            const response = await fetch(`${host}/api/books/viewBookDetails/${book_details._id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token')

                },
                body: JSON.stringify({book_details,buyerDetails })


            });
            const json = await response.json();
            // console.log(sellerEmail,bookTitle)
        //    setBookDetails(json);
          
        }

    }
    const addBook = async (formPayload) => {
        //TODO:API Call
        // console.log("addddd")
        // console.log(image)
        const response = await fetch(`${host}/api/books/addbook`, {
            method: 'POST',
            headers: {
                
              
                
                'auth-token': localStorage.getItem('token')

            },
            body: formPayload

        });
        const json = await response.json();
        // console.log(json);
        // console.log("enrered add book")
        
        // setBooks(books.concat(json));


        // setNotes(json)


    }
    //delete a note
    const deleteBook = async (id) => {
            //TODO: api
    
            // console.log("in background")
            // console.log(id)
            const response = await fetch(`${host}/api/books/deletenote/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                   
                    'auth-token': localStorage.getItem('token')
    
                },
    
    
            });
            const json = await response.json();
            // console.log(json)
            const newBook = books.filter((book) => { return book._id !== id })
            setBooks(newBook)
    
        }
    
    
 
  

  
    return (
        <bookContext.Provider value={{ books,book_details,deleteBook,addBook, getBooks,viewBook ,sendEmailToSeller,getUserBooks }} >
            {props.children}
        </bookContext.Provider>

    )
}
export default BookState
