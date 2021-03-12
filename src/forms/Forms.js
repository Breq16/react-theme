import React, { Fragment } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

import style from "./Forms.module.scss"

export function Form(props) {
    return (
        <form className={`${style.form} ${props.className || ""}`} style={props.style} onSubmit={props.onSubmit || ((e) => {e.preventDefault()})} onChange={props.onChange || (() => {})}>
            {props.children}
        </form>
    )
}

export function FormGrid(props) {
    return (
        <div className={`${style.formGrid} ${props.className || ""}`}>
            {props.children}
        </div>
    )
}

export function Input(props) {
    return <input className={`${style.input} ${props.className || ""}`} style={props.style} name={props.name} type={props.type || "text"} value={props.value} disabled={props.disabled} onChange={(e) => (props.onChange(e.target.value))} />
}

export function Dropdown(props) {
    const options = Object.entries(props.options).map(([value, name]) => <option value={value} key={value}>{name}</option>)

    return (
        <div className={`${style.dropdownWrapper} ${props.className || ""}`} style={props.style}>
            <select className={style.dropdown} name={props.name} value={props.value} onChange={(e) => (props.onChange(e.target.value))}>
                {options}
            </select>
            <div className={style.dropdownIcon}>
                <FontAwesomeIcon icon={faChevronDown} />
            </div>
        </div>
    )
}

export function Button(props) {
    return (
        <button className={`${style.button} ${props.className || ""}`} style={props.style} onClick={props.onClick}>{props.children}</button>
    )
}

export function ButtonGroup(props) {
    return (
        <div className={`${style.buttonGroup} ${props.className || ""}`} style={props.style}>
            {props.children}
        </div>
    )
}

export function TextArea(props) {
    return (
        <textarea className={`${style.textArea} ${props.className || ""}`} style={props.style} name={props.name} onChange={(e) => props.onChange(e.target.value)} value={props.value} />
    )
}

export function wrapLabel(Component) {
    return (props) => (
        <>
            <label className={`${style.label} ${props.className || ""}`} style={props.style}>{props.label}</label>
            <Component {...props} />
        </>
    )
}

const LabelInput = wrapLabel(Input);
const LabelDropdown = wrapLabel(Dropdown);
const LabelTextArea = wrapLabel(TextArea);
export { LabelInput, LabelDropdown, LabelTextArea }