import React from "react";
import Avatar from "./Avatar";
import CardDetails from "./CardDetails";

function Card(props) {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="card">
                <div className="top">
                    <h2 className="name">
                        {props.name}
                    </h2>
                </div>
                <div className="bottom">
                    <CardDetails detailInfo={props.desc} />
                </div>
                <Avatar img={props.img} />
            </div>
        </div>
    );
}

export default Card;