import React , {useState} from 'react'
import './Register.css'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import Loading from '../Loading/Loading'
import NavBar from '../NavBar/NavBar'
const Register = props =>{
    let history=useHistory()
    
    const [user1,setUser1] = useState({
        name:'' ,
        lastname:'',
        field:'' ,
        st_number:'',
        phone_number:'',
        national_code:''
    })
    const [user2,setUser2] = useState({
        name:'' ,
        lastname:'',
        field:'' ,
        st_number:'',
        phone_number:'',
        national_code:''
    })
//input Handlers
    //user1
    const name_user1_change=event=>{
        setUser1({...user1,name:event.target.value})
    }
    const lastname_user1_change=event=>{
        setUser1({...user1,lastname:event.target.value})
    }
    const field_user1_change=event=>{
        setUser1({...user1,field:event.target.value})
    }
    const st_number_user1_change=event=>{
        setUser1({...user1,st_number:event.target.value})
    }
    const phone_number_user1_change=event=>{
        setUser1({...user1,phone_number:event.target.value})
    }
    const national_code_user1_change=event=>{
        setUser1({...user1,national_code:event.target.value})
    }
    //user2
    const name_user2_change=event=>{
        setUser2({...user2,name:event.target.value})
    }
    const lastname_user2_change=event=>{
        setUser2({...user2,lastname:event.target.value})
    }
    const field_user2_change=event=>{
        setUser2({...user2,field:event.target.value})
    }
    const st_number_user2_change=event=>{
        setUser2({...user2,st_number:event.target.value})
    }
    const phone_number_user2_change=event=>{
        setUser2({...user2,phone_number:event.target.value})
    }
    const national_code_user2_change=event=>{
        setUser2({...user2,national_code:event.target.value})
    }
    const [isLoading,setIsLoading]=useState(false)

//Confirm Data
const onConfirmPress=()=>{
    //post user data
    setIsLoading(true)
    axios.post('https://amir7amiri.ir/pes/api/user/register' ,{
        //user1
        user1_name:user1.name ,
        user1_family:user1.lastname,
        user1_field:user1.field ,
        user1_st_number:user1.st_number ,
        user1_phone_number:user1.phone_number ,
        user1_national_code:user1.national_code ,
        //user2
        user2_name:user2.name ,
        user2_family:user2.lastname,
        user2_field:user2.field ,
        user2_st_number:user2.st_number ,
        user2_phone_number:user2.phone_number ,
        user2_national_code:user2.national_code ,
    })
    .then(function(response){
        if(response.data.status==='success')
        {
            localStorage.setItem('teamid' , response.data.data.team_id)
            history.push(`/authentication`)
        } 
    })
    .catch(function(err){
        setIsLoading(false)
    })
}

    return(
        <div>
            <NavBar/>
            {isLoading&&(<Loading size={250}/>)}
            {!isLoading&&(
                <div className="mybgr overflow-hidden  align-items-center d-flex flex-column" >
                <text style={{fontFamily:'Vazir-FD'}} className='myHeader mt-4 mb-4'>ثبت نام</text>
                  <div className='wrapper d-flex flex-row shadow bg-white '>
                    <div className=' player1 d-flex flex-column w-50 align-items-center'>
                      <text style={{fontFamily:'Vazir-FD'}} className='player1name mt-4'>بازیکن 1</text>
                      <input value={user1.name} onChange={(event)=>name_user1_change(event)} style={{fontFamily:'Vazir-FD'}} placeholder='نام' className='input w-75 mt-4' type='text' />
                      <input value={user1.lastname} onChange={(event)=>lastname_user1_change(event)} style={{fontFamily:'Vazir-FD'}} placeholder='نام خانوادگی' className='input w-75 mt-4' type='text' />
                      <input value={user1.st_number} onChange={(event)=>st_number_user1_change(event)} style={{fontFamily:'Vazir-FD'}} placeholder='شماره دانشجویی' className='input w-75 mt-4' type='text' />
                      <input value={user1.field} onChange={(event)=>field_user1_change(event)} style={{fontFamily:'Vazir-FD'}} placeholder='رشته' className='input w-75 mt-4' type='text' />
                      <input value={user1.national_code} onChange={(event)=>national_code_user1_change(event)} style={{fontFamily:'Vazir-FD'}} placeholder='شماره ملی' className='input w-75 mt-4' type='text' />
                      <input className='input' value={user1.phone_number} onChange={(event)=>phone_number_user1_change(event)} style={{fontFamily:'Vazir-FD'}} placeholder='شماره تلفن' className='input w-75 mt-4 mb-5' type='text' />
                    </div>
                    <div className='player2 d-flex flex-column w-50 align-items-center'>
                      <text style={{fontFamily:'Vazir-FD'}} className='player2name mt-4'>بازیکن 2</text>
                      <input value={user2.name} onChange={(event)=>name_user2_change(event)} style={{fontFamily:'Vazir-FD'}} style={{fontFamily:'Vazir-FD'}} placeholder='نام'  className='input w-75 mt-4 ltr' type='text' />
                      <input value={user2.lastname} onChange={(event)=>lastname_user2_change(event)} style={{fontFamily:'Vazir-FD'}} placeholder='نام خانوادگی' className='input w-75 mt-4' type='text' />
                      <input value={user2.st_number} onChange={(event)=>st_number_user2_change(event)} style={{fontFamily:'Vazir-FD'}} placeholder='شماره دانشجویی' className='input w-75 mt-4' type='text' />
                      <input value={user2.field} onChange={(event)=>field_user2_change(event)} style={{fontFamily:'Vazir-FD'}} placeholder='رشته' className='input w-75 mt-4' type='text' />
                      <input value={user2.national_code} onChange={(event)=>national_code_user2_change(event)} style={{fontFamily:'Vazir-FD'}} placeholder='شماره ملی' className='input w-75 mt-4' type='text' />
                      <input value={user2.phone_number} onChange={(event)=>phone_number_user2_change(event)} style={{fontFamily:'Vazir-FD'}} placeholder='شماره تلفن' className='input w-75 mt-4 mb-5' type='text' />
                    </div>
                  </div>
                  <div className='mt-4 mb-4'>
                  <button onClick={()=>{onConfirmPress()}} style={{fontFamily:'Vazir-FD'}} className='btnn'>تایید</button>
                  </div>
              </div>
            )}
        </div>
    )
}

export default Register