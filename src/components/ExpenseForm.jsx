import { useState } from "react";

function ExpenseForm({ onAdd }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("Food");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount || !date) {
      alert("Please fill all fields");
      return;
    }
    onAdd({
      id: Date.now(),
      description,
      amount: parseFloat(amount),
      date,
      category,
    });

    // Clear form after submit
    setDescription("");
    setAmount("");
    setDate("");
    setCategory("Food");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h5>Add New Expense</h5>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="form-control mb-2"
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="form-control mb-2"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="form-control mb-2"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="form-control mb-3"
      >
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Utilities">Utilities</option>
        <option value="Shopping">Shopping</option>
        <option value="Healthcare">Healthcare</option>
        <option value="Other">Other</option>
      </select>

      <button type="submit" className="btn btn-primary w-100">
        Add Expense
      </button>
    </form>
  );
}

export default ExpenseForm;
