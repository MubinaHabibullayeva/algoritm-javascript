let yosh = prompt("Yoshingizni kiriting:");

yosh >= 0 && yosh <= 6 
   ? console.log("Siz bog'chaga borasiz")
   : yosh >= 7 && yosh <= 18
   ? console.log("Siz maktabda o'qiysiz")
   : yosh >= 19 && yosh <= 30
   ? console.log("Siz universitetda o'qiysiz")
   : yosh >= 31 && yosh <= 55
   ? console.log("Siz Ishlaysiz")
   : console.log("Siz nafaqa olasiz");
      