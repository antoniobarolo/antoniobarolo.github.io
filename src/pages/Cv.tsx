import { Link } from "react-router-dom";
import ItemPainel from "../components/itemPainel";
import Painel from "../models/painel";

const Cv = () => {
  const paineis: Painel[] = [{
    titulo: 'Experiência Profissional',
    subtitulo: 'QSOFT (Jan 2022 - Jan 2023)',
    texto: 'Estágio na área de dados, trabalhei nas áreas de suporte, arquitetura e governança, supply e operações, realizando as seguintes atividades:',
    ul: ['Gerenciamento do ambiente de projetos da empresa;',
      'Mock-up, produção e revisão de dashboards de BI;',
      'Tratamento de dados;',
      'Projetos de Predictive Analytics com a ferramenta RapidMiner;',
      'Palestra em nome da empresa para o Data Lab da ESPM.',],
    img: 'qsoft.jpg',
    link: 'http://www.qsoft.com.br/'
  }, {
    titulo: 'Formação Acadêmica',
    subtitulo: 'Sistemas de Informações ESPM (SP) (2020 - 2023)',
    texto: '7o período de Bacharelado, conclusão em Dezembro 2023. Atualmente realizando meu TCC sobre geração procedural de música.',
    img: 'logo-espm.jpg',
    link: 'https://www.espm.br/cursos-de-graduacao/sistemas-de-informacao/'
  },
  {
    titulo: 'Habilidades',
    subtitulo: 'Programação',
    ul: ['Javascript, Typescript, HTML e CSS;', 'React, Node, Express, Websockets;', 'Java;', 'C#;', 'Python, Selenium.'],
    img: 'js-logo.jpg'
  },
  {
    subtitulo: 'Ciência de Dados',
    ul: ['SQL e PLSQL;', 'Tableau;', 'RapidMiner;', 'R.'],
    img: 'tableau.jpg'
  },
  {
    subtitulo: 'Multimídia',
    ul: ['Edição de vídeo (Vegas Pro, Premiere);',
      'Modelagem 3D (Blender);',
      ' Ambientes Virtuais (Unreal Engine);',
      'Edição e produção de áudio (Pro Tools, Reaper, Ableton);',
      'Edição e produção de imagem (Photoshop, Illustrator, Xd).']
  },
  {
    titulo: 'Conquistas Acadêmicas',
    subtitulo: 'Olimpíada Brasileira de Linguística',
    ul: ['10o colocado nacional (2018);', 'Palestrante e elaborador de questões (2019 e 2020).'],
    link: 'https://obling.org/',
    img: 'obl.jpg'
  },
  {
    titulo: 'Certificados',
    ul: ['36 cursos pela Alura em diversas áreas de tecnologia;', 'Introdução a Networking pela Cisco Networking Academy com Carta de Mérito;', 'Introdução a Data Science Machine Learning pelo RapidMiner;', 'Curso de Arte e Design pela EBAC - Escola Britânica de Artes Criativas.'],
    img: 'alura.jpg',
    link: 'https://www.linkedin.com/in/antoniobarolo/details/certifications/'
  },

  {
    titulo: 'Idiomas',
    ul: ['Inglês - Fluente (TOEFL 114/120, CAE 205/210);',
      'Alemão - Intermediário (2016-2020);',
      'Espanhol - Intermediário (2016 e 2017).']
  },
  {
    titulo: 'Trabalhos Voluntários',
    subtitulo: 'GEMA e GRAAC (2017 - 2018)',
    texto: 'Elaborei e executei atividades lúdicas e educativas para estimular a criatividade de grupos de crianças.',
    img: 'gema.jpg',
    link: 'http://grupogema.org.br/'
  },
  {
    subtitulo: 'Performances no Hospital Albert Eintein (2014)',
    texto: 'Apresentações musicais quinzenais no setor de oncologia do Albert Einstein em eventos de integração e convívio com os pacientes internados e seus familiares.'
  }
  ]

  return <>
    <main className="center">
      <h2>Currículo</h2>
      <section>
        <p>Se preferir, aqui está meu currículo em pdf: <Link id='pdf' to='../CV-AntonioBarolo.pdf' target="_blank" rel="noopener noreferrer">CV-AntonioBarolo.pdf</Link></p>
      </section>


      <ItemPainel painel={paineis} />
    </main>
  </>
};

export default Cv;