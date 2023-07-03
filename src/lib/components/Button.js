import React from 'react';

const Button = ({type, text}) => {

    const buttonStyle =  "text-base font-medium font-sans rounded-full min-w-[374px] h-16 border m-12"
    const primaryStyle = "hover:bg-zinc-500 hover:border-zinc-500 bg-black text-white border-black"
    const secondaryStyle = "hover:bg-white hover:border-black bg-white text-black border-slate-300"

  return (
    <button className={`${buttonStyle} ${type === "primary" ? primaryStyle : secondaryStyle}`}>{text}</button>
  )
}


export default Button;
