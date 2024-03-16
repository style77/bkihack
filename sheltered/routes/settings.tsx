import { useNavigate } from "react-router-dom"
import React, { useState } from "react"
import { Undo2 } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { PasswordInput } from "@/components/ui/password-input"

export const Settings = () => {
  const navigation = useNavigate()
  const [password, setPassword] = useState("")

  return (
    <div className="flex flex-col h-max w-96 select-none bg-[#248BD6]">
      <div className="flex flex-row justify-between items-center p-3">
        <span className="flex flex-row font-semibold text-white gap-x-1">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.3334 8.66957C13.3334 12.0029 11 13.6696 8.22669 14.6362C8.08146 14.6855 7.92371 14.6831 7.78002 14.6296C5.00002 13.6696 2.66669 12.0029 2.66669 8.66957V4.0029C2.66669 3.82609 2.73693 3.65652 2.86195 3.5315C2.98697 3.40648 3.15654 3.33624 3.33335 3.33624C4.66669 3.33624 6.33335 2.53624 7.49335 1.5229C7.63459 1.40224 7.81426 1.33594 8.00002 1.33594C8.18578 1.33594 8.36545 1.40224 8.50669 1.5229C9.67335 2.5429 11.3334 3.33624 12.6667 3.33624C12.8435 3.33624 13.0131 3.40648 13.1381 3.5315C13.2631 3.65652 13.3334 3.82609 13.3334 4.0029V8.66957Z" stroke="#F7F7F7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Sheltered
        </span>
        <Undo2 onClick={() => navigation("/")} className="stroke-white hover:scale-105 transition hover:cursor-pointer" size={18}/>
      </div>
      <h1 className="pl-3 text-white text-lg font-semibold">Settings</h1>
      <div className="w-full flex items-center justify-center h-px">
        <div className="flex items-center justify-center h-px w-[95%] bg-white"></div>
      </div>
      <div className="flex flex-col gap-3 p-3">
        <div className="flex flex-row justify-between w-full">
          <p className="font-thin text-base text-white">Trigger warnings</p>
          <Switch />
        </div>
        <div className="flex flex-row justify-between w-full">
          <p className="font-thin text-base text-white">Trigger method</p>
          <Badge className="bg-white text-gray-400 font-light">Delete</Badge>
        </div>
        <div className="flex flex-row justify-between w-full">
          <p className="font-thin text-base text-white">Trigger keywords</p>
          <Badge className="bg-white text-gray-400 font-light">war, suicide</Badge>
        </div>
      </div>
      <div className="w-full flex items-center justify-center h-px">
        <div className="flex items-center justify-center h-px w-[95%] bg-white"></div>
      </div>
      <div className="flex flex-col gap-3 p-3">
        <div className="flex flex-row justify-between w-full">
          <p className="font-thin text-base text-white">Post/comment content checking</p>
          <Switch />
        </div>
        <div className="flex flex-row justify-between w-full">
          <p className="font-thin text-base text-white">Password</p>
          <PasswordInput
					id="current_password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					autoComplete="password"
          className="h-6 !w-32 rounded-full font-light"
				/>        </div>
      </div>
    </div>
  )
}
