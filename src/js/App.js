import React, { useState } from 'react'
import SingleColor from './singleColor.component'
import Values from 'values.js'

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values('#B6A863').all(10))
  const colorTint = list.filter((item) => item.type === 'tint')
  const colorShade = list.filter((item) => item.type === 'shade')
  const colorBase = list.filter((item) => item.type === 'base')

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(10)
      setList(colors)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }

  return (
    <>
      <section className='container'>
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={color}
            placeholder='#B6A863'
            onChange={(e) => setColor(e.target.value)}
            className={`${error ? 'error' : null}`}
          />
          <button className='btn' type='submit'>
            submit
          </button>
        </form>
      </section>
      <section className='grid-container'>
        {colorTint.map((color, index) => {
          return (
            <SingleColor key={index} {...color} index={index} hex={color.hex} />
          )
        })}
        <div className='baseColor'>
          {colorBase.map((color, index) => {
            return (
              <SingleColor
                key={index}
                {...color}
                index={index}
                hex={color.hex}
              />
            )
          })}
        </div>
        {colorShade.map((color, index) => {
          return (
            <SingleColor key={index} {...color} index={index} hex={color.hex} />
          )
        })}
      </section>
      <footer>
        <span>
          2020 -{' '}
          <a href='https://github.com/iamnelsonmartins' target='_BLANK'>
            iamnelsonmartins
          </a>
        </span>
      </footer>
    </>
  )
}

export default App
