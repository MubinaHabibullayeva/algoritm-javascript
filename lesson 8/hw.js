let n = prompt("tub sonlarni qaysi songacha chiqarishni xohlaysiz? ");
n = Number(n);
for (let i = 2; i <= n; i++) {
  let tub = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      tub = false;
      break;
    }
  }
  if (tub) {
    console.log(i);
  }
}
