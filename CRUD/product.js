let arr = [];

function save() {
    let arraySave = {
        cus_name: document.getElementById("cus_name").value,
        id_pro: document.getElementById("id_pro").value,
        product_name: document.getElementById("product_name").value,
        quanity_pro: document.getElementById("quanity_pro").value,
        price_pro: document.getElementById("price_pro").value
    };

    console.log(arr);
    arr.push(arraySave);
}

function show() {
    let html = '';
    for (let i of arr) {
        let total = i.price_pro * i.quanity_pro;
        html += `
            <tr>
                <th scope="row">${arr.indexOf(i)}</th>
                <td>${i.cus_name}</td>
                <td>${i.id_pro}</td>
                <td>${i.product_name}</td>
                <td>${i.quanity_pro}</td>
                <td>${i.price_pro}</td>
                <td>${total}</td>
            </tr>`;
    }

    console.log(arr);
    document.getElementById('tbody').innerHTML = html;
}

function reset() {
    document.getElementById("cus_name").value = '';
    document.getElementById("id_pro").value = '';
    document.getElementById("product_name").value = '';
    document.getElementById("quanity_pro").value = '';
    document.getElementById("price_pro").value = '';
}