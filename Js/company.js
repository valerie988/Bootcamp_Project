const urlParams = new URLSearchParams(window.location.search);
const nothing = urlParams.get("tab");

const comp = [
    {
        name: "CAMEROON FUL ENGINEEERING",
        area: "Civil Engineering company . Mbala 4044",
        post: "Full-time",
        day: "Monday to Friday",
        field: "Engineering"
    },
    {
        name: "TECH INNOVATION CENTER",
        area: "Computer Engineering company : Polythecnic Yaounde",
        post: "Full-time",
        day: "Monday to Friday",
        field: "Engineering"
    },
    {
        name: "GENUIS ENGINEERING ARCHITECTURAL COMPANY",
        area: "Road construction company . Etoug Ebe",
        post: "Full-time",
        day: "Monday to Friday",
        field: "Engineering"
    },
    {
        name: "Centre Hospitalier Dominicain",
        area: "Nsimeyong . Yaounde",
        post: "Full-time",
        day: "Open 24hours",
        field: "Hospital"
    },
    {
        name: "Catheral Medical Center",
        area: "Walk-in clinic . Yaounde",
        post: "Full-time",
        day: "Open 24hours",
        field: "Hospital"
    },
    {
        name: "Red Cross Cameroon Hospital Medical Henry Dunant",
        area: "Bastos . Yaounde",
        post: "Full-time",
        day: "Open 24hours",
        field: "Hospital"
    },
    {
        name: "AGRO PME",
        area: "Tradex Eleveur",
        post: "Remote",
        day: "Monday to Friday",
        field: "Agriculture-Service"
    },
    {
        name: "ETS. VIRTUE FARM AND TECH",
        area: "Elounden 1",
        post: "Full-time",
        day: "Monday to Friday",
        field: "Agriculture-Service"
    },
    {
        name: "NTUHSEN AGRICULTURAL AND LIVESTOCK DEVELOPMENT",
        area: "Damas",
        post: "Remote",
        day: "Monday to Friday",
        field: "Agriculture-Service"
    }
];

function filterCompany(field) {
const filteredCompany = comp.filter(item => item.field === field);
const company = document.querySelector(".company");
//companyContainer.innerHTML = ``;

filteredCompany.map((mindset) => {
    let companyDiv = document.createElement("div")
    companyDiv.classList.add("company")
    companyDiv.innerHTML = `
    <a>${mindset.name}</a>
    <p>${mindset.area}</p>
    <p>${mindset.post}</p>
    <p>${mindset.day}</p>
    <a>${mindset.field}</a>
    `;
    company.appendChild(companyDiv);
})
}