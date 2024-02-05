'use client'
import './index.scss'
import Image from "next/image";
import SelectionCars from "@/public/assets/jpg/123.jpg";
import React from "react";
import {Slider} from "@nextui-org/react";
import HeaderComponent from "@/app/Components/Header-component";

export default function SelectionCar() {
    const allBrands: Array<string> = ['Chevrolet', 'Kia', 'Jac', 'Jetour', 'Lada', 'Hongqi']
    const [value, setValue]: any = ([100, 300]);
    const defaultContent = 'lorem'
    return (
        <div className='container '>
            <HeaderComponent title={'Подобрать автомобиль с Allur Finance'}/>
            <div className="selection-car">
                <div className={'selection-car-form'}>
                    <div className={'selection-car-form-select-all'}>
                        Выбрать все
                    </div>
                    <div className={'selection-car-form-all-brands'}>
                        {allBrands.map((brand: string, index: number) => (
                            <div
                                className={'selection-car-form-brand'}
                                key={index}>
                                {brand}
                            </div>
                        ))}
                    </div>
                    <div className='selection-car-form-filter'>
                        <div className='selection-car-form-filter-title'>
                            Первоначальный взнос
                        </div>
                        <div className='selection-car-form-filter-price'>
                            0 ₸ - 10 113 286 ₸
                        </div>

                        {/*<Slider*/}
                        {/*    label="Temperature"*/}
                        {/*    step={0.01}*/}
                        {/*    maxValue={1}*/}
                        {/*    minValue={0}*/}
                        {/*    defaultValue={0.4}*/}
                        {/*    className="max-w-md"*/}
                        {/*/>*/}
                    </div>
                    <div className='selection-car-form-filter'>
                        <div className='selection-car-form-filter-title'>
                            Ежемесячный платеж
                        </div>
                        <div className='selection-car-form-filter-price'>
                            0 ₸ - 10 113 286 ₸
                        </div>
                    </div>
                    <div className={'selection-car-form-button'}>
                        <span>
                         Показать 18 вариантов
                        </span>
                    </div>

                </div>

                <div className={'selection-car-image'}>
                    <Image
                        priority
                        src={SelectionCars}
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}
