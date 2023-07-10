
// get total

// cteate item

// save in localstorage

// clear inputs

// read

// delete

// count

// update

// search

// clean data



let title = document.getElementById("title")
let price = document.getElementById("price")
let taxes = document.getElementById("taxes")
let ads = document.getElementById("ads")
let discount = document.getElementById("discount")
let total = document.getElementById("total")
let count = document.getElementById("count")
let category = document.getElementById("category")
let search = document.getElementById("search")
let deleteall = document.getElementById("deleteall")

let createmoood = "create"
let searchmood = "title"
let tmp;







// get total

function gettotal() {
    if (price.value != "") {
        result = (+price.value + +taxes.value + +ads.value) - +discount.value
        total.innerHTML = result
        total.style.background = "black"
    } else {
        total.style.background = "#bb2d3b"
        total.innerHTML = ""
    }
}

// get total




// cteate item
// save in localstorage


let datapro;
if (localStorage.product != null) {
    datapro = JSON.parse(localStorage.product)
} else { datapro = [] }



function createitem() {
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


    if (title.value != "" && price.value != "" && taxes.value != "" && category.value != "" && newpro.count <= 100) {
        if (createmoood == "create") {
            // count
            if (newpro.count > 1) {
                for (let i = 0; i < count.value; i++) {
                    datapro.push(newpro)
                }
            } else { datapro.push(newpro) }
            // count
        } else {

            datapro[tmp] = newpro
            submit.innerHTML = "create"
            count.style.display = "block"
        }
        clearinputs()
    }

    localStorage.setItem("product", JSON.stringify(datapro))
    showdata()
}

// cteate item
// save in localstorage




// clear inputs

function clearinputs() {
    title.value = ""
    price.value = ""
    taxes.value = ""
    ads.value = ""
    discount.value = ""
    total.innerHTML = ""
    count.value = ""
    category.value = ""
    total.style.background = "#bb2d3b"
}

// clear inputs



// read
function showdata() {
    let table = "";
    for (let i = 0; i < datapro.length; i++) {
        table += `  <tr>
        <th>${i + 1}</th>
        <th>${datapro[i].title}</th>
        <th>${datapro[i].price}</th>
        <th>${datapro[i].taxes}</th>
        <th>${datapro[i].ads}</th>
        <th>${datapro[i].discount}</th>
        <th>${datapro[i].total}</th>
        <th>${datapro[i].category}</th>
        <td><button id="update" onclick="updatadata(${i})" class="btn btn-size btn-danger">Update</button></td>
        <td><button id="delete" onclick="deleteitem(${i})" class="btn btn-size btn-danger">Delete</button></td>
    </tr>`
    }

    document.getElementById("tbody").innerHTML = table


    if (datapro.length > 0) {
        deleteall.innerHTML = ` <button onclick="deleteall1()" class="btn btn-danger w-100">Delete All (${datapro.length})</button>`
    } else { deleteall.innerHTML = ` <button class="btn btn-danger d-none w-100">Delete All</button>` }


}

showdata()

// read



// delete one item
function deleteitem(i) {
    datapro.splice(i, 1)
    localStorage.product = JSON.stringify(datapro)
    showdata()
}
// delete one item



// deleteall
function deleteall1() {
    datapro.splice(0)
    localStorage.clear()
    showdata()
}
// deleteall




// update
function updatadata(i) {

    count.style.display = "none"
    price.value = datapro[i].price
    title.value = datapro[i].title
    taxes.value = datapro[i].taxes
    ads.value = datapro[i].ads
    discount.value = datapro[i].discount
    total.innerHTML = datapro[i].total
    category.value = datapro[i].category
    tmp = i
    createmoood = "update"
    submit.innerHTML = "update"
    scroll({
        top:0,
        behavior:"smooth"
    })

}
// update




// search
function searchmoodtype(id) {
    if (id == "searchtitle") {
        search.placeholder = "search by title"
    } else {
        searchmood = "category"

        search.placeholder = "search by category"
    }
 
    search.focus()
    showdata()

}
// search



// searchitems

function searchitems(value) {
    let table = "";
    if (searchmood == "title") {
        for (let i = 0; i < datapro.length; i++) {
            if (datapro[i].title.includes(value.toLowerCase())) {
                table += `  <tr>
                <th>${i + 1}</th>
                <th>${datapro[i].title}</th>
                <th>${datapro[i].price}</th>
                <th>${datapro[i].taxes}</th>
                <th>${datapro[i].ads}</th>
                <th>${datapro[i].discount}</th>
                <th>${datapro[i].total}</th>
                <th>${datapro[i].category}</th>
                <td><button id="update" onclick="updatadata(${i})" class="btn  btn-danger">Update</button></td>
                <td><button id="delete" onclick="deleteitem(${i})" class="btn btn-danger">Delete</button></td>
            </tr>`
            }

        }

    } else {
        for (let i = 0; i < datapro.length; i++) {
            if (datapro[i].category.includes(value.toLowerCase())) {
                table += `  <tr>
                <th>${i + 1}</th>
                <th>${datapro[i].title}</th>
                <th>${datapro[i].price}</th>
                <th>${datapro[i].taxes}</th>
                <th>${datapro[i].ads}</th>
                <th>${datapro[i].discount}</th>
                <th>${datapro[i].total}</th>
                <th>${datapro[i].category}</th>
                <td><button id="update" onclick="updatadata(${i})" class="btn btn-danger">Update</button></td>
                <td><button id="delete" onclick="deleteitem(${i})" class="btn btn-danger">Delete</button></td>
            </tr>`
            }

        }
    }
    document.getElementById("tbody").innerHTML = table
}






// searchitems




