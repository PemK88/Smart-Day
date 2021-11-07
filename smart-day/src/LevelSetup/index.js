import React from 'react'
import Bar from "./LevelSetupBar"
import { Container } from "react-bootstrap"
import Entertainment from "../images/entertainment.png"
import Physical from "../images/physical-activity.png"
import Sleep from "../images/sleep.png"
import Social from "../images/social.png"
import "./LevelSetup.css"


const LevelSetup = () => {
    return (
        <div>
            <h1 className="page-title">Level Setup</h1>

            <Container className="categories">
                <Bar
                    image={Entertainment}
                    tag="Productive"
                    title="Work"
                    numHours={3}
                />
                <Bar
                    image={Physical}
                    tag="Health"
                    title="Physical Activity"
                    numHours={2}
                />
                <Bar
                    image={Sleep}
                    tag="Health"
                    title="Sleep"
                    numHours={10}
                />
                <Bar
                    image={Social}
                    tag="Leisure"
                    title="Entertainment"
                    numHours={3}
                />
                <Bar
                    image={Social}
                    tag="Leisure"
                    title="Social"
                    numHours={3}
                />
            </Container>
        </div>
    )
}

export default LevelSetup
