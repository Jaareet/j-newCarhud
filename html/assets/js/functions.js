function startUpdatingHud(show, { speed, fuel, gears }) {
    show ? $('.carhud').fadeIn(() => {
        $('.carhud .km-text').text(('000' + Math.round(speed)).substr(-3));
        $('.carhud .fuel span').text(`${Math.round(fuel)} L`);
        $('.carhud .gears span').text(Math.round(gears));
    }) : $('.carhud').fadeOut();
}