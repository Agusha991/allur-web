'use client'
import BrandsBlock from "@/app/Components/Brands/Brands-block";
import HeaderComponent from "@/app/Components/Header-component";
import './index.scss'
import Button from "@/app/Components/Button";
import {useDispatch, useSelector} from "react-redux";
import {
    brandCar,
    modelCar,
    nameCar,
    selectModel,
    selectNameCar,
} from "@/lib/global-store-slice";
import {useEffect, useState} from "react";
import kiaBackground from '@/public/assets/jpg/kia-background.jpg'
import chevroletBackground from '@/public/assets/jpg/chevrolet-background.jpg'
import hongqoiBackground from '@/public/assets/jpg/hongqi-background.jpg'
import jetourBackground from '@/public/assets/jpg/jetour-background.jpg'

export default function Brands() {
    const brands: any = ['ChevroletIcon', 'KiaIcon', 'JacIcon', 'SkodaIcon', 'JetourIcon', 'HongqiIcon']
    const brandsModel: Array<string> = ['Sorento', 'k5', 'k9', 'k900', 'ceed', 'Stinger', 'EV6', 'Sorento', 'Sorento', 'Sorento', 'Sorento', 'Sorento', 'Sorento', 'Sorento',]
    const typeCar: Array<Object> = [
        {name: 'Все', value: 'all'},
        {name: 'Седан', value: 'sedan'},
        {name: 'Кроссовер', value: 'crossover'},
        {name: 'Внедорожник', value: 'jeep'},
        {name: 'Премиум', value: 'premium'},
    ]

    const dispatch = useDispatch();
    const selectTypeCar = useSelector(nameCar);
    const model = useSelector(modelCar);
    const brand = useSelector(brandCar);
    const brandCarPhoto = [
        {
            name: 'ChevroletIcon',
            value: chevroletBackground.src
        }, {
            name: 'KiaIcon',
            value: kiaBackground.src
        }, {
            name: 'HongqiIcon',
            value: hongqoiBackground.src
        }, {
            name: 'SkodaIcon',
            value: kiaBackground.src
        }, {
            name: 'JetourIcon',
            value: jetourBackground.src
        }, {
            name: 'JacIcon',
            value: kiaBackground.src
        },
    ]

    const [brandBackground, setBrandBackground] = useState(kiaBackground.src)
    useEffect(() =>{
        if(brand){
            // @ts-ignore
            setBrandBackground(brandCarPhoto.find((value:any) => value.name === brand).value)
        }
    },[brand])

    return (
        <div className={'brands'}>
            <HeaderComponent title={'Бренды'}/>
            <div className={'brands-background'} style={{backgroundImage: `url(${brandBackground})`}}>
                <BrandsBlock brands={brands}/>
                <div>
                    <Button class='brands-button-more' text={'Подробнее о Бренде'}/>
                    <div className='brands-type-car'>
                        {
                            typeCar.map((carInfo: any, index: number) => (
                                <div className={selectTypeCar === carInfo.name ? 'active' : ''} key={index}
                                     onClick={() => dispatch(selectNameCar(carInfo.name))}>
                                    <span>
                                    {carInfo.name}
                                    </span>
                                </div>
                            ))
                        }

                    </div>
                    <div className='brands-model-car'>
                        {
                            brandsModel.map((brand: string, index: number) => (
                                <div key={index} className={model === brand ? 'active' : ''}
                                     onClick={() => dispatch(selectModel(brand))}>
                                    {brand}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            {/*<div style={{height: 170, background: 'linear-gradient(76deg, #262626 3.2%, #414141 99.45%)'}}/>*/}
        </div>
    )
}
