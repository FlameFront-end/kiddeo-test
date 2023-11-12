import React, { ReactNode, useEffect, useRef, useState } from 'react'

import './CustomAccordion.css'

interface AccordionProps {
  children: ReactNode
  title: string
  titleClassName?: string
}

const CustomAccordion: React.FC<AccordionProps> = ({ children, title, titleClassName }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isArrowUp, setIsArrowUp] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
    setIsArrowUp(!isOpen)
  }

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.height = isOpen ? 'auto' : '0'
    }
  }, [isOpen])

  return (
    <div>
      <div className={`accordion-header ${titleClassName}`} onClick={toggleAccordion}>
        {title}
        <svg
          className={isArrowUp ? 'arrow-up' : 'arrow-down'}
          fill="none"
          height="7"
          viewBox="0 0 14 7"
          width="14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.731968 5.97776C0.73149 5.84627 0.762519 5.71635 0.822773 5.59754C0.883028 5.47874 0.970978 5.37407 1.08016 5.29123L6.72651 1.04007C6.89489 0.910614 7.10611 0.839844 7.32408 0.839844C7.54205 0.839844 7.75327 0.910614 7.92165 1.04007L13.568 5.44086C13.7602 5.59026 13.881 5.80494 13.904 6.03768C13.9269 6.27041 13.8501 6.50214 13.6903 6.68189C13.5306 6.86163 13.3011 6.97466 13.0522 6.99612C12.8034 7.01758 12.5556 6.9457 12.3634 6.79631L7.31937 2.862L2.2753 6.66428C2.13717 6.77191 1.96896 6.84028 1.79059 6.8613C1.61221 6.88231 1.43113 6.8551 1.26877 6.78288C1.10641 6.71066 0.969572 6.59645 0.87444 6.45377C0.779308 6.31108 0.729868 6.1459 0.731968 5.97776Z"
            fill="#2B2B2B"
          />
        </svg>
      </div>
      <div className={`accordion ${isOpen ? 'open' : ''}`} ref={contentRef}>
        <div className="accordion-content">{children}</div>
      </div>
    </div>
  )
}

export default CustomAccordion
