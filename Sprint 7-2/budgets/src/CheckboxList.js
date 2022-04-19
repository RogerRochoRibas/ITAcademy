import React from 'react'
import {Button, DisplayBudget, InputNumber} from './Inputs'

export default function CheckboxList(props) {
    React.useEffect(()=>{
        localStorage.setItem('web',props.Budget.web)
        localStorage.setItem('seo',props.Budget.seo)
        localStorage.setItem('ads',props.Budget.ads)
        localStorage.setItem('pages',props.Budget.pages)
        localStorage.setItem('langs',props.Budget.langs)
      },[[props.Budget]]);
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