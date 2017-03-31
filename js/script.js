output = "<span class='number'>&ensp;1</span>   Hi! My name is <span class='title'><a href='http://mubaris.me' target='_blank'>Mubaris NK</a>.</span><br>\
  <span class='number'>&ensp;2</span>   <span class='second'>I am a student at <span class='title'><a href='https://iiita.ac.in' target='_blank'>Indian Institute of Information Technology, Allahabad</a>.</span></span><br>\
  <span class='number'>&ensp;3</span>   <span class='third'>Born in <span class='title'><a href='https://en.wikipedia.org/wiki/Malappuram' target='_blank'>Malappuram</a></span>, Kerala.</span><br>\
  <span class='number'>&ensp;4</span><br>\
  <span class='number'>&ensp;5</span>   <span class='white'>======================================</span><br>\
  <span class='number'>&ensp;6</span><br>\
  <span class='number'>&ensp;7</span>   I ❤ <span class='title'><a href='https://opensource.com/resources/what-open-source' target='_blank'>Open Source</a></span> Technologies.<br>\
  <span class='number'>&ensp;8</span>   <span class='second'>My favorite technologies are <span class='title'>Node.js</span>, <span class='title'>Python</span>, and <span class='title'>Markdown.</span></span><br>\
  <span class='number'>&ensp;9</span><br>\
  <span class='number'>10</span>   <span class='third'>//Extremely in love with <span class='second'>Food</span>, <span class='second'>Music</span> and <span class='second'>The Flash</span></span><br>\
  <span class='number'>11</span>   <span class='third'>//I like to consider myself as a <span class='second'>Meta-Human</span></span><br>\
  <span class='number'>12</span><br>\
  <span class='number'>13</span><br>\
  <span class='number'>14</span>   <span class='pure-white'><a href='./blog'>Visit_My_Blog()</a></span><br>\
  <span class='number'>15</span>   <span class='pure-white'><a href='./contact'>Contact_Me()</a></span>"

contact = "<span class='number'>&ensp;1</span>  <a href='https://github.com/mubaris' target='_blank'>Github</a><br>\
  <span class='number'>&ensp;2</span>  <span class='second'><a href='https://facebook.com/mubaris.hassan.7' target='_blank'>Facebook</a></span><br>\
  <span class='number'>&ensp;3</span>  <span class='third'><a href='https://twitter.com/MubarisHassan' target='_blank'>Twitter</a></span><br>\
  <span class='number'>&ensp;4</span>  <a href='mailto:mubarishassannk@gmail.com'>Mail Me</a><br>\
  <span class='number'>&ensp;5</span>  <span class='second'><a href='https://www.linkedin.com/in/mubaris-hassan/' target='_blank'>LinkedIn</a></span><br>\
  <span class='number'>&ensp;6</span>  <span class='third'><a href='https://instagram.com/MubarisHassan' target='_blank'>Instagram</a></span><br>\
  <span class='number'>&ensp;7</span><br>\
  <span class='number'>&ensp;8</span><br>\
  <span class='number'>&ensp;9</span> <span class='pure-white'><a href='http://mubaris.github.io'>Go_Home()</a></span>"

document.addEventListener("DOMContentLoaded", function() {
    Typed.new(".content", {
      strings: [output],
      typeSpeed: -50,
      showCursor: false
    });
});

document.addEventListener("DOMContentLoaded", function() {
    Typed.new(".contact", {
      strings: [contact],
      typeSpeed: -20,
      showCursor: false
    });
});
