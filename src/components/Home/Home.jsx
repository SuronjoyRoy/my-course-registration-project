
import { useState } from "react";
import { useEffect } from "react";
import { FaDollarSign} from 'react-icons/fa';
import Cart from "../Cart/Cart";


const Home = () => {
    
    const [allLanguage, setAllLanguage] = useState([])
    const [selectLanguages, setSelectLanguages] = useState([])
    useEffect(() =>{
        fetch('data.json')
        .then(response => response.json())
        .then(data => setAllLanguage(data))
    },[])
    const handelSelect = (language) =>{
        const isExist = selectLanguages.find(item => item.id ==language.id)
        let count = language.reading_time
        if(isExist){
            return(
                alert('Just One Click')
                
            )
        }
        else{
            selectLanguages.forEach((item) => {
                count = count  + item.reading_time
            })
            console.log(count)
            setSelectLanguages([...selectLanguages, language])

        }
    
    }

    return (
        <div className="container mt-4">
            <div className="home-container flex">
                <div className="card-container w-auto  gap-4 grid md:grid-cols-3 grid-cols-1 " >
                {
                    
                    allLanguage.map((language) =>(

                <div key={language.id} className="card">
                    
                <div className="card w-80 h-[400px] bg-base-100 shadow-xl">
                <figure className="px-4 pt-4">
                <img src={language.cover}  />
                </figure>
                <div className="card-body">
                <h2 className="card-title text-black  font-semibold">{language.title}</h2>
                <p><small className="text-gray-600">{language.text}</small></p>
                <div className="flex justify-between">
                
                <div className="flex">
                <span><FaDollarSign className="mt-1"></FaDollarSign></span> 
                <p >Price: {language.price}</p>
                </div>
                <div className="flex">
                    <a href=""><img src="Frame.png" alt="" className="mr-2" /></a>
                <p>Credit: {language.reading_time} hr</p>
                </div>
                </div>
                <div className="card-actions justify-center mt-2">
                <button onClick={() =>handelSelect(language)} className="bg-yellow-900 px-10 p-2 text-white">Select</button>
                </div>
                </div>
                </div>
                </div>
                    ))
                }
                </div>
                <div className=" w-[275px] h-max bg-base-100 shadow-md ml-5">
                    <Cart selectLanguages = {selectLanguages}></Cart>

                </div>
            </div>
        </div>
    );
};

export default Home;