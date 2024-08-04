function label_create(tagname, attrname, attrvalue, content) {
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname, attrvalue);
    ele.innerHTML = content;
    return ele;
}

function input_create(tagname, attrname1, attrvalue1, attrname2, attrvalue2, name, value) {
    var input_ele = document.createElement(tagname);
    input_ele.setAttribute(attrname1, attrvalue1);
    input_ele.setAttribute(attrname2, attrvalue2);
    if (name) {
        input_ele.setAttribute("name", name);
    }
    if (value) {
        input_ele.setAttribute("value", value);
    }
    return input_ele;
}

function result() {
    console.log('Result function called');
    var res1 = document.getElementById("fname").value;
    var res2 = document.getElementById("lname").value;
    var res3 = document.getElementById("add1").value;
    var res4 = document.getElementById("add2").value;
    var res5 = document.getElementById("pin").value;

    var res6 = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : '';

    //var res7 = document.getElementById("gender").value;

    var res8 = [];
    document.querySelectorAll('input[name="food"]:checked').forEach(function (checkbox) {
        res8.push(checkbox.value);
    });


    // var res9 = document.getElementById("sf").value;
    // var res10 = document.getElementById("cf").value;
    // var res11 = document.getElementById("jf").value;
    // var res12 = document.getElementById("sef").value;

    var res13 = document.getElementById("state").value;
    var res14 = document.getElementById("country").value;

    var new_row = tr_create();
    var data = [res1, res2, res3, res4, res5, res6, res8.join(', '), res13, res14];
    data.forEach(function (cell) {
        var td = td_create();
        td.innerHTML = cell;
        new_row.appendChild(td);
    });
    table.appendChild(new_row);

    // Clear form fields
    document.getElementById("fname").value = '';
    document.getElementById("lname").value = '';
    document.getElementById("add1").value = '';
    document.getElementById("add2").value = '';
    document.getElementById("pin").value = '';

    document.querySelectorAll('input[name="gender"]').forEach(function (radio) {
        radio.checked = false;
    });

    document.querySelectorAll('input[name="food"]').forEach(function (checkbox) {
        checkbox.checked = false;
    });

    document.getElementById("state").selectedIndex = 0;
    document.getElementById("country").selectedIndex = 0;

}

function br_create() {
    var br_ele = document.createElement('br');
    return br_ele;
}

function select_create(tagname, attrname, attrvalue) {
    var select_ele = document.createElement(tagname);
    select_ele.setAttribute(attrname, attrvalue);
    return select_ele;
}

function option_create(tagname, attrname, attrvalue, content) {
    var option_ele = document.createElement(tagname);
    option_ele.setAttribute(attrname, attrvalue);
    option_ele.innerHTML = content;
    return option_ele;
}

function button_create(tagname, attrname2, attrvalue2, methodname, methodvalue, content) {
    var button_ele = document.createElement(tagname);
    button_ele.setAttribute(attrname2, attrvalue2);
    button_ele.setAttribute(methodname, methodvalue);
    button_ele.innerHTML = content;
    return button_ele;
}

function table_create() {
    var table_ele = document.createElement('table');
    return table_ele;
}

function th_create() {
    return document.createElement('th');
}

function td_create() {
    return document.createElement('td');
}

function tr_create() {
    return document.createElement('tr');
}



//textbox
var fname = label_create("label", "for", "fname", "First Name:");
var br_input = br_create("br");
var fname_input = input_create("input", "type", "text", "id", "fname");
document.body.append(fname, br_create(), fname_input, br_input, br_create());

var lname = label_create("label", "for", "lname", "Last Name:");
var br_input = br_create("br");
var lname_input = input_create("input", "type", "text", "id", "lname");
document.body.append(lname, br_create(), lname_input, br_input, br_create());

var add1 = label_create("label", "for", "add1", "Address Line 1:");
var br_input = br_create("br");
var add1_input = input_create("input", "type", "text", "id", "add1");
document.body.append(add1, br_create(), add1_input, br_input, br_create());

