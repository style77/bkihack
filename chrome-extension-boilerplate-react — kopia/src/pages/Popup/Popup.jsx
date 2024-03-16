import React, { useState } from 'react';
import logo from '../../assets/img/logo.svg';
import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';
import { SlidersHorizontal } from "lucide-react";

import Switch from "react-switch";

const Popup = () => {
  const [isSheltered, setIsSheltered] = useState("false");
  const [currentPage, setCurrentPage] = useState("index")

  return (
    <>
      {
        currentPage === "index" && (
          <div className={`container transition ${isSheltered === "false" ? 'bg-248BD6' : 'bg-248bd680'}`}>
            {isSheltered === "false" ? (
              <>
                <div className="container2">
                  <SlidersHorizontal onClick={() => setCurrentPage("settings")} className="stroke-white hover:cursor-pointer hover:scale-105 transition" size={20} />
                </div>
                <svg onClick={() => setIsSheltered("true")} className="h-24 svg-class transition" width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="path-class" d="M106.667 69.3331C106.667 95.9998 88 109.333 65.8133 117.066C64.6515 117.46 63.3895 117.441 62.24 117.013C40 109.333 21.3333 95.9998 21.3333 69.3331V31.9998C21.3333 30.5853 21.8952 29.2288 22.8954 28.2286C23.8956 27.2284 25.2522 26.6665 26.6666 26.6665C37.3333 26.6665 50.6666 20.2665 59.9466 12.1598C61.0765 11.1945 62.5139 10.6641 64 10.6641C65.4861 10.6641 66.9234 11.1945 68.0533 12.1598C77.3866 20.3198 90.6666 26.6665 101.333 26.6665C102.748 26.6665 104.104 27.2284 105.105 28.2286C106.105 29.2288 106.667 30.5853 106.667 31.9998V69.3331Z" stroke="#F7F7F7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path className="path-class" d="M48 64.0026L58.6667 74.6693L80 53.3359" stroke="#F7F7F7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <h1 className="text-F7F7F7 text-16px font-medium">Welcome</h1>
                <p className="text-F7F7F7 font-medium text-14px">You are secured by Sheltered</p>
              </>
            )
              :
              (
                <>
                  <div className="container2">
                    <SlidersHorizontal className="stroke-white" size={20} />
                  </div>
                  <svg onClick={() => setIsSheltered("false")} className="h-24 svg-class2 transition" width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="path-class" d="M106.667 69.3331C106.667 95.9998 88 109.333 65.8134 117.066C64.6516 117.46 63.3896 117.441 62.24 117.013C40 109.333 21.3334 95.9998 21.3334 69.3331V31.9998C21.3334 30.5853 21.8953 29.2288 22.8955 28.2286C23.8957 27.2284 25.2522 26.6665 26.6667 26.6665C37.3334 26.6665 50.6667 20.2665 59.9467 12.1598C61.0766 11.1945 62.5139 10.6641 64 10.6641C65.4862 10.6641 66.9235 11.1945 68.0534 12.1598C77.3867 20.3198 90.6667 26.6665 101.333 26.6665C102.748 26.6665 104.104 27.2284 105.105 28.2286C106.105 29.2288 106.667 30.5853 106.667 31.9998V69.3331Z" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path className="path-class" d="M77.3333 50.6641L50.6666 77.3307" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path className="path-class" d="M50.6666 50.6641L77.3333 77.3307" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <h1 className="text-zinc-900/50 text-16px font-medium">Welcome</h1>
                  <p className="text-zinc-900/50 font-medium text-14px">You are not secured by Sheltered.</p>
                </>
              )
            }
          </div>
        )
      }
      {
        currentPage === "settings" && (
          <>
            <div className="container5">
              <div className="container6">
                <span className="container7 font-semibold text-white gap-x-1">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3334 8.66957C13.3334 12.0029 11 13.6696 8.22669 14.6362C8.08146 14.6855 7.92371 14.6831 7.78002 14.6296C5.00002 13.6696 2.66669 12.0029 2.66669 8.66957V4.0029C2.66669 3.82609 2.73693 3.65652 2.86195 3.5315C2.98697 3.40648 3.15654 3.33624 3.33335 3.33624C4.66669 3.33624 6.33335 2.53624 7.49335 1.5229C7.63459 1.40224 7.81426 1.33594 8.00002 1.33594C8.18578 1.33594 8.36545 1.40224 8.50669 1.5229C9.67335 2.5429 11.3334 3.33624 12.6667 3.33624C12.8435 3.33624 13.0131 3.40648 13.1381 3.5315C13.2631 3.65652 13.3334 3.82609 13.3334 4.0029V8.66957Z" stroke="#F7F7F7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  Sheltered
                </span>
              </div>
              <h1 className="pl-3 text-white text-lg font-semibold">Settings</h1>
              <div className="line-container">
                <div className="line"></div>
              </div>
              <div className="container4">
                <div className="container3">
                  <p className="font-thin text-base text-white">Trigger warnings</p>
                  <Switch checked={true} onChange={() => {}} />
                </div>
                <div className="container3">
                  <p className="font-thin text-base text-white">Trigger method</p>
                  {/* <Badge className="bg-white text-gray-400 font-light">Delete</Badge> */}
                </div>
                <div className="container3">
                  <p className="font-thin text-base text-white">Trigger keywords</p>
                  {/* <Badge className="bg-white text-gray-400 font-light">war, suicide</Badge> */}
                </div>
              </div>
              <div className="line-container">
                <div className="line"></div>
              </div>
              <div className="container4">
                <div className="container3">
                  <p className="font-thin text-base text-white">Post/comment content checking</p>
                  <Switch checked={true} onChange={() => {}} />
                </div>
                <div className="container3">
                  <p className="font-thin text-base text-white">Password</p>
                  {/* <PasswordInput
                    id="current_password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="password"
                    className="h-6 !w-32 rounded-full font-light"
                  />         */}
                  </div>
              </div>
            </div>
          </>
        )
      }
    </>
  )
}

export default Popup;
