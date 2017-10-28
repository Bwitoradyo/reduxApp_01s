"use strict"
import axios from "axios";

//GET BOOKS
export const getBooks = () => {
  return{
    type:"GET_BOOKS"
  }
}

export const deleteBooks = (_id) => {
  return {
   type: "DELETE_BOOK", 
   payload: _id 
  }
}

export const updateBooks = (book) => {
  return {
    type: "UPDATE_BOOK",
    payload: book
  }
}

export const postBooks = (book) =>{
  return (dispatch) => {
    axios.post("/books", book)
      .then((response) => {
        dispatch({type:"POST_BOOKS", payload:response.data})
      })
      .catch((err) => {
        dispatch({type:"POST_BOOKS_REJECTED", payload:"there was an error while posting a new book"})
      })
  }
}
