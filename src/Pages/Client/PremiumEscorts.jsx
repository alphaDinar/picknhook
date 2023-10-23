import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import styles from "../../Styles/home.module.css";
import { fireStoreDB } from "../../Firebase/base";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useLoader } from "../../main";
import HostList from "../../Components/HostList";
import { pageHeaderStyle } from "../../External/styles";

const PremiumEscorts = () => {
  const [hostList, setHostList] = useState('');
  const { setLoader } = useLoader();

  useEffect(() => {
    setLoader(true)
    const premiumQuery = query(collection(fireStoreDB, 'Hosts/'), where('class', '==', 'premium'));
    getDocs(premiumQuery)
      .then((res) => {
        const hostListTemp = (res.docs.map((el) => el.data()));
        setHostList(hostListTemp)
        // setCountries(countryList())
        setLoader(false)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <>
      <Navbar props={{ type: 'max' }} />
      <section className={styles.wrapper}>
        <strong style={pageHeaderStyle}>Premium Escorts <sub></sub></strong>
        {hostList && <HostList props={{ list: hostList }} />}
      </section>
    </>
  );
}

export default PremiumEscorts;