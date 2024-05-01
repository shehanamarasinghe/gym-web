import React, { useState, useContext, useEffect } from 'react';
import QRCode from 'qrcode.react';
import Modal from '../Modal';
import "./Navbar.css"
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import NightsStayRoundedIcon from '@mui/icons-material/NightsStayRounded';
import QrCode2RoundedIcon from '@mui/icons-material/QrCode2Rounded';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import Profile from "../../../Images/Profile.png"
import { AuthContext } from '../../../Context/authContext'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const Navbar = ({ onClose }) => {
  const [showQRModal, setShowQRModal] = useState(false);
  const { currentUser, logout } = useContext(AuthContext);

  const handleQRCodeClick = () => {
    setShowQRModal(true);
  };

  const downloadQRCode = () => {
    const canvas = document.getElementById("qr-canvas");
    const url = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    const link = document.createElement("a");
    link.download = "qrcode.png";
    link.href = url;
    link.click();
  };

  useEffect(() => {
    if (!currentUser) {
      logout();
      console.log("sssssssssq");
    }
  }, []);

  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type='text' placeholder='Search....' />
          <SearchRoundedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageRoundedIcon className='icon1' />English
          </div>
          <div className="item">
            <NightsStayRoundedIcon className='icon1' />
          </div>
          <div className="item">
            <QrCode2RoundedIcon className='icon1' onClick={handleQRCodeClick} />
          </div>
          {showQRModal && (
            <div className="scanner">
              <div className="QRclosebtn">
                <CloseRoundedIcon className="closebtnM" onClick={() => setShowQRModal(false)} />
              </div>
              <div className="QRaddmealbody">
                <h1 className="QRheading">QR Code</h1>
                <QRCode id="qr-canvas" value={`UserID: ${currentUser?.UserName}`} />
                  <button className='downloadbtn' onClick={downloadQRCode}>Download</button>
              </div>
            </div>
          )}
          <div className="item">
            <NotificationsActiveRoundedIcon className='icon1' />
            <div className="counter">3</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineRoundedIcon className='icon1' />
            <div className="counter">2</div>
          </div>
          <div className="item5">
            <img src={Profile} alt='' className='avatar' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
