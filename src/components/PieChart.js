import Chart from "react-google-charts";
import React from 'react'

const PieChart = ({interest,totalInvestment,id}) => {
    // console.log(interest,totalInvestment)
    // let chartData=['x',+interest]
    // console.log(chartData)
    return (
        <Chart
  width={'400px'}
  height={'300px'}
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  data={[['Task', 'Hours per Day'],
  [id==='NPS'?'Amount paid at maturity':'Total Investment',+totalInvestment],
  [id==='NPS'?'Annuity':'Interest Earned', +interest],
  ]
}
  options={{
    title: `Total Corpus = ${+interest + +totalInvestment}`,
    // Just add this option
    is3D: true,
  }}
  rootProps={{ 'data-testid': '2' }}
/>
    )
}

export default PieChart
