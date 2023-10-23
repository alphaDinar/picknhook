import { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar';
import { icon, iconFont, sortPostsByTime } from '../../External/external';
import styles from '../../Styles/profile.module.css'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { fireStoreDB } from '../../Firebase/base';
import { useLoader } from '../../main';

const ViewProfile = () => {
  const navigate = useNavigate();
  const [host, setHost] = useState('');
  const { id } = useParams();
  const { setLoader } = useLoader();
  const [gallery, setGallery] = useState([]);
  const [lastPostIndex, setLastPostIndex] = useState(0);


  useEffect(() => {
    setLoader(true);
    getDoc(doc(fireStoreDB, 'Hosts/' + id))
      .then((res) => {
        console.log(res.data().createdOn.sv)
        setHost(res.data())
        setGallery(res.data().posts.sort(sortPostsByTime).slice(0, 5))
        setLastPostIndex(res.data().posts.slice(0, 5).length - 1)
        setLoader(false);
      })
      .catch(() => {
        navigate('/')
      })
  }, [])


  return (
    <>
      <Navbar props={{ type: 'min' }} />
      {host &&
        <section className={styles.wrapper}>
          <section className={styles.coverBox} style={{ backgroundImage: `url(${host.cover}` }}>
            <legend>
              {icon('verified')}
            </legend>
            <img src={host.profilePic} />
          </section>
          <section className={styles.infoBox}>
            <p>
              <strong>{host.profile[0].username}</strong>
              <small>{host.profile[0].location}, {host.country}</small>
              <span>
                {iconFont('fa-brands fa-instagram', `${host.profile[0].instagram}`)}
                {iconFont('fa-brands fa-x-twitter', `${host.profile[0].xSpace}`)}
                {iconFont('fa-brands fa-tiktok', `${host.profile[0].tiktok}`)}
                {iconFont('fa-solid fa-desktop', `${host.profile[0].site}`)}
              </span>
            </p>
            <p>
              <a href=''>{icon('phone_iphone')} {host.profile[0].phone || '--'} </a>
              <a href="">{icon('mail')} {host.profile[0].email || '--'}</a>
            </p>
          </section>
          <section className={styles.bioBox}>
            <h3>Bio</h3>
            <small>
              {host.profile[0].bio}
            </small>
          </section>
          {host.tags.length > 0 &&
            <section className={styles.tagBox}>
              {host.tags.map((tag, i) => (
                <sub key={i}>{tag}</sub>
              ))}
            </section>
          }
          <section className={styles.galleryBoxHolder}>
            <h3>Gallery</h3>
            <section className={styles.galleryBox}>
              {gallery.map((el, i) => (
                i < 4 ?
                  el.type === 'image' ?
                    <img key={i} src={el.media} /> :
                    <video key={i} src={el.media} autoPlay muted loop></video>
                  : null
              ))}
              <Link to={`/viewGallery/${id}`}>
                {gallery.length > 0 &&
                  <>
                    {gallery[lastPostIndex].type === 'image' ?
                      <img src={gallery[lastPostIndex].media} /> :
                      <video src={gallery[lastPostIndex].media}></video>
                    }
                    <p>
                      <span>View More</span>
                      {icon('chevron_right')}
                    </p>
                  </>
                }
              </Link>
            </section>
          </section>
          <section className={styles.aboutBoxHolder}>
            <h3>About</h3>
            <section className={styles.aboutBox}>
              <section>
                <p>
                  <strong>Gender</strong>
                  <span>{host.profile[0].gender || 'not specified'}</span>
                </p>
                <p>
                  <strong>Sexual preference</strong>
                  <span>{host.profile[0].SexPref || 'not specified'}</span>
                </p>
                <p>
                  <strong>Languages</strong>
                  <span>{host.profile[0].languages || 'not specified'}</span>
                </p>
                <p>
                  <strong>Age</strong>
                  <span>{host.profile[0].age || 'not specified'} years</span>
                </p>
                <p>
                  <strong>Ethnic Group</strong>
                  <span>{host.profile[0].ethnic || 'not specified'}</span>
                </p>
                <p>
                  <strong>Hair Color</strong>
                  <span>{host.profile[0].hair || 'not specified'}</span>
                </p>
                <p>
                  <strong>Eye Color</strong>
                  <span>{host.profile[0].eye || 'not specified'}</span>
                </p>
                <p>
                  <strong>Hobbies</strong>
                  <span>{host.profile[0].hobby || 'not specified'}</span>
                </p>
              </section>
              <section>
                <p>
                  <strong>Breast Cup</strong>
                  <span>{host.profile[0].breast || 'not specified'}</span>
                </p>
                <p>
                  <strong>Shaved</strong>
                  <span>{host.profile[0].shaved || 'not specified'}</span>
                </p>
                <p>
                  <strong>Implants</strong>
                  <span>{host.profile[0].implants || 'not specified'}</span>
                </p>
                <p>
                  <strong>Tattoos</strong>
                  <span>{host.profile[0].tattoos || 'not specified'}</span>
                </p>
                <p>
                  <strong>Piercings</strong>
                  <span>{host.profile[0].pierce || 'not specified'}</span>
                </p>
                <p>
                  <strong>Body Size</strong>
                  <span>{host.profile[0].body || 'not specified'}</span>
                </p>
                <p>
                  <strong>Height</strong>
                  <span>{host.profile[0].height || 'not specified'}</span>
                </p>
                <p>
                  <strong>Weight</strong>
                  <span>{host.profile[0].weight || 'not specified'}</span>
                </p>
              </section>
            </section>
          </section>
          <section className={styles.aboutBoxHolder}>
            <h3>Services</h3>
            <section className={styles.aboutBox}>
              <section>
                <p>
                  <strong>Clients</strong>
                  <span>{host.profile[0].clients || 'not specified'}</span>
                </p>
                <p>
                  <strong>Outcall(national)</strong>
                  <span>{host.profile[0].outcall || 'not specified'}</span>
                </p>
                <p>
                  <strong>Incall</strong>
                  <span>{host.profile[0].incall || 'not specified'}</span>
                </p>
                <p>
                  <strong>Straight Sex</strong>
                  <span>{host.profile[0].straightSex || 'not specified'}</span>
                </p>
                <p>
                  <strong>Massage</strong>
                  <span>{host.profile[0].massage || 'not specified'}</span>
                </p>
                <p>
                  <strong>Oral Sex(giving)</strong>
                  <span>{host.profile[0].oralG || 'not specified'}</span>
                </p>
                <p>
                  <strong>Oral Sex(taking)</strong>
                  <span>{host.profile[0].oralT || 'not specified'}</span>
                </p>
                <p>
                  <strong>Anal Sex(giving)</strong>
                  <span>{host.profile[0].anal || 'not specified'}</span>
                </p>
              </section>
              <section>
                <p>
                  <strong>French Kissing</strong>
                  <span>{host.profile[0].french || 'not specified'}</span>
                </p>
                <p>
                  <strong>Fetish and Fantasy</strong>
                  <span>{host.profile[0].fetish || 'not specified'}</span>
                </p>
                <p>
                  <strong>BDSM</strong>
                  <span>{host.profile[0].bdsm || 'not specified'}</span>
                </p>
                <p>
                  <strong>Striptease(private)</strong>
                  <span>{host.profile[0].stripP || 'not specified'}</span>
                </p>
                <p>
                  <strong>Striptease(group)</strong>
                  <span>{host.profile[0].stripG || 'not specified'}</span>
                </p>
              </section>
            </section>
          </section>

          <section className={styles.priceBox}>
            <h3>Pricing</h3>
            <section>
              <p>
                <span> {icon('hourglass')}  1 hour</span>
                <sub></sub>
                <strong>{host.payment[0].price1 || '-'} USD</strong>
              </p>
              <p>
                <span> {icon('hourglass')}  extra hour</span>
                <sub></sub>
                <strong>{host.payment[0].priceExtra || '-'} USD</strong>
              </p>
              <p>
                <span> {icon('hourglass')}  4 hour</span>
                <sub></sub>
                <strong>{host.payment[0].price4 || '-'} USD</strong>
              </p>
              <p>
                <span> {icon('hourglass')}  8 hour</span>
                <sub></sub>
                <strong>{host.payment[0].price8 || '-'} USD</strong>
              </p>
              <p>
                <span> {icon('hourglass')}  24 hour</span>
                <sub></sub>
                <strong>{host.payment[0].price24 || '-'} USD</strong>
              </p>
              <p>
                <span style={{ color: 'var(--theme)' }}> Payments</span>
                <sub></sub>
                <strong style={{ color: 'var(--theme)' }}>Cash</strong>
              </p>
            </section>
          </section>
          <section className={styles.contactBox}>
            ascascas
          </section>
        </section>
      }
    </>

  );
}

export default ViewProfile;