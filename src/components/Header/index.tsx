import Image from 'next/image'
import * as s from './styles'
export default function Header() {
	return (
		<s.Header>
			<h1>CRONOS</h1>
			<div className='options'>
				<p>Learn</p>
				<p>Build</p>
				<p>Explore</p>
			</div>
			<div className='getCronos'>
				<h2>Get CRONOS</h2>
				<Image
					src={'./arrow.svg'}
					alt='arrow'
					width={7.1}
					height={15.87}
				/>
			</div>
		</s.Header>
	)
}
