import React from 'react';

// Function Component
function Heading(props) { // props = { id: value, className: value, style: value, texto: value }
    return (
        <>
            <h1 id={props.id} className={props.className} style={props.style}>{props.texto}</h1>
        </>
    )
}

// Class Component
class Heading extends React.Component {
    render() {
        return (
            <>
                <h1 id={this.props.id} className={this.props.className} style={this.props.style}>{this.props.texto}</h1>
                {this.saludo()}
            </>
        )
    }

    saludo(){
        console.log("Hola");
    }

    saludo2(){
        console.log("Hola");
    }
}

export default Heading;