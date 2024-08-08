const signUp = document.querySelector(".signup")
const note = function() {
    let db = null
    let mystore = null
    let OpendbReq = indexedDB.open("signup")

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


    signUp.addEventListener("submit", (ev) => {
        ev.preventDefault()
        console.log(ev);
    
        const fname = document.querySelector("#F_name").value
        const lname = document.querySelector("#L_name").value
        const email = document.querySelector("#email").value
        const Password = document.querySelector(".Password").value

        let mydata = {
            fname: fname,
            lname: lname,
            email: email,
            Password: Password
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
note()