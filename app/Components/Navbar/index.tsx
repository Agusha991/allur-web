import './index.scss'

import Circle from '@/public/assets/svg/circle-white.svg'
import Image from "next/image";

export default function NavBar() {
    const navbarData: Array<string> = ['Автомобили', 'Сервисы', 'О компании', 'Новости']

    return (
        <div className='navbar'>
            {
                navbarData.map((navbarData: string, index:number) => (
                    <div key={index} className='navbar-item'>
                        {navbarData}
                        <div>
                            <Image
                                priority
                                src={Circle}
                                alt="Follow us on Twitter"
                            />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
