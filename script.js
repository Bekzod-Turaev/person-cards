const xhr = new XMLHttpRequest();
const countries = document.querySelector(".countries");

const api = "https://raw.githubusercontent.com/mledoze/countries/master/dist/countries.json";

xhr.open("GET", api);

xhr.onload = function () {
    if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);

        countries.innerHTML = response.map((item) => {
            const nativeName = Object.values(item.name.nativeName || {})
                .map(lang => lang.common)
                .join(", ") || item.name.common;

            return `
                <div class="card">
                    <div class="name">${item.name.common}</div>
                    <div class="native_language">
                        <span>Native name:</span> ${nativeName}
                    </div>
                    <div class="capital">
                        <span>Capital:</span> ${(item.capital || ["No capital"]).join(", ")}
                    </div>
                    <div class="independance">
                        <span>Independent:</span> ${item.independent ?? "Unknown"}
                    </div>
                    <div class="unMember">
                        <span>UN member:</span> ${item.unMember}
                    </div>
                    <div class="altSpellings">
                        <span>Code:</span> ${item.cca3}
                    </div>
                    <div class="region">
                        <span>Region:</span> ${item.region || "Unknown"}
                    </div>
                    <div class="population">
                        <span>Population:</span> ${Number(item.population).toLocaleString()}
                    </div>
                </div>
            `;
        }).join("");
    } else {
        countries.innerHTML = "<p>Не удалось загрузить страны.</p>";
    }
};

// xhr.onerror = function () {
//     countries.innerHTML = "<p>Ошибка подключения к серверу.</p>";
// };

xhr.send();

