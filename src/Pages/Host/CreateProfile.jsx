import { useEffect, useRef, useState } from 'react';
import Navbar from '../../Components/Navbar';
import { icon, iconFont, sortPostsByTime } from '../../External/external';
import styles from '../../Styles/profile.module.css'
import { useLoader } from '../../main';
import { onAuthStateChanged } from 'firebase/auth';
import { fireAuth, fireStoreDB, storageDB } from '../../Firebase/base';
import { Link, useNavigate } from 'react-router-dom';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { uploadBytes, ref as storageRef, getDownloadURL } from 'firebase/storage';

const CreateProfile = () => {
  const { loader, setLoader } = useLoader();
  const navigate = useNavigate();

  const [cover, setCover] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const [coverPreview, setCoverPreview] = useState('');
  const [profilePicPreview, setProfilePicPreview] = useState('');

  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [instagram, setInstagram] = useState('');
  const [xSpace, setXSpace] = useState('');
  const [tiktok, setTiktok] = useState('');
  const [bio, setBio] = useState('');
  const [tags, setTags] = useState([]);
  const [tagIn, setTagIn] = useState('');
  const tagSubs = useRef([]);
  const [gallery, setGallery] = useState([]);
  const [lastPostIndex, setLastPostIndex] = useState(0);
  const [score, setScore] = useState(0);

  const [gender, setGender] = useState('not specified');
  const [sexPref, setSexPref] = useState('not specified');
  const [languages, setLanguages] = useState('');
  const [age, setAge] = useState('');
  const [ethnic, setEthnic] = useState('');
  const [hair, setHair] = useState('');
  const [eye, setEye] = useState('');
  const [hobby, setHobby] = useState('');
  const [breast, setBreast] = useState('');
  const [shaved, setShaved] = useState('');
  const [implants, setImplants] = useState('');
  const [tattoos, setTattoos] = useState('');
  const [pierce, setPierce] = useState('');
  const [body, setBody] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [clients, setClients] = useState('');
  const [outcall, setOutcall] = useState('not specified');
  const [incall, setIncall] = useState('not specified');
  const [straightSex, setStraightSex] = useState('not specified');
  const [massage, setMassage] = useState('not specified');
  const [oralG, setOralG] = useState('not specified');
  const [oralT, setOralT] = useState('not specified');
  const [anal, setAnal] = useState('not specified');
  const [french, setFrench] = useState('not specified');
  const [fetish, setFetish] = useState('not specified');
  const [BDSM, setBDSM] = useState('not specified');
  const [stripP, setStripP] = useState('not specified');
  const [stripG, setStripG] = useState('not specified');

  const [price1, setPrice1] = useState('');
  const [priceExtra, setPriceExtra] = useState('');
  const [price4, setPrice4] = useState('');
  const [price8, setPrice8] = useState('');
  const [price24, setPrice24] = useState('');
  const [payment, setPayment] = useState('all');

  const [imageSet, setImage] = useState(['', '', '', '', '']);
  const previewImageSet = useRef([]);

  useEffect(() => {
    setLoader(true);
    onAuthStateChanged(fireAuth, (user) => {
      if (user) {
        getDoc(doc(fireStoreDB, 'Hosts/' + user.uid))
          .then((res) => {
            const userDoc = res.data()
            userDoc.phone && setPhone(userDoc.phone);
            userDoc.profile[0].username && setUsername(userDoc.profile[0].username);
            userDoc.profile[0].location && setLocation(userDoc.profile[0].location);
            userDoc.profile[0].phone && setPhone(userDoc.profile[0].phone);
            userDoc.profile[0].email && setEmail(userDoc.profile[0].email);
            userDoc.profile[0].instagram && setInstagram(userDoc.profile[0].instagram);
            userDoc.profile[0].xSpace && setXSpace(userDoc.profile[0].xSpace);
            userDoc.profile[0].tiktok && setTiktok(userDoc.profile[0].tiktok);
            userDoc.profile[0].bio && setBio(userDoc.profile[0].bio);

            userDoc.profile[0].gender && setGender(userDoc.profile[0].gender);
            userDoc.profile[0].sexPref && setSexPref(userDoc.profile[0].sexPref);
            userDoc.profile[0].languages && setLanguages(userDoc.profile[0].languages);
            userDoc.profile[0].age && setAge(userDoc.profile[0].age);
            userDoc.profile[0].ethnic && setEthnic(userDoc.profile[0].ethnic);
            userDoc.profile[0].hair && setHair(userDoc.profile[0].hair);
            userDoc.profile[0].eye && setEye(userDoc.profile[0].eye);
            userDoc.profile[0].hobby && setHobby(userDoc.profile[0].hobby);
            userDoc.profile[0].breast && setBreast(userDoc.profile[0].breast);
            userDoc.profile[0].shaved && setShaved(userDoc.profile[0].shaved);
            userDoc.profile[0].implants && setImplants(userDoc.profile[0].implants);
            userDoc.profile[0].tattoos && setTattoos(userDoc.profile[0].tattoos);
            userDoc.profile[0].pierce && setPierce(userDoc.profile[0].pierce);
            userDoc.profile[0].body && setBody(userDoc.profile[0].body);
            userDoc.profile[0].height && setHeight(userDoc.profile[0].height);
            userDoc.profile[0].weight && setWeight(userDoc.profile[0].weight);
            userDoc.profile[0].clients && setClients(userDoc.profile[0].clients);
            userDoc.profile[0].outcall && setOutcall(userDoc.profile[0].outcall);
            userDoc.profile[0].incall && setIncall(userDoc.profile[0].incall);
            userDoc.profile[0].straightSex && setStraightSex(userDoc.profile[0].straightSex);
            userDoc.profile[0].massage && setMassage(userDoc.profile[0].massage);
            userDoc.profile[0].oralG && setOralG(userDoc.profile[0].oralG);
            userDoc.profile[0].oralT && setOralT(userDoc.profile[0].oralT);
            userDoc.profile[0].anal && setAnal(userDoc.profile[0].anal);
            userDoc.profile[0].french && setFrench(userDoc.profile[0].french);
            userDoc.profile[0].fetish && setFetish(userDoc.profile[0].fetish);
            userDoc.profile[0].bdsm && setBDSM(userDoc.profile[0].bdsm);
            userDoc.profile[0].stripP && setStripP(userDoc.profile[0].stripP);
            userDoc.profile[0].stripG && setStripG(userDoc.profile[0].stripG);

            userDoc.payment[0].price1 && setPrice1(userDoc.payment[0].price1);
            userDoc.payment[0].priceExtra && setPriceExtra(userDoc.payment[0].priceExtra);
            userDoc.payment[0].price4 && setPrice4(userDoc.payment[0].price4);
            userDoc.payment[0].price8 && setPrice8(userDoc.payment[0].price8);
            userDoc.payment[0].price24 && setPrice24(userDoc.payment[0].price24);
            userDoc.payment[0].payment && setPayment(userDoc.payment[0].payment);

            userDoc.cover && setCoverPreview(userDoc.cover);
            userDoc.profilePic && setProfilePicPreview(userDoc.profilePic);


            setGallery(userDoc.posts.sort(sortPostsByTime).slice(0, 5))
            setLastPostIndex(userDoc.posts.slice(0, 5).length - 1)
            setLoader(false);
            const tes = userDoc.posts.reduce((val, el) => val + el.likes, 0);
            console.log(userDoc)
          })
          .catch((error) => console.log(error))
      } else {
        navigate('/login');
      }
    })
  }, [])


  // console.log(profilePicPreview)


  const handleImages = () => {
    // console.log('images')
    const gallerySet = [];
    gallerySet.push({ 'cover': cover });
    gallerySet.push({ 'profile': profile });

    console.log(gallerySet)
    gallerySet.map((el) => {
      console.log(Object.keys(el))
      console.log(Object.values(el))
    })

  }

  const updateProfile = () => {
    setLoader(true);
    onAuthStateChanged(fireAuth, async (user) => {
      if (user) {
        if (cover) {
          await uploadBytes(storageRef(storageDB, 'HostsStorage/' + cover.name + Date.now().toString()), cover)
            .then((res) => {
              getDownloadURL(res.ref)
                .then((imgURL) => {
                  updateDoc(doc(fireStoreDB, 'Hosts/' + user.uid), {
                    cover: imgURL
                  })
                    .then(setLoader(false))
                    .catch((error) => console.log(error))
                })
            })
        }
        if (profilePic) {
          await uploadBytes(storageRef(storageDB, 'HostsStorage/' + profilePic.name + Date.now().toString()), profilePic)
            .then((res) => {
              getDownloadURL(res.ref)
                .then((imgURL) => {
                  updateDoc(doc(fireStoreDB, 'Hosts/' + user.uid), {
                    profilePic: imgURL
                  })
                    .then(setLoader(false))
                    .catch((error) => console.log(error))
                })
            })
        }

        updateDoc(doc(fireStoreDB, 'Hosts/' + user.uid), {
          profile: [{
            username: username,
            location: location,
            phone: phone,
            email: email,
            instagram: instagram,
            xSpace: xSpace,
            tiktok: tiktok,
            bio: bio,
            gender: gender,
            sexPref: sexPref,
            languages: languages,
            age: age,
            ethnic: ethnic,
            hair: hair,
            eye: eye,
            hobby: hobby,
            breast: breast,
            shaved: shaved,
            implants: implants,
            tattoos: tattoos,
            pierce: pierce,
            body: body,
            height: height,
            weight: weight,
            clients: clients,
            outcall: outcall,
            incall: incall,
            straightSex: straightSex,
            massage: massage,
            oralG: oralG,
            oralT: oralT,
            anal: anal,
            french: french,
            fetish: fetish,
            bdsm: BDSM,
            stripP: stripP,
            stripG: stripG
          }],
          payment: [{
            price1: price1,
            priceExtra: priceExtra,
            price4: price4,
            price8: price8,
            price24: price24,
            payment: payment
          }],
          tags: tags,
        })
          .then(() => {
            console.log('changed')
            !cover && setLoader(false);
          })
          .catch((error) => { console.log(error); setLoader(false) })
      }
    })
    console.log('me')
  }

  const addTag = () => {
    if (tagIn) {
      const updatedTags = [...tags, tagIn];
      setTags(updatedTags);
      setTagIn('');
    }
  }

  const remTag = (i) => {
    const updatedTags = tags.filter((tag) => tags.indexOf(tag) !== i);
    setTags(updatedTags)
  }

  const handleImage = (img, i) => {
    imageSet[i] = img;
    previewImageSet.current[i].src = URL.createObjectURL(img);
  }

  return (
    <>
      <Navbar props={{ type: 'min' }} />
      <section className={styles.hostPanel}>

      </section>
      <form className={styles.wrapper} onSubmit={e => { e.preventDefault(); updateProfile() }}>
        <section className={styles.coverBox} style={{ backgroundImage: `url(${coverPreview})` }}>
          <label htmlFor="addCoverImage" style={{ display: 'flex', width: '100%', height: '100%' }}>
            <input type="file" id='addCoverImage' onChange={e => {
              setCover(e.target.files[0])
              setCoverPreview(URL.createObjectURL(e.target.files[0]))
            }} accept='image/*' style={{ display: 'none' }} />
            <sup className={styles.imgSheet} style={{ borderRadius: '10px' }}>{icon('add_a_photo')}</sup>
          </label>
          <legend>
            {icon('verified')}
          </legend>

          <div className={styles.profilePreviewBox}>
            <label>
              <input type="file" id='addCoverImage' onChange={e => {
                setProfilePic(e.target.files[0])
                setProfilePicPreview(URL.createObjectURL(e.target.files[0]))
              }} accept='image/*' style={{ display: 'none' }} />
              <sup className={styles.imgSheet} style={{ borderRadius: '50%', fontSize: '1rem' }}>{icon('add_a_photo')}</sup>
              <img src={profilePicPreview} style={{ position: 'revert' }} />
            </label>
          </div>
        </section>
        <section className={styles.infoBox}>
          <p>
            <strong><input type="text" placeholder='Username' value={username} onChange={e => { setUsername(e.target.value) }} required /></strong>
            <small><input type="text" placeholder='Location' value={location} onChange={e => { setLocation(e.target.value) }} required /></small>
          </p>
          <p>
            <a >{icon('phone_iphone')} <input type="tel" placeholder='Phone' value={phone} onChange={e => { setPhone(e.target.value) }} required /> </a>
            <a >{icon('mail')} <input type="email" placeholder='Email (optional)' value={email} onChange={e => { setEmail(e.target.value) }} /></a>
          </p>
        </section>
        <section className={styles.infoBox}>
          <p>
            <span>{iconFont('fa-brands fa-instagram')} <input type="text" value={instagram} onChange={e => { setInstagram(e.target.value) }} placeholder='optional' /> </span>
            <span>{iconFont('fa-brands fa-x-twitter')} <input type="text" value={xSpace} onChange={e => { setXSpace(e.target.value) }} placeholder='optional' /> </span>
            <span>{iconFont('fa-brands fa-tiktok')} <input type="text" value={tiktok} onChange={e => { setTiktok(e.target.value) }} placeholder='optional' /> </span>
          </p>
        </section>
        <section className={styles.bioBox}>
          <h3>Bio</h3>
          <small>
            <textarea value={bio} onChange={e => { setBio(e.target.value) }} placeholder='about yourself' required />
          </small>
        </section>
        <section className={styles.tagBox}>
          {tags.map((el, i) => (
            <sub onClick={() => { remTag(i) }}>{el} {icon('delete')}</sub>
          ))}
          <div>
            <input type="text" placeholder='your tags eg: freaky' value={tagIn} onChange={e => { setTagIn(e.target.value) }} /> <button type='button' onClick={addTag}> {icon('add')}</button>
          </div>
        </section>
        <section className={styles.galleryBoxHolder}>
          <h3>Gallery</h3>
          <section className={styles.galleryBox}>
            {gallery.map((el, i) => (
              i < 4 ?
                el.type === 'image' ?
                  <img src={el.media} /> :
                  <video src={el.media} autoPlay muted loop></video>
                : null
            ))}
            <Link to={`/createGallery`}>
              {gallery.length > 0 &&
                <>
                  <img src={gallery[lastPostIndex].media} />
                  <p>
                    <span>Gallery</span>
                    {icon('chevron_right')}
                  </p>
                </>
              }
            </Link>
          </section>
          <small>
            <Link to={`/createGallery`}>Add To gallery</Link>
          </small>
        </section>
        <section className={styles.aboutBoxHolder}>
          <h3>About</h3>
          <section className={styles.aboutBox}>
            <section>
              <p>
                <strong>Gender</strong>
                <select value={gender} onChange={e => { setGender(e.target.value) }}>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                </select>
              </p>
              <p>
                <strong>Sexual preference</strong>
                <select value={sexPref} onChange={e => { setSexPref(e.target.value) }}>
                  <option value="straight">Straight</option>
                  <option value="bi">Bi</option>
                </select>
              </p>
              <p>
                <strong>Languages</strong>
                <span><input type="text" value={languages} onChange={e => { setLanguages(e.target.value) }} /></span>
              </p>
              <p>
                <strong>Age</strong>
                <span><input type="number" placeholder='in years' value={age} onChange={e => { setAge(e.target.value) }} /></span>
              </p>
              <p>
                <strong>Ethnic Group</strong>
                <span><input type="text" value={ethnic} onChange={e => { setEthnic(e.target.value) }} /></span>
              </p>
              <p>
                <strong>Hair Color</strong>
                <span><input type="text" value={hair} onChange={e => { setHair(e.target.value) }} /></span>
              </p>
              <p>
                <strong>Eye Color</strong>
                <span><input type="text" value={eye} onChange={e => { setEye(e.target.value) }} /></span>
              </p>
              <p>
                <strong>Hobbies</strong>
                <span><input type="text" placeholder='seperated with commas' value={hobby} onChange={e => { setHobby(e.target.value) }} /></span>
              </p>
            </section>
            <section>
              <p>
                <strong>Breast Cup</strong>
                <span><input type="text" value={breast} onChange={e => { setBreast(e.target.value) }} /></span>
              </p>
              <p>
                <strong>Shaved</strong>
                <select value={shaved} onChange={e => { setShaved(e.target.value) }}>
                  <option value='not specified'>Not specified</option>
                  <option value="yes">yes</option>
                  <option value="no">no</option>
                </select>
              </p>
              <p>
                <strong>Implants</strong>
                <span><input type="text" value={implants} placeholder='breast etc. or no' onChange={e => { setImplants(e.target.value) }} /></span>
              </p>
              <p>
                <strong>Tattoos</strong>
                <span><input type="text" value={tattoos} placeholder='leg tattoos etc. or no' onChange={e => { setTattoos(e.target.value) }} /></span>
              </p>
              <p>
                <strong>Piercings</strong>
                <span><input type="text" value={pierce} placeholder='ear piercing etc. or no' onChange={e => { setPierce(e.target.value) }} /></span>
              </p>
              <p>
                <strong>Body Size</strong>
                <span><input type="text" value={body} onChange={e => { setBody(e.target.value) }} /></span>
              </p>
              <p>
                <strong>Height</strong>
                <span><input type="text" value={height} placeholder='cm or feet' onChange={e => { setHeight(e.target.value) }} /></span>
              </p>
              <p>
                <strong>Weight</strong>
                <span><input type="text" value={weight} placeholder='kg or lb' onChange={e => { setWeight(e.target.value) }} /></span>
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
                <span><input type="text" value={clients} placeholder='men,women' onChange={e => { setClients(e.target.value) }} /></span>
              </p>
              <p>
                <strong>Outcall(national)</strong>
                <select value={outcall} onChange={e => { setOutcall(e.target.value) }}>
                  <option value='not specified'>Not specified</option>
                  <option value="yes">yes</option>
                  <option value="no">no</option>
                </select>
              </p>
              <p>
                <strong>Incall</strong>
                <select value={incall} onChange={e => { setIncall(e.target.value) }}>
                  <option value='not specified'>Not specified</option>
                  <option value="yes">yes</option>
                  <option value="no">no</option>
                </select>
              </p>
              <p>
                <strong>Straight Sex</strong>
                <select value={straightSex} onChange={e => { setStraightSex(e.target.value) }}>
                  <option value='not specified'>Not specified</option>
                  <option value="yes">yes</option>
                  <option value="no">no</option>
                </select>
              </p>
              <p>
                <strong>Massage</strong>
                <select value={massage} onChange={e => { setMassage(e.target.value) }}>
                  <option value='not specified'>Not specified</option>
                  <option value="yes">yes</option>
                  <option value="no">no</option>
                </select>
              </p>
              <p>
                <strong>Oral Sex(giving)</strong>
                <select value={oralG} onChange={e => { setOralG(e.target.value) }}>
                  <option value='not specified'>Not specified</option>
                  <option value="yes">yes</option>
                  <option value="no">no</option>
                </select>
              </p>
              <p>
                <strong>Oral Sex(taking)</strong>
                <select value={oralT} onChange={e => { setOralT(e.target.value) }}>
                  <option value='not specified'>Not specified</option>
                  <option value="yes">yes</option>
                  <option value="no">no</option>
                </select>
              </p>
            </section>
            <section>
              <p>
                <strong>Anal Sex</strong>
                <select value={anal} onChange={e => { setAnal(e.target.value) }}>
                  <option value='not specified'>Not specified</option>
                  <option value="yes">yes</option>
                  <option value="no">no</option>
                </select>
              </p>
              <p>
                <strong>French Kissing</strong>
                <select value={french} onChange={e => { setFrench(e.target.value) }}>
                  <option value='not specified'>Not specified</option>
                  <option value="yes">yes</option>
                  <option value="no">no</option>
                </select>
              </p>
              <p>
                <strong>Fetish and Fantasy</strong>
                <select value={fetish} onChange={e => { setFetish(e.target.value) }}>
                  <option value='not specified'>Not specified</option>
                  <option value="yes">yes</option>
                  <option value="no">no</option>
                </select>
              </p>
              <p>
                <strong>BDSM</strong>
                <select value={BDSM} onChange={e => { setBDSM(e.target.value) }}>
                  <option value='not specified'>Not specified</option>
                  <option value="yes">yes</option>
                  <option value="no">no</option>
                </select>
              </p>
              <p>
                <strong>Striptease(private)</strong>
                <select value={stripP} onChange={e => { setStripP(e.target.value) }}>
                  <option value='not specified'>Not specified</option>
                  <option value="yes">yes</option>
                  <option value="no">no</option>
                </select>
              </p>
              <p>
                <strong>Striptease(group)</strong>
                <select value={stripG} onChange={e => { setStripG(e.target.value) }}>
                  <option value='not specified'>Not specified</option>
                  <option value="yes">yes</option>
                  <option value="no">no</option>
                </select>
              </p>
            </section>
          </section>
        </section>

        <section className={styles.priceBox}>
          <h3>Pricing</h3>
          <section>
            <p>
              <span> {icon('hourglass')}  1 hour [USD]</span>
              <sub></sub>
              <strong><input type="number" value={price1} onChange={e => { setPrice1(e.target.value) }} placeholder='USD' /></strong>
            </p>
            <p>
              <span> {icon('hourglass')}  extra hour</span>
              <sub></sub>
              <strong><input type="number" value={priceExtra} onChange={e => { setPriceExtra(e.target.value) }} placeholder='USD' /></strong>
            </p>
            <p>
              <span> {icon('hourglass')}  4 hour</span>
              <sub></sub>
              <strong><input type="number" value={price4} onChange={e => { setPrice4(e.target.value) }} placeholder='USD' /></strong>
            </p>
            <p>
              <span> {icon('hourglass')}  8 hour</span>
              <sub></sub>
              <strong><input type="number" value={price8} onChange={e => { setPrice8(e.target.value) }} placeholder='USD' /></strong>
            </p>
            <p>
              <span> {icon('hourglass')}  24 hour</span>
              <sub></sub>
              <strong><input type="number" value={price24} onChange={e => { setPrice24(e.target.value) }} placeholder='USD' /></strong>
            </p>
            <p>
              <span style={{ color: 'var(--theme)' }}> Payments</span>
              <sub></sub>
              <strong style={{ color: 'var(--theme)' }}>
                <select value={payment} onChange={e => { setPayment(e.target.value) }}>
                  <option value='all'>All</option>
                  <option value='cash'>Cash</option>
                  <option value="Card">Card</option>
                  <option value="mobile">mobile</option>
                </select>
              </strong>
            </p>
          </section>
        </section>
        <button type='submit'>Done</button>
      </form>
    </>

  );
}

export default CreateProfile;