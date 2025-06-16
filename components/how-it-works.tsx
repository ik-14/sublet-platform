import { Building, Calendar, Search } from "lucide-react"

export function HowItWorks() {
  return (
    <div className="grid gap-8 mt-10 md:grid-cols-3">
      <div className="flex flex-col items-center text-center space-y-3">
        <div className="rounded-full bg-primary/10 p-3">
          <Building className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-xl font-bold">List Your Dorm</h3>
        <p className="text-muted-foreground">
          Universities and students can list their available dorm rooms during breaks or vacant periods.
        </p>
      </div>
      <div className="flex flex-col items-center text-center space-y-3">
        <div className="rounded-full bg-primary/10 p-3">
          <Search className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-xl font-bold">Find Affordable Housing</h3>
        <p className="text-muted-foreground">
          Students and interns can search for available dorms based on location, dates, and budget.
        </p>
      </div>
      <div className="flex flex-col items-center text-center space-y-3">
        <div className="rounded-full bg-primary/10 p-3">
          <Calendar className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-xl font-bold">Book Your Stay</h3>
        <p className="text-muted-foreground">
          Secure your accommodation with our simple booking process and enjoy affordable housing.
        </p>
      </div>
    </div>
  )
}
