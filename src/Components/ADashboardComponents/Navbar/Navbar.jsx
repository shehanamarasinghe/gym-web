
import React, { useState } from 'react';
import "./Navbar.css"
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import NightsStayRoundedIcon from '@mui/icons-material/NightsStayRounded';
import QrCodeScannerRoundedIcon from '@mui/icons-material/QrCodeScannerRounded';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import Profile from "../../../Images/Profile.png"
import QrcodeScanner from './QrcodeScanner';
import QrcodeScannercheckout from './QrcodeScannerCheckout';

const Navbar = () => {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type='text' placeholder='Search....'/>
          <SearchRoundedIcon/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageRoundedIcon className='icon1'/>English
          </div>
          <div className="item">
            <NightsStayRoundedIcon className='icon1'/>
          </div>
          <div className="item">
            <QrCodeScannerRoundedIcon className='icon1' onClick={() => setShowModal1(true)}/>
            <span>Checkin</span>
          </div>
          <div className="item">
            <QrCodeScannerRoundedIcon className='icon1' onClick={() => setShowModal(true)}/>
            <span>Checkout</span>
          </div>
          <div className="item">
            <NotificationsActiveRoundedIcon className='icon1'/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineRoundedIcon className='icon1'/>
            <div className="counter">2</div>
          </div>
          <div className="item5">
            <img src={Profile} alt='' className='avatar'/>
          </div>
        </div>
      </div>
      {showModal1 && <QrcodeScanner onClose={() => setShowModal1(false)}/>}
      {showModal && <QrcodeScannercheckout onClose={() => setShowModal(false)}/>}
    </div>
  );
}

export default Navbar;
