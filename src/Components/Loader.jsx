import { useEffect, useRef } from "react";
import { icon } from "../External/external";
import anime from "animejs/lib/anime.es.js"
import { useLoader } from "../main";

const Loader = () => {
  const obj = useRef(null);
  const {loader} = useLoader();

  useEffect(() => {
    const loaderAnime = anime({
      loop: true,
      targets: obj.current,
      scale: [0.8, 1.2, 0.8],
      speed: '3000',
      easing: 'linear'
    })
    loader ? loaderAnime.play() : loaderAnime.pause();
  }, [loader])

  return (
    <section className="loader" style={loader ? {display:'flex'} : {display:'none'}}>
      <section>
        <div ref={obj}>
          {icon('phishing')}
        </div>
      </section>
      <strong id="logo" className="logo1">Pick&Hook</strong>
    </section>
  );
}

export default Loader;