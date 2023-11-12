// InputRange.tsx
import React, { useState } from 'react'

import './InputRange.css'

type InputRangeProps = {
  onValueChange: (value: number) => void
  parameters?: any
}

const InputRange: React.FC<InputRangeProps> = ({ onValueChange, parameters }) => {
  const [value, setValue] = useState<number>(parameters?.state || 0)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value)
    setValue(newValue)
    onValueChange(newValue)
  }

  return (
    <div>
      <input
        className="input-range"
        max={parameters?.max}
        min={parameters?.min}
        onChange={handleChange}
        step={parameters?.step}
        type="range"
        value={value}
      />
      <div className="range-bottom">
        <div>{parameters?.min}</div>
        <div>{parameters?.max}</div>
      </div>
    </div>
  )
}

export default InputRange