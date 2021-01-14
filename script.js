function changepage(page){
  switch (page) {
    case 'about':
      document.getElementById("linkcontents").innerHTML = `
      I am currently working solo on multiple projects. I have been doing frontend web development for 7 years and backend development for only 1 year.
      <br/>
      <div class='languagescontainer'>
        <div class='languageheader'>Languages</div>
        <div class='languageitem'>HTML</div>
        <div class='languagedesc'>I've been programming with HTML since I started. I am fluent in creating forms and styling them with CSS.</div>

        <div class='languageitem'>CSS</div>
        <div class='languagedesc'>Same with HTML, CSS is one of my first languages. I am generally fluent in CSS, I can use most styles with confidence and I have decent knowledge of color theory.</div>

        <div class='languageitem'>JavaScript</div>
        <div class='languagedesc'>A while after I started using HTML and CSS, I started using JS. I used to use JQuery quite a bit, but I am moving over to vanilla JS and Vue.</div>

        <div class='languageitem'>Python</div>
        <div class='languagedesc'>I know a little python, I am taking an advanced college course for it right now.</div>

        <div class='languageitem'>PHP</div>
        <div class='languagedesc'>I used some PHP to create some login and data entry forms as an experiment for backend programming; not to say that's my only experience with PHP.</div>
      </div>
      <div class='languagescontainer'>
        <div class='languageheader'>Libraries</div>
        <div class='languageitem'>Jquery</div>
        <div class='languagedesc'>I started using Jquery quite early on, and I'm very experienced with it. I am learning to use only vanilla JS with Vue currently.</div>

        <div class='languageitem'>Node.js</div>
        <div class='languagedesc'>I started using Node about 2 years ago, and I can work well with it with all my experience.</div>

        <div class='languageitem'>Vue.js</div>
        <div class='languagedesc'>I started using Vue about 1 month ago, and I can use it a little, and I am still learning how to use it to it's fullest.</div>

        <div class='languageitem'>Amazon S3</div>
        <div class='languagedesc'>Not really a library, but I figured I should mention that I can use Amazon's S3 service fluently.</div>
      </div>
      <div style='height: 50px;'></div>
      `
      break;
    case 'projects':
      document.getElementById("linkcontents").innerHTML = `
      <div style='font-size: 11px; color: var(--ac); text-align: center; margin-top: 10px; margin-bottom: 10px;'>Hover to see more info, click to go to the project's page.</div>
      <div onclick='window.open("https://aspectquote.github.io/cubecollector")' class='projectcontainer'>
        <div class='projectname'>Cube Collector Classic</div>
        <div class='projecticon' style='background-image: url("Images/cccbg.png")'></div>
        <div class='projectupdates'>First Release: January 19, 2020 <br/> Last Updated: December 1, 2020</div>
        <div class='projectdesc'>Collect and Unbox more than 500 unique cubes and gamble 'em away! My first full project release; this was a technical test of my skills up to that point, and it is full of creativity and attitude; though it's not much of a looker.</div>
        <div class='builtwith'>Jquery</div>
      </div>
      <div onclick='window.open("https://tf2clicker.com")' class='projectcontainer'>
        <div class='projectname'>TF2Clicker</div>
        <div class='projecticon' style='background-image: url("Images/tf2cbg.png")'></div>
        <div class='projectupdates'>First Release: August 28, 2020 <br/> Last Updated: December 2, 2020</div>
        <div class='projectdesc'>A game similar to (and inspired by) CSGOClicker, TF2Clicker is about unboxing, trading, and gambling your TF2 Items with other people! TF2Clicker uses assets and intellectual property of Valve Corp.</div>
        <div class='builtwith'>Jquery, Node.js, and Amazon S3</div>
      </div>
      <div onclick='window.open("https://aspectquote.github.io/clarity")' class='projectcontainer'>
        <div class='projectname'>Clarity</div>
        <div class='projecticon' style='background-image: url("Images/clabg.png")'></div>
        <div class='projectupdates'>First Release: December 25, 2020 <br/> Last Updated: December 25, 2020</div>
        <div class='projectdesc'>A text based choose your own adventure game, Clarity will be bringing the tools of choose your own adventure games to the platform of the web browser. Clarity is still deep in development, but you can play the tutorial now!</div>
        <div class='builtwith'>Jquery</div>
      </div>
      <div onclick='window.open("https://cubecollector.herokuapp.com")' class='projectcontainer' style='margin-bottom: 30px;'>
        <div class='projectname'>Cube Collector Online</div>
        <div class='projecticon' style='background-image: url("Images/ccobg.png")'></div>
        <div class='projectupdates'>First Release: ???, 2021 <br/> Last Updated: January 13, 2021</div>
        <div class='projectdesc'>A soon to be released  spiritual successor to Cube Collector Classic, Cube Collector Online will be bringing multiplayer, networking, a modern feel, and more content to the genre. You can play the alpha test now.</div>
        <div class='builtwith'>Jquery, Vue.js, Node.js, and Amazon S3</div>
      </div>
      `
      break;
    default:

  }
}
document.addEventListener("DOMContentLoaded", function(event) {
  changepage('about')
});
