import React, { useState } from "react";

export default function BestSell({ props }) {
  const [data, setData] = useState(props || []);

  const toggle = (index) => {
    const newData = [...data]; // Hozirgi ma'lumotni ko'chirib olamiz
    newData[index].like = !newData[index].like; // like ni o'zgartiramiz
    setData(newData); // Yangilangan ma'lumotni o'rnatamiz
  };

  return (
    <div className="bg-[rgba(0,0,0,0.1)] flex flex-col gap-4 p-4">
      <h1 className="text-3xl font-semibold">Eng ko’p sotilgan</h1>
      <div className="grid gap-3 grid-cols-2 lg:grid-cols-5 md:grid-cols-4">
        {data.map((item, index) => (
          <div key={index} className="flex relative bg-white justify-between h-[500px] flex-col rounded-lg gap-2">
            <img src={item.img} className="w-full object-cover h-[100%] rounded-t-md" alt={item.title} />
            <button onClick={() => toggle(index)} className="text-gray-400 absolute top-4 right-4">
              {item.like ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}
            </button>
            <div className="flex-col flex h-[390px] py-5 justify-between px-3">
              <p>{item.price}</p>
              <p>{item.discription}</p>
              <p>{item.sale}</p>
              <div className="flex mt-5 items-center justify-between">
                <button className="py-1 px-3 bg-blue-600 text-white font-semibold rounded-md">{item.btn}</button>
                <button>
                  <i className="text-blue-500 fa-solid fa-cart-shopping"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full">
        <button className="w-full bg-white py-2 rounded-lg">Ko’proq ko’rish</button>
      </div>
    </div>
  );
}
