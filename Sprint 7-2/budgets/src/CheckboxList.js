import React from 'react'
import {Button, DisplayBudget, InputNumber} from './Inputs'

export default function CheckboxList(props) {
    React.useEffect(()=>{
        let localStorageWeb = JSON.parse(localStorage.getItem('web'))
        let localStorageSeo = JSON.parse(localStorage.getItem('seo'))
        let localStorageAds = JSON.parse(localStorage.getItem('ads'))
        if (localStorageWeb===true) {
          document.getElementById('web').checked=true
          // Need to use UpdateBudget here so the InputNumber fields show on load
          props.UpdateBudget('web',true)}
        if (localStorageSeo===true) {
          document.getElementById('seo').checked=true}
        if (localStorageAds===true) {
          document.getElementById('ads').checked=true}
        },[]);
      
    return <div>
        <h2>¿Qué quieres hacer?</h2>
        <Button UpdateBudget={props.UpdateBudget} field='web' text=' Una página web (500€)'></Button>
        <InputNumber Budget={props.Budget} UpdateBudget={props.UpdateBudget} field='pages' text='Number of Pages'></InputNumber>
        <InputNumber Budget={props.Budget} UpdateBudget={props.UpdateBudget} field='langs' text='Number of Languages'></InputNumber>
        <Button UpdateBudget={props.UpdateBudget} field='seo' text=' Una consultoría SEO (300€)'></Button>
        <Button UpdateBudget={props.UpdateBudget} field='ads' text=' Una campaña de Google Ads (200€)'></Button>
        <DisplayBudget Budget={props.Budget} UpdateBudget={props.UpdateBudget}/>
    </div>
}