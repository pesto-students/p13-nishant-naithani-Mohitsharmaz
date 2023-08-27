function showAlert(alertId) {
   const bootstrapAlert = document.querySelector("#" + alertId);
   console.log("bootstrap class is", bootstrapAlert)
   const collapse = new bootstrap.Collapse(bootstrapAlert); 
   collapse.show();
}

const modalYesBtn = document.querySelector("#contact-modal .btn-primary");
modalYesBtn.addEventListener("click", function () {    
   const sendBtn = document.querySelector("#send-message-btn");
   sendBtn.style.display = "none";
   console.log("button", sendBtn)
   showAlert("conf-alert");
});

console.log("helllooo")
