import React from 'react'
import './Rules.css'
import NavBar from '../NavBar/NavBar'
import {Container , Card} from 'react-bootstrap'
const Rules = props =>{
    return(
        <div className='rulesBgr'>
            <div className='coover' style={{height:'100%' , width:'100%'  ,display:'flex' ,flexDirection:'column' ,backgroundColor:"rgba(0,0,0,0.6)"}}>
                <NavBar/>
                <div className='rules'>
                    <p className='paragraphsHeader' style={{fontFamily:'Vazir-FD'}}>قوانین</p>
                    <li className='paragraphs' style={{fontFamily:'Vazir-FD'}}>مسابقات در قالب تیم های دونفره برگزار میشوند و امکان تغییر هم تیمی وجود ندارد</li>
                    <li className='paragraphs' style={{fontFamily:'Vazir-FD'}}>سرعت بازی عدد 1 میباشد مگر اینکه شرکت کنندگان با عدد دیگری موافق باشند</li>
                    <li className='paragraphs' style={{fontFamily:'Vazir-FD'}}>تعداد تیم های انتخابی 3 تیم و به ترتیب میباشند. امکان بازی با تیم های یکسان فقط در صورتی ممکن است که هر سه اولویت دو تیم شرکت کننده یکسان باشد</li>
                    <li className='paragraphs' style={{fontFamily:'Vazir-FD'}}>اگر تیم باشگاهی مورد نظر شما در لیست تیم های روی وبسایت موجود نمیباشد برای مشاهده بازیکنان و انتخاب تیم با پشتیبانی تماس بگیرید</li>
                    <li className='paragraphs' style={{fontFamily:'Vazir-FD'}}>روند برگزاری مسابقات به صورت دوحذفی میباشد یعنی تیم شرکت کننده بعد از دو باخت حذف میشود</li>
                    <li className='paragraphs' style={{fontFamily:'Vazir-FD'}}>تعداد تعویض ها 3 و مدت زمان برگزاری بازی ها هر نیمه 10 دقیقه میباشد.</li>
                    <li className='paragraphsBold' style={{fontFamily:'Vazir-FD'}}>در صورت تقاضای همه شرکت کنندگان برای اجرای مسابقات در نسخه 2020 این امکان وجود خواهد داشت و کلیه مسابقات با نسخه 2020 انجام خواهند شد</li>
                    <li className='paragraphsBold' style={{fontFamily:'Vazir-FD'}}>جوایز بستگی به تعداد تیم های شرکت کننده دارد و پس از پایان مهلت ثبت نام اعلام میشود</li>
                </div>
            </div>
        </div>
    )
}
export default Rules