import * as s from './styles'
export default function Wellcome() {
	return (
		<s.WellcomeComponent>
			<div className='background'></div>
			<div className='infosWellcome'>
				<header>WELCOME TO CRONOS</header>
				<h1>The Internet of Blockchains.</h1>
				{/* ARRUMAR ESSA FONTE/\ */}
				<footer>
					Cronos is an ever expanding ecosystem of connected apps and
					services, built for a decentralized future.
				</footer>
			</div>
		</s.WellcomeComponent>
	)
}
