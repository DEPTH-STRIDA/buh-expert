function getValues() {
    var xhr = new XMLHttpRequest();
    var url = "/get_calculator_parametres";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    let jsonString = ""
    xhr.onload = function() {
        if (xhr.status == 200) {
            jsonString = xhr.responseText
            //console.log(xhr.responseText)
            try {
                var parsedData = JSON.parse(jsonString);
                //console.log(parsedData);
            } catch (error) {
                //console.error(error);
            }
            FORMA_SOBSTVENNOSTI_option1 = parseFloat(parsedData.FORMA_SOBSTVENNOSTI_option1);
            FORMA_SOBSTVENNOSTI_option2 = parseFloat(parsedData.FORMA_SOBSTVENNOSTI_option2);
            FORMA_SOBSTVENNOSTI_option3 = parseFloat(parsedData.FORMA_SOBSTVENNOSTI_option3);
            FORMA_SOBSTVENNOSTI_option4 = parseFloat(parsedData.FORMA_SOBSTVENNOSTI_option4);
            FORMA_SOBSTVENNOSTI_option5 = parseFloat(parsedData.FORMA_SOBSTVENNOSTI_option5);
            FORMA_SOBSTVENNOSTI_option6 = parseFloat(parsedData.FORMA_SOBSTVENNOSTI_option6);
            FORMA_SOBSTVENNOSTI_option7 = parseFloat(parsedData.FORMA_SOBSTVENNOSTI_option7);
            FORMA_SOBSTVENNOSTI_option8 = parseFloat(parsedData.FORMA_SOBSTVENNOSTI_option8);
            Platezhka_kontragentu_option1 = parseFloat(parsedData.Platezhka_kontragentu_option1)
            Platezhka_kontragentu_option2 = parseFloat(parsedData.Platezhka_kontragentu_option2)
            Platezhka_kontragentu_option3 = parseFloat(parsedData.Platezhka_kontragentu_option3)
            Platezhka_kontragentu_option4 = parseFloat(parsedData.Platezhka_kontragentu_option4)
            Platezhka_kontragentu_option5 = parseFloat(parsedData.Platezhka_kontragentu_option5)
            Platezhka_kontragentu_option6 = parseFloat(parsedData.Platezhka_kontragentu_option6)
            PERVIChKA_VHODYaShchAYa_option1_pervichka_vh_do_5 = parseFloat(parsedData.PERVIChKA_VHODYaShchAYa_option1_pervichka_vh_do_5)
            PERVIChKA_VHODYaShchAYa_option1_pervichka_vh_do_20 = parseFloat(parsedData.PERVIChKA_VHODYaShchAYa_option1_pervichka_vh_do_20)
            PERVIChKA_VHODYaShchAYa_option1_pervichka_vh_do_50 = parseFloat(parsedData.PERVIChKA_VHODYaShchAYa_option1_pervichka_vh_do_50)
            PERVIChKA_VHODYaShchAYa_option1_pervichka_vh_bolee_50 = parseFloat(parsedData.PERVIChKA_VHODYaShchAYa_option1_pervichka_vh_bolee_50)
            PERVIChKA_VHODYaShchAYa_option2_pervichka_vh_do_5 = parseFloat(parsedData.PERVIChKA_VHODYaShchAYa_option2_pervichka_vh_do_5)
            PERVIChKA_VHODYaShchAYa_option2_pervichka_vh_do_20 = parseFloat(parsedData.PERVIChKA_VHODYaShchAYa_option2_pervichka_vh_do_20)
            PERVIChKA_VHODYaShchAYa_option2_pervichka_vh_do_50 = parseFloat(parsedData.PERVIChKA_VHODYaShchAYa_option2_pervichka_vh_do_50)
            PERVIChKA_VHODYaShchAYa_option2_pervichka_vh_bolee_50 = parseFloat(parsedData.PERVIChKA_VHODYaShchAYa_option2_pervichka_vh_bolee_50)

            PERVIChKA_ISHODYaShchAYa_option1_pervichka_ish_do_5 = parseFloat(parsedData.PERVIChKA_ISHODYaShchAYa_option1_pervichka_ish_do_5)
            PERVIChKA_ISHODYaShchAYa_option1_pervichka_ish_do_20 = parseFloat(parsedData.PERVIChKA_ISHODYaShchAYa_option1_pervichka_ish_do_20)
            PERVIChKA_ISHODYaShchAYa_option1_pervichka_ish_do_50 = parseFloat(parsedData.PERVIChKA_ISHODYaShchAYa_option1_pervichka_ish_do_50)
            PERVIChKA_ISHODYaShchAYa_option1_pervichka_ish_bolee_50 = parseFloat(parsedData.PERVIChKA_ISHODYaShchAYa_option1_pervichka_ish_bolee_50)

            PERVIChKA_ISHODYaShchAYa_option2_pervichka_ish_do_5 = parseFloat(parsedData.PERVIChKA_ISHODYaShchAYa_option2_pervichka_ish_do_5)
            PERVIChKA_ISHODYaShchAYa_option2_pervichka_ish_do_20 = parseFloat(parsedData.PERVIChKA_ISHODYaShchAYa_option2_pervichka_ish_do_20)
            PERVIChKA_ISHODYaShchAYa_option2_pervichka_ish_do_50 = parseFloat(parsedData.PERVIChKA_ISHODYaShchAYa_option2_pervichka_ish_do_50)
            PERVIChKA_ISHODYaShchAYa_option2_pervichka_ish_bolee_50 = parseFloat(parsedData.PERVIChKA_ISHODYaShchAYa_option2_pervichka_ish_bolee_50)

            OZON_option1 = parseFloat(parsedData.OZON_option1)
            OZON_option2 = parseFloat(parsedData.OZON_option2)
            OZON_option3 = parseFloat(parsedData.OZON_option3)
            OZON_option4 = parseFloat(parsedData.OZON_option4)

            WB_option1 = parseFloat(parsedData.WB_option1)
            WB_option2 = parseFloat(parsedData.WB_option2)
            WB_option3 = parseFloat(parsedData.WB_option3)
            WB_option4 = parseFloat(parsedData.WB_option4)

            PATENT_value = parseFloat(parsedData.PATENT_value)

            Kadry_IP_value = parseFloat(parsedData.Kadry_IP_value)

            PROIZVODSTVO_BAZA_value = parseFloat(parsedData.PROIZVODSTVO_BAZA_value)
            
            DOP_PATENT_value = parseFloat(parsedData.DOP_PATENT_value)

            Sotrudniki_RF_value = parseFloat(parsedData.Sotrudniki_RF_value)

            Sotrudniki_nerezidenty_value = parseFloat(parsedData.Sotrudniki_nerezidenty_value)

            Bankovskaya_vypiska_bolee_100_pozicij_value = parseFloat(parsedData.Bankovskaya_vypiska_bolee_100_pozicij_value)

            PKO_RKO_value = parseFloat(parsedData.PKO_RKO_value)

            Kassovaya_kniga_value = parseFloat(parsedData.Kassovaya_kniga_value)

            Avansovyj_otchet_10_chekov_value = parseFloat(parsedData.Avansovyj_otchet_10_chekov_value)

            Avansovyj_otchet_50_chekov_value = parseFloat(parsedData.Avansovyj_otchet_50_chekov_value)

            AKTY_SVEROK_na_1_kontragenta_value = parseFloat(parsedData.AKTY_SVEROK_na_1_kontragenta_value)

            OSNOVNOE_SREDSTVO_value = parseFloat(parsedData.OSNOVNOE_SREDSTVO_value)

            // UChET_GSM_value=0

            DOGOVOR_ZAJMA_value = parseFloat(parsedData.DOGOVOR_ZAJMA_value)

            DOGOVOR_KREDITA_value = parseFloat(parsedData.DOGOVOR_KREDITA_value)

            DOGOVOR_LIZINGA_value = parseFloat(parsedData.DOGOVOR_LIZINGA_value)
        } else {
            console.error("AJAX request failed with status " + xhr.status);
        }
    };

    xhr.send();

    // VED_value=0
}
/////////////////////////////////////////////////////////////////////////////
/////////////////////////               VALUES             //////////////////
/////////////////////////////////////////////////////////////////////////////
var FORMA_SOBSTVENNOSTI_option1 = 8849
var FORMA_SOBSTVENNOSTI_option2 = 5114
var FORMA_SOBSTVENNOSTI_option3 = 2927
var FORMA_SOBSTVENNOSTI_option4 = 2782
var FORMA_SOBSTVENNOSTI_option5 = 2134
var FORMA_SOBSTVENNOSTI_option6 = 3715
var FORMA_SOBSTVENNOSTI_option7 = 2203
var FORMA_SOBSTVENNOSTI_option8 = 1944

