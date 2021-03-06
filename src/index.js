import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';




class App extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { lat: null, errMessage: '' };
    // }
    //babel allows to use bottom code
    state = { lat: null, errMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errMessage: err.message })
        );
    }

    renderContent() {
        if (this.state.errMessage && !this.state.lat) {
            return <div>Error: {this.state.errMessage} </div>
        }

        if (!this.state.errMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />

        }

        return <Spinner message="Accept location request" />
    }

    render() {
        return (
            <div className='border red'>
                {this.renderContent()}
            </div>
        );

    }
}



ReactDOM.render(<App />, document.querySelector('#root'))