import React from 'react';
import ShowInfo from '../ShowInfo/ShowInfo';
import * as actionCreators from '../../actions';
import {connect} from 'react-redux';

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

    // fetchApi(value) {
    //     console.log('I\'m active!!!');
    //     return(dispatch) => {
    //         return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=f10b637ca08b184f47102d9f1de2c344`)
    //             .then((response) => {
    //                 dispatch(loadData(response.data))
    //             })
    //     }
    // }

    // // из стейта название города и ключ апи
    // submitCity = (e) => {
    //     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.inputValue}&appid=${this.state.apiKey}`)
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             this.setState({
    //                 // тут же в стейт информация о названии города, погоде и температуре
    //                 cityName: data.name,
    //                 countryName: data.sys.country,
    //                 cityDesc: data['weather'][0]['description'],
    //                 cityTemp: Math.round(data.main.temp - 273.15),
    //                 inputValue: '',
    //             });
    //         })

    //         .catch(error => {
    //             // при ошибке все поля остаются пустыми
    //             console.log(error);
    //             this.setState( {
    //                 cityName: 'Incorrect city :( ',
    //                 countryName: '',
    //                 cityDesc: 'Type another one',
    //                 cityTemp: '',
    //                 inputValue: '',
    //             })
    //         })
    // }
    render() {
        return (
            <div>
                <div className="input">
                    <input
                        type="text"
                        className="input-value"
                        placeholder="City name..."
                        defaultValue={this.state.inputValue}
                        onChange={this.props.typeCity} />

                    <input
                        type="submit"
                        className="button"
                        value="Submit"
                        onClick={this.props.fetchApi} />
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
    return state;
}

export default connect (mapStateToProps, actionCreators)(TypeInfo);