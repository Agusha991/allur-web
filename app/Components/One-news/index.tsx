import News1 from "@/public/assets/jpg/news1.jpg";
import NewsSlider from "@/public/assets/jpg/news-slider.jpg"
import './index.scss'
import React from "react";
import Image from "next/image";
import Button from "@/app/Components/Button";
import HeaderComponent from "@/app/Components/Header-component";

export default function OneNews() {
    const dataNews: any = {
        title: 'Производство Allur',
        subtitle: 'Наше производство базируется в городе Костанай. Это первый в Казахстане завод, который отвечает всем требованиям современного промышленного производства.',
        img: News1
    }

    return (
        <div className={'container'}>
            <HeaderComponent title={''}/>
            <div className="one-news">

                <div className={'news'}>
                    <div className={'news-info'}>
                        <div className={'news-block-items-content-title'}>
                            {dataNews.title}
                        </div>
                        <div className={'news-info-subtitle'}>
                            {dataNews.subtitle}
                        </div>
                        <div className={'news-info-params'}>
                            <div className={'news-info-params-block'}>
                                <div className={'news-info-params-block-value'}>
                                    № 1
                                </div>
                                <div className={'news-info-params-block-title'}>
                                    по производству транспортных средств
                                </div>
                                <div className={'news-info-params-block-subtitle'}>
                                    Доля рынка - 63%
                                </div>
                            </div>
                            <div className={'news-info-params-block'}>
                                <div className={'news-info-params-block-value'}>
                                    125 тыс.
                                </div>
                                <div className={'news-info-params-block-title'}>
                                    автомобилей в год
                                </div>
                                <div className={'news-info-params-block-subtitle'}>
                                    Производственная мощность
                                </div>
                            </div>
                            <div className={'news-info-params-block'}>
                                <div className={'news-info-params-block-value'}>
                                    4.0
                                </div>
                                <div className={'news-info-params-block-title'}>
                                    индустрия
                                </div>
                                <div className={'news-info-params-block-subtitle'}>
                                    Автоматизированное цифровое производство
                                </div>
                            </div>

                        </div>
                        <div className={'news-info-brands'}>
                            Линейка производимых автобрендов:
                            <br/>
                            <span>
                        Chevrolet, Kia, JAC, JAC Trucks, Jetour,
                        <br/>
                            Hongqi, Skoda
                        </span>
                        </div>
                    </div>
                    <div className="news-photo">
                        <Image
                            priority
                            src={NewsSlider}
                            alt=""
                        />
                    </div>

                </div>
                <Button class={'selection-car-form-button news-block-button'} text={'Узнать больше'}/>
            </div>
        </div>
    )
}
