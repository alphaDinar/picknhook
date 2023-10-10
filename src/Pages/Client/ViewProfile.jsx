import Navbar from '../../Components/Navbar';
import { icon, iconFont } from '../../External/external';
import styles from '../../Styles/profile.module.css'

const ViewProfile = () => {
  const cover = 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1696773681/_120424467_joy2_a6y2kz.jpg';
  const face = 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1696775658/profile-1640014292-4a26a41437da03f345e9f0ed8fa0d60e_mu37cj.jpg';

  return (
    <>
      <Navbar props={{type: 'min'}} />
      <section className={styles.wrapper}>
        <section className={styles.coverBox} style={{ backgroundImage: `url(${cover}` }}>
          <legend>
            {icon('verified')}
          </legend>
          <img src={face} />
        </section>
        <section className={styles.infoBox}>
          <p>
            <strong>Austin Rems</strong>
            <small>Kumasi, Ghana</small>
            <span>
              {iconFont('fa-brands fa-instagram', 'https://www.instagram.com/cristiano/?hl=en')}
              {iconFont('fa-brands fa-x-twitter', 'https://twitter.com/home')}
              {iconFont('fa-brands fa-tiktok')}
            </span>
          </p>
          <p>
            <a href=''>{icon('phone_iphone')} +00000000 </a>
            <a href="">{icon('mail')} Austin@gmail.com</a>
          </p>
        </section>
        <section className={styles.bioBox}>
          <h3>Bio</h3>
          <small>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore necessitatibus quae fuga ducimus dignissimos incidunt corporis! Similique magni officiis, culpa laborum, eligendi ratione architecto adipisci neque vero doloremque assumenda esse.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore necessitatibus quae fuga ducimus dignissimos incidunt corporis! Similique magni officiis, culpa laborum, eligendi ratione architecto adipisci neque vero doloremque assumenda esse.
          </small>
        </section>
        <section className={styles.tagBox}>
          <sub>good</sub>
          <sub>convertionalist</sub>
          <sub>longer</sub>
          <sub>time</sub>
          <sub>good</sub>
          <sub>convertionalist</sub>
          <sub>longer</sub>
          <sub>time</sub>
          <sub>good</sub>
          <sub>convertionalist</sub>
          <sub>longer</sub>
          <sub>time</sub>
          <sub>good</sub>
          <sub>convertionalist</sub>
          <sub>longer</sub>
          <sub>time</sub>
          <sub>good</sub>
          <sub>convertionalist</sub>
          <sub>longer</sub>
          <sub>time</sub>
        </section>
        <section className={styles.galleryBox}>
          <img src={cover} />
          <img src={cover} />
          <img src={cover} />
          <img src={cover} />
          <img src={cover} />
        </section>
        <section className={styles.aboutBoxHolder}>
          <h3>About</h3>
          <section className={styles.aboutBox}>
            <section>
              <p>
                <strong>Gender</strong>
                <span>Female</span>
              </p>
              <p>
                <strong>Sexual preference</strong>
                <span>Straight</span>
              </p>
              <p>
                <strong>Languages</strong>
                <span>English, French</span>
              </p>
              <p>
                <strong>Age</strong>
                <span>29 years</span>
              </p>
              <p>
                <strong>Ethnic Group</strong>
                <span>Other</span>
              </p>
              <p>
                <strong>Hair Color</strong>
                <span>Black</span>
              </p>
              <p>
                <strong>Eye Color</strong>
                <span>Black</span>
              </p>
              <p>
                <strong>Hobbies</strong>
                <span>Female</span>
              </p>
            </section>
            <section>
              <p>
                <strong>Breast Cup</strong>
                <span>Female</span>
              </p>
              <p>
                <strong>Shaved</strong>
                <span>Yes</span>
              </p>
              <p>
                <strong>Implants</strong>
                <span>Breast, other</span>
              </p>
              <p>
                <strong>Tattoos</strong>
                <span>Yes</span>
              </p>
              <p>
                <strong>Piercings</strong>
                <span>Yes</span>
              </p>
              <p>
                <strong>Body Size</strong>
                <span>Normal</span>
              </p>
              <p>
                <strong>Height</strong>
                <span>150cm</span>
              </p>
              <p>
                <strong>Weight</strong>
                <span>40kg</span>
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
                <span>Men,Women</span>
              </p>
              <p>
                <strong>Outcall(national)</strong>
                <span>Yes</span>
              </p>
              <p>
                <strong>Incall</strong>
                <span>Yes</span>
              </p>
              <p>
                <strong>Straight Sex</strong>
                <span>Yes</span>
              </p>
              <p>
                <strong>Massage</strong>
                <span>Yes</span>
              </p>
              <p>
                <strong>Oral Sex(giving)</strong>
                <span>Yes</span>
              </p>
              <p>
                <strong>Oral Sex(taking)</strong>
                <span>Yes</span>
              </p>
              <p>
                <strong>Anal Sex(giving)</strong>
                <span>Yes</span>
              </p>
            </section>
            <section>
              <p>
                <strong>French Kissing</strong>
                <span>Yes</span>
              </p>
              <p>
                <strong>Fetish and Fantasy</strong>
                <span>Yes</span>
              </p>
              <p>
                <strong>BDSM</strong>
                <span>No</span>
              </p>
              <p>
                <strong>Striptease(private)</strong>
                <span>Yes</span>
              </p>
              <p>
                <strong>Striptease(group)</strong>
                <span>Yes</span>
              </p>
              <p>
                <strong>Height</strong>
                <span>150cm</span>
              </p>
              <p>
                <strong>Weight</strong>
                <span>40kg</span>
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
              <strong>100 USD</strong>
            </p>
            <p>
              <span> {icon('hourglass')}  extra hour</span>
              <sub></sub>
              <strong>50 USD</strong>
            </p>
            <p>
              <span> {icon('hourglass')}  4 hour</span>
              <sub></sub>
              <strong>400 USD</strong>
            </p>
            <p>
              <span> {icon('hourglass')}  8 hour</span>
              <sub></sub>
              <strong>450 USD</strong>
            </p>
            <p>
              <span> {icon('hourglass')}  24 hour</span>
              <sub></sub>
              <strong>500 USD</strong>
            </p>
            <p>
              <span style={{color:'var(--theme)'}}> Payments</span>
              <sub></sub>
              <strong style={{color:'var(--theme)'}}>Cash</strong>
            </p>
          </section>
        </section>
        <section className={styles.contactBox}>
          ascascas
        </section>
      </section>
    </>

  );
}

export default ViewProfile;