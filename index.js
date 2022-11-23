function contact(event) {
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  const form = document.querySelector("#contact__form");
  loading.classList += " element__visible";
  form.classList += "element__invisible";
  event.preventDefault(event);
  emailjs
    .sendForm(
      "service_5j8510n",
      "template_5avzttl",
      event.target,
      "v3NxKCT8ZSbInMBEf"
    )
    .then(() => {
      loading.classList.remove("element__visible");
      success.classList += " element__visible";
    })
    .catch(() => {
      loading.classList.remove("element__visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly at sam.meurice@gmail.com"
      );
    });
}
