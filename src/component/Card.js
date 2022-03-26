import React, { useState } from "react";
import Model from "./Model";

const Card = ({book}) => {
  console.log(book);
  const [show,setshow]=useState(false);
  const [bookItem,setItem]=useState();

  return (
    <>
      {book.map((item) => {
          let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
          let amount=item.saleInfo.listPrice && item.saleInfo.listPrice.amount;

          if(thumbnail!=undefined && amount!=undefined)
          {
        return (
            <>
          <div className="card" onClick={()=>{setshow(true);setItem(item)}}>
            <img
              src={thumbnail}
              alt="..."
            ></img>
            <div className="bottom">
              <h3 className="title">{item.volumeInfo.title}</h3>
              <p className="amount">&#8377; {amount}</p>
            </div>
          </div>
          <Model show={show} item={bookItem} onClose={()=>setshow(false)}/>
          </>
        );
          }
      })}
    </>
  );
};

export default Card;
