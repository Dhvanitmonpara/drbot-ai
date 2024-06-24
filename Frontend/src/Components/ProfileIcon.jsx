import { Button } from "@nextui-org/react";
import React from "react";

function ProfileIcon() {
  return (
    <div className="dropdown dropdown-end text-white">
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
        className="dropdown-content menu bg-[#27292b] rounded-box z-[1] w-[16rem] p-2 shadow flex flex-col items-center">
        <p>mail.com</p>
        <div className="avatar placeholder cursor-pointer flex-col items-center">
          <div className="bg-[#33691e] text-white w-14 rounded-full">
            <span className="text-[25px]">UI</span>
          </div>
          <p>Hi,Name!</p>
        </div>
        <Button>
          <svg
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            class=" NMm5M">
            <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"></path>

            <path d="M0 0h24v24H0z" fill="none"></path>
          </svg>
          Log out
        </Button>
        <div className="text-[11px] flex gap-2">
          <span>Privacy Policy</span> ●<span>Terms of Service</span>
        </div>
      </div>
    </div>
  );
}

export default ProfileIcon;
