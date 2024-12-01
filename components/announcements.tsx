import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type Announcement = {
  id: string
  title: string
  content: string
  date: Date
  type: 'announcement' | 'news'
}

export function Announcements({ items }: { items: Announcement[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-primary">Announcements & News</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {items.map((item) => (
            <li key={item.id} className="border-b pb-4 last:border-b-0">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium text-primary">{item.title}</h3>
                <Badge variant={item.type === 'announcement' ? 'default' : 'secondary'}>
                  {item.type}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-1">{item.content}</p>
              <p className="text-xs text-muted-foreground">
                {item.date.toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

