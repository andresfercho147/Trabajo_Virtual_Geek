document.querySelector(".text1").addEventListener('mouseover',function (){
    var nuevoParrafo=document.querySelector('.text2');
    nuevoParrafo.innerHTML=`<p>
    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>`
});
document.querySelector(".text1").addEventListener('mouseout',function (){
    var nuevoParrafo=document.querySelector('.text2');
    nuevoParrafo.innerHTML=`<p></p>`
});













// document.getElementById('texto').addEventListener('mouseover', mouseOver);
// document.getElementById('texto').addEventListener('mouseout', mouseOut);

// function mouseOver(){
//     document.getElementById('texto').innerHTML = 'lorem ipsum';
// }

// function mouseOut (){
//     document.getElementById('texto').innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi magni error velit ipsam minima sapiente praesentium totam nam debitis, exercitationem commodi molestiae recusandae laborum, soluta porro quam alias aspernatur dicta.';
// }