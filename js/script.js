window.onscroll = () => {
  const nav = document.querySelector('#navbar');
  if (this.scrollY <= 10) nav.className = 'navbar'; else nav.className = 'navbar scroll';
};

// jQuery(document).ready(function () {
//   if (jQuery('#client').length > 0) {
//     var splide = new Splide('#client', {
//       // type   : 'loop',
//       // drag   : 'false',
//       perPage: 3,
//       perMove: 1,
//       // focus    : 'center',
//       // padding: '5rem',
//       gap: '30px',
//       // trimSpace: false,
//       // arrows: false,
//       pagination: true,
//       // fixedWidth : '22.625rem',
//       // autoWidth: true,
//       breakpoints: {
//         767: {
//           perPage: 1,
//           // pagination: true,
//           // fixedWidth : '20.5rem',
//         },
//         991: {
//           perPage: 2,
//           // pagination: true,
//           // fixedWidth : '20.5rem',
//         },
//         1199: {
//           perPage: 3,
//           gap: '20px',
//           // fixedWidth : '20.5rem',
//         },
//       }
//     });

//     splide.mount();
//   }
// });

 // Get the modal
 var modal = document.getElementById("myModal");
 var mainmodal = document.getElementById("mainmodal");
 var body = document.getElementById("body");

 // Get the button that opens the modal
 var btn = document.getElementById("myBtn");

 // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close")[0];

 // When the user clicks the button, open the modal 
 btn.onclick = function () {
     modal.style.display = "block";
     body.style.overflow = "hidden";
 }

 // When the user clicks on <span> (x), close the modal
 span.onclick = function () {
     modal.style.display = "none";
     body.style.overflow = "visible";

 }

 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function (event) {
     if (event.target == modal) {
         modal.style.display = "none";
         body.style.overflow = "visible";
     }
 }