var Platezhka_kontragentu_option1 = 0
var Platezhka_kontragentu_option2 = 777.5297619
var Platezhka_kontragentu_option3 = 1555.0595238
var Platezhka_kontragentu_option4 = 3110.1190476
var Platezhka_kontragentu_option5 = 6220.2380952
var Platezhka_kontragentu_option6 = 12440.4761905

var PERVIChKA_VHODYaShchAYa_option1_pervichka_vh_do_5 = 130
var PERVIChKA_VHODYaShchAYa_option1_pervichka_vh_do_20 = 259
var PERVIChKA_VHODYaShchAYa_option1_pervichka_vh_do_50 = 518
var PERVIChKA_VHODYaShchAYa_option1_pervichka_vh_bolee_50 = 778

var PERVIChKA_VHODYaShchAYa_option2_pervichka_vh_do_5 = 78
var PERVIChKA_VHODYaShchAYa_option2_pervichka_vh_do_20 = 130
var PERVIChKA_VHODYaShchAYa_option2_pervichka_vh_do_50 = 259
var PERVIChKA_VHODYaShchAYa_option2_pervichka_vh_bolee_50 = 389

var PERVIChKA_ISHODYaShchAYa_option1_pervichka_ish_do_5 = 181
var PERVIChKA_ISHODYaShchAYa_option1_pervichka_ish_do_20 = 389
var PERVIChKA_ISHODYaShchAYa_option1_pervichka_ish_do_50 = 778
var PERVIChKA_ISHODYaShchAYa_option1_pervichka_ish_bolee_50 = 1166

