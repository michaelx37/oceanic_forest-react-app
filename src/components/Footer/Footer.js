import { Link } from 'react-router-dom';

import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div>
        <Link to="/">
          <img
            src="https://a-cloud.b-cdn.net/media/iW=143&iH=143&oX=0&oY=26&cW=143&cH=86/e2f9202deb149e92e67085f31c92b293.png"
            alt="oceanic forest"
          />
        </Link>
        <a href="https://www.startupgeeks.it/">
          <img
            src="https://a-cloud.b-cdn.net/media/iW=119&iH=29&oX=0&oY=0&cW=119&cH=29/8c426225f7fc4f29e4a0ea823dda5405.png"
            alt="startup geeks"
          />
        </a>
      </div>

      <div>
        <a href="https://www.iubenda.com/privacy-policy/31393722">Privacy Policy</a>
        <a href="https://www.iubenda.com/privacy-policy/31393722/cookie-policy">Cookie Policy</a>
        <a href="https://www.iubenda.com/termini-e-condizioni/31393722">Termini e Condizioni</a>
        <a href="https://www.facebook.com/TheOceanicForest">Facebook page</a>
      </div>

      <hr />

      <div>
        <div>
          Oceanic Forest S.r.l. | Piazza Tarquinio Provini, 6, Pesaro (PU) 61122 | P.IVA & CF
          02779050414
        </div>
        <div>2022. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
