import React, { useEffect, useRef, useState } from 'react';
import './QrcodeScanner.css';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Html5QrcodeScanner } from 'html5-qrcode';
import axios from 'axios';

function QrcodeScanner({ onClose }) {
  const [isOpen, setIsOpen] = useState(true);
  const [scanResult, setScanResult] = useState(null);
  const [shouldRender, setShouldRender] = useState(true);
  
  useEffect(() => {

    const scanner = new Html5QrcodeScanner('reader', {
  
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    });

    if(shouldRender){
      scanner.render(success, error);
    }
    
   
    function success(result) {
      console.log('success',result);
      sendDataToBackend(result);
      setShouldRender(prevState => false);
      scanner.pause();
      scanner.stop();
      onClose();
      console.log('false or not',shouldRender);
      setScanResult(result);
  

    }


    function error(err) {

    }

    return () => {
      if (scanner && scanner._element) {
          scanner.stop();
          scanner._element.removeEventListener('click', scanner._elementClickHandler);
      }
    };
  }, [shouldRender]);

  const modalRef = useRef();
  const closeModal = (e) => {
    setShouldRender(false);
    console.log('befor if close is work');
    if (modalRef.current === e.target) {
      console.log('close is work');
      shouldRender = false;
      onClose();
    }
  };

  const sendDataToBackend = async (userdata) => {
    console.log('Befor If Data sent to backend');
    try {
      console.log('Data sent to backend');
      await axios.post("/store-data", { userdata });
    
      console.log('Data sent to backend');
    } catch (error) {
      console.error('Error sending data to backend:', error);
    }
  };

  return (
    <div ref={modalRef} onClick={closeModal} className="scanner">
      <div className="QRclosebtn">
        <CloseRoundedIcon className="addclosebtn" onClick={onClose} />
        <div className="QRaddmealbody">
          <h1 className="QRheading">QR Code Scanner</h1>
          {scanResult ? (
            <div>
              Success : <a href={scanResult}>{scanResult}</a>
            </div>
          ) : (
            <div id="reader"></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default QrcodeScanner;
