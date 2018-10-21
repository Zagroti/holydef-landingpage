import React,{ Component} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppStore , faGooglePlay } from '@fortawesome/free-brands-svg-icons';

library.add(faAppStore , faGooglePlay )

class AboutUsFa extends Component {

    render()
    {

        return(

            <div>
                <div className="aboutUs" >
                    <div className="container" >
                            <div className="aboutUsDesc" >
                                <h1 data-aos="flip-right"> درباره فالنگ</h1>
                                <p className="rtl" data-aos="flip-left">
                                
                                امروزه یادگیری زبان انگلیسی یکی از مهمترین کارها، در طی  سالهای اخیر شده است. به دلیل وجود بازار کار فراوان و سطح زندگی بالا در کشور های اروپایی و آمریکایی، خیلی از افراد علاقمند به یادگیری سریع زبان انگلیسی برای تحقق بخشیدن به آرزوهای خود می باشند. از این رو با استفاده از جدید ترین و بهترین متد های روز جهان نرم افزاری را بنا نمودیم که به صورت منحصر به فرد و در سریع ترین زمان ممکن، شما را در آموزش زبان انگلیسی یاری نماید.
                                </p>
                            </div>
                            <div className="aboutUsDownload bgColor4" >
                                <div className="aboutUsDownloadDiv" >
                                    <h2 className="color3" >آیا میخواهید خیلی راحت انگلیسی یاد بگیرید ؟</h2>
                                    <p className="color3" >دانلودش کن و سعی کن تا یاد بگیری</p>
                                    <div className="downloadLinks">
                                        <div className="appStore " data-aos="fade-right">
                                            <FontAwesomeIcon className="DLIcon" icon={['fab', 'app-store']} />
                                            <span className="downloadText">
                                                <span> دانلود اپ</span>
                                                <span> اپل استور</span>
                                            </span>
                                            <a href="/"> </a>
                                        </div>
                                        <div className="googlePlay " data-aos="fade-left">
                                            <FontAwesomeIcon className="DLIcon" icon={['fab', 'google-play']} />
                                            <span className="downloadText" >
                                                <span> دانلود اپ</span>
                                                <span> گوگل پلی</span>
                                            </span>
                                            <a href="/"> </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>

                </div>
            </div>
        );
    }
}


export default AboutUsFa;