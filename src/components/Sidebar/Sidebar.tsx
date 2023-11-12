import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { DataItem } from '../../Type/type.ts'
import star from '../../assets/star.svg'
import CustomAccordion from '../ui/Accordion/CustomAccordion.tsx'
import Calendar from '../ui/Calendar/Calendar.tsx'
import Checkbox from '../ui/Checkbox/Checkbox.tsx'
import InputRange from '../ui/InputRange/InputRange.tsx'
import SingleSelect from '../ui/SingleSelect/SingleSelect.tsx'
import './Sidebar.css'

const API_BASE_URL = 'http://localhost:5000'

const areas = [
  'Адмиралтейский',
  'Василеостровский',
  'Выборгский',
  'Калининский',
  'Кировский',
  'Колпинский',
  'Красногвардейский',
  'Красносельский',
  'Кронштадский',
  'Курортный',
  'Московский',
  'Невский',
  'Петроградский',
  'Петродворцовый',
  'Приморский',
  'Пушкинский',
  'Фрунзенский',
  'Центральный',
  'Пригород',
  'Не важно',
]

const Sidebar: React.FC = () => {
  const [date, setDate] = useState(new Date())
  const [startTime, setStartTime] = useState('')
  const [finishTime, setFinishTime] = useState('')
  const [area, setArea] = useState('')
  const [price, setPrice] = useState(0)
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>([])
  const [data, setData] = useState<DataItem[]>([])

  const postData = async () => {
    try {
      const response = await axios.post(`${API_BASE_URL}`, {
        area,
        date,
        finishTime,
        price,
        selectedCheckboxes,
        startTime,
      })
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  const fetchData = async () => {
    try {
      const response = await axios.get<DataItem[]>(`${API_BASE_URL}/data`)
      const data = response.data
      setData(data)
    } catch (error) {
      console.error('Ошибка при получении данных:', error)
    }
  }

  const countPeopleValues = extractFilterValues('Популярные фильтры', 'Вместимость')
  const squareValues = extractFilterValues('Популярные фильтры', 'Площадь (кв.м)')
  const zoningValues = extractFilterValues('Дополнительно', 'Зонирование')
  const conditionsValues = extractFilterValues('Дополнительно', 'Условия')

  useEffect(() => {
    postData()
  }, [date, startTime, finishTime, area, price, selectedCheckboxes])

  useEffect(() => {
    fetchData()
  }, [])

  const handleDateChange = (calendarDate: Date) => {
    setDate(calendarDate)
  }

  const handleStartChange = (value: string) => {
    setStartTime(value)
  }

  const handleFinishChange = (value: string) => {
    setFinishTime(value)
  }

  const handleAreaChange = (value: string) => {
    setArea(value)
  }

  const handlePriceChange = (value: number) => {
    setPrice(value)
  }

  const handleCheckboxChange = (title: string) => {
    setSelectedCheckboxes((prevSelectedCheckboxes) => {
      const checkboxIndex = prevSelectedCheckboxes.indexOf(title)
      if (checkboxIndex > -1) {
        return prevSelectedCheckboxes.filter((checkbox) => checkbox !== title)
      } else {
        return [...prevSelectedCheckboxes, title]
      }
    })
  }

  function extractFilterValues(category: string, filter: string) {
    return data.map((item) => {
      const filters = item.sidebar_filters[category]
      return filters[filter].values
    })
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
            <SingleSelect
              onSelectChange={handleStartChange}
              options={['10:00', '11:00', '12:00', '13:00']}
              placeholder="10:00"
            />
          </div>
          <div className="item">
            <div className="title">Закончим в</div>
            <SingleSelect
              onSelectChange={handleFinishChange}
              options={['15:00', '16:00', '17:00', '18:00']}
              placeholder="12:00"
            />
          </div>
        </div>
        <div className="item">
          <div className="title">Район</div>
          <SingleSelect onSelectChange={handleAreaChange} options={areas} placeholder="Любой" />
        </div>

        <CustomAccordion title="Популярные фильтры" titleClassName="heading">
          <div className="accordion-gap">
            <CustomAccordion title="Цена 1 часа аренды">
              <InputRange onValueChange={handlePriceChange} />
            </CustomAccordion>
            <CustomAccordion title="Вместимость">
              {countPeopleValues.flat().map((item) => (
                <Checkbox
                  inputType="radio"
                  key={item.name}
                  name="capacity"
                  onCheckboxChange={handleCheckboxChange}
                  title={item.name}
                />
              ))}
            </CustomAccordion>
            <CustomAccordion title="Площадь (кв.м)">
              <InputRange onValueChange={handlePriceChange} parameters={squareValues.flat()[0]} />
            </CustomAccordion>
            <CustomAccordion title="Рейтинг по отзывам">
              <Checkbox onCheckboxChange={handleCheckboxChange} title="3 и больше">
                <div className="check_content">
                  <div className="stars">
                    <img alt="Звезда" src={star} />
                    <img alt="Звезда" src={star} />
                    <img alt="Звезда" src={star} />
                  </div>
                  и больше
                </div>
              </Checkbox>
              <Checkbox onCheckboxChange={handleCheckboxChange} title="4 и больше">
                <div className="check_content">
                  <div className="stars">
                    <img alt="Звезда" src={star} />
                    <img alt="Звезда" src={star} />
                    <img alt="Звезда" src={star} />
                    <img alt="Звезда" src={star} />
                  </div>
                  и больше
                </div>
              </Checkbox>
              <Checkbox onCheckboxChange={handleCheckboxChange} title="5 и больше">
                <div className="stars">
                  <img alt="Звезда" src={star} />
                  <img alt="Звезда" src={star} />
                  <img alt="Звезда" src={star} />
                  <img alt="Звезда" src={star} />
                  <img alt="Звезда" src={star} />
                </div>
              </Checkbox>
            </CustomAccordion>
          </div>
        </CustomAccordion>

        <CustomAccordion title="Дополнительно" titleClassName="heading">
          <div className="accordion-gap">
            <CustomAccordion title="Зонирование">
              {zoningValues.flat().map((item) => (
                <Checkbox key={item.name} onCheckboxChange={handleCheckboxChange} title={item.name} />
              ))}
            </CustomAccordion>
            <CustomAccordion title="Что еще есть" />
            <CustomAccordion title="Условия">
              {conditionsValues.flat().map((item) => (
                <Checkbox key={item.name} onCheckboxChange={handleCheckboxChange} title={item.name} />
              ))}
            </CustomAccordion>
          </div>
        </CustomAccordion>
      </div>
    </div>
  )
}

export default Sidebar
