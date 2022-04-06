import styled from 'styled-components';
import React from 'react';
import infoPNG from './img/info40.png';



export function Submit({webState, seoState, adsState, pagesNumber, langsNumber, totalPrice, Budget}) {
  let SaveBudget = () => {alert('submited')}
  return <>
    <div><ButtonStyle onClick={e => {SaveBudget()}}>Guardar Presupuesto</ButtonStyle></div>
    <div id='createdBudgets'>
      <h3>Budgets: </h3>
      {Budget.map(e => (<div key={e.totalPrice}>{e.totalPrice}</div>))}
    </div>
  </>
}

export function ClientName() {
  var [clientName, setClientName] = React.useState(() => {
    let saved = localStorage.getItem("clientName");
      if (saved==='undefined') {return 'Cliente 1'} else {return saved};
  })
  localStorage.setItem('clientName',clientName)
  return <p>
    <label for='clientName'>Nombre del cliente </label>
    <input type='text' inputmode='text' id='clientName' name='clientName' defaultValue={localStorage.getItem('clientName')} onChange={e => setClientName(document.getElementById('clientName').value)}/>
  </p>}

export function BudgetName() {
  var [budgetName, setbudgetName] = React.useState(() => {
    let saved = localStorage.getItem("budgetName");
      if (saved==='undefined' || saved==='null') {return 'Presupuesto 1'} else {return saved};
  })
  localStorage.setItem('budgetName',budgetName)
  return <p>
    <label for='budgetName'>Nombre del presupuesto </label>
    <input type='text' inputmode='text' id='budgetName' name='budgetName' defaultValue={localStorage.getItem('budgetName')} onChange={e => setbudgetName(document.getElementById('budgetName').value)}/>
  </p>}

export function PopupInformation(props) {
  let ModalScreen = () => {return <div className='ModalScreen' onClick={() => props.setModalState(false)}><ModalContent></ModalContent></div>}
  let ModalContent = () => {return <div id="Modal" className='ModalContent'>{localStorage.getItem("infoText")}</div>}
  if (props.modalState===true) {
    return <><ModalScreen/></>
  } else {return null}
};

function OpenInfoButton({ setModalState,text }) {
  let OpenInfo = () => {setModalState(true);
    localStorage.setItem('infoText',text)}
  return <>
      <img onClick={OpenInfo} src={infoPNG}/>
  </>
}

export function WebButton({ setWebState,webState }) {
    return <p>
        <input type='checkbox' id='web' name='web' checked={webState} onChange={e => setWebState(document.getElementById('web').checked)}/>
        <label for='web'>Una página web (500€)</label>
    </p>
}
export function SeoButton({ setSeoState,seoState }) {
    return <p>
        <input type='checkbox' id='seo' name='seo' checked={seoState} onChange={e => setSeoState(document.getElementById('seo').checked)}/>
        <label for='seo'>Una consultoría SEO (300€)</label>
    </p>
}
export function AdsButton({ setAdsState,adsState }) {
    return <p>
        <input type='checkbox' id='ads' name='ads' checked={adsState} onChange={e => setAdsState(document.getElementById('ads').checked)}/>
      <label for='ads'>Una campaña de Google Ads (200€)</label>
    </p>
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
        <NumberPages setPagesNumber={props.setPagesNumber} pagesNumber={props.pagesNumber} setModalState={props.setModalState}/>
        <NumberLangs setLangsNumber={props.setLangsNumber} langsNumber={props.langsNumber} setModalState={props.setModalState}/>
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

function NumberPages({ setPagesNumber,setModalState }) {
    var increasePages = function IncreasePages() {setPagesNumber(parseInt(localStorage.getItem('pagesNumber'))+1)};
    var decreasePages = function DecreasePages() {if (localStorage.getItem('pagesNumber')>1) {setPagesNumber(parseInt(localStorage.getItem('pagesNumber'))-1)}}
    return <div>
        <label for='number'>Número de páginas </label>
        <ButtonStyle onClick={decreasePages}>-</ButtonStyle>
        <input type='text' inputmode='numeric' pattern='[0-9]*' id='pages' name='pages' defaultValue={localStorage.getItem('pagesNumber')} onChange={e => setPagesNumber(document.getElementById('pages').value)}/>
        <ButtonStyle onClick={increasePages}>+</ButtonStyle>
        <OpenInfoButton text='Debe indicar el número de páginas que tendrá el sitio web' setModalState={setModalState}/>
    </div>
}

function NumberLangs({ setLangsNumber,setModalState }) {
    var increaseLangs = function IncreaseLangs() {setLangsNumber(parseInt(localStorage.getItem('langsNumber'))+1)}
    var decreaseLangs = function DecreaseLangs() {if (localStorage.getItem('langsNumber')>1) {setLangsNumber(parseInt(localStorage.getItem('langsNumber'))-1)}}
    return <div>
        <label for='number'>Número de idiomas </label>
        <ButtonStyle onClick={decreaseLangs}>-</ButtonStyle>
        <input type='text' inputmode='numeric' pattern='[0-9]*' id='langs' name='langs' defaultValue={localStorage.getItem('langsNumber')} onChange={e => setLangsNumber(document.getElementById('langs').value)}/>
        <ButtonStyle onClick={increaseLangs}>+</ButtonStyle>
        <OpenInfoButton text='Debe indicar a cuantos idiomas estará traducido el sitio web' setModalState={setModalState}/>
    </div>

}