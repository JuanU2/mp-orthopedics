export default function Reservation() {
  return (
    <div className="reservation">
        <h1 className="headline">Rezervácia časenky</h1>
        <section>
            Rezervácia časenky prebieha cez rezervačný portál <strong><a target="_blank" href="https://www.ecasenka.sk/ordinacia/mp-orthopedicssro-mudrmichalpradel" className="underlined">eČasenka</a></strong>.
        </section>
        <section className="reservation__block text-white">
            REZERVÁCIU MÔŽETE VYKONAŤ <strong><a target="_blank" href="https://www.ecasenka.sk/ordinacia/mp-orthopedicssro-mudrmichalpradel" className="underlined text-red-500">TU!</a></strong>
        </section>
    </div>
  )
}
