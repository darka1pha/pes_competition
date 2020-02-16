import React from 'react'
import './CheckFailed.scss'

const CheckFailed=props=>{
    return(
        <div id='ak'>
            <div id='boddy'>         
                <svg width="200" height="200">
                    <g class="retry-circle">
                    <circle r="59" cx="100" cy="100" fill="none" stroke="#DC001B" stroke-width="5" />
                    <g class="cross">
                        <rect class="cross1" x="98" y="68" fill="#DC001B" width="5" height="65" rx="3" ry="3" />
                        <rect class="cross2" x="98" y="68" fill="#DC001B" width="5" height="65" rx="3" ry="3" />
                    </g>
                    </g>
                </svg>
                <text style={{fontFamily:'Vazir-FD'}} id='checkout'>پرداخت ناموفق بود</text>
            </div>
        </div>
    )
}
export default CheckFailed