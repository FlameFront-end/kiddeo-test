import React, { useState } from 'react'

import './Checkbox.css'

type inputType = 'checkbox' | 'radio'

interface CheckboxProps {
  children?: React.ReactNode
  inputType?: inputType
  name?: string
  onCheckboxChange: (title: string) => void
  title: string
}

const Checkbox: React.FC<CheckboxProps> = ({ children, inputType = 'checkbox', name, onCheckboxChange, title }) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target
    setIsChecked(checked)
    onCheckboxChange(title)
  }

  return (
    <div className="form-group">
      <label className="input-content">
        <input
          checked={isChecked}
          className="real-checkbox"
          name={name}
          onChange={handleCheckboxChange}
          type={inputType}
        />
        <span className="custom-checkbox"></span>
        {children ? children : title}
      </label>
    </div>
  )
}

export default Checkbox
