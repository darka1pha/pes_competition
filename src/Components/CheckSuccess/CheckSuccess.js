import React from 'react'
import './CheckSuccess.scss'

const CheckSuccess = props =>{
    return(
        <div class="body">
            <span class="trigger scale"></span>
            <a href="#" class="button"><span class="checkmark"></span>
            </a>
            <h1 class="text__success">پرداخت با موفقیت انجام شد</h1>
        </div>

    )
}
export default CheckSuccess