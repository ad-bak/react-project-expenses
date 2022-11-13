import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
const Expenses = (props) => {
  return (
    <div className="expenses">
      {props.expenses.map((el) => (
        <ExpenseItem
          key={el.id}
          title={el.title}
          amount={el.amount}
          date={el.date}
        />
      ))}
    </div>
  );
};
export default Expenses;
