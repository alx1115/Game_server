 var canvas = document.getElementById('game');
 var context = canvas.getContext('2d');
 var grid = 16;
 var count = 0;
 var k = 0;
 var snake = {
   x: 160,
   y: 160,
   dx: grid,
   dy: 0,
   cells: [],
   maxCells: 4
 };
 var apple = {
   x: 320,
   y: 320
 };
 function getRandomInt(min, max) {
   return Math.floor(Math.random() * (max - min)) + min;
 }
 function loop() {
   requestAnimationFrame(loop);
   if (++count < 4) {
     return;
   }
  count = 0;
    context.clearRect(0, 0, canvas.width, canvas.height);
   snake.x += snake.dx;
   snake.y += snake.dy;
   if (snake.x < 0) {
    cell.x = snake.cells[2].x;
    cell.y = snake.cells[2].y;
   }
   else if (snake.x >= canvas.width) {
    cell.x = snake.cells[2].x;
    cell.y = snake.cells[2].y;
   }
  if (snake.y < 0) {
    cell.x = snake.cells[2].x;
    cell.y = snake.cells[2].y;
   }
   else if (snake.y >= canvas.height) {
    cell.x = snake.cells[2].x;
    cell.y = snake.cells[2].y;
   }
   snake.cells.unshift({ x: snake.x, y: snake.y });
   if (snake.cells.length > snake.maxCells) {
     snake.cells.pop();
   }
  context.fillStyle = 'red';
   context.fillRect(apple.x, apple.y, grid - 1, grid - 1);
  context.fillStyle = 'green';
   snake.cells.forEach(function (cell, index) {
     context.fillRect(cell.x, cell.y, grid - 1, grid - 1);
    if (cell.x === apple.x && cell.y === apple.y) {
       snake.maxCells++;
       apple.x = getRandomInt(0, 25) * grid;
       apple.y = getRandomInt(0, 25) * grid;
     }
     for (var i = index + 1; i < snake.cells.length; i++) {
       if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
         snake.x = 160;
         snake.y = 160;
         snake.cells = [];
         snake.maxCells = 0;
         snake.dx = 0;
         snake.dy = 0;
         apple.x = getRandomInt(0, 25) * -16;
         apple.y = getRandomInt(0, 25) * -16;
       }
     }
   });
 }
 document.addEventListener('keydown', function (e) {
    if (e.which === 65 && snake.dx === 0) {
     snake.dx = -grid;
     snake.dy = 0;
   }
   else if (e.which === 87 && snake.dy === 0) {
     snake.dy = -grid;
     snake.dx = 0;
   }
   else if (e.which === 68 && snake.dx === 0) {
     snake.dx = grid;
     snake.dy = 0;
   }
   else if (e.which === 83 && snake.dy === 0) {
     snake.dy = grid;
     snake.dx = 0;
   }else if(e.which === 82){
    snake.x = 160;
    snake.y = 160;
    snake.cells = [];
    snake.maxCells = 3;
    snake.dx = grid;
    snake.dy = 0;
     apple.x = getRandomInt(0, 25) * grid;
    apple.y = getRandomInt(0, 25) * grid;
   }
 });
 requestAnimationFrame(loop);