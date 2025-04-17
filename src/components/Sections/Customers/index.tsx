import Marquee from 'react-fast-marquee'

import Section from '../Section'

const customers = [
	'/connor.jpg',
	'/daybreak.jpg',
	'/distill.jpg',
	'/gameace.png',
	'/labird.jpg',
	'/massive.jpg',
	'/mazari.jpg',
	'/somegame.webp',
]

const Customers = () => {
	return (
		<Section title='Customers'>
			<Marquee>
				{customers.slice(0, 4).map((c) => (
					<img
						key={c}
						src={`/customers${c}`}
						alt={c}
						className='w-40 h-32 rounded-md shadow-md mr-4'
					/>
				))}
			</Marquee>

			<Marquee direction='right'>
				{customers.slice(4, 8).map((c) => (
					<img
						key={c}
						src={`/customers${c}`}
						alt={c}
						className='w-40 h-28 rounded-md shadow-md mr-4'
					/>
				))}
			</Marquee>
		</Section>
	)
}

export default Customers
