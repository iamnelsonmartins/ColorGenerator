import React, { useState, useEffect } from 'react'
import Modal from './modal.component'

const SingleColor = ({ rgb, weight, hex, type }) => {
  const [alert, setAlert] = useState(false)
  const bcg = rgb.join(',')
  const hexValue = `#${hex.toUpperCase()}`

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 3000)
    return () => clearTimeout(timeout)
  }, [alert])

  return (
    <article
      className={`color ${type === 'shade' && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true)
        navigator.clipboard.writeText(hexValue)
      }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>
      {alert && <Modal placeholder={`Copied to clipboard - ${hexValue}`} />}
    </article>
  )
}

export default SingleColor
