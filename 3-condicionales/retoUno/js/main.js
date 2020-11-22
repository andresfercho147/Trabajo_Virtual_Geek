const img = 'http://placehold.it/300x300';
var emptyAvatar = '';


if(emptyAvatar ==='') {

  const emptyBox = document.querySelector('.empty');
  emptyBox.innerHTML=`<img src="${img}" alt="">`
  
} else {
  const emptyBox = document.querySelector('.empty');
  emptyBox.innerHTML=`<img src="http://www.fillmurray.com/300/300" alt="">`
}