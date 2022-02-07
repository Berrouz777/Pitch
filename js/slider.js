const swiper = new Swiper(".sliders", {
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        formatFractionCurrent: addZero,
        formatFractionTotal: addZero,
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' +
                ' — ' +
                '<span class="' + totalClass + '"></span>';
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

function addZero(num) {
    return (num > 9) ? num : '0' + num;
}

export default { swiper };
