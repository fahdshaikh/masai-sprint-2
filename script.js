var orderNo = 1;

function placeOrder() {
    event.preventDefault();
    // var orderNo = 1;    

    var meal = document.getElementById("meal").value;
    var qty = document.getElementById("qty").value;
    var order_list = {orderNo: orderNo, meal: meal, qty: qty};
    order_list.orderNo = order_list.orderNo + 1;

    disp_order(order_list);
    disp_bill(order_list);

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
    var orderNo_col = document.createElement("td");
    orderNo_col = order_list.orderNo;
    var meal_col = document.createElement("td");
    meal_col.textContent = order_list.meal;
    var qty_col = document.createElement("td");
    qty_col.textContent = order_list.qty;

    row.append(orderNo_col);
    row.appendChild(meal_col);
    row.appendChild(qty_col);

    var table = document.getElementById("disp_bill");
    table.appendChild(row);
    
    console.log("order no: " + order_list.orderNo);

}

function finalizeAmt() {
    
}
