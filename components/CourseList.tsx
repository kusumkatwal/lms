import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Course } from '@/types'

export function CourseList({ courses }: { courses: Course[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-primary">Courses</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-primary">
          {courses.map((course) => (
            <li key={course.id}>
              <h3 className="font-medium">{course.title}</h3>
              <p className="text-sm text-muted-foreground">{course.description}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

