import React from 'react'

const Avatar = ({children,backgroundColor,
  px,
  py,
  color,
  borderRadius,
  fontSize,
  width,
  height,
  cursor}) => {
  const style={
    backgroundColor: backgroundColor,
    padding: `${px}, ${py}`,
    color: color,
    borderRadius: `${borderRadius}%`,
    fontSize: `${fontSize}` || "30px",
    textAlign: "center",
    width: `${width}` || "45px",
    height: `${height}` || "43px",
    cursor: cursor || null,
    textDecoration: "none"
  };
  return (
    <div style={style}>
        {children}
    </div>
  )
}

export default Avatar