export function createHtmlForForm(){

    let paymentForm = document.getElementById("payment-display");

    let title = document.createElement("h2");
    title.innerHTML = "Shipping information";
    paymentForm?.appendChild(title);

    let form = document.createElement("form");
    form.id = "form";
    paymentForm?.appendChild(form);

    let firstName = document.createElement("input");
    firstName.id = "firstName";
    let labelFirstName = document.createElement("label");
    labelFirstName.setAttribute("for","firstName");
    labelFirstName.innerHTML = "First name: "
    form.appendChild(labelFirstName);
    form.appendChild(firstName);


    let lastName = document.createElement("input");
    lastName.id = "lastName";
    let labelLastName = document.createElement("label");
    labelLastName.setAttribute("for", "lastName");
    labelLastName.innerHTML = "Last name: "
    form.appendChild(labelLastName);
    form.appendChild(lastName);

    let adress = document.createElement("input");
    adress.id = "adress";
    let labelAdress = document.createElement("label");
    labelAdress.setAttribute("for", "adress");
    labelAdress.innerHTML = "Adress: ";
    form.appendChild(labelAdress);
    form.appendChild(adress);

    let zip = document.createElement("input");
    zip.id = "zip";
    let labelZip = document.createElement("label");
    labelZip.setAttribute("for", "zip");
    labelZip.innerHTML = "Zip code: "
    form.appendChild(labelZip);
    form.appendChild(zip);

    let city = document.createElement("input");
    city.id = "city";
    let labelCity = document.createElement("label");
    labelCity.setAttribute("for", "city");
    labelCity.innerHTML = "City: ";
    form.appendChild(labelCity);
    form.appendChild(city);

    form.addEventListener("submit", (e:SubmitEvent) => {
        e.preventDefault;
    })
}