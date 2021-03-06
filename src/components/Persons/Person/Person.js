import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElelmentRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        // this.inputElelment.focus();
        this.inputElelmentRef.current.focus();
        console.log(this.context.authenticated);
    }

    render() {
        console.log('[Person.js] rendering...')
        return (
            <Aux>        
                {this.context.authenticated ? <p>Authenticated</p> : <p>Please Log in</p>}     
                <p key="i1" onClick={this.props.click}>
                    I'm a {this.props.name} and I am {this.props.age} years old!
                </p>
                <p key="i2">{this.props.children}</p>
                <input key="i3"
                    // ref={(inputEl) => { this.inputElelment = inputEl }}
                    ref={this.inputElelmentRef}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name} />
            </Aux>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);