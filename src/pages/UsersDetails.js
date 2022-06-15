import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import {GlobalState} from '../GlobalState'
import WcIcon from '@material-ui/icons/Wc';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import CakeIcon from '@material-ui/icons/Cake';
import HomeIcon from '@material-ui/icons/Home';
import {
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid
} from "@material-ui/icons";
import "./UsersDetails.css";



export default function User() {
    const params = useParams()
  const state = useContext(GlobalState)
  const [users] = state.users
  const [detailUser, setDetailUser] = useState({})



  useEffect(() => {

console.log("Inside useeffect details")
        if(params.id){
            
          users.forEach(dat => {
      
            let normalId = dat.login.uuid.replace(/\s+/g, '')
            let paramId = params.id.replace(/\s+/g, '')
 
      
           
            if (normalId === paramId) {
              setDetailUser(dat)
    
           
            }
            
         
            })
        }
        
  }, [params.id,detailUser])

   if(detailUser === undefined) return null;
 console.log(detailUser)

  return (
    <div className="user col-10">

      <div className="userContainer container-fluid">
        <div className="userShow row">
          <div className="userShowTop col-6">
            <img

              src="https://randomuser.me/api/portraits/thumb/men/15.jpg"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUserTitle">Display first name Here</span>
              <span className="userShowUsername">Display Last Name Here</span>
             
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowUserTitle"> Username :</span>
              <span className="userShowInfoTitle">Display username here</span>
            </div>
      
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowUserTitle"> Phone number :</span>
              <span className="userShowInfoTitle">+1 Display Phone Number Here</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowUserTitle"> Email :</span>
              <span className="userShowInfoTitle">Display Email Here</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle"> Display City name here | Display country name here</span>
            </div>
          </div>
        </div>
        <div className="userUpdate col-6">
          <span className="userUpdateTitle">More Info</span>
          <div className="userShowBottom">
            <div className="userUpdateLeft">
            <span className="userShowTitle">More Info</span>
              
            <div className="userShowInfo">
              <WcIcon className="userShowIcon" />
              <span className="userShowUserTitle"> Gender</span>
              <span className="userShowInfoTitle">Display gender here </span>
            </div>
            <div className="userShowInfo">
              <AccessTimeIcon className="userShowIcon" />
              <span className="userShowUserTitle"> Time Zone :</span>
              <span className="userShowInfoTitle">Display Time Zone Location here</span>
            </div>
            <div className="userShowInfo">
              <CakeIcon className="userShowIcon" />
              <span className="userShowUserTitle"> D.o.B :</span>
              <span className="userShowInfoTitle">Display date of birth here</span>
            </div>
            <div className="userShowInfo">
              <CakeIcon className="userShowIcon" />
              <span className="userShowUserTitle"> Time to birthday</span>
              <span className="userShowInfoTitle">Display time remaining to persons birthday</span>
            </div>
            <div className="userShowInfo">
              <HomeIcon className="userShowIcon" />
              <span className="userShowUserTitle"> Adress</span>
              <span className="userShowInfoTitle">Display complete address</span>
            </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
          
              </div>
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
