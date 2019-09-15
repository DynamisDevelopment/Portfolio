import React, { useRef, useEffect } from 'react'

// * Utilities
const randomNum = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min)
// @ts-ignore
const randomColor = (colors: string[]): string => colors[Math.floor(Math.random() * colors.length)]

const colors = [
    '#9C4AFF',
    '#8C43E6',
    '#7638C2',
    '#5E2C99',
    '#492378'
]

const Rain = () => {
    // * Setup 
    // @ts-ignore
    const container = useRef() as RefObject<HTMLDivElement>
    // @ts-ignore
    const canvas = useRef() as RefObject<HTMLCanvasElement>

    const controls = {
        count: 100,
        velocity: 10
    }
    useEffect(() => {
        canvas.current.width = container.current.clientWidth
        canvas.current.height = container.current.clientHeight
        const c = canvas.current.getContext('2d')

        // * Drops
        class Drop {
            x: number
            y: number
            dy: number
            thickness: number
            color: string
            length: number
            gravity: number
            draw: any
            update: any
            splash: any
            constructor(x: number, y: number, dy: number, thickness: number, length: number, color: string) {
                this.x = x
                this.y = y
                this.dy = dy
                this.thickness = thickness
                this.color = color
                this.length = length
                this.gravity = .4
            }
        }

        Drop.prototype.draw = function (): any {
            c.beginPath()
            c.strokeStyle = this.color
            c.lineWidth = this.thickness
            c.moveTo(this.x, this.y)
            c.lineTo(this.x, this.y - this.length)
            c.stroke()
            c.closePath()
        }

        Drop.prototype.update = function () {
            if (this.dy > 0) this.dy += this.gravity
            this.y += this.dy

            if (this.y > canvas.height - 100) this.splash(this.x, this.y + (this.length * 2))

            this.draw()
        }

        Drop.prototype.splash = function (x: number, y: number) {
            for (let i = 0; i < 5; i++) {
                const dx = randomNum(-3, 3)
                const dy = randomNum(-1, -5)
                const radius = randomNum(1, 3)

                droplets.push(new Droplet(x, y, dx, dy, radius, randomColor(colors)))
            }
        }

        // * Droplets
        class Droplet {
            x: number
            y: number
            dx: number
            dy: number
            radius: number
            color: string
            gravity: number
            friction: number
            draw: any
            update: any
            constructor(x: number, y: number, dx: number, dy: number, radius: number, color: string) {
                this.x = x
                this.y = y
                this.dx = dx
                this.dy = dy
                this.radius = radius
                this.color = color
                this.gravity = .1
                this.friction = .5
            }
        }

        Droplet.prototype.draw = function (): any {
            c.beginPath()
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
            c.fillStyle = this.color
            c.fill()
            c.closePath()
        }

        Droplet.prototype.update = function (): any {
            this.dy += this.gravity
            this.y += this.dy * this.friction
            this.x += this.dx

            this.draw()
        }

        let droplets: any[] = []
        let drops: any[] = []
        let ticker = 0
        const init = () => {
            drops = []
            droplets = []
        }

        const animate = () => {
            requestAnimationFrame(animate)
            c.fillStyle = 'rgba(33, 33, 33, .3)'; // * Lower opacity creates a longer tail
            c.fillRect(0, 0, container.current.clientWidth, container.current.clientHeight);

            drops.forEach((drop, index) => {
                drop.prototype.update()
                if (drop.y >= container.current.clientHeight + drop.length) drops.splice(index, 1)
            })

            // * Timing between drops
            ticker++
            let count = controls.count === 0 ? 0 : randomNum(controls.count + 5, controls.count)
            if (ticker % count == 0) {
                const x = randomNum(0, container.current.clientWidth)
                const y = 0
                const dy = controls.velocity === 0 ? 0 : randomNum(controls.velocity, controls.velocity + 10)
                const thickness = randomNum(3, 5)
                const length = randomNum(20, 50)

                drops.push(new Drop(x, y, dy, thickness, length, randomColor(colors)))
                console.log(drops)
            }

            // droplets.forEach((droplet, index) => {
            //     droplet.update()
            //     if (droplet.y >= canvas.height) droplets.splice(index, 1)
            // })
        }

        init()
        // animate()
    })

    return (<div ref={container} className='rain'><canvas ref={canvas} /></div>)
}

export default Rain