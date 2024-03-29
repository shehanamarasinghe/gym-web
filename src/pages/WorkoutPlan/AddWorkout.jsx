import React,{useEffect,useRef, useState} from 'react'
import './AddWorkout.css'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


function AMealplanAdd({onClose}) {

  const [value, setvalue] = useState('');
  console.log(value)

  const modalRef = useRef();
  const closeModal = (e) => {
    if(modalRef.current === e.target){
      onClose();
    }
  }

  return (
    <div ref={modalRef} onClick={closeModal} className='MainAddmeal'>
        <div className="AMclosebtn">
            <CloseRoundedIcon className='addclosebtn' onClick={onClose}/>
            <div className="AMaddmealbody">
            <div className="write">
              <div className="AMcontent">
                <input type='text' placeholder='Title'/>
                <div className="editorcontainor">
                  <ReactQuill className='editor' theme="snow" value={value} onChange={setvalue}/>
                </div>
                
                <div className="AWTable">
                <div className="mainMM">

                  <h1>Day One</h1>
                  <div className="AWTWeekdays">
                    
                  <div className="AMBreakfast">
                  <h1>Arms</h1>
                  <input type='text' placeholder='Meal'/>
                  <input type='text' placeholder='Meal'/>
                  <input type='text' placeholder='Meal'/>
                  <input type='text' placeholder='Meal'/>
                  <input type='text' placeholder='Meal'/>
                 

                  </div>

                       
                  <div className="AMBreakfast">
                  <h1>Legs</h1>
                  <input type='text' placeholder='Meal'/>
                  <input type='text' placeholder='Meal'/>
                  <input type='text' placeholder='Meal'/>
                  <input type='text' placeholder='Meal'/>
                  <input type='text' placeholder='Meal'/>
                  

                  </div>

                
                  </div>
                  </div>
                  <div className="mainMM">
                    <h1>Day Two</h1>
                  <div className="AWTWeekdays">
                    <div className="AMBreakfast">
                    <h1>Arms</h1>
                  <input type='text' placeholder='Meal'/>
                  <input type='text' placeholder='Meal'/>
                  <input type='text' placeholder='Meal'/>
                  <input type='text' placeholder='Meal'/>
                  <input type='text' placeholder='Meal'/>
               

                  </div>

                       
                  <div className="AMBreakfast">
                  <h1>Legs</h1>
                  <input type='text' placeholder='Meal'/>
                  <input type='text' placeholder='Meal'/>
                  <input type='text' placeholder='Meal'/>
                  <input type='text' placeholder='Meal'/>
                  <input type='text' placeholder='Meal'/>
              

                  </div>

                
                  </div>
                  </div>
              </div>
              </div>
         
              
              <div className="AMmenu">
                <div className="AMitem">
                  <h1>Publish</h1>
                  <span>
                    <b>Status: </b> Draft
                  </span>
                  <span>
                    <b>visibiity: </b> Public
                  </span>
                  <input step={{display:"none"}} type='file' id='file' name=''/>
                  <label className='AMfile' htmlFor='file'>Upload Image</label>
                  <div className="AMbuttons">
                    <button className='AMbutton1'>Save as a Draft</button>
                    <button className='AMbutton2'>Update</button>
                  </div>
                </div>
                <div className="AMitem">
                  <h1>User Category</h1>
                  <div className="AMuserc">
                  <input type='radio' name='User' value="Cardio" id='users'/>
                  <label htmlFor='users'>Cardio</label>

                  </div>
                  <div className="AMuserc">
                  <input type='radio' name='User' value="Cardio" id='users'/>
                  <label htmlFor='users'>Cardio</label>

                  </div>
                  <div className="AMuserc">
                  <input type='radio' name='User' value="Cardio" id='users'/>
                  <label htmlFor='users'>Cardio</label>

                  </div>
                  <div className="AMuserc">
                  <input type='radio' name='User' value="Cardio" id='users'/>
                  <label htmlFor='users'>Cardio</label>

                  </div>
                  
  
                </div>

                <div className="useridget">
                <h1>User Search</h1>
      <input
        type="text"
        placeholder="Enter username"
    
      />
      <button>Search</button>


                  </div>
              </div>
            </div>

            </div>
        </div>
    </div>

  )
}

export default AMealplanAdd
