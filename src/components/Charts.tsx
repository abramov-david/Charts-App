import React from "react";
import {
  LineChart,
  Tooltip,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
} from "recharts";

const data = [
  { id: "1", year: 2015, effectiveRent: 20, startingRent: 15 },
  { id: "2", year: 2016, effectiveRent: 21, startingRent: 22 },
  { id: "3", year: 2017, effectiveRent: 29, startingRent: 34 },
  { id: "4", year: 2018, effectiveRent: 23, startingRent: 27 },
  { id: "5", year: 2019, effectiveRent: 28, startingRent: 25 },
  { id: "6", year: 2020, effectiveRent: 33, startingRent: 29 },
  { id: "7", year: 2021, effectiveRent: 35, startingRent: 33 },
  { id: "8", year: 2022, effectiveRent: 38, startingRent: 36 },
];

const renderLineChart = (
  <LineChart width={500} height={500} data={data}>
    <Line type="monotone" dataKey="startingRent" stroke="#8884d8" />
    <Line type="monotone" dataKey="effectiveRent" stroke="#888768" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="year" />
    <YAxis />
    <Tooltip />
    <Legend />
  </LineChart>
);

export default function Charts() {
  return <div>{renderLineChart}</div>;
}
