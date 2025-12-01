async function loginAluno(event) {
    event.preventDefault();

    const dados = {
        email: document.getElementById("alemail").value,
        senha: document.getElementById("alsenha").value
    };

    try {
        const response = await fetch('/login/aluno', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados)
        });

        const result = await response.json();

        if (response.ok) {
            alert("Login realizado!");
            // redireciona para dashboard
            window.location.href = "/aluno/home";
        } else {
            alert(result.message);
        }

    } catch (err) {
        console.error("Erro:", err);
        alert("Erro ao fazer login.");
    }
}
