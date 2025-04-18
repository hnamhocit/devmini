import { motion } from 'motion/react'
import { FC, memo, ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface SectionProps {
	children: ReactNode
	title: string
	titleClassName?: string
}

const Section: FC<SectionProps> = ({ children, title, titleClassName }) => {
	return (
		<div className='p-4 space-y-4'>
			<motion.div
				transition={{ duration: 0.3 }}
				initial={{ opacity: 0, translateY: -50 }}
				whileInView={{ opacity: 1, translateY: 0 }}
				className={cn(
					'text-center text-2xl font-semibold primary-text text-shadow-sm text-shadow-pink-500/10',
					titleClassName,
				)}>
				{title}
			</motion.div>

			{children}
		</div>
	)
}

export default memo(Section)
