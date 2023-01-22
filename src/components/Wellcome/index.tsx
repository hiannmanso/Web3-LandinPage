import Image from 'next/image'
import * as s from './styles'

export default function Wellcome() {
	const imageSizes = {
		sm: { width: 100, height: 100 },
		md: { width: 150, height: 150 },
		lg: { width: 300, height: 300 },
	}
	return (
		<s.WellcomeComponent imageSizes={imageSizes}>
			<div className='background'>
				<Image
					className='firstImg'
					src={'/Icosahedron.png'}
					width={100}
					height={100}
					alt='lcosahedron'
				></Image>

				<Image
					className='secondImg'
					src={'/Icosahedron.png'}
					width={100}
					height={100}
					alt='lcosahedron'
				></Image>
			</div>
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
