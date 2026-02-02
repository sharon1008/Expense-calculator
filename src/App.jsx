import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import ExpenseForm from "./components/ExpenseForm";
import Summary from "./components/Summary";
import ExpenseChart from "./components/ExpenseChart";

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses(prev => [expense, ...prev]);
  };
  
  

  return (
    <Container className="my-4" style={{ backgroundColor: "#0a1f44", borderRadius: "5px" ,maxWidth: '1300px',color:"white"}}>
      <h2 className="text-center mb-4">Expense Tracker</h2>
      <Summary expenses={expenses} />
      <Row>
        <Col md={4}>
          <ExpenseForm onAdd={addExpense} />
        </Col>
        <Col md={8}>
          <ExpenseChart expenses={expenses} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
