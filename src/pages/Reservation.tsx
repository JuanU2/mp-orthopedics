import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useState } from "react"
import Adult from "../photos/adult.svg"
import Child from "../photos/child.svg"
import { Helmet } from "react-helmet"

export default function Reservation() {
    const [showMenuBox, setShowMenuBox] = useState(false)
  return (
    <>
    <Helmet>
        <link rel="canonical" href="https://www.pradel.sk/rezervacia" />
        <title>MUDr. Michal Prádel - Rezervácia časenky</title>
    </Helmet>
    <main className="flex flex-col gap-6 h-full p-6">
        <h1 className="w-full flex items-center justify-center text-3xl md:text-4xl">Rezervácia časenky</h1>
        <div className="text-center p-6">
            Rezervácia časenky prebieha cez rezervačný portál <strong> <a href="https://www.ecasenka.sk/"> eČasenka </a> </strong>.
            <h2 className="text-center">
            Alebo je možnosť vytlačiť si časenku pred ambulanciou (10 lístkov) <br />
            Tlač lístkov začína o <strong>6:15</strong> <br />
            a v <strong>detský deň (streda) o 10:30</strong>.
            </h2>
        </div>
        <div className="flex justify-center items-center w-full">

        <Button disabled={showMenuBox} className='bg-blue-500 p-8 text-2xl text max-w-lg' onClick={() => setShowMenuBox(true)}>
            REZERVOVAŤ ONLINE
        </Button>
        </div>
        {showMenuBox && 
        <div className="fixed inset-3 md:inset-10 p-12 flex items-center justify-center bg-white bg-opacity-90 border-black border-2">
            <div className="flex flex-col justify-between h-full w-full">
                <div></div>
                <h1 className="text-black text-center text-2xl">Typ pacienta:</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a href="https://www.ecasenka.sk/ordinacia/mp-orthopedicssro-mudrmichalpradel" target="_blank" className="flex justify-center items-center w-full transform transition-transform duration-200 hover:scale-110">
                    <Card className="flex flex-col gap-2 justify-evenly items-center p-6 shadow bg-blue-200 active:bg-blue-300 max-w-lg">
                        <img className="w-16 h-16" src={Adult} alt="Adult"/>
                        
                        <h1 className="text-xl text-center">Dospelý</h1>
                        <span className="text-center">
                            Rezervácia pre dospelých pacientov.
                        </span>
                    </Card>
                </a>
                <a href="https://www.ecasenka.sk/ordinacia/detskydenstredamudrmichalpradel" target="_blank" className="flex justify-center items-center w-full transform transition-transform duration-200 hover:scale-110">
                    <Card className="flex flex-col gap-2 justify-evenly items-center p-6 shadow bg-blue-200 active:bg-blue-300 max-w-lg">
                        <img className="w-16 h-16" src={Child} alt="Child"/>
                        
                        <h1 className="text-xl text-center">Dieťa (do 18 rokov)</h1>
                        <span className="text-center">
                            Rezervácia pre pacientov pod 18 rokov.
                        </span>
                    </Card>
                </a>
                </div>
                <div className="flex justify-center">
                    <Button className="bg-red-400 text-white font-bold hover:bg-red-500 active:bg-red-500" onClick={() => setShowMenuBox(false)}>
                        Zatvoriť
                    </Button>
                </div>
            </div>
        </div>}
    </main>
    </>
  )
}
