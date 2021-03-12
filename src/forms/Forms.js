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
        <div className={style.formGrid}>
            {props.children}
        </div>
    )
}

export function Input(props) {
    return <input className={style.input} name={props.name} type={props.type || "text"} value={props.value} onChange={(e) => (props.onChange(e.target.value))} />
}

export function Dropdown(props) {
    const options = Object.entries(props.options).map(([value, name]) => <option value={value}>{name}</option>)

    return (
        <div className={style.dropdownWrapper}>
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
        <button className={style.button} onClick={props.onClick}>{props.children}</button>
    )
}

export function ButtonGroup(props) {
    return (
        <div className={style.buttonGroup}>
            {props.children}
        </div>
    )
}

export function TextArea(props) {
    return (
        <textarea className={style.textArea} name={props.name} onChange={(e) => props.onChange(e.target.value)}>
            {props.value}
        </textarea>
    )
}

export function wrapLabel(Component) {
    return (props) => (
        <>
            <label className={style.label}>{props.label}</label>
            <Component {...props} />
        </>
    )
}

const LabelInput = wrapLabel(Input);
const LabelDropdown = wrapLabel(Dropdown);
const LabelTextArea = wrapLabel(TextArea);
export { LabelInput, LabelDropdown, LabelTextArea }