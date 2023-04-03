import { Link } from "react-router-dom";

const Aboutme = () => {
  return <main className="center">
    <h2>Sobre mim</h2>
    <section>
      <p>Meu nome é Antonio Barolo Gargiulo, mas pode me chamar só de Barolo! Criei esse site pra mostrar todas as coisas diferentes que eu faço e vou fazer, em um só lugar.</p>

      <p>Gosto de desafios complexos, que demandem ideias inusitadas e embasamento técnico.

      Meu objetivo é ser um Desenvolvedor Web e de Software e produtor de trilhas sonoras.</p>
      <p>Espero que você se interesse!</p>
    </section>
    <section className='centerImg'>
      <hr />
      <img src="../retrato.jpg" alt="retrato-meu" />
      <hr />
    </section>
    
    <section>
      <h3>Minhas Redes:</h3>
      <Link to='https://github.com/antoniobarolo' target="_blank" rel="noopener noreferrer">
        <img className='icon' src="../github" alt="" />
      </Link>
      <Link to='https://www.youtube.com/@trovarcana' target="_blank" rel="noopener noreferrer">
        <img className='icon' src="../youtube" alt="" />
      </Link>
      <Link to='https://open.spotify.com/artist/0nIzub0A8STWZCOBniBOcu?si=isLk2qzXTF22O9JcKNTwyQ' target="_blank" rel="noopener noreferrer">
        <img className='icon' src="../spotify" alt="" />
      </Link>
      <Link to='https://www.instagram.com/trova_arcana/' target="_blank" rel="noopener noreferrer">
        <img className='icon' src="../instagram" alt="" />
      </Link>
      <Link to='https://www.deviantart.com/antoniobarolo' target="_blank" rel="noopener noreferrer">
        <img className='icon' src="../deviantart" alt="" />
      </Link>
      <Link to='https://www.linkedin.com/in/antoniobarolo/' target="_blank" rel="noopener noreferrer">
        <img className='icon' src="../linkedin" alt="" />
      </Link>
    </section>
  </main>
};

export default Aboutme;