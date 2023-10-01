import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('apexcharts'), {
  ssr: false,
});

const DonutChart = () => { // Rename the variable to DonutChart
  const donutData = {
    series: [44, 55, 41, 17, 15],
    labels: ['A', 'B', 'C', 'D', 'E'],
  };

  return (
    <div>
      <Chart
        series={donutData.series}
        type="donut"
        width="300"
      />
    </div>
  );
}

export default DonutChart;
