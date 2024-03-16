import type { PlasmoCSConfig } from "plasmo"
 
export const config: PlasmoCSConfig = {
  matches: ["http://192.168.1.5/*"],
  all_frames: true,
  world: "MAIN"
}

window.addEventListener("DOMContentLoaded", () => {
    console.log("co")
    document.body.style.background = "pink"
})