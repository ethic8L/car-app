"use client"

import { CustomButtonProps } from "@/types"
import Image from "next/image"

const CustomButton = ({title, containerStyles, handleClick}: CustomButtonProps) => {
    const handleScroll = () => {

    }
  return (
    <button
        disabled={false}
        type={"button"}
        className={`custom-btn ${containerStyles}`}
        onClick={handleScroll}
    >
        <span className={`flex-1`}>
            title
        </span>
    </button>
  )
}

export default CustomButton