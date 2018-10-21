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
                                      
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. 
                                    </p>
                                    <p className="rtl">
 

کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد

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
                            <h2> استفاده آسان</h2>
                            <p className="rtl">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. 
                            </p>
                        </div>
                        <div className="picture2" data-aos="zoom-out">
                            <img src={picture2} alt="توضیحات"/>
                        </div>
                        <div className="description color3" data-aos="zoom-in">
                            <h2>جامع و کامل </h2>
                            <p className="rtl"  >
                            کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد
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