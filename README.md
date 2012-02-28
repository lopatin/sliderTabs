jQuery SliderTabs
=================

SliderTabs is a flexible jQuery plugin for sliding tabs.

Why?
----

The goal of SliderTabs isn't to pollute the jQuery world with another tabs plugin but to create the possibility to build tabs, slideshows, featured content sliders, and more with one plugin. I hope this will be the last plugin you'll need to create slider type widgets. It's a pretty new project so please let me know of any bugs or suggestions on the issues page!

### Features
- Fully customizable with CSS
- Multiple panel transition effects
- Auto height adjustment
- Responsive design to spontaneous size changes
- Multiple instances
- Cross browser compatible
- Autoplay
- Mousewheel integration

### To do
- Vertical tabs
- AJAX loading

Setup
-----

Only 3 files are required to use SliderTabs. One of which is jQuery so in the `<head>` section of your website, include the jQuery and SliderTabs scripts

  <script src="http://code.jquery.com/jquery.min.js"></script>
    <script src="jquery.sliderTabs.min.js"></script>

As well as the jquery.sliderTabs.css stylesheet included in the styles folder

  <link rel="stylesheet" href="styles/jquery.sliderTabs.min.css">

Now you're ready to build your first SliderTab!

Usage
-----

[More Examples](http://lopatin.github.com/sliderTabs/#getting-started "More SliderTabs Examples")

SliderTabs is pretty easy to use. First create a `<div>` element with a `<ul>` containing x amount of tabs, and x `<div>` elements after that as the associated panels. Note that the `href` attribute of the tab links must be of the format `#Id-of-panel-div` to link tabs to their content panels. The complete HTML markup should look similar to below. 

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


[View all options.](http://lopatin.github.com/sliderTabs/#options "View all options.")