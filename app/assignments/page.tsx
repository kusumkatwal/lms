import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const assignments = [
  { id: 1, title: 'CS101 Midterm Project', dueDate: '2023-06-15', course: 'Introduction to Computer Science' },
  { id: 2, title: 'Web Portfolio', dueDate: '2023-06-20', course: 'Web Development Fundamentals' },
  { id: 3, title: 'Algorithm Analysis', dueDate: '2023-06-25', course: 'Data Structures and Algorithms' },
]

export default function AssignmentsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Your Assignments</h1>
      <div className="space-y-6">
        {assignments.map((assignment) => (
          <Card key={assignment.id}>
            <CardHeader>
              <CardTitle>{assignment.title}</CardTitle>
              <CardDescription>Course: {assignment.course}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Due Date: {assignment.dueDate}</p>
              <Button asChild>
                <Link href={`/assignments/${assignment.id}`}>View Assignment</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

