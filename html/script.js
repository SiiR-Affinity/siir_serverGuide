let activeCard = null

Display = function(bool) {
	if (bool) {
		setTimeout(function() {
			var $container = $(".container");
			$container.show(200)
			$.when($container.fadeIn(200)).done(function() {
				$(".container").fadeIn(200);
			});
		});
	} else {
		setTimeout(function() {
			var $container = $(".container");
			$.when($container.fadeOut(200)).done(function() {
				$container.hide()
			});
		});
	}
}

window.addEventListener('message', function(event) {
    if (event.data.message == 'enableui') {
        Display(true)
    } else if (event.data.message == 'closeui') {
        Display(false)
    } else if (event.data.message == 'keybinds') {
        $('.keybinds').slideToggle('slow')
    }
})

$('#close').on('click', function() {
    $.post('https://siir_serverGuide/close', JSON.stringify({}));
})

$('#card-cta-keyboard').on('click', function() {
    $('.keybinds').toggle('fast', 'swing')
})

$("[id^=card-cta-]").click(function() {
    const clickedEl = $(this).prop('id');
    const id = clickedEl.substr(clickedEl.length - 1);
    let cardSel = document.getElementById('card-' + id + '-text');
    
    ToggleText(cardSel)
    activeCard = cardSel;
});

document.onkeyup = function (data) {
    if (data.which == 27) {
        $.post('https://siir_serverGuide/close', JSON.stringify({}));
    }
}

function ToggleText(cardSel) {
    if (activeCard != '') {
        $(activeCard).toggle();
        $(cardSel).toggle();
    }
}