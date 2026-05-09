import React from "react";

const orders = [
  {
    id: "#17769430",
    date: "Apr 23, 2026 13:17",
    items: "Salad × 26",
    total: "$780.00",
  },
  {
    id: "#17768414",
    date: "Apr 22, 2026 09:04",
    items: "Salad × 2",
    total: "$60.00",
  },
  {
    id: "#17767920",
    date: "Apr 21, 2026 19:21",
    items: "Salad × 1",
    total: "$30.00",
  },
];

export default function Orders() {
  return (
    <div className="container mt-4">

  
      <h4 className="mb-3 fw-bold">Orders History</h4>

    
      <div className="card border-0 shadow-sm rounded-3">

        <div className="card-body p-0">

          <table className="table table-hover align-middle mb-0">

       
            <thead className="table-light">
              <tr>
                <th>Order ID</th>
                <th>Date & Time</th>
                <th>Items</th>
                <th className="text-end">Total</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td className="fw-semibold text-primary">
                    {order.id}
                  </td>

                  <td className="text-muted">
                    {order.date}
                  </td>

                  <td>{order.items}</td>

                  <td className="text-end fw-bold text-success">
                    {order.total}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>
      </div>
    </div>
  );
}
