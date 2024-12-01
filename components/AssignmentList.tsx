import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Assignment, Course } from '@/types'

export function AssignmentList({ assignments, courses }: { assignments: Assignment[], courses: Course[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-primary">Assignments</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4 text-primary">
          {assignments.map((assignment) => {
            const course = courses.find(c => c.id === assignment.courseId)
            return (
              <li key={assignment.id} className="border-b pb-4 last:border-b-0">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">{assignment.title}</h3>
                  <Badge variant="outline">{course?.title}</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-1">{assignment.description}</p>
                <p className="text-xs text-muted-foreground">
                  Due: {assignment.dueDate.toLocaleString()}
                </p>
              </li>
            )
          })}
        </ul>
      </CardContent>
    </Card>
  )
}

