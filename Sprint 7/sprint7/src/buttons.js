import styled from 'styled-components';
import React from 'react';
import 'reactjs-popup/dist/index.css';
import infoPNG from './img/info40.png';

function PopupInformation(props) {
  var modal = document.getElementsByClassName("ModalScreen");
  function ShowPopup() {
    modal.style.display = "block";
  }
  const ModalScreen = styled.div`
    display: none;
    position: fixed;
    padding-top: 100px; 
    left: 0;
    top: 0;
    width: 100%;
    height: 100%; 
    overflow: auto; 
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.4);
  `
  const ModalContent = styled.div`
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
  `
  return <><img src={infoPNG} onClick={ShowPopup}/>
    <ModalScreen className='ModalScreen'><ModalContent>{props.text}</ModalContent></ModalScreen>
    </>
};

export function WebButton({ setWebState,webState }) {
    return <>
        <input type='checkbox' id='web' name='web' checked={webState} onChange={e => setWebState(document.getElementById('web').checked)}></input>
        <label for='web'>Una página web (500€)</label>
        <br></br>
    </>
}
export function SeoButton({ setSeoState,seoState }) {
    return <>
        <input type='checkbox' id='seo' name='seo' checked={seoState} onChange={e => setSeoState(document.getElementById('seo').checked)}></input>
        <label for='seo'>Una consultoría SEO (300€)</label>
        <br></br>
    </>
}
export function AdsButton({ setAdsState,adsState }) {
    return <>
        <input type='checkbox' id='ads' name='ads' checked={adsState} onChange={e => setAdsState(document.getElementById('ads').checked)}></input>
      <label for='ads'>Una campaña de Google Ads (200€)</label>
      <br></br>
    </>
}
export function TotalPrice(props) {
    var [totalPrice, setTotalPrice] = React.useState(0)
  React.useEffect(()=>{
    let webPrice=0;let seoPrice=0;let adsPrice=0; let webExtra=0;
    if (props.webState) {webPrice=500} else {webPrice=0};
    if (props.webState) {webExtra=props.pagesNumber*props.langsNumber*30} else {webExtra=0};
    if (props.seoState) {seoPrice=300} else (seoPrice=0);
    if (props.adsState) {adsPrice=200} else (adsPrice=0);
    setTotalPrice(webPrice+seoPrice+adsPrice+webExtra)
    //Exercise 4 Local Storage
    localStorage.setItem('webState',props.webState)
    localStorage.setItem('seoState',props.seoState)
    localStorage.setItem('adsState',props.adsState)
    localStorage.setItem('pagesNumber',props.pagesNumber)
    localStorage.setItem('langsNumber',props.langsNumber)
  },[props.webState,props.seoState,props.adsState,props.pagesNumber,props.langsNumber])
    return <p>Total Price: {totalPrice}</p>
}

//Exercise 2
export function PanellRender(props) {
    const Panell = styled.div`
    border:2px solid black;
    border-radius: 20px;
    padding:5px;
    margin:auto;
    width:700px;
    `
    if (props.webState) {
      return <Panell>
        <NumberPages setPagesNumber={props.setPagesNumber} pagesNumber={props.pagesNumber}></NumberPages>
        <NumberLangs setLangsNumber={props.setLangsNumber} langsNumber={props.langsNumber}></NumberLangs>
      </Panell>
    } else {return []}
}

export const ButtonStyle = styled.button`
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

function NumberPages({ setPagesNumber },props) {
    var increasePages = function IncreasePages() {setPagesNumber(parseInt(localStorage.getItem('pagesNumber'))+1)};
    var decreasePages = function DecreasePages() {if (localStorage.getItem('pagesNumber')>1) {setPagesNumber(parseInt(localStorage.getItem('pagesNumber'))-1)}}
    return <div>
        <label for='number'>Número de páginas </label>
        <ButtonStyle onClick={decreasePages}>-</ButtonStyle>
        <input type='text' inputmode='numeric' pattern='[0-9]*' id='pages' name='pages' defaultValue={localStorage.getItem('pagesNumber')} onChange={e => setPagesNumber(document.getElementById('pages').value)}></input>
        <ButtonStyle onClick={increasePages}>+</ButtonStyle>
        <PopupInformation text='En este campo debe introducir el número de páginas que tendrá el sitio web.'/>
    </div>
}

function NumberLangs({ setLangsNumber },props) {
    var increaseLangs = function IncreaseLangs() {setLangsNumber(parseInt(localStorage.getItem('langsNumber'))+1)}
    var decreaseLangs = function DecreaseLangs() {if (localStorage.getItem('langsNumber')>1) {setLangsNumber(parseInt(localStorage.getItem('langsNumber'))-1)}}
    return <>
        <label for='number'>Número de idiomas </label>
        <ButtonStyle onClick={decreaseLangs}>-</ButtonStyle>
        <input type='text' inputmode='numeric' pattern='[0-9]*' id='langs' name='langs' defaultValue={localStorage.getItem('langsNumber')} onChange={e => setLangsNumber(document.getElementById('langs').value)}></input>
        <ButtonStyle onClick={increaseLangs}>+</ButtonStyle>
        <PopupInformation text='En este campo debe introducir el número de idiomas a los que estará traducido el sitio web.'/>
    </>

}