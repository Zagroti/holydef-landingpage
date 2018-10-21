import React,{ Component} from 'react';



class ContactFa extends Component {

    render()
    {

        return(

            <div>
                
                <div className="contactUs" >
                    <div className="container">
                        <div className="contactDesc" >
                            <h1> تماس با ما</h1>
                            <p>
                                <span>
                                   <span className="descSpan1" >  آدرس : </span>
                                   <span className="descSpan2" > ایران . مازندران . آمل   </span> 
                                </span>
                            <br/><span> 
                                    <span className="descSpan1" > تلفن : </span>
                                    <span className="descSpan2" >011 123456789</span>
                                </span>
                            <br/><span className="descSpan2" >
                                    info@falangapp.ir
                                </span>
                            </p>
                            <div className="myLine" >

                            </div>
                        </div>
                        <div className="contactInputs" >
                            <input className="contactInputFa rtl"  type="text"  name="nameFamily" placeholder="نام و نام خانوادگی . . ."/>
                            <input className="contactInputFa rtl"  type="text" name="number" placeholder="شماره تلفن . . . "/>
                            <input className="contactInputFa rtl"  type="email" name="email" placeholder="پست الکترونیک . . . "/>
                            <textarea className="textAreaFa rtl" placeholder="پیام . . ." ></textarea>
                            <div className="checkBoxSendFa rowReverse" >


                                    <label className="myCheckFa rtl" >برای ارسال پیام این  تیک را بزن!
                                        <input type="checkbox"  />
                                        <span className="checkmarkFa"></span>
                                    </label>

                                <button type="submit" className="sendMessage" > ارسال پیام </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default ContactFa;