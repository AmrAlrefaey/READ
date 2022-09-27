import React from 'react'
import Read from './Read'
import {useSelector} from 'react-redux'

function ShowReads() {
  const books = useSelector(state => state)
  return (
    <table className='table'>
        <thead>
            <tr>
                <th>#</th>
                <th>title</th>
                <th>date</th>
                <th>description</th>
            </tr>
            
        </thead>
        <tbody>
          {
            books.map(book => <Read book={book}/>)
          }
            
        </tbody>
    </table>
  )
}

export default ShowReads