import { motion } from 'motion/react'
import { FC, memo } from 'react'

import { Card, CardContent, CardHeader } from '@/components/ui/card'

interface WeDoProps {
	title: string
	photoURL: string
	description: string
}

const WeDo: FC<WeDoProps> = ({ title, photoURL, description }) => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0 }}
			whileInView={{ opacity: 1, scale: 1 }}>
			<Card className='text-white bg-gray-950 border-gray-700'>
				<CardHeader>
					<motion.img
						transition={{ delay: 0.2 }}
						initial={{ translateY: -24, opacity: 0 }}
						whileInView={{ translateY: 0, opacity: 1 }}
						src={photoURL}
						alt={title}
						className='rounded-md'
					/>
				</CardHeader>
				<CardContent>
					<motion.div
						transition={{ delay: 0.3 }}
						initial={{ translateY: -24, opacity: 0 }}
						whileInView={{ translateY: 0, opacity: 1 }}
						className='text-xl font-semibold secondary-text text-center mb-4'>
						{title}
					</motion.div>

					<motion.div
						transition={{ delay: 0.4 }}
						initial={{ translateY: -24, opacity: 0 }}
						whileInView={{ translateY: 0, opacity: 1 }}>
						{description}
					</motion.div>
				</CardContent>
			</Card>
		</motion.div>
	)
}

export default memo(WeDo)
