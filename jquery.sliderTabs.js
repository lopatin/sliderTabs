(function( $ ){
	/*
	 * The sliderTabs tabs class
	 */
	$.sliderTabs = function(container, options){
		var plugin = this;
		var $container = $(container);

		var defaults = {
			arrowWidth: 35,
			classes: {
				leftArrow: '',
				panel: '',
				panelActive: '',
				panelsContainer: '',
				rightArrow: '',
				tab: '',
				tabActive: '',	
				tabsList: '',
			},
			defaultTab: 1,
			height: '',
			position: "top",
			tabHeight: 30,
			tabSliders: true,
			tabSlideLength: 100,
			tabSlideSpeed: 200,
			transition: 'slide',
			transitionSpeed: 200,
			width: ''
		};

		var $tabsList,
			$contentDivs,
			$tabsListContainer,
			$tabsListWrapper,
			$contentDivsContainer,
			$leftArrow,
			$rightArrow;
		var selectLock = false;

		plugin.init = function(){
			plugin.settings = $.extend({}, defaults, options);
			$container.addClass('ui-slider-tabs');

			

			/* 
			 * Rebuild structure of container
			 */
			$contentDivs = $container.children("div").addClass('ui-slider-tab-content').remove();
			
			// Tabs
			$tabsList = $container.children("ul").addClass('ui-slider-tabs-list').remove();
			$tabsList.children("li").remove().appendTo($tabsList);
			$tabsListWrapper = $("<div class='ui-slider-tabs-list-wrapper'>");
			$tabsListContainer = $("<div class='ui-slider-tabs-list-container'>").append($tabsList).appendTo($tabsListWrapper);
			$tabsListContainer.find('li').css('height', plugin.settings.tabHeight+2);
			$tabsListContainer.find('li a').css('height', plugin.settings.tabHeight+2);
			
			// Arrows
			$leftArrow = $("<a href='#' class='ui-slider-left-arrow'><div></div></a>").css({
				'width': plugin.settings.arrowWidth,
				'height': plugin.settings.tabHeight+2
			}).appendTo($tabsListContainer).click(function(e){
				slideTabs('right', plugin.settings.tabSlideLength);
				return false;
			});
			$rightArrow = $("<a href='#' class='ui-slider-right-arrow'><div></div></a>").css({
				'width': plugin.settings.arrowWidth,
				'height': plugin.settings.tabHeight+2
			}).appendTo($tabsListContainer).click(function(e){
				slideTabs('left', plugin.settings.tabSlideLength);
				return false;
			});

			// Content
			$contentDivsContainer = $("<div class='ui-slider-tabs-content-container'>").append($contentDivs);

			if(plugin.settings.position == 'bottom')
				$container.append($contentDivsContainer).append($tabsListWrapper.addClass('bottom'));
			else
				$container.append($tabsListWrapper).append($contentDivsContainer);
			resizeTabsList();

			if(plugin.settings.width != '')
				$container.width(parseInt(plugin.settings.width));
			if(plugin.settings.height != '')
				$contentDivsContainer.height(parseInt(plugin.settings.height));
			

			// Select default tab
			plugin.selectTab(plugin.settings.defaultTab);
			slideTabs('left', 0);

			reorderPanels();

			// When tab is clicked
			$container.delegate('.ui-slider-tabs-list li a', 'click', function(){
				if(!$(this).parent().hasClass('selected') && !selectLock){
					selectLock = true;
					plugin.selectTab($(this).parent());
				}
				return false;
			});

			// Set classes
			$.each(plugin.settings.classes, function(i, c){
				switch(i){
					case 'leftArrow': 
						$leftArrow.addClass(c);
						break;
					case 'rightArrow':
						$rightArrow.addClass(c);
						break;
					case 'panel':
						$contentDivs.addClass(c);
						break;
					case 'panelsContainer':
						$contentDivsContainer.addClass(c);
						break;
					case 'tab':
						$tabsList.find('li').addClass(c);
						break;
					case 'tabsList':
						$tabsList.addClass(c);
						break;
					default:
						break;
				}
			});
		}

		/*
		 * Public methods
		 */

		plugin.selectTab = function(tab){
			var $clicked = (typeof tab === 'number') ? $tabsList.children("li:nth-child("+tab+")") : tab;
			var targetId = ($clicked.find('a').attr('href')).substr(1);
			var $targetPanel = $contentDivsContainer.children("#"+targetId);

			resizeContentContainer($targetPanel);

			var direction = ($tabsList.find('.selected').index() < $clicked.index()) ? 'left' : 'right';
			$tabsList.children().removeClass('selected').removeClass(plugin.settings.classes.tabActive);
			$clicked.addClass('selected').addClass(plugin.settings.classes.tabActive);
			hidePanel($contentDivsContainer.children(":visible"), direction);
			showPanel($targetPanel);
		};

		/*
		 * Private methods
		 */
		
		var slideTabs = function(direction, length){
			var margin = parseInt($tabsList.css('margin-left'));
			var newMargin = margin;
			if(direction=='right') newMargin += length;
			else if(direction=='left') newMargin -= length;

			$leftArrow.removeClass('edge');
			$rightArrow.removeClass('edge');

			if(newMargin >= 0) {
				newMargin = 0;
				$leftArrow.addClass('edge');
			}
			else if(newMargin <= minMargin){
				newMargin = minMargin;
				$rightArrow.addClass('edge');
			}

			$tabsList.animate({'margin-left': newMargin}, plugin.settings.tabSlideSpeed);
		};

		var reorderPanels = function(){
			// Position content divs
			if(plugin.settings.transition == 'slide')
				$tabsList.children('li').each(function(index, el){
					var selectedIndex = $tabsList.children('.selected').index(),
						thisIndex = $(el).index();
					var panel = $contentDivsContainer.children('#'+$(el).find('a').attr('href').substr(1));
					if(selectedIndex < thisIndex)
						panel.css({left: $contentDivsContainer.width()+'px'});
					else if(selectedIndex > thisIndex)
						panel.css({left: '-'+$contentDivsContainer.width()+'px'});
					else
						panel.addClass(plugin.settings.classes.panelActive);
				});
			
			if(plugin.settings.transition == 'fade')
				$tabsList.children('li').each(function(index, el){
					var selectedIndex = $tabsList.children('.selected').index(),
						thisIndex = $(el).index();
					var panel = $contentDivsContainer.children('#'+$(el).find('a').attr('href').substr(1));
					if(selectedIndex != thisIndex)
						panel.css({opacity: 0});
					else
						panel.addClass(plugin.settings.classes.panelActive);
				});
		};
		
		var panelAnimationCSS = function(width){
			return {
					hide: {
						slideleft: {
							left: '-'+width+'px'
						},
						slideright: {
							left: width+'px'
						},
						fade: {
							opacity: 0
						}
					},
					show: {
						slide: {
							left: 0
						},
						fade: {
							opacity: 1
						}
					}
				}
		};
		
		var hidePanel = function(panel, direction){
			if(plugin.settings.transition == 'slide')
				var trans = 'slide'+direction;
			else var trans = plugin.settings.transition;
			panel.animate(panelAnimationCSS($contentDivsContainer.width())['hide'][trans], plugin.settings.transitionSpeed, function(){
				panel.hide();
				panel.removeClass(plugin.settings.classes.panelActive);
				selectLock = false;
				reorderPanels();
			});
		};
		var showPanel = function(panel){
			panel.show();
			panel.addClass(plugin.settings.classes.panelActive);
			panel.animate(panelAnimationCSS($contentDivsContainer.width())['show'][plugin.settings.transition], plugin.settings.transitionSpeed, function(){
				selectLock = false;
				reorderPanels();
			});
		};

		var hideArrows = function(){
			$leftArrow.hide();
			$rightArrow.hide();
			$tabsListContainer.css('margin', '0');
		};
		var showArrows = function(){
			if(!plugin.settings.tabSliders)
				return;
			$leftArrow.show();
			$rightArrow.show();
			$tabsListContainer.css('margin', '0 '+plugin.settings.arrowWidth+'px');
		};

		var resizeContentContainer = function(target){
			if(plugin.settings.height == '')
				$contentDivsContainer.animate({
					height: actualHeight(target)
				}, 200);
		};

		var resizeTabsList = function(){
			var width = 0;
			$tabsList.children().each(function(index, element){
				width += $(element).outerWidth();
			});
			$tabsList.width(width);

			if($tabsListContainer.width() < width && plugin.settings.tabSliders){
				showArrows();
				minMargin = $tabsListContainer.width() - width;
			}
			else hideArrows();
		}

		// Get height of a hidden element
		var actualHeight = function(element){
			var prevCSS = {
				'display': element.css('display'),
				'left': element.css('left'),
				'position': element.css('position')
			};
			element.css({
				'display': 'normal',
				'left': -5000,
				'position': 'absolute'
			});
			var height = element.height();
			element.css(prevCSS);
			return height;
		};
		

		plugin.init();
	};

	/*
	 * Handle input. Call public functions and initializers
	 */
	$.fn.sliderTabs = function( data ) {
		return this.each(function(){
			var _this = $(this),
				plugin = _this.data('sliderTabs');
			// Method calling logic
		    if (!plugin) {
				plugin = new $.sliderTabs(this, data);
				_this.data('sliderTabs', plugin);
				return plugin;
			}
			if (plugin.methods[data]){
				return plugin.methods[ data ].apply( this, Array.prototype.slice.call( arguments, 1 ));
			}
		});
  	};
})( jQuery );