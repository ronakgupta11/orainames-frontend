import Loading from '@/components/Loading'
import NamesGroup from '@/components/NamesGroup'
import React, { useState } from 'react'

function index() {
    const [isLoading,setIsLoading] = useState(true)
    const [value,setValue] = useState("")
    const [names,setNames] = useState([
        "Rk.eth", "RouteKind.ora"
    ])
  return (
    <div className='flex items-center justify-center'>
        <div className='w-64 pt-64 flex items-center flex-col space-y-4'>

        <p> Find Your Web3 UserName</p>
        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={(e)=>setValue(e.target.value)} />
        {isLoading && <Loading/>}
        <NamesGroup names={names}/>
        </div>
    </div>
  )
}

export default index