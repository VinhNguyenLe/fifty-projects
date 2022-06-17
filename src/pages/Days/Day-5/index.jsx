import React from 'react'
import { TitleContext } from '../../../App'
import { projectRoutes as project } from '../../../router'

function Day5() {
    const titleDoc = React.useContext(TitleContext)

    React.useEffect(() => {
        document.title = `${project[4].day} - ${project[4].name}`
        return () => {
            document.title = titleDoc
        }
    }, [])

    return <div>Day5</div>
}

export default Day5
