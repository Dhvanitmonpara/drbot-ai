import { Button } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import authService from "../appwrite/authConfig";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/authSlice";

function ProfileIcon() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout();
    dispatch(logout());
    navigate("/");
  };

  
  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);
  const rawUserData = useSelector((state) => state.auth.userData);
  console.log(isUserLoggedIn)

  useEffect(() => {
    if (isUserLoggedIn) {
      if (rawUserData) {
        setUserData(rawUserData.userData);
        if (!userData) {
          setUserData(rawUserData);
        }
      }
    }
  }, [isUserLoggedIn, rawUserData]);

  return (
    <div className="dropdown dropdown-end z-[55] text-white">
      <div
        tabIndex={0}
        role="button"
        className="btn m-1 bg-transparent border-none hover:bg-transparent">
        <div className="avatar placeholder cursor-pointer ">
          <div className="bg-[#33691e] text-white w-11 rounded-full">
            <span className="text-xs">UI</span>
          </div>
        </div>
      </div>
      <div
        tabIndex={0}
        className="dropdown-content menu bg-[#27292b] gap-[22px] py-[16px] rounded-box z-[1] w-[16rem] p-2 shadow flex flex-col items-center">
        <p>{userData ? userData.email : ""}</p>
        <div className="avatar placeholder cursor-pointer flex-col items-center">
          <div className="bg-[#33691e] text-white w-[4.5rem] mb-2 rounded-full">
            <span className="text-[32px]">UI</span>
          </div>
          <p>{userData ? `Hi, ${userData.name}!` : "Login to continue"}</p>
        </div>
        {userData && isUserLoggedIn ? (
          <Button onClick={logoutHandler}>
            <svg
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              className=" NMm5M">
              <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"></path>
              <path d="M0 0h24v24H0z" fill="none"></path>
            </svg>
            Log out
          </Button>
        ) : (
          <>
            <Button
              onClick={() => {
                navigate("/account/login");
              }}>
              <svg
                height="24"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
                className=" NMm5M">
                <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"></path>
                <path d="M0 0h24v24H0z" fill="none"></path>
              </svg>
              Login
            </Button>
            <Button
              onClick={() => {
                navigate("/account/signup");
              }}>
              <svg
                height="24"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
                className=" NMm5M">
                <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"></path>
                <path d="M0 0h24v24H0z" fill="none"></path>
              </svg>
              Signup
            </Button>
          </>
        )}
        <div className="text-[11px] flex gap-2">
          <span>Privacy Policy</span> ●<span>Terms of Service</span>
        </div>
      </div>
    </div>
  );
}

export default ProfileIcon;
