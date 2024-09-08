import { Link } from 'react-router-dom';

function Navigation({ data }) {
  console.log(data); // data ni propsdan to'g'ri oling
  
  return (
    <header className='w-full  py-3 shadow-[0_4px_6px_0px_rgba(0,0,0,0.5)]   '>
    <nav className=' flex justify-between w-full max-w-[1230px] mx-auto my-5'>
      <img src={data.logo} alt="Logo" /> {/* data ichidan logo oling */}
      <button className='text-white rounded-md bg-gradient-to-r from-red-600 to-blue-600 px-3 py-1'><i class="fa-solid fa-bars"></i> Katalog</button>
  <div className='border-[rgba(228,231,238,1)] border-2 rounded-md  '>
    <input type="text" placeholder='Enter your text' className='px-2 py-1 outline-none'/>
    <button className='bg-blue-600 rounded-r-md text-white py-1 px-3'><i class="fa-solid fa-magnifying-glass"></i></button>
  </div>
  <button className='bg-gray-200 rounded-md px-2 py-1 text-blue-700'><i class="fa-regular fa-heart"></i></button>
  <button className='bg-gray-200 rounded-md px-2 py-1 text-blue-700'><i class="fa-solid fa-cart-shopping"></i></button>
  <button className='bg-gradient-to-r py-1 px-2 rounded-md from-[rgba(77,94,246,0.2)] to-[rgba(246,77,77,0.2)]'>Kirish</button>
    </nav>
    </header>
  );
}

export default Navigation;
