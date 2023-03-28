import Image from "next/image"

import Pencil from './../../public/pencil.svg'
import Search from './../../public/search.svg'
import Profile from './../../public/profile.jpg'
import Filter from './../../public/filter.svg'

export default function Board() {
    return (
        <div className="bg-[#FBFAFF] mt-1 rounded-tl-[2rem] py-12 px-8 w-screen overflow-auto">
            <div className="flex justify-between px-6 ">
                <h1 className="flex gap-3 text-[2rem] font-bold items-center text-title">Meu Kanban
                    <Image src={Pencil} alt="lapis" />
                </h1>

                <Image src={Profile} width={64} height={64} alt="" className="rounded-full" />
            </div>
            <div className="my-8 px-6 flex gap-3">
                <button className="h-12 w-[8.43rem] rounded-[5px] bg-background text-white font-light text-sm leading-6 flex items-center justify-center gap-2">
                    <Image src={Filter} alt="funil" className="h-6 w-6"/>
                    Filtrar
                </button>
                <div className="w-full flex items-center drop-shadow-lg border rounded-xl bg-white">
                    <Image src={Search} alt="Lupa" className="h-full ml-6 mr-[10px]" />
                    <input
                        className="w-full focus:outline-none placeholder:text-[#7C7C8A] placeholder:text-base placeholder:font-normal"
                        placeholder="Busque por cards, assuntos ou responsáveis..."
                    />
                </div>

            </div>

            <div className="p-6 flex gap-24 text-title">
                <div className="flex flex-col gap-6">
                    <h1 className="text-xl font-bold">Por fazer</h1>
                    <div className="bg-white drop-shadow-3xl p-6 flex flex-col rounded-lg gap-[10px] ">
                        <span className="text-sm font-bold">#boraCodar um Kanban 🧑‍💻</span>
                        <p className="text-[#756966] text-sm font-medium text-clip overflow-hidden">Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.</p>
                        <div className="flex gap-2 text-xs">
                            <button className="bg-[#E2D6FF] text-background p-2 rounded-lg">rocketseat</button>
                            <button className="bg-[#E2D6FF] text-background p-2 rounded-lg">desafio</button>
                        </div>
                    </div>
                    <div className="bg-white drop-shadow-3xl p-6 flex flex-col rounded-lg gap-[10px]">
                        <span className="text-sm font-bold">Manter a ofensiva 🔥</span>
                        <p className="text-[#756966] text-sm font-medium text-clip overflow-hidden">Manter minha atividade na plataforma da Rocketseat para não perder a ofensiva</p>
                        <div className="flex gap-2 text-xs">
                            <button className="bg-[#E2D6FF] text-background p-2 rounded-lg">rocketseat</button>
                        </div>
                    </div>
                    <div className="bg-white drop-shadow-3xl p-6 flex flex-col rounded-lg gap-[10px]">
                        <span className="text-sm font-bold">Almoçar 🥗</span>
                        <p className="text-[#756966] text-sm font-medium text-clip overflow-hidden">
                            Me alimentar, aproveitando um momento de descanso para recarregar minhas energias durante o almoço
                        </p>
                        <div className="flex gap-2 text-xs">
                            <button className="bg-[#E2D6FF] text-background p-2 rounded-lg">autocuidado</button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-6">
                    <h1 className="text-xl font-bold">Fazendo</h1>
                    <div className="bg-white drop-shadow-3xl p-6 flex flex-col rounded-lg gap-[10px] ">
                        <span className="text-sm font-bold">Conferir o novo desafio 🚀 </span>
                        <p className="text-[#756966] text-sm font-medium text-clip overflow-hidden">
                            Conferir o novo projeto do #boraCodar para fazê-lo da melhor maneira possível
                        </p>
                        <div className="flex gap-2 text-xs">
                            <button className="bg-[#E2D6FF] text-background p-2 rounded-lg">rocketseat</button>
                            <button className="bg-[#E2D6FF] text-background p-2 rounded-lg">desafio</button>
                        </div>
                    </div>
                    <div className="bg-white drop-shadow-3xl p-6 flex flex-col rounded-lg gap-[10px]">
                        <span className="text-sm font-bold">Ser incrível 😎</span>
                        <p className="text-[#756966] text-sm font-medium text-clip overflow-hidden">
                            Sempre me lembrar de manter minha autenticidade e espalhar amor
                        </p>
                        <div className="flex gap-2 text-xs">
                            <button className="bg-[#E2D6FF] text-background p-2 rounded-lg">autocuidado</button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-6">
                    <h1 className="text-xl font-bold">Feito</h1>
                    <div className="bg-white drop-shadow-3xl p-6 flex flex-col rounded-lg gap-[10px] ">
                        <span className="text-sm font-bold">#boraCodar uma página de login 🧑‍💻</span>
                        <p className="text-[#756966] text-sm font-medium text-clip overflow-hidden">
                            Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.
                        </p>
                        <div className="flex gap-2 text-xs">
                            <button className="bg-[#E2D6FF] text-background p-2 rounded-lg">rocketseat</button>
                            <button className="bg-[#E2D6FF] text-background p-2 rounded-lg">desafio</button>
                        </div>
                    </div>
                    <div className="bg-white drop-shadow-3xl p-6 flex flex-col rounded-lg gap-[10px] ">
                        <span className="text-sm font-bold">#boraCodar uma página de login 🧑‍💻</span>
                        <p className="text-[#756966] text-sm font-medium text-clip overflow-hidden">
                            Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.
                        </p>
                        <div className="flex gap-2 text-xs">
                            <button className="bg-[#E2D6FF] text-background p-2 rounded-lg">rocketseat</button>
                            <button className="bg-[#E2D6FF] text-background p-2 rounded-lg">desafio</button>
                        </div>
                    </div>
                    <div className="bg-white drop-shadow-3xl p-6 flex flex-col rounded-lg gap-[10px] ">
                        <span className="text-sm font-bold">#boraCodar uma página de login 🧑‍💻</span>
                        <p className="text-[#756966] text-sm font-medium text-clip overflow-hidden">
                            Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.
                        </p>
                        <div className="flex gap-2 text-xs">
                            <button className="bg-[#E2D6FF] text-background p-2 rounded-lg">rocketseat</button>
                            <button className="bg-[#E2D6FF] text-background p-2 rounded-lg">desafio</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}