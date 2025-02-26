function MensagemCadastro(){

    var nome = document.getElementById("Nome").value;
    var Descrição = document.getElementById("Descrição").value;
    var Cor = document.getElementById("Cor").value;
    var Preço = document.getElementById("Preço").value;
    var Marca = document.getElementById("Marca").value;
    var Dimensões = document.getElementById("Dimensões").value;

    if(nome == "" || Descrição == "" || Cor == "" || Marca == "" || Dimensões == "" || Preço == ""){

        alert("Por favor, preencha todos os campos.");

    }else{

        alert('O produto foi cadastrado com sucesso!');

        localStorage.setItem("nome", nome);
        localStorage.setItem("Descrição", Descrição);
        localStorage.setItem("Cor", Cor);
        localStorage.setItem("Preço", Preço);
        localStorage.setItem("Marca", Marca);
        localStorage.setItem("Dimensões", Dimensões);
        
        document.getElementById("Nome").value = "";
        document.getElementById("Descrição").value = "";
        document.getElementById("Cor").value = "";
        document.getElementById("Preço").value = "";
        document.getElementById("Marca").value = "";
        document.getElementById("Dimensões").value = "";

    }

}

function MensagemExclusão(){

        alert('Todos os dados foram excluídos!')

        localStorage.removeItem("nome");
        localStorage.removeItem("Descrição");
        localStorage.removeItem("Cor");
        localStorage.removeItem("Preço");
        localStorage.removeItem("Marca");
        localStorage.removeItem("Dimensões");

        document.getElementById("Nome").value = "";
        document.getElementById("Descrição").value = "";
        document.getElementById("Cor").value = "";
        document.getElementById("Preço").value = "";
        document.getElementById("Marca").value = "";
        document.getElementById("Dimensões").value = "";

}

function AvisoAlt(){

    var nome = localStorage.getItem("nome");
    var Descrição = localStorage.getItem("Descrição");
    var Cor = localStorage.getItem("Cor");
    var Preço = localStorage.getItem("Preço");
    var Marca = localStorage.getItem("Marca");
    var Dimensões = localStorage.getItem("Dimensões");
    

    if(nome && nome.trim() !== ""){

        document.getElementById("Nome").value = nome;
        document.getElementById("Descrição").value = Descrição;
        document.getElementById("Cor").value = Cor;
        document.getElementById("Preço").value = Preço;
        document.getElementById("Marca").value = Marca;
        document.getElementById("Dimensões").value = Dimensões;


    }else{

        alert('Nenhum produto foi cadastrado ainda.')

    }

}