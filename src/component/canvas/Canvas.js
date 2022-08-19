import React, { useRef, useEffect } from 'react'

const FRAMES_PER_SECOND = 30
const FRAME_MIN_TIME = (1000/60) * (60 / FRAMES_PER_SECOND) - (1000/60) * 0.5;

const Canvas = props => {
    const { draw, ...rest } = props
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        let frameCount = 0
        let lastFrameTime = 0
        let animationFrameId
        
        const render = (time) => {
            if(time - lastFrameTime >= FRAME_MIN_TIME) {
                lastFrameTime = time
                frameCount++
                draw(context, frameCount)
                animationFrameId = window.requestAnimationFrame(render)
            } else {
                requestAnimationFrame(render);
            }
        }
        window.requestAnimationFrame(render)
        
        return () => {
            window.cancelAnimationFrame(animationFrameId)
        }
    }, [draw])
    
    return <canvas ref={canvasRef} {...rest}/>
}

export default Canvas