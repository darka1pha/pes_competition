import React ,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import './TimeSelection.css'
import axios from 'axios'
const TimeSelection = props =>{
    const[selectedTimes,setSelectedTimes]=useState([])
    const history = useHistory()
    const onInputChange=(event)=>{
        if(event.target.checked)
        {
            setSelectedTimes([...selectedTimes,event.target.value])
        }
        else if(selectedTimes.length>=1 && event.target.checked===false)
        {   
            for(var i=0;i<selectedTimes.length;i++)
            {
                if(selectedTimes[i]===event.target.value)
                {
                    selectedTimes.splice(i,1)
                }
            }
        }
    }
    const onConfirmClick=props=>{
       if(selectedTimes.length>0) {
            axios.post('https://amir7amiri.ir/pes/api/time/register', {
                team_id: localStorage.getItem('teamid'),
                times: JSON.stringify(selectedTimes)
              })
              .then(function (response) {
                  console.log(response.status)
                  if(response.data.status==='success')
                  {
                    history.push(`/team_selection`)
                  }
              })
              .catch(function (error) {
                console.log(error);
              });
        }
    else alert('لطفا یک زمان را انتخاب کنید')
    console.log(localStorage.getItem('teamid'))
    }
    return(
        <div  className='allTime'>
            <div className='content'>
                <div className='header'>
                    <text style={{fontFamily:'Vazir-FD'}}>زمانهایی که میتوانید برای مسابقه حضور داشته باشید را انتخاب کنید</text>
                </div>
                    <table className='ttable' >
                        <tr  className='tableRow'>
                            <th></th>
                            <th style={{fontFamily:'Vazir-FD'}}  className='tableHeader'>شنبه</th>
                            <th style={{fontFamily:'Vazir-FD'}} className='tableHeader'>یکشنبه</th>
                            <th style={{fontFamily:'Vazir-FD'}} className='tableHeader'>دوشنبه</th>
                            <th style={{fontFamily:'Vazir-FD'}} className='tableHeader'>سه شنبه</th>
                            <th style={{fontFamily:'Vazir-FD'}} className='tableHeader'>چهار شنبه</th>
                            <th style={{fontFamily:'Vazir-FD'}} className='tableHeader'>پنج شنبه</th>
                        </tr>
                        <tr className='tableRow'>
                            <td style={{fontFamily:'Vazir-FD'}} className=' tableTime'>7:30</td>
                            <td className='tableData'><input value='7:30 - 9:30 Saturday' onChange={(event)=>onInputChange(event)} className='checkbox' type='checkbox'/></td>
                            <td className='tableData'><input value='7:30 - 9:30 Sunday' onChange={(event)=>onInputChange(event)} className='checkbox' type='checkbox'/></td>
                            <td className='tableData'><input value='7:30 - 9:30 Monday' onChange={(event)=>onInputChange(event)} className='checkbox' type='checkbox'/></td>
                            <td className='tableData'><input value='7:30 - 9:30 Tuesday' onChange={(event)=>onInputChange(event)} className='checkbox' type='checkbox'/></td>
                            <td className='tableData'><input value='7:30 - 9:30 Wednesday' onChange={(event)=>onInputChange(event)} className='checkbox' type='checkbox'/></td>
                            <td className='tableData'><input value='7:30 - 9:30 thursday' onChange={(event)=>onInputChange(event)} className='checkbox' type='checkbox'/></td>
                        </tr>
                        <tr className='tableRow'>
                            <td style={{fontFamily:'Vazir-FD'}} className=' tableTime'>9:30</td>
                            <td className='tableData' ><input value='9:30 - 11:30 Saturday' onChange={(event)=>onInputChange(event)} className='checkbox' type='checkbox'/></td>
                            <td className='tableData' ><input value='9:30 - 11:30 Sunday' onChange={(event)=>onInputChange(event)} className='checkbox' type='checkbox'/></td>
                            <td className='tableData' ><input value='9:30 - 11:30 Monday' onChange={(event)=>onInputChange(event)} className='checkbox' type='checkbox'/></td>
                            <td className='tableData' ><input value='9:30 - 11:30 Tuesday' onChange={(event)=>onInputChange(event)} className='checkbox' type='checkbox'/></td>
                            <td className='tableData' ><input value='9:30 - 11:30 Wednesday' onChange={(event)=>onInputChange(event)} className='checkbox' type='checkbox'/></td>
                            <td className='tableData' ><input value='9:30 - 11:30 thursday' onChange={(event)=>onInputChange(event)} className='checkbox' type='checkbox'/></td>
                        </tr>
                        <tr className='tableRow'>
                            <td style={{fontFamily:'Vazir-FD'}} className=' tableTime'>11:30</td>
                            <td className='tableData' ><input value='11:30 - 13:30 Saturday' onChange={(event)=>onInputChange(event)} className='checkbox' type='checkbox'/></td>
                            <td className='tableData' ><input value='11:30 - 13:30 Sunday' onChange={(event)=>onInputChange(event)} className='checkbox' type='checkbox'/></td>
                            <td className='tableData' ><input value='11:30 - 13:30 Monday' onChange={(event)=>onInputChange(event)} className='checkbox' type='checkbox'/></td>
                            <td className='tableData' ><input value='11:30 - 13:30 Tuesday' onChange={(event)=>onInputChange(event)} className='checkbox' type='checkbox'/></td>
                            <td className='tableData' ><input value='11:30 - 13:30 Wednesday' onChange={(event)=>onInputChange(event)} className='checkbox' type='checkbox'/></td>
                            <td className='tableData' ><input value='11:30 - 13:30 thursday' onChange={(event)=>onInputChange(event)} className='checkbox' type='checkbox'/></td>
                        </tr>
                        <tr className='tableRow'>
                            <td style={{fontFamily:'Vazir-FD'}} className=' tableTime'>13:30</td>
                            <td className='tableData' ><input value='13:30 - 15:30 Saturday' onChange={(event)=>onInputChange(event)} className='checkbox' type='checkbox'/></td>
                            <td className='tableData' ><input value='13:30 - 15:30 Sunday' onChange={(event)=>onInputChange(event)} className='checkbox' type='checkbox'/></td>
                            <td className='tableData' ><input value='13:30 - 15:30 Monday' onChange={(event)=>onInputChange(event)} className='checkbox' type='checkbox'/></td>
                            <td className='tableData' ><input value='13:30 - 15:30 Tuesday' onChange={(event)=>onInputChange(event)} className='checkbox' type='checkbox'/></td>
                            <td className='tableData' ><input value='13:30 - 15:30 Wednesday' onChange={(event)=>onInputChange(event)} className='checkbox' type='checkbox'/></td>
                            <td className='tableData' ><input value='13:30 - 15:30 thursday' onChange={(event)=>onInputChange(event)} className='checkbox' type='checkbox'/></td>
                        </tr>
                        <tr className='tableRow'>
                            <td style={{fontFamily:'Vazir-FD'}} className=' tableTime'>15:30</td>
                            <td className='tableData' ><input value='15:30 - 17:30 Saturday' onChange={(event)=>onInputChange(event)} className='checkbox' type='checkbox'/></td>
                            <td className='tableData' ><input value='15:30 - 17:30 Sunday' onChange={(event)=>onInputChange(event)} className='checkbox' type='checkbox'/></td>
                            <td className='tableData' ><input value='15:30 - 17:30 Monday' onChange={(event)=>onInputChange(event)} className='checkbox' type='checkbox'/></td>
                            <td className='tableData' ><input value='15:30 - 17:30 Tuesday' onChange={(event)=>onInputChange(event)} className='checkbox' type='checkbox'/></td>
                            <td className='tableData' ><input value='15:30 - 17:30 Wednesday' onChange={(event)=>onInputChange(event)} className='checkbox' type='checkbox'/></td>
                            <td className='tableData' ><input value='15:30 - 17:30 thursday' onChange={(event)=>onInputChange(event)} className='checkbox' type='checkbox'/></td>
                        </tr>
                        <tr className='tableRow'>
                            <td style={{fontFamily:'Vazir-FD'}}  className='tableTime'>17:30</td>
                            <td className='tableData'><input value='17:30 - 19:30 Saturday' onChange={(event)=>onInputChange(event)} className='checkbox' type='checkbox'/></td>
                            <td className='tableData'><input value='17:30 - 19:30 Sunday' onChange={(event)=>onInputChange(event)} className='checkbox' type='checkbox'/></td>
                            <td className='tableData'><input value='17:30 - 19:30 Monday' onChange={(event)=>onInputChange(event)} className='checkbox' type='checkbox'/></td>
                            <td className='tableData'><input value='17:30 - 19:30 Tuesday' onChange={(event)=>onInputChange(event)} className='checkbox' type='checkbox'/></td>
                            <td className='tableData'><input value='17:30 - 19:30 Wednesday' onChange={(event)=>onInputChange(event)} className='checkbox' type='checkbox'/></td>
                            <td className='tableData'><input value='17:30 - 19:30 thursday' onChange={(event)=>onInputChange(event)} className='checkbox' type='checkbox'/></td>
                        </tr>
                    </table>
                    <button style={{fontFamily:'Vazir-FD'}} className='timeConfirm' onClick={()=>onConfirmClick()}>تایید</button>
                </div>
        </div>
    )
}
export default TimeSelection