import Navbar from "../../Components/Navbar";
import styles from "../../Styles/home.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from "react-router-dom";
import { countryList, icon, sortHostByTime, sortPostsByTime } from "../../External/external";
import { useEffect, useState } from "react";
import { fireStoreDB } from '../../Firebase/base';
import { getDocs, collection } from 'firebase/firestore';
import { useLoader } from "../../main";
import axios from "axios";
import HostList from "../../Components/HostList";

const Home = () => {
  const sample = 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1696773681/_120424467_joy2_a6y2kz.jpg';

  const [hostList, setHostList] = useState('');
  const { setLoader } = useLoader();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setLoader(true)
    const getCountry = () => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            if (lat, lon) {
              const url = `https://nominatim.openstreetmap.org/reverse.php?lat=${lat}&lon=${lon}&zoom=3&format=jsonv2`;
              axios.get(url)
                .then((countryRes) => {
                  const userCountry = countryRes.data.name;
                  console.log(userCountry)
                  getDocs(collection(fireStoreDB, 'Hosts/'))
                    .then((res) => {
                      const hostListTemp = res.docs.map((el) => el.data());
                      setHostList(hostListTemp.filter((el) => el.country === userCountry).sort(sortHostByTime))
                      setCountries(countryList())
                      setLoader(false)
                    })
                    .catch((error) => console.log(error))
                })
                .catch((error) => console.log(error))
            }
          },
          (error) => {
            console.log(error)
          }
        );
      } else {
        alert('Turn on location');
        console.log("Geolocation is not available in this browser.");
      }

    }
    getCountry();

  }, [])

  return (
    <>
      <Navbar props={{ type: 'max' }} />
      <section className={styles.wrapper}>
        <section className={styles.introBox}>
          <section className={styles.right}>
            <Swiper loop={true} autoplay={{ delay: 3000 }} modules={[Autoplay]} className={styles.introSwiper}>
              {hostList && hostList.map((host, i) => (
                <SwiperSlide key={i} className={styles.introSlide} style={{ backgroundImage: `url(${host.profilePic && host.profilePic})` }}>
                  <Link to={`/viewProfile/${host.id}`}>
                    <strong>{host.profile[0].username}</strong>
                    <span> {icon('location_on')}  {host.profile[0].location}</span>
                    <sub></sub>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
          <section className={styles.left}>
            <strong id="logo">Pick&Hook</strong>
            <p>Your Top Escort Agency</p>
            <Link to={'/register'}>Create A free Escort Profile Today</Link>
          </section>
          <form>
            <section>
              <div className={styles.inputField}>
                <span>Country</span>
                <select name="" id="">
                  {countries.map((el, i) => (
                    <option key={i} value="">{el}</option>
                  ))}
                </select>
              </div>
              <div className={styles.inputField}>
                <span>Region</span>
                <select>
                  <option value="">All</option>
                  <option value="">Greater</option>
                  <option value="">Ashanti</option>
                  <option value="">Eastern</option>
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
              {icon('phishing')}
            </button>
          </form>
        </section>
        {hostList && <HostList props={{ list: hostList }} />}
      </section>
    </>
  );
}

export default Home;