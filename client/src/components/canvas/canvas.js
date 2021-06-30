import React, { useEffect, useRef } from "react"

import "./canvas.sass"

const Canvas = () => {
    const canvasRef = useRef()

    useEffect(()=> {
        const canvas = canvasRef.current
        const c = canvas.getContext('2d')

                // Utilities
        const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

        const controls = {
            count: -10,
            velocity: .3
        }

        //Drops
        class Drop {
            constructor(x, y, dy, length) {
                this.x = x
                this.y = y
                this.dy = dy
                this.thickness = .05
                this.color = "#fff"
                this.length = length
                this.gravity = .4
            }
        }

        Drop.prototype.draw = function () {
            c.beginPath()
            c.strokeStyle = this.color
            c.lineWidth = this.thickness
            c.moveTo(this.x, this.y)
            c.lineTo(this.x, this.y - this.length)
            c.arc(this.x, this.y, .3, 0, Math.PI * 2)
            c.stroke()
            c.closePath()
        }

        Drop.prototype.update = function () {
            if (this.dy > 0) this.dy += this.gravity
            this.y += this.dy

            this.draw()
        }

        let drops = []
        let ticker = 0
        const init = () => drops = []

        const animate = () => {
            requestAnimationFrame(animate)
            c.fillStyle = 'rgba(33, 33, 33, 0)'; //Lower opacity creates a longer tail
            c.fillRect(0, 0, canvas.width, canvas.height);

            drops.forEach((drop, index) => {
                drop.update()
                if (drop.y >= canvas.height + drop.length) drops.splice(index, 1)
            })

            // Timing between drops
            ticker++
            let count = controls.count === 0 ? 0 : randomNum(controls.count + 5, controls.count)
            if (ticker % count == 0) {
                const x = randomNum(0, window.innerWidth)
                const y = 0
                const dy = .001
                const length = randomNum(5, 10)
                drops.push(new Drop(x, y, dy, length))
            }

        }

        init()
        animate()
    }, [])

    return <canvas ref={canvasRef} className="canvas"/>
}

export default Canvas