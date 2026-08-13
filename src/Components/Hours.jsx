import { useEffect, useRef, useState } from 'react'

// index 0 = Sunday ... 6 = Saturday, matching Date.getDay()
const SCHEDULE = [
  { day: 'Sunday', label: '7:00 AM – 6:00 PM', open: 7 * 60, close: 18 * 60, closed: false },
  { day: 'Monday', label: '7:00 AM – 8:00 PM', open: 7 * 60, close: 20 * 60, closed: false },
  { day: 'Tuesday', label: 'Closed', open: null, close: null, closed: true },
  { day: 'Wednesday', label: '7:00 AM – 8:00 PM', open: 7 * 60, close: 20 * 60, closed: false },
  { day: 'Thursday', label: '7:00 AM – 8:00 PM', open: 7 * 60, close: 20 * 60, closed: false },
  { day: 'Friday', label: '7:00 AM – 8:00 PM', open: 7 * 60, close: 20 * 60, closed: false },
  { day: 'Saturday', label: '7:00 AM – 6:00 PM', open: 7 * 60, close: 18 * 60, closed: false },
]

const getStatus = () => {
  const now = new Date()
  const dayIndex = now.getDay()
  const today = SCHEDULE[dayIndex]
  const minutesNow = now.getHours() * 60 + now.getMinutes()
  const isOpen = !today.closed && minutesNow >= today.open && minutesNow < today.close
  return { dayIndex, isOpen }
}

const ScheduleList = ({ dayIndex }) => (
  <ul>
    {SCHEDULE.map((d, i) => (
      <li key={d.day} className={i === dayIndex ? 'is-today' : ''}>
        <span className="hours-day">{d.day}</span>
        <span className={d.closed ? 'hours-closed' : ''}>{d.label}</span>
      </li>
    ))}
  </ul>
)

const Hours = ({ variant = 'dropdown' }) => {
  const [open, setOpen] = useState(false)
  const wrapRef = useRef(null)
  const { dayIndex, isOpen } = getStatus()

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [])

  if (variant === 'inline') {
    return (
      <div className="hours-inline">
        <p className="hours-panel-title">Hours</p>
        <p className="hours-status">
          <span className={`hours-dot${isOpen ? ' is-open' : ''}`} aria-hidden="true" />
          {isOpen ? 'Open now' : 'Closed now'}
        </p>
        <ScheduleList dayIndex={dayIndex} />
      </div>
    )
  }

  return (
    <div className="hours-dropdown" ref={wrapRef}>
      <button
        type="button"
        className="hours-toggle"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={`hours-dot${isOpen ? ' is-open' : ''}`} aria-hidden="true" />
        {isOpen ? 'Open now' : 'Closed now'}
        <svg
          className={`hours-chevron${open ? ' is-open' : ''}`}
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div className="hours-panel">
          <p className="hours-panel-title">Hours</p>
          <ScheduleList dayIndex={dayIndex} />
        </div>
      )}
    </div>
  )
}

export default Hours