var add2 = label_create("label", "for", "add2", "Address Line 2:");
var br_input = br_create("br");
var add2_input = input_create("input", "type", "text", "id", "add2");
document.body.append(add2, br_create(), add2_input, br_input, br_create());

var pin = label_create("label", "for", "pin", "PIN:");
var br_input = br_create("br");
var pin_input = input_create("input", "type", "text", "id", "pin");
document.body.append(pin, br_create(), pin_input, br_input, br_create());

//radio button
var gender = label_create("label", "for", "gender", "Gender:");
var br_input = br_create("br");
var male_input = input_create("input", "type", "radio", "id", "male", "gender", "male");
var male = label_create("label", "for", "male", "Male");

var female_input = input_create("input", "type", "radio", "id", "female", "gender", "female");
var female = label_create("label", "for", "female", "Female");
document.body.append(gender, br_input, br_create(), male_input, male, female_input, female, br_input, br_create());

//checkbox
var food = label_create("label", "for", "food", "Choice of Food:");
// var br_input = br_create("br");
document.body.append(food, br_create());

var nf_input = input_create("input", "type", "checkbox", "id", "nf", "name", "food", "value", "North Indian");
var nf = label_create("label", "for", "nf", "North Indian");
document.body.append(nf_input, nf, br_input, br_create());

var sf_input = input_create("input", "type", "checkbox", "id", "sf", "name", "food", "value", "South Indian");
var sf = label_create("label", "for", "sf", "South Indian");
// var br_input = br_create("br");
document.body.append(sf_input, sf, br_create());

var cf_input = input_create("input", "type", "checkbox", "id", "cf", "name", "food", "value", "Chinese");
var cf = label_create("label", "for", "cf", "Chinese");
// var br_input = br_create("br");
document.body.append(cf_input, cf, br_create());

var jf_input = input_create("input", "type", "checkbox", "id", "jf", "name", "food", "value", "Japanese");
var jf = label_create("label", "for", "jf", "Japanese");
// var br_input = br_create("br");
document.body.append(jf_input, jf, br_create());

var sef_input = input_create("input", "type", "checkbox", "id", "sef", "name", "food", "value", "Sea Food");
var sef = label_create("label", "for", "sef", "Sea Food");
// var br_input = br_create("br");
document.body.append(sef_input, sef, br_create());

//select 
var state = label_create("label", "for", "state", "State:");
// var br_input = br_create("br");
document.body.append(state, br_create());

var select = select_create("select", "id", "state");

var option1 = option_create("option", "value", "empty", "");
var option2 = option_create("option", "value", "KR", "Karnataka");
var option3 = option_create("option", "value", "KL", "Kerala");
var option4 = option_create("option", "value", "MH", "Maharastra");
var option5 = option_create("option", "value", "TN", "TamilNadu");
var br_input = br_create();
select.append(option1, option2, option3, option4, option5);
document.body.append(select, br_input, br_create());


var country = label_create("label", "for", "country", "Country:");
var br_input = br_create("br");
document.body.append(country, br_input, br_create());

var select_country = select_create("select", "id", "country");

var option_c1 = option_create("option", "value", "empty", "");
var option_c2 = option_create("option", "value", "IN", "INDIA");
var option_c3 = option_create("option", "value", "SR", "Sri Lanka");
var option_c4 = option_create("option", "value", "us", "USA");
var option_c5 = option_create("option", "value", "uk", "UK");
var br_input = br_create();
select_country.append(option_c1, option_c2, option_c3, option_c4, option_c5);
document.body.append(select_country, br_input, br_create());

var submit_input = button_create("button", "type", "button", "onclick", "result()", "Submit");
document.body.append(submit_input);

// Create and append the table
var table = table_create();
var header_row = tr_create();
var headers = ["First Name", "Last Name", "Address Line 1", "Address Line 2", "PIN", "Gender", "Food", "State", "Country"];
headers.forEach(function (header) {
    var th = th_create();
    th.innerHTML = header;
    header_row.appendChild(th);
});
table.appendChild(header_row);
document.body.appendChild(table);
