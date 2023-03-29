
import { Outlet } from 'react-router-dom';
import '../App.css';
import Header from '../components/header';
import Secao from '../models/secao';
import { secoes } from '../models/secoes';
function Layout() {
    return (
        <div className="Layout">
            <Header secao={secoes} />
            <main>
                <Outlet />
            </main>
            <footer>
                <p>
                    Contato: antoniobarolog@gmail.com
                </p>
                <p>Linkedin: Antonio Barolo Gargiulo</p>
            </footer>
        </div>)
}

export default Layout;