import { useState } from "react";
import Nav from "./components/nav/Nav";
import FlexCard from "./components/cards/FlexCard";
import { cloud, dark } from "./assets";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
 
  return (
    <main className="w-full h-screen lg:px-20 py-4 px-4">
      <Nav setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
      <FlexCard isDarkMode={isDarkMode} />

      <div className="w-full h-screen  fixed -z-40 left-0 top-0">
        <img
          src={isDarkMode ? dark : cloud}
          className=" w-full h-full object-cover"
          alt=""
        />
      </div>
      <ToastContainer />
    </main>
  );
}

export default App;
