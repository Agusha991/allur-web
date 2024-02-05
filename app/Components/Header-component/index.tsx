import HeaderLogo from '@/public/assets/svg/header-logo.svg'
import Image from "next/image";
import './index.scss'
export default function HeaderComponent (props: any) {
    return(
        <div className={'header-block'}>
            <Image
                priority
                src={HeaderLogo}
                alt=""
            />
            <div className={'header-block-title'}>
                {props.title}
            </div>
        </div>
    )
}
