import React from "react"
import {WebButton, SeoButton, AdsButton, TotalPrice, PanellRender, ButtonStyle} from "./buttons";
import {Link} from 'react-router-dom';

export default function Calculator() {
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
  var [pagesNumber, setPagesNumber] = React.useState(() => {
    let saved = localStorage.getItem("pagesNumber");
    // If there is no local storage, then default to 1 (it was false when we had no local storage)
    if (saved==='false') {
      return 1} else {
      return saved};
  })
  var [langsNumber, setLangsNumber] = React.useState(() => {
    let saved = localStorage.getItem("langsNumber");
    // If there is no local storage, then default to 1 (it was undefined when we have no local storage)
    if (saved==='undefined') {
      return 1} else {
      return saved};
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
    },[[webState, seoState, adsState, pagesNumber, langsNumber]]);
    
  return <div className="App">
    <p>¿Qué quieres hacer?</p>
    <WebButton setWebState={setWebState} webState={webState}></WebButton>
    <PanellRender webState={webState} setPagesNumber={setPagesNumber} pagesNumber={pagesNumber} setLangsNumber={setLangsNumber} langsNumber={langsNumber}></PanellRender>
    <SeoButton setSeoState={setSeoState} seoState={seoState}></SeoButton>
    <AdsButton setAdsState={setAdsState} adsState={adsState}></AdsButton>
    <TotalPrice webState={webState} seoState={seoState} adsState={adsState} pagesNumber={pagesNumber} langsNumber={langsNumber} totalPrice={totalPrice}></TotalPrice>
    <ButtonStyle><Link to='/'>Back</Link></ButtonStyle>
    </div>
}