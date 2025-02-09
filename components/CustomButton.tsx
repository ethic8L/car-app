"use client"
import { CustomButtonProps } from "@/types"

const CustomButton = ({title, containerStyles, handleClick, btnType}: CustomButtonProps) => {
    const handleScroll = () => {

    }
  return (
    <button
        disabled={false}
        type={btnType || "button"}
        className={`custom-btn ${containerStyles}`}
        onClick={handleScroll}
    >
        <span className={`flex-1`}>
            {title}
        </span>
    </button>
  )
}

export default CustomButton