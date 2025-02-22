// Load Palettes from localStorage
const paletteesContainer = document.getElementById("palettees-container");
const nopaletteesMessage = document.getElementById("no-palettees");

// Retrieve Palettes from localStorage
const savedpalettees = JSON.parse(localStorage.getItem("colorpalettees")) || [];

if (savedpalettees.length > 0) {
  nopaletteesMessage.style.display = "none"; // Hide the "No palettes saved yet!" message

  for (let i = 0; i < savedpalettees.length; i++) {
    const palette = savedpalettees[i];
    const paletteSection = document.createElement("section");
    paletteSection.setAttribute("class", "paletteSection");
    paletteesContainer.appendChild(paletteSection);
    const h2El = document.createElement("h2");
    h2El.textContent = palette[0];
    paletteSection.appendChild(h2El);

    for (let j = 1; j < palette.length; j++) {
      const color = palette[j];
      const paletteDiv = document.createElement("div");
      paletteDiv.classList.add("palette");
      const colorDiv = document.createElement("div");
      colorDiv.classList.add("palette-color");
      colorDiv.style.backgroundColor = color;
      paletteDiv.appendChild(colorDiv);
      paletteSection.appendChild(paletteDiv);
    }
  }
} else {
  nopaletteesMessage.style.display = "block"; // Show the "No palettes saved yet!" message
}
