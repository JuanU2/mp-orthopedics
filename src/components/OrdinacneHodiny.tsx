export default function OrdinacneHodiny() {
  return (
  <div className="flex flex-col justify-center items-center w-full">
    <h1 className="text-xl md:text-2xl p-6">
        Ordinačné hodiny:
    </h1>
    <div className="bg-blue-400 p-8 rounded grid grid-cols-6 text-center">
        <div className="text-white  overflow-hidden font-bold flex flex-col items-center justify-center p-2 border-r-2 border-b-2 border-white col-span-2">Deň</div>
        <div className="text-white  overflow-hidden font-bold flex flex-col items-center justify-center p-2 border-r-2 border-b-2 border-white">Od</div>
        <div className="text-white  overflow-hidden font-bold flex flex-col items-center justify-center p-2 border-r-2 border-b-2 border-white">Do</div>
        <div className="text-white  overflow-hidden font-bold col-span-2 flex flex-col items-center justify-center p-2 border-b-2 border-white">Poznámka</div>
        <div className="text-white  overflow-hidden flex flex-col items-center justify-center p-2 text-sm border-r-2 border-b-2 border-white col-span-2">Pondelok</div>
        <div className="text-white  overflow-hidden flex flex-col items-center justify-center text-sm p-2 border-r-2 border-b-2 border-white">6:30</div>
        <div className="text-white  overflow-hidden flex flex-col items-center justify-center text-sm p-2 border-r-2 border-b-2 border-white">13:30</div>
        <div className="text-white  col-span-2 overflow-hidden flex flex-col items-center text-sm justify-center p-2 border-b-2 border-white">6:30-8:00 Preväzy a injekcie</div>
        <div className="text-white  overflow-hidden flex flex-col items-center justify-center text-sm p-2 border-r-2 border-b-2 border-white col-span-2">Útorok</div>
        <div className="text-white  overflow-hidden flex flex-col items-center justify-center text-sm p-2 border-r-2 border-b-2 border-white">6:30</div>
        <div className="text-white  overflow-hidden flex flex-col items-center justify-center text-sm p-2 border-r-2 border-b-2 border-white">13:30</div>
        <div className="text-white  col-span-2 overflow-hidden flex flex-col items-center text-sm justify-center p-2 border-b-2 border-white">6:30-8:00 Preväzy a injekcie</div>
        <div className="text-white  overflow-hidden flex flex-col items-center justify-center text-sm p-2 border-r-2 border-b-2 border-white col-span-2">Streda</div>
        <div className="text-white  overflow-hidden flex flex-col items-center justify-center text-sm p-2 border-r-2 border-b-2 border-white">6:30</div>
        <div className="text-white  overflow-hidden flex flex-col items-center justify-center text-sm p-2 border-r-2 border-b-2 border-white">13:30</div>
        <div className="text-white  col-span-2 overflow-hidden flex flex-col items-center text-sm justify-center p-2 border-b-2 border-white">7:00 - 11:00 sono novorodencov<br />11:00 - 13:00 deti do 18 rokov</div>
        <div className="text-white  overflow-hidden flex flex-col items-center justify-center p-2 text-sm border-r-2 border-b-2 border-white col-span-2">Štvrtok</div>
        <div className="text-white  overflow-hidden flex flex-col items-center justify-center text-sm p-2 border-r-2 border-b-2 border-white">6:30</div>
        <div className="text-white  overflow-hidden flex flex-col items-center justify-center text-sm p-2 border-r-2 border-b-2 border-white">13:30</div>
        <div className="text-white  col-span-2 overflow-hidden flex flex-col items-center  text-sm justify-center p-2 border-b-2 border-white">6:30-8:00 Preväzy a injekcie</div>
        <div className="text-white  overflow-hidden flex flex-col items-center justify-center text-sm p-2 border-r-2 border-white col-span-2">Piatok</div>
        <div className="text-white  overflow-hidden flex flex-col items-center justify-center text-sm p-2 border-r-2 border-white">6:30</div>
        <div className="text-white  overflow-hidden flex flex-col items-center justify-center text-sm p-2 border-r-2 border-white">13:30</div>
        <div className="text-white  col-span-2 overflow-hidden flex flex-col items-center text-sm justify-center p-2">MUDr. Matúš Krasničan</div>
        

    </div>
  </div>)
}
