import React , {useState,useEffect} from 'react'
import './TeamSelection.scss'
import axios from 'axios'
import Loading from '../Loading/Loading'
const TeamSelection = props =>{
    const [leagues,setLeagues]=useState([])
    //const [currentLeague,setCurrentLeague]=useState({})
    const[LeagueTeams,setLeagueTeams]=useState()
    const [SelectedTeam,setSelectedTeam]=useState()
    const [SelectedTeams,setSelectedTeams]=useState([])
    const [teamName,setTeamName]=useState('')
    const [isLoading,setIsLoading]=useState(true)
    useEffect(()=>{
        //get league
        axios.get('https://amir7amiri.ir/pes/api/pesteams/get/all')
        .then(function (response) {
          // handle success
          const Leagues=response.data.data.teams.map((value)=>{
            return value
          })
          setLeagues([...leagues,...Leagues])
          setIsLoading(false)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })

    },[])

    const selectedLeague=(event)=>{
        for(var i=0;i<leagues.length;i++){
            if(leagues[i].name===event.target.value)
            {
                //setCurrentLeague(leagues[i])
                setLeagueTeams(leagues[i].pes_teams)
            }
        }
    }

    const selectedTeam=(event)=>{
        for(var i=0;i<LeagueTeams.length;i++){
            if(LeagueTeams[i].name===event.target.value)
            {
                setSelectedTeam(LeagueTeams[i])
            }
        }
    }

    const onAddTeam=(event)=>{
        event.preventDefault()
        if(SelectedTeam!==undefined&&SelectedTeams.length<3)
        {
            setSelectedTeams([...SelectedTeams,SelectedTeam])
        }
        else if(SelectedTeams.length=3)
        {
            alert('شما سه تیم خود را انتخاب کرده اید')
        }
        else (alert('لطفا یک تیم را انتخاب کنید'))
    }

    const onTeamNameChange = (event)=>{
        setTeamName(event.target.value)
    }
    const onConfirmAndPayment=(event)=>{
        setIsLoading(true)
        event.preventDefault()
        if(SelectedTeams.length===3){
            axios.post('https://amir7amiri.ir/pes/api/team/register', {
            id: localStorage.getItem('teamid'),
            team_name: teamName,
            pes1team: SelectedTeams[0],
            pes2team: SelectedTeams[1],
            pes3team: SelectedTeams[2]
          })
          .then(function (response) {
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
            setIsLoading(false)
          });
        }
        else if(teamName==='') alert('لطفا نام تیم خود را وارد کنید')
        else alert("لطفا تیم های خود را انتخاب کنید")
    }
    return(
        <div>
            {isLoading&&(<Loading size={200}/>)}
            {!isLoading&&(
            <div className='teambgr'>
                <div id='all'>
                    <div className='league-wrapper'>
                        <div  className="wrap">
                        {leagues.map((league ,index)=>{
                                return(
                                    <div key={index}>
                                        <header>
                                        {
                                            leagues.map((league,index)=>{
                                                return(<label key={index} for={'Aslide-'+index+'-trigger'}>{league.name}</label>)
                                            })
                                        }
                                        </header>
                                        <input value={league.name} onChange={(event)=>selectedLeague(event)} id={'Aslide-'+index+'-trigger'} type="radio" name="LeagueSlides"/>
                                        <section style ={ { backgroundImage: "url("+league.logo_path+")"} }  className="slide">
                                              
                                        </section>
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
                    <div className='team-wrapper'>
                    <div  className="wrap">
                        {LeagueTeams&&LeagueTeams.map((team ,index)=>{
                                return(
                                    <div key={index}>
                                        <header>
                                        {
                                            LeagueTeams.map((team,index)=>{
                                                return(<label key={index} for={'slide-'+index+'-trigger'}>{team.name}</label>)
                                            })
                                        }
                                        </header>
                                        <input value={team.name} onChange={(event)=>selectedTeam(event)} id={'slide-'+index+'-trigger'} type="radio" name="TeamSlides"/>
                                        <section style ={ { backgroundImage: "url("+team.logo_path+")"} }  className="slide">
                               
                                        </section>
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
                    <div class="pa4 w-100">
                        <button className="grow" id='btn1' onClick={(event)=>{onAddTeam(event)}}>افزودن تیم</button>
                        <small class="f9 fw5 moon-gray db mb2">سه تیم اول انتخاب شده ثبت میشوند</small>
                    </div>
                    <div class="black-80">
                        <div class="measure w5">
                            <label for="name" class="f4 moon-gray b db mb1">نام تیم</label>
                            <input value={teamName} onChange={(event)=>onTeamNameChange(event)} id="name" class="inpt grow" type="text" aria-describedby="name-desc"/>
                            <small id="name-desc" class="f8 fw7 moon-gray db mb2">نام تیم شما در مسابقات</small>
                        </div>
                    </div>
                    <div class="pa4 black-80 w-100">
                        <button className="grow" id='btn1' onClick={(event)=>{onConfirmAndPayment(event)}}>تایید و پرداخت</button>
                    </div>
                </div>
            </div>)}
        </div>
    )
}
export default TeamSelection