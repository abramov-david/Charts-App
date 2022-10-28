import React, { useState } from "react";
import classes from "./Charts.module.css";

import {
  LineChart,
  Tooltip,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useAppSelector } from "../../hooks/redux";

export default function Charts() {
  const { loading, items, error } = useAppSelector(
    (state) => state.dataFetchReducer
  );

  const renderLineChart = (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={items}>
        <Line type="monotone" dataKey="startingRent" stroke="#8884d8" />
        <Line type="monotone" dataKey="effectiveRent" stroke="#888768" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis type="number" domain={["auto", "auto"]} dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
    </ResponsiveContainer>
  );

  return <div className={classes.charts}>{renderLineChart}</div>;
}
