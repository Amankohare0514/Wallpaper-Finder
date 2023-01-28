import React from "react";
import { useState } from "react";
import "./App.css"
import { ImHome , ImSearch} from "react-icons/im";

function App(){
    const [value , setValue] = useState("");
    const [results , setResults] = useState([]);
    const [error , setError]= useState(false);
    
       const fetchImages=()=>{
        if (value.length===  0) {
            setError(true)  
        }
        fetch(`https://api.unsplash.com/search/photos/?client_id=_11L9bcUJeOCRmUNr5GReqO3wkcdeR68xUB0P0XLRbM&query=${value}`)
        .then(res=>res.json())
        .then(data=>{
            //console.log(data);
            setResults(data.results)
        })
    }
    return(
      <div className="aman">
      <div className="Home">
      <ImHome className="iconHome"/>
        <br/>
        <br/>
        <br/>
        <br/> 
<h1 className="heading">Wallpaper Finder</h1>
{/* input */}
    <div className="mydiv">
    <div className="searchbar">
    <div className="searchbar-wrapper">
        <div className="searchbar-left">
            <div className="search-icon-wrapper">
                <span className="search-icon searchbar-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
                        </path>
                    </svg>
                </span>
            </div>
        </div>
        <div className="searchbar-center">
            <div className="searchbar-input-spacer"></div>

            <input  onChange={(e)=>setValue(e.target.value)}  type="text" className="searchbar-input" maxLength="2090" name="q" autoCapitalize="off" autoComplete="off" title="Search" role="combobox" placeholder="Enter Name Of Wallpaper " />
        </div>
        <div className="searchbar-right">
            <svg className="voice-search" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="#4285f4" d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z">
                </path>
                <path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path>
                <path fill="#fbbc05" d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z">
                </path>
                <path fill="#ea4335" d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z">
                </path>
            </svg>
        </div>
    </div>  
</div>  
<div className="meradiv">
{error && value.length <= 0 ?
<label>please type name of Wallpaper!!!</label>  :""}
</div>
<br/>
    {/* button */}   
    <div className="button1">
    <button onClick={()=>fetchImages() } >
  <div className="svg-wrapper-1">
    <div className="svg-wrapper">
    </div>
  </div>
   <ImSearch/>Search Wallpaper
</button>
 
<br/>
    </div>
    </div>
    <h5 className="new5"> <span>Google offered in:</span> हिन्दी বাংলা తెలుగు मराठी தமிழ் ગુજરાતી ಕನ್ನಡ മലയാളം ਪੰਜਾਬੀ </h5>
    <div className="gallery">
            {
                results.map((item)=>{
                    return <img  className="item" key={item.id} src={item.urls.regular} alt="loading..."/>
                })
            }
    </div>   
    </div>
</div>
    );
}
export default App;