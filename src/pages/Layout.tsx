
import { Link, Outlet } from 'react-router-dom';
import '../App.css';
import Header from '../components/header';
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

                <p>Linkedin: <Link to='https://www.linkedin.com/in/antoniobarolo/' target="_blank" rel="noopener noreferrer"> Antonio Barolo Gargiulo </Link></p>

            </footer>
        </div>)
}

export default Layout;