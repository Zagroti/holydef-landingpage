import React,{ Component} from 'react';
import picture1 from '../Assets/images/twoPhone.jpg';
import picture2 from '../Assets/images/white_matte.jpg';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppStore , faGooglePlay } from '@fortawesome/free-brands-svg-icons';

library.add(faAppStore , faGooglePlay )

class HomeFa extends Component {

    render()
    {

        return(
            <div>
                <div  className="section1Fa" >
                    <div className="container ">
                        <div className="download">
                            <div className="downloadDesc downloadDescFa" data-aos="flip-left">
                                <h2 className="rtl">
                              یاد و خاطره شهیدان را زنده نگه داریم 
                                </h2>
                                <h3 className="rtl">
                                 نگاهی تازه به شهدا و جنگ تحمیلی 
                                </h3>
                                <div className="descLinkFa">
                                    <p className="rtl">
                                      
هالی دف مجموعه نرم افزاری است که با استفاده از آخرین متد روز دنیا توانسته شرایطی را فراهم آورد تا 
با ساده ترین روش بتوانید روزانه 10 الی 15 لغت جدید انگلیسی بیاموزید.
                                    </p>
                                    <p className="rtl">
 

 اگر در آموختن زبان انگلیسی دچار مشکل هستید الان اپلیکیشن فالنگ را دانلود کنید و از ساده ترین روش های آموزش زبان انگلیسی بهره مند شوید.

                                    </p>
                                    <div className="downloadLinks">
                                        <div className="appStore " >
                                            <FontAwesomeIcon className="DLIcon" icon={['fab', 'app-store']} />
                                            <span className="downloadText">
                                                <span> دانلود اپ</span>
                                                <span> اپل  استور</span>
                                            </span>
                                            <a href="/"> </a>

                                        </div>
                                        <div className="googlePlay ">
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
                        <div className="picture1" data-aos="fade-right">
                            <img src={picture1} alt="اپلیکسشن"/>
                        </div>
                    </div>
                
               
                </div>
                <div className="section2 bgColor4">
                     {/* <div className="rect"></div> */}

                    <div className="container">

                        <div className="description color3" data-aos="zoom-in">
                            <h2>خودآموز هوشمند</h2>
                            <p className="rtl">
                                به کمک خودآموز هوشمند فالنگ، دایره ی وسیعی از لغات پرکاربرد و ضروری را از حافظه کوتاه مدت به حافظه بلند مدت خود منتقل کنید.
                                فالنگ با مکانیزم آموزشی خود، همچون یک آموزگار خصوصی 24 ساعته در اختیار شماست و هوشمندانه لغاتی را با توجه به وضعیت حافظه شما به شما یاد می دهد. کافی است فالنگ را فرا بخوانید.
                            </p>
                        </div>
                        <div className="picture2" data-aos="zoom-out">
                            <img src={picture2} alt="توضیحات"/>
                        </div>
                        <div className="description color3" data-aos="zoom-in">
                            <h2>اعلان خودکار</h2>
                            <p className="rtl"  >
                                آیا وقت یا تمرگز کافی برای یادگیری زبان ندارید؟ آیا به فردی که بتواند مدیریت سبک زندگی شما را در یادگیری زبان به عهده بگیرد نیازمندید؟ آیا تمایل دارید روزانه چند بار و هر بار به مدت چند ثانیه برای توسعه ی دایره ی لغات خود وقت بگذارید؟ سیستم اعلان خودکار فالنگ به تمامی این نیازها به ساده ترین و بهترین شکل پاسخ می دهد.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="section3Fa" >
                    <div className="container flexStart ">
                        <div className="search">
                            <p>ثبت نام برای خبرنامه!</p>
                            <p>برای ما همیشه با ما تماس بگیرید و آخرین اخبار را در مورد ما دریافت کنید<br/> شرکت و تمام فعالیت های ما!</p>
                            <div className="sendEmailFa">
                                <input type="email" className="emailFa rtl" placeholder="پست الکترونیک خود را وارد کنید . . . " />
                                <button className="sendFa bgColor3"  >فرستادن</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}


export default HomeFa;