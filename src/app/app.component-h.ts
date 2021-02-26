function refreshAllScripts() {
    // //AOS (Animate On Scroll - animates elements into view while scrolling down) -->
    // scriptLoader("assets/js/aos.js")

    // //Clipboard (copies content from browser into OS clipboard) -->
    // scriptLoader("assets/js/clipboard.min.js")

    // //Fancybox (handles image and video lightbox and galleries) -->
    // scriptLoader("assets/js/jquery.fancybox.min.js")

    // //Flatpickr (calendar/date/time picker UI) -->
    // scriptLoader("assets/js/flatpickr.min.js")

    // //Flickity (handles touch enabled carousels and sliders) -->
    // scriptLoader("assets/js/flickity.pkgd.min.js")

    // //Ion rangeSlider (flexible and pretty range slider elements) -->
    // scriptLoader("assets/js/ion.rangeSlider.min.js")

    // //Isotope (masonry layouts and filtering) -->
    // scriptLoader("assets/js/isotope.pkgd.min.js")

    // //jarallax (parallax effect and video backgrounds) -->
    // scriptLoader("assets/js/jarallax.min.js")
    // scriptLoader("assets/js/jarallax-video.min.js")
    // scriptLoader("assets/js/jarallax-element.min.js")

    // //jQuery Countdown (displays countdown text to a specified date) -->
    // scriptLoader("assets/js/jquery.countdown.min.js")

    // //jQuery smartWizard facilitates steppable wizard content -->
    // scriptLoader("assets/js/jquery.smartWizard.min.js")

    // //Plyr (unified player for Video, Audio, Vimeo and Youtube) -->
    // scriptLoader("assets/js/plyr.polyfilled.min.js")

    // //Prism (displays formatted code boxes) -->
    // scriptLoader("assets/js/prism.js")

    // //ScrollMonitor (manages events for elements scrolling in and out of view) -->
    // scriptLoader("assets/js/scrollMonitor.js")

    // //Smooth scroll (animation to links in-page)-->
    // scriptLoader("assets/js/smooth-scroll.polyfills.min.js")

    // //SVGInjector (replaces img tags with SVG code to allow easy inclusion of SVGs with the benefit of inheriting colors and styles)-->
    // scriptLoader("assets/js/svg-injector.umd.production.js")

    // //TwitterFetcher (displays a feed of tweets from a specified account)-->
    // scriptLoader("assets/js/twitterFetcher_min.js")

    // //Typed text (animated typing effect)-->
    // scriptLoader("assets/js/typed.min.js")


    scriptLoader("assets/js/theme.js")

}


function scriptLoader(path, callback: any = "") {
    var script = document.createElement('script');
    script.type = "text/javascript";
    script.async = true;
    script.src = path;
    script.onload = function () {
        if (typeof (callback) == "function") {
            callback();
        }
    }
    try {
        var scriptOne = document.getElementsByTagName('script')[0];
        scriptOne.parentNode.insertBefore(script, scriptOne);
    }
    catch (e) {
        document.getElementsByTagName("head")[0].appendChild(script);
    }
}






// "assets/js/aos.js"
// "assets/js/clipboard.min.js"
// "assets/js/jquery.fancybox.min.js"
// "assets/js/flatpickr.min.js"
// "assets/js/flickity.pkgd.min.js"
// "assets/js/ion.rangeSlider.min.js"
// "assets/js/isotope.pkgd.min.js"
// "assets/js/jarallax.min.js"
// "assets/js/jarallax-video.min.js"
// "assets/js/jarallax-element.min.js"
// "assets/js/jquery.countdown.min.js"
// "assets/js/jquery.smartWizard.min.js"
// "assets/js/plyr.polyfilled.min.js"
// "assets/js/prism.js"
// "assets/js/scrollMonitor.js"
// "assets/js/smooth-scroll.polyfills.min.js"
// "assets/js/svg-injector.umd.production.js"
// "assets/js/twitterFetcher_min.js"
// "assets/js/typed.min.js"
// "assets/js/theme.js"