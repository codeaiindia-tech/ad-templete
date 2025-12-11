import React from 'react'

const Page3 = () => {

  // <div className='w-[40%] h-full bg-amber-400 flex justify-center items-center flex-col gap-y-7' >
  //       <h1 className='text-blue-950 text-7xl  font-serif text-center'>Our Project <br /> Gallery</h1>
  //       <h2 className='w-1/2 text-gray-500 text-lg font-sans text-center '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam!</h2>
  //       <p  className='w-full  text-gray-700 text-md text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur inventore autem ut enim officiis in, repellat illum eveniet nam! Soluta accusantium fugiat tenetur, natus ducimus aliquid et porro voluptates officiis quos ipsum dolorem? Culpa, nulla.</p>
  //     </div>

  return (
    <div className='w-full h-screen p-5 flex bg-white' >
      <div className='w-[55%] h-full  flex justify-center items-center pl-10' >
        <div className=' p-6 bg-white grid grid-cols-3 gap-6' >
          <div className='w-[14vw] h-[14vw] bg-black ' >
            <img src="https://images.unsplash.com/photo-1552406844-249b01cf635c?q=80&w=877&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> 
          </div>

          <div className='w-[14vw] h-[14vw] bg-black ' >
            <img className='w-full h-full' src="https://plus.unsplash.com/premium_photo-1682913629540-3857602b540c?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> </div>
          <div className='w-[14vw] h-[14vw] bg-black ' >
            <img className='w-full h-full' src="https://images.unsplash.com/photo-1621778029697-e648b727ddc7?q=80&w=828&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> </div>

          <div className='w-[14vw] h-[14vw] bg-black ' >
            <img className='w-full h-full' src="https://images.unsplash.com/photo-1716600608795-cb242b2d9647?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> </div>
          <div className='w-[14vw] h-[14vw] bg-black ' >
            <img className='w-full h-full' src="https://images.unsplash.com/photo-1639906188555-935e08bbcdf0?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> </div>
          <div className='w-[14vw] h-[14vw] bg-black ' >
            <img className='w-full h-full' src="https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> </div>

          {/* <div className='w-[13vw] h-[13vw] bg-black ' >
            <img className='w-full h-full' src="" alt="" /> 
          </div>
          <div className='w-[13vw] h-[13vw] bg-black ' >
            <img className='w-full h-full' src="" alt="" />
          </div>
          <div className='w-[13vw] h-[13vw] bg-black ' >
            <img className='w-full h-full' src="" alt="" /> 
          </div> */}

        </div>
      </div>
      <div className='w-[45%] h-full  flex justify-center items-start flex-col gap-y-7 ' >
        <h1 className='text-blue-950 text-8xl font-medium font-serif text-left uppercase'>Our <br /> Photo <br /> Gallery</h1>
        <h2 className='w-1/2 text-gray-500 text-lg font-sans text-left '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam!</h2>
        <p className='w-3/4  text-gray-700 text-md text-left'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur inventore autem ut enim officiis in, repellat illum eveniet nam! Soluta accusantium fugiat tenetur, natus ducimus aliquid et porro voluptates officiis quos ipsum dolorem? Culpa, nulla.</p>
        <a href={"#"} className='text-white bg-blue-950 px-5 py-2 rounded font-sans text-lg hover:cursor-pointer hover:scale-95 transition-all' >Explore More</a>
      </div>
    </div>
  )
}

export default Page3
