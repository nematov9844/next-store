import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/header/index.jsx';
import Home from './components/home/index.jsx';
import Blog from './components/blog/index.jsx';
import logo from './assets/logo.svg';
import { useState } from 'react';

function App() {
  const [data, setData] = useState(
    [
    {
      header: {
        logo: logo, // logo to'g'ridan-to'g'ri qiymat sifatida kiritilishi kerak   
      },
      hero:[

      ],
      cards:[
        {}
      ]

    },
  ]);

  return (
    <Router>
      {/* data[0].header ni to'g'ri ishlatib, Navigation komponentiga uzating */}
      <Navigation data={data[0].header} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}


export default App;
