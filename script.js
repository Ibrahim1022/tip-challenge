function calculateTip() {
    const bill = document.getElementById("bill").value;
    let tip = 0;

    if (bill >= 50 && bill <= 250) {
        tip = bill * 0.15; // 15% tip for bills between $50 and $250
    } else if (bill > 300) {
        tip = bill * 0.20; // 20% tip for bills above $300
    }

    const total = parseFloat(bill) + parseFloat(tip);
    document.getElementById("tip-output").innerText = `Total is ${total.toFixed(2)} with ${tip > 0 ? (tip / bill) * 100 : 0}% tip`;
}