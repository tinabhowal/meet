

import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const EventGenre = ({ events }) => {
    const [data, setData] = useState([]);
    const colors = ["#236691", "FFE589", "#4D8519", "#F9803C", "#E87E7C"];

    useEffect(() => {
        const getData = () => {
            const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
           
            const data = genres.map((genre) => {
                const value = events.filter(event => event.summary.split(' ').includes(genre)).length
                return { name: genre, value };
            })
          
            return data;
        };
        setData(() => getData());
    }, [events]);

    return (
        <ResponsiveContainer height={400} >
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ percent }) => `${(percent * 100).toFixed(0)}%`}>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index]} />
                    ))
                    }
                </Pie>
                <Legend verticalAlign="bottom" height={50} />
            </PieChart>
        </ResponsiveContainer>
    );
}

export default EventGenre;