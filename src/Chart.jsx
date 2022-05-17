import React from 'react';
import { Bar } from 'react-chartjs-2';

function Chart() {
  return (
    <div className="bg-blue-500 h-screen w-screen">
        <Bar 
            data={{
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [
                    {
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3], 
                    }
                ]
            }}
            width={400}
            height={600}
            options={{
                maintainAspectRatio: false,
            }}
        />
        <h1>hq</h1>
    </div>
  )
}

export default Chart;