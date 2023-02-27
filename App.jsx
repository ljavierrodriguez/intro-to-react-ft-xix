import React, { Fragment } from 'react';
//import ReactDOM from 'react-dom/client'; // v18
import ReactDOM from 'react-dom'; // v17
import Heading from './Heading';

// Function Component
function Main() {
    return (
        <Fragment>
            <Heading id={"heading1"} className={"my-2"} style={{ color: 'blue' }} texto={"Hola Mundo 1"} /> {/* <h1>Hola Mundo</h1>*/}
            <Heading id={"heading2"} className={"my-2"} style={{ color: 'brown' }} texto={"Hola Mundo 2"} /> {/* <h1>Hola Mundo</h1>*/}
            <Heading id={"heading3"} className={"my-2"} style={{ color: 'red' }} texto={"Hola Mundo 3"} /> {/* <h1>Hola Mundo</h1>*/}
            <Heading id={"heading4"} className={"my-2"} style={{ color: 'green' }} texto={"Hola Mundo 4"} /> {/* <h1>Hola Mundo</h1>*/}
        </Fragment>
    )
}

// Class Component
class Main extends React.Component {
    render() {
        return (
            <Fragment>
                <Heading id={"heading1"} className={"my-2"} style={{ color: 'blue' }} texto={"Hola Mundo 1"} /> {/* <h1>Hola Mundo</h1>*/}
                <Heading id={"heading2"} className={"my-2"} style={{ color: 'brown' }} texto={"Hola Mundo 2"} /> {/* <h1>Hola Mundo</h1>*/}
                <Heading id={"heading3"} className={"my-2"} style={{ color: 'red' }} texto={"Hola Mundo 3"} /> {/* <h1>Hola Mundo</h1>*/}
                <Heading id={"heading4"} className={"my-2"} style={{ color: 'green' }} texto={"Hola Mundo 4"} /> {/* <h1>Hola Mundo</h1>*/}
            </Fragment>
        )
    }
}