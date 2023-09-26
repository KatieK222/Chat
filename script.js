      let count = 0;
      const element = document.querySelectorAll("button button_counter");
      let online = document.getElementsByClassName("online");
      let badge = document.getElementsByClassName("badge");
  
//Получаем случайное число
function getRandom(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; 
}

//Увеличиваем счетчик для ключа элемента который совпадает со значением рандом
function Count (){
  
Object.keys(badge).forEach(function([key]) {
   
   let random = getRandom(0,5);
   if (random == key) {
      count++;
      badge[key].textContent = String(count);
   }
});
}

setInterval(Count,3000);

//Делаем онлайн элемент ключа который совпадает со значением рандом
function Interval (){
let random = getRandom(0,5);

Object.keys(online).forEach(function([key]) {
   
   if (random == key) {
      online[key].style.background = 'green';
   }
   else {
      online[key].style.background = 'red';
   }
});
}
//Реакция кнопки счетчика делает нулевой при нажатии
setInterval(Interval, 3000);
             function counterButton1 (){
            count = 0;
            badge[0].textContent = String(count);
             }
          function counterButton2 (){
            count = 0;
            badge[1].textContent = String(count);
         }
         function counterButton3 (){
            count = 0;
            badge[2].textContent = String(count);
         }
         function counterButton4 (){
            count = 0;
            badge[3].textContent = String(count);
         }
         function counterButton5 (){
            count = 0;
            badge[4].textContent = String(count);
         }