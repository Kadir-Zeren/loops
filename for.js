// for (let i = 1; i <= 100; i++) {
//   console.log(`${i}-2024`);
// }

// const n = prompt("enter your number");
// let sum = 0;

// for (let i = 1; i <= n; i++) {
//   sum = sum + i;
//   console.log(sum);
// }
// console.log(`SUM: ${sum}`);

// const number = prompt("Kac adet sayi uretmek istersiniz");

// for (let sayac = 1; sayac <= number; sayac++) {
//   const rasgeleSayi = Math.round(Math.random() * 100);
//   console.log(`${sayac}. sayiniz : ${rasgeleSayi}`);
// }

// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }
// console.log("bye");

// let not = prompt("lütfen 0-100 arasıda bir not giriniz");

// while (not < 0 || not > 100) {
//   console.log("not 0 dan küçük veya 100 den büyük olamaz");
//   not = prompt("lütfen 0-100 arasıda bir not giriniz");
// }
// console.log("notunuz:", not);

// let not;
// do {
//   not = prompt("lütfen 0-100 arasıda bir not giriniz");
//   if (not < 0 || not > 100) {
//     alert("lütfen 0-100 arasıda bir not giriniz");
//   }
// } while (not < 0 || not > 100);
// console.log("not", not);
let not = prompt("lütfen 0-100");
for (; not < 0 || not > 100; ) {
  alert("Not 0dan veya 100den küçük olamaz");
  not = prompt("0-20 arası sayi giriniz");
}
console.log("not:", not);
