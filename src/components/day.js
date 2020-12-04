import React from 'react'
import { Link } from "gatsby"

export default function Day(props) {

    let url = props.url

    let activeClass = props.url != null ? 'active' : 'inactive'

    console.log(props)

    return(
    <div>
        <Link to={`/solution/`}
            state={{day: url}}>
            <div className={activeClass + ' day'} >
                <h1 style={{textAlign: 'center'}}>{props.dayNumber}</h1>
            </div>
        </Link>

    </div>
    )
}