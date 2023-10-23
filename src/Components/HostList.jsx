import { Link } from "react-router-dom";
import { icon, sortPostsByTime } from "../External/external";
import styles from '../Styles/home.module.css';

const HostList = ({ props }) => {
  const { list } = props
  return (
    <section className={styles.showBox}>
      {list.map((host, i) => (
        <Link to={`/viewProfile/${host.id}`} key={i} className={styles.card}>
          {host.class === 'premium' && <legend className="verified">{icon('verified')}</legend>}
          <header>
            <strong>{host.profile && host.profile[0].username} <sub></sub></strong>
            <span>{host.profile[0].location}, {host.country}</span>
          </header>
          <div className={styles.images}>
            <img src={host.cover && host.cover} alt="" />
            <img src={host.profilePic && host.profilePic} alt="" />
            {
              host.posts[0] ?
                host.posts[0].type == 'image' ?
                  <img src={host.posts.sort(sortPostsByTime)[0].media} /> :
                  <video src={host.posts.sort(sortPostsByTime)[0].media} autoPlay loop muted></video>
                : null
            }
          </div>
          <small className="info">{host.profile && host.profile[0].bio}</small>
          <button type="button">View Profile </button>
        </Link>
      ))}
    </section>
  );
}

export default HostList;