import React from "react";

import Chart from '../Chart/Chart';

const ExpensesChart = props => {
    const chartDataPoints = [
        { label:'Sau', value: 0 },
        { label:'Vas', value: 0 },
        { label:'Kov', value: 0 },
        { label:'Bal', value: 0 },
        { label:'Geg', value: 0 },
        { label:'Bir', value: 0 },
        { label:'Lie', value: 0 },
        { label:'Rgp', value: 0 },
        { label:'Rgs', value: 0 },
        { label:'Spa', value: 0 },
        { label:'Lap', value: 0 },
        { label:'Gru', value: 0 },
    ];

    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth();
        chartDataPoints[expenseMonth].value += expense.amount;
    }

    return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;