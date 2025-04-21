// src/components/CalendarChart.jsx
import React, { useMemo } from 'react';
import { ResponsiveParallelCoordinates } from '@nivo/parallel-coordinates';
import { useData } from '../context/DataProvider';

const CalendarChart = () => {
  const { totalCO2Data, loading } = useData();

  const calendarData = useMemo(() => {
    console.log(totalCO2Data)
    if (!totalCO2Data || !totalCO2Data.data || !totalCO2Data.meta) return [];
    const formattedData = totalCO2Data.data
    .map(item => ({
      year: item["Year Built"],
      area: item["Area(ft�)"],
      electricity: item["Total (kWh)_Electricity"],
      eui: item["Annual EUI"],
      co2: item["Total (kkg CO2e)"]
    }))
    .filter(item => item.year !== undefined);
    console.log(formattedData);
    return formattedData;
  }, [totalCO2Data]);

  if (loading) return <div>Loading data...</div>;
  if (!calendarData.length) return <div>No data available</div>;

  console.log(calendarData)

  const testData = [
    {
      "temp": 3.040225457197552,
      "cost": 29604,
      "weight": 51,
      "volume": 5.353784804869571,
      "id": "A"
    },
    {
      "temp": 7.503707476382591,
      "cost": 19520,
      "weight": 156,
      "volume": 5.5814805072219675,
      "id": "B"
    },
    {
      "temp": 4.153712267396745,
      "cost": 3639,
      "weight": 217,
      "volume": 1.0384900914411632,
      "id": "C"
    },
    {
      "temp": 36.939571844178815,
      "cost": 11185,
      "weight": 230,
      "volume": 3.3745833146584983,
      "id": "D"
    },
    {
      "temp": 11.36639806334717,
      "cost": 23197,
      "weight": 287,
      "volume": 7.359644075464677,
      "id": "E"
    },
    {
      "temp": 0.976256335206557,
      "cost": 3068,
      "weight": 123,
      "volume": 6.568010070047368,
      "id": "F"
    },
    {
      "temp": 31.714825724541825,
      "cost": 3555,
      "weight": 210,
      "volume": 1.3553638916744066,
      "id": "G"
    },
    {
      "temp": 7.282544426070167,
      "cost": 11780,
      "weight": 133,
      "volume": 5.45987148740227,
      "id": "H"
    },
    {
      "temp": 14.929026683772825,
      "cost": 12801,
      "weight": 177,
      "volume": 0.7887953265740286,
      "id": "I"
    },
    {
      "temp": 26.843551593998967,
      "cost": 24355,
      "weight": 20,
      "volume": 3.9605366331399683,
      "id": "J"
    }
  ];

  return (
    <div style={{ height: '500px' }}>
      <ResponsiveParallelCoordinates
        data={calendarData}
        variables={[
          {
            id: 'year',
            label: 'Year Built',
            value: 'year',
            min: 'auto',
            max: 'auto',
            ticksPosition: 'before',
            legendPosition: 'start',
            legendOffset: 20
          },
          {
            id: 'area',
            label: 'Area (ft^2)',
            value: 'area',
            min: 'auto',
            max: 'auto',
            ticksPosition: 'before',
            legendPosition: 'start',
            legendOffset: 20
          },
          {
            id: 'electricity',
            label: 'Electricity (kWh)',
            value: 'electricity',
            min: 'auto',
            max: 'auto',
            ticksPosition: 'before',
            legendPosition: 'start',
            legendOffset: 20
          },
          {
            id: 'eui',
            label: 'EUI',
            value: 'eui',
            min: 'auto',
            max: 'auto',
            ticksPosition: 'before',
            legendPosition: 'start',
            legendOffset: 20
          },
          {
            id: 'co2',
            label: 'Emissions (CO2)',
            value: 'co2',
            min: 'auto',
            max: 'auto',
            ticksPosition: 'before',
            legendPosition: 'start',
            legendOffset: 20
          },
        ]}
        margin={{ top: 50, right: 120, bottom: 50, left: 60 }}
        lineWidth={3}
        legends={[
            {
                anchor: 'right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 60,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
    </div>
  );
};

export default CalendarChart;
