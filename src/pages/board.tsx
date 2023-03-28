import Image from "next/image"

import Pencil from './../../public/pencil.svg'
import Search from './../../public/search.svg'
import Profile from './../../public/profile.jpg'

export default function Board() {
    return (
        <div className="bg-[#FBFAFF] mt-1 rounded-tl-[2rem] py-12 px-8 w-screen">
            <div className="flex justify-between px-6 ">
                <h1 className="flex gap-3 text-[2rem] font-bold items-center">Meu Kanban
                    <Image src={Pencil} alt="lapis" />
                </h1>

                <Image src={Profile} width={64} height={64} alt="" className="rounded-full" />
            </div>
            <div className="my-8 px-6 flex gap-3">
                <button className="h-12 w-[8.43rem] rounded-[5px] bg-background">
                    filtrar
                </button>
                <div className="w-full flex items-center drop-shadow-lg border rounded-xl bg-white">
                    <Image src={Search} alt="Lupa" className="h-full ml-6 mr-[10px]" />
                    <input
                        className="w-full focus:outline-none placeholder:text-[#7C7C8A] placeholder:text-base placeholder:font-normal"
                        placeholder="Busque por cards, assuntos ou responsáveis..."
                    />
                </div>

            </div>

            <div>
                <div className="p-6">
                    <div className="text-xl font-bold">A fazer</div>
                    <div className="bg-white">
                        <section className="">
                            <span>#boraCodar um Kanban</span>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}