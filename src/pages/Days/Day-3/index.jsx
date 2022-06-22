import { useState } from 'react'
import useDocumentTitle2 from '../../../useDocumentTitle2'
import styles from './Day-3.module.scss'

const img =
    'https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'

function Day3({ docTitle, depCom }) {
    useDocumentTitle2(docTitle, depCom)

    const [rotate, setRotate] = useState(false)

    const isRotate = rotate && styles.rotate
    const isSlideIn = rotate && styles.slideIn

    return (
        <div className={styles.bg}>
            <div className={styles.btnsWrap}>
                <div className={`${styles.btns} ${isRotate} `}>
                    <div className={styles.bars} onClick={() => setRotate(true)}>
                        <i className="fas fa-bars"></i>
                    </div>
                    <div className={styles.close} onClick={() => setRotate(false)}>
                        <i className="fas fa-times"></i>
                    </div>
                </div>
            </div>
            <div className={`${styles.menu} ${isSlideIn}`}>
                <h3>
                    <i className="fas fa-home"></i>
                    <span>Home</span>
                </h3>
                <h3>
                    <i className="fas fa-user"></i>
                    <span>About</span>
                </h3>
                <h3>
                    <i className="fas fa-envelope"></i>
                    <span>Contact</span>
                </h3>
            </div>
            {/* ${styles.rotate} */}
            <div className={`${styles.wrap} ${isRotate}`}>
                <div className={styles.content}>
                    <h2>Amazing Article</h2>
                    <i>Florin Pop</i>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quia in ratione dolores
                        cupiditate, maxime aliquid impedit dolorem nam dolor omnis atque fuga labore modi veritatis
                        porro laborum minus, illo, maiores recusandae cumque ipsa quos. Tenetur, consequuntur mollitia
                        labore pariatur sunt quia harum aut. Eum maxime dolorem provident natus veritatis molestiae
                        cumque quod voluptates ab non, tempore cupiditate? Voluptatem, molestias culpa. Corrupti,
                        laudantium iure aliquam rerum sint nam quas dolor dignissimos in error placeat quae temporibus
                        minus optio eum soluta cupiditate! Cupiditate saepe voluptates laudantium. Ducimus consequuntur
                        perferendis consequatur nobis exercitationem molestias fugiat commodi omnis. Asperiores quia
                        tenetur nemo ipsa.
                    </p>
                    <h3>My Dog</h3>
                    <img src={`${img}`} alt="" />
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit libero deleniti rerum quo,
                        incidunt vel consequatur culpa ullam. Magnam facere earum unde harum. Ea culpa veritatis magnam
                        at aliquid. Perferendis totam placeat molestias illo laudantium? Minus id minima doloribus
                        dolorum fugit deserunt qui vero voluptas, ut quia cum amet temporibus veniam ad ea ab
                        perspiciatis, enim accusamus asperiores explicabo provident. Voluptates sint, neque fuga cum
                        illum, tempore autem maxime similique laborum odio, magnam esse. Aperiam?
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Day3
