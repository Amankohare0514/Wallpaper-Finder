import React from "react";
import { useState } from "react";
import "./App.css"

function App(){
    const [value , setValue] = useState("");
    const [results , setResults] = useState([])
    const fetchImages=()=>{
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
        <br/>
        <br/>
               <div className="home__header">
                    <div className="home__headerLeft">
                         <p><a href={"https://amankohare.netlify.app/"}>About</a></p>
                    </div>
                    <div className="home__headerRight">
                         <p><a href={"https://github.com/Amankohare0514"}>Github</a></p>
                    </div>
               </div>
               <div className="home__body">
                  
                <div className="home__inputContainer">
                </div>
               </div>
<h1 className="heading">Wallpaper Finder</h1>




{/* input */}
    <div className="mydiv">
    <div class="searchbar">
    <div class="searchbar-wrapper">
        <div class="searchbar-left">
            <div class="search-icon-wrapper">
                <span class="search-icon searchbar-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
                        </path>
                    </svg>
                </span>
            </div>
        </div>

        <div class="searchbar-center">
            <div class="searchbar-input-spacer"></div>

            <input  onChange={(e)=>setValue(e.target.value)}  type="text" class="searchbar-input" maxlength="2090" name="q" autocapitalize="off" autocomplete="off" title="Search" role="combobox" placeholder="Search Wallpaper" />
        </div>

        <div class="searchbar-right">
            <svg class="voice-search" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
<br/>
    {/* button */}   
    <div className="button1">
    <button onClick={()=>fetchImages()} >
  <div class="svg-wrapper-1">
    <div class="svg-wrapper">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
      </svg>
    </div>
  </div>
  <span>View</span>
</button> 
    </div>
    </div>
    <div className="gallery">
            {
                results.map((item)=>{
                    return <img className="item" key={item.id} src={item.urls.regular}/>
                })
            }
    </div>      
    </div>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/><br/><br/><br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/><br/><br/>  
</div>

    );
}
export default App;