import type { Metadata } from 'next'
import './globals.css'

import { Poppins } from 'next/font/google'

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700', '900'],
})

export const metadata: Metadata = {
	title: 'Devmini',
	description:
		'Devmini is a platform for developers to share their knowledge and experience with others.',
	keywords: 'devmini, developer, knowledge, experience, share',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${poppins.className} antialiased`}>
				{children}
			</body>
		</html>
	)
}
