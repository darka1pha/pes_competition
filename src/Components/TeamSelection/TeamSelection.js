import React , {useState,useEffect} from 'react'
import './TeamSelection.scss'
import axios from 'axios'
const TeamSelection = props =>{
    const [leagues,setLeagues]=useState([])
    const [currentLeague,setCurrentLeague]=useState({})
    const[LeagueTeams,setLeagueTeams]=useState()
    const [SelectedTeam,setSelectedTeam]=useState()
    const [SelectedTeams,setSelectedTeams]=useState([])

    useEffect(()=>{
        //get league
        axios.get('https://amir7amiri.ir/pes/api/pesteams/get/all')
        .then(function (response) {
          // handle success
          const Leagues=response.data.data.teams.map((value)=>{
            return value
          })
          setLeagues([...leagues,...Leagues])
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
                setCurrentLeague(leagues[i])
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
        if(SelectedTeam!==undefined)
        {
            setSelectedTeams([...SelectedTeams,SelectedTeam])
        }
        else (alert('Please select a Team'))
        
    }
    const onConfirmAndPayment=(event)=>{
        event.preventDefault()
        console.log(SelectedTeams)
        
    }
    return(
        <div id='all'>
            <div className='wrapper'>
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
                                <input value={league.name} onChange={(event)=>selectedLeague(event)} id={'Aslide-'+index+'-trigger'} type="radio" name="slides"/>
                                <section style ={ { backgroundImage: "url("+league.logo_path+")"} }  className="slide">
                                    <h1 id='hdr'>{league.name}</h1>   
                                </section>
                            </div>
                        )
                    })
                }
                </div>
            </div>
            <div className='wrapper'>
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
                                <input value={team.name} onChange={(event)=>selectedTeam(event)} id={'slide-'+index+'-trigger'} type="radio" name="slides"/>
                                <section style ={ { backgroundImage: "url("+team.logo_path+")"} }  className="slide">
                                    <h1 id='hdr'>{team.name}</h1>   
                                </section>
                            </div>
                        )
                    })
                }
                </div>
            </div>
            <form class="pa4 w-100">
                <button className="grow" id='btn1' onClick={(event)=>{onAddTeam(event)}}>افزودن تیم</button>
                <small class="f5 fw9 black-60 db mb2">سه تیم اول انخاب شده ثبت میشوند</small>
            </form>
            <form class="black-80">
                <div class="measure w5">
                    <label for="name" class="f3 b db mb2">نام تیم</label>
                    <input id="name" class="f3 input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"/>
                    <small id="name-desc" class="f5 fw9 black-60 db mb2">نام تیم شما در مسابقات</small>
                </div>
            </form>
            <form class="pa4 black-80 w-100">
                <button id='btn2' onClick={(event)=>{onConfirmAndPayment(event)}}>تایید و پرداخت</button>
            </form>
        </div>
    )
}
export default TeamSelection