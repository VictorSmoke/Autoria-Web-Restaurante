function MensagemCadastro(){

    var nome = document.getElementById("Nome").value;
    var email = document.getElementById("Email").value;
    var senha = document.getElementById("senha").value;
    var Telefone = document.getElementById("TEL").value;
    var Confirmeasenha = document.getElementById("Confirmeasenha").value;
    var CPF = document.getElementById("CPF").value;
    var Logradouro = document.getElementById("Logradouro").value;
    var Número = document.getElementById("Número").value;
    var CEP = document.getElementById("CEP").value;
    var Bairro = document.getElementById("Bairro").value;
    var Cidade = document.getElementById("Cidade").value;

    if(nome == "" || email == "" || senha == "" || Telefone == "" || Confirmeasenha == "" || CPF == "" || Logradouro == "" || Número == "" || CEP == "" || Bairro == "" || Cidade == ""){

        alert("Por favor, preencha todos os campos.");

    }else{

        alert('Você foi cadastrado com sucesso!');

        localStorage.setItem("nome", nome);
        localStorage.setItem("email", email);
        localStorage.setItem("senha", senha);
        localStorage.setItem("Telefone", Telefone);
        localStorage.setItem("Confirmeasenha", Confirmeasenha);
        localStorage.setItem("CPF", CPF);
        localStorage.setItem("Logradouro", Logradouro);
        localStorage.setItem("Número", Número);
        localStorage.setItem("CEP", CEP);
        localStorage.setItem("Bairro", Bairro);
        localStorage.setItem("Cidade", Cidade);

        document.getElementById("Nome").value = "";
        document.getElementById("Email").value = "";
        document.getElementById("senha").value = "";
        document.getElementById("TEL").value = "";
        document.getElementById("Confirmeasenha").value = "";
        document.getElementById("CPF").value = "";
        document.getElementById("Logradouro").value = "";
        document.getElementById("Número").value = "";
        document.getElementById("CEP").value = "";
        document.getElementById("Bairro").value = "";
        document.getElementById("Cidade").value = "";

    }

}

function MensagemExclusão(){

        alert('Todos os dados foram excluídos!')

        localStorage.removeItem("nome");
        localStorage.removeItem("email");
        localStorage.removeItem("senha");
        localStorage.removeItem("Telefone");
        localStorage.removeItem("Confirmeasenha");
        localStorage.removeItem("CPF");
        localStorage.removeItem("Logradouro");
        localStorage.removeItem("Número");
        localStorage.removeItem("CEP");
        localStorage.removeItem("Bairro");
        localStorage.removeItem("Cidade");

        document.getElementById("Nome").value = "";
        document.getElementById("Email").value = "";
        document.getElementById("senha").value = "";
        document.getElementById("TEL").value = "";
        document.getElementById("Confirmeasenha").value = "";
        document.getElementById("CPF").value = "";
        document.getElementById("Logradouro").value = "";
        document.getElementById("Número").value = "";
        document.getElementById("CEP").value = "";
        document.getElementById("Bairro").value = "";
        document.getElementById("Cidade").value = "";

}

function AvisoAlt(){

    var nome = localStorage.getItem("nome");
    var email = localStorage.getItem("email");
    var senha = localStorage.getItem("senha");
    var Telefone = localStorage.getItem("Telefone");
    var Confirmeasenha = localStorage.getItem("Confirmeasenha");
    var CPF = localStorage.getItem("CPF");
    var CEP = localStorage.getItem("CEP");
    var Logradouro = localStorage.getItem("Logradouro");
    var Número = localStorage.getItem("Número");
    var Bairro = localStorage.getItem("Bairro");
    var Cidade = localStorage.getItem("Cidade");

    if(nome && nome.trim() !== ""){

        document.getElementById("Nome").value = nome;
        document.getElementById("Email").value = email;
        document.getElementById("senha").value = senha;
        document.getElementById("TEL").value = Telefone;
        document.getElementById("Confirmeasenha").value = Confirmeasenha;
        document.getElementById("CPF").value = CPF;
        document.getElementById("CEP").value = CEP;
        document.getElementById("Logradouro").value = Logradouro;
        document.getElementById("Número").value = Número;
        document.getElementById("Bairro").value = Bairro;
        document.getElementById("Cidade").value = Cidade;

    }else{

        alert('Nenhum usuário foi cadastrado ainda.')

    }

}