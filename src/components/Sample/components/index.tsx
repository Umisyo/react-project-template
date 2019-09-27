// this is a component file
import React, { FC } from 'react'
import './style.scss'

interface SampleProps {
  text: string
}

const SampleConponent: FC<SampleProps> = prop => (
  <span className="sample">{prop.text}</span>
)

export default SampleConponent
