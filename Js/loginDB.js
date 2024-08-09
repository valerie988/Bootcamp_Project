const myform = document.querySelector("form");

const review = function () {
  let db = null;

  // Open the IndexedDB
  const OpendbReq = indexedDB.open("login", 2);

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

  // Handle form submission
  myform.addEventListener("submit", (ev) => {
    ev.preventDefault();

    if (!db) {
      console.error("Database is not initialized.");
      return;
    }

    const user = document.querySelector("#username").value;
    const password = document.querySelector(".Password").value;

    const mydata = {
      username: user,
      password: password,
    };

    console.log("Adding data:", mydata);

    const tran = db.transaction("Store", "readwrite");
    const store = tran.objectStore("Store");
    const request = store.add(mydata);

    request.onsuccess = () => {
      console.log("Data added successfully");
      window.location.href = "Field.html"; // Redirect on success
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

review();
