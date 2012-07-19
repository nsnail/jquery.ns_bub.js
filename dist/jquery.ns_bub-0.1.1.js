(function () {
	$.fn.extend({
		bub: function (content, opts) {
			var merge = function (all, segment) {
				var ret = {};
				for (var o in all) {
					ret[o] = segment[o] === undefined ? all[o] : segment[o];
				}
				return ret;
			};
			var defaults = {
				color: '#e6e6e6',
				padding: '10px',
				radius: 5,
				shadow: '5px 5px 5px #ccc',
				left: 0,
				top: 0,
				arrow_size: 15,
				arrow_left: 15,
				click_blank_hide: true
			};
			opts = merge(defaults, opts || {});
			this.each(function () {
				if ($(this).data().buber) {
					$(this).un_bub();
				}
				var bub_box = $('<div class="ns_bub_box" style="\
					position:absolute;\
					z-index:2147483647;\
					left:' + ($(this).offset().left - opts.arrow_left + opts.left) + 'px;\
					top:' + ($(this).offset().top + $(this).outerHeight() + opts.top) + 'px;\
					">\
					\
					\
					\
					\
					\
					\
					\<div class="ns_bub_box-arrow" style="\
					border-top:transparent ' + opts.arrow_size + 'px dashed;\
					border-left:' + opts.color + ' ' + opts.arrow_size + 'px solid;\
					position:absolute;\
					left:' + opts.arrow_left + 'px;\
					">\
					</div>\
					<div class="ns_bub_wrapper" style="\
					position:absolute;\
					top:' + (opts.arrow_size - opts.radius) + 'px;\
					box-shadow:' + opts.shadow + ';\
					padding:' + opts.padding + ';\
					background:' + opts.color + ';\
					border-radius:' + opts.radius + 'px;\
					"></div></div>');

				$('body').append(bub_box);
				$(this).data().buber = bub_box;
				$(this).attr('ns_bub_binder', opts.click_blank_hide);
				if (content instanceof $) {
					content = content.clone();
					content.show();
				}
				bub_box.find('.ns_bub_wrapper').append(content);
			});
		},
		un_bub: function () {
			this.each(function () {
				var bub_box = $(this).data().buber;
				if(bub_box === undefined) return;
				delete $(this).data().buber;
				bub_box.remove();
			});
		}
	});
	$(function () {
		$(document).click(function (e) {
			e = e || window.event;
			var src = e.target || e.srcElement;
			if ($(src).attr('class') == 'ns_bub_box' ||
			 $(src).attr('class') == 'ns_bub_wrapper' ||
			 $(src).attr('ns_bub_binder') !== undefined
			 ) return;
			$('*[ns_bub_binder=true]').un_bub();
		});
	});
})(window);
