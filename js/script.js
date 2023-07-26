const header = document.getElementById("header");
window.addEventListener("scroll", function () {
    if (scrollY > 50) {
        header.style.backgroundColor = "rgba(74, 108, 247, .2)"
        header.style.backdropFilter = "blur(15px)"
    }else {
        header.style.backgroundColor = "transparent"
        header.style.backdropFilter = "blur(0px)"
    }
})
const mood = document.getElementById("change-mood");
const root = document.getElementById("root")
mood.addEventListener("click", function (){
   if ( root.classList.contains("dark")){
       root.classList.remove("dark")
   } else {
       root.classList.add("dark")
   }
})

function redirectToPage(page) {
    switch (page) {
      case 'page1':
        window.location.href = "https://coursera.org/verify/4DEKRPK83M48";
        break;
      case 'page2':
        window.location.href = "https://coursera.org/verify/K7QAUF7DSTJY";
        break;
      case 'page3':
        window.location.href = "https://www.udemy.com/course/accredited-istqb-certified-tester-foundation-level-course/?utm_source=adwords&utm_medium=udemyads&utm_campaign=LongTail-New_la.EN_cc.ROWMTA-B&utm_content=deal4584&utm_term=_._ag_98771201205_._ad_533999956744_._kw__._de_c_._dm__._pl__._ti_dsa-1007766171312_._li_1011795_._pd__._&matchtype=&gclid=Cj0KCQjwiIOmBhDjARIsAP6YhSXp2cCyAGV37_IQHyKPuuMTJD516_QR8rLzC0Y8zfBBuJZ-_qPQjMIaAudjEALw_wcB";
        break;
      default:
        // Handle default case or error
        break;
    }
  }
  