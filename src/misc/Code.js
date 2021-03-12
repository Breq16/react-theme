import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"

import styles from "./Code.module.scss"

function CopyButton(props) {
    return (
        <button className={styles.copyButton} onClick={props.onClick}>Copy</button>
    )
}

export default function Code(props) {

    function handleCopy(e) {
        navigator.clipboard.writeText(props.code)
    }

    return (
        <div className={styles.codeWrapper}>
            <Highlight {...defaultProps} code={props.code} language={props.language}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={`${className} ${styles.code}`} style={style}>
                    {tokens.map((line, i) => (
                    <div {...getLineProps({ line, key: i })}>
                        {line.map((token, key) => (
                        <span {...getTokenProps({ token, key })} />
                        ))}
                    </div>
                    ))}
                </pre>
            )}
        </Highlight>
        <CopyButton onClick={handleCopy} />
    </div>
    )
}