import React from "react";

const HomeCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* Card */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 
        rounded-xl text-white">
          <p className="font-semibold text-2xl px-2 pt-4">Sun's Out,Food</p>
          <p className="px-2">Through 8/26</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
        </div>
        <img
        className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
         src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1000&h=750&dpr=1" alt="" />
      </div>
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 
        rounded-xl text-white">
          <p className="font-semibold text-2xl px-2 pt-4">New Restaurants</p>
          <p className="px-2">Added Daily</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
        </div>
        <img
        className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
         src="https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
      </div>
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 
        rounded-xl text-white">
          <p className="font-semibold text-2xl px-2 pt-4">Desserts Rush</p>
          <p className="px-2">Tasty Treats</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
        </div>
        <img
        className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
         src="https://images.pexels.com/photos/1343504/pexels-photo-1343504.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
      </div>
    </div>
  );
};

export default HomeCards;
