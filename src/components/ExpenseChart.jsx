import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40", "#8DD17E"];

function ExpenseChart({ expenses }) {
  // Aggregate data by category
  const data = Object.entries(
    expenses.reduce((acc, e) => {
      acc[e.category] = (acc[e.category] || 0) + e.amount;
      return acc;
    }, {})
  ).map(([name, value]) => ({ name, value }));

  return (
    <div>
      <h5>Expense Overview</h5>
      {data.length === 0 ? (
        <p>No expenses added yet.</p>
      ) : (
        <PieChart width={500} height={300}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      )}
    </div>
  );
}

export default ExpenseChart;
