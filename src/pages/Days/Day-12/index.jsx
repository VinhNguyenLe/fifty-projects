import { useEffect, useState } from 'react'

import './Day-12.scss'

const FAQ = [
    {
        question: "Why shouldn't we trust atoms?",
        answer: 'They make up everything',
        active: true,
    },
    {
        question: 'What do you call someone with no body and no nose?',
        answer: 'Nobody knows.',
        active: false,
    },
    {
        question: "What's the object-oriented way to become wealthy?",
        answer: 'Inheritance.',
        active: false,
    },
    {
        question: 'How many tickles does it take to tickle an octopus?',
        answer: 'Ten-tickles!',
        active: false,
    },
    {
        question: 'What is: 1 + 1?',
        answer: 'Depends on who are you asking.',
        active: false,
    },
]

function Day12({ docTitle, depCom }) {
    useEffect(() => {
        document.title = `${docTitle}`
        return () => {
            document.title = `50 Projects In 50 Days Challenge`
        }
    }, [depCom])

    const [faqs, setfaqs] = useState(FAQ)
    console.log(faqs)

    const toggleBtn = (index) => {
        setfaqs(
            faqs.map((faq, i) => {
                if (index === i) {
                    faq.active = !faq.active
                }
                return faq
            }),
        )
    }

    return (
        <div className="Day12">
            <div className="faq">
                <h1>Frequently Asked Questions</h1>
                <div className="items">
                    {FAQ.map((item, index) => (
                        <div className={`${item.active ? 'active' : ''} item`} key={index}>
                            <div className="item__content">
                                <h3>{item.question}</h3>
                                <p>{item.answer}</p>
                            </div>
                            <div className="item__btn" onClick={() => toggleBtn(index)}>
                                <i className={`fas ${item.active ? 'fa-times-circle' : 'fa-angle-down'}`}></i>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Day12
