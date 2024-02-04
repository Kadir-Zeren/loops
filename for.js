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

const number = prompt("Kac adet sayi uretmek istersiniz");

for (let sayac = 1; sayac <= number; sayac++) {
  const rasgeleSayi = Math.round(Math.random() * 100);
  console.log(`${sayac}. sayiniz : ${rasgeleSayi}`);
}
