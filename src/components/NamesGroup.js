import React from 'react'
import { useRouter } from 'next/router'

function NamesGroup({names}) {
    const router = useRouter()
  return (
    <div className="join join-vertical">
{names.map(
    name =>{ return(
<button className="btn join-item" onClick={()=>router.push(`/names/${name}`)}><div className='flex items-center justify-between p-4 w-64'>
    <p>{name}</p>
    <div className="badge badge-secondary">neutral</div>
    </div></button>

    )}
)}
  
 
</div>
  )
}

export default NamesGroup