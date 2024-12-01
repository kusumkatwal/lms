import { useState } from 'react'
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarEvent, Course } from '@/types'

moment.locale('en-GB')
const localizer = momentLocalizer(moment)

export function Calendar({ events, courses }: { events: CalendarEvent[], courses: Course[] }) {
  const [selectedDate, setSelectedDate] = useState(new Date())

  const formattedEvents = events.map(event => ({
    ...event,
    title: `${event.title} (${courses.find(c => c.id === event.courseId)?.title})`
  }))

  return (
    <Card>
      <CardHeader>
        <CardTitle>Calendar</CardTitle>
      </CardHeader>
      <CardContent>
        <BigCalendar
          localizer={localizer}
          events={formattedEvents}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          onNavigate={(date) => setSelectedDate(date)}
          date={selectedDate}
        />
      </CardContent>
    </Card>
  )
}

