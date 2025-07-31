let baho = prompt("Bahoyingizni kiriting (1 dan 5 gacha):");
if (baho == 5) {
    console.log("Siz a'lochi o'quvchisiz!");
} else if (baho == 4) {
    console.log("Yaxshi o'qiysiz, lekin biroz ko'proq harakat qiling");
} else if (baho == 3) {
    console.log("Ortacha. Yaxshiroq oqishingiz kerak");
} else if (baho == 2 || baho == 1) {
    console.log("O'qishga jiddiyroq yondashish kerak");
} else {
    console.log("Notogri baho kiritildi. Iltimos, 1 dan 5 gacha baho kiriting.");
}
