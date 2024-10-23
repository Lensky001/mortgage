//Recuperation des elements
var les_2_inputs_radio = document.querySelectorAll("input[name = input4]");
var conteneur_des_inputs_radio = document.querySelectorAll(".default_radio");
var les_inputs_de_type_number = document.querySelectorAll("input[type = number]");
var les_smalls = document.querySelectorAll(".small");
var livre_sterling = document.getElementById("livre_sterling");
var years = document.getElementById("years");
var pourcent = document.getElementById("pourcent");
var submit_button = document.getElementById("button_submit");
var clear_all = document.getElementById("clear_all");



// Hover pour les inputs de type radio
for (let index = 0; index < conteneur_des_inputs_radio.length; index++) {
    const element = conteneur_des_inputs_radio[index];

    element.addEventListener("mouseover", function () {
        element.style.border = "1px solid hsl(61, 70%, 52%)";
    });

    element.addEventListener("mouseleave", function () {
        element.style.border = "";
    });
}

//Les inputs de type radio sont active
var input4 = document.getElementById("input4");
var input4 = document.getElementById("input4");
input4.addEventListener("change", e => {
    input5.parentElement.style.backgroundColor = "";
    input5.parentElement.style.border = "";
    input5.parentElement.addEventListener("mouseleave", e => {
        input5.parentElement.style.border = ""
    });

    input4.parentElement.style.backgroundColor = "hsla(61, 70%, 52%, 0.4)";
    input4.parentElement.style.border = "1px solid hsl(61, 70%, 52%)";
    input4.parentElement.addEventListener("mouseleave", e => {
        input4.parentElement.style.border = "1px solid hsl(61, 70%, 52%)"
    })
});

input5.addEventListener("change", e => {
    input4.parentElement.style.backgroundColor = "";
    input4.parentElement.style.border = "";
    input4.parentElement.addEventListener("mouseleave", e => {
        input4.parentElement.style.border = ""
    });

    input5.parentElement.style.backgroundColor = "hsla(61, 70%, 52%, 0.4)";
    input5.parentElement.style.border = "1px solid hsl(61, 70%, 52%)";
    input5.parentElement.addEventListener("mouseleave", e => {
        input5.parentElement.style.border = "1px solid hsl(61, 70%, 52%)"
    })
});





//Les inputs de type number sont actives
for (let index = 0; index < les_inputs_de_type_number.length; index++) {
    let input_number = les_inputs_de_type_number[index];
    input_number.addEventListener("focus", e => {
        let input_active = input_number;
        input_active.style.border = "1px solid hsl(61, 70%, 52%)";
        let id = input_active.id;
        if (id === "input1") {
            livre_sterling.style.background = "hsl(61, 70%, 52%)";
            livre_sterling.style.color = "hsl(202, 55%, 16%)";
        } else if (id == "input2") {
            years.style.background = "hsl(61, 70%, 52%)";
            years.style.color = "hsl(202, 55%, 16%)";
        } else if (id === "input3") {
            pourcent.style.background = "hsl(61, 70%, 52%)";
            pourcent.style.color = "hsl(202, 55%, 16%)";
        }

    });

    input_number.addEventListener("blur", e => {
        let input_blur = input_number;
        input_blur.style.border = "";
        let id = input_blur.id;
        if (id === "input1") {
            livre_sterling.style.background = "";
            livre_sterling.style.color = "";
        } else if (id == "input2") {
            years.style.background = "";
            years.style.color = "";
        } else if (id === "input3") {
            pourcent.style.background = "";
            pourcent.style.color = "";
        }
    });

}




