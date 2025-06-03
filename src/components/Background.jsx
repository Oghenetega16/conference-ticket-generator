import { useEffect, useState } from "react"

export default function Background() {
    const [deviceType, setDeviceType] = useState('mobile')

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth
            if (width >= 1024) {
                setDeviceType('desktop')
            } else if (width >= 768) {
                setDeviceType('tablet')
            } else {
                setDeviceType('mobile')
            }
        }

        handleResize()
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const bottomPattern = {
        mobile: "./assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg",
        tablet: "./assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg",
        desktop: "./assets/images/pattern-squiggly-line-bottom-desktop.svg",
    }

    const background = {
        mobile: './assets/images/background-mobile.png',
        tablet: './assets/images/background-tablet.png',
        desktop: '../assets/images/background-desktop.png'
    }

    const bgPositions = {
        mobile: `
            center center,
            -1rem -2rem,
            16rem 1rem,
            19rem 33rem,
            bottom left,
            center center
        `,
        tablet: `
            center center,
            -1rem -2rem,
            16rem 1rem,
            19rem 33rem,
            bottom left,
            center center
        `,
        desktop: `
            center center,
            -1rem -2rem,
            16rem 1rem,
            19rem 33rem,
            bottom left,
            center center
        `,
    }

    const bgSizes = {
        mobile: 'cover, 7rem, 8rem, 7rem, 21rem, cover',
        tablet: 'cover, 7rem, 8rem, 7rem, 21rem, cover',
        desktop: 'cover, 7rem, 8rem, 7rem, 21rem, cover'
    }


    return (
        <div 
            className="font-display grid place-items-center min-h-screen px-5 text-neutral-0"
            style={{
                backgroundImage: `
                url('/assets/images/pattern-lines.svg'),
                url('/assets/images/pattern-circle.svg'),
                url('/assets/images/pattern-squiggly-line-top.svg'),
                url('/assets/images/pattern-circle.svg'),
                url('${bottomPattern[deviceType]}'),
                url('${background[deviceType]}')
                `,
                backgroundPosition: bgPositions[deviceType],
                backgroundRepeat: 'no-repeat, no-repeat, no-repeat, no-repeat, no-repeat, no-repeat',
                backgroundSize: bgSizes[deviceType]
            }}
            >
        </div>
    )
}