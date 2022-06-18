import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import moment from "moment";
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

  console.log(detailUser?.dob?.date)
    
  let daysLeft =
    " (in " +
    moment(moment(detailUser?.dob?.date))
      .add(
        moment(moment().format("YYYY-MM-DD")).diff(
          moment(detailUser?.dob?.date),
          "years"
        ) + 1,
        "years"
      )
      .diff(moment().format("YYYY-MM-DD"), "days") +
    " days)";

  useEffect(() => {
    if (params.id) {
      users.forEach((dat) => {
        let normalId = dat.login.uuid.replace(/\s+/g, "");
        let paramId = params.id.replace(/\s+/g, "");

        if (normalId === paramId) {
          setDetailUser(dat);

          // setUser(dat)
        }
      });
    }
  }, [params.id, detailUser]);

  if (detailUser === undefined) return null;
  const daysRemaining = (date) => {
    var eventdate = moment(date);
    var todaysdate = moment();
    return eventdate.diff(todaysdate, "days");
  };
  return (
    <div className="user col-10">

      <div className="userContainer container-fluid">
        <div className="userShow row">
          <div className="userShowTop col-6">
            <div className="userShowImageNameDiv">
            <div>  <img
              src={detailUser?.picture?.large}
              alt=""
              className="userShowImg"
            /></div>
        
            <div className="userShowTopTitle">
            <span className="userShowUserTitle">
                {detailUser?.name?.first}
              </span>
              <span className="userShowUsername">{detailUser?.name?.last}</span>
             
            </div>
            </div>
            
            <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowUserTitle"> Username :</span>
              <span className="userShowInfoTitle">
                {detailUser?.login?.username}
              </span>
            </div>
      
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowUserTitle"> Phone number :</span>
              <span className="userShowInfoTitle">{detailUser?.phone}</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowUserTitle"> Email :</span>
              <span className="userShowInfoTitle">{detailUser?.email}</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle"> {" "}
                {detailUser?.location?.city} | {detailUser?.location?.country}</span>
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
              <span className="userShowInfoTitle">{detailUser?.gender}</span>
            </div>
            <div className="userShowInfo">
              <AccessTimeIcon className="userShowIcon" />
              <span className="userShowUserTitle"> Time Zone :</span>
              <span className="userShowInfoTitle">{detailUser?.location?.timezone?.description}</span>
            </div>
            <div className="userShowInfo">
              <CakeIcon className="userShowIcon" />
              <span className="userShowUserTitle"> D.o.B :</span>
              <span className="userShowInfoTitle">    {moment(detailUser?.dob?.date)?.format("L")}{" "}
                  {`(${detailUser?.dob?.age} years old)`}</span>
            </div>
            <div className="userShowInfo">
              <CakeIcon className="userShowIcon" />
              <span className="userShowUserTitle"> Time to birthday</span>
              <span className="userShowInfoTitle">{daysLeft}</span>
            </div>
            <div className="userShowInfo">
              <HomeIcon className="userShowIcon" />
              <span className="userShowUserTitle"> Adress</span>
              <span className="userShowInfoTitle">             {detailUser?.location?.street.number},{" "}
                  {detailUser?.location?.street.name} |{" "}
                  {detailUser?.location?.city} | {detailUser?.location?.state} |{" "}
                  {detailUser?.location?.country}</span>
            </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
              <img
                  className="userUpdateImg"
                  src={detailUser?.picture?.large}
                  alt=""
                />
          
              </div>
           
            </div>
          </div>
        </div>
        </div>

      </div>
    </div>
  );
}
