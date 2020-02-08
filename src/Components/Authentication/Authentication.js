import React,{useState , useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import $ from 'jquery'
import './Authentication.css'
import axios from 'axios'


const Authentication =props =>{
    let history = useHistory()
    const[intValue1,setintvalue1]=useState('')
    const[intValue2,setintvalue2]=useState('')
    const[intValue3,setintvalue3]=useState('')
    const[intValue4,setintvalue4]=useState('')
    const[intValue5,setintvalue5]=useState('')
    const[intValue6,setintvalue6]=useState('')
    const [timeLeft, setTimeLeft] = useState(300);
    const ResendBtn = ()=>{
        setTimeLeft(300)
    }
    useEffect(()=>{
        setTimeout(() => {
            if(timeLeft>0)
                setTimeLeft(timeLeft-1);
        }, 1000);
    })
    const input1handler=event=>{
        if(event.target.value!==' '){
            setintvalue1(event.target.value)
            var $next = $('.input1').next('.allInputs');
            if ($next.length)
                $('.input1').next('.allInputs').focus();
            else
                $('.input1').blur();
        }
    }
    const input2handler=event=>{
        if(event.target.value!==' '){
            setintvalue2(event.target.value)
            var $next = $('.input2').next('.allInputs');
            if ($next.length)
                $('.input2').next('.allInputs').focus();
            else
                $('.input2').blur();
        }
    }
    const input3handler=event=>{
        if(event.target.value!==' '){
            setintvalue3(event.target.value)
            var $next = $('.input3').next('.allInputs');
            if ($next.length)
                $('.input3').next('.allInputs').focus();
            else
                $('.input3').blur();
        }
    }
    const input4handler=event=>{
        if(event.target.value!==' '){
            setintvalue4(event.target.value)
            var $next = $('.input4').next('.allInputs');
            if ($next.length)
                $('.input4').next('.allInputs').focus();
            else
                $('.input4').blur();
        }
    }
    const input5handler=event=>{
        if(event.target.value!==' '){
            setintvalue5(event.target.value)
            var $next = $('.input5').next('.allInputs');
            if ($next.length)
                $('.input5').next('.allInputs').focus();
            else
                $('.input5').blur();
        }
    }
    const input6handler=event=>{
        if(event.target.value!==' '){
            setintvalue6(event.target.value)
            $('.input6').blur();
            var $btn = $('.conBtnDeactive');
            console.log($btn)
            $btn.removeClass('conBtnDeactive')
            $btn.addClass('conBtnActive')
            $btn.focus()
        }
    }

    const onConfirmBtn=()=>{
        axios.post('https://amir7amiri.ir/pes/api/team/verify', {
            team_id: localStorage.getItem('teamid'),
            code: intValue1+intValue2+intValue3+intValue4+intValue5+intValue6
          })
          .then(function (response) {
            if(response.data.status==='success')
            {
                history.push(`/team_selection`)
            }
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    
    return(
        <div style={{ height:'100vh',width:'100%' ,alignItems:'center',justifyContent:'center', display:'flex' ,flexDirection:'column'}}>
            <div>
                <img className='img' src={require('./smartphone.png')}/>
            </div>
            <div style={{ alignItems:'center',justifyContent:'center', display:'flex' ,flexDirection:'row'}}>
                <input maxLength='1' value={intValue1} onChange={event=>input1handler(event)}  className='input1 allInputs' type='number'/>
                <input maxLength='1' value={intValue2} onChange={event=>input2handler(event)}  className='input2 allInputs' type='number'/>
                <input maxLength='1' value={intValue3} onChange={event=>input3handler(event)}  className='input3 allInputs' type='number'/>
                <input maxLength='1' value={intValue4} onChange={event=>input4handler(event)}  className='input4 allInputs' type='number'/>
                <input maxLength='1' value={intValue5} onChange={event=>input5handler(event)}  className='input5 allInputs' type='number'/>
                <input maxLength='1' value={intValue6} onChange={event=>input6handler(event)}  className='input6 allInputs' type='number'/>
            </div>
            <div className='txtContainer'>
                <text>کد ارسال شده به شماره تلفن بازیکن اول را وارد کنید</text>   
            </div>
            <div className='resendContainer'>
                {timeLeft===0&&(<text onClick={()=>ResendBtn()} className='ResendtxtLink'>ارسال</text>)}
                {timeLeft>0&&(<text className='Resendtxt'>ارسال مجدد در {timeLeft}</text>)}
            </div>
            <div>
                <button className='conBtnDeactive' onClick={()=>onConfirmBtn()}>تایید</button>
            </div>
        </div>
    )
}
export default Authentication