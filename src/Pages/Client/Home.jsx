import Navbar from "../../Components/Navbar";
import styles from "../../Styles/home.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from "react-router-dom";
import { icon, sortPostsByTime } from "../../External/external";
import { useEffect, useState } from "react";
import { fireStoreDB } from '../../Firebase/base';
import { getDocs, collection } from 'firebase/firestore';
import { useLoader } from "../../main";

const Home = () => {
  const sample = 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1696773681/_120424467_joy2_a6y2kz.jpg';

  const [hostList, setHostList] = useState('');
  const [galleryList, setGalleryList] = useState([]);
  const {loader, setLoader} = useLoader();

  useEffect(() => {
    setLoader(true)
    getDocs(collection(fireStoreDB, 'Hosts/'))
      .then((res) => {
        const hostListTemp = res.docs.map((el)=> [el.id, el.data()]);
        const galleryListTemp = res.docs.map((el)=> el.data().posts.sort(sortPostsByTime))
        setHostList(hostListTemp)
        setGalleryList(galleryListTemp)
        setLoader(false);
      })
  }, [])

  return (
    <>
      <Navbar props={{ type: 'max' }} />
      <section className={styles.wrapper}>
        <section className={styles.introBox}>
          <section className={styles.right}>
            <Swiper loop={true} speed={1000} autoplay={{ delay: 3000 }} modules={[Autoplay]} className={styles.introSwiper}>
              <SwiperSlide className={styles.introSlide} style={{ backgroundImage: `url(${sample})` }}>
                <a href="">
                  <strong>Sandra</strong>
                  <span> <i className="material-symbols-outlined">location_on</i>  Accra</span>
                  <sub></sub>
                </a>
              </SwiperSlide>
              <SwiperSlide className={styles.introSlide} style={{ backgroundImage: `url(${sample})` }}>
                <a href="">
                  <strong>Sandra</strong>
                  <span> <i className="material-symbols-outlined">location_on</i>  Accra</span>
                  <sub></sub>
                </a>
              </SwiperSlide>
            </Swiper>
          </section>
          <section className={styles.left}>
            <strong href="" id="logo">Pick&Hook</strong>
            <p>Your Top Escort Agency</p>
            <Link to={'/register'}>Create A free Escort Profile Today</Link>
          </section>
          <form>
            <section>
              <div className={styles.inputField}>
                <span>Region</span>
                <select name="" id="">
                  <option value="">Accra</option>
                  <option value="">Kumasi</option>
                </select>
              </div>
              <div className={styles.inputField}>
                <span>Club</span>
                <select>
                  <option value="">All</option>
                  <option value="">Independants</option>
                  <option value="">Agencies</option>
                </select>
              </div>
              <div className={styles.inputField}>
                <span>Class</span>
                <select>
                  <option value="">All</option>
                  <option value="">Regular</option>
                  <option value="">Premium</option>
                </select>
              </div>
            </section>
            <button>
              <strong>Hook</strong>
              <i class="material-symbols-outlined">phishing</i>
            </button>
          </form>
        </section>
        <section className={styles.showBox}>
          {hostList && hostList.map((host, i) => (
            <Link to={`/viewProfile/${host[0]}`} key={i} className={styles.card}>
              <legend className="verified">{icon('verified')}</legend>
              <header>
                <strong>{host[1].profile && host[1].profile[0].username} <sub></sub></strong>
                <span>Accra Escort (Independant)</span>
              </header>
              <div className={styles.images}>
                <img src={host[1].cover && host[1].cover} alt="" />
                <img src={host[1].profilePic && host[1].profilePic} alt="" />
                {console.log(galleryList[i][0])}
                {
                  galleryList[i][0] ?
                  galleryList[i][0].type == 'image' ?
                  <img src={galleryList[i][0].media } />:
                  <video src={galleryList[i][0].media } autoPlay loop muted></video> 
                  : null
                }
              </div>
              <small className="info">{host[1].profile && host[1].profile[0].bio}</small>
              <button type="button">View Profile </button>
            </Link>
          ))}
        </section>
      </section>
    </>
  );
}

export default Home;