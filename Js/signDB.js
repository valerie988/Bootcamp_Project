const signUp = document.querySelector(".signup");
const note = function () {
  let db = null;
  let mystore = null;
  let OpendbReq = indexedDB.open("signup", 2); // Ensure version matches

  OpendbReq.addEventListener("success", (suc) => {
    db = suc.target.result; // Set the db variable
    console.log("Database opened successfully");
  });

  OpendbReq.addEventListener("error", (err) => {
    console.warn("Database failed to open:", err);
  });

  OpendbReq.addEventListener("upgradeneeded", (up) => {
    db = up.target.result; // Set the db variable
    console.log("Database upgrade needed:", up);

    if (!db.objectStoreNames.contains("Store")) {
      db.createObjectStore("Store", {
        keyPath: "id",
        autoIncrement: true,
      });
      console.log("Object store created");
    }
  });

  signUp.addEventListener("submit", (ev) => {
    ev.preventDefault();

    if (!db) {
      console.error("Database is not initialized.");
      return;
    }

    const fname = document.querySelector("#F_name").value;
    const lname = document.querySelector("#L_name").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector(".Password").value;

    let mydata = {
      fname: fname,
      lname: lname,
      email: email,
      password: password, // Changed to match form field
    };

    console.log("Adding data:", mydata);

    const tran = db.transaction("Store", "readwrite");
    const store = tran.objectStore("Store");
    const request = store.add(mydata);

    request.onsuccess = (e) => {
      console.log("Form successfully added");
      signUp.reset(); // Clear form fields
    };

    request.onerror = (e) => {
      console.error("Error adding data:", e.target.error);
    };

    tran.oncomplete = () => {
      console.log("Transaction completed successfully");
    };

    tran.onerror = (e) => {
      console.error("Transaction error:", e.target.error);
    };
  });
};

note();
