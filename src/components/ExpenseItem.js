import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>Jan 13th 2024</div>
      <div className="expense-item__description">
        <h2>Bike Insurance</h2>
        <div className="expense-item__price">$50</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
