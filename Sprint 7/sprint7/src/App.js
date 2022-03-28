import styled from "styled-components";
import React from "react"
import './App.css';
import {WebButton} from "./components/buttons";
import {SeoButton} from "./components/buttons";
import {AdsButton} from "./components/buttons";
import {TotalPrice} from "./components/buttons";
import {PanellRender} from "./components/buttons";

function App() {
  var [webState, setWebState] = React.useState(() => {
    let saved = localStorage.getItem("webState");
    // If the checkbox was true in local storage, then keep true, if there is not local storage or it was false, then keep false
    if (saved==='true') {return true} else {return false};
  })
  var [seoState, setSeoState] = React.useState(() => {
    let saved = localStorage.getItem("seoState");
    if (saved==='true') {return true} else {return false};
  })
  var [adsState, setAdsState] = React.useState(() => {
    let saved = localStorage.getItem("adsState");
    if (saved==='true') {return true} else {return false};
  })
var [totalPrice, setTotalPrice] = React.useState(0)
  React.useEffect(()=>{
    let webPrice=0;let seoPrice=0;let adsPrice=0; let webExtra=0;
    if (webState) {webPrice=500} else {webPrice=0};
    if (webState) {webExtra=pagesNumber*langsNumber*30} else {webExtra=0};
    if (seoState) {seoPrice=300} else (seoPrice=0);
    if (adsState) {adsPrice=200} else (adsPrice=0);
    setTotalPrice(webPrice+seoPrice+adsPrice+webExtra)
    //Exercise 4 Local Storage
    localStorage.setItem('webState',webState)
    localStorage.setItem('seoState',seoState)
    localStorage.setItem('adsState',adsState)
    localStorage.setItem('pagesNumber',pagesNumber)
    localStorage.setItem('langsNumber',langsNumber)
  },[[webState, seoState, adsState, pagesNumber, langsNumber]])

  return (
    <div className="App">
      <p>¿Qué quieres hacer?</p>
      <WebButton setWebState={setWebState}></WebButton>
      <PanellRender></PanellRender>
      <SeoButton setSeoState={setSeoState}></SeoButton>
      <AdsButton setAdsState={setAdsState}></AdsButton>
      <TotalPrice></TotalPrice>
    </div>
  );
}

export default App;
