function placeOrder() {
    event.preventDefault();
    var orderNo = 1;

    var meal = document.getElementById("meal").value;
    var qty = document.getElementById("qty").value;
    // var qty = document.getElementById("3").value;
    // var order_list = {name: name, category: category, qty: qty}
    var order_list = {orderNo: orderNo, meal: meal, qty: qty}
    disp_order(order_list);
    disp_bill(order_list);

    orderNo = orderNo + 1;
}

function disp_order(order_list) {
    var row = document.createElement('tr');

    var meal_col = document.createElement("td");
    meal_col.textContent = order_list.meal;

    var qty_col = document.createElement("td");
    qty_col.textContent = order_list.qty;

    row.appendChild(meal_col);
    row.appendChild(qty_col);

    var table = document.getElementById("disp_order");
    table.appendChild(row)
}

function disp_bill(order_list) {
    var row = document.createElement('tr');

    // var orderNo = 1;
    // var orderNo_col = document.createElement("td");
    // orderNo_col = order_list.orderNo;
    // orderNo = orderNo + 1;

    var meal_col = document.createElement("td");
    meal_col.textContent = order_list.meal;

    var qty_col = document.createElement("td");
    qty_col.textContent = order_list.qty;

    // row.appendChild(orderNo_col);
    row.appendChild(meal_col);
    row.appendChild(qty_col);

    var table = document.getElementById("disp_bill");
    table.appendChild(row)

}