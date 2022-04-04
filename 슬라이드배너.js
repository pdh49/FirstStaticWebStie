var slideIndex = 0; //slide index
var slideIndex2 = 0; //slide index
      var arrImg1 = new Array("./이미지모음/커피 종류 사진/스타벅스/스벅 아아.jpg", 
      "./이미지모음/커피 종류 사진/스타벅스/스벅 뜨아.jpg", "./이미지모음/커피 종류 사진/스타벅스/스벅 돌체 밀크티.jpg",
      "./이미지모음/커피 종류 사진/스타벅스/스벅 딸기 딜라이트 요거트 블렌디드.jpg","./이미지모음/커피 종류 사진/스타벅스/스벅 바닐라크림 프라푸치노.jpg",
      "./이미지모음/커피 종류 사진/스타벅스/스벅 아이스 돌체 블랙 밀크티.jpg", "./이미지모음/커피 종류 사진/스타벅스/스벅 아이스 라떼.jpg", 
      "./이미지모음/커피 종류 사진/스타벅스/스벅 아이스 카라멜 마키야또.jpg","./이미지모음/커피 종류 사진/스타벅스/스벅 아이스 카푸치노.jpg",
      "./이미지모음/커피 종류 사진/스타벅스/스벅 아이스 캐모마일 블랜드 티.jpg","./이미지모음/커피 종류 사진/스타벅스/스벅 아이스 히비스커스 블렌드 티.jpg",
      "./이미지모음/커피 종류 사진/스타벅스/스벅 자바칩 프라푸치노.jpg","./이미지모음/커피 종류 사진/스타벅스/스벅 에스프레소 프라푸치노.jpg",
      "./이미지모음/커피 종류 사진/스타벅스/스벅 제주 그린 한라봉 모히또 블렌디드.jpg", "./이미지모음/커피 종류 사진/스타벅스/스벅 카라멜 마키야또.jpg",
      "./이미지모음/커피 종류 사진/스타벅스/스벅 카페라떼.jpg","./이미지모음/커피 종류 사진/스타벅스/스벅 카푸치노.jpg",
      "./이미지모음/커피 종류 사진/스타벅스/스벅 캐모마일 블렌드 티.jpg", "./이미지모음/커피 종류 사진/스타벅스/스벅 콜드브루.jpg",
      "./이미지모음/커피 종류 사진/스타벅스/스벅 트위스트 피치 요거트 블렌디드.jpg","./이미지모음/커피 종류 사진/스타벅스/스벅 히비스커스 블렌드 티.jpg");



      var arrImg2 = new Array("./이미지모음/커피 종류 사진/탐앤탐스/탐탐 딸기라떼.png","./이미지모음/커피 종류 사진/탐앤탐스/탐탐 딸기쇼트케잌 탐앤치노.png",
      "./이미지모음/커피 종류 사진/탐앤탐스/탐탐 뜨아.png","./이미지모음/커피 종류 사진/탐앤탐스/탐탐 레몬에이드.png",
      "./이미지모음/커피 종류 사진/탐앤탐스/탐탐 로얄 밀크티.png", "./이미지모음/커피 종류 사진/탐앤탐스/탐탐 바닐라 탐앤치노.png",
      "./이미지모음/커피 종류 사진/탐앤탐스/탐탐 아아.png", "./이미지모음/커피 종류 사진/탐앤탐스/탐탐 아이스 레몬티.png",
      "./이미지모음/커피 종류 사진/탐앤탐스/탐탐 아이스 로얄 밀크티.png", "./이미지모음/커피 종류 사진/탐앤탐스/탐탐 아이스 카라멜 마키야또.png",
      "./이미지모음/커피 종류 사진/탐앤탐스/탐탐 아이스 카페 라떼.png", "./이미지모음/커피 종류 사진/탐앤탐스/탐탐 아이스 카푸치노.png",
      "./이미지모음/커피 종류 사진/탐앤탐스/탐탐 아이스 캐모마일 티.png", "./이미지모음/커피 종류 사진/탐앤탐스/탐탐 오렌지 에이드.png",
      "./이미지모음/커피 종류 사진/탐앤탐스/탐탐 자몽에이드.png", "./이미지모음/커피 종류 사진/탐앤탐스/탐탐 자바칩 탐앤치노.png",
      "./이미지모음/커피 종류 사진/탐앤탐스/탐탐 카라멜 마키야또.png", "./이미지모음/커피 종류 사진/탐앤탐스/탐탐 카페라떼.png",
      "./이미지모음/커피 종류 사진/탐앤탐스/탐탐 카푸치노.png", "./이미지모음/커피 종류 사진/탐앤탐스/탐탐 캐모마일.png",
      "./이미지모음/커피 종류 사진/탐앤탐스/탐탐 콜드브루.png", "./이미지모음/커피 종류 사진/탐앤탐스/탐탐레몬티.png",);



      var arrImg3 = new Array("./이미지모음/커피 종류 사진/이디야/아이스 콜드브루.png","./이미지모음/커피 종류 사진/이디야/이댜 딸기라떼.png",
      "./이미지모음/커피 종류 사진/이디야/이댜 뜨아.png", "./이미지모음/커피 종류 사진/이디야/이댜 레몬에이드.png",
      "./이미지모음/커피 종류 사진/이디야/이댜 밀크티.png", "./이미지모음/커피 종류 사진/이디야/이댜 생딸기 연유 플랫치노.png",
      "./이미지모음/커피 종류 사진/이디야/이댜 샤인 히비스커스.png", "./이미지모음/커피 종류 사진/이디야/이댜 아아.png",
      "./이미지모음/커피 종류 사진/이디야/이댜 아이스 샤인히비스커스.png", "./이미지모음/커피 종류 사진/이디야/이댜 아이스 카라멜 마키야또.png",
      "./이미지모음/커피 종류 사진/이디야/이댜 아이스 카페라떼.png", "./이미지모음/커피 종류 사진/이디야/이댜 아이스 카푸치노.png",
      "./이미지모음/커피 종류 사진/이디야/이댜 아이스 피치얼그레이.png", "./이미지모음/커피 종류 사진/이디야/이댜 자몽에이드.png",
      "./이미지모음/커피 종류 사진/이디야/이댜 청포도 에이드.png", "./이미지모음/커피 종류 사진/이디야/이댜 초콜릿칩 플랫치노.png",
      "./이미지모음/커피 종류 사진/이디야/이댜 카라멜 마키야또.png", "./이미지모음/커피 종류 사진/이디야/이댜 카페라떼.png",
      "./이미지모음/커피 종류 사진/이디야/이댜 카푸치노.png", "./이미지모음/커피 종류 사진/이디야/이댜 토피넛 플랫치노.png",
      "./이미지모음/커피 종류 사진/이디야/이댜 피치 얼그레이 티.png","./이미지모음/커피 종류 사진/이디야/이야 아이스 밀크티.png");



      
     var arrImg4 = new Array("./이미지모음/커피 종류 사진/할리스/할리스/생딸기 라떼.png","./이미지모음/커피 종류 사진/할리스/할리스/할리스 다크 초콜릿칩 할리치노.png",
      "./이미지모음/커피 종류 사진/할리스/할리스/할리스 딸기 듬뿍 라떼.png", "./이미지모음/커피 종류 사진/할리스/할리스/할리스 딸기 치즈케익 할리치노.png",
      "./이미지모음/커피 종류 사진/할리스/할리스/할리스 뜨아.png", "./이미지모음/커피 종류 사진/할리스/할리스/할리스 밀크티 라떼.png",
      "./이미지모음/커피 종류 사진/할리스/할리스/할리스 복숭아 자두 스파클링.png", "./이미지모음/커피 종류 사진/할리스/할리스/할리스 아이스 아메리카노.png",
      "./이미지모음/커피 종류 사진/할리스/할리스/할리스 아이스 얼그레이.png", "./이미지모음/커피 종류 사진/할리스/할리스/할리스 아이스 카페라떼.png",
      "./이미지모음/커피 종류 사진/할리스/할리스/할리스 아이스 캐모마일.png", "./이미지모음/커피 종류 사진/할리스/할리스/할리스 얼그레이.png",
      "./이미지모음/커피 종류 사진/할리스/할리스/할리스 청포도 스파클링.png", "./이미지모음/커피 종류 사진/할리스/할리스/할리스 카라멜 마키야또.png", 
      "./이미지모음/커피 종류 사진/할리스/할리스/할리스 카페라떼.png", "./이미지모음/커피 종류 사진/할리스/할리스/할리스 카푸치노.png",
      "./이미지모음/커피 종류 사진/할리스/할리스/할리스 캐모마일.png", "./이미지모음/커피 종류 사진/할리스/할리스/할리스 콜드브루 할리치노.png",
      "./이미지모음/커피 종류 사진/할리스/할리스/할리스 콜드브루.png");



