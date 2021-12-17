function onToggleSidebar(event, status = 'hide') {
    event.preventDefault();

    if (status === 'hide') {
        $('.sidebar').addClass('hide-sidebar');
    } else {
        $('.sidebar').removeClass('hide-sidebar');
    }
}
