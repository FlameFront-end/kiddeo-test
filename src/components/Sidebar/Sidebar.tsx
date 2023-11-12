import React, { useEffect, useState } from 'react'

import CustomAccordion from '../Accordion/CustomAccordion.tsx'
import Calendar from '../Calendar/Calendar.tsx'
import InputRange from '../InputRange/InputRange.tsx'
import IOption from '../Selects/IOption.ts'
import SingleSelect from '../Selects/SingleSelect.tsx'
import './Sidebar.css'

const Sidebar: React.FC = () => {
  const [date, setDate] = useState(new Date())
  const [startTime, setStartTime] = useState('')
  const [finishTime, setFinishTime] = useState('')
  const [area, setArea] = useState('')
  const [price, setPrice] = useState(0)

  useEffect(() => {
    console.log(date, startTime, finishTime, area, price)
  }, [date, startTime, finishTime, area, price])

  const handleDateChange = (calendarDate: Date) => {
    setDate(calendarDate)
  }

  const handleStartChange = (value: IOption) => {
    setStartTime(value.value)
  }

  const handleFinishChange = (value: IOption) => {
    setFinishTime(value.value)
  }

  const handleAreaChange = (value: IOption) => {
    setArea(value.value)
  }

  const handlePriceChange = (value: number) => {
    setPrice(value)
  }

  return (
    <div className="sidebar">
      <div className="container">
        <h3 className="heading">Параметры подбора</h3>
        <div className="separator"></div>
        <div className="item">
          <div className="title">Дата и время праздника</div>
          <Calendar onDateChange={handleDateChange} />
        </div>
        <div className="row">
          <div className="item">
            <div className="title">Начнем в</div>
            <SingleSelect onSelectChange={handleStartChange} options={[{ label: 'fsd', value: 'fsd' }]} />
          </div>
          <div className="item">
            <div className="title">Закончим в</div>
            <SingleSelect onSelectChange={handleFinishChange} options={[{ label: 'fsd', value: 'fsd' }]} />
          </div>
        </div>
        <div className="item">
          <div className="title">Район</div>
          <SingleSelect onSelectChange={handleAreaChange} options={[{ label: 'fsd', value: 'fsd' }]} />
        </div>
        <CustomAccordion title="CustomAccordion">
          <h3 className="heading">Популярные фильтры</h3>
          <CustomAccordion title="Цена 1 часа аренды">
            <InputRange onValueChange={handlePriceChange} />
          </CustomAccordion>
          <CustomAccordion title="Цена 2 часа аренды">
            <InputRange onValueChange={handlePriceChange} />
          </CustomAccordion>
          <CustomAccordion title="Цена 3 часа аренды">
            <InputRange onValueChange={handlePriceChange} />
          </CustomAccordion>
          <CustomAccordion title="Цена 4 часа аренды">
            <InputRange onValueChange={handlePriceChange} />
          </CustomAccordion>
        </CustomAccordion>
      </div>
    </div>
  )
}

export default Sidebar
