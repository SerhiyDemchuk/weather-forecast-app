import React from 'react';

class ShowInfo extends React.Component {
    render() {

        return (
            // пропсами название города
            <div className="display">
                <div className="display-name">
                    <h1 className="name">{this.props.cityName} {this.props.countryName}</h1>
                </div>
                <div className="display-desc">
                    <p className="desc">{this.props.cityDesc}</p>
                </div>
                <div className="display-temp">
                    <p className="temp">{this.props.cityTemp}</p>
                </div>
            </div>
        )
    }
}

export default ShowInfo;