var PERVIChKA_ISHODYaShchAYa_option2_pervichka_ish_do_5 = 104
var PERVIChKA_ISHODYaShchAYa_option2_pervichka_ish_do_20 = 207
var PERVIChKA_ISHODYaShchAYa_option2_pervichka_ish_do_50 = 389
var PERVIChKA_ISHODYaShchAYa_option2_pervichka_ish_bolee_50 = 570

var OZON_option1 = 0
var OZON_option2 = 3498.88
var OZON_option3 = 6997.77
var OZON_option4 = 10496.65

var WB_option1 = 0
var WB_option2 = 5442.71
var WB_option3 = 10885.42
var WB_option4 = 16328.13

var PATENT_value = 2713

var Kadry_IP_value = 950.31

var PROIZVODSTVO_BAZA_value = 6220.24

var DOP_PATENT_value = 1339.08

var Sotrudniki_RF_value = 1008.63

var Sotrudniki_nerezidenty_value = 2375.79

var Bankovskaya_vypiska_bolee_100_pozicij_value = 2375.79

var PKO_RKO_value = 2375.79

var Kassovaya_kniga_value = 2375.79

var Avansovyj_otchet_10_chekov_value = 259.18

var Avansovyj_otchet_50_chekov_value = 777.53

var AKTY_SVEROK_na_1_kontragenta_value = 129.59

var OSNOVNOE_SREDSTVO_value = 734.33

//var UChET_GSM_value=0

var DOGOVOR_ZAJMA_value = 453.56

var DOGOVOR_KREDITA_value = 410.36

var DOGOVOR_LIZINGA_value = 550.75

