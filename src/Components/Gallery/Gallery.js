import React from 'react'
import './Gallery.scss'
import NavBar from '../NavBar/NavBar'

const Gallery = props =>{
    return(
        <div className='galleryBgr'>
            <div style={{height:'100%' , width:'100%' ,backgroundColor:'rgba(0,0,0,0.6)' ,display:'flex' ,flexDirection:'column'}}>
                <NavBar/>
                <div className='gallery'>
                    <div class="Gwrap">
                        <header className='GHeader'>
                            <label for="Gslide-1-trigger">&nbsp;&nbsp;1&nbsp;&nbsp;</label>
                            <label for="Gslide-2-trigger">&nbsp;&nbsp;2&nbsp;&nbsp;</label>
                            <label for="Gslide-3-trigger">&nbsp;&nbsp;3&nbsp;&nbsp;</label>
                            <label for="Gslide-4-trigger">&nbsp;	&nbsp;4&nbsp; &nbsp;</label>
                            <label for="Gslide-5-trigger">&nbsp;&nbsp;5&nbsp;&nbsp;</label>
                            <label for="Gslide-6-trigger">&nbsp;&nbsp;6&nbsp;</label>
                            <label for="Gslide-7-trigger">&nbsp;&nbsp;7&nbsp;&nbsp;</label>
                        </header>
                        <input id="Gslide-1-trigger" type="radio" name="Gslides"/>
                        <section class="Gslide Gslide-one"/>
                            
                        <input id="Gslide-2-trigger" type="radio" name="Gslides"/>
                        <section class="Gslide Gslide-two"/>
                                       
                        <input id="Gslide-3-trigger" type="radio" name="Gslides"/>
                        <section class="Gslide Gslide-three"/>
                      
                        <input id="Gslide-4-trigger" type="radio" name="Gslides"/>
                        <section class="Gslide Gslide-four"/>
                            
                        <input id="Gslide-5-trigger" type="radio" name="Gslides"/>
                        <section class="Gslide Gslide-five"/>                            
                        
                        <input id="Gslide-6-trigger" type="radio" name="Gslides"/>
                        <section class="Gslide Gslide-six"/>                            
                        
                        <input id="Gslide-7-trigger" type="radio" name="Gslides"/>
                        <section class="Gslide Gslide-seven"/>
                            
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Gallery