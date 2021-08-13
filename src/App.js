import logo from './assets/google.png';
import './App.css';
import Navbar from './components/Navbar';
import { AiOutlineSearch } from "react-icons/ai";
import { MdKeyboardVoice } from  "react-icons/md";
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [userText,setUserText] = useState();

  const searchInput = (e) => {
    setUserText(e.target.value)
  }

  const redirectToSearch = (e) => {
    if(e.key === 'Enter' || e.type === 'click'){
      if(!userText){
        return '';
      }
      window.location.href = `https://google.com/search?q=${userText}`;
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
        <div className="App-img-container">
          <div className="mt-10 flex justify-center">
            <img src={logo} className="App-img" alt="logo"/>
          </div>
          <div>
            <div className="form-control flex justify-between items-center">
              <AiOutlineSearch className="icon-size text-gray-light"/>
              <input type="search" onChange={searchInput} onKeyPress={redirectToSearch} placeholder="" className="border-none input"/>
              <MdKeyboardVoice className="text-primary icon-size cursor-pointer" title="Search by voice"/>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="btn" onClick={redirectToSearch}>Google Search</button>
            <a href="https://perfects.engineering" className="btn flex items-center">I'm feeling Lucky</a>
          </div>
          <div className="flex justify-center items-center">
            <p className="custom-text-style">Google Offered In:</p>
            <div className="custom-text-style">
              <a href="/" className="px-2">Hausa</a>
              <a href="/" className="px-2">Igbo</a>
              <a href="/" className="px-2">Èdè Yorùbá</a>
              <a href="/" className="px-2">Nigerian Pidgin</a>
            </div>
          </div>
        </div>
        <div className="relative">
          <Footer />
        </div>
    </div>
  );
}

export default App;
