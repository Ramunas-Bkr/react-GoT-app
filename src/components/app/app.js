import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import './app.css';
import ErrorMessage from '../errorMessage/ErrorMessage';
import CharacterPage from '../CharacterPage/CharacterPage';
export default class App extends Component {

    state = {
        visibleRandomChar: true,
        error: false
    }

    componentDidCatch() {
        console.log('Error');
        this.setState({
            error: true
        })
    }

    toogleRandomChar = () => {
        this.setState((state) => {
            return {
                visibleRandomChar: !state.visibleRandomChar
            }
        })
    }

    render() {

        if (this.state.error) {
            return <ErrorMessage />
        }

        return (
            <>
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{ size: 5, offset: 0 }}>
                            {this.state.visibleRandomChar ? <RandomChar /> : null}
                            <button
                                className="toogleCharButton"
                                onClick={this.toogleRandomChar}>
                                Toogle random character
                        </button>
                        </Col>
                    </Row>
                    <CharacterPage />
                    
                </Container>
            </>
        )
    }
}
