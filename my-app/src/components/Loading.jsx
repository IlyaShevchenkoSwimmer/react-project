import './Loading.css'

function Loading({text}) {
    let loadingText =[]
    for (let i = 0; i < text.length; i++) {
        loadingText.push(<div style={{animation: "loading-anim 2s ease-in-out infinite"}} className="loading-letter" key={i}>{text[i]}</div>)
    }
    return <div className="loading">{loadingText}</div>
}

export default Loading