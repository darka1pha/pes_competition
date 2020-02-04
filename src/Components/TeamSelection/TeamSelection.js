import React , {useState,useEffect} from 'react'
import './TeamSelection.scss'
import axios from 'axios'
const TeamSelection = props =>{
    const [leagues,setLeagues]=useState([])
    const [currentLeague,setCurrentLeague]=useState()
    useEffect(()=>{
        //get league
        axios.get('https://amir7amiri.ir/pes/api/pesteams/get/all')
        .then(function (response) {
          // handle success
          const Leagues=response.data.data.teams.map((value)=>{
            return value
          })
          setLeagues([...leagues,Leagues])
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    },[])

    function selectedLeague(event){
        for(var i=0;i<leagues.length;i++){
            if(leagues[i].name===event.target.value)
            {
                setCurrentLeague(leagues[i])
            }
        }
    }

    return(
        <div id='all'>
            <div className='wrapper'>
                <div  className="wrap">
                {leagues.map((league ,index)=>{
                        return(
                            <div key={index}>
                                <header>
                                    {leagues.map((league,index)=>{
                                        return(<label key={index} for={'League-slide-'+index+'-trigger'}>{league.name}</label>)
                                    })}
                                </header>
                                <input value={league.id} onChange={(event)=>selectedLeague(event)} id={'League-slide-'+index+'-trigger'} type="radio" name="slides"/>
                                <section style ={ { backgroundImage: "url("+league.logo_path+")" } }  className="slide slide-one">
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
                {currentLeague.pes_teams.map((team ,index)=>{
                        return(
                            <div key={index}>
                                <header>
                                    {currentLeague.pes_teams.map((team,index)=>{
                                        return(<label key={index} for={'slide-'+index+'-trigger'}>{team.name}</label>)
                                    })}
                                </header>
                                <input id={'slide-'+index+'-trigger'} type="radio" name="slides" checked/>
                                <section style ={ { backgroundImage: "url("+team.imageUrl+")"} } className="slide slide-one">
                                    <h1 id='hdr'>{team.name}</h1>
                                </section>
                            </div>
                        )
                    })
                }
                </div>
            </div>
            <button id='btn'>تایید</button>
        </div>
    )
}
export default TeamSelection