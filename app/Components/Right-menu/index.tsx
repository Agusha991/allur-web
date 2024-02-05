import './index.scss'
import NavBar from "@/app/Components/Navbar";
import LanguageSwitcher from "@/app/Components/Language-switcher";
import Image from "next/image";
import ShopIcon from "@/public/assets/svg/shop-icon.svg";
import ProfileIcon from "@/public/assets/svg/profile-icon.svg";
import FlagIcon from "@/public/assets/svg/flag-header-grey.svg";
import CarIcon from "@/public/assets/svg/car-icon.svg";
import MailIcon from "@/public/assets/svg/mail-icon.svg";
import DriveIcon from "@/public/assets/svg/drive-icon.svg";
import PhoneIcon from "@/public/assets/svg/phone-icon.svg";

export default function RightMenu() {
    const bottomTabItems = [
        {
            value: 'info@allur.kz ',
            key: 'email',
        }, {
            value: 'Тест Драйв',
            key: 'test drive',
        }, {
            value: 'Заказать звонок',
            key: 'call',
        }
    ]
    return (
        <div className='header'>
            <div className='header-menu'>
                <LanguageSwitcher/>
                <div className='header-menu-shop'>
                    <Image
                        priority
                        src={ShopIcon}
                        alt=""
                    />
                </div>
                <div className='header-menu-profile'>
                    <Image
                        priority
                        src={ProfileIcon}
                        alt=""
                    />
                </div>
            </div>
            <NavBar/>
            <div className='header-menu-bottom-tab'>
                <Image
                    priority
                    src={FlagIcon}
                    alt=""
                />
                <div className='header-menu-bottom-tab-content'>
                    <Image
                        priority
                        src={CarIcon}
                        alt=""
                    />
                    <div className='header-menu-bottom-tab-content-all-items'>
                        {
                            bottomTabItems.map((item, index:number) => (
                                <div className='header-menu-bottom-tab-content-all-items-select' key={index}>
                                    <Image
                                        priority
                                        src={item.key === 'email' ? MailIcon : item.key === 'test drive' ? DriveIcon : PhoneIcon}
                                        alt=""
                                    />
                                    {item.value}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