//var VED_value=0
/////////////////////////////////////////////////////////////////////////////
////////////////////////////    current values     //////////////////////////
/////////////////////////////////////////////////////////////////////////////
function count() {
    var result = 0;
    result += parseInt(document.getElementById('FORMA_SOBSTVENNOSTI_price').textContent, 10);
    result += parseInt(document.getElementById('ITOGO_MARKETPLEJSY_price').textContent, 10);
    result += parseInt(document.getElementById('PATENT_price').textContent, 10);
    result += parseInt(document.getElementById('DOP_PATENT_price').textContent, 10);
    result += parseInt(document.getElementById('Itogo_kadry_price').textContent, 10);
    result += parseInt(document.getElementById('Bankovskaya_vypiska_bolee_100_pozicij_price').textContent, 10);
    result += parseInt(document.getElementById('Platezhka_kontragentu_price').textContent, 10);
    result += parseInt(document.getElementById('Itogo_kassa_price').textContent, 10);
    result += parseInt(document.getElementById('ITOGO_OBOROTY_price').textContent, 10);
    result += parseInt(document.getElementById('ITOGO_AVANSOVYE_OTChETY_price').textContent, 10);
    result += parseInt(document.getElementById('ITOGO_UChET_GSM_price').textContent, 10);
    result += parseInt(document.getElementById('DOGOVOR_ZAJMA_price').textContent, 10);
    result += parseInt(document.getElementById('DOGOVOR_KREDITA_price').textContent, 10);
    result += parseInt(document.getElementById('DOGOVOR_LIZINGA_price').textContent, 10);
    //result += parseInt(document.getElementById('VED_price').textContent, 10);
    result += parseInt(document.getElementById('PROIZVODSTVO_BAZA_price').textContent, 10);

    document.getElementById('final_price').textContent = "ИТОГО СТОИМОСТЬ ОБСЛУЖИВАНИЯ В МЕСЯЦ " + Math.round(result).toString() + " руб"
}

function setter(string, k) {
    var inputField = document.getElementById(string);
    var inputValue = inputField.value;
    var cleanedValue = inputValue.replace(/\s/g, '');

    if (/^\d+$/.test(cleanedValue)) {
        var result = parseFloat(cleanedValue);
        result = result * k;
        document.getElementById(string + '_price').textContent = Math.round(result);
        return
    }
    document.getElementById(string + '_price').textContent = 0
}

function getter(string, k) {
    var inputField = document.getElementById(string);
    var inputValue = inputField.value;
    var cleanedValue = inputValue.replace(/\s/g, '');

    if (/^\d+$/.test(cleanedValue)) {
        var result = parseFloat(cleanedValue);
        result = result * k;
        document.getElementById(string + '_price').textContent = Math.round(result);
        return result
    }
    document.getElementById(string + '_price').textContent = 0;
    return 0
}

function get_text_value(string) {
    var inputField = document.getElementById(string);
    var inputValue = inputField.textContent;
    var cleanedValue = inputValue.replace(/\s/g, '');

    if (/^\d+$/.test(cleanedValue)) {
        var result = parseFloat(cleanedValue);
        return result
    }
    return 0
}
/////////////////////////////////////////////////////////////////////////////
////////////////////////      select        /////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
function FORMA_SOBSTVENNOSTI__setter() {
    var selectedValue = document.getElementById('FORMA_SOBSTVENNOSTI').value;
    // Ставим в соответствие стоимость в зависимости от выбранного значения
    var cost;
    switch (selectedValue) {
        case 'option1':
            cost = FORMA_SOBSTVENNOSTI_option1
            break;
        case 'option2':
            cost = FORMA_SOBSTVENNOSTI_option2;
            break;
        case 'option3':
            cost = FORMA_SOBSTVENNOSTI_option3;
            break;
        case 'option4':
            cost = FORMA_SOBSTVENNOSTI_option4;
            break;
        case 'option5':
            cost = FORMA_SOBSTVENNOSTI_option5;
            break;
        case 'option6':
            cost = FORMA_SOBSTVENNOSTI_option6;
            break;
        case 'option7':
            cost = FORMA_SOBSTVENNOSTI_option7;
            break;
        case 'option8':
            cost = FORMA_SOBSTVENNOSTI_option8;
            break;
        default:
            cost = 0;
    }
    document.getElementById('FORMA_SOBSTVENNOSTI_price').textContent = Math.round(cost);
    count()
}

