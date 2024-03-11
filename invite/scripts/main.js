$(document).ready(function () {
	AOS.init({});
}),
	$('a#album_photos').click(function (t) {
		window.open('https://photos.app.goo.gl/Z7wHCHeupXanPSJdA', '_blank');
	}),
	$('a.smooth-scroll').click(function (t) {
		if (
			location.pathname.replace(/^\//, '') ==
				this.pathname.replace(/^\//, '') &&
			location.hostname == this.hostname
		) {
			var e = $(this.hash);
			(e = e.length ? e : $('[name=' + this.hash.slice(1) + ']')).length &&
				(t.preventDefault(),
				$('html, body').animate(
					{ scrollTop: e.offset().top },
					1e3,
					function () {
						var t = $(e);
						if ((t.focus(), t.is(':focus'))) return !1;
						t.attr('tabindex', '-1'), t.focus();
					}
				));
		}
	});
var activeFilter = 'all';
function filterItems(t) {
	t !== activeFilter &&
		((activeFilter = t),
		$('.ww-gallery .card').each(function () {
			var e = $(this),
				n = e.data('groups'),
				l = !1;
			if ('all' === t) l = !0;
			else for (var a = 0; a < n.length; a++) n[a] === t && (l = !0);
			e.fadeOut(400),
				setTimeout(function () {
					l && !e.is(':visible') && e.fadeIn(400);
				}, 500);
		}));
}
$('.ww-filter-button').on('click', function (t) {
	$('.ww-filter-button').removeClass('btn-primary'),
		$('.ww-filter-button').addClass('btn-outline-primary');
	var e = $(this);
	e.removeClass('btn-outline-primary'),
		e.addClass('btn-primary'),
		filterItems(e.data('filter')),
		t.preventDefault();
}),
	$(document).on('click', '[data-toggle="lightbox"]', function (t) {
		t.preventDefault(), $(this).ekkoLightbox();
	});
