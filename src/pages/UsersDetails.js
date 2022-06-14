import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import {GlobalState} from '../GlobalState'

import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./UsersDetails.css";
// import UserApi from "../../api/UserApi";


export default function User() {
    const params = useParams()
  const state = useContext(GlobalState)
  const [users] = state.users
  const [detailUser, setDetailUser] = useState({})
 console.log(users)


  useEffect(() => {
    // console.log("I am in useeffect details")
    //     let data = JSON.parse(window.localStorage.getItem("userdata"))
    //     let newData = data.data.results
console.log("Inside useeffect details")
        if(params.id){
            
          users.forEach(dat => {
      
            let normalId = dat.login.uuid.replace(/\s+/g, '')
            let paramId = params.id.replace(/\s+/g, '')
            console.log(normalId)
            console.log(paramId)
            // console.log("I am UUID",dat.login.uuid.replace(/\s+/g, '').length)
            // console.log("I am params id", params.id.replace(/\s+/g, '').length)
           
            if (normalId === paramId) {
              console.log(true)
              console.log(dat)
              setDetailUser(dat)
              // console.log(Array.isArray(dat))
              // setUser(dat)
           
            }
            
         
            })
        }
        
  }, [params.id,detailUser])

   if(detailUser === undefined) return null;
 console.log(detailUser)
  //   console.log("I am below useeffect")
  return (
    <div className="user col-10">

      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
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
        
            <span className="userShowTitle">Contact Details</span>
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
        <div className="userUpdate">
          <span className="userUpdateTitle">More Info</span>
          <div className="userShowBottom">
            <div className="userUpdateLeft">
            <span className="userShowTitle">More Info</span>
              
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowUserTitle"> Gender</span>
              <span className="userShowInfoTitle">Display gender here </span>
            </div>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowUserTitle"> Time Zone :</span>
              <span className="userShowInfoTitle">Display Time Zone Location here</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowUserTitle"> D.o.B :</span>
              <span className="userShowInfoTitle">Display date of birth here</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowUserTitle"> Time to birthday</span>
              <span className="userShowInfoTitle">Display time remaining to persons birthday</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
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
