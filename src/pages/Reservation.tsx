import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import Adult from "../photos/adult.svg";
import Child from "../photos/child.svg";
import { Helmet } from "react-helmet";
import Casenka from "../photos/casenka.png";

export default function Reservation() {
  const [showMenuBox, setShowMenuBox] = useState(false);
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://www.pradel.sk/rezervacia" />
        <title>MUDr. Michal Prádel - Rezervácia časenky</title>
      </Helmet>
      <main className="flex grid grid-cols-1 xl:grid-cols-2 gap-6 h-full p-6">
        <div className="md:bg-gray-200 md:p-6 p-6 md:rounded-xl flex flex-col gap-6 justify-between align-center md:m-12">
        <h1 className="w-full flex items-center text-center xl:text-left xl:justify-start md:p-6 justify-center text-2xl md:text-4xl xl:underline">
          Rezervácia časenky
        </h1>
        <p className="text-center xl:text-left md:text-lg md:p-6 divide-black">
          Rezerváciu časenky je možné vykonať prostredníctvom rezervačného
          portálu{" "}
          <strong>
            <a href="https://www.ecasenka.sk/">eČasenka.</a>
          </strong>
            <br />
            <br className="xl:hidden"/>
            <hr className="xl:hidden" />
            <br />
            Alternatívne je možné si časenku vytlačiť{" "}
          <strong className="font-normal">
            priamo pred ambulanciou. K dispozícii je 10 lístkov denne. Tlač
            lístkov začína o 6:15, a v prípade detského dňa (streda) o 10:30.
          </strong>
        </p>
        <div className="flex justify-center items-center md:p-6 xl:w-full">
          <Button
            disabled={showMenuBox}
            className="bg-blue-500 p-8 text-2xl text max-w-lg md:w-full"
            onClick={() => setShowMenuBox(true)}
          >
            <h2 className="md:text-2xl sm:text-xl text-lg text">REZERVOVAŤ ONLINE</h2>
          </Button>
        </div>
        </div>
        <div className="hidden p-12 xl:flex justify-center items-center w-full">
            <img className="rounded-xl max-w-lg" src={Casenka} alt="Pacient si berie časenku z automatu" />
        </div>
        {showMenuBox && (
          <div className="fixed inset-3 md:inset-10 p-12 flex items-center justify-center bg-white bg-opacity-90 border-black border-2">
            <div className="flex flex-col justify-between h-full w-full">
              <div></div>
              <h1 className="text-black text-center text-2xl">Typ pacienta:</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a
                  href="https://www.ecasenka.sk/ordinacia/mp-orthopedicssro-mudrmichalpradel"
                  target="_blank"
                  className="flex justify-center items-center w-full transform transition-transform duration-200 hover:scale-110"
                >
                  <Card className="flex flex-col gap-2 justify-evenly items-center p-6 shadow bg-blue-200 active:bg-blue-300 max-w-lg">
                    <img className="w-16 h-16" src={Adult} alt="Dospelý" />

                    <h1 className="text-xl text-center">Dospelý</h1>
                    <span className="text-center">
                      Rezervácia pre dospelých pacientov.
                    </span>
                  </Card>
                </a>
                <a
                  href="https://www.ecasenka.sk/ordinacia/detskydenstredamudrmichalpradel"
                  target="_blank"
                  className="flex justify-center items-center w-full transform transition-transform duration-200 hover:scale-110"
                >
                  <Card className="flex flex-col gap-2 justify-evenly items-center p-6 shadow bg-blue-200 active:bg-blue-300 max-w-lg">
                    <img className="w-16 h-16" src={Child} alt="Dieťa" />

                    <h1 className="text-xl text-center">Dieťa (do 18 rokov)</h1>
                    <span className="text-center">
                      Rezervácia pre pacientov pod 18 rokov.
                    </span>
                  </Card>
                </a>
              </div>
              <div className="flex justify-center">
                <Button
                  className="bg-red-400 text-white font-bold hover:bg-red-500 active:bg-red-500"
                  onClick={() => setShowMenuBox(false)}
                >
                  Zatvoriť
                </Button>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
