import React from "react";

const NameValueCell = (props) => {
    console.log(props.languages);
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
            <div className="col-6 right-col">

                <ul className="two-col">
                    {props.languages.map((x, i) =>
                        <li key={x + i}>
                            {x}
                        </li>
                    )}
                </ul>
            </div>
            <div className="row">
                <p>
                    {props.info}
                </p>
            </div>
        </div>
    );
}

export default NameValueCell;