// HTML 로드가 끝난 후 동작
window.onload=function (){
  
  showSlides(slideIndex);


  // Auto Move Slide
  var sec = 4000;
  
  setInterval(function(){
    slideIndex++;
   
    showSlides(slideIndex);
  }, sec);

}

// Next/previous controls
function moveSlides(n) {
  slideIndex = slideIndex + n
  showSlides(slideIndex);
}

// Thumbnail image controls
function currentSlide(n) {
  slideIndex = n;
  showSlides(slideIndex);
}


function showSlides(n) {

  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  var size = slides.length;

  if ((n+1) > size) {
    slideIndex = 0; n = 0;
  }else if (n < 0) {
    slideIndex = (size-1);
    n = (size-1);
  }

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[n].style.display = "block";
  dots[n].className += " active";
}





// html 로드 되고 시작되는 두번째 함수



// window.addEventListener('onload', function onclickSlide(num){



//   imgArr = arrImg1;
//   showSlides2(slideIndex2, imgArr);  


  
//     if(num == 1){
//       imgArr = arrImg1;
//     } else if(num == 2){
//       imgArr = arrImg2;
//     } else if (num == 3){
//       imgArr = arrImg3;
//     } else if(num == 4){
//       imgArr = arrImg4;
//     } 

//   // Auto Move Slide
  
