import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import styles from "../../Styles/home.module.css";
import { fireStoreDB } from "../../Firebase/base";
import { collection, getDocs } from "firebase/firestore";
import { useLoader } from "../../main";
import HostList from "../../Components/HostList";
import { pageHeaderStyle } from "../../External/styles";
import { sortHostByTime } from "../../External/external";

const NewEscorts = () => {
  const [hostList, setHostList] = useState('');
  const { setLoader } = useLoader();

  useEffect(() => {
    setLoader(true)
    getDocs(collection(fireStoreDB, 'Hosts/'))
      .then((res) => {
        const hostListTemp = res.docs.map((el) => el.data()).sort(sortHostByTime);
        console.log(hostListTemp)
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
      <strong style={pageHeaderStyle}>New Escorts <sub></sub></strong>
        {hostList && <HostList props={{ list: hostList }} />}
      </section>
    </>
  );
}

export default NewEscorts;