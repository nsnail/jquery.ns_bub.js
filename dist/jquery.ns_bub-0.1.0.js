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
				radius: '5px',
				shadow: 'none',
				left: 0,
				top: 0,
				arrow_size: '15px',
				arrow_direct: ['top', 'left'],
				click_blank_hide: true
			};
			opts = merge(defaults, opts || {});
			this.each(function () {
				if ($(this).data().buber) {
					$(this).un_bub();
				}
				var bub_box = $('<div class="ns_bub_box" style="\
					border-' + opts.arrow_direct[0] + ':transparent ' + opts.arrow_size + ' dashed;\
					border-' + opts.arrow_direct[1] + ':' + opts.color + ' ' + opts.arrow_size + ' solid;\
					position:absolute;\
					border-' + (opts.arrow_direct[0] == 'top' ? 'bottom' : 'top') + '-' + opts.arrow_direct[1] + '-radius:' + opts.radius + ';\
					left:' + ($(this).offset().left + opts.left) + 'px;\
					top:' + ($(this).offset().top + $(this).outerHeight() + opts.top) + 'px;\
					">\
					\
					\
					\
					\
					\
					\<div class="ns_bub_wrapper" style="\
					box-shadow:' + opts.shadow + ';\
					padding:' + opts.padding + ';\
					background:' + opts.color + ';\
					border-top-' + (opts.arrow_direct[1] == 'left' ? 'right' : 'left') + '-radius:' + opts.radius + ';\
					border-bottom-' + (opts.arrow_direct[1] == 'left' ? 'right' : 'left') + '-radius:' + opts.radius + ';\
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
