import { FC, ReactNode } from 'react'

import Footer from '@/components/Footer'
import Header from '@/components/Header'

interface DefaultProps {
	children: ReactNode
}

const Default: FC<DefaultProps> = ({ children }) => {
	return (
		<>
			<Header />
			<div className='min-h-screen bg-gray-900 text-white'>
				{children}
			</div>
			<Footer />
		</>
	)
}

export default Default
