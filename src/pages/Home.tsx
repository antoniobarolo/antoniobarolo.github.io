import ItemSecao from '../components/itemSecao';
import '../App.css';
import Header from '../components/header';
import { secoes } from '../models/secoes';
function Home() {

  return (
    <div className="Home">
        <ItemSecao secao={secoes[0]} position={'left'} />
        <ItemSecao secao={secoes[1]} position={'right'} />
        <ItemSecao secao={secoes[2]} position={'left'} />
        <ItemSecao secao={secoes[3]} position={'right'} />
    </div>)
}

export default Home;