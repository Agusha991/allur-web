import Button from "@/app/Components/Button";
import React from "react";
import Image from "next/image";
import Career1 from "@/public/assets/jpg/career-1.jpg";
import Career2 from "@/public/assets/jpg/career-2.jpg";
import Career3 from "@/public/assets/jpg/career-3.jpg";
import "./index.scss"
import HeaderComponent from "@/app/Components/Header-component";


export default function Career() {
    return (
        <div className={'container'}>
            <HeaderComponent title={''}/>
            <div className={'career'}>
                <div className={'career-content'}>
                    <div className={'career-content-info'}>
                        <div className={'news-block-items-content-title'}>
                            Карьера в Allur
                        </div>
                        <div className={'news-info-subtitle'}>
                            Вместе мы не боимся перемен, думаем на шаг вперед и достигаем поставленных целей, оперативно
                            реагируем и приходим на помощь покупателям, партнерам и друг другу.
                            Нам доверяют, так как мы честны и открыты во взаимоотношениях со всеми, работаем в команде и
                            несем общую ответственность за выполнение задач.
                            <br/>
                            <br/>

                            Искренность и доверие для нас не просто слова, мы даём слово и честно выполняем
                            обязательства,
                            мы с одинаковым уважением относимся к покупателям, партнерам и друг другу.
                        </div>
                    </div>
                    <div className={'career-content-photos'}>
                        <Image
                            priority
                            src={Career1}
                            alt=""
                        />
                        <Image
                            priority
                            src={Career2}
                            alt=""
                        />
                        <Image
                            priority
                            src={Career3}
                            alt=""
                        />
                    </div>
                </div>
                <Button class={'selection-car-form-button news-block-button'} text={'Смотреть больше'}/>
            </div>
        </div>
    )
}
