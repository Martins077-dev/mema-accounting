const htmlTag = document.querySelector('html');
const viewportW = window.innerWidth/128;

const viewW = viewportW + 'px';

htmlTag.style = `font-size: ${viewW}`;

console.log(viewW);

window.addEventListener('resize', () => {
   const viewW2 = window.innerWidth/128;

   const viewW2px = viewW2 + 'px';

   htmlTag.style = `font-size: ${viewW2px}`;
});