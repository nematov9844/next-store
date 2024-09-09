import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/header/index.jsx';
import Home from './components/home/index.jsx';
import Blog from './components/blog/index.jsx';
import logo from './assets/logo.svg';
import { useState } from 'react';
import HeroCarousel from './components/hero/index.jsx';
import Catogory from './components/category/index.jsx';
import BestSell from './components/bestSell/index.jsx';
import Main from './components/main/index.jsx';



function App() {
  const [data, setData] = useState(
    [
      {
        header: {
          logo: logo, // logo to'g'ridan-to'g'ri qiymat sifatida kiritilishi kerak   
        },
        hero: {
          id: Date.now(),
          img: "./src/assets/hero.svg",
          btnLeft: `<i class="fa-solid fa-chevron-left" style="color: #000000;"></i>`,
          btnRight: `<i class="fa-solid fa-chevron-left fa-rotate-180" style="color: #000000;"></i>`,
        },
  
        categories: [
          {
            id: Date.now(),
            img: "./src/assets/iphone14.svg",
            title: "Smartfonlar",
          },
  
          {
            id: Date.now(),
            img: "./src/assets/macbook.svg",
            title: "Kompyuterlar va notebooklar",
          },
  
          {
            id: Date.now(),
            img: "./src/assets/monitor.svg",
            title: "Televizorlar",
          },
  
          {
            id: Date.now(),
            img: "./src/assets/Iwatch.svg",
            title: "Aqilli soatlar",
          },
  
          {
            id: Date.now(),
            img: "./src/assets/airpods.svg",
            title: "Quloqchinlar",
          },
  
          {
            id: Date.now(),
            img: "./src/assets/konditsioner.svg",
            title: "Konditsioner",
          },
  
          {
            id: Date.now(),
            img: "./src/assets/haladelnek.svg",
            title: "Sovutkichlar",
          },
  
          {
            id: Date.now(),
            img: "./src/assets/kirmashina.svg",
            title: "Kir yuvish mashinalari",
          },
        ],
  
        bestSell: [
          {
            id: Date.now(),
            img: "./src/assets/macbookBSeller.svg",
            price: "299 000 so'm",
            discription: "Apple Airpods Pro simsiz quloqchin , Oq rangda",
            sale: "1230 ta buyurtma",
            btn: "Sotib olish",
            cart: `<i class="fa-solid fa-cart-shopping" style="color: #6c757d;"></i>`,
            like:false,
          },
  
          {
            id: Date.now(),
            img: "./src/assets/macbookBSeller.svg",
            topSale: "Top sale",
            price: "16 114 285 so'm",
            discription:
              "Apple Macbook Pro 13 2.4 2019 Intel core i5 DDR3 8 GB SSD 256 GB",
            sale: "230 ta buyurtma",
            like:false,
            btn: "Sotib olish",
            cart: `<i class="fa-solid fa-cart-shopping" style="color: #6c757d;"></i>`,
          },
  
          {
            id: Date.now(),
            img: "./src/assets/macbookBSeller.svg",
            news: "Yangilik",
            price: "4 234 000 so'm",
            discription: "Apple watch 4 ",
            like:false,
            sale: "543 ta buyurtma",
            btn: "Sotib olish",
            cart: `<i class="fa-solid fa-cart-shopping" style="color: #6c757d;"></i>`,
          },
  
          {
            id: Date.now(),
            img: "./src/assets/macbookBSeller.svg",
            price: "1 340 000 so'm",
            discription: "Robot - tozalagich Xiaomi Mi Robot",
            sale: "876 ta buyurtma",
            btn: "Sotib olish",
            cart: `<i class="fa-solid fa-cart-shopping" style="color: #6c757d;"></i>`,
            like:false,
          },
  
          {
            id: Date.now() ,
            img: "./src/assets/macbookBSeller.svg",
            news: "Yangilik",
            price: "1 345 000 so'm",
            discription: "Oynali Fotoaparat Canon EOS 6D Body",
            sale: "565 ta buyurtma",
            btn: "Sotib olish",
            cart: `<i class="fa-solid fa-cart-shopping" style="color: #6c757d;"></i>`,
            like:false,
          },
  
          {
            id: Date.now() ,
            img: "./src/assets/macbookBSeller.svg",
            news: "Yangilik",
            price: "299 000 so'm",
            discription: "Apple Airpods Pro simsiz quloqchin , Oq rangda",
            sale: "1230 ta buyurtma",
            btn: "Sotib olish",
            cart: `<i class="fa-solid fa-cart-shopping" style="color: #6c757d;"></i>`,
            like:false,
          },
  
          {
            id: Date.now(),
            img: "./src/assets/macbookBSeller.svg",
            price: "16 114 285 so'm",
            discription:
              "Apple Macbook Pro 13 2.4 2019 Intel core i5 DDR3 8 GB SSD 256 GB",
            sale: "230 ta buyurtma",
            btn: "Sotib olish",
            cart: `<i class="fa-solid fa-cart-shopping" style="color: #6c757d;"></i>`,
            like:false,
          },
  
          {
            id: Date.now(),
            img: "./src/assets/macbookBSeller.svg",
            price: "4 234 000 so'm",
            discription: "Apple watch 4 ",
            sale: "543 ta buyurtma",
            btn: "Sotib olish",
            cart: `<i class="fa-solid fa-cart-shopping" style="color: #6c757d;"></i>`,
            like:false,
          },
  
          {
            id: Date.now(),
            img: "./src/assets/macbookBSeller.svg",
            topSale: "Top sale",
            price: "1 340 000 so'm",
            discription: "Robot - tozalagich Xiaomi Mi Robot",
            sale: "876 ta buyurtma",
            btn: "Sotib olish",
            cart: `<i class="fa-solid fa-cart-shopping" style="color: #6c757d;"></i>`,
            like:false,
          },
  
          {
            id: Date.now() ,
            img: "./src/assets/macbookBSeller.svg",
            price: "1 345 000 so'm",
            discription: "Oynali Fotoaparat Canon EOS 6D Body",
            sale: "565 ta buyurtma",
            btn: "Sotib olish",
            cart: `<i class="fa-solid fa-cart-shopping" style="color: #6c757d;"></i>`,
            like:false,
          },
        ],
  
        domVasheyBanner: {
          id: Date.now(),
          img: "./src/assets/domVasheyBanner.svg",
          btnLeft: `<i class="fa-solid fa-chevron-left" style="color: #000000;"></i>`,
          btnRight: `<i class="fa-solid fa-chevron-left fa-rotate-180" style="color: #000000;"></i>`,
        },
  
        popular: [
          {
            id: Date.now(),
            img: "./assets/macbookBSeller.svg",
            like: `<i class="fa-regular fa-heart" style="color: #74C0FC;"></i>`,
            price: "299 000 so'm",
            discription: "Apple Airpods Pro simsiz quloqchin , Oq rangda",
            sale: "1230 ta buyurtma",
            btn: "Sotib olish",
            cart: `<i class="fa-solid fa-cart-shopping" style="color: #6c757d;"></i>`,
          },
  
          {
            id: Date.now(),
            img: "./assets/macbookBSeller.svg",
            like: `<i class="fa-regular fa-heart" style="color: #74C0FC;"></i>`,
            price: "16 114 285 so'm",
            discription:
              "Apple Macbook Pro 13 2.4 2019 Intel core i5 DDR3 8 GB SSD 256 GB",
            sale: "230 ta buyurtma",
            btn: "Sotib olish",
            cart: `<i class="fa-solid fa-cart-shopping" style="color: #6c757d;"></i>`,
          },
  
          {
            id: Date.now(),
            img: "./assets/macbookBSeller.svg",
            like: `<i class="fa-regular fa-heart" style="color: #74C0FC;"></i>`,
            price: "4 234 000 so'm",
            discription: "Apple watch 4 ",
            sale: "543 ta buyurtma",
            btn: "Sotib olish",
            cart: `<i class="fa-solid fa-cart-shopping" style="color: #6c757d;"></i>`,
          },
  
          {
            id: Date.now(),
            img: "./assets/macbookBSeller.svg",
            like: `<i class="fa-regular fa-heart" style="color: #74C0FC;"></i>`,
            price: "1 340 000 so'm",
            discription: "Robot - tozalagich Xiaomi Mi Robot",
            sale: "876 ta buyurtma",
            btn: "Sotib olish",
            cart: `<i class="fa-solid fa-cart-shopping" style="color: #6c757d;"></i>`,
          },
  
          {
            id: Date.now(),
            img: "./assets/macbookBSeller.svg",
            like: `<i class="fa-regular fa-heart" style="color: #74C0FC;"></i>`,
            price: "1 345 000 so'm",
            discription: "Oynali Fotoaparat Canon EOS 6D Body",
            sale: "565 ta buyurtma",
            btn: "Sotib olish",
            cart: `<i class="fa-solid fa-cart-shopping" style="color: #6c757d;"></i>`,
          },
  
          {
            id: Date.now(),
            img: "./assets/macbookBSeller.svg",
            like: `<i class="fa-regular fa-heart" style="color: #74C0FC;"></i>`,
            price: "299 000 so'm",
            discription: "Apple Airpods Pro simsiz quloqchin , Oq rangda",
            sale: "1230 ta buyurtma",
            btn: "Sotib olish",
            cart: `<i class="fa-solid fa-cart-shopping" style="color: #6c757d;"></i>`,
          },
  
          {
            id: Date.now(),
            img: "./assets/macbookBSeller.svg",
            like: `<i class="fa-regular fa-heart" style="color: #74C0FC;"></i>`,
            price: "16 114 285 so'm",
            discription:
              "Apple Macbook Pro 13 2.4 2019 Intel core i5 DDR3 8 GB SSD 256 GB",
            sale: "230 ta buyurtma",
            btn: "Sotib olish",
            cart: `<i class="fa-solid fa-cart-shopping" style="color: #6c757d;"></i>`,
          },
  
          {
            id: Date.now(),
            img: "./assets/macbookBSeller.svg",
            like: `<i class="fa-regular fa-heart" style="color: #74C0FC;"></i>`,
            price: "4 234 000 so'm",
            discription: "Apple watch 4 ",
            sale: "543 ta buyurtma",
            btn: "Sotib olish",
            cart: `<i class="fa-solid fa-cart-shopping" style="color: #6c757d;"></i>`,
          },
  
          {
            id: Date.now(),
            img: "./assets/macbookBSeller.svg",
            like: `<i class="fa-regular fa-heart" style="color: #74C0FC;"></i>`,
            price: "1 340 000 so'm",
            discription: "Robot - tozalagich Xiaomi Mi Robot",
            sale: "876 ta buyurtma",
            btn: "Sotib olish",
            cart: `<i class="fa-solid fa-cart-shopping" style="color: #6c757d;"></i>`,
          },
  
          {
            id: Date.now(),
            img: "./assets/macbookBSeller.svg",
            like: `<i class="fa-regular fa-heart" style="color: #74C0FC;"></i>`,
            price: "1 345 000 so'm",
            discription: "Oynali Fotoaparat Canon EOS 6D Body",
            sale: "565 ta buyurtma",
            btn: "Sotib olish",
            cart: `<i class="fa-solid fa-cart-shopping" style="color: #6c757d;"></i>`,
          },
        ],
      },
    ]
  );

  return (
    <Router>
      <div className='w-full max-w-[1280px] mx-auto'>
        <Navigation data={data[0].header} />
<HeroCarousel props={data[0].hero.img}/>
<Catogory props={data[0].categories}/>
<BestSell props={data[0].bestSell}/>
<Main props={data[0].domVasheyBanner}/>
        <Routes>
          <Route path="/" element={<Home data={data[0]} />} />
          <Route path="/blog" element={<Blog data={data[0]} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
