import { Link } from "react-router-dom"
import "./EventCards.css"


const EventC = (props) => {
    return (
        <div>
            <div className="box">
                 <div className="content">
                    <h2 className="font-bold">{props.title}</h2>
                    <p>{props.description}</p>
                    <Link to={props.path}>Read More</Link>
                </div>
            </div>
        </div>
    )
}

export default EventC