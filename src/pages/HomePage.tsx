import logo from '../photos/logo.png'
import ScrollToTop from '../components/ScrollTop';
import OrdinacneHodiny from '@/components/OrdinacneHodiny';
import LocationMap from '@/components/LocationMap';


const HomePage = () => {
  return (
    <div>
      <ScrollToTop />
      <main className="grid grid-cols-1 md:grid-cols-2 p-6 md:p-12 gap-6">
        <article className='flex flex-col justify-center items-center text-center'>
        <p className='text-2xl md:text-3xl'>
            MUDr. Michal Prádel
        </p>
            <img className="w-48 md:w-80" src={logo} />
          <p className="text-xl md:text-2xl">
            ORTOPEDICKÁ AMBULANCIA <br/>NÁMESTOVO
          </p>
        </article>
        <OrdinacneHodiny/>
        <div className='md:col-span-2 p-2 md:p-6 text-center'>
            <h1 className='p-6 text-2xl md:text-4xl'>
                Lokalita
            </h1>
            <h2>
                <strong>Adresa:</strong> Červeného Kríža 62/30, 02901 Námestovo
            </h2>
            <LocationMap/>
        </div>
      </main>
    </div>
  )
}

export default HomePage