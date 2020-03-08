import React, { useState, useEffect } from 'react'
import './TeamSelection.scss'
import axios from 'axios'
import Loading from '../Loading/Loading'
import $ from 'jquery'
const TeamSelection = props => {
    const [leagues, setLeagues] = useState([])
    //const [currentLeague,setCurrentLeague]=useState({})
    const [LeagueTeams, setLeagueTeams] = useState()
    const [SelectedTeam, setSelectedTeam] = useState()
    const [SelectedTeams, setSelectedTeams] = useState([])
    const [teamName, setTeamName] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        //get league
        axios.get('https://amir7amiri.ir/pes/api/pesteams/get/all')
            .then(function (response) {
                // handle success
                const Leagues = response.data.data.teams.map((value) => {
                    return value
                })
                setLeagues([...leagues, ...Leagues])
                setIsLoading(false)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }, [])

    const selectedLeague = (event) => {
        for (var i = 0; i < leagues.length; i++) {
            if (leagues[i].name === event.target.value) {
                //setCurrentLeague(leagues[i])
                setLeagueTeams(leagues[i].pes_teams)
                setSelectedTeam(leagues[i].pes_teams[0])
            }
        }
    }

    const selectedTeam = (event) => {
        for (var i = 0; i < LeagueTeams.length; i++) {
            if (LeagueTeams[i].name === event.target.value) {
                setSelectedTeam(LeagueTeams[i])
            }
        }
    }

    const onAddTeam = (event) => {
        event.preventDefault()
        if (SelectedTeam !== undefined && SelectedTeams.length < 3) {
            var flag = false
            if (SelectedTeams.length >= 1) {
                SelectedTeams.map((value) => {
                    if (SelectedTeam.name === value.name) {
                        flag = true
                    }
                })
                if (flag === true)
                 alert('این تیم قبلا انتخاب شده است')
                else {
                    setSelectedTeams([...SelectedTeams, SelectedTeam])
                }
            }
            else setSelectedTeams([...SelectedTeams, SelectedTeam])
            if (SelectedTeams.length === 2) {
                var $btn = $('.confBtnDeactive')
                $btn.removeClass('confBtnDeactive')
                $btn.addClass('confBtnActive')
                $btn.prop('disabled', false)
                $('.inpt').focus()
            }
        }
        else if (SelectedTeams.length === 3) {
            alert('شما سه تیم خود را انتخاب کرده اید')
        }
        else (alert('لطفا یک تیم را انتخاب کنید'))
    }

    const onTeamNameChange = (event) => {
        setTeamName(event.target.value)
    }
    const onConfirmAndPayment = (event) => {
        event.preventDefault()
        if (SelectedTeams.length === 3 & teamName !== '') {
            axios.post('https://amir7amiri.ir/pes/api/team/register', {
                id: localStorage.getItem('teamid'),
                team_name: teamName,
                pes1team: SelectedTeams[0].id,
                pes2team: SelectedTeams[1].id,
                pes3team: SelectedTeams[2].id
            })
                .then(function (response) {
                    console.log(JSON.stringify(response))
                    if(response.data.status==='success')
                    {
                    setIsLoading(true)
                    console.log(response);
                    window.location.assign("https://amir7amiri.ir/pes/purchase?team_id=" + localStorage.getItem('teamid'))
                    }
                })
                .catch(function (error) {
                    console.log(error);
                    setIsLoading(false)
                });
        }
        else if (teamName === '') alert('لطفا نام تیم خود را وارد کنید')
    else alert("لطفا تیم های خود را انتخاب کنید")
    }

    return (
        <div>
            {isLoading && (<Loading size={200} />)}
            {!isLoading && (
                <div className='teambgr'>
                    <div id='all'>
                        <div className='league-wrapper'>
                            <div className="wrap">
                                {leagues.map((league, index) => {
                                    return (
                                        <div key={index}>
                                            <header >
                                                {
                                                    leagues.map((league, index) => {
                                                        return (<label style={{ fontFamily: 'Vazir-FD' }} key={index} for={'Aslide-' + index + '-trigger'}>{league.name}</label>)
                                                    })
                                                }
                                            </header>
                                            <input value={league.name} onChange={(event) => selectedLeague(event)} id={'Aslide-' + index + '-trigger'} type="radio" hidden name="LeagueSlides" />
                                            <section style={{ backgroundImage: "url(" + league.logo_path + ")" }} className="lslide"/>
                                        </div>
                                    )
                                })
                                }
                            </div>
                        </div>
                        <div className='team-wrapper'>
                            <div className="wrap">
                                {LeagueTeams && LeagueTeams.map((team, index) => {
                                    return (
                                        <div key={index}>
                                            <header>
                                                {
                                                    LeagueTeams.map((team, index) => {
                                                        return (<label style={{ fontFamily: 'Vazir-FD' }} key={index} for={'slide-' + index + '-trigger'}>{team.name}</label>)
                                                    })
                                                }
                                            </header>
                                            <input style={{ fontFamily: 'Vazir-FD' }} value={team.name} onChange={(event) => selectedTeam(event)} id={'slide-' + index + '-trigger'} type="radio" hidden name="TeamSlides" />
                                            <section style={{ backgroundImage: "url(" + team.logo_path + ")" }} className="slide"/>
                                        </div>
                                    )
                                })
                                }
                            </div>
                        </div>
                        <div class="pa4 w-100">
                            <button style={{ fontFamily: 'Vazir-FD' }} className="grow" id='btn1' onClick={(event) => { onAddTeam(event) }}>افزودن تیم</button>
                            <text style={{ fontFamily: 'Vazir-FD' }} className='entkhab'>سه تیم اول انتخاب شده ثبت میشوند</text>
                        </div>
                        <div className='Steams'>
                            <text style={{ fontFamily: 'Vazir-FD' }}>تیم های انتخاب شده</text>
                            {
                                SelectedTeams.map((value, index) => {
                                    return (
                                        <text style={{ fontFamily: 'Vazir-FD' }} key={index}>{value.name}</text>
                                    )
                                })
                            }
                        </div>
                        <div class="black-80">
                            <div class="measure w5">
                                <label style={{ fontFamily: 'Vazir-FD' }} for="name" class="f4 moon-gray b db mb1">نام تیم</label>
                                <input style={{ fontFamily: 'Vazir-FD' }} value={teamName} onChange={(event) => onTeamNameChange(event)} id="name" class="inpt grow" type="text" aria-describedby="name-desc" />
                                <small style={{ fontFamily: 'Vazir-FD' }} id="name-desc" class="f8 fw7 moon-gray db mb2">نام تیم شما در مسابقات</small>
                            </div>
                        </div>
                        <div>
                            <form class="pa4 black-80 w-100" style={{ backgroundColor: 'rgba(0,0,0,0)' }}>
                                <button style={{ fontFamily: 'Vazir-FD' }} type='button' className='confBtnDeactive' onClick={(event) => { onConfirmAndPayment(event) }}>تایید و پرداخت</button>
                            </form>
                        </div>
                    </div>
                </div>)}
        </div>
    )
}
export default TeamSelection