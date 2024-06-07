import React, { useState,useContext,useEffect } from 'react';
import axios from 'axios';
// import './SellPage.css';  // Custom CSS file for styling
import bookContext from '../context/books/bookContext';
import { useNavigate } from 'react-router-dom';
import UserBooks from './UserBooks';
const Sell = () => {
 
  const context = useContext(bookContext);
  const { books, getUserBooks} = context;
  const navigate=useNavigate();
 
  const [showAlert, setShowAlert] = useState(false);
 

  const [errorMessage, setErrorMessage] = useState('');
  const {addBook}=context;
  const [book,setBook]=useState({title:"",description:"",image:null,author:" ",price:'',category:'',seller:'',seller_contact:'',seller_gmail:'',image:null}) 
  // const [bookImage,setBookImage]=useState()
  useEffect(() => {
    if (localStorage.getItem('token')) {
      getUserBooks()
        .catch((error) => {
          console.error('Failed to fetch user books:', error);
          setErrorMessage('Failed to fetch user books.');
        });
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formPayload = new FormData();
      for (const key in book) {
        formPayload.append(key, book[key]);
      }
      await addBook(formPayload);
      setBook({
        title: "",
        description: "",
        author: " ",
        price: '',
        category: '',
        seller: '',
        seller_contact: '',
        seller_gmail: '',
        image: null
      });
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 4000);
    } catch (error) {
      console.error('Failed to add book:', error);
      setErrorMessage('Failed to add book.');
    }
  };
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({
      ...book,
      [name]: value,
    });
  };
 
  const onInputChange = (e) => {
    // setBookImage(e.target.files[0]);
    // console.log(e.target.files[0])
    setBook({
      ...book,
      image: e.target.files[0],
    });
  };


  

  return (

    <div className="sell-page">
      {showAlert && <div className="alert">Book has been added!</div>}
      {errorMessage && <div className="error">{errorMessage}</div>}
      <header>
        <h1>Sell Your Books</h1>
      </header>
      <form onSubmit={handleSubmit} className="sell-form">
        <label>
          Title:
          <input type="text" name="title" value={book.title} onChange={handleChange} required />
        </label>
        <label>
          Author:
          <input type="text" name="author" value={book.author} onChange={handleChange} required />
        </label>
        <label>
          Description:
          <textarea name="description" value={book.description} onChange={handleChange} required />
        </label>
        <label>
          Price:
          <input type="number" name="price" value={book.price} onChange={handleChange} required />
        </label>
        <label>
          Category:
          <input type="text" name="category" value={book.category} onChange={handleChange} required />
        </label>
        <label>
          Seller Name:
          <input type="text" name="seller" value={book.seller} onChange={handleChange} required />
        </label>
        <label>
          Seller Contact:
          <input type="phonenumber" name="seller_contact" value={book.seller_contact} onChange={handleChange} required />
        </label>
        <label>
          Seller Gmail:
          <input type="mail" name="seller_gmail" value={book.seller_gmail} onChange={handleChange} required />
        </label>
        <label>
          Image :
          <input type="file" accept="image/*" name="image"  onChange={onInputChange} required />
        </label>
        <button type="submit">List Book</button>
      </form>
      <section className="book-list">
        <h2>Your Listed Books</h2>
        {/* <img width={100} height={100} src={require(`../images/demo.jpg`)} /> */}
        <div className="books-container">
    
          {localStorage.getItem("token")&& books &&books.map((ele) => {
          // {console.log(note.id,note)}
        
          return <UserBooks key={ele._id} book={ele} id={ele._id} category={ele.category} description={ele.description} title={ele.title} author={ele.author} imageUrl={ele.image}/>
        })}
        </div>
      </section>
    </div>
  );
};

export default Sell;


