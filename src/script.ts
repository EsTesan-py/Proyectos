// Esperamos a que el DOM esté listo antes de buscar los elementos
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("nuevaNota") as HTMLInputElement | null;
  const btn = document.getElementById("agregarNota") as HTMLButtonElement | null;
  const lista = document.getElementById("listaNotas") as HTMLUListElement | null;

  // Verificamos que existan los elementos antes de usarlos
  if (!input || !btn || !lista) {
    console.error("Faltan elementos en el HTML (input, botón o lista)");
    return;
  }

  btn.addEventListener("click", () => {
    const texto = input.value.trim();
    if (texto === "") return;

    const li = document.createElement("li");
    li.textContent = texto;
    lista.appendChild(li);
    input.value = "";
  });
});
