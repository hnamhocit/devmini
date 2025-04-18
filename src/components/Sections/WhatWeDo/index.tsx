import Section from '../Section'
import WeDo from './WeDo'

const data = [
	{
		photoURL: '/skills/story.jpg',
		title: 'Immersive Storytelling',
		description:
			'Crafting rich, emotionally resonant narratives that draw players into vibrant worlds.',
	},
	{
		photoURL: '/skills/visuals.webp',
		title: 'Stunning Visuals',
		description:
			'Leveraging advanced graphics techniques to bring characters, environments, and animations to life.',
	},
	{
		photoURL: '/skills/gameplay.webp',
		title: 'Innovative Gameplay',
		description:
			'Designing intuitive controls, engaging mechanics, and unique features that keep players hooked.',
	},
	{
		photoURL: '/skills/cross-platforms.png',
		title: 'Cross-Platform Mastery',
		description:
			'Delivering polished experiences on PC, consoles, mobile devices, and beyond.',
	},
]

const WhatWeDo = () => {
	return (
		<Section title='What we do?'>
			<div>
				From indie gems to ambitious AAA-inspired titles, DEV MINI
				specializes in creating skills across genres and platforms. Our
				expertise spans:
			</div>

			<div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
				{data.map((skill) => (
					<WeDo
						key={skill.title}
						{...skill}
					/>
				))}

				<div>
					No matter the scope or scale, we approach each project with
					fresh eyes, ensuring every game reflects its own distinct
					personality while maintaining the highest standards of
					quality.
				</div>
			</div>
		</Section>
	)
}

export default WhatWeDo
