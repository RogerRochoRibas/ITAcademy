import styled from "styled-components";
import React from "react"
import './App.css';

function App() {
  var [webState, setWebState] = React.useState(false)
  var [seoState, setSeoState] = React.useState(false)
  var [adsState, setAdsState] = React.useState(false)
  var [totalPrice, setTotalPrice] = React.useState(0)
  var [pagesNumber, setPagesNumber] = React.useState(1)
  var [languagesNumber, setLanguagesNumber] = React.useState(1)

  React.useEffect(()=>{
    let webPrice=0;let seoPrice=0;let adsPrice=0; let webExtra=0;
    if (webState) {webPrice=500} else {webPrice=0};
    if (webState) {webExtra=pagesNumber*languagesNumber*30} else {webExtra=0};
    if (seoState) {seoPrice=300} else (seoPrice=0);
    if (adsState) {adsPrice=200} else (adsPrice=0);
    setTotalPrice(webPrice+seoPrice+adsPrice+webExtra)
  })
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
          <Button text='+'></Button>
          <input type="text" inputmode="numeric" pattern="[0-9]*" id="pages" name="pages" defaultValue={pagesNumber} onChange={e => setPagesNumber(document.getElementById('pages').value)}></input>
          <Button text='-'></Button>
        </div>
        <div>
          <label for="number">Número de idiomas </label>
          <Button text='+'></Button>
          <input type="text" inputmode="numeric" pattern="[0-9]*" id="languages" name="languages" defaultValue={languagesNumber} onChange={e => setLanguagesNumber(document.getElementById('languages').value)}></input>
          <Button text='-'></Button>
        </div>
      </Panell>
    } else {return []}
  }
  // Exercise 3
  function Button(props) {return <button>{props.text}</button>}

  return (
    <div className="App">
      <p>¿Qué quieres hacer?</p>
      <input type="checkbox" id="web" name="web" onChange={e => setWebState(document.getElementById('web').checked)}></input>
      <label for="web">Una página web (500€)</label><br></br>
      <PanellRender></PanellRender>
      <input type="checkbox" id="seo" name="seo" onChange={e => setSeoState(document.getElementById('seo').checked)}></input>
      <label for="seo">Una consultoría SEO (300€)</label><br></br>
      <input type="checkbox" id="ads" name="ads" onChange={e => setAdsState(document.getElementById('ads').checked)}></input>
      <label for="ads">Una campaña de Google Ads (200€)</label><br></br>
      <p>Total Price: {totalPrice}</p>
    </div>
  );
}

export default App;
