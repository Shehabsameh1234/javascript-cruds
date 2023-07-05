
// get total

// cteate item

// save in localstorage

// clear inputs

// read

// count

// delete

// update

// cearch

// clean data



let title = document.getElementById("title")
let price = document.getElementById("price")
let taxes = document.getElementById("taxes")
let ads = document.getElementById("ads")
let discount = document.getElementById("discount")
let total = document.getElementById("total")
let count = document.getElementById("count")
let category = document.getElementById("category")
let submit = document.getElementById("submit")


// get total


function gettotal() {
    if (price.value != "") {
        let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
        total.innerHTML = result;
        total.style.background = "black";
    } else {
        total.innerHTML = " ";
        total.style.background = "#bb2d3b";
    }
}


// get total




// cteate item AND SAVE IN LOCALSTORAGE

let datapro;
if (localStorage.product != null) {
    datapro = JSON.parse(localStorage.product)
} else { datapro = []; }


submit.onclick = function () {

    let newpro = {
        title: title.value,
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        total: total.innerHTML,
        count: count.value,
        category: category.value,
    }
    datapro.push(newpro)
    localStorage.setItem("product", JSON.stringify(datapro))
    cleardata()
    showdata()
}

// cteate item AND SAVE IN LOCALSTORAGE


// clear inputs
function cleardata() {
    title.value = "";
    price.value = "";
    taxes.value = "";
    ads.value = "";
    discount.value = "";
    total.innerHTML = "";
    count.value = "";
    total.style.background = "#bb2d3b";
    category.value = "";
}
// clear inputs


// read

function showdata() {

    let table = "";
    for (let i = 0; i < datapro.length; i++) {
        table += `      <tr>
        <td>${i}</td>
        <td>${datapro[i].title}</td>
        <td>${datapro[i].price}</td>
        <td>${datapro[i].taxes}</td>
        <td>${datapro[i].ads}</td>
        <td>${datapro[i].discount}</td>
        <td>${datapro[i].total}</td>
        <td>${datapro[i].category}</td>
        <td><button id="update" class="btn btn-danger">Update</button></td>
        <td><button id="delete" class="btn btn-danger">Delete</button></td>
    </tr>`
    }
    document.getElementById("tbody").innerHTML = table
}
showdata()



// read






