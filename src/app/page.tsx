'use client'

import AboutUs from '@/components/Sections/AboutUs'
import Customers from '@/components/Sections/Customers'
import Hero from '@/components/Sections/Hero'
import WhatWeDo from '@/components/Sections/WhatWeDo'
import Default from '@/layouts/Default'

export default function Home() {
	return (
		<Default>
			<Hero />
			<AboutUs />
			<WhatWeDo />
			<Customers />
		</Default>
	)
}
