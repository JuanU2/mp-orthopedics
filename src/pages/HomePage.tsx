import logo from '../photos/logo.png'
import ScrollToTop from '../components/ScrollTop';
import OrdinacneHodiny from '@/components/OrdinacneHodiny';
import LocationMap from '@/components/LocationMap';
import { Helmet } from 'react-helmet';


const HomePage = () => {
  return (
    <div>
        <Helmet>
            <link rel="canonical" href="https://www.pradel.sk/" />
            <title>MUDr. Michal Prádel - Ortopedická ambulancia Námestovo</title>
        </Helmet>
      <ScrollToTop />
      <main className="grid grid-cols-1 md:grid-cols-2 p-6 md:p-12 gap-6">
        <article className='flex flex-col justify-center items-center text-center'>
        <h1 className='text-2xl md:text-3xl'>
            MP-ORTHOPEDICS
        </h1>
            <img className="w-48 md:w-80" src={logo} />
          <h2 className="text-xl md:text-2xl">
            ORTOPEDICKÁ AMBULANCIA <br/>NÁMESTOVO
          </h2>
        </article>
        <OrdinacneHodiny/>
        <section className='md:col-span-2 p-2 md:p-6 text-center'>
            <h1 className='p-6 text-2xl md:text-4xl'>
                Lokalita
            </h1>
            <h2>
                <strong>Adresa:</strong> Červeného Kríža 62/30, 02901 Námestovo
            </h2>
            <LocationMap/>
        </section>
      </main>
    </div>
  )
}

export default HomePage