import React from 'react'
import "./Widget.css"
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import HealthAndSafetyRoundedIcon from '@mui/icons-material/HealthAndSafetyRounded';
import MedicalInformationRoundedIcon from '@mui/icons-material/MedicalInformationRounded';
import MonitorHeartRoundedIcon from '@mui/icons-material/MonitorHeartRounded';
import DirectionsWalkRoundedIcon from '@mui/icons-material/DirectionsWalkRounded';
import QuestionMarkRoundedIcon from '@mui/icons-material/QuestionMarkRounded';


const Widget = ({ type  }) => {

    let data;

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                link: "See all users",
                status: "Open",
                icon1: <FiberManualRecordRoundedIcon />,
                icon2: <PeopleAltRoundedIcon className='icon-w' />,
            };
            break;
        case "bloodpressure":
            data = {
                title: "BLOOD PRESSURE",
                link: "See all Recodes",
                status: "Good",
                icon1: <HealthAndSafetyRoundedIcon />,
                icon2: <MedicalInformationRoundedIcon className='icon-w' />,
            };
            break;
        case "Heart":
            data = {
                title: "HEART RATE",
                link: "See all Recodes",
                status: "Good",
                icon1: <HealthAndSafetyRoundedIcon />,
                icon2: <MonitorHeartRoundedIcon className='icon-w' />,
            };
            break;
        case "Steps":
            data = {
                title: "STEPS",
                link: "See all Recodes",
                status: "Good",
                icon1: <HealthAndSafetyRoundedIcon />,
                icon2: <DirectionsWalkRoundedIcon className='icon-w' />,
            };
            break;
        default:
            console.error(`Unsupported type: ${type}`);
            data = {
                title: "Unknown",
                link: "See all Recodes",
                icon1: <HealthAndSafetyRoundedIcon />,
                icon2:<QuestionMarkRoundedIcon className='icon-w' />,
            };
    }

    return (
        <div className='widget'>
            <div className="left-widget">
                <span className="title">{data.title}</span>
                <span className="Count">4567</span>
                <span className="link-w">{data.link}</span>
            </div>
            <div className="right-widget">
                <div className="warning open">
                    {data.icon1} {data.status}
                </div>
                {data.icon2}
            </div>
        </div>
    );
}
export default Widget
