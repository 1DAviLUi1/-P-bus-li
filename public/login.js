async function loginAluno(event) {
    event.preventDefault();

    const dados = {
        email: document.getElementById("alemail").value,
        senha: document.getElementById("alsenha").value,
    };

    try {
        const response = await fetch("/login/aluno", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dados),
        });

        const result = await response.json();

        if (response.ok) {
            alert("Login realizado!");
            window.location.href = "homealuno.html";
        } else {
            alert(result.error || "Erro ao fazer login");
        }
    } catch (err) {
        alert("Erro ao fazer login.");
    }
}

async function loginProf(event) {
    event.preventDefault();

    const dados = {
        email: document.getElementById("premail").value,
        senha: document.getElementById("prsenha").value,
    };

    try {
        const response = await fetch("/login/prof", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dados),
        });

        const result = await response.json();

        if (response.ok) {
            alert("Login realizado!");
            window.location.href = "homeprof.html";
        } else {
            alert(result.error || "Erro ao fazer login");
        }
    } catch (err) {
        alert("Erro ao fazer login.");
    }
}

function verSenhaProf() {
    const inputao = document.getElementById("prsenha");
    const divzao = document.getElementById("prdivsenha");
    const imagizona = document.getElementById("przoi");
    if (inputao.type === "password") {
        inputao.type = "text";
        divzao.style.backgroundColor = "#ffda33";
        imagizona.src = "imagens/vesim.png";
    } else {
        inputao.type = "password";
        divzao.style.backgroundColor = "#e4e4e4";
        imagizona.src = "imagens/venao.png";
    }
}

function verSenhaAluno() {
    const inputao = document.getElementById("alsenha");
    const divzao = document.getElementById("aldivsenha");
    const imagizona = document.getElementById("alzoi");
    if (inputao.type === "password") {
        inputao.type = "text";
        divzao.style.backgroundColor = "#ffda33";
        imagizona.src = "imagens/vesim.png";
    } else {
        inputao.type = "password";
        divzao.style.backgroundColor = "#e4e4e4";
        imagizona.src = "imagens/venao.png";
    }
}