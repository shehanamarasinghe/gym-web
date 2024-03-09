import React,{useEffect,useRef, useState} from 'react'
import './QrcodeScanner.css'
import { Html5QrcodeScanner } from "html5-qrcode"
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';


function QrcodeScanner({onClose}) {

    const [value, setvalue] = useState('');
    console.log(value)
  
    const modalRef = useRef();
    const closeModal = (e) => {
      if(modalRef.current === e.target){
        onClose();
      }
    }

    const [scanResult, setScanResult] = useState(null);

    useEffect(() => {
        const scanner = new Html5QrcodeScanner('reader', {
            qrbox: {
                width:250,
                height: 250,
            },
            fps: 5,
        });
    
        scanner.render(success, error);
    
        function success(result){
            scanner.clear();
            setScanResult(result);
        }
    
        function error(err) {
            console.warn(err);
    
        }
    

    }, []);

    

  return (
   <div ref={modalRef} onClick={closeModal} className="scanner">
    <div className="QRclosebtn">
    <CloseRoundedIcon className='addclosebtn' onClick={onClose}/>
    <div className="QRaddmealbody">
    <h1 className='QRheading'>Qrcode Scanner</h1>
    {scanResult
    ? <div>Success : <a href={scanResult}>{scanResult}</a></div>
    : <div id='reader'></div>

    }
    </div>
    </div>
    </div>
      
  );
}

export default QrcodeScanner
