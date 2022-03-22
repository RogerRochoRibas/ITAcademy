import './App.css';
import React from "react"

function App() {
  var [webState, setWebState] = React.useState(false)
  var [seoState, setSeoState] = React.useState(false)
  var [adsState, setAdsState] = React.useState(false)
  var [totalPrice, setTotalPrice] = React.useState(0)

  React.useEffect(()=>{
    let webPrice=0;let seoPrice=0;let adsPrice=0;
    if (webState) {webPrice=500} else {webPrice=0};
    if (seoState) {seoPrice=300} else (seoPrice=0);
    if (adsState) {adsPrice=200} else (adsPrice=0);
    setTotalPrice(webPrice+seoPrice+adsPrice)
  })
  return (
    <div className="App">
      <p>¿Qué quieres hacer?</p>
      <input type="checkbox" id="web" name="web" value="web" onChange={e => setWebState(document.getElementById('web').checked)}></input>
      <label for="web">Una página web (500€)</label><br></br>
      <input type="checkbox" id="seo" name="seo" value="seo" onChange={e => setSeoState(document.getElementById('seo').checked)}></input>
      <label for="seo">Una consultoría SEO (300€)</label><br></br>
      <input type="checkbox" id="ads" name="ads" value="ads" onChange={e => setAdsState(document.getElementById('ads').checked)}></input>
      <label for="ads">Una campaña de Google Ads (200€)</label><br></br>
      <p>Total Price: {totalPrice}</p>
    </div>
  );
}

export default App;
