import { useEffect, useState } from 'react';
import { getTimeSince, icon, sortPostsByTime } from '../../External/external';
import styles from '../../Styles/gallery.module.css';
import { useLoader } from '../../main';
import { onAuthStateChanged } from 'firebase/auth';
import { fireAuth, fireStoreDB, storageDB } from '../../Firebase/base';
import { Link, useNavigate } from 'react-router-dom';
import { getDoc, doc, setDoc, updateDoc } from 'firebase/firestore';
import { uploadBytes, ref as storageRef, getDownloadURL } from 'firebase/storage';
import Navbar from '../../Components/Navbar';

const CreateGallery = () => {
  const cover = 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1695231953/RadioProject/ku34tovapgel6gfyx77l.jpg';
  const face = 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1696775658/profile-1640014292-4a26a41437da03f345e9f0ed8fa0d60e_mu37cj.jpg';
  const face2 = 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1696820751/SSP_698318_1_hxtrnr.jpg';

  const { setLoader } = useLoader();
  const navigate = useNavigate();
  const [previewImage, setPreviewImage] = useState('');
  const [media, setMedia] = useState('');
  const [mediaType, setMediaType] = useState('image');
  const [username, setUsername] = useState('');
  const [posts, setPosts] = useState([]);
  const [uid, setUid] = useState('');

  useEffect(() => {
    setLoader(true);
    onAuthStateChanged(fireAuth, (user) => {
      if (user) {
        setUid(user.uid);
        getDoc(doc(fireStoreDB, 'Hosts/' + user.uid))
          .then((res) => {
            setUsername(res.data().profile[0].username);
            setPosts(res.data().posts.sort(sortPostsByTime))
            setLoader(false);
          })
      } else {
        navigate('/login')
      }
    })
  }, [])

  const addPost = () => {
    if (media) {
      setLoader(true)
      uploadBytes(storageRef(storageDB, 'HostsStorage/' + media.name), media)
        .then((res) => {
          getDownloadURL(res.ref)
            .then((url) => {
              const postObj = {
                id : `post${Date.now()}`,
                media: url,
                type: mediaType,
                likes: 0,
                timestamp: Date.now()
              }
              const updatedPosts = [...posts,postObj];
              setPosts([...posts,postObj].sort(sortPostsByTime))
              // const updatedPostsTemp = [...posts,postObj].reverse();
              setMedia('');
              setPreviewImage('');
              setMediaType('image');
              updateDoc(doc(fireStoreDB, 'Hosts/' + uid), {
                posts: updatedPosts
              })
                .then(()=>{setLoader(false)})
                .catch((error) => console.log(error))
            })
        })
    }
  }

  const handleFile = (file) => {
    setMediaType(file.type.split('/')[0]);
  }

  const removePost =(pid)=>{
    const option = window.confirm('Do you want to delete post');
    if(option){
      const updatedPosts = [...posts.filter((el)=> el.id !== pid)];
      // const updatedPostsTemp = updatedPosts.reverse();
      setPosts(updatedPosts);
      updateDoc(doc(fireStoreDB, 'Hosts/' + uid), {
        posts: updatedPosts
      })
      .then(()=>{
        console.log('deleted')
      })
    }    
  }


  return (
    <section className={styles.wrapper}>
      <Navbar props={{type:'mini'}} />
      <header>
        <strong><Link to={`/createProfile`}>{icon('chevron_left')}</Link> {`${username}'s Gallery`}<sub></sub></strong>
      </header>

      <section className={styles.images}>
        <div className={`${styles.imgBox} ${styles.add}`}>
          <legend>
            {icon('favorite')}
            <label htmlFor="addImage">
              Choose Image/Video
              <input type="file" id='addImage' onChange={e => { setMedia(e.target.files[0]); setPreviewImage(URL.createObjectURL(e.target.files[0])); handleFile(e.target.files[0]) }} accept='image/*,video/*' style={{ display: 'none' }} />
            </label>
          </legend>
          {mediaType === 'image' ?
            <img src={previewImage} alt="" /> :
            <video src={previewImage} controls autoPlay muted></video>
          }
          <p>
            <button type="button" onClick={addPost}>Add Post</button>
          </p>
        </div>
        {posts.map((el,i) => (
          <div key={i} className={styles.imgBox}>
            <legend>
              {icon('favorite')}
              <sup>{el.likes}</sup>
            </legend>
            <article onClick={e=>{removePost(el.id)}}>
              {icon('delete')}
            </article>
            {el.type === 'image' ?
              <img src={el.media} alt="" /> :
              <video src={el.media} controls autoPlay muted loop></video>
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

export default CreateGallery;