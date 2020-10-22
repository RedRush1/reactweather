import React from "react";

import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer,
} from 'recharts';

import {GraphContainer} from "../Graph/styled";
import {useSelector} from "react-redux";
import {AppStore} from "../../store/appStore";





const Graph: React.FC = () => {

   var data:object[]=[]


    const { weather} = useSelector((store: AppStore) => ({

        weather: store.weather,

    }));
    for (let extendedWeatherDatum of weather.extendedWeatherData) {

        data.push({name: extendedWeatherDatum.day, Temperature: (extendedWeatherDatum.temp.temp_min+extendedWeatherDatum.temp.temp_max)/2, Wind: weather.weatherData.wind.speed, Humidity: weather.weatherData.main.humidity});
    }





    const defaultData = [
        {
            name: 'Monday', Temperature: 25, Wind: 6, Humidity: 5,
        },
        {
            name: 'Tuesday', Temperature: 22, Wind: 11, Humidity: 17,
        },
        {
            name: 'Wednesday', Temperature: 23, Wind: 5, Humidity: 68,
        },
        {
            name: 'Thursday', Temperature: 18, Wind: 5, Humidity: 31,
        },
        {
            name: 'Friday', Temperature: 24, Wind: 5, Humidity: 22,
        },
        {
            name: 'Saturday', Temperature: 28, Wind: 3, Humidity: 53,
        },
        {
            name: 'Sunday', Temperature: 26, Wind: 6, Humidity: 8,
        },
    ];


    if (data.length===0)
    {
        console.log('Hollow');
        data=defaultData;

    }

    return (
        <GraphContainer>
            <ResponsiveContainer width='100%' aspect={4.0/2.0}>
    <LineChart  data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Temperature" stroke="#FA3409"  />
        <Line type="monotone" dataKey="Wind" stroke="#82ca9d" />
        <Line type="monotone" dataKey="Humidity" stroke="#8884d8" />
    </LineChart>
            </ResponsiveContainer>
        </GraphContainer>

    );

};




export default Graph ;