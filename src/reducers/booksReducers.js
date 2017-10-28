"use strict"

//DEFINE REDUCER
export const booksReducers = (state={books:[
    {
      _id: 1,
      title: "First book title",
      description: "First book description",
      price: 33.33
    },{
      _id: 2,
      title: "Second book title",
      description: "Second book description",
      price: 50
    },{
      _id: 3,
      title: "Third book title",
      description: "Third book description",
      price: 11
      
    }  
     
]}, action) => {
  switch(action.type){
    case "GET_BOOKS":
      return{...state, books:[...state.books]}
      break;

    case "POST_BOOKS":
      return {books:[...state.books, ...action.payload]}
      break;

    case "DELETE_BOOK":
      const currentBooksToDelete = [...state.books]
      const indexToDelete = currentBooksToDelete.findIndex((book)=>{
        return book._id.toString() === action.payload //this can also be achieved without to string and use == instead
      });
      return {books:[...currentBooksToDelete.slice(0, indexToDelete), ...currentBooksToDelete.slice(indexToDelete + 1)]}
      break;

    case "UPDATE_BOOK":
      const currentBooksToUpdate = [...state.books]
      const indexToUpdate = currentBooksToUpdate.findIndex((book)=>{
        return book._id === action.payload._id
      });
      const newBooksToUpdate = {...currentBooksToUpdate[indexToUpdate], title: action.payload.title, description: action.payload.description}
      return {books:[...currentBooksToUpdate.slice(0, indexToUpdate), newBooksToUpdate,  ...currentBooksToUpdate.slice(indexToUpdate + 1)]}
      break;
  
  }
  return state;
};


 
