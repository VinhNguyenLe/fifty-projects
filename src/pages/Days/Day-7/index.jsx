import './Day-7.scss'
import useDocumentTitle2 from '../../../useDocumentTitle2'

function Day7({ docTitle, depCom }) {
    useDocumentTitle2(docTitle, depCom)
    return (
        <div className="Day7">
            <div className="split left">
                <div className="split__content">
                    <h1>Playstation 5</h1>
                    <div className="btn">Buy now</div>
                </div>
            </div>
            <div className="split right">
                <div className="split__content">
                    <h1>Xbox Series X</h1>
                    <div className="btn">Buy now</div>
                </div>
            </div>
        </div>
    )
}

export default Day7
