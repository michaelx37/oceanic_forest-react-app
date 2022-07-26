import { Fragment } from 'react';
import classes from './Home.module.css';

const Home = () => {
  return (
    <Fragment>
      <section className={classes.intro}>
        <div>
          <h2>Aiutiamo il mare, coltivando alghe</h2>
          <img src="" alt=""></img>
        </div>
        <div>
          <p>Anche l'atmosfera ne gioverà!</p>
          <div>!IMMAGINE MANCANTE!</div>
        </div>
        <div className={classes.bookmark__button}>Scopri di Più</div>
        <div className={classes.bookmark__button}>Resta aggiornato</div>
      </section>

      <section className={classes.mission}>
        <h2>La nostra Mission</h2>
        <p>
          Noi di <span>Oceanic Forest</span> vogliamo utilizzare le macroalghe come soluzione
          biologica all'inquinamento atmosferico ed acidificazione del mare.
        </p>
        <p>
          Affiancandoci ai mitilicoltori possiamo utilizzare infrastrutture già esistenti per
          coltivare alghe, creando un circolo virtuoso naturale con i frutti di mare per
          incrementarne la resa.
        </p>
        <div>!IMMAGINE MANCANTE!</div>
      </section>

      <section className={classes.more}>
        <h2>Se vuoi saperne di più</h2>
        <p>Legame tra inquinamento atmosferico e acidificazione del mare e possibili soluzioni.</p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/brl4-xa9DTY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </section>

      <section className={classes.benefits}>
        <h3>Quali sono i principali vantaggi che la coltivazione di alghe ci può portare?</h3>
        <div>
          <img src="" alt=""></img>
          <h4>Rimuove la CO2</h4>
          <p>
            Le alghe riescono a rimuovere la CO2 poiché viene assorbita tramite il loro processo di
            fotosintesi, esattamente come fanno gli alberi sulla terraferma. Questo permette di
            ripulire le acque e salvaguardare il mare.
          </p>
        </div>
        <div>
          <img src="" alt=""></img>
          <h4>Ricostituisce l'ecosistema marino</h4>
          <p>
            La rimozione della CO2 dagli oceani riduce l'acidità dell'ambiente marino apportando
            numerosi benefici sia direttamente per la fauna marina, andando a migliorare le
            condizioni per la vita, sia indirettamente per l'uomo, migliorando, per esempio, la resa
            della mitilicoltura.
          </p>
        </div>
        <div>
          <img src="" alt=""></img>
          <h4>Diversi utilizzi ecosostenibili</h4>
          <p>
            Se utilizzate come mangime per gli allevamenti, sono in grado di ridurre le emissioni di
            metano di circa il 70%, oltre a poter essere utilizzate per la creazione di
            bio-plastica, un'altra ottima soluzione per salvaguardare il pianeta.
          </p>
        </div>
      </section>

      <section className={classes.deepening}>
        <div>
          <img src="" alt=""></img>
        </div>
        <div>
          <h2>Approfondimento</h2>
          <p>
            Gli oceani sono un bacino di raccolta per la CO2 presente in atmosfera, attualmente
            assorbono circa il 25% del carbonio emesso dalle attività umane ogni anno; andando a
            diminuire la concentrazione di anidride carbonica presente in mare, oltre a permettere
            una diminuzione della sua quantità direttamente negli oceani andando ad affievolire
            quindi tutti gli effetti negativi sui mari, andremo indirettamente a diminuire anche la
            sua concentrazione nell'atmosfera.
          </p>
        </div>
      </section>

      <section className={classes.contact}>
        <h2>Voglio rimanere aggiornato</h2>
        <form action="" method="post">
          <input type="text" placeholder="Nome" />
          <input type="email" placeholder="E-mail" />
          <input type="checkbox" />
          <span>Ho letto, compreso e accettato la privacy policy e i termini e condizioni</span>
          <button type="submit">Iscriviti</button>
        </form>
      </section>
    </Fragment>
  );
};

export default Home;
