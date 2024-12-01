import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type Deadline = {
  id: string
  title: string
  dueDate: Date
  course: string
}

export function UpcomingDeadlines({ deadlines }: { deadlines: Deadline[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-primary">Upcoming Deadlines</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {deadlines.map((deadline) => (
            <li key={deadline.id} className="flex justify-between items-center">
              <div>
                <p className="font-medium text-primary">{deadline.title}</p>
                <p className="text-sm text-muted-foreground ">{deadline.course}</p>
              </div>
              <Badge variant="outline">
                {deadline.dueDate.toLocaleDateString()}
              </Badge>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

