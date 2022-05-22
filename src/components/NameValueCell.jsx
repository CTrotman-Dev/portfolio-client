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
                <ul>
                    {props.languages.map((x, i) =>
                        <li key={x + i}>
                            {x}
                        </li>
                    )}
                </ul>

            </div>
            <div className="col-6 right-col">
                <p>
                    {props.length}
                </p>

            </div>
        </div>
    );
}

export default NameValueCell;