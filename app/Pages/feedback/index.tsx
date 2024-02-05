import HeaderComponent from "@/app/Components/Header-component";
import React from "react";
import './index.scss'
import Button from "@/app/Components/Button";
import Image from "next/image";
import LocationICon from "@/public/assets/svg/location.svg";
import ArrowDownIcon from "@/public/assets/svg/arrow-down.svg";
import AllNetworkIcon from "@/public/assets/svg/all-network-icon.svg";
import CirclePhone from "@/public/assets/svg/circle-phone.svg";

export default function FeedBack() {
    return (
        <div className={'brands'}>
            <HeaderComponent title={''}/>
            <div className={'feedback-block-background'}>
                <div className={'feedback-block-info'}>
                    <div className="feedback-block-info-city">
                        <Image
                            priority
                            className="feedback-block-info-city-location"
                            src={LocationICon}
                            alt=""
                        />
                        Выберите город
                        <Image
                            priority
                            src={ArrowDownIcon}
                            alt=""
                        />
                    </div>
                    <div className={'feedback-block-info-form'}>
                        <div className="feedback-block-info-form-content">
                            <div className={'news-block-items-content-title'}>
                                Запишитесь на консультацию
                            </div>
                            <div className={'news-info-subtitle feedback-block-subtitle'}>
                                Наши специалисты проконсультируют по любому вопросу. <br/>
                                Оставьте свой номер телефона и мы перезвоним в течении десяти минут.
                            </div>
                        </div>
                        <div className="feedback-block-info-form-data">
                            <div className="feedback-block-info-form-data-inputs">
                                <input type="number" placeholder={'+7 (___) ___ - __ - __'} max='12'/>
                            </div>
                            <div className="feedback-block-info-form-data-inputs">
                                <input type="text" placeholder={'Имя'}/>
                            </div>

                        </div>
                    </div>
                    <Button class={'selection-car-form-button news-block-button feedback-button'} text={'Отправить'}/>
                </div>
                <Image
                    className={'feedback-block-networks'}
                    priority
                    src={AllNetworkIcon}
                    alt=""
                />
            </div>
            <div className={'feedback-block-footer'}>
                <div className={'feedback-block-footer-item'}>
                    <Image
                        priority
                        src={CirclePhone}
                        alt=""
                    />
                    5588
                </div>
                <div className={'feedback-block-footer-item'}>© Allur 2023</div>
                <div className={'feedback-block-footer-item'}>
                    <div>Стандарты бренда</div>
                    <div>Политика конфиденциальности</div>
                </div>
            </div>
        </div>
    )
}
