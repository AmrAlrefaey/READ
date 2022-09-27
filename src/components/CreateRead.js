import {useState} from 'react'
import ShowReads from './ShowReads'
import {useSelector, useDispatch} from 'react-redux'

function CreateRead() {


  const [id , setId] = useState(1)
  const [title , setTitle] = useState('')
  const [date , setDate] = useState('')
  const [description , setDescription] = useState('')


  const books = useSelector((state) => state)

  const dispatch = useDispatch()

  function addBooks() {
    let flag = true;
    if(title == '' ){
      flag = false
      document.querySelector('#title').style.borderColor='red';
    }else{
      document.querySelector('#title').style.borderColor='';
    }
    if(date == '' ){
      flag = false
      document.querySelector('#date').style.borderColor='red';
    }else{
      document.querySelector('#date').style.borderColor='';
    }
    if(description == '' ){
      flag = false
      document.querySelector('#description').style.borderColor='red';
    }else{
      document.querySelector('#description').style.borderColor='';
    }
    if(flag){
      dispatch({
        type: 'ADD_BOOK',
        paylode :{
          id,
          title,
          date,
          description
        }
      })
      setId( id+1 )
      setTitle('')
      setDate('')
      setDescription('')
    }
    
  }

  return (
    <>
            <div className='card card-body'>
                <div className='my-3'>
                    <label>title</label>
                    <input id='title' onChange={(e) => setTitle(e.target.value)} value={title} className='form-control'/>
                </div>

                <div className='my-3'>
                    <label>date</label>
                    <input id='date' type={'date'} onChange={(e) => setDate(e.target.value)} value={date} className='form-control'/>
                </div>
                
                <div className='my-3'>
                    <label>description</label>
                    <textarea id='description' onChange={(e) => setDescription(e.target.value)} value={description} className='form-control'/>
                </div>

                <hr/>

                <button onClick={addBooks} className='btn btn-primary ms'> Add a Books</button>

        </div>

    </>
  )
}

export default CreateRead