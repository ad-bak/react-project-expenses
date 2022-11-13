import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.expenses.map((el) => (
        <ExpenseItem
          key={el.id}
          title={el.title}
          amount={el.amount}
          date={el.date}
        />
      ))}
    </Card>
  );
};
export default Expenses;
