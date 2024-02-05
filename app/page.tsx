'use client'
import styles from './page.module.css'
import Main from "@/app/Pages/Main/index";
import Brands from "@/app/Pages/Brands";
import SelectionCar from "@/app/Pages/Selection-car";
import {NextUIProvider} from "@nextui-org/react";
import News from "@/app/Pages/News";
import OneNews from "@/app/Components/One-news";
import Career from "@/app/Components/Career";
import ShoppingMall from "@/app/Components/Shopping-mall";
import FeedBack from "@/app/Pages/feedback";

export default function Home() {
    return (
            <main className={`${styles.main} container`}>
                <Main/>
                <Brands/>
                <SelectionCar/>
                <News/>
                <OneNews/>
                <Career/>
                <ShoppingMall/>
                <FeedBack/>
            </main>
    )
}
