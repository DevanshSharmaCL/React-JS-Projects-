import React from 'react'

function RandomQuote(){
    let quotes = ['quote 1', 'quote 2', 'quote 3', 'quote 4', 'quote 5']
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    const quote = quote[randomQuote]

    return(
        <div>
            <h1>Random Quote</h1>
            <p>{quote}</p>
        </div>
    )
}

export default RandomQuote