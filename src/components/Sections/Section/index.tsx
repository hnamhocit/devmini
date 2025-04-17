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
			<div
				className={cn(
					'text-center text-2xl font-semibold primary-text text-shadow-sm text-shadow-pink-500/10',
					titleClassName,
				)}>
				{title}
			</div>

			{children}
		</div>
	)
}

export default memo(Section)
