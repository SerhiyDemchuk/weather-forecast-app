import React from 'react';
import { connect } from 'react-redux';
import ShowInfo from '../ShowInfo/ShowInfo';
import * as fetchApi from '../../redux/fetchApi';
import Barchart from '../Charts/Charts';

class TypeInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
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
                        onClick={() => { this.props.fetchApi(this.state.inputValue); }}>OK</button>
                </div>
                <div className="show-info">
                    <ShowInfo
                        // pass props to show the data
                        cityName={this.props.cityName}
                        countryName={this.props.countryName}
                        cityTemp={this.props.cityTemp}
                        cityDesc={this.props.cityDesc}
                    />
                    <Barchart
                        cityTempAboveZero={this.props.cityTempAboveZero}
                        cityTempBelowZero={this.props.cityTempBelowZero}
                        cityName={this.props.cityName}
                        showEl={this.props.hideEl}
                    />
                </div>
            </div>
      );
    }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, fetchApi)(TypeInfo);
