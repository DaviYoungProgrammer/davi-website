function login(event) {
  event.preventDefault();
  
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  // Exemplo de validação simples (email e senha fixos para a simulação)
  if (email === "usuario@exemplo.com" && password === "senha123") {
    window.location.href = "contador.html";
  } else {
    errorMessage.textContent = "Email ou senha incorretos!";
  }
}

function getQueryParams() {
  const params = {};
  const queryString = window.location.search.slice(1);
  const pairs = queryString.split('&');
  
  for (const pair of pairs) {
    const [key, value] = pair.split('=');
    if (key) {
      params[decodeURIComponent(key)] = decodeURIComponent(value);
    }
  }
  
  return params;
}

window.onload = function() {
  const params = getQueryParams();
  if (params.email) {
    document.getElementById('email').value = params.email;
  }
  if (params.password) {
    document.getElementById('password').value = params.password;
  }
};

function openProject(projectNumber) {
  const projectBox = document.querySelector(`#btn-project-${projectNumber}`).parentNode;
  projectBox.classList.add("fade-in");

  setTimeout(() => {
      window.location.href = `placar.html`;
  }, 500); // Tempo para permitir a animação antes de navegar
}
