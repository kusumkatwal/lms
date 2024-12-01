import { notFound } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const courses = [
  { id: 1, title: 'Introduction to Computer Science', instructor: 'Dr. Smith', description: 'Learn the basics of computer science and programming.' },
  { id: 2, title: 'Web Development Fundamentals', instructor: 'Prof. Johnson', description: 'Discover the core technologies behind modern web development.' },
  { id: 3, title: 'Data Structures and Algorithms', instructor: 'Dr. Williams', description: 'Explore essential data structures and algorithms used in computer science.' },
]

export default function CourseDetailsPage({ params }: { params: { id: string } }) {
  const course = courses.find(c => c.id === parseInt(params.id))

  if (!course) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>{course.title}</CardTitle>
          <CardDescription>Instructor: {course.instructor}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-6">{course.description}</p>
          <Button>Enroll in Course</Button>
        </CardContent>
      </Card>
    </div>
  )
}

