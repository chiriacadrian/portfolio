import "shards-ui/dist/css/shards.min.css";
import {
    Card,
    CardTitle,
    CardImg,
    CardBody,
    CardFooter,
    Button,
    Badge
} from "shards-react";

import React, { Component } from 'react'

// import Code from '../images/icons/code_file.png';
// <img src={Code} style={{width:"20px"}} />

export class ProjectCard extends Component {
    render() {
        return (
            <div style={{ margin: "20px" }} className="hvr-grow">
                <Card style={{ maxWidth: "300px" }}>
                    <CardImg src={this.props.image} />
                    <CardBody>
                        <CardTitle>{this.props.title}</CardTitle>
                        <p>{this.props.description}</p>
                        <a href={this.props.viewCodeUrl} target="_blank" rel="noopener noreferrer">
                            <Button style={{ margin: "5px" }} theme="dark" disabled={this.props.codeDisabled}>View Code</Button>
                        </a>
                        <a href={this.props.seeLiveUrl} target="_blank" rel="noopener noreferrer">
                            <Button style={{ margin: "5px" }} theme="dark" disabled={this.props.liveDisabled}>See Live</Button>
                        </a>
                    </CardBody>
                    <CardFooter style={{display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: "wrap"}}>
                        <TechnologyBadges technologies={this.props.technologies} />
                    </CardFooter>
                </Card>
            </div>
        )
    }
}

class TechnologyBadges extends Component {
    render() {
        return (
            this.props.technologies.map((technology, i) => <Badge key={i} pill theme="secondary" style={{ margin: "5px" }}>{technology}</Badge>)
        );
    }
}
