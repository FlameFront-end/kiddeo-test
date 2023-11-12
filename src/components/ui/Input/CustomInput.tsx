import React from 'react'

interface CustomInputProps {
  onChange: (value: string) => void
  value: string
}

const CustomInput: React.FC<CustomInputProps> = ({ onChange, value }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }

  return <input onChange={handleChange} placeholder="Type something..." type="text" value={value} />
}

export default CustomInput
