import React, { useState } from 'react'
import { FaSearchengin } from "react-icons/fa";
import Card from './Card';
import axios from 'axios';

const Main = () => {
    const [search,setSearch]=useState("");
    const [bookData,setData]=useState([]);
    const searchBook=(evt)=>{
        if(evt.key==="Enter")
        {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyACDE-8NIGk2MFddeTmDcW04TbN_rqNt50'+'&maxResults=40')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        }
    }
  return (
    <>
      <div className='header'>
          <div className='row1'>
             <h1>A room without books is like <br/> a body without a soul.</h1>
          </div>
          <div className='row2'>
              <h2>Find your books</h2>
              <div className='search'>
                  <input type='text' placeholder='Enter your book name' value={search} onChange={e=>setSearch(e.target.value)} onKeyPress={searchBook}/>
                  <button><FaSearchengin/></button>
              </div>
              <img src='https://bookbox.com/wp-content/themes/book-box/book-box-assets/images/fold-signup-01.png' alt='...'></img>
          </div>
      </div>
      <div className='container'>
          {
          <Card book={bookData}/>
          }
      </div>
    </>
  )
}

export default Main