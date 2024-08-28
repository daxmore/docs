"use client"
import React from 'react'
import Background from './Components/Background'
import Foreground from './Components/foreground'

const App = () => {
  return (
    <>
      <div className="bg-zinc-700 w-full h-screen relative">
        <Background />
        <Foreground/>
      </div>
    </>
  )
}

export default App