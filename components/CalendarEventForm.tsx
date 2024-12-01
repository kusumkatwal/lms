import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarEvent, Course } from '@/types'

export function CalendarEventForm({ onSubmit, courses }: { 
  onSubmit: (event: Omit<CalendarEvent, 'id'>) => void,
  courses: Course[]
}) {
  const [title, setTitle] = useState('')
  const [courseId, setCourseId] = useState('')
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ title, courseId, start: new Date(start), end: new Date(end) })
    setTitle('')
    setCourseId('')
    setStart('')
    setEnd('')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        placeholder="Event Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <Select onValueChange={setCourseId} required>
        <SelectTrigger>
          <SelectValue placeholder="Select Course" />
        </SelectTrigger>
        <SelectContent>
          {courses.map((course) => (
            <SelectItem key={course.id} value={course.id} className='text-primary'>{course.title}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Input
        type="datetime-local"
        value={start}
        onChange={(e) => setStart(e.target.value)}
        required
        className='text-primary'
      />
      <Input
        type="datetime-local"
        value={end}
        onChange={(e) => setEnd(e.target.value)}
        // required
        className='text-primary'
      />
      <Button type="submit">Create Event</Button>
    </form>
  )
}

