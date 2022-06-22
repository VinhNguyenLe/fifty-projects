import React from 'react'

function useDocumentTitle2(docTitle, depCom) {
    React.useEffect(() => {
        document.title = `${docTitle}`
        return () => {
            document.title = `50 Projects In 50 Days Challenge`
        }
    }, [depCom])
}

export default useDocumentTitle2
