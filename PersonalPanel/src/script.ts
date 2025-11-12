// Esperamos a que el DOM esté listo antes de buscar los elementos
document.addEventListener("DOMContentLoaded", () => {
  // === Funcionalidad de pestañas de navegación ===
  const tabs = document.querySelectorAll(".tab") as NodeListOf<HTMLButtonElement>;
  const sections = document.querySelectorAll("section") as NodeListOf<HTMLElement>;

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const tabName = tab.getAttribute("data-tab");
      if (!tabName) return;

      // Ocultamos todas las secciones
      sections.forEach((section) => {
        section.classList.remove("active");
      });

      // Removemos la clase active de todos los botones
      tabs.forEach((btn) => {
        btn.classList.remove("active");
      });

      // Mostramos la sección seleccionada y activamos el botón
      const selectedSection = document.getElementById(tabName);
      if (selectedSection) {
        selectedSection.classList.add("active");
      }
      tab.classList.add("active");
    });
  });

  // === Funcionalidad de agregar notas ===
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
