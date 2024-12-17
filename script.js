// Selecionar elementos
const caixaDeEntrada = document.getElementById("caixaDeEntrada")
// Selecionar lista
const lista = document.getElementById("lista")

// Adicionar tarefa com a tecla Enter
caixaDeEntrada.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        AddTarefa();
    }
});

// Adicionar tarefa 
function AddTarefa(){
    if(caixaDeEntrada.value === ''){
        alert("Você precisa escrever algo!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = caixaDeEntrada.value;
        lista.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        
    }
    caixaDeEntrada.value = ""
    salvarLista();
}

// Marcar tarefa como concluida
lista.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        salvarLista();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        salvarLista();
    }
}, false);


// Salvar lista na página
function salvarLista(){
    localStorage.setItem("data", lista.innerHTML);
}

// Mostrar lista na página
function mostrarLista(){
    lista.innerHTML = localStorage.getItem("data");
}

mostrarLista();
