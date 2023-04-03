import { Link } from "react-router-dom";
import Secao from "../models/secao";

interface ItemSecaoProps {
	secao : Secao;
	position: string;
}

function ItemSecao(props: ItemSecaoProps) {
	return (
		<section className={props.position} style={{ backgroundImage: `url(${props.secao.bgImg})`, backgroundRepeat: 'no-repeat', }}>
			<div className="divSecao">
				<h2>{props.secao.titulo}</h2>
				<p>{props.secao.texto}</p>
				<Link to = {'/' + props.secao.link}>
					<button>Veja mais</button>
				</Link>
			</div>
		</section>
	);
}

export default ItemSecao;
