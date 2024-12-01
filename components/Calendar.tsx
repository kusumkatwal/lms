"use client"
import { useState } from 'react'
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

moment.locale('en-GB')
const localizer = momentLocalizer(moment)

type Event = {
  id: string
  title: string
  start: Date
  end: Date
}

export function Calendar({ events }: { events: Event[] }) {
  const [selectedDate, setSelectedDate] = useState(new Date())

  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-primary'>Calendar</CardTitle>
      </CardHeader>
      <CardContent className='text-primary'>
        <BigCalendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          onNavigate={(date) => setSelectedDate(date)}
          date={selectedDate}
          className='text-primary'
        />
      </CardContent>
    </Card>
  )
}
