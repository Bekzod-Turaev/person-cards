const CONTAINER = document.querySelector(".container");

const url = "https://jsonplaceholder.typicode.com/comments";

const loading = document.querySelector(".load");

const getDate = async () => {
    try {
        const api = await fetch(url);
        const response = await api.json();

        response.slice(0, 120).map((item) => {
            const { name, body, email } = item;

            CONTAINER.innerHTML += `
                <div class="cards">
                    <p>${name}</p>
                    <p>${body}</p>
                    <p>${email}</p>
                </div>
            `;
        });

        loading.classList.add("hidden");

    } catch (not_my_problem) {
        console.log(not_my_problem);
    }
};

getDate();
