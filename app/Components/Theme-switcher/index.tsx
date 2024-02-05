'use client'
import "./index.scss"
import Image from "next/image";
import MoonIcon from "@/public/assets/svg/moon.svg";
import SunIcon from "@/public/assets/svg/sun-icon.svg";
import { themeValue, selectTheme} from "@/lib/global-store-slice";
import {useDispatch, useSelector} from "react-redux";

export default function ThemeSwitcher() {
    const dispatch = useDispatch();
    const flagTheme = useSelector(themeValue);
    console.log(flagTheme)
    return (
        <div className={`theme-switcher ${flagTheme && 'theme-switcher-white'}`}>
            <div
                className={`theme-switcher-icon ${flagTheme && 'theme-switcher-icon-swipe'}`}
                onClick={() => dispatch(selectTheme())}
            >
                {flagTheme}
                <Image
                    priority
                    src={flagTheme ? SunIcon : MoonIcon}
                    alt="Follow us on Twitter"
                />
            </div>
        </div>
    )
}
