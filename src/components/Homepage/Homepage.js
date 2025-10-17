import React, { useState } from 'react';
import "./Homepage.css"
import { ScatterChart } from '@mui/x-charts/ScatterChart';
import { LineChart } from '@mui/x-charts/LineChart';

import {scatterPlot, lineChart} from "../../services/Mockdata"

export default function Homepage(){
    const [scatterPlotData, setScatterPlotData] = useState(scatterPlot)
    const [lineChartData, setLineChartData] = useState(lineChart)

    return (
        <div className='chart-container'>
            <div className='scatter-plot'>
                <ScatterChart
                series={[
                    {
                    label: 'Series A',
                    data: scatterPlotData.map((v) => ({ x: v.x1, y: v.y1, id: v.id })),
                    color:'#65CCD2'
                    },
                ]}
                />
            </div>
            <div className="line-chart">
                <LineChart
                    series={[
                        { curve: "linear", data: lineChartData, color:'#A887E5' },
                    ]}
                />
            </div>
        </div>
    )
}