function Platezhka_kontragentu_setter() {
    var selectedValue = document.getElementById('Platezhka_kontragentu').value;
    // Ставим в соответствие стоимость в зависимости от выбранного значения
    var cost;
    switch (selectedValue) {
        case 'option1':
            cost = Platezhka_kontragentu_option1;
            break;
        case 'option2':
            cost = Platezhka_kontragentu_option2;
            break;
        case 'option3':
            cost = Platezhka_kontragentu_option3;
            break;
        case 'option4':
            cost = Platezhka_kontragentu_option4;
            break;
        case 'option5':
            cost = Platezhka_kontragentu_option5;
            break;
        case 'option6':
            cost = Platezhka_kontragentu_option6;
            break;
        default:
            cost = 0;
    }
    document.getElementById('Platezhka_kontragentu_price').textContent = Math.round(cost);
    count()
}

function PERVIChKA_VHODYaShchAYa_setter() {
    var selectedValue = document.getElementById('PERVIChKA_VHODYaShchAYa').value;
    var a5, a20, a50, a_bolle
    switch (selectedValue) {
        case 'option1':
            a5 = getter("pervichka_vh_do_5", PERVIChKA_VHODYaShchAYa_option1_pervichka_vh_do_5)
            a20 = getter("pervichka_vh_do_20", PERVIChKA_VHODYaShchAYa_option1_pervichka_vh_do_20)
            a50 = getter("pervichka_vh_do_50", PERVIChKA_VHODYaShchAYa_option1_pervichka_vh_do_50)
            a_bolle = getter("pervichka_vh_bolee_50", PERVIChKA_VHODYaShchAYa_option1_pervichka_vh_bolee_50)
            break;
        case 'option2':
            a5 = getter("pervichka_vh_do_5", PERVIChKA_VHODYaShchAYa_option2_pervichka_vh_do_5)
            a20 = getter("pervichka_vh_do_20", PERVIChKA_VHODYaShchAYa_option2_pervichka_vh_do_20)
            a50 = getter("pervichka_vh_do_50", PERVIChKA_VHODYaShchAYa_option2_pervichka_vh_do_50)
            a_bolle = getter("pervichka_vh_bolee_50", PERVIChKA_VHODYaShchAYa_option2_pervichka_vh_bolee_50)
            break;
        default:
            cost = 0;
    }
    a5 += a20 + a50 + a_bolle
    document.getElementById('PERVIChKA_VHODYaShchAYa_price').textContent = Math.round(a5);
    a5 += get_text_value("PERVIChKA_ISHODYaShchAYa_price")
    document.getElementById('ITOGO_OBOROTY_price').textContent = Math.round(a5);
    count()
}

function PERVIChKA_ISHODYaShchAYa_setter() {
    var selectedValue = document.getElementById('PERVIChKA_ISHODYaShchAYa').value;
    var a5, a20, a50, a_bolle
    switch (selectedValue) {
        case 'option1':
            a5 = getter("pervichka_ish_do_5", PERVIChKA_ISHODYaShchAYa_option1_pervichka_ish_do_5)
            a20 = getter("pervichka_ish_do_20", PERVIChKA_ISHODYaShchAYa_option1_pervichka_ish_do_20)
            a50 = getter("pervichka_ish_do_50", PERVIChKA_ISHODYaShchAYa_option1_pervichka_ish_do_50)
            a_bolle = getter("pervichka_ish_bolee_50", PERVIChKA_ISHODYaShchAYa_option1_pervichka_ish_bolee_50)
            break;
        case 'option2':
            a5 = getter("pervichka_ish_do_5", PERVIChKA_ISHODYaShchAYa_option2_pervichka_ish_do_5)
            a20 = getter("pervichka_ish_do_20", PERVIChKA_ISHODYaShchAYa_option2_pervichka_ish_do_20)
            a50 = getter("pervichka_ish_do_50", PERVIChKA_ISHODYaShchAYa_option2_pervichka_ish_do_50)
            a_bolle = getter("pervichka_ish_bolee_50", PERVIChKA_ISHODYaShchAYa_option2_pervichka_ish_bolee_50)
            break;
        default:
            cost = 0;
    }
    a5 += a20 + a50 + a_bolle
    document.getElementById('PERVIChKA_ISHODYaShchAYa_price').textContent = Math.round(a5);
    a5 += get_text_value("PERVIChKA_ISHODYaShchAYa_price")
    document.getElementById('ITOGO_OBOROTY_price').textContent = Math.round(a5);
    count()
}

