function Loading({text}) {
    let loadingText =[]
    for (let i = 0; i < text.length; i++) {
        loadingText.push(<div key={i}>{text[i]}</div>)
    }
    return loadingText
}

export default Loading