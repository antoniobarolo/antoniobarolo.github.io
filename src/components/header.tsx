import { Link } from "react-router-dom";
import Secao from "../models/secao";

interface ItemSecaoProps {
	secao: Secao[];
}

function Header(props: ItemSecaoProps) {

	const navlist: JSX.Element[] = new Array(props.secao.length)

	for (let i = 0; i < props.secao.length; i++) {
		navlist[i] =
			<Link to={'/' + props.secao[i].link}>
				<li>{props.secao[i].titulo}</li>
			</Link>
	}

	return (
		<header>
			<Link id="antoniobarolo" to={'/'}>
				<h1 >Antonio Barolo</h1>
			</Link>
			<nav>
				<ul>
					{navlist}
				</ul>
			</nav>
		</header>

	);
}

export default Header;