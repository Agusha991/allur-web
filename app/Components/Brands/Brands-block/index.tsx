import './index.scss'
import Image from "next/image";
import React from "react";

import ChevroletIcon from '@/public/assets/svg/brands/chevrolet-icon.svg'
import ChevroletActiveIcon from '@/public/assets/svg/brands/chevrolet-active-icon.svg'
import KiaActiveIcon from '@/public/assets/svg/brands/kia-active-icon.svg'
import KiaIcon from '@/public/assets/svg/brands/kia-icon.svg'
import JetourIcon from '@/public/assets/svg/brands/jetour-icon.svg'
import JetourActiveIcon from '@/public/assets/svg/brands/jetour-active-icon.svg'
import HongqiIcon from '@/public/assets/svg/brands/hongqi-icon.svg'
import HongqiAcitveIcon from '@/public/assets/svg/brands/hongqi-active-icon.svg'
import {useDispatch, useSelector} from "react-redux";
import {brandCar, selectBrand} from "@/lib/global-store-slice";
import JacIcon from "@/app/Components/assets/svg/Jac-icon";
import SkodaIcon from "@/app/Components/assets/svg/Skoda-icon";

export default function BrandsBlock(props: any) {
    const dispatch = useDispatch();
    const brand: string = useSelector(brandCar);

    return (
        <div className={'brands-block'}>
            <Image
                priority
                src={brand === 'ChevroletIcon' ? ChevroletActiveIcon : ChevroletIcon}
                width={100}
                height={100}
                alt=""
                onClick={() => dispatch(selectBrand('ChevroletIcon'))}

            />
            <Image
                priority
                src={brand === 'KiaIcon' ? KiaActiveIcon : KiaIcon}
                width={100}
                height={100}
                alt=""
                onClick={() => dispatch(selectBrand('KiaIcon'))}
            />
            <JacIcon
                typeIcon={brand}
            />
            <SkodaIcon
                typeIcon={brand}
            />
            <Image
                priority
                src={brand === 'JetourIcon' ? JetourActiveIcon : JetourIcon}
                width={100}
                height={100}
                alt=""
                onClick={() => dispatch(selectBrand('JetourIcon'))}
            />
            <Image
                priority
                src={brand === 'HongqiIcon' ? HongqiAcitveIcon : HongqiIcon}
                width={100}
                height={100}
                alt=""
                onClick={() => dispatch(selectBrand('HongqiIcon'))}
            />
        </div>
    )
}
