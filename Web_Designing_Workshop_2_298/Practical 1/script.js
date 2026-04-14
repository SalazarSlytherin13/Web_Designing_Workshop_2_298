function checkNumber() {
    let n = document.getElementById("num").value;
    n = Number(n);

    
    if (n <= 0 || isNaN(n)) {
        document.getElementById("result").innerText = "Please enter a valid positive number";
        document.getElementById("numbers").innerText = "";
        return;
    }

    
    if (n % 2 === 0) {
        document.getElementById("result").innerText = n + " is Even";
    } else {
        document.getElementById("result").innerText = n + " is Odd";
    }

    
    let output = "";
    for (let i = 1; i <= n; i++) {
        output += i + " ";
    }

    document.getElementById("numbers").innerText = output;
}
