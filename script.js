
$(document).ready(function () {
    $('#accordion .card-header').click(function () {
        var current = $(this);
        var isActive = current.hasClass('active');

        // Close all cards
        $('#accordion .card-header').removeClass('active').find('.icon').text('+');
        $('#accordion .card-body').slideUp();

        // If the clicked card was not active, open it
        if (!isActive) {
            current.addClass('active');
            current.find('.icon').text('-');
            current.next().slideDown();
        }
    });

    // Close the card if it's already active and clicked again
    $('#accordion .card-header.active').click(function () {
        $(this).removeClass('active').find('.icon').text('+');
        $(this).next().slideUp();
    });
});
