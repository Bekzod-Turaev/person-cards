
const xhr = new XMLHttpRequest();
const api = "https://jsonplaceholder.typicode.com/users";

xhr.open("GET", api);

xhr.onload = function () {
    const response = JSON.parse(xhr.response);

    const cardsHTML = response.map((item) => {
        return `
            <div class="person_card">
                <div class="his_name">
                    <span>Your name: </span>
                    <p>${item.name}</p>
                </div>

                <div class="his_user_name_part">
                    <span>Your user name: </span>
                    <p>${item.username}</p>
                </div>

                <div class="his_email_part">
                    <span>Your email: </span>
                    <p>${item.email}</p>
                </div>

                <div class="his_street_part">
                    <span>Your street:  </span>
                    <p>${item.address.street}</p>
                </div>

                <div class="his_suite_part">
                    <span>Your suite number:</span>
                    <p>${item.address.suite}</p>
                </div>

                <div class="his_city_part">
                    <span>Your user city:</span>
                    <p>${item.address.city}</p>
                </div>

                <div class="his_zipcode_part">
                    <span>Your user zipcode:</span>
                    <p>${item.address.zipcode}</p>
                </div>

                <div class="his_lat_part">
                    <span>Your user lat:</span>
                    <p>${item.address.geo.lat}</p>
                </div>

                <div class="his_lng_part">
                    <span>Your user lng:</span>
                    <p>${item.address.geo.lng}</p>
                </div>

                <div class="phone">
                    <span>His phone</span>
                    <p>${item.phone}</p>
                </div>

                <div class="website">
                    <span>His website </span>
                    <p>${item.website}</p>
                </div>

                <div class="his_company_part">
                    <span>Company:</span>
                    <p>${item.company.name}</p>
                </div>

                <div class="his_catchphrase_part">
                    <span>Catch phrase:</span>
                    <p>${item.company.catchPhrase}</p>
                </div>

                <div class="his_bs_part">
                    <span>Business:</span>
                    <p>${item.company.bs}</p>
                </div>
            </div>
        `;
    }) 

    document.body.innerHTML = cardsHTML;
};

xhr.send();