//   var sec2 = 5000;

//   setInterval(function(){
    
//     slideIndex2++;
//      showSlides2(slideIndex2, imgArr);

//   }, sec2);

// });


// function onclickSlide(ele){

//   if(ele.value == 1){
//       return arrImg1;
//   } else if(ele.value == 2){
//     return arrImg2;
      
//   } else if (ele.value == 3){
//     return arrImg3;
//   } else if(ele.value == 4){
//     return arrImg4;
//   } 

// }


function showSlides2(n, arrr) {
  var size2 = arrr.length;

  if ((n+1) > size2) {
        slideIndex2 = 0; n = 0;
      }else if (n < 0) {
        slideIndex2 = (size2-1);
        n = (size2-1);
      }

      document.getElementById("slideImg").src = arrr[n];

}

function onclickSlide(num){
  

    if(num == 1){
      imgArr = arrImg1;
    } else if(num == 2){
      imgArr = arrImg2;
    } else if (num == 3){
      imgArr = arrImg3;
    } else if(num == 4){
      imgArr = arrImg4;
    } 


    showSlides2(slideIndex2, imgArr);
  // Auto Move Slide
  
  var sec2 = 2000;

setTime(function(){

    slideIndex2++;
     showSlides2(slideIndex2, imgArr);
  }, sec2);

}

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ



// function showSlides2(n) {
  
//   let arrImg = new Array("./이미지모음/커피 종류 사진/스타벅스/스벅 아아.jpg", 
//   "./이미지모음/커피 종류 사진/스타벅스/스벅 뜨아.jpg", "./이미지모음/커피 종류 사진/스타벅스/스벅 돌체 밀크티.jpg",
//   "./이미지모음/커피 종류 사진/스타벅스/스벅 딸기 딜라이트 요거트 블렌디드.jpg","./이미지모음/커피 종류 사진/스타벅스/스벅 바닐라크림 프라푸치노.jpg",
//   "./이미지모음/커피 종류 사진/스타벅스/스벅 아이스 돌체 블랙 밀크티.jpg", "./이미지모음/커피 종류 사진/스타벅스/스벅 아이스 라떼.jpg", 
//   "./이미지모음/커피 종류 사진/스타벅스/스벅 아이스 카라멜 마키야또.jpg","./이미지모음/커피 종류 사진/스타벅스/스벅 아이스 카푸치노.jpg",
//   "./이미지모음/커피 종류 사진/스타벅스/스벅 아이스 캐모마일 블랜드 티.jpg","./이미지모음/커피 종류 사진/스타벅스/스벅 아이스 히비스커스 블렌드 티.jpg",
//   "./이미지모음/커피 종류 사진/스타벅스/스벅 자바칩 프라푸치노.jpg","./이미지모음/커피 종류 사진/스타벅스/스벅 에스프레소 프라푸치노.jpg",
//   "./이미지모음/커피 종류 사진/스타벅스/스벅 제주 그린 한라봉 모히또 블렌디드.jpg", "./이미지모음/커피 종류 사진/스타벅스/스벅 카라멜 마키야또.jpg",
//   "./이미지모음/커피 종류 사진/스타벅스/스벅 카페라떼.jpg","./이미지모음/커피 종류 사진/스타벅스/스벅 카푸치노.jpg",
//   "./이미지모음/커피 종류 사진/스타벅스/스벅 캐모마일 블렌드 티.jpg", "./이미지모음/커피 종류 사진/스타벅스/스벅 콜드브루.jpg",
//   "./이미지모음/커피 종류 사진/스타벅스/스벅 트위스트 피치 요거트 블렌디드.jpg","./이미지모음/커피 종류 사진/스타벅스/스벅 히비스커스 블렌드 티.jpg");
  
//   document.getElementById("slideImg").src = arrImg;

//   var slides2 = document.getElementById("slideImg")
//   var size2 = slides2.length;



//   if ((n+1) > size2) {
//     slideIndex2 = 0; n = 0;
//   }else if (n < 0) {
//     slideIndex2 = (size2-1);
//     n = (size2-1);
//   }

//   for (i = 0; i < slides2.length; i++) {
//       slides2[i].style.display = "none";
//   }

//   slides2[n].style.display = "block";
// }