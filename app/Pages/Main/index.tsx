import MainSwitcher from "@/app/Components/Main-switcher";
import './index.scss'


export default function Main() {
    return (
        <div className='main'>
            <video
                autoPlay
                muted
                style={{height: '100vh'}}
                src="/assets/video/main-video.mp4"
                controls={false}
            />
            <MainSwitcher/>
        </div>
    )
}
