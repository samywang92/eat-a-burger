$(function () {
    $("#submit-btn").on("click", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newOrder = {
            name: $("#order").val().trim(),
            devoured: 0
        };

        // Send the POST request.
        $.ajax("/api/orders", {
            type: "POST",
            data: newOrder
        }).then(
            function () {
                console.log("created new order");
                location.reload();
            }
        );
    });

    $(".served-btn").on("click", function (event) {
        console.log("we in here bois");
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var id = $(this).attr("id");
        var devouredState = {
            devoured: true
        };

        // Send the PUT request.
        $.ajax("/api/orders/" + id, {
            type: "PUT",
            data: devouredState
        }).then(
            function () {
                console.log("Marked as devoured");
                location.reload();
            }
        );
    });

    $("#reset-btn").on("click", function (event) {
        console.log("we in reset");
        // Make sure to preventDefault on a submit event.

        // Send the PUT request.
        $.ajax("/api/orders/", {
            type: "DELETE"
        }).then(
            function () {
                console.log("Tables cleared");
                location.reload();
            }
        );
    });
});