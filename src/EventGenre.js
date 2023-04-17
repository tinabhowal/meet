// import React, { useEffect, useState, useCallback } from 'react';
// import { PieChart, Pie, ResponsiveContainer } from 'recharts';


// const EventGenre = ({ events }) => {
//     const [data, setData] = useState([]);

//     //const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

    

//     const getData = useCallback(() => {
//         const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
//         const data = genres.map((genre)=>{
//             const value = events.filter((event) => event.summary.split('').includes(genre)).length
            
//             return { name: genre, value };
//         });
//         return data.filter((events) => events.value !== 0);
//     }, [events]);
    
//     useEffect(() => {
//         setData(getData());
//     }, [getData]);
    
    
//     return (
//         <ResponsiveContainer height={400}>
//             <PieChart width={400} height={400}>
//              <Pie
//                 data={data}
//                 cx={200}
//                 cy={200}
//                 labelLine={false}
//                 label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
//                 outerRadius={80}
//                 dataKey="value"
//                 fill="#8884d8"
//              >
               
//              </Pie>
//             </PieChart>
//         </ResponsiveContainer>
//     );
// }

// export default EventGenre;

import React, { useEffect, useState, useCallback } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const EventGenre = ({ events }) => {
    const [data, setData] = useState([]);
    // const colors = ["#FF1493", "#00FFFF", "#7FFF00", "#FF8C00", "#FFFF00"];

    // useEffect(() => {
    //     const getData = () => {
    //         const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
            
    //         const data = genres.map((genre) => {
    //             const value = events.filter(event => event.summary.split(' ').includes(genre)).length
    //             return { name: genre, value };
    //         })
            
    //         return data;
    //     };
    //     setData(() => getData());
    // }, [events]);

    const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

    

    const getData = useCallback(() => {
        const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
        const data = genres.map((genre)=>{
            const value = events.filter((event) => event.summary.split('').includes(genre)).length
            
            return { name: genre, value };
        });
        return data.filter((events) => events.value !== 0);
    }, [events]);
    
    useEffect(() => {
        setData(getData());
    }, [getData]);
    

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