//Evenements
submit_button.addEventListener("click", e => {
    e.preventDefault();
    let amount = document.getElementById("input1").value;
    let term = document.getElementById("input2").value;
    let interest = document.getElementById("input3").value;
    let isRadioChecked = false;
    let idRadioChecked;

    les_2_inputs_radio.forEach(radio => {
        if (radio.checked) {
            isRadioChecked = true;
            idRadioChecked = radio.id;
        }
    });

    if (amount <= 0 || term <= 0 || interest <= 0 || isRadioChecked == false) {
        form_reset();
        error();
    } else {
        Resolution();
    }
});
clear_all.addEventListener("click", e => {
    form_reset();
    for (let index = 0; index < les_smalls.length; index++) {
        const element = les_smalls[index];
        element.classList.remove("small_error");
    };

    let partie_droite = document.getElementById("partie_droite");
    let resulat = document.getElementById("resultat");

    resultat.classList.add("invisible");
    resultat.classList.remove("visible");
    partie_droite.classList.add("visible");
    partie_droite.classList.remove("invisible");

    for (let index = 0; index < les_inputs_de_type_number.length; index++) {
        const element = les_inputs_de_type_number[index];
        element.style.border = "";
    };

    livre_sterling.style.background = "";
    livre_sterling.style.color = "";

    years.style.background = "";
    years.style.color = "";

    pourcent.style.background = "";
    pourcent.style.color = "";

    input5.parentElement.style.backgroundColor = "";
    input5.parentElement.style.border = "";
    input5.parentElement.addEventListener("mouseleave", e => {
        input5.parentElement.style.border = ""
    });

    input4.parentElement.style.backgroundColor = "";
    input4.parentElement.style.border = "";
    input4.parentElement.addEventListener("mouseleave", e => {
        input4.parentElement.style.border = ""
    });
});




//Fonctions
function form_reset() {
    for (let index = 0; index < les_inputs_de_type_number.length; index++) {
        const element = les_inputs_de_type_number[index];
        element.value = "";
    };
    les_2_inputs_radio.forEach(radio => {
        radio.checked = false;
    });

}

function error() {
    for (let index = 0; index < les_smalls.length; index++) {
        const element = les_smalls[index];
        element.classList.add("small_error");
    };

    for (let index = 0; index < les_inputs_de_type_number.length; index++) {
        const element = les_inputs_de_type_number[index];
        element.style.border = "1px solid red";
    };

    livre_sterling.style.background = "red";
    livre_sterling.style.color = "white";

    years.style.background = "red";
    years.style.color = "white";

    pourcent.style.background = "red";
    pourcent.style.color = "white";

    input5.parentElement.style.backgroundColor = "";
    input5.parentElement.style.border = "";
    input5.parentElement.addEventListener("mouseleave", e => {
        input5.parentElement.style.border = ""
    });

    input4.parentElement.style.backgroundColor = "";
    input4.parentElement.style.border = "";
    input4.parentElement.addEventListener("mouseleave", e => {
        input4.parentElement.style.border = ""
    });
};

function Resolution() {

    let amount = parseFloat(document.getElementById("input1").value);
    let term = parseFloat(document.getElementById("input2").value);
    let interest = parseFloat(document.getElementById("input3").value);
    let monthly_repayment;
    let total_repay;
    let annual_interest = interest / 100;
    let monthly_interest = annual_interest / 12;
    let nombre_de_mois = term * 12;
    let monthlyRepayment_affiche = document.getElementById("monthly_repayments");
    let total_repay_affiche = document.getElementById("over_the_term");

    let partie_droite = document.getElementById("partie_droite");
    let resulat = document.getElementById("resultat");
    let div_repay_over_the_term = document.getElementById("div_repay_over_the_term");

    let isRadioChecked = false;
    let idRadioChecked;

    les_2_inputs_radio.forEach(radio => {
        if (radio.checked) {
            isRadioChecked = true;
            idRadioChecked = radio.id;
        }


        if (idRadioChecked == "input5") {
            div_repay_over_the_term.classList.add("invisible");
        } else {
            div_repay_over_the_term.classList.remove("invisible");
        }
    });


    monthly_repayment = amount * monthly_interest * Math.pow(1 + monthly_interest, nombre_de_mois) / (Math.pow(1 + monthly_interest, nombre_de_mois) - 1);
    total_repay = monthly_repayment * 12 * term;

    monthly_repayment_Fa = parseFloat(monthly_repayment.toFixed(2)).toLocaleString("en-US");
    monthlyRepayment_affiche.innerHTML = "£" + monthly_repayment_Fa;

    total_repay_Fa = parseFloat(total_repay.toFixed(2)).toLocaleString("en-US");
    total_repay_affiche.innerHTML = "£" + total_repay_Fa;

    for (let index = 0; index < les_smalls.length; index++) {
        const element = les_smalls[index];
        element.classList.remove("small_error");
    };

    partie_droite.classList.add("invisible");
    resulat.classList.add("visible");

}