export function validateEmail(emailAdress) {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailAdress.match(regexEmail)) {
        return true;
    } else {
        return false;
    }
}

export function clearAllStroageRentalData(){
    localStorage.removeItem("pickUpDate")
    localStorage.removeItem("returnDate")
    localStorage.removeItem("pickUpLocation")
    localStorage.removeItem("dropOffLocation")
    localStorage.removeItem("selectedCarType")
    localStorage.removeItem("tripType")
    localStorage.removeItem("extraNote")
    localStorage.removeItem("extraNote")
    localStorage.removeItem("takeTime")
    localStorage.removeItem("distance")
}