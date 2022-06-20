import { useEffect, useState } from 'react'

import './Day-10.scss'

function Day10({ docTitle, depCom }) {
    const apiURL = 'https://icanhazdadjoke.com'

    useEffect(() => {
        document.title = `${docTitle}`
        return () => {
            document.title = `50 Projects In 50 Days Challenge`
        }
    }, [depCom])

    const [joke, setJoke] = useState('Click the button to get joke')
    console.log('Log ~ joke', joke)

    useEffect(() => {
        const btn = document.querySelector('button')
        const getData = () => {
            fetch(apiURL, {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data)
                    setJoke(data.joke)
                })
        }
        btn.addEventListener('click', getData)

        return () => {
            btn.removeEventListener('click', getData)
        }
    }, [joke])

    return (
        <div className="Day10">
            <div className="container">
                <h3>Don't Laugh Challenge</h3>
                <h1>{joke}</h1>
                <button>Get Another Joke</button>
            </div>
        </div>
    )
}

export default Day10
