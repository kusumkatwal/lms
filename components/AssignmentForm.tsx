import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Assignment, Course } from '@/types'

export function AssignmentForm({ onSubmit, courses }: { 
  onSubmit: (assignment: Omit<Assignment, 'id'>) => void,
  courses: Course[]
}) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [courseId, setCourseId] = useState('')
  const [dueDate, setDueDate] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ title, description, courseId, dueDate: new Date(dueDate) })
    setTitle('')
    setDescription('')
    setCourseId('')
    setDueDate('')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        placeholder="Assignment Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <Textarea
        placeholder="Assignment Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <Select onValueChange={setCourseId} required>
        <SelectTrigger>
          <SelectValue placeholder="Select Course" />
        </SelectTrigger>
        <SelectContent>
          {courses.map((course) => (
            <SelectItem key={course.id} value={course.id}>{course.title}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Input
        type="datetime-local"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
      />
      <Button type="submit">Create Assignment</Button>
    </form>
  )
}

