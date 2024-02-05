
import './index.scss'
import Logo from '@/public/assets/svg/logo.svg'
import CirclePhone from '@/public/assets/svg/circle-phone.svg'
import Image from 'next/image';
import ThemeSwitcher from "@/app/Components/Theme-switcher";

export default function MainSwitcher() {
    return (
        <div className='main-switcher'>
            <Image
                className='main-switcher-logo'
                priority
                src={Logo}
                alt="Follow us on Twitter"
            />
            <div className='main-switcher-content'>
                <div className='main-switcher-content-title'>
                    <Image
                        priority
                        src={CirclePhone}
                        alt="Follow us on Twitter"
                    />
                    5588
                </div>
            </div>
            <ThemeSwitcher/>
        </div>
    )
}
