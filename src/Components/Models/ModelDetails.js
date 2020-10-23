import React, { useEffect, useState } from 'react'
import { models } from './Data'

function ModelDetails(props) {
    const [Model, setModel] = useState('')

    useEffect(() => {
        setModel(models[props.match.params.id])
    }, [])

    return (
        <div>
            {Model ?
                <div className="model-detail-container">
                    <div className="model-detail-card">
                        <img src={`../${Model.src}`}></img>
                        <div className="model-detail-info">
                            <h1>{Model.name}</h1>
                            <h2>{Model.age}</h2>
                            <h2>{Model.height}</h2>
                        </div>
                    </div>
                </div>

                :
                <div className="model-detail-container">
                    <h1>Loading</h1>
                </div>}
        </div>
    )
}

export default ModelDetails
