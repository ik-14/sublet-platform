import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function Testimonials() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="/placeholder.svg" alt="Avatar" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">Jessica Davis</p>
              <p className="text-sm text-muted-foreground">UC Berkeley</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            "DormShare saved me so much money during my summer internship in NYC. I was able to stay in a Columbia
            University dorm for half the price of an Airbnb."
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="/placeholder.svg" alt="Avatar" />
              <AvatarFallback>MT</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">Michael Thompson</p>
              <p className="text-sm text-muted-foreground">Stanford University</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            "As a university housing administrator, DormShare has helped us utilize our empty dorms during summer breaks
            while providing additional revenue for campus improvements."
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="/placeholder.svg" alt="Avatar" />
              <AvatarFallback>AL</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">Aisha Lee</p>
              <p className="text-sm text-muted-foreground">Georgia Tech</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            "I was able to sublet my dorm while studying abroad for a semester. The process was simple and I earned
            enough to cover part of my travel expenses."
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
