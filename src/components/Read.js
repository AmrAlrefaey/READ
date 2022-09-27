import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

function Read({book}) {

  const dispatch = useDispatch()

  function deleteBooks(){
    dispatch({
      type:'DELETE_BOOK',
      paylode: book.id
      
    })
  }
  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.date}</td>
      <td>{book.description}</td>
      <td>
        <button onClick={deleteBooks} className='btn btn-s btn-danger'>delete</button>
      </td>
    </tr>
  )
}

export default Read