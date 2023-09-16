import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from "react";
import { FaDollarSign } from "react-icons/fa";
import Cart from "../Cart/Cart";

const Home = () => {
  const [allLanguage, setAllLanguage] = useState([]);
  const [selectLanguage, setSelectLanguages] = useState([]);
  const [remaining, setRemaining] = useState(20); 
  const [totalHr, setTotalHr] = useState(0);

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setAllLanguage(data));
  }, []);

  const handleSelect = (language) => {
    const isExist = selectLanguage.find((item) => item.id === language.id);

    if (isExist) {
      return toast("You have already added");
    } else {
      let count = parseFloat(language.reading_time);

      if (totalHr + count > 20) {
        return toast("You cannot add more than 20");
      } else {
        setTotalHr(totalHr + count);
        setRemaining(20 - (totalHr + count)); 
        setSelectLanguages([...selectLanguage, language]);
      }
    }
  };

  return (
    <div className="container mt-4">
      <div className="home-container flex">
        <div className="card-container w-auto  gap-4 grid md:grid-cols-3 grid-cols-1 ">
          {allLanguage.map((language) => (
            <div key={language.id} className="card">
              <div className="card w-80 h-[400px] bg-base-100 shadow-xl">
                <figure className="px-4 pt-4">
                  <img src={language.cover} alt="Language Cover" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-black  font-semibold">
                    {language.title}
                  </h2>
                  <p>
                    <small className="text-gray-600">{language.text}</small>
                  </p>
                  <div className="flex justify-between">
                    <div className="flex">
                      <span>
                        <FaDollarSign className="mt-1" />
                      </span>
                      <p>Price: {language.price}</p>
                    </div>
                    <div className="flex">
                      <a href="">
                        <img src="Frame.png" alt="" className="mr-2" />
                      </a>
                      <p>Credit: {language.reading_time} hr</p>
                    </div>
                  </div>
                  <div className="card-actions justify-center mt-2">
                    <button
                      onClick={() => handleSelect(language)}
                      className="bg-[#2f80ed] w-full rounded-lg p-2 text-white"
                    >
                      Select
                    </button>
                    <ToastContainer></ToastContainer>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[275px] h-max bg-base-100 shadow-md ml-5">
        
          <Cart
            selectLanguage={selectLanguage}
            remaining={remaining}
            totalHr={totalHr}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
