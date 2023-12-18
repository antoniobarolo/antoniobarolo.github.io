import ItemPainel from "../components/itemPainel";
import Painel from "../models/painel";

const Music = () => {
  const paineis: Painel[] = [
    {
      titulo: 'Lançamentos',
      subtitulo: 'Shouts of Sadness and Joy of the Withered Leafgod',
      texto: 'Esse álbum de chiptune é meu último lançamento. As composições são de 2015, mas mais recentemente eu as masterizei e gravei uma versão acústica e com letra da faixa título, com muita polifonia e percussões cativantes.',
      video: 'N5lW6xVYx70'

    },
    {
      subtitulo: 'Valindhvart',
      texto: 'Valindhvart foi minha Iniciação Científica do Ensino Médio, em que eu criei um idioma completo, com alfabeto próprio, mais de 5000 palavras em seu dicionário, cada uma com sua devida etimologia e mais de 30 páginas explicando sua gramática. A partir desse idioma, eu produzi um EP de músicas folclóricas de seus falantes nativos.',
      video: 'mIZsbyuVx0Q'
    },
    {
      subtitulo: 'The Longest Dream',
      texto: 'Pop-Rock inicialmente composto em Janeiro de 2012.',
      video: 'BpHSincw6u0'
    },
    {
      subtitulo: 'Retaliar',
      texto: 'Faixa progressiva e instrumental de 8 minutos que mescla Trance, Metal e Barroco.',
      video: 'A_yxyvsS_zU'
    },
    {
      subtitulo: 'Pida',
      texto: 'Composição em conjunto com Daniel Geretch misturando música brasileira e guitarras distorcidas.',
      video: '8XURbbpyDxs'
    },
    {
      titulo: 'Trilhas Sonoras',
      subtitulo: 'Chants of the Sacred Mountain',
      texto: 'Trilha sonora para o jogo Flames of Veppam, um roguelike de estética retro que se passa no cenário de uma montanha congelada.',
      video: '7SLQM-MyJzc'
    },

    {
      subtitulo: 'O Laranja Outonal de Allalnore',
      texto: 'Essa faixa é o tema de uma cidade élfica de uma aventura de RPG de mesa que joguei. Minha meta era representar a seneridade premonitória das silenciosas passarelas de Allalnore.',
      video: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/596460063&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
    },

    {
      subtitulo: 'O Crepúsculo de Havariel',
      texto: 'Havariel era outra cidade dessa aventura. Sua estética era rústica e belicosa, então eu queria uma melodia sombria e maligna, mas que ainda mantivesse aquele estereotípica graciosidade élfica.',
      video: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/608927343&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
    },

    {
      subtitulo: 'Fog is Gone',
      texto: 'Trilha esperançosa feita para um vídeo em homenagem aos médicos e enfermeiros durante a pandemia.',
      video: "bMAZ6ZkQt20"
    },
    {
      subtitulo: 'Minidoc - Violência Obstétrica em São Paulo',
      texto: 'Trilhas sonoras do minidocumentário "Cidade (a)fetos", terceiro colocado de 2018 do projeto Móbile na Metrópole.',
      video: 'Zi1LHUDhLrc'
    },

    {
      titulo: 'Produções Universitárias',
      subtitulo: 'Borracho Alucinado',
      texto: 'Paródia de Tim Maia, e música oficial da Torcida Força ESPM para os jogos universitários Economíadas 2023.',
      video: 'eD-O5BoX2eM'
    },
    {
      subtitulo: 'Funk Escalação 2023',
      texto: 'Paródia medley de diversos funks apresentando a composição da Bateria ESPM para o Balatucada 2023, ano em que a Bateria ESPM conquista seu primeiro título na competição.',
      video: 'Dc8BlqaNBPU'
    },
    {
      subtitulo: 'Funk Escalação 2022',
      texto: 'Paródia medley de diversos funks apresentando a composição da Bateria ESPM para o Balatucada 2022.',
      video: 'ASdo9hacVss'
    },
  ]

  return <main className="center">
    <h2>Músicas</h2>
    <ItemPainel painel={paineis} />
  </main>
};

export default Music;