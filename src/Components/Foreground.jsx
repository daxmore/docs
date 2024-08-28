import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {
    const ref = useRef(null)
    const data = [
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            size: "1.2mb",
            close: true,
            tag: { isOpen: true, tagt: "Download", color: "green" }
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            size: "1.2mb",
            close: false,
            tag: { isOpen: false, tagt: "Download", color: "green" }
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            size: "1mb",
            close: false,
            tag: { isOpen: false, tagt: "Download", color: "green" }
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            size: "10mb",
            close: true,
            tag: { isOpen: true, tagt: "Download", color: "green" }
        },
    ]
    return (
        <>
            <div ref={ref} className="w-full h-full relative">
                <div className='fixed z-[3] w-full h-full top-0 left-0 flex flex-wrap gap-4 p-5'>
                    {data.map((item, i) => (
                        <Card data={item} Reference={ref}/>

                    ))}
                </div>
            </div>
        </>
    )
}

export default Foreground