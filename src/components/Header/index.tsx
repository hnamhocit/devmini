import { motion } from 'motion/react'
import { IoLanguage, IoMenu } from 'react-icons/io5'
import { MdDarkMode } from 'react-icons/md'

import Brand from '../Brand'
import { Button } from '../ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu'

const Header = () => {
	return (
		<div className='sticky top-0 left-0 w-full h-16 bg-gray-950 px-4 flex items-center text-white z-20 justify-between'>
			<motion.div
				transition={{ delay: 0.1 }}
				initial={{ scale: 0, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}>
				<Brand />
			</motion.div>

			<div className='flex items-center gap-3'>
				<motion.div
					transition={{ delay: 0.1 }}
					initial={{ opacity: 0, translateY: -10 }}
					animate={{ opacity: 1, translateY: 0 }}>
					<Button className='p-1 rounded-full'>
						<MdDarkMode />
					</Button>
				</motion.div>

				<motion.div
					transition={{ delay: 0.2 }}
					initial={{ opacity: 0, translateY: -10 }}
					animate={{ opacity: 1, translateY: 0 }}>
					<Button className='p-1 rounded-full'>
						<IoLanguage />
					</Button>
				</motion.div>

				<DropdownMenu>
					<DropdownMenuTrigger>
						<motion.div
							transition={{ delay: 0.3 }}
							initial={{ opacity: 0, translateY: -10 }}
							animate={{ opacity: 1, translateY: 0 }}>
							<Button className='p-1 rounded-full'>
								<IoMenu />
							</Button>
						</motion.div>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuItem>Home</DropdownMenuItem>

						<DropdownMenuItem>About</DropdownMenuItem>

						<DropdownMenuItem>Customers</DropdownMenuItem>

						<DropdownMenuItem>Show cases</DropdownMenuItem>

						<DropdownMenuItem>Customers Service</DropdownMenuItem>

						<DropdownMenuItem>Terms and services</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	)
}

export default Header
