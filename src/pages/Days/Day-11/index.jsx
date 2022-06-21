import { useEffect, useState, useLayoutEffect } from 'react'

import './Day-11.scss'

function Day11({ docTitle, depCom }) {
    useEffect(() => {
        document.title = `${docTitle}`
        return () => {
            document.title = `50 Projects In 50 Days Challenge`
        }
    }, [depCom])

    const [state, setState] = useState(false)
    const [key, setKey] = useState([])

    useEffect(() => {
        const getKey = (e) => {
            setState(true)
            setKey([e.key, e.keyCode, e.code])
        }
        window.addEventListener('keydown', getKey)
        return () => {
            window.removeEventListener('keydown', getKey)
        }
    }, [window, key])

    return (
        <div className="Day11">
            <div className="wrapper">
                {state ? (
                    <div className="inner">
                        <div className="key">
                            <p>event.key</p>
                            <h3>{key[0]}</h3>
                        </div>
                        <div className="key">
                            <p>event.keyCode</p>
                            <h3>{key[1]}</h3>
                        </div>
                        <div className="key">
                            <p>event.code</p>
                            <h3>{key[2]}</h3>
                        </div>
                    </div>
                ) : (
                    <h2 className="key">Press any key to get the keyCode</h2>
                )}
            </div>
        </div>
    )
}

export default Day11
