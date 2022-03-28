import styled from "styled-components";
import React from "react"
import './App.css';

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
  // Exercise 2
  function PanellRender() {
    const Panell = styled.div`
    border:2px solid black;
    border-radius: 20px;
    padding:5px;
    margin:auto;
    width:700px;
    `
    if (webState) {
      return <Panell>
        <div>
          <label for="number">Número de páginas </label>
          <DecreasePagesButton text='-'></DecreasePagesButton>
          <input type="text" inputmode="numeric" pattern="[0-9]*" id="pages" name="pages" defaultValue={pagesNumber} onChange={e => setPagesNumber(document.getElementById('pages').value)}></input>
          <IncreasePagesButton text='+'></IncreasePagesButton>
        </div>
        <div>
          <label for="number">Número de idiomas </label>
          <DecreaseLangsButton text='-'></DecreaseLangsButton>
          <input type="text" inputmode="numeric" pattern="[0-9]*" id="langs" name="langs" defaultValue={langsNumber} onChange={e => setLangsNumber(document.getElementById('langs').value)}></input>
          <IncreaseLangsButton text='+'></IncreaseLangsButton>
        </div>
      </Panell>
    } else {return []}
  }
  // Exercise 3
  const ButtonStyle = styled.button`
    background: #FF4742;
    border: 1px solid #FF4742;
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
    box-sizing: border-box;
    color: #FFFFFF;
    cursor: pointer;
    display: inline-block;
    font-size: 16px;
    font-weight: 800;
    line-height: 10px;
    outline: 0;
    padding: 10px 12px;
    text-align: center;
    vertical-align: middle;
    margin:3px
  `
  function IncreasePagesButton(props) {return <ButtonStyle onClick={IncreasePages}>{props.text}</ButtonStyle>}
  function IncreaseLangsButton(props) {return <ButtonStyle onClick={IncreaseLangs}>{props.text}</ButtonStyle>}
  function DecreasePagesButton(props) {return <ButtonStyle onClick={DecreasePages}>{props.text}</ButtonStyle>}
  function DecreaseLangsButton(props) {return <ButtonStyle onClick={DecreaseLangs}>{props.text}</ButtonStyle>}

  function IncreasePages() {
    setPagesNumber(parseInt(pagesNumber)+1)
  }
  function IncreaseLangs() {
    setLangsNumber(parseInt(langsNumber)+1)
  }
  function DecreasePages() {
    if (pagesNumber>1){
    setPagesNumber(pagesNumber-1)}
  }
  function DecreaseLangs() {
    if (langsNumber>1){
    setLangsNumber(langsNumber-1)}
  }
  console.log('webState: ',webState)
  console.log('seoState: ',seoState)
  console.log('adsState: ',adsState)
  return (
    <div className="App">
      <p>¿Qué quieres hacer?</p>
      <input type="checkbox" id="web" name="web" checked={webState} onChange={e => setWebState(document.getElementById('web').checked)}></input>
      <label for="web">Una página web (500€)</label><br></br>
      <PanellRender></PanellRender>
      <input type="checkbox" id="seo" name="seo" checked={seoState} onChange={e => setSeoState(document.getElementById('seo').checked)}></input>
      <label for="seo">Una consultoría SEO (300€)</label><br></br>
      <input type="checkbox" id="ads" name="ads" checked={adsState} onChange={e => setAdsState(document.getElementById('ads').checked)}></input>
      <label for="ads">Una campaña de Google Ads (200€)</label><br></br>
      <p>Total Price: {totalPrice}</p>
    </div>
  );
}

export default App;
