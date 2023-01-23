import { motion, useTime, useTransform } from 'framer-motion'
import * as s from './styles'
export default function Wellcome() {
	const time = useTime()
	const blur = 'blur(0.2em)'
	const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false })
	return (
		<s.WellcomeComponent>
			<motion.div
				initial={{ x: 0, y: 0, rotate: 0 }}
				whileInView={{ x: 0, y: 0, rotate: 0, filter: blur }}
				transition={{ type: 'spring', duration: 2 }}
				className='background'
			>
				<motion.img
					style={{ rotate }}
					className='firstImg'
					src={'/Icosahedron.png'}
					width={100}
					height={100}
					alt='lcosahedron'
				></motion.img>

				<motion.img
					style={{ rotate }}
					className='secondImg'
					src={'/Icosahedron.png'}
					width={100}
					height={100}
					alt='lcosahedron'
				></motion.img>
			</motion.div>
			<div className='infosWellcome'>
				<header className='head'>WELCOME TO CRONOS</header>
				<h1 className='principal'>The Internet of Blockchains.</h1>
				{/* ARRUMAR ESSA FONTE/\ */}
				<footer className='footer'>
					Cronos is an ever expanding ecosystem of connected apps and
					services, built for a decentralized future.
				</footer>
			</div>
		</s.WellcomeComponent>
	)
}
