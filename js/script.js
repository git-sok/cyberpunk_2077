

const openPopUp = document.getElementById('open');
const closePopUp = document.getElementById('close');
const popUp = document.getElementById('pop__up');

openPopUp.addEventListener('click', () => {
    popUp.classList.add('active');
})

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
})
function searchName () {
    let name = document.getElementById("name");
    let mail = document.getElementById("mail");
    let superName = name.value;
    let superMail = mail.value;

    
    let inputName = document.getElementById('input-name');
    let inputMail = document.getElementById('input-mail');

    
    inputName.textContent = `Здравствуйте уважаемый ${superName}`;
    inputMail.textContent = `Наша команда уже получила Ваш запрос, и в ближайшее время свяжется с Вами по указанному адресу ${superMail}`;

    name.value = ""
    mail.value = ""

}

