jQuery SliderTabs
=================

SliderTabs is a flexible jQuery plugin for sliding tabs.

Why?
----

The goal of SliderTabs isn't to pollute the jQuery world with another tabs plugin, but to solve the problem of having too many tabs in one area. It does fall back to a regular tab layout when no overflow ocurrs. I made this plugin because currently the only solutions to this problem are paid scripts. Below is a screenshot of the default theme.

![Default theme](http://lopatin.github.com/sliderTabs/screen1.PNG)

### Features
- Fully customizable with CSS
- Multiple panel transition effects
- Auto height adjustment
- Responsive design to spontaneous size changes
- Multiple instances
- Cross browser compatible

### To do
- Vertical tabs
- AJAX loading
- Auto play


Setup
-----

Only 3 files are required to use SliderTabs. One of which is jQuery so in the `<head>` section of your website, include the jQuery and SliderTabs scripts

	<script src="http://code.jquery.com/jquery.min.js"></script>
  	<script src="jquery.sliderTabs.js"></script>

As well as the jquery.sliderTabs.css stylesheet included in the styles folder

	<link rel="stylesheet" href="styles/jquery.sliderTabs.css">

Now you're ready to build your first SliderTab!

Usage
-----

SliderTabs is pretty easy to use. First create a `<div>` element with a `<ul>` containing x abount of tabs, and x `<div>` elements after that as the associated panels. Note that the `href` attribute of the tab links must be of the format `#Id-of-panel-div` to link tabs to their content panels. The complete HTML markup should look similar to below. 

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

Then call `sliderTabs()` on the div you just created like below.

	$("#mySliderTabs").sliderTabs();

Options
-------

Throw in an options object to customize the tab slider. The defaults and explanations are shown below.

	$("#mySliderTabs").sliderTabs({
		arrowWidth: 35,					// Width of tab arrows in pixels
		classes: {						// Custom classes to attach
			leftArrow: '',				//  - Left arrow
			panel: '',					//  - All content panels
			panelActive: '',			//  - The selected content panel
			panelsContainer: '',		//  - Parent div containing all hidden and shown panels
			rightArrow: '',				//  - Right arrow
			tab: '',					//  - All tabs (<li> elements)
			tabActive: '',				//  - The selected tab
			tabsList: '',				//  - The list of tabs (<ul> element)
		},
		defaultTab: 1,					// Index of the default tab OR the jQuery object of the <li> element
		height: '',						// Integer or '': Height in pixels of the whole widget. '' means fluid height
		position: "top",				// 'top' or 'bottom': Orientation of the tabs relative to the content
		tabHeight: 30,					// Height of the tabs bar and arrows in pixels
		tabSliders: true,				// Use sliding tabs. If false, overflow tabs are hidden
		tabSlideLength: 100,			// Length in pixels to slide tabs when an arrow is clicked
		tabSlideSpeed: 200,				// Time (in milliseconds) of the tab sliding animation
		transition: 'slide',			// 'slide' or 'fade': The transition to use when changing panels
		transitionSpeed: 200,			// Time (in milliseconds) of the transition animation
		width: ''						// Width in pixels of the whole widget
	});
