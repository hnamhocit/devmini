'use client'

import { FaArrowRight, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import { styled } from 'styled-components'

import { Button } from '../../ui/button'

const HeroWrapper = styled.div`
	span {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 4px;
		height: 4px;
		background: #fff;
		border-radius: 50%;
		box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1),
			0 0 0 8px rgba(255, 255, 255, 0.1),
			0 0 20px rgba(255, 255, 255, 0.1);
		animation: animate 3s linear infinite;
	}
	span::before {
		content: '';
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		width: 300px;
		height: 1px;
		background: linear-gradient(90deg, #fff, transparent);
	}
	@keyframes animate {
		0% {
			transform: rotate(315deg) translateX(0);
			opacity: 1;
		}
		70% {
			opacity: 1;
		}
		100% {
			transform: rotate(315deg) translateX(-1000px);
			opacity: 0;
		}
	}
	span:nth-child(1) {
		top: 0;
		right: 0;
		left: initial;
		animation-delay: 0s;
		animation-duration: 1s;
	}
	span:nth-child(2) {
		top: 0;
		right: 80px;
		left: initial;
		animation-delay: 0.2s;
		animation-duration: 3s;
	}
	span:nth-child(3) {
		top: 80;
		right: 0px;
		left: initial;
		animation-delay: 0.4s;
		animation-duration: 2s;
	}
	span:nth-child(4) {
		top: 0;
		right: 180px;
		left: initial;
		animation-delay: 0.6s;
		animation-duration: 1.5s;
	}
	span:nth-child(5) {
		top: 0;
		right: 400px;
		left: initial;
		animation-delay: 0.8s;
		animation-duration: 2.5s;
	}
	span:nth-child(6) {
		top: 0;
		right: 600px;
		left: initial;
		animation-delay: 1s;
		animation-duration: 3s;
	}
	span:nth-child(7) {
		top: 300px;
		right: 0px;
		left: initial;
		animation-delay: 1.2s;
		animation-duration: 1.75s;
	}
	span:nth-child(8) {
		top: 0px;
		right: 700px;
		left: initial;
		animation-delay: 1.4s;
		animation-duration: 1.25s;
	}
	span:nth-child(9) {
		top: 0px;
		right: 1000px;
		left: initial;
		animation-delay: 0.75s;
		animation-duration: 2.25s;
	}
	span:nth-child(9) {
		top: 0px;
		right: 450px;
		left: initial;
		animation-delay: 2.75s;
		animation-duration: 2.75s;
	}
`

const Hero = () => {
	return (
		<HeroWrapper
			className='relative overflow-hidden h-[calc(100vh-64px)] flex items-center justify-center bg-center bg-cover bg-no-repeat'
			style={{
				backgroundImage:
					'url(https://w0.peakpx.com/wallpaper/832/271/HD-wallpaper-blue-stars-gradient-space-star.jpg)',
			}}>
			<div className='flex flex-col text-center justify-center gap-4 items-center z-10 p-4 rounded-2xl max-w-xs'>
				<h1 className='text-4xl md:text-5xl font-black primary-text text-center tracking-widest text-shadow-sm text-shadow-pink-500/10'>
					DEV MINI
				</h1>

				<div className='text-lg font-bold text-white italic flex gap-1'>
					<FaQuoteLeft /> Building Worlds, Creating Legends{' '}
					<FaQuoteRight />
				</div>

				<Button className='bg-linear-65 from-purple-500 to-pink-500 shadow-md shadow-pink-500/50'>
					Start explore <FaArrowRight />
				</Button>
			</div>

			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</HeroWrapper>
	)
}

export default Hero
