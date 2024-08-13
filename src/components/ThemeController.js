import React from 'react'

function ThemeController() {
  return (
    <input
  type="checkbox"
  value="dark"
  className="toggle theme-controller col-span-2 col-start-1 row-start-1 border-sky-400 bg-amber-300 [--tglbg:theme(colors.sky.500)] checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:theme(colors.blue.900)]" />
  )
}

export default ThemeController