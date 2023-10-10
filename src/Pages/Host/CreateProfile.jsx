import { useRef, useState } from 'react';
import Navbar from '../../Components/Navbar';
import { icon, iconFont } from '../../External/external';
import styles from '../../Styles/profile.module.css'

const CreateProfile = () => {
  const cover = 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1696773681/_120424467_joy2_a6y2kz.jpg';
  // const face = 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1696775658/profile-1640014292-4a26a41437da03f345e9f0ed8fa0d60e_mu37cj.jpg';
  const face = cover

  // <Navbar />
  const [coverImage, setCoverImage] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [coverPreview, setCoverPreview] = useState(cover);
  const [profilePreview, setProfilePreview] = useState(face);

  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [instagram, setInstagram] = useState('');
  const [xSpace, setXSpace] = useState('');
  const [tiktok, setTiktok] = useState('');
  const [bio, setBio] = useState('');
  const [tags, setTags] = useState(['freaky']);
  const [tagIn, setTagIn] = useState('');
  const tagSubs = useRef([]);

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
  const [inCall, setInCall] = useState('not specified');
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


  const addTag = () => {
    if(tagIn){
      const updatedTags = [...tags, tagIn];
      setTags(updatedTags);
      setTagIn('');
    }
  }

  const remTag =(i)=>{
    const updatedTags = tags.filter((tag)=> tags.indexOf(tag) !== i);
    setTags(updatedTags)
  }

  const [imageSet, setImage] = useState(['', '', '', '', '']);
  const previewImageSet = useRef([]);

  const handleImage = (img, i) => {
    imageSet[i] = img;
    previewImageSet.current[i].src = URL.createObjectURL(img);
  }



  return (
    <>
      <Navbar />
      <form className={styles.wrapper}>
        <section className={styles.coverBox} style={{ backgroundImage: `url(${coverPreview})` }}>
          <label htmlFor="addCoverImage" style={{ display: 'flex', width: '100%', height: '100%' }}>
            <input type="file" id='addCoverImage' onChange={e => {
              setCoverImage(e.target.files[0])
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
                setProfileImage(e.target.files[0])
                setProfilePreview(URL.createObjectURL(e.target.files[0]))
              }} accept='image/*' style={{ display: 'none' }} />
              <sup className={styles.imgSheet} style={{ borderRadius: '50%' }}>{icon('add_a_photo')}</sup>
              <img src={profilePreview} style={{ position: 'revert' }} />
            </label>
          </div>
        </section>
        <section className={styles.infoBox}>
          <p>
            <strong><input type="text" placeholder='Username' value={username} onChange={e => { setUsername(e.target.value) }} required /></strong>
            <small><input type="text" placeholder='Location' value={location} onChange={e => { setLocation(e.target.value) }} required /></small>
          </p>
          <p>
            <a >{icon('phone_iphone')} <input type="tel" placeholder='Mobile' value={mobile} onChange={e => { setMobile(e.target.value) }} required /> </a>
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
            <textarea value={bio} onChange={e => { setBio(e.target.value) }} placeholder='about yourself'></textarea>
          </small>
        </section>
        <section className={styles.tagBox}>
          {tags.map((el,i) => (
            <sub onClick={()=>{remTag(i)}}>{el} {icon('delete')}</sub>
          ))}
          <div>
            <input type="text" placeholder='your tags eg: freaky' value={tagIn} onChange={e => { setTagIn(e.target.value) }} /> <button type='button' onClick={addTag}> {icon('add')}</button>
          </div>
        </section>
        <section className={styles.galleryBox}>
          {[0, 0, 0, 0, 0].map((el, i) => (
            <label htmlFor={`image${i}`}>
              <sup className={styles.imgSheet} style={{ borderRadius: '10px' }}>{icon('add_a_photo')}</sup>
              <input id={`image${i}`} onChange={e => { handleImage(e.target.files[0], i) }} type="file" style={{ display: 'none' }} />
              <img src={cover} ref={(obj) => { previewImageSet.current[i] = obj }} />
            </label>
          ))}
        </section>
        <section className={styles.aboutBoxHolder}>
          <h3>About</h3>
          <section className={styles.aboutBox}>
            <section>
              <p>
                <strong>Gender</strong>
                <select onChange={e => { setGender(e.target.value) }}>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                </select>
              </p>
              <p>
                <strong>Sexual preference</strong>
                <select onChange={e => { setSexPref(e.target.value) }}>
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
                <select onChange={e => { setShaved(e.target.value) }}>
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
                <select onChange={e => { setOutcall(e.target.value) }}>
                  <option value='not specified'>Not specified</option>
                  <option value="yes">yes</option>
                  <option value="no">no</option>
                </select>
              </p>
              <p>
                <strong>Incall</strong>
                <select onChange={e => { setInCall(e.target.value) }}>
                  <option value='not specified'>Not specified</option>
                  <option value="yes">yes</option>
                  <option value="no">no</option>
                </select>
              </p>
              <p>
                <strong>Straight Sex</strong>
                <select onChange={e => { setStraightSex(e.target.value) }}>
                  <option value='not specified'>Not specified</option>
                  <option value="yes">yes</option>
                  <option value="no">no</option>
                </select>
              </p>
              <p>
                <strong>Massage</strong>
                <select onChange={e => { setMassage(e.target.value) }}>
                  <option value='not specified'>Not specified</option>
                  <option value="yes">yes</option>
                  <option value="no">no</option>
                </select>
              </p>
              <p>
                <strong>Oral Sex(giving)</strong>
                <select onChange={e => { setOralG(e.target.value) }}>
                  <option value='not specified'>Not specified</option>
                  <option value="yes">yes</option>
                  <option value="no">no</option>
                </select>
              </p>
              <p>
                <strong>Oral Sex(taking)</strong>
                <select onChange={e => { setOralT(e.target.value) }}>
                  <option value='not specified'>Not specified</option>
                  <option value="yes">yes</option>
                  <option value="no">no</option>
                </select>
              </p>
            </section>
            <section>
              <p>
                <strong>Anal Sex</strong>
                <select onChange={e => { setAnal(e.target.value) }}>
                  <option value='not specified'>Not specified</option>
                  <option value="yes">yes</option>
                  <option value="no">no</option>
                </select>
              </p>
              <p>
                <strong>French Kissing</strong>
                <select onChange={e => { setFrench(e.target.value) }}>
                  <option value='not specified'>Not specified</option>
                  <option value="yes">yes</option>
                  <option value="no">no</option>
                </select>
              </p>
              <p>
                <strong>Fetish and Fantasy</strong>
                <select onChange={e => { setFetish(e.target.value) }}>
                  <option value='not specified'>Not specified</option>
                  <option value="yes">yes</option>
                  <option value="no">no</option>
                </select>
              </p>
              <p>
                <strong>BDSM</strong>
                <select onChange={e => { setBDSM(e.target.value) }}>
                  <option value='not specified'>Not specified</option>
                  <option value="yes">yes</option>
                  <option value="no">no</option>
                </select>
              </p>
              <p>
                <strong>Striptease(private)</strong>
                <select onChange={e => { setStripP(e.target.value) }}>
                  <option value='not specified'>Not specified</option>
                  <option value="yes">yes</option>
                  <option value="no">no</option>
                </select>
              </p>
              <p>
                <strong>Striptease(group)</strong>
                <select onChange={e => { setStripG(e.target.value) }}>
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
              <h4><input type="number" value={price1} onChange={e => { setPrice1(e.target.value) }} placeholder='USD' required /></h4>
            </p>
            <p>
              <span> {icon('hourglass')}  extra hour</span>
              <sub></sub>
              <h4><input type="number" value={priceExtra} onChange={e => { setPriceExtra(e.target.value) }} placeholder='USD' required /></h4>
            </p>
            <p>
              <span> {icon('hourglass')}  4 hour</span>
              <sub></sub>
              <h4><input type="number" value={price4} onChange={e => { setPrice4(e.target.value) }} placeholder='USD' required /></h4>
            </p>
            <p>
              <span> {icon('hourglass')}  8 hour</span>
              <sub></sub>
              <h4><input type="number" value={price8} onChange={e => { setPrice8(e.target.value) }} placeholder='USD' required /></h4>
            </p>
            <p>
              <span> {icon('hourglass')}  24 hour</span>
              <sub></sub>
              <h4><input type="number" value={price24} onChange={e => { setPrice24(e.target.value) }} placeholder='USD' required /></h4>
            </p>
            <p>
              <span style={{ color: 'var(--theme)' }}> Payments</span>
              <sub></sub>
              <h4 style={{ color: 'var(--theme)' }}>
                <select onChange={e => { setPayment(e.target.value) }}>
                  <option value='all'>All</option>
                  <option value='cash'>Cash</option>
                  <option value="Card">Card</option>
                  <option value="mobile">mobile</option>
                </select>
              </h4>
            </p>
          </section>
        </section>
        <button type='submit'>Done</button>
      </form>
    </>

  );
}

export default CreateProfile;