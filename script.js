function changepage(page){
  switch (page) {
    case 'about':
      contenthtml.html = `Hello, and thanks for reading! I am Joshua Deeds. I was born on May 15, 2003. I am an aspiring web developer, I am very fluent in Javascript, HTML, and CSS. I am super comfortable working with Jquery, Node.js (With Amazon S3), Socket.io, and Vue.js. I have been web developing since 2013. (See the Projects and Work page) I got into web development in middle school because I was enthralled with the idea of creating my own place on the internet. I first learned HTML and JS from Codecademy and Khanacademy, with both building my love for each of the languages. I learned CSS about a year after, I was using it before but my stylesheets had been more in-line than I would like. I built a couple of games on github, but my first 'released' project was Cube Collector Classic. When I finished developing CCC, I took a break from coding for about a year. During that time, I started learning more about the culinary profession and I genuinely thought I might switch my passion. In 2019, I decided I would start programming websites again. I started to watch tutorials about JS, HTML, and CSS which reignited my love for web development. I learned socket.io, and as my first project, I started building TF2Clicker. TF2Clicker started it's development in May of 2020, with it's first released build coming out in August of 2020. I developed TF2Clicker for about 6 months after release. Now, I am working on Cube Collector Online and Clarity; CCOnline being my last multiplayer clicker-inventory type project, and Clarity being a text-based choose your own adventure game that I am working on with a friend. I plan to create my own CSS tools that I will use to speed up my development process.`
      break;
    case 'projects':
      contenthtml.html = `Projects Page`
      break;
    case 'updates':
      contenthtml.html = `Updates Page`
      break;
    default:

  }
}
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
