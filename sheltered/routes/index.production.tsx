import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"

import { About } from "./settings"
import { Home } from "./home"

export const Routing = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
)
