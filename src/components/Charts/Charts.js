import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
} from 'recharts';

export default class Barchart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/q68cz43w/';

  render() {
    return (
      <BarChart
        width={200}
        height={400}
        data={[{
            name: this.props.cityName, 
            uv: this.props.cityTempAboveZero, 
            pv: this.props.cityTempBelowZero
        }]}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <ReferenceLine y={0} stroke="#000" />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    );
  }
}
