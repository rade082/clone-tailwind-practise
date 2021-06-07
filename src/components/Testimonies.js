import React from 'react'

function Testimonies({id,title,highlight,image,name,company,textColor}) {
    return (
        <div>
            <p className="text-left text-2xl font-medium">{title}<span className={`${textColor} text-black`}> {highlight}</span> </p>
                   <div className="flex mt-8">
                       <img src={image} alt="" className="rounded-full rounded-full w-20 h-20"></img>
                       <div className="mt-4 ml-4 text-left" >
                           <p> {name}</p>
                           <p> {company}</p>
                       </div>
                   </div>
        </div>
    )
}

export default Testimonies
