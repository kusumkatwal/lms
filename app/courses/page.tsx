import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const courses = [
  { id: 1, title: 'Introduction to Computer Science', instructor: 'Dr. Smith', description: 'Learn the basics of computer science and programming.' },
  { id: 2, title: 'Web Development Fundamentals', instructor: 'Prof. Johnson', description: 'Discover the core technologies behind modern web development.' },
  { id: 3, title: 'Data Structures and Algorithms', instructor: 'Dr. Williams', description: 'Explore essential data structures and algorithms used in computer science.' },
]

export default function CoursesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Available Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card key={course.id}>
            <CardHeader>
              <CardTitle>{course.title}</CardTitle>
              <CardDescription>Instructor: {course.instructor}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{course.description}</p>
              <Link href={`/courses/${course.id}`} className="text-primary hover:underline">
                View Course Details
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

