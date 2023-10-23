import styles from "../../Styles/home.module.css";
import Navbar from "../../Components/Navbar";
import { pageHeaderStyle } from "../../External/styles";
import { icon } from "../../External/external";

const PremiumAccount = () => {
  const headAd = 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1698097501/headAd_g6xrua.jpg';
  return (
    <>
      <Navbar props={{ type: 'max' }} />
      <section className={styles.wrapper} style={{gap:'2rem'}}>
        <section className='premiumContentBox'>
          <strong style={pageHeaderStyle}>Premium Account<sub></sub></strong>
          <article className='premiumInfo'>
            <p>{icon('phishing')} <span>Global Exposure</span> </p>
            <p>{icon('phishing')} <span>Top ranking in your city</span> </p>
            <p>{icon('phishing')} <span>Post 5 more on your gallery</span> </p>
            <p>{icon('phishing')} <span>Post videos</span> </p>
          </article>
        </section>

        <section className='premiumContentBox'>
          <strong style={pageHeaderStyle}>Featured Ads.<sub></sub></strong>
          <article className='premiumInfo'>
          <img src={headAd} />
            <p>{icon('phishing')} <span>Global Exposure</span> </p>
            <p>{icon('phishing')} <span>Top ranking in your city</span> </p>
            <p>{icon('phishing')} <span>Post 5 more on your gallery</span> </p>
            <p>{icon('phishing')} <span>Post videos</span> </p>
          </article>
        </section>


      </section>
    </>
  );
}

export default PremiumAccount;