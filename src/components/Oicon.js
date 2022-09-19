import React from 'react'

function Oicon({color, size}) {
  return (
    <div  className={`icon ${color ? "icon-" + color : "icon-yellow"} ${
        size && "icon-" + size
      }`}>
        <svg viewBox="0 0 448 512 ">
        <path d="M224 32.01c-123.5 0-224 100.5-224 224s100.5 224 224 224s224-100.5 224-224S347.5 32.01 224 32.01zM224
         416c-88.22 0-160-71.78-160-160s71.78-159.1 160-159.1s160 71.78 160 159.1S312.2 416 224 416z"/>
        </svg>
    </div>
  )
}

export default Oicon;