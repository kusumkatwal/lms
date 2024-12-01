import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Course } from '@/types'
import {addCourses} from "@/app/api/api";

export function CourseForm({ onSubmit }: { onSubmit: (course: Omit<Course, 'id'>) => void }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ title, description })
    setTitle('')
    setDescription('')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        placeholder="Course Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <Textarea
        placeholder="Course Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <Button type="submit">Create Course</Button>
    </form>
  )
}

