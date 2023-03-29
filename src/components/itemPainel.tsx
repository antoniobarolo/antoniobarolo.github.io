import { Link } from "react-router-dom";
import Painel from "../models/painel";
import EmbedMedia from "./embedMedia";

interface PainelProps {
	painel: Painel[]
}

function ItemPainel(props: PainelProps) {
	const painellist: JSX.Element[] = new Array(props.painel.length)
	for (let i = 0; i < props.painel.length; i++) {
		const lista: string[] = props.painel[i].ul ?? [];
		const listaElementos = lista.map((item, index) => (
			<li key={index}>{item}</li>
		));

		painellist[i] =
			<section>
				<h3>{props.painel[i].titulo}</h3>
				<div className="painel">
					<div className={(!props.painel[i].img && !props.painel[i].video) ? 'full' : 'col'}>
						<h4>{props.painel[i].subtitulo}</h4>
						<p>{props.painel[i].texto}
						</p>
						<ul>
							{listaElementos}
						</ul>

					</div>
					{((!props.painel[i].img && !props.painel[i].video)) ? <></> :
						<div className="col" id='centertext'>
							{(props.painel[i].link)
								? <Link className="linkhover" to={props.painel[i].link!} target="_blank" rel="noopener noreferrer">
									<img src={props.painel[i].img} alt="" />
									<button>Veja mais</button>
								</Link>
								: <img src={props.painel[i].img} alt="" />}
							{(props.painel[i].video)
								? <EmbedMedia id={props.painel[i].video!} />
								: <></>}
						</div>
					}
				</div>
			</section>

	}

	return (
		<main>
			{painellist}
		</main>
	);
}

export default ItemPainel;
