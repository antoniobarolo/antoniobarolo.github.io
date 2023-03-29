import ItemPainel from "../components/itemPainel";
import Painel from "../models/painel";

const Projects = () => {
  const paineis: Painel[] = [
    {
      titulo: 'Games',
      subtitulo: 'Sandmann',
      texto: 'Sandmann é um jogo desenvolvido em phaser js por mim e minha dupla no primeiro semestre na ESPM Tech. O protagonista do jogo é nosso professor Humberto Sandmann, que precisa lutar contra vírus enquanto sobe os andares do prédio da Tech. Você pode jogar Sandmann clicando no link da imagem!',
      img: 'sandmann.png',
      link: 'https://tech-espm.github.io/inter-1sem-2020-sandmann/'
    },
    {
      subtitulo: 'Jornada do Marketeiro',
      texto: 'Este jogo foi desenvolvido em grupo para a aula de Estratégia de Marketing. Ele segue o estilo de uma visual novel com tomadas de decisões para ensinar o jogador sobre os conteúdos abordados em aula. Você também pode jogá-lo clicando no link da imagem!',
      img: 'mkt-game.jpg',
      link: 'https://academico.espm.br/jornadamarketeiro'
    },
    {
      subtitulo: 'Letmein!!',
      texto: 'Letmein é um jogo multiplayer que replica as mecânicas do game show "Megasenha", feita em node.js e implementando websockets.',
      img: 'letmein.jpg',
      link: 'https://github.com/antoniobarolo/Letmein-Websocket-Game'
    },
    {
      titulo: 'Web',
      subtitulo: 'Renewable Energy',
      texto: 'Aplicação Fullstack que apresenta um gráfico interativo com dados coletados do site ourworldindata com Web-Scraping em Python.',
      img: 'renewable-energy.jpg',
      link: 'https://github.com/Tarsila-MS/Renewable_Energy'
    },
    {
      subtitulo: 'Zipparia',
      texto: 'Web App em React TS com banco de dados em MySQL para simular um sistema administrativo por CRUDs de uma pizzaria temática da Pixar.',
      img: 'zipparia.jpg',
      link: 'https://github.com/antoniobarolo/Zipparia-Website'
    },
    {
      titulo: 'Worldbuilding',
      subtitulo: 'O mundo de Erdáin',
      texto: 'Meu universo fictício, detalhado em seus mais diferentes aspectos: Astronomia, Geologia, Climatologia, Biologia, Antropologia, História, Linguística, Arte, tudo com o máximo de embasamento científico possível. Você pode explorar esse mundo clicando aqui no mapa!',
      img: 'erdain.jpg',
      link: 'https://antoniobarolo.github.io/Worldbuilding-Erdain/',
    }, {
      subtitulo: 'Valendhírdven',
      texto: 'O idioma do mundo de Erdáin que eu mais desenvolvi. Com alfabeto próprio, mais de 5000 palavras em seu dicionário, cada uma com sua devida etimologia e mais de 30 páginas explicando sua gramática, é um idioma que demonstra a visão de mundo de seus falantes hipotéticos com profundidade o bastante para parecerem reais.',
      img: 'vdv-banner.png',
      link: 'https://drive.google.com/file/d/1awdNV3-ODdkvGIdd5_sdwjrfP9H4lyox/view',
    },
    {
      titulo: 'Vídeos',
      subtitulo: 'Minidoc - Sonhos Ambulantes',
      texto: 'Minidoc sobre as aspirações dos comerciantes de rua de São Paulo, feito em 2018 para o projeto Móbile na Metrópole. Ficou entre os 10 melhores entre dezenas de participantes, o que garantiu sua reprodução em um evento aberto no Conjunto Nacional da Avenida Paulista. Realizei as entrevistas, o roteiro, a edição e a trilha sonora "Sonheto". Também produzi a trilha de mais outros dois documentários que ficaram no top 10.',
      video: 'vCncxL2eC30'
    },
    {
      titulo: 'Design',
      subtitulo: 'Portfolio',
      texto: 'Meu perfil no Deviantart onde eu publico alguns dos meus desenhos digitais ao longo dos anos.',
      img: 'nevaluhrv.jpg',
      link: 'https://www.deviantart.com/antoniobarolo'
    },
    {
      subtitulo: 'Rótulo - Cachaça Xangô',
      texto: 'Protótipo de rótulo para uma garrafa de cachaça que idealizei, junto com uma tipografia homônima.',
      img: 'xango-rotulo.jpg',
      link: '../xango.pdf'
    },
  ]

  return <main className="center">
    <h2>Projetos</h2>
    <ItemPainel painel={paineis} />
  </main>
};

export default Projects;