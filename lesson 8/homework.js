for (;;) {
  let input = prompt("100 dan katta son kiriting:");
  if (input === null) {
    alert("Kiritish bekor qilindi.");
    break;
  }
  let number = Number(input);
  if (number > 100) {
    alert("Qabul qilindi!");
    break;
  }
}
