import React from 'react';
import ShowInfo from '../ShowInfo/ShowInfo';
import * as actionCreators from '../../redux/actions';
import {connect} from 'react-redux';
import { loadDataSuccessReducer } from '../../redux/reducers';

class TypeInfo extends React.Component {
    constructor(props) {
        super();
        this.state = {
            inputValue: '',
        }
    }

    // значение из инпута в стейт
    typeCity = (e) => {
        this.setState({ inputValue: e.target.value });
    }

    render() {
        // console.log(this.props);
        return (
            <div>
                <div className="input">
                    <input
                        type="text"
                        className="input-value"
                        placeholder="City name..."
                        defaultValue={this.state.inputValue}
                        onChange={this.typeCity} />

                    <input
                        type="submit"
                        className="button"
                        defaultValue="Submit"
                        onClick={() => {this.props.fetchApi(this.state.inputValue)}} />
                </div>
                <div>
                    <ShowInfo
                        // передача пропсов для отображения информации
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
    return {
        loadDataSuccessReducer: loadDataSuccessReducer
    }
}

export default connect (mapStateToProps, actionCreators)(TypeInfo);