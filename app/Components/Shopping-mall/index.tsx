import KiaIcon from '@/public/assets/svg/brands/kia-icon.svg'
import MapWithCentresIcon from '@/public/assets/svg/map-with-centers.svg'
import Image from "next/image";
import LocationSvg from "@/public/assets/svg/location.svg";
import PhoneSvg from "@/public/assets/svg/phone-1.svg";
import ClockSvg from "@/public/assets/svg/clock.svg";
import React from "react";
import './index.scss'
import HeaderComponent from "@/app/Components/Header-component";

export default function ShoppingMall() {
    const centersData = [
        {
            number: '5588',
            street: 'Пр. Туран, 51',
            workTime: {
                workDay: 'Пн-Пт 9:00-20:00',
                workWeekend: 'Пн-Пт 9:00-20:00'
            },
            img: KiaIcon
        }, {
            number: '5588',
            street: 'Пр. Туран, 51',
            workTime: {
                workDay: 'Пн-Пт 9:00-20:00',
                workWeekend: 'Пн-Пт 9:00-20:00'
            },
            img: KiaIcon
        }, {
            number: '5588',
            street: 'Пр. Туран, 51',
            workTime: {
                workDay: 'Пн-Пт 9:00-20:00',
                workWeekend: 'Пн-Пт 9:00-20:00'
            },
            img: KiaIcon
        }, {
            number: '5588',
            street: 'Пр. Туран, 51',
            workTime: {
                workDay: 'Пн-Пт 9:00-20:00',
                workWeekend: 'Пн-Пт 9:00-20:00'
            },
            img: KiaIcon
        }, {
            number: '5588',
            street: 'Пр. Туран, 51',
            workTime: {
                workDay: 'Пн-Пт 9:00-20:00',
                workWeekend: 'Пн-Пт 9:00-20:00'
            },
            img: KiaIcon
        }, {
            number: '5588',
            street: 'Пр. Туран, 51',
            workTime: {
                workDay: 'Пн-Пт 9:00-20:00',
                workWeekend: 'Пн-Пт 9:00-20:00'
            },
            img: KiaIcon
        }, {
            number: '5588',
            street: 'Пр. Туран, 51',
            workTime: {
                workDay: 'Пн-Пт 9:00-20:00',
                workWeekend: 'Пн-Пт 9:00-20:00'
            },
            img: KiaIcon
        },
    ]
    return (
        <div className="container">
            <HeaderComponent title={''}/>
            <div className={'shopping-mall'}>
                <div className={'shopping-mall-map'}>
                    <Image
                        priority
                        src={MapWithCentresIcon}
                        alt=""
                    />
                </div>
                <div className={'shopping-mall-centers'}>
                    <div className="shopping-mall-centers-title"> График работы дилерских центров</div>
                    <div className="shopping-mall-centers-city">
                        г. Астана
                    </div>
                    <div className="shopping-mall-centers-info">
                        {centersData.map((center: any, index: number) => (
                            <div key={index} className="shopping-mall-centers-info-all-block">
                                <div className="shopping-mall-centers-info-block">
                                    <div className="shopping-mall-centers-info-block-content">
                                        <div className="shopping-mall-centers-info-block-content-title">
                                            <Image
                                                priority
                                                src={LocationSvg}
                                                alt=""
                                            />
                                            {center.street}
                                        </div>
                                        <div className="shopping-mall-centers-info-block-content-title">
                                            <Image
                                                priority
                                                src={PhoneSvg}
                                                alt=""
                                            />
                                            {center.number}

                                        </div>
                                    </div>
                                    <div className="shopping-mall-centers-info-block-content">
                                        <div className="shopping-mall-centers-info-block-content-title">
                                            <Image
                                                priority
                                                src={ClockSvg}
                                                alt=""
                                            />
                                            {center.workTime.workDay}

                                        </div>
                                        <div className="shopping-mall-centers-info-block-content-title">
                                            <Image
                                                priority
                                                src={ClockSvg}
                                                alt=""
                                            />
                                            {center.workTime.workWeekend}
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={'shopping-mall-centers-info-all-block-logo'}
                                >
                                    <Image
                                        priority
                                        src={KiaIcon}
                                        alt=""
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