function WB_setter() {
    var selectedValue = document.getElementById('WB').value;
    // Ставим в соответствие стоимость в зависимости от выбранного значения
    var cost;
    switch (selectedValue) {
        case 'option1':
            cost = WB_option1;
            break;
        case 'option2':
            cost = WB_option2;
            break;
        case 'option3':
            cost = WB_option3;
            break;
        case 'option4':
            cost = WB_option4;
            break;
        default:
            cost = 0;
    }
    document.getElementById('WB_price').textContent = Math.round(cost);
    Vedenie_tovarnogo_ucheta_WB_setter()
    ITOGO_MARKETPLEJSY_setter()
    count()
}

function OZON_setter() {
    var selectedValue = document.getElementById('OZON').value;
    // Ставим в соответствие стоимость в зависимости от выбранного значения
    var cost;
    switch (selectedValue) {
        case 'option1':
            cost = OZON_option1;
            break;
        case 'option2':
            cost = OZON_option2;
            break;
        case 'option3':
            cost = OZON_option3;
            break;
        case 'option4':
            cost = OZON_option4;
            break;
        default:
            cost = 0;
    }
    document.getElementById('OZON_price').textContent = Math.round(cost);
    Vedenie_tovarnogo_ucheta_OZON_setter()
    ITOGO_MARKETPLEJSY_setter()
    count()
}
/////////////////////////////////////////////////////////////////////////////
//////////////////////////    checkbox    ///////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
function PATENT_setter() {
    var checkbox = document.getElementById('PATENT');
    var cost;
    if (checkbox.checked) {
        cost = PATENT_value
    } else {
        cost = 0
    }
    document.getElementById('PATENT_price').textContent = Math.round(cost);
    count()
}

function Kadry_IP_setter() {
    var checkbox = document.getElementById('Kadry_IP');
    var cost;
    if (checkbox.checked) {
        cost = Kadry_IP_value
    } else {
        cost = 0
    }
    document.getElementById('Kadry_IP_price').textContent = Math.round(cost);
    Itogo_kadry_setter()
    count()
}

function PROIZVODSTVO_BAZA_setter() {
    var checkbox = document.getElementById('PROIZVODSTVO_BAZA');
    var cost;
    if (checkbox.checked) {
        cost = PROIZVODSTVO_BAZA_value
    } else {
        cost = 0
    }
    document.getElementById('PROIZVODSTVO_BAZA_price').textContent = Math.round(cost);
    count()
}

function Vedenie_tovarnogo_ucheta_WB_setter() {
    var checkbox = document.getElementById('Vedenie_tovarnogo_ucheta_WB');
    var cost;
    if (checkbox.checked) {
        cost = parseFloat(document.getElementById('WB_price').textContent);
    } else {
        cost = 0
    }
    document.getElementById('Vedenie_tovarnogo_ucheta_WB_price').textContent = Math.round(cost);
    ITOGO_MARKETPLEJSY_setter()
    count()
}

function Vedenie_tovarnogo_ucheta_OZON_setter() {
    var checkbox = document.getElementById('Vedenie_tovarnogo_ucheta_OZON');
    var cost;
    if (checkbox.checked) {
        cost = parseFloat(document.getElementById('OZON_price').textContent);
    } else {
        cost = 0
    }
    document.getElementById('Vedenie_tovarnogo_ucheta_OZON_price').textContent = Math.round(cost);
    ITOGO_MARKETPLEJSY_setter()
    count()
}
/////////////////////////////////////////////////////////////////////////////
/////////////////////////          ITOGO          ///////////////////////////
/////////////////////////////////////////////////////////////////////////////
function Itogo_kadry_setter() {
    var result = 0;
    result += parseFloat(document.getElementById('Kadry_IP_price').textContent);
    result += parseFloat(document.getElementById('Sotrudniki_RF_price').textContent);
    result += parseFloat(document.getElementById('Sotrudniki_nerezidenty_price').textContent);

    document.getElementById('Itogo_kadry_price').textContent = Math.round(result);
}

