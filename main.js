function calculate() {
    let A = parseFloat(document.getElementById('sideA').value.trim());
    let B = parseFloat(document.getElementById('sideB').value.trim());
    let solution = document.getElementById('solution');

    if (A && B) {
        // Calculate Hypotenuse (C)
        let C = Math.sqrt(A * A + B * B);
        solution.innerHTML = `Hypotenuse (C) = ${C.toFixed(2)}`;
    } else {
        solution.innerHTML = 'Please provide both Side A and Side B.';
    }
}
