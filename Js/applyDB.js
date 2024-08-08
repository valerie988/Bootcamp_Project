const form = document.querySelector("form")
const apply = function() {
    let db = null
    let mystore = null
    let OpendbReq = indexedDB.open("job")

    OpendbReq.addEventListener("success", (suc) =>{
        console.log("Database was created")
    })

    OpendbReq.addEventListener("error", (err) =>{
        console.warn("Database was not created")
    })

    OpendbReq.addEventListener("upgradeneeded", (up) =>{
        db = up.target.result
        console.log(up);

        if(db.objectStoreNames.contains("Store")) return

        mystore = db.createObjectStore("Store", {
            keyPath: "id",
            autoIncrement: true,
        })
    })


    form.addEventListener("submit", (ev) => {
        ev.preventDefault()
        console.log(ev);
    
        const user = document.querySelector("#fullName").value
        const email = document.querySelector("#email").value
        const tel = document.querySelector("#phone").value
        const address = document.querySelector("#address").value
        const website = document.querySelector("#website").value

        let mydata = {
            fullname: user,
            email: email,
            tel: tel,
            address: address,
            website: website
        }

        console.log(db);

        const Tran = db.transaction("Store", "readwrite")
        console.log(Tran)

        Tran.oncomplete = () => {
            console.log("Transaction sucessful")
        }

        let store = Tran.objectStore("Store")
        request = store.add(mydata)

        request.onsuccess = (e) => {
            console.log("Form successfully added")
        }

        request.onerror = (e) => {
            console.log("something went wrong with the class")
        }

    })
}
apply()