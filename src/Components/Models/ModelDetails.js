import React, { useEffect, useState } from 'react'
import { models } from './Data'
import { motion } from 'framer-motion'

function ModelDetails(props) {
    const [Model, setModel] = useState('')

    useEffect(() => {
        setModel(models[props.match.params.id])
    }, [props])


    const pageVariants = {
        in: {
            opacity: 1,

        },
        out: {
            opacity: 0,

        }
    };

    const pageDuration = {
        duration: 0.5
    };

    return (
        <div>
            {Model ?
                <motion.div className="model-detail-container"
                    animate="in"
                    initial="out"
                    exit="out"
                    variants={pageVariants}
                    transition={pageDuration}
                >
                    <div className="model-detail-card">
                        <img src={`../${Model.src}`} alt="model-bust"></img>
                        <div className="model-detail-info">
                            <h1>{Model.name}</h1>
                            <h2>{Model.age} / {Model.height}</h2>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque leo, ultricies id laoreet sed, iaculis tempus ligula.
                            Suspendisse porttitor nunc quam, at accumsan lorem porta sit amet. Nunc enim quam, malesuada non libero a, sollicitudin luctus ante.
                            Vivamus tincidunt, nisl quis placerat porttitor, erat leo egestas felis, eu vestibulum leo nunc at mauris. Donec mollis lorem at nulla
                            pellentesque maximus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam quis dolor nunc.
                            Ut mauris sapien, auctor quis ex ut, venenatis eleifend elit. Pellentesque nisl eros, tincidunt vel augue porttitor, laoreet varius lacus.
                                Fusce viverra diam non ligula elementum tristique. Phasellus urna lacus, tincidunt non massa ut, tristique lobortis turpis.</p>
                        </div>
                    </div>
                </motion.div>

                :
                <div className="model-detail-container">
                    <h1>Loading</h1>
                </div>}
        </div>
    )
}

export default ModelDetails
