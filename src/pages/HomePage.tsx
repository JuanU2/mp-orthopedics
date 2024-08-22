import obrazok1 from '../photos/clinic.webp';
import obrazok2 from '../photos/obrazok3.webp';
import obrazok3 from '../photos/obrazok2.webp';
import logo from '../photos/logo.png'
import ImageSlider from '../components/ImageSlider';
import ScrollToTop from '../components/ScrollTop';
import OrdinacneHodiny from '@/components/OrdinacneHodiny';

const IMAGES = [obrazok1, obrazok2, obrazok3];

const HomePage = () => {
  return (
    <div>
      <ScrollToTop />
      <main className="home">
        <OrdinacneHodiny/>
        <article className="home__text">
          <p className="home__text__headline home__text__headline--size">
            MUDr. Michal Prádel
          </p>
            <img className="home__text__logo home__text__logo--size" src={logo} />
          <p className="home__text__motto">
            ORTOPEDICKÁ AMBULANCIA <br/>NÁMESTOVO
          </p>
        </article>
      </main>
    </div>
  )
}

export default HomePage