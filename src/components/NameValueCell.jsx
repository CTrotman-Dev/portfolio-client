import React, {useState} from "react";

import NameValueList from "./NameValueList";
import NameValueDetails from "./NameValueDetails";

const NameValueCell = (props) => {
    const [isVisible, setIsVisible] = useState(false);

    function handleClick(){
        setIsVisible(!isVisible);
    }

    
    return (

        <div className="row row-container">
            <h2>
                {props.company}
            </h2>
            <div className="col-6 left-col">

                <h3>
                    {props.role}
                </h3>
                <p>
                    {props.length}
                </p>

            </div>
            <div className="col-6 right-col details-section" onClick={handleClick}>
           {isVisible ? 
                <ul className="two-col">
                    {props.languages.map((x, i) =>
                    <NameValueList key={x + i} title={x} content={x} />
                    )}
                </ul> :
                <p className="">
                    See languages...
                </p>
           }
            </div>
            <div className="row">

                {props.info.map((x, i) =>
                    <NameValueDetails key={x[0] + i} title={x[0]} content={x[1]} />
                )}

            </div>
        </div>
    );
}

export default NameValueCell;