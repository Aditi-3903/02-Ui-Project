import React from 'react'

const RightCardContent = (props) => {
  return (
     <div className="h-full w-full absolute top-0 left-0 p-8 flex flex-col justify-between">
        <h2 className="bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center">{props.id+1}</h2>
        <div>
          <p className="text-base mb-8 leading-normal text-white ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            laboriosam consequuntur sint perspiciatis voluptatum est!
          </p>
          <div className="flex justify-between ">
            <button style={{backgroundColor:props.color}} className=" text-white font-medium px-8 py-2 rounded-full ">{props.tag}</button>
          <button className="bg-blue-600 text-white font-medium px-3 py-2 rounded-full"><i className="ri-arrow-right-line"></i></button>
          </div>
        </div>
      </div>
  )
}

export default RightCardContent