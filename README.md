jQuery SliderTabs
=================

Slider Tabs is a flexible jQuery plugin for sliding tabs.

Usage
-----

SliderTabs is pretty easy to use. First create a `<div>` element with a `<ul>` containing x abount of tabs, and x `<div>` elements after that as the associated panels. The complete HTML markup should look similar to below. 

	<div id="mySliderTabs">
        <ul>
          <li><a href="#theOffice">The Office</a></li>
          <li><a href="#parks">Parks and Recreation</a></li>
          <li><a href="#southPark">South Park</a></li>
        </ul>
        <div id="theOffice">
          <h3>Info about The Office</h3>
          <p>Aoapsinasof asghais fnasof ws9ufh isujn asiufhasiufasdf aoisufd asfdhasifd usdhf saiudfh</p>
          <p>Aoapsinasof asghais fnasof ws9ufh isujn asiufhasiufasdf aoisufd asfdhasifd usdhf saiudfh</p>
          <p>Aoapsinasof asghais fnasof ws9ufh isujn asiufhasiufasdf aoisufd asfdhasifd usdhf saiudfh</p>
        </div>
        <div id="parks">
          <h3>Info about Parks and Recreation</h3>
          <p>Aoapsinasof asghais fnasof ws9ufh isujn asiufhasiufasdf aoisufd asfdhasifd usdhf saiudfh</p>
        </div>
        <div id="southPark">
          <h3>Info about South Park</h3>
          <p>Aoapsinasof asghais fnasof ws9ufh isujn asiufhasiufasdf aoisufd asfdhasifd usdhf saiudfh</p>
        </div>
    </div>

Then call `sliderTabs()` on the div you just created like so:

	$("#mySliderTabs").sliderTabs();

or specify options to customize the tab slider. The defaults are shown below.

	$("#mySliderTabs").sliderTabs({
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
		transition: 'fade',
		transitionSpeed: 200,
		width: ''
	});