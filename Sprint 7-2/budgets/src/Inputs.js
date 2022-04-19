import styled from 'styled-components';

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
    margin:4px;`

export function Button(props) {
    return <p>
        <input type='checkbox' id={props.field} name={props.field} onChange={e => props.UpdateBudget(props.field,document.getElementById(props.field).checked)}/>
        <label for={props.field}>{props.text}</label>
    </p>
}

export function InputNumber(props) {
    let oldNumber = props.Budget[props.field]
    if (props.Budget['web']) {
        return <div>
            <label for={props.field}>{props.text} </label><br></br>
            <ButtonStyle onClick={e => props.UpdateBudget(props.field,oldNumber-1)}>-</ButtonStyle>
            <input type='text' inputMode='numeric' id={props.field} name={props.field} value={props.Budget[props.field]} onChange={e => props.UpdateBudget(props.field,e.target.value)}/>
            <ButtonStyle onClick={e => props.UpdateBudget(props.field,oldNumber+1)}>+</ButtonStyle>
        </div>
    }
}

export function DisplayBudget(props) {
    return <div>
        <p>Total Price: {props.Budget['total']}</p>
    </div>
}