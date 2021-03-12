import React from "react"

export default function YouTube(props) {
    const containerStyle = {
        position: "relative",
        paddingBottom: "56.25%", /* 16:9 */
        paddingTop: "25px",
        height: 0,
        marginBottom: "20px"
    }
    const iframeStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
    }
    return (
        <div style={containerStyle}>
            <iframe
                style={iframeStyle}
                src={`https://www.youtube.com/embed/${props.id}?rel=0`}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    )
}
