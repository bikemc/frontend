import React, { useEffect } from "react";
import {Button, Carousel} from "react-bootstrap";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import logo from "../views/logo.png";


const MainPageCarouselComponent = (props) => {

    const history = useHistory();

    useEffect(() => {
    }, [] );

    const onClickGoToGarage = () => {
        history.push("/garage/"+props.garageId);
    }


    return (
        <Carousel.Item
            className="d-inline-flex align-items-center justify-content-between border"
            style={{ borderColor: "#85A582"}}
        >
            <div className="content flex-fill text-center">
                <div className="item-name" type="name" required style={{ fontSize: 18, fontWeight:"bold" }}>
                    {props.name}
                </div>
                <div
                    className="item-tags text-black-50"
                    type="name"
                >
                    {props.tags.map( tag => {return "#"+tag+" "})}
                </div>
                <div className="img-container d-flex align-items-center"
                     style={{width: 200, height: 200, textAlign: "center",}}
                />
                <div className="garage-name">At {props.username}'s Garage</div>
                <div className="garage-name">Ends on {props.endDate}</div>
                <div className="item-price" style={{ fontWeight:"bold" }}>€{props.price}</div>
                <Button style={{marginTop: 10}} onClick={onClickGoToGarage}>Select</Button>
            </div>
        </Carousel.Item>
    );
};

MainPageCarouselComponent.propTypes = {
    item: PropTypes.object,
};

export default MainPageCarouselComponent;