import News1 from "@/public/assets/jpg/news1.jpg"
import News2 from "@/public/assets/jpg/news2.jpg"
import News3 from "@/public/assets/jpg/news3.jpg"
import Image from "next/image";
import React from "react";
import './index.scss'
import Button from "@/app/Components/Button";
import HeaderComponent from "@/app/Components/Header-component";

export default function News() {
    const dataNews = [
        {
            title: 'В Казахстане состоялась масштабная презентация Chevrolet Onix',
            subtitle: '21 мая 2023 года в г. Алматы состоялась грандиозная презентация долгожданной модели Chevrolet Onix. Бренд Chevrolet, входящий в состав крупнейшей автомобильной компании Allur',
            img: News1
        }, {
            title: 'Kia EV6. Заряжает кэшбэком',
            subtitle: 'Лауреат множества престижных международных наград, включая European Car of the Year и Best Cars of the Year, инновационный электро-кроссовер Kia EV6',
            img: News2
        }, {
            title: 'ТО-0 в подарок!',
            subtitle: 'С 17 июля по 31 декабря 2023 года во всех официальных дилерских центрах бренда Kia в Казахстане действует акция «ТО-0 в подарок»',
            img: News3
        }
    ]
    return (
        <div className={'container'}>
            <HeaderComponent title={''}/>
            <div className="news-block">
                {
                    dataNews.map((info, index: number) => (
                        <div key={index} className={'news-block-items'}>

                            <div className={'news-block-items-content'}>
                                <div className={'news-block-items-content-title'}>
                                    {info.title}
                                </div>
                                <div className={'news-block-items-content-subtitle'}>
                                    {info.subtitle}
                                </div>
                                <div className={'news-block-items-content-more-info'}>
                                    Подробнее
                                </div>
                            </div>
                            <div className={'news-block-items-photo'}>

                            <Image
                                priority
                                src={info.img}
                                alt=""
                            />
                            </div>

                        </div>

                    ))
                }
                <Button class={'selection-car-form-button news-block-button'} text={'Все новости'}/>
            </div>
        </div>
    )
}
