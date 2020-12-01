import React from 'react'
import { Link } from "gatsby"

export default function Day(props) {

    let activeClass = props.url != null ? 'active' : 'inactive'

    return(
    <div>
        <Link to={`${props.url}`}>
            <div className={activeClass + ' day'} >
                <h1 style={{textAlign: 'center'}}>{props.dayNumber}</h1>
            </div>
        </Link>

    </div>
    )
}