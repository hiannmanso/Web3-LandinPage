import Community from 'src/components/Community'
import Footer from 'src/components/Footer'
import Header from 'src/components/Header'
import Hub from 'src/components/Hub'
import Wellcome from 'src/components/Wellcome'

export default function Home() {
	return (
		<>
			<Header />
			<Wellcome />
			<Community />
			<Hub />
			<Footer />
		</>
	)
}
