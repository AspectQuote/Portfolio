function changepage(page){
  switch (page) {
    case 'about':
      document.getElementById("linkcontents").innerHTML = `Hello, and thanks for reading! I am Joshua Deeds. I was born on May 15, 2003. I am an aspiring web developer, I am very fluent in Javascript, HTML, and CSS. I am also well-versed working with Jquery, Node.js (With Amazon S3), Socket.io, and Vue.js. I have been web developing since 2013. (See the Projects and Work page) I got into web development in middle school because I was enthralled with the idea of creating my own place on the internet. I first learned HTML and JS from Codecademy and Khanacademy, with both building my love for each of the languages. I learned CSS about a year after, I was using it before but my stylesheets had been more in-line than I would like. I built a couple of games on github, but my first 'released' project was Cube Collector Classic. When I finished developing CCC, I took a break from coding for about a year. During that time, I started learning more about the culinary profession and I genuinely thought I might switch my passion. In 2019, I decided I would start programming websites again. I started to watch tutorials about JS, HTML, and CSS which reignited my love for web development. I learned socket.io, and as my first project, I started building TF2Clicker. TF2Clicker started it's development in May of 2020, with it's first released build coming out in August of 2020. I developed TF2Clicker for about 6 months after release. Now, I am working on Cube Collector Online and Clarity; CCOnline being my last multiplayer clicker-inventory type project, and Clarity being a text-based choose your own adventure game that I am working on with a friend. I plan to create my own CSS tools that I will use to speed up my development process. If you have any questions you can email or call me.`
      break;
    case 'projects':
      document.getElementById("linkcontents").innerHTML = `
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
      <div class='projectcontainer' style='margin-bottom: 30px;'>
        <div class='projectname'>Cube Collector Online</div>
        <div class='projecticon' style='background-image: url("Images/ccobg.png")'></div>
        <div class='projectupdates'>First Release: ???, 2021 <br/> Last Updated: N/A</div>
        <div class='projectdesc'>A soon to be released  spiritual successor to Cube Collector Classic, Cube Collector Online will be bringing multiplayer, networking, a modern feel, and more content to the genre.</div>
        <div class='builtwith'>Jquery, Vue.js, Node.js, and Amazon S3</div>
      </div>
      `
      break;
    case 'updates':
      document.getElementById("linkcontents").innerHTML = ``
      for (var i = 0; i < 5; i++) {
        if (updatearray[i]!=undefined) {
          document.getElementById("linkcontents").innerHTML += `
          <div class='updatecontainer'>
            <div class='updateheader'>${updatearray[i].title}</div>
            <div class='updatedate'>${updatearray[i].date}</div>
            <div class='updateimage' style='background-image: url("${updatearray[i].image}")'></div>
            <div class='updatedesc'>${updatearray[i].desc}</div>
            `+((updatearray[i].patchnotes!==false)?`<div class='updatepatchnotes'>${updatearray[i].patchnotes}</div>`:``)+`
          </div>
          `
        }
      }
      break;
    default:

  }
}
updatearray = [
  {
    title: "Cube Collector Online Devlog #1: Unboxing Animation",
    date: "January 2, 2021",
    image: "Images/Updates/CCODL1.png",
    desc: "Hello everybody who may or may not be reading this! This is my first devlog for cube collector online. (exciting stuff, I know.) I figured I'd start logging my progress every now and again so that I can keep a timeline of my progress as I continue to work on CCOnline. Now, without further ado, let's start talking about the project.<br/><br/> When I started developing CCOnline, I wanted to create a more interesting and robust way for people to login. With TF2Clicker, I had simply made people create their accounts and login with those; but that's boring and takes up a lot of time. So, I decided that people should be able to login with their google accounts! Ingenious, I know. That way, everyone that visits CCOnline will be able to login because, well, who doesn't have a google account, right? So after I setup token verification and a user database (once again using S3), I began redesigning and refining the gameplay from Cube Collector Classic. My biggest gripe with Classic was that there wasn't a real spinny animation for each unboxing. So, I made one. It was a lot harder than you might think, so I'll run you through how it works. First, when you click 'Spin a Cube', your browser will send a request to the server. If the request goes through, the animation begins to initialize. If not, it just displays an error message for you. The animation initialization resets the offset, (In case the animation had run before) then clears out the animation container, and finally generates 100 or so 'bait' cubes. The bait cubes are just pseudo-cubes that look like something the ticker might land on. (The ticker is a white line in the center of the animation that acts as the target) When all the cubes are finished initializing, the animation starts. The container 'spins' it's contents by moving it all to the left super fast using a cubic-bezier function to progressively slow it down. The amount it moves everything to the left by is the output of the equation (((154*(X-6))+randomnumber(130)-(Math.round(((Y/154)/2)*154))+25)), where X is the amount of bait cubes there are and Y is the width, in pixels, of the animation container. In case you're wondering, the 154 is the height/width of each bait cube. After the animation finishes rolling, the 'winning' cube is given a green glow and all the bait cubes are turned to grayscale, whereafter the winning cube is added to your inventory and the unboxing button is reset.",
    patchnotes: false
  },
  {
    title: "[NEW RELEASE] Clarity!",
    date: "December 25, 2020",
    image: "Images/Updates/ClarityRelease.png",
    desc: "Clarity has gotten it's first release! There is no content yet, but there is a tutorial. We have a couple of planned features that will make this project a much more memorable experience!",
    patchnotes: "Added: <br/>- The Game<br/>- A Tutorial<br/>Coming Soon: <br/>- Create Your Own Adventure Editor <br/>- Ballistika Story"
  },
  {
    title: "TF2Clicker Received an Update!",
    date: "December 2, 2020",
    image: "Images/Updates/TF2CU.png",
    desc: "Bug fixes, a new setting, and quality-of-life improvements",
    patchnotes: "Added: <br/>- Load Basic Item Styles Option in Settings<br/>- Added Pyro's Ability to their Mann Co. store page<br/>- Case Battles are now limited to 200 cases<br/>- You can no longer join Case Battles if your inventory is full.<br/>- Profiles now show user ranks (Player, Community, Developer, etc.)<br/>- Added a nod to Cube Collector Classic<br/>- Removed the GUIDE tab<br/>- Added the cookies policy to the home page<br/>- Styled the logo for christmas<br/>- Increased the class level cap to 20<br/>- Selling items now gives rating based on their value<br/>- Missions give much more rating<br/>- Added BORDER-RADIUS style to the inventory icons"
  },
  {
    title: "Cube Collector Classic Recieved an Update!",
    date: "December 1, 2020",
    image: "Images/Updates/CCCU1.png",
    desc: "A send-off update for Cube Collector Classic, a goodbye as I start work on Cube Collector Online",
    patchnotes: "Added: <br/>- 1 New Box<br/>- 10 New Prefixes<br/>- Updated Homepage with info and cookie policy<br/>- An easter egg<br/>- Added <meta> tags so that we get embed previews"
  },
  {
    title: "TF2Clicker Recieved an Update!",
    date: "November 24, 2020",
    image: "Images/Updates/TF2CU2.png",
    desc: "Bug fixes and MvM progression",
    patchnotes: "Added: <br/>- Fixed a bug that would occur when you equip your first chat tag<br/>- Fixed even more coinflip display jank<br/>- For every 500,000 rating, your MvM click strength increases by 1<br/>- Unboxing now gives more rating<br/>- Added 1 new setting<br/>- Increased the size of the item inspect icons<br/>- Added the ability to click on chat and original owner usernames in order to go to their profile<br/>- You can click on other people's items in order to inspect them<br/>- Reduced the rating level up requirement from 1,000,000 to 500,000<br/>- Fixed 1 music track"
  }
]
document.addEventListener("DOMContentLoaded", function(event) {
  contenthtml = {
    html: 'Test'
  }
  new Vue({
    el: "#linkcontents",
    data: contenthtml
  })
  changepage('about')
});
