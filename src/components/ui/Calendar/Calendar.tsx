import { format } from 'date-fns'
import ru from 'date-fns/locale/ru'
import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import { registerLocale, setDefaultLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import './Calendar.css'

registerLocale('ru', ru)
setDefaultLocale('ru')

interface CalendarProps {
  onDateChange: (date: Date) => void
}

const Calendar: React.FC<CalendarProps> = ({ onDateChange }) => {
  const [startDate, setStartDate] = useState(new Date())

  const formattedMonth = format(startDate, 'LLLL', { locale: ru })
  const formattedYear = format(startDate, 'yyyy')

  return (
    <DatePicker
      customInput={<input className="input" />}
      onChange={(date: Date) => {
        setStartDate(date)
        onDateChange(date)
      }}
      renderCustomHeader={({ decreaseMonth, increaseMonth, nextMonthButtonDisabled, prevMonthButtonDisabled }) => (
        <div className="react-datepicker-header">
          <button disabled={prevMonthButtonDisabled} onClick={() => decreaseMonth()}>
            <svg fill="none" height="12" viewBox="0 0 6 12" width="6" xmlns="http://www.w3.org/2000/svg">
              <svg fill="none" height="12" viewBox="0 0 6 12" width="6" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.00446 11.4999C4.87639 11.5003 4.74984 11.4744 4.63412 11.4241C4.51841 11.3738 4.41646 11.3004 4.33577 11.2093L0.195025 6.49542C0.068932 6.35484 0 6.17851 0 5.99654C0 5.81456 0.068932 5.63823 0.195025 5.49765L4.48151 0.783814C4.62703 0.623374 4.83613 0.522478 5.06282 0.503324C5.28952 0.484171 5.51523 0.548328 5.6903 0.681681C5.86537 0.815034 5.97547 1.00666 5.99637 1.21441C6.01727 1.42215 5.94726 1.62899 5.80175 1.78943L1.96963 6.00046L5.67315 10.2115C5.77799 10.3268 5.84458 10.4672 5.86505 10.6162C5.88552 10.7651 5.85902 10.9163 5.78867 11.0518C5.71833 11.1873 5.60708 11.3016 5.46811 11.381C5.32913 11.4604 5.16823 11.5017 5.00446 11.4999Z"
                  fill="#2B2B2B"
                />
              </svg>
            </svg>
          </button>

          <div style={{ flex: 1, fontSize: 16, textAlign: 'center' }}>
            <span className="react-datepicker-month">{formattedMonth}</span>
            <span className="react-datepicker-year">{formattedYear}</span>
          </div>

          <button disabled={nextMonthButtonDisabled} onClick={() => increaseMonth()}>
            <svg fill="none" height="12" viewBox="0 0 6 12" width="6" xmlns="http://www.w3.org/2000/svg">
              <svg fill="none" height="12" viewBox="0 0 6 12" width="6" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0.995538 11.4999C1.12361 11.5003 1.25016 11.4744 1.36588 11.4241C1.48159 11.3738 1.58354 11.3004 1.66423 11.2093L5.80498 6.49542C5.93107 6.35484 6 6.17851 6 5.99654C6 5.81456 5.93107 5.63823 5.80498 5.49765L1.51849 0.783814C1.37297 0.623374 1.16387 0.522478 0.937177 0.503324C0.710485 0.484171 0.484775 0.548328 0.3097 0.681681C0.134626 0.815034 0.0245285 1.00666 0.00362778 1.21441C-0.0172729 1.42215 0.0527353 1.62899 0.198252 1.78943L4.03037 6.00046L0.326847 10.2115C0.222013 10.3268 0.155421 10.4672 0.13495 10.6162C0.114478 10.7651 0.140983 10.9163 0.211329 11.0518C0.281675 11.1873 0.392918 11.3016 0.531895 11.381C0.670871 11.4604 0.831765 11.5017 0.995538 11.4999Z"
                  fill="#F2766A"
                />
              </svg>
            </svg>
          </button>
        </div>
      )}
      selected={startDate}
    />
  )
}

export default Calendar
