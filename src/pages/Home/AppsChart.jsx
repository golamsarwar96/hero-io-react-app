import { BarChart, Bar, XAxis, YAxis } from "recharts";

const AppsChart = ({ singleApp }) => {
  console.log(singleApp);
  return (
    <div className="mt-10">
      <BarChart
        style={{
          width: "100%",
          maxWidth: "1000px",
          maxHeight: "400px",
          aspectRatio: 1.618,
        }}
        responsive
        data={singleApp?.ratings}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default AppsChart;
