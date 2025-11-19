import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Clock, Calendar } from 'lucide-react'

const scheduleData = [
  {
    day: 'Pondelok',
    from: '6:30',
    to: '13:30',
    note: '6:30-8:00 Preväzy a injekcie'
  },
  {
    day: 'Utorok',
    from: '6:30',
    to: '13:30',
    note: '6:30-8:00 Preväzy a injekcie'
  },
  {
    day: 'Streda',
    from: '6:30',
    to: '13:30',
    note: '7:00-11:00 sono novorodencov\n11:00-13:00 deti do 18 rokov'
  },
  {
    day: 'Štvrtok',
    from: '6:30',
    to: '13:30',
    note: '6:30-8:00 Preväzy a injekcie'
  },
  {
    day: 'Piatok',
    from: '7:00',
    to: '14:00',
    note: 'MUDr. Matúš Krasničan'
  }
]

export function OfficeHours() {
  return (
    <section id="ordinacne-hodiny" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-4">
              <Clock size={16} />
              <span>Ambulancia</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ordinačné hodiny</h2>
            <p className="text-lg text-muted-foreground">Sme tu pre vás každý pracovný deň</p>
          </div>

          <Card className="overflow-hidden shadow-lg border-0 bg-card">
            <CardHeader className="bg-primary text-primary-foreground">
              <CardTitle className="text-center text-lg md:text-xl">Týždenný rozvrh</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="px-4 md:px-6 py-4 text-left text-sm font-semibold">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} className="text-muted-foreground" />
                          Deň
                        </div>
                      </th>
                      <th className="px-4 md:px-6 py-4 text-left text-sm font-semibold">Od</th>
                      <th className="px-4 md:px-6 py-4 text-left text-sm font-semibold">Do</th>
                      <th className="px-4 md:px-6 py-4 text-left text-sm font-semibold">Poznámka</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {scheduleData.map((item, index) => (
                      <tr key={index} className="hover:bg-muted/30 transition-colors">
                        <td className="px-4 md:px-6 py-4 font-medium">{item.day}</td>
                        <td className="px-4 md:px-6 py-4 text-muted-foreground">{item.from}</td>
                        <td className="px-4 md:px-6 py-4 text-muted-foreground">{item.to}</td>
                        <td className="px-4 md:px-6 py-4 text-sm text-muted-foreground whitespace-pre-line">
                          {item.note}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
