# node_fonts

Это получается такой скрипт который запускаете через Node.js и все шрифты из папки fonts 
кидаются в scss и потом через mixin создают отличнийший css файл с полным набором всего что нужно
<h4>Чтобы всё нормально работало нужно следующее:</h4>
<ul>
  <li>Нужно чтобы в папке fonts присутствовали все виды шрифтов ttf/otf/eot/svg/woff/woff2</li>
  <li>В названии шрифта должно быть указано "название"-"размер кегля именем"(без скобок) по типу bold или ultralight</li>
  <li>Если шрифт italic, то в названии шрифта можно указать "название"-"italic"-"размер кегля именем"(без скобок)</li>
  <li>Так же допускается написание "названиеitalic"-"размер кегля именем"</li>
  <li>Если вы используете шрифт с не стандартным названием по типу semibold или light вы можете дописать в условия к нужному параметру новый пункт со своим именем</li>
</ul>
