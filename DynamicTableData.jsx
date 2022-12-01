import React, { useState } from "react";
import Table from "react-bootstrap/Table";

const DynamicTableData = () => {
  const [tableData, settableData] = useState([
    {
      idx: "",
      amount: "",
    },
  ]);
  const [rows, setRows] = useState([
    {
      weightage: "",
      item: "",
      unit: "",
      quantity: "",
      company_name: "",
      per_unit: "",
      amount: "",
      change: "",
      variance: "",
    },
  ]);
  const close = function () {
    // formik.resetForm({
    //   values: "",
    // });
    document.getElementById("main_div_reg6").style.display = "none";
    document.querySelector(".App").style.pointerEvents = "auto";
  };
  const handleChange = (idx, event) => {
    console.log(idx, event.target.name);

    const values = [...rows];
    values[idx][event.target.name] = event.target.value;
    const per_unit = rows[idx].per_unit;

    const quantity = rows[idx].quantity;

    console.log(rows[idx]);
    const totalAmount = quantity * per_unit;

    settableData({
      idx: idx,
      amount: totalAmount,
    });
    // setamout((rows[idx].amount = ));

    // rows[idx].amount = totalAmount;

    // amount[idx].value = totalAmount;

    // document.getElementById(amount).value = totalAmount;

    // console.log("quantity:", per_unit[1]);

    // console.log("idx:", idx);

    // values[idx]["amount"] = event.target.value = amount;

    // const { name, value } = event.target;
    // console.log(value)
    // const rows = [value];
    // console.log(rows)
    // rows[idx] = {
    //   [name]: value,
    // };
    // // rowArray.push(rows[idx])
    // let rowArray= []
    // for (let i = 0; i < rows.length; i++) {
    //   // const element = array[i];
    // rowArray.push(rows)
    // }
    // setRows(rows);
    // console.log(rows)
    // console.log(rowArray)
  };
  const handleAddRow = (e) => {
    e.preventDefault();
    // const item = {
    //   name: "",
    //   mobile: "",
    // };

    setRows([...rows, {}]);
  };
  const handleRemoveRow = (e) => {
    e.preventDefault();
    setRows(rows.slice(0, -1));
  };
  const handleRemoveSpecificRow = (idx) => (e) => {
    e.preventDefault();
    const rowses = [...rows];
    rowses.splice(idx, 1);
    setRows(rowses);
  };
  return (
    <>
      <div id="main_div_reg6">
        <div className="closeDiv">
          <button onClick={close} className="close">
            close
          </button>
        </div>
        <div className="m-3">
          <div className="mt-3">
            <div class="row">
              <div class="col-12 col-md-8"></div>
              <div class="col-6 col-md-4">
                <button
                  onClick={handleRemoveRow}
                  className="deleteRowBtn"
                  style={{ float: "right" }}
                >
                  Delete Last Row
                </button>
                <button
                  onClick={handleAddRow}
                  className=" addRowBtn "
                  style={{ float: "right" }}
                >
                  Add Row
                </button>
              </div>
            </div>
          </div>
          <Table
            bordered
            style={{ border: "none", marginTop: "1rem" }}
            responsive
            className="table-sm"
          >
            <thead>
              <tr>
                <th
                  className="text-center"
                  style={{ fontSize: "0.7rem", width: "5rem" }}
                >
                  Sr No.
                </th>
                <th
                  className="text-center"
                  style={{ fontSize: "0.7rem", width: "5rem" }}
                >
                  Company name
                </th>
                <th
                  className="text-center"
                  style={{ fontSize: "0.7rem", width: "5rem" }}
                >
                  <span>Weightage (%)</span>
                </th>

                <th
                  className="text-center"
                  style={{ fontSize: "0.7rem", width: "5rem" }}
                >
                  Item
                </th>
                <th
                  className="text-center"
                  style={{ fontSize: "0.7rem", width: "5rem" }}
                >
                  Unit
                </th>

                <th
                  className="text-center"
                  style={{ fontSize: "0.7rem", width: "5rem" }}
                >
                  Quantity
                </th>

                <th
                  className="text-center"
                  style={{ fontSize: "0.7rem", width: "5rem" }}
                >
                  Per Unit
                </th>
                <th
                  className="text-center"
                  style={{ fontSize: "0.7rem", width: "5rem" }}
                >
                  Amount
                </th>
                <th
                  className="text-center"
                  style={{ fontSize: "0.7rem", width: "5rem" }}
                >
                  Change
                </th>
                <th
                  className="text-center"
                  style={{ fontSize: "0.7rem", width: "5rem" }}
                >
                  Variance
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((item, idx) => (
                <tr id="addr0" key={idx}>
                  <td>{idx + 1}</td>
                  <td>
                    <input
                      type="text"
                      style={{ border: "2px solid #eee", width: "5rem" }}
                      name="company_name"
                      value={rows.company_name}
                      autoComplete="off"
                      onChange={(event) => {
                        handleChange(idx, event);
                      }}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="weightage"
                      style={{ border: "2px solid #eee", width: "5rem" }}
                      // value={state.rows[idx].name}
                      // onChange={handleChange(idx)}
                      value={rows.weightage}
                      autoComplete="off"
                      onChange={(event) => handleChange(idx, event)}
                    />
                  </td>

                  <td>
                    <input
                      type="text"
                      id="item"
                      style={{ border: "2px solid #eee", width: "5rem" }}
                      name="item"
                      // min="1"
                      // max="4"
                      value={rows.item}
                      autoComplete="off"
                      onChange={(event) => handleChange(idx, event)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      style={{ border: "2px solid #eee", width: "5rem" }}
                      id="unit"
                      name="unit"
                      // min="1"
                      // max="4"
                      value={rows.unit}
                      onChange={(event) => handleChange(idx, event)}
                    />
                  </td>

                  <td>
                    <input
                      type="number"
                      id="quantity"
                      style={{ border: "2px solid #eee", width: "5rem" }}
                      name="quantity"
                      value={rows.quantity}
                      autoComplete="off"
                      onChange={(event) => handleChange(idx, event)}
                    />
                  </td>

                  <td>
                    <input
                      type="number"
                      style={{ border: "2px solid #eee", width: "5rem" }}
                      id="per_unit"
                      name="per_unit"
                      value={rows.per_unit}
                      autoComplete="off"
                      onChange={(event) => handleChange(idx, event)}
                    />
                  </td>

                  <td>
                    {/* <h1 id="amount">hello</h1> */}
                    <input
                      type="text"
                      style={{ border: "2px solid #eee", width: "5rem" }}
                      id="amount"
                      name="amount"
                      value={tableData.idx === idx ? tableData.amount : null}
                      autoComplete="off"
                      onChange={(event) => handleChange(idx, event)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      style={{ border: "2px solid #eee", width: "5rem" }}
                      name="change"
                      value={rows.change}
                      autoComplete="off"
                      onChange={(event) => handleChange(idx, event)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      style={{ border: "2px solid #eee", width: "5rem" }}
                      name="variance"
                      // value={rows.variance}
                      autoComplete="off"
                      onChange={(event) => handleChange(idx, event)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default DynamicTableData;
