import React, { useState } from 'react'
import Select from 'react-select'

import './SingleSelect.css'

interface SingleSelectProps {
  onSelectChange: (newValue: string) => void
  options: string[]
  placeholder: string
}

const SingleSelect: React.FC<SingleSelectProps> = ({ onSelectChange, options, placeholder }) => {
  const [currentCountry, setCurrentCountry] = useState<string>('')
  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false)

  const getValue = (): { label: string; value: string } | undefined => {
    return currentCountry ? { label: currentCountry, value: currentCountry } : undefined
  }

  const onChange = (newValue: { label: string; value: string } | null) => {
    const selectedValue = newValue?.value || ''
    setCurrentCountry(selectedValue)
    onSelectChange(selectedValue)
  }

  const onMenuOpen = () => {
    setIsSelectOpen(true)
  }

  const onMenuClose = () => {
    setIsSelectOpen(false)
  }

  const stringOptions = options.map((option) => ({ label: option, value: option }))

  return (
    <Select
      classNamePrefix="custom-select"
      menuIsOpen={isSelectOpen}
      onChange={onChange}
      onMenuClose={onMenuClose}
      onMenuOpen={onMenuOpen}
      options={stringOptions}
      placeholder={placeholder}
      value={getValue()}
    />
  )
}

export default SingleSelect
