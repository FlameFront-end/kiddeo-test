import React, { useState } from 'react'
import Select from 'react-select'

import IOption from './IOption'
import './Selects.css'

interface SingleSelectProps {
  onSelectChange: (newValue: IOption) => void
  options: IOption[]
}

const SingleSelect: React.FC<SingleSelectProps> = ({ onSelectChange, options }) => {
  const [currentCountry, setCurrentCountry] = useState<string>('south-korea')
  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false)

  const getValue = (): IOption | undefined => {
    return currentCountry ? options.find((c) => c.value === currentCountry) : undefined
  }

  const onChange = (newValue: IOption | null) => {
    const selectedValue = newValue?.value || ''
    setCurrentCountry(selectedValue)
    onSelectChange(newValue as IOption)
  }

  const onMenuOpen = () => {
    setIsSelectOpen(true)
  }

  const onMenuClose = () => {
    setIsSelectOpen(false)
  }

  return (
    <Select
      classNamePrefix="custom-select"
      menuIsOpen={isSelectOpen}
      onChange={onChange}
      onMenuClose={onMenuClose}
      onMenuOpen={onMenuOpen}
      options={options}
      value={getValue()}
    />
  )
}

export default SingleSelect
