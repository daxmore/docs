import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { MdOutlineInfo } from "react-icons/md";
import { motion } from "framer-motion"  

const Card = ({ data, Reference }) => {
    return (
        <>
            <motion.div drag dragConstraints={Reference} whileDrag={{scale:1.1}} className="relative card w-60 h-72 bg-zinc-900 rounded-2xl text-white p-4 overflow-hidden">
                <FaFileAlt />
                <p className='text-sm mt-4 leading-4'>{data.desc}</p>
                <div className="footer absolute bottom-0 left-0 w-full flex flex-col gap-2">
                    <div className="flex justify-between items-center px-4 py-3">
                        <div className="size">{data.size}</div>
                        <span className="icon" >{data.close ? <MdOutlineInfo size="1.2rem" /> : <GoDownload />}</span>
                    </div>
                    {data.tag.isOpen ? (
                        <div className={`tag w-full py-3 text-center text-base font-semibold text-white ${data.tag.color === "green" ? "bg-green-600":null}`}>
                            Download
                        </div>) : null}
                </div>
            </motion.div>
        </>
    )
}

export default Card