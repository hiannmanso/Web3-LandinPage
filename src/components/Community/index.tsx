import * as s from './styles'
export default function Community() {
	return (
		<s.CommunityComponent>
			<div className='background'></div>
			<div className='communityInfos'>
				<header>COMMUNITY-OWNED AND OPERATED</header>
				<div>
					<div className='left'>
						<h1 className='principal'>
							Enter a Universe of Connected Services.
						</h1>
						<h2>
							Cronos apps and services connect using IBC, the
							Inter-Blockchain Communication protocol. This
							innovation enables you to freely exchange assets and
							data across sovereign.
						</h2>
					</div>
					<div className='right'>
						<div>
							<h3>265+</h3>
							<p>Apps & services</p>
						</div>
						<div>
							<h3>$63B+</h3>
							<p>Digital assets </p>
						</div>
					</div>
				</div>
				<footer>
					<button type='submit'>Learn</button>
					<button type='submit'>Explore Tokens</button>
				</footer>
			</div>
		</s.CommunityComponent>
	)
}
