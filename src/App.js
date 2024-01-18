import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e3",
      title: "Bike Insurance",
      amount: 50,
      date: new Date(2023, 2, 13),
    },
    {
      id: "y3",
      title: "Car Insurance",
      amount: 50,
      date: new Date(2023, 2, 13),
    },
    {
      id: "t3",
      title: "Cycle Insurance",
      amount: 50,
      date: new Date(2023, 2, 13),
    },
    {
      id: "q3",
      title: "Truck Insurance",
      amount: 50,
      date: new Date(2023, 2, 13),
    },
   
  ];
  return (
    <div>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
