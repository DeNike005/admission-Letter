$(document).ready(function () {
    $("#formOne").submit(function (event) {
        event.preventDefault();
        let firstName = $("#firstName").val();
        let secondName = $("#secondName").val();
        let institutionName = $("#institutionName").val();
        let degree = $("#degree").val();
        let programName = $("#programName").val();
        let startDate = $("#startDate").val();
        let gender = $("#gender").val();
        let country = $("#country").val();
        $(".container1").toggle();
        $("input").val("");


        $(".firstName").text(firstName);
        $(".secondName").text(secondName);
        $(".institutionName").text(institutionName);
        $(".degree").text(degree);
        $(".programName").text(programName);
        $(".startDate").text(startDate);
        $(".gender").text(gender);
        $(".country").text(country);
        $("#container2").show();
    })
    $(".btn-success").click(function(){
        $("#container2").hide();
        $(".container1").show();
    })
})