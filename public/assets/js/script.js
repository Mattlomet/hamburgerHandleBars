console.log("hello")

    $("#submitButton").on("click", function (event) {
        console.log(event);
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burgerName").val().trim(),
            devoured: 1
        };
        
        $.post("/add", newBurger)
            .then(function (data) {
                console.log(data);
                alert("Adding burger...");
                location.reload('/');
            });

        $("#name").val("");

    });


    $(".eatenValue").on("click",function(event){
        console.log("hello");
        console.log($(this).data("id"));
        console.log($(this).data("newsleep"));
        var newVal = 0;

        if ($(this).data("newsleep")==false) {
            newVal = 1;
            $(this).data("newsleep")= 1;
        } else if ($(this).data("newsleep")==true){
            newVal = 0 ;
            $(this).data("newsleep") = 0;

        }
        console.log(newVal);
             $.ajax({
                 url: "/change",
                 type:"PUT",
                 data: {
                    trueFalse : newVal,
                    id: $(this).data("id")
                    }
             }).then(function (data) {
                 console.log(data);
                 alert("updating burger...");
                 location.reload('/');
             });
    });