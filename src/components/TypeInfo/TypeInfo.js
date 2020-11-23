import React from 'react';
import ShowInfo from '../ShowInfo/ShowInfo';
import * as actionCreators from '../../redux/fetchApi';
import {connect} from 'react-redux';

class TypeInfo extends React.Component {
    constructor(props) {
        super();
        this.state = {
            inputValue: '',
        }
    }

    // pass the input value to state
    typeCity = (e) => {
        this.setState({ inputValue: e.target.value });
    }

    render() {
        return (
            <div>
                <div className="input">
                    <input
                        type="text"
                        className="input-value"
                        placeholder="City name..."
                        value={this.state.inputValue}
                        onChange={this.typeCity} />

                    <button
                        type="submit"
                        className="button"
                        // here the value passes from state to a function as an argument
                        onClick={() => {this.props.fetchApi(this.state.inputValue)}}>Submit</button>
                </div>
                <div>
                    <ShowInfo
                        // pass props to show the data
                        cityName={this.props.cityName}
                        countryName={this.props.countryName}
                        cityTemp={this.props.cityTemp}
                        cityDesc={this.props.cityDesc}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect (mapStateToProps, actionCreators)(TypeInfo);