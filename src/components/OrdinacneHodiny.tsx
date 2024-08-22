export default function OrdinacneHodiny() {
  return (
    <div className="home__slider">
        <div>
            <h1 className="home__slider__headline">
                    Ordinačné hodiny
            </h1>
            <table className="home__slider__table">
                <thead className="table__width">
                    <tr className="table__column">
                        <th>Deň</th>
                        <th>Od</th>
                        <th>Do</th>
                        <th>Poznámka</th>
                    </tr>
                </thead>
                <tbody className="table__width">
                    <tr className="table__column">
                        <td>Pondelok</td>
                        <td>6:30</td>
                        <td>13:30</td>
                        <td>6:30-8:00 Preväzy a injekcie</td>
                    </tr>
                    <tr className="table__column">
                        <td>Útorok</td>
                        <td>6:30</td>
                        <td>13:30</td>
                        <td>6:30-8:00 Preväzy a injekcie</td>
                    </tr>
                    <tr className="table__column">
                        <td>Streda</td>
                        <td>6:30</td>
                        <td>13:30</td>
                        <td>
                            <p>
                            7:00 - 11:00 sono novorodencov
                            </p>
                            <p>
                                11:00 - 13:00 deti do 18 rokov
                            </p>
                        </td>
                    </tr>
                    <tr className="table__column">
                        <td>Štvrtok</td>
                        <td>6:30</td>
                        <td>13:30</td>
                        <td>6:30-8:00 Preväzy a injekcie</td>
                    </tr>
                    <tr className="table__column">
                        <td>Piatok</td>
                        <td>6:30</td>
                        <td>13:30</td>
                        <td>
                            MUDr. Matúš Krasničan
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}
