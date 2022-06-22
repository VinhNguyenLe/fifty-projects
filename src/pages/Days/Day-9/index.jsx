import { soundURLs } from './sounds'
import useDocumentTitle2 from '../../../useDocumentTitle2'
import './Day-9.scss'

function Day9({ docTitle, depCom }) {
    useDocumentTitle2(docTitle, depCom)

    const handleClick = (index) => {
        const audios = document.querySelectorAll('audio')
        stopAll()
        audios[index].play()
    }

    const stopAll = () => {
        const audios = document.querySelectorAll('audio')

        audios.forEach((audio) => {
            audio.pause()
            audio.currentTime = 0
        })
    }

    return (
        <div className="Day9">
            <div className="btns">
                {soundURLs.map((item, index) => (
                    <div key={index}>
                        <button className="btn" onClick={() => handleClick(index)}>
                            {item.name}
                        </button>
                        <audio src={item.url}></audio>
                    </div>
                ))}
            </div>
            <button className="pause" onClick={stopAll}>
                Stop
            </button>
        </div>
    )
}

export default Day9
