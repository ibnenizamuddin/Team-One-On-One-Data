const Techs = [
    { "empid": "2632", "firstName": "Ehsan", "lastName": "Shaikh", "Designation": "Team Lead" },
    { "empid": "79", "firstName": "Tech", "lastName": "Name", "Designation": "Manager" },
    { "empid": "3000", "firstName": "World", "lastName": "Good", "Designation": "Mentor" }
]
const formdiv = document.getElementById("details");
const employeeid = document.getElementById("employeeid");
const employeename = document.getElementById("employeename");
const actionitem = document.getElementById("actionitem");
const concern = document.getElementById("concern");
const comment = document.getElementById("comment");

function onLoadForm() {

    for (x in Techs) {
        let backgroundcolor = '';
        localstorageitems = JSON.parse(localStorage.getItem(Techs[x].empid));
        if (localstorageitems == null) {
            console.log("Error")

        }
        else {
            if (localstorageitems.savedconcern === "1") {
                backgroundcolor = 'background-color:green;';
            }
            if (localstorageitems.savedconcern === "2") {
                backgroundcolor = 'background-color:red;';
            }
            if (localstorageitems.savedconcern === "3") {
                backgroundcolor = 'background-color:whitesmoke;';
            }
        }

        document.getElementById("main").innerHTML += '<div class="card" id="' + Techs[x].empid + '" onclick=onClickVisible(' + Techs[x].empid + ') + style="' + backgroundcolor + '"> <img src="' + Techs[x].empid + '.jpg" alt="profilepic"> <div class="description" ><label class="Name">' + Techs[x].firstName + ' ' + Techs[x].lastName + '</label> <label class="Designation">' + Techs[x].Designation + '</label><label class="empid">' + Techs[x].empid + '</label></div></div >';


    }
}


function onClickVisible(id) {
    formdiv.classList.add('bg-active');
    data = localStorage.getItem(id);
    data = JSON.parse(data);
    employeeid.value = id;
    employeename.value = data.savedemployeename;
    actionitem.value = data.savedctionitem;
    concern.value = data.savedconcern;
    comment.value = data.savedcomment;
}

function hideModal() {
    formdiv.classList.remove('bg-active');

}

function saveDetail() {
    savedemployeeid = employeeid.value;
    savedemployeename = employeename.value;
    savedctionitem = actionitem.value;
    savedconcern = concern.value;
    savedcomment = comment.value;
    detailsJson = { savedemployeename, savedctionitem, savedconcern, savedcomment };
    localStorage.setItem(savedemployeeid, JSON.stringify(detailsJson));
    hideModal();
    location.reload();
}


onLoadForm();