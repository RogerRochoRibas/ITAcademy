import styled from "styled-components";
import React from "react"


export function WebButton({ setWebState }) {
    return <div>
        <input type="checkbox" id="web" name="web" checked={webState} onChange={e => setWebState(document.getElementById('web').checked)}></input>
        <label for="web">Una página web (500€)</label>
        <br></br>
    </div>
}
export function SeoButton({ setSeoState }) {
    return <div>
        <input type="checkbox" id="seo" name="seo" checked={seoState} onChange={e => setSeoState(document.getElementById('seo').checked)}></input>
        <label for="seo">Una consultoría SEO (300€)</label>
        <br></br>
    </div>
}
export function AdsButton({ setAdsState }) {
    return <div>
        <input type="checkbox" id="ads" name="ads" checked={adsState} onChange={e => setAdsState(document.getElementById('ads').checked)}></input>
      <label for="ads">Una campaña de Google Ads (200€)</label>
      <br></br>
    </div>
}
export function TotalPrice() {
    return <p>Total Price: {totalPrice}</p>
}

//Exercise 2
export function PanellRender() {
    const Panell = styled.div`
    border:2px solid black;
    border-radius: 20px;
    padding:5px;
    margin:auto;
    width:700px;
    `
    if (webState) {
      return <Panell>
        <NumberPages setLangsNumber={setLangsNumber}></NumberPages>
        <NumberLangs setPagesNumber={setPagesNumber}></NumberLangs>
      </Panell>
    } else {return []}
}

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
    margin:3px;`

function NumberPages({ setPagesNumber }) {
    var [pagesNumber, setPagesNumber] = React.useState(() => {
        let saved = localStorage.getItem("pagesNumber");
        // If there is no local storage, then default to 1 (it was false when we had no local storage)
        if (saved==='false') {
            return 1} else {
            return saved};
    })
    return <div>
        <label for="number">Número de páginas </label>
        <ButtonStyle onClick={DecreasePages}>-</ButtonStyle>
        <input type="text" inputmode="numeric" pattern="[0-9]*" id="pages" name="pages" defaultValue={pagesNumber} onChange={e => setPagesNumber(document.getElementById('pages').value)}></input>
        <ButtonStyle onClick={IncreasePages}>+</ButtonStyle>
  </div>
}

function NumberLangs({ setLangsNumber }) {
    var [langsNumber, setLangsNumber] = React.useState(() => {
        let saved = localStorage.getItem("langsNumber");
        // If there is no local storage, then default to 1 (it was undefined when we have no local storage)
        if (saved==='undefined') {
            return 1} else {
            return saved};
    })
    return <div>
        <label for="number">Número de idiomas </label>
        <ButtonStyle onClick={DecreaseLangs}>-</ButtonStyle>
        <input type="text" inputmode="numeric" pattern="[0-9]*" id="langs" name="langs" defaultValue={langsNumber} onChange={e => setLangsNumber(document.getElementById('langs').value)}></input>
        <ButtonStyle onClick={IncreaseLangs}>+</ButtonStyle>
    </div>
}


function IncreasePages() {
    setPagesNumber(parseInt(pagesNumber)+1)
}
function IncreaseLangs() {
    setLangsNumber(parseInt(langsNumber)+1)
}
function DecreasePages() {
    if (pagesNumber>1) {
        setPagesNumber(pagesNumber-1)
    }
}
function DecreaseLangs() {
    if (langsNumber>1) {
        setLangsNumber(langsNumber-1)
    }
}