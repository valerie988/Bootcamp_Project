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
    area: "Computer Engineering company : Polytechnic Yaounde",
    post: "Full-time",
    day: "Monday to Friday",
    field: "Engineering",
  },
  {
    name: "GENIUS ENGINEERING ARCHITECTURAL COMPANY",
    area: "Road construction company . Etoug Ebe",
    post: "Full-time",
    day: "Monday to Friday",
    field: "Engineering",
  },
  {
    name: "Centre Hospitalier Dominicain",
    area: "Nsimeyong . Yaounde",
    post: "Full-time",
    day: "Open 24 hours",
    field: "Hospital",
  },
  {
    name: "Catheral Medical Center",
    area: "Walk-in clinic . Yaounde",
    post: "Full-time",
    day: "Open 24 hours",
    field: "Hospital",
  },
  {
    name: "Red Cross Cameroon Hospital Medical Henry Dunant",
    area: "Bastos . Yaounde",
    post: "Full-time",
    day: "Open 24 hours",
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

// Get the field parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
const field = urlParams.get("field");

function filterCompany(field) {
  const filteredCompany = comp.filter((item) => item.field === field);
  const companyContainer = document.querySelector(".company");
  companyContainer.innerHTML = ""; // Clear the existing company divs

  if (filteredCompany.length === 0) {
    companyContainer.innerHTML = "<p>No companies found in this field.</p>";
  } else {
    filteredCompany.forEach((mindset) => {
      let companyDiv = document.createElement("div");
      companyDiv.classList.add("company-item");
      companyDiv.innerHTML = `
                <h2>${mindset.name}</h2>
                <p><strong>Area:</strong> ${mindset.area}</p>
                <p><strong>Post:</strong> ${mindset.post}</p>
                <p><strong>Day:</strong> ${mindset.day}</p>
                <p><strong>Field:</strong> ${mindset.field}</p>
            `;
      companyContainer.appendChild(companyDiv);
    });
  }
}

// Call the function to display companies for the selected field
filterCompany(field);
