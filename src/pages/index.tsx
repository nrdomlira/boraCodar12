import Image from 'next/image';
import Link from 'next/link';

import Logo from './../../public/logo.svg';
import Cog from './../../public/cog.png';
import People from './../../public/people.png';
import Doc from './../../public/document-text.png';
import Tablet from './../../public/tablet-portrait.png';
import Board from './board';

export default function Home() {
  return (
    <div className="h-screen flex">
      <div className="pt-8 pl-9 pr-7">
        <Image src={Logo} alt="logomarca" />
        <div className='mt-[3.75rem]'>
          <ul className='flex flex-col gap-9 text-secondary-menu text-base font-bold'>
            <li className='flex items-center gap-4 text-white'>
              <Image src={Tablet} alt="" className='h-5 w-5' />
              Boards
              <Link href="/board"></Link>
            </li>
            <li className='flex items-center gap-4'>
              <Image src={People} alt="" className='h-5 w-5' />
              Equipes
              <Link href="/board"></Link>
            </li>
            <li className='flex items-center gap-4'>
              <Image src={Doc} alt="" className='h-5 w-5' />
              Relatórios
              <Link href="/board"></Link>
            </li>
            <li className='flex items-center gap-4'>
              <Image src={Cog} alt="" className='h-5 w-5' />
              Ajustes
              <Link href="/board"></Link>
            </li>
          </ul>
        </div>
      </div>


      <Board />
    </div>
  )
}
