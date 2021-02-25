import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';



export default function MyLineChart({ data })  {
	const keys = Object.keys(data[0])
    return (
      	<LineChart
			width={500}
			height={300}
			data={data}
			margin={{
			top: 5, right: 30, left: 20, bottom: 5,
			}}
			>
			<CartesianGrid strokeDasharray="3 3" />
			<XAxis dataKey="date" />
			<YAxis />
			{/* <Tooltip /> */}
			<Legend />     
			<Line type="monotone" dataKey={ keys[1] } stroke="green" activeDot={{ r: 8 }}/>
			<Line type="monotone" dataKey={ keys[2] } stroke="darkblue" activeDot={{ r: 8 }} />
			<Line type="monotone" dataKey={ keys[3] } stroke="orange" activeDot={{ r: 8 }} />
			<Line type="monotone" dataKey={ keys[4] } stroke="purple" activeDot={{ r: 8 }} />

	</LineChart>
    );
}
