import React, { Component } from 'react';
import GotService from '../../services/gotService';
import Loader from '../loader/loader';
import './randomChar.css';

export default class RandomChar extends Component {

    constructor() {
        super();
        this.updateCharacter();
    }

    gotService = new GotService();
    state = {
        char: {},
        loading: true
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false
        })
    }

    updateCharacter() {
        const id = Math.floor(Math.random() * 1000) + 1;
        this.gotService.getCharacter(id)
            .then(this.onCharLoaded);
    }

    render() {

        const { char, loading } = this.state;

        return (
            <div className="random-block rounded">
                {loading ? <Loader /> : <View char={char} />}
            </div>
        );
    }
}

const View = ({ char }) => {

    const { name, gender, born, died, culture, aliases } = char
    return (
        <>
            <h4>Random Character: {name}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Aliases </span>
                    <span>{aliases}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Gender </span>
                    <span>{gender}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Born </span>
                    <span>{born}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Died </span>
                    <span>{died}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Culture </span>
                    <span>{culture}</span>
                </li>
            </ul>
        </>
    )
}

