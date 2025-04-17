import { IoMenu } from 'react-icons/io5'
import { MdDarkMode } from 'react-icons/md'
import { RiCustomerService2Fill } from 'react-icons/ri'

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
		<div className='sticky top-0 left-0 w-full h-16 bg-gray-950 px-4 flex items-center text-white z-[9999] justify-between'>
			<Brand />

			<div className='flex items-center gap-3'>
				<Button className='p-1 rounded-full'>
					<RiCustomerService2Fill />
				</Button>

				<Button className='p-1 rounded-full'>
					<MdDarkMode />
				</Button>

				<DropdownMenu>
					<DropdownMenuTrigger>
						<Button className='p-1 rounded-full'>
							<IoMenu />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuItem>Home</DropdownMenuItem>

						<DropdownMenuItem>About</DropdownMenuItem>

						<DropdownMenuItem>Customers</DropdownMenuItem>

						<DropdownMenuItem>Show cases</DropdownMenuItem>

						<DropdownMenuItem>Terms and services</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	)
}

export default Header
