import { useEffect } from 'react'

import './Day-8.scss'

function Day8({ docTitle, depCom }) {
    useEffect(() => {
        document.title = `${docTitle}`
        return () => {
            document.title = `50 Projects In 50 Days Challenge`
        }
    }, [depCom])

    const inputLabel = {
        email: 'Email',
        password: 'Password',
    }

    const emailLetters = inputLabel.email.split('')
    const passwordLetters = inputLabel.password.split('')

    return (
        <div className="Day8">
            <div className="form">
                <form>
                    <h1>Please Login</h1>
                    <div className="form-control">
                        <input required type="text" />
                        <label>
                            {emailLetters.map((item, index) => (
                                <span
                                    key={index}
                                    style={{
                                        transitionDelay: `${index * 50}ms`,
                                    }}
                                >
                                    {item}
                                </span>
                            ))}
                        </label>
                    </div>
                    <div className="form-control">
                        <input required type="password" />
                        <label>
                            {passwordLetters.map((item, index) => (
                                <span
                                    key={index}
                                    style={{
                                        transitionDelay: `${index * 50}ms`,
                                    }}
                                >
                                    {item}
                                </span>
                            ))}
                        </label>
                    </div>
                    <button className="btn">Login</button>
                    <p className="text">
                        Don't have a account?
                        <a href="#"> Register</a>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Day8
