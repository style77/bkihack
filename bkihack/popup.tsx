import { useStorage } from "@plasmohq/storage/hook"
import "./style.css"
import Frame from "data-base64:~assets/Frame.svg"
import { SlidersHorizontal } from "lucide-react"

function IndexPopup() {
  const [isSheltered, setIsSheltered] = useStorage<string>("false");
  return (
    <div className={`flex flex-col h-48 w-96 justify-center select-none items-center transition ${isSheltered === "false" ? 'bg-[#248BD6]' : 'bg-[#248bd680]'}`}>
      { isSheltered === "false" ? (
        <>
          <div className="flex flex-row w-full justify-end pt-3 px-4">
          <SlidersHorizontal className="stroke-white" size={20}/>
        </div>
        <svg onClick={() => setIsSheltered("true")} className="h-24 svg-class transition" width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className="path-class" d="M106.667 69.3331C106.667 95.9998 88 109.333 65.8133 117.066C64.6515 117.46 63.3895 117.441 62.24 117.013C40 109.333 21.3333 95.9998 21.3333 69.3331V31.9998C21.3333 30.5853 21.8952 29.2288 22.8954 28.2286C23.8956 27.2284 25.2522 26.6665 26.6666 26.6665C37.3333 26.6665 50.6666 20.2665 59.9466 12.1598C61.0765 11.1945 62.5139 10.6641 64 10.6641C65.4861 10.6641 66.9234 11.1945 68.0533 12.1598C77.3866 20.3198 90.6666 26.6665 101.333 26.6665C102.748 26.6665 104.104 27.2284 105.105 28.2286C106.105 29.2288 106.667 30.5853 106.667 31.9998V69.3331Z" stroke="#F7F7F7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path className="path-class" d="M48 64.0026L58.6667 74.6693L80 53.3359" stroke="#F7F7F7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <h1 className="text-[#F7F7F7] text-[16px] font-medium">Welcome</h1>
        <p className="text-[#F7F7F7] font-medium text-[14px]">You are secured by Sheltered</p>
      </>
      )
        :
      (
        <>
          <div className="flex flex-row w-full justify-end pt-3 px-4">
          <SlidersHorizontal className="stroke-white" size={20}/>
        </div>
        <svg onClick={() => setIsSheltered("false")} className="h-24 svg-class2 transition" width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="path-class" d="M106.667 69.3331C106.667 95.9998 88 109.333 65.8134 117.066C64.6516 117.46 63.3896 117.441 62.24 117.013C40 109.333 21.3334 95.9998 21.3334 69.3331V31.9998C21.3334 30.5853 21.8953 29.2288 22.8955 28.2286C23.8957 27.2284 25.2522 26.6665 26.6667 26.6665C37.3334 26.6665 50.6667 20.2665 59.9467 12.1598C61.0766 11.1945 62.5139 10.6641 64 10.6641C65.4862 10.6641 66.9235 11.1945 68.0534 12.1598C77.3867 20.3198 90.6667 26.6665 101.333 26.6665C102.748 26.6665 104.104 27.2284 105.105 28.2286C106.105 29.2288 106.667 30.5853 106.667 31.9998V69.3331Z" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path className="path-class" d="M77.3333 50.6641L50.6666 77.3307" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path className="path-class" d="M50.6666 50.6641L77.3333 77.3307" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>        
        <h1 className="text-zinc-900/50 text-[16px] font-medium">Welcome</h1>
        <p className="text-zinc-900/50 font-medium text-[14px]">You are not secured by Sheltered.</p>
      </>
      )
      }
    </div>
  )
}

export default IndexPopup
