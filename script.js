function inputToNumber(elementID) {
    let inp = document.getElementById(elementID);
    let val = parseInt(inp.value);

    if (isNaN(val)) {
        return 0;
    }

    return val;
}

function computeGrossSalary(numar) {
    numar = parseFloat(numar);
    return parseInt(numar * 0.45);
}

document
    .getElementById("compute-gross-salary")
    .addEventListener("click", (e) => {
        e.preventDefault();

        let salariu = inputToNumber("gross-salary");

        const rez = document.getElementById("result-gross-salary");
        rez.innerText = computeGrossSalary(salariu);
    });

document.getElementById("compute-number-sum").addEventListener("click", (e) => {
    e.preventDefault();
    let suma = 0;

    for (let i = 1; i <= 5; i++) {
        let n = inputToNumber("number-" + i);
        suma = suma + n;
    }

    document.getElementById("number-sum").innerText = suma;
});

document
    .getElementById("compute-salary-index")
    .addEventListener("click", (e) => {
        e.preventDefault();
        let from = inputToNumber("index-1");
        let until = inputToNumber("index-2");

        let suma = 0;
        for (let i = Math.min(from, until); i <= Math.max(from, until); i++) {
            let rand = document.getElementsByTagName("tr")[i];
            let valoare = rand.getElementsByTagName("td")[1];
            valoare = valoare.innerText;
            valoare = parseInt(valoare);

            suma += valoare;
        }

        document.getElementById("result-salary-index").innerText = suma;
    });

function capitalizare(text1, text2) {
    let t1 = text1.toUpperCase().slice(0, 1) + text1.toLowerCase().slice(1);
    let t2 = text2.toUpperCase().slice(0, 1) + text2.toLowerCase().slice(1);

    return t1 + " " + t2;
}

document.getElementById("capitalize").addEventListener("click", (e) => {
    e.preventDefault();

    let text1 = document.getElementById("to-capitalize-1").value;
    let text2 = document.getElementById("to-capitalize-2").value;

    document.getElementById("result-to-capitalize").innerText = capitalizare(
        text1,
        text2
    );
});

document
    .getElementById("compute-is-a-number")
    .addEventListener("click", (e) => {
        e.preventDefault();
        let text = document.getElementById("is-a-number").value;
        let result = true;
        const numbers = "0123456789()+-.,";

        for (let i = 0; i < text.length; i++) {
            if (numbers.indexOf(text[i]) < 0) {
                result = false;
            }
        }

        let rez = document.getElementById("result-is-a-number");
        if (result) {
            rez.innerText = "Input is a number!";
        } else {
            rez.innerText = "Input is NOT a number!";
        }
    });

function validateEmail(text) {
    let result = true;
    let foundat = 0;
    let founddot = 0;

    for (let i = 0; i < text.length; i++) {
        if (text[i] === "@") {
            foundat += 1;
            if (i === 0) {
                result = false;
            }
            if (i === text.length - 1) {
                result = false;
            }
        }

        if (text[i] === ".") {
            founddot += 1;
            if (i === 0) {
                result = false;
            }
            if (i === text.length - 1) {
                result = false;
            }
            if (text[i - 1] === "@") {
                result = false;
            }
        }
    }

    if (foundat !== 1) {
        return false;
    }
    if (founddot !== 1) {
        return false;
    }
    return result;
}

document.getElementById("compute-is-email").addEventListener("click", (e) => {
    e.preventDefault();
    let text = document.getElementById("is-email").value;
    let rez = document.getElementById("result-is-email");

    if (validateEmail(text)) {
        rez.innerText = "Input is a valid email!";
    } else {
        rez.innerText = "Input is NOT a valid email!";
    }
});

function maxInList(list) {
    let max = -10000;

    for (let i = 0; i < list.length; i++) {
        if (list[i] >= max) {
            max = list[i];
        }
    }
    return max;
}

document.getElementById("compute-find-max").addEventListener("click", (e) => {
    e.preventDefault();
    let list = [];

    for (let i = 1; i < 6; i++) {
        list.push(inputToNumber("find-max-" + i));
    }

    document.getElementById("result-find-max").innerText = maxInList(list);
});

function filterList(list, check) {
    let out = [];

    for (let i = 0; i < list.length; i++) {
        const name = list[i].innerText;
        check = check.toLowerCase();

        if (name.indexOf(check) > -1) {
            out.push(name);
        }
    }

    return out;
}

document
    .getElementById("compute-contains-filter")
    .addEventListener("click", (e) => {
        e.preventDefault();

        let list = document.getElementsByTagName("li");

        let filtered = filterList(
            list,
            document.getElementById("contains-filter").value
        );

        let out = "";
        for (let i = 0; i < filtered.length; i++) {
            out += '<li class="list-group-item">' + filtered[i] + "</li>";
        }

        document.getElementById("contains-output").innerHTML = out;
    });
