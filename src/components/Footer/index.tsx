import { FaFacebook, FaFacebookMessenger, FaPhone } from 'react-icons/fa'
import { MdAlternateEmail } from 'react-icons/md'

import Brand from '../Brand'

const Footer = () => {
	return (
		<div className='p-4 bg-gray-900 text-white border-t-2 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7'>
			<div className='space-y-4'>
				<Brand />

				<div>DEV MINI 2025 Inc ©, ALL RIGHT REVERSED</div>

				<div>
					1234 Maplewood Drive, Springfield, IL 62704, United States
				</div>
			</div>

			<div className='space-y-4'>
				<div className='text-xl font-semibold'>Contacts</div>
				<div className='flex items-center gap-3'>
					<MdAlternateEmail />
					<div>jonedoe@gmail.com</div>
				</div>

				<div className='flex items-center gap-3'>
					<FaPhone />
					<div>0123456789</div>
				</div>

				<div className='flex items-center gap-3'>
					<FaFacebook />
					<div>DEV MINI FB</div>
				</div>

				<div className='flex items-center gap-3'>
					<FaFacebookMessenger />
					<div>DEV MINI MESSENGER</div>
				</div>
			</div>

			<div className='space-y-4'>
				<div className='text-xl font-semibold'>Services</div>

				<div>service 1</div>
				<div>service 2</div>
				<div>service 3</div>
				<div>service 4</div>
			</div>
		</div>
	)
}

export default Footer
