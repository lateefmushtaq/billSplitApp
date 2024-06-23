import "./components.css";
function Bill() {
  return (
    <div className="bill">
      <h3>Split a bill with X</h3>
      <div className="div">
        {" "}
        <label>Bill Value</label>
        <input type="text>"></input>
      </div>
      <div className="div">
        {" "}
        <label>Your Expense</label>
        <input type="text>"></input>
      </div>
      <div className="div">
        {" "}
        <label>X Expense</label>
        <input />
      </div>
      <select></select>
      <button className="select-button"> Split Bill</button>
    </div>
  );
}

export default Bill;
