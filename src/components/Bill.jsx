import "./components.css";

function Bill({
  onHandleBill,
  onSetMyExpense,
  billValue,
  myExpense,
  selectedFriend,
  onPayerChange,
  onCalculate,
}) {
  return (
    <div className="bill">
      <h3>Split a bill with {selectedFriend.name}</h3>
      <div className="div">
        <label>Bill Value</label>
        <input onChange={onHandleBill} type="text" value={billValue} />
      </div>
      <div className="div">
        <label>Your Expense</label>
        <input onChange={onSetMyExpense} type="text" value={myExpense} />
      </div>
      <div className="div">
        <label>Who Paid</label>
        <select onChange={onPayerChange}>
          <option value="me">Me</option>
          <option value="friend">{selectedFriend.name}</option>
        </select>
      </div>
      <button className="select-button" onClick={onCalculate}>
        Split Bill
      </button>
    </div>
  );
}

export default Bill;
