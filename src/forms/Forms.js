import React, { Fragment } from "react"

import style from "./Forms.module.scss"

export function Form(props) {
    return (
        <form className={style.form} onSubmit={props.onSubmit || (() => {})} onChange={props.onChange || (() => {})}>
            {props.children}
        </form>
    )
}

export function Input(props) {
    return (
        <>
            <label className={style.label}>{props.label}</label>
            <input className={style.input} name={props.name} type={props.type || "text"} value={props.value} onChange={props.onChange} />
        </>
    )
}

export function Dropdown(props) {
    const options = Object.entries(props.options).map(([value, name]) => <option value={value}>{name}</option>)

    return (
        <>
            <label className={style.label}>{props.label}</label>
            <select className={style.dropdown} name={props.name} value={props.value} onChange={props.onChange}>
                {options}
            </select>
        </>
    )
}