function Itogo_kassa_setter() {
    let result = 0
    result += parseFloat(document.getElementById('Kassovaya_kniga_price').textContent);
    result += parseFloat(document.getElementById('PKO_RKO_price').textContent);

    document.getElementById('Itogo_kassa_price').textContent = Math.round(result);
}

function ITOGO_AVANSOVYE_OTChETY_setter() {
    var result = 0;
    result += parseFloat(document.getElementById('Avansovyj_otchet_50_chekov_price').textContent);
    result += parseFloat(document.getElementById('Avansovyj_otchet_10_chekov_price').textContent);

    document.getElementById('ITOGO_AVANSOVYE_OTChETY_price').textContent = Math.round(result);
}

function ITOGO_UChET_GSM_setter() {
    var result = 0;
    result += (Math.round(parseFloat(document.getElementById('AKTY_SVEROK_na_1_kontragenta_price').textContent) * 10) / 10);
    //result += (Math.round(parseFloat(document.getElementById('UChET_GSM_price').textContent) * 10) / 10);
    result += (Math.round(parseFloat(document.getElementById('OSNOVNOE_SREDSTVO_price').textContent) * 10) / 10);;

    document.getElementById('ITOGO_UChET_GSM_price').textContent = Math.round(result);
}

function ITOGO_MARKETPLEJSY_setter() {
    var result = 0;
    result += parseFloat(document.getElementById('WB_price').textContent);
    result += parseFloat(document.getElementById('Vedenie_tovarnogo_ucheta_WB_price').textContent);
    result += parseFloat(document.getElementById('OZON_price').textContent);
    result += parseFloat(document.getElementById('Vedenie_tovarnogo_ucheta_OZON_price').textContent);

    document.getElementById('ITOGO_MARKETPLEJSY_price').textContent = Math.round(result);
}
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {
    getValues()
    FORMA_SOBSTVENNOSTI__setter()
    WB_setter()
    OZON_setter()
    Platezhka_kontragentu_setter()
    PERVIChKA_VHODYaShchAYa_setter()
    PROIZVODSTVO_BAZA_setter()
    document.getElementById('FORMA_SOBSTVENNOSTI').addEventListener('change', FORMA_SOBSTVENNOSTI__setter);
    document.getElementById('WB').addEventListener('change', WB_setter);
    document.getElementById('OZON').addEventListener('change', OZON_setter);

    document.getElementById('PATENT').addEventListener('change', PATENT_setter)
    document.getElementById('Vedenie_tovarnogo_ucheta_WB').addEventListener('change', Vedenie_tovarnogo_ucheta_WB_setter)
    document.getElementById('Vedenie_tovarnogo_ucheta_OZON').addEventListener('change', Vedenie_tovarnogo_ucheta_OZON_setter)

    document.getElementById('DOP_PATENT').addEventListener('input', function() {
        setter('DOP_PATENT', DOP_PATENT_value);
        count()
    });

    document.getElementById('Kadry_IP').addEventListener('change', Kadry_IP_setter)

    document.getElementById('Sotrudniki_RF').addEventListener('input', function() {
        setter('Sotrudniki_RF', Sotrudniki_RF_value);
        Itogo_kadry_setter()
        count()
    });


    document.getElementById('Sotrudniki_nerezidenty').addEventListener('input', function() {
        setter('Sotrudniki_nerezidenty', Sotrudniki_nerezidenty_value);
        Itogo_kadry_setter()
        count()
    });

    document.getElementById('Bankovskaya_vypiska_bolee_100_pozicij').addEventListener('input', function() {
        setter('Bankovskaya_vypiska_bolee_100_pozicij', Bankovskaya_vypiska_bolee_100_pozicij_value);

    });
    document.getElementById('Platezhka_kontragentu').addEventListener('change', Platezhka_kontragentu_setter);

    document.getElementById('PKO_RKO').addEventListener('input', function() {
        setter('PKO_RKO', PKO_RKO_value);
        Itogo_kassa_setter()
        count()
    });

    document.getElementById('Kassovaya_kniga').addEventListener('input', function() {
        setter('Kassovaya_kniga', Kassovaya_kniga_value);
        Itogo_kassa_setter()
        count()
    });

    document.getElementById('PERVIChKA_VHODYaShchAYa').addEventListener('change', PERVIChKA_VHODYaShchAYa_setter);
    document.getElementById('pervichka_vh_do_5').addEventListener('input', PERVIChKA_VHODYaShchAYa_setter)
    document.getElementById('pervichka_vh_do_20').addEventListener('input', PERVIChKA_VHODYaShchAYa_setter)
    document.getElementById('pervichka_vh_do_50').addEventListener('input', PERVIChKA_VHODYaShchAYa_setter)
    document.getElementById('pervichka_vh_bolee_50').addEventListener('input', PERVIChKA_VHODYaShchAYa_setter)

    document.getElementById('PERVIChKA_ISHODYaShchAYa').addEventListener('change', PERVIChKA_ISHODYaShchAYa_setter);
    document.getElementById('pervichka_ish_do_5').addEventListener('input', PERVIChKA_ISHODYaShchAYa_setter)
    document.getElementById('pervichka_ish_do_20').addEventListener('input', PERVIChKA_ISHODYaShchAYa_setter)
    document.getElementById('pervichka_ish_do_50').addEventListener('input', PERVIChKA_ISHODYaShchAYa_setter)
    document.getElementById('pervichka_ish_bolee_50').addEventListener('input', PERVIChKA_ISHODYaShchAYa_setter)

    document.getElementById('Avansovyj_otchet_10_chekov').addEventListener('input', function() {
        setter('Avansovyj_otchet_10_chekov', Avansovyj_otchet_10_chekov_value);
        ITOGO_AVANSOVYE_OTChETY_setter()
        count()
    });

    document.getElementById('Avansovyj_otchet_50_chekov').addEventListener('input', function() {
        setter('Avansovyj_otchet_50_chekov', Avansovyj_otchet_50_chekov_value);
        ITOGO_AVANSOVYE_OTChETY_setter()
        count()
    });

    document.getElementById('AKTY_SVEROK_na_1_kontragenta').addEventListener('input', function() {
        setter('AKTY_SVEROK_na_1_kontragenta', AKTY_SVEROK_na_1_kontragenta_value);
        ITOGO_UChET_GSM_setter()
        count()
    });
    document.getElementById('OSNOVNOE_SREDSTVO').addEventListener('input', function() {
        setter('OSNOVNOE_SREDSTVO', OSNOVNOE_SREDSTVO_value);
        ITOGO_UChET_GSM_setter()
        count()
    });
    // document.getElementById('UChET_GSM').addEventListener('input', function() {
    //     setter('UChET_GSM', UChET_GSM_value);
    //     ITOGO_UChET_GSM_setter()
    //     count()
    // });
    document.getElementById('DOGOVOR_ZAJMA').addEventListener('input', function() {
        setter('DOGOVOR_ZAJMA', DOGOVOR_ZAJMA_value);
        count()
    });
    document.getElementById('DOGOVOR_KREDITA').addEventListener('input', function() {
        setter('DOGOVOR_KREDITA', DOGOVOR_KREDITA_value);
        count()
    });
    document.getElementById('DOGOVOR_LIZINGA').addEventListener('input', function() {
        setter('DOGOVOR_LIZINGA', DOGOVOR_LIZINGA_value);
        count()
    });
    // document.getElementById('VED').addEventListener('input', function() {
    //     setter('VED', VED_value);
    //     count()
    // });
    document.getElementById('PROIZVODSTVO_BAZA').addEventListener('change', PROIZVODSTVO_BAZA_setter)
}); // This is just a sample script. Paste your real code (javascript or HTML) here.
