import { Link, useParams } from 'react-router-dom';
import { getTimeSince, icon, sortPostsByTime } from '../../External/external';
import styles from '../../Styles/gallery.module.css';
import { useEffect, useRef, useState } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { fireStoreDB } from '../../Firebase/base';
import { useLoader } from '../../main';
import Navbar from '../../Components/Navbar';

const ViewGallery = () => {
  const cover = 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1695231953/RadioProject/ku34tovapgel6gfyx77l.jpg';
  const face = 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1696775658/profile-1640014292-4a26a41437da03f345e9f0ed8fa0d60e_mu37cj.jpg';
  const face2 = 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1696820751/SSP_698318_1_hxtrnr.jpg';

  const { id } = useParams();
  const { setLoader } = useLoader('');
  const [username, setUsername] = useState('');
  const [posts, setPosts] = useState([]);
  const [likeList, setLikeList] = useState([]);


  // console.log(id)

  useEffect(() => {
    setLoader(true)
    getDoc(doc(fireStoreDB, 'Hosts/' + id))
      .then((res) => {
        setUsername(res.data().profile[0].username)
        getDoc(doc(fireStoreDB, 'Hosts/' + id))
          .then((gallery) => {
            setPosts(gallery.data().posts.sort(sortPostsByTime))
            setLikeList(gallery.data().posts.sort(sortPostsByTime).map((el) => el.likes))
            setLoader(false)
          })
      })
  }, [])

  const likePost = (pid, i) => {
    const likeListTemp = [...likeList]
    likeListTemp[i] = likeListTemp[i] + 1
    setLikeList(likeListTemp);
    const postObj = posts.find((el) => el.id === pid);
    const postObjIndex = posts.findIndex((el) => el.id === pid);
    postObj.likes += 1;
    posts[postObjIndex] = postObj;
    setPosts(posts)
    updateDoc(doc(fireStoreDB, 'Hosts/' + id), {
      posts: posts
    })
      .then(() => {
        console.log('me')
      })
  }


  return (
    <section className={styles.wrapper}>
      <Navbar props={{ type: 'mini' }} />
      <header>
        <strong><Link to={`/viewProfile/${id}`}>{icon('chevron_left')}</Link> {`${username}'s Gallery`}<sub></sub></strong>
      </header>
      <section className={styles.images}>
        {posts.map((el, i) => (
          <div className={styles.imgBox} key={i}>
            <legend onClick={() => { likePost(el.id, i) }}>
              {icon('favorite')}
              <sup>{likeList[i]}</sup>
            </legend>
            {el.type === 'image' ?
              <img src={el.media} alt="" /> :
              <video src={el.media} autoPlay loop muted controls></video>
            }
            <p>
              <sub>{getTimeSince(el.timestamp)}</sub>
            </p>
          </div>
        ))}
      </section>
    </section>
  );
}

export default ViewGallery;