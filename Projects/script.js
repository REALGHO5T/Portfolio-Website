// var arr = [
//   { image: "./assets/Restaurant.png" },
//   { image: "./assets/Watch.png" },
//   { image: "./assets/Valhalla-web.png" },
//   { image: "./assets/ecom.png" },
//   { image: "./assets/Music-Stream.png" },
//   { image: "./assets/Catering.png" },
//   { image: "./assets/Netflix.png"},
//   { image: "./assets/Tourism.png"},
//   { image: "./assets/slide.png"},
//   { image: "./assets/significo.png"},
// ];
// function projects(){
//   var clutter = ""
//   arr.forEach(function(obj){
//     clutter += `<div class="project">
//     <img src="${obj.image}" alt="">
//   </div>`
// })
// document.querySelector(".projects").innerHTML = clutter
// }

// function pageanimation(){

//   gsap.utils.toArray('.project').forEach(project => {
//     gsap.from(project, {
//     y: 200,
//     opacity: 0,
//     duration: 1,
//     stagger:0.5,
//     ease:Power4,
//     scrollTrigger: {
//       trigger: project,
//       start: "top 80%", // triggers when the top of the element is 80% from the top of the viewport
//       end: "top 30%", // ends when the top of the element is 30% from the top of the viewport
//       toggleActions: "play none none none",
//       scrub:true // plays the animation when it enters the viewport
//     }
//   });
// })
// }
// function smoothScroll() {
//   const lenis = new Lenis();

//   lenis.on("scroll", (e) => {
//     console.log(e);
//   });

//   lenis.on("scroll", ScrollTrigger.update);

//   gsap.ticker.add((time) => {
//     lenis.raf(time * 1000);
//   });

//   gsap.ticker.lagSmoothing(0);
// }
// projects()
// // pageanimation()
// // smoothScroll()

var arr = [
  { image: "./assets/Eco Good.png"},
  { image: "./assets/FluidWeb.png"},
  { image: "./assets/Restaurant.png" },
  { image: "./assets/Watch.png" },
  { image: "./assets/Valhalla-web.png" },
  { image: "./assets/ecom.png" },
  { image: "./assets/Music-Stream.png" },
  { image: "./assets/Catering.png" },
  { image: "./assets/Netflix.png"},
  { image: "./assets/Tourism.png"},
  { image: "./assets/slide.png"},
  { image: "./assets/significo.png"},
];

function projects(){
  var clutter = "";
  arr.forEach(function(obj, index){
    clutter += `<div class="project" data-index="${index}">
      <img src="${obj.image}" alt="">
    </div>`;
  });
  document.querySelector(".projects").innerHTML = clutter;

  // Add event listeners to each project
  var projectElements = document.querySelectorAll(".project");
  projectElements.forEach(function(project) {
    project.addEventListener("click", function() {
      var imgSrc = arr[this.getAttribute("data-index")].image;
      showModal(imgSrc);
    });
  });
}

function showModal(imageSrc) {
  var modal = document.getElementById("modal");
  var modalImg = document.getElementById("modal-img");
  modal.style.display = "block";
  modalImg.src = imageSrc;
}

// Close the modal
document.getElementById("close").onclick = function() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}

// Initialize the projects display
projects();
