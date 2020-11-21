import React from 'react';
import ShowInfo from '../ShowInfo/ShowInfo';

class TypeInfo extends React.Component {
    constructor(props) {
        super();
        this.state = {
            inputValue: '',
            apiKey: 'f10b637ca08b184f47102d9f1de2c344',
            cityName: '',
            cityDesc: '',
            cityTemp: ''
        }
    }
    // значение из инпута в стейт
    typeCity = (e) => {
        this.setState({ inputValue: e.target.value });
    }
    // из стейта название города и ключ апи
    submitCity = (e) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.inputValue}&appid=${this.state.apiKey}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    // тут же в стейт информация о названии города, погоде и температуре
                    cityTemp: Math.round(data.main.temp - 273.15),
                    cityName: data.name,
                    cityDesc: data.weather[0].description,
                })
            })
            .catch(error => {
                console.log(error);
                console.log('Wrong city')
            })
    }
    render() {
        return (
            <div>
                <div className="input">
                    <input
                        type="text"
                        className="input-value"
                        placeholder="City name..."
                        value={this.inputValue}
                        onChange={this.typeCity} />
                </div>

                <div className="input">
                    <input
                        type="submit"
                        className="button"
                        value="Submit"
                        onClick={this.submitCity} />
                </div>
                <ShowInfo
                // передача пропсов для отображения информации
                    cityName={this.state.cityName}
                    cityTemp={this.state.cityTemp}
                    cityDesc={this.state.cityDesc}
                />
            </div>
        )
    }
}

export default TypeInfo;