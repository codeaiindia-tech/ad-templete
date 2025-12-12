import React from 'react'

const Page3 = () => {
  return (
    <div className="w-full  md:h-[85vh] p-8 flex bg-white flex-col md:flex-col-reverse lg:flex-row gap-10 lg:gap-10">


      {/* RIGHT — TEXT CONTENT (Moves to top on mobile & tablet) */}
      <div className="w-full lg:w-[45%] flex flex-col justify-center md:items-start items-center  gap-6 px-3 sm:px-6 lg:pl-10 order-1 lg:order-2">
        <h1 className="text-blue-950 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium font-serif uppercase leading-tight text-center md:text-left md:hidden ">
          Our  Photo <br /> Gallery
        </h1>
        <h1 className="text-blue-950 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium font-serif uppercase leading-tight text-center md:text-left hidden md:flex">
          Our <br /> Photo <br /> Gallery
        </h1>

        <h2 className="text-gray-500 text-base sm:text-lg md:text-xl w-full sm:w-3/4 font-sans text-center md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam!
        </h2>

        <p className="text-gray-700 text-sm sm:text-md md:text-lg w-full sm:w-3/4 text-center md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur inventore autem ut 
          enim officiis repellat illum eveniet nam! Soluta accusantium fugiat tenetur.
        </p>

        <a
          href="#"
          className="text-white bg-blue-950 px-5 py-3 rounded-lg font-sans text-base sm:text-lg w-fit hover:scale-95 transition-all"
        >
          Explore More
        </a>
      </div>

      {/* LEFT — IMAGE GRID */}
      <div className="w-full lg:w-[55%] flex justify-center items-center order-2 lg:order-1 ">
        <div className=" grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8  w-full md:pl-10">

          {[
            "https://images.unsplash.com/photo-1552406844-249b01cf635c?q=80&w=877&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1682913629540-3857602b540c?q=80&w=880&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1621778029697-e648b727ddc7?q=80&w=828&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1716600608795-cb242b2d9647?q=80&w=880&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1639906188555-935e08bbcdf0?q=80&w=880&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=880&auto=format&fit=crop"
          ].map((url, i) => (
            <div key={i} className=" md:w-[15vw] md:h-[15vw] aspect-square bg-gray-200 overflow-hidden rounded-lg">
              <img
                src={url}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
          ))}

        </div>
      </div>

    </div>
  );
};

export default Page3;
