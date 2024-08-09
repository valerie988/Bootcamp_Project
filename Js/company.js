const urlParams = new URLSearchParams(window.location.search);
const field = urlParams.get("tab");

const comp = [
  {
    name: "CAMEROON FUL ENGINEERING",
    area: "Civil Engineering company . Mbala 4044",
    post: "Full-time",
    day: "Monday to Friday",
    field: "Engineering",
  },
  {
    name: "TECH INNOVATION CENTER",
    area: "Computer Engineering company : Polythecnic Yaounde",
    post: "Full-time",
    day: "Monday to Friday",
    field: "Engineering",
  },
  {
    name: "GENUIS ENGINEERING ARCHITECTURAL COMPANY",
    area: "Road construction company . Etoug Ebe",
    post: "Full-time",
    day: "Monday to Friday",
    field: "Engineering",
  },
  {
    name: "Centre Hospitalier Dominicain",
    area: "Nsimeyong . Yaounde",
    post: "Full-time",
    day: "Open 24hours",
    field: "Hospital",
  },
  {
    name: "Catheral Medical Center",
    area: "Walk-in clinic . Yaounde",
    post: "Full-time",
    day: "Open 24hours",
    field: "Hospital",
  },
  {
    name: "Red Cross Cameroon Hospital Medical Henry Dunant",
    area: "Bastos . Yaounde",
    post: "Full-time",
    day: "Open 24hours",
    field: "Hospital",
  },
  {
    name: "AGRO PME",
    area: "Tradex Eleveur",
    post: "Remote",
    day: "Monday to Friday",
    field: "Agriculture-Service",
  },
  {
    name: "ETS. VIRTUE FARM AND TECH",
    area: "Elounden 1",
    post: "Full-time",
    day: "Monday to Friday",
    field: "Agriculture-Service",
  },
  {
    name: "NTUHSEN AGRICULTURAL AND LIVESTOCK DEVELOPMENT",
    area: "Damas",
    post: "Remote",
    day: "Monday to Friday",
    field: "Agriculture-Service",
  },
];

function filterCompany(field) {
  const filteredCompany = comp.filter((item) => item.field === field);
  const companyContainer = document.querySelector(".company");

  if (!companyContainer) {
    console.error("Container with class 'company' not found.");
    return;
  }

  // Clear existing content
  companyContainer.innerHTML = "";

  filteredCompany.forEach((item) => {
    let companyDiv = document.createElement("div");
    companyDiv.classList.add("company-item");
    companyDiv.innerHTML = `
            <a href="#">${item.name}</a>
            <p>${item.area}</p>
            <p>${item.post}</p>
            <p>${item.day}</p>
            <a>${item.field}</a>
        `;
    companyContainer.appendChild(companyDiv);
  });
}

// Call the function with the field from URL parameters
if (field) {
  filterCompany(field);
}
