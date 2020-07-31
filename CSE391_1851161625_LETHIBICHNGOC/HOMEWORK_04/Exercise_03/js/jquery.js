$(document).ready(function () {
    $("#vung-text").keypress(function () { 
        var x = $("#vung-text").val();
        $(".active").text(x);
              
    });
    $("#btn-change").click(function () { 
        var sValue = $("select").val();
        switch(parseInt(sValue)){
            case 1:
                $("p").removeClass();
                $("p").addClass("s1");
                break;
            case 2:
                $("p").removeClass();
                $("p").addClass("s2");
                break;
            case 3:
                $("p").removeClass();
                $("p").addClass("s3");
                break;
            case 4:
                $("p").removeClass();
                $("p").addClass("s4");
                break;
        }
    });

    $("#btn-new").click(function () { 
        $("p").removeClass("active");
        var $newp = $("<p/>")   
                 .addClass("active")  
                 .html("<p></p>");

        $("#story").append($newp);     
        $('#vung-text').val('').change()
        
        
    });
});