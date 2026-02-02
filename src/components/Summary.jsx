import { Card, Row, Col } from "react-bootstrap";

function Summary({ expenses }) {
  const total = expenses.reduce((acc, e) => acc + e.amount, 0);
  
  // Calculate daily average over last 30 days
  const now = new Date();
  const last30DaysExpenses = expenses.filter(e => {
    const diff = (now - new Date(e.date)) / (1000 * 3600 * 24);
    return diff <= 30;
  });
  const sumLast30 = last30DaysExpenses.reduce((acc, e) => acc + e.amount, 0);
  const dailyAvg = (sumLast30 / 30).toFixed(2);

  // Count unique categories
  const categories = [...new Set(expenses.map(e => e.category))].length;

  return (
    <Row className="mb-4 text-center">
      <Col md={4}>
        <Card>
          <Card.Body>
            <Card.Title>Total Expenses</Card.Title>
            <h3>Rs. {total.toFixed(2)}</h3>
            <small>Last 30 days</small>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card>
          <Card.Body>
            <Card.Title>Daily Average</Card.Title>
            <h3>Rs. {dailyAvg}</h3>
            <small>Based on 30 days</small>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card>
          <Card.Body>
            <Card.Title>Categories</Card.Title>
            <h3>{categories}</h3>
            <small>Different types</small>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Summary;
