// Write your code here!
/*function()
{
    const element = document.getElementsByID('main');
    main.removeChild();  

    const newHeader = document.getElementsByTagName('h1');

    newHeader = document.getElementsByID('victory');

    //newHeader = document.getElementById('victory');
    newHeader.innerHTML = "<h1>David is the Champion!</h1>"; 
}

const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);

const element = document.getElementById("div1");
element.appendChild(para);
*/



//const element = document.getElementsByID('main')
main.remove()

const h = document.createElement('h1')
const node = document.createTextNode('David is the Champion!')

//h = document.querySelector('h1')
h.appendChild(node)

const newHeader = document.getElementById("victory")
newHeader.appendChild(h)

//newHeader.innerHTML = "David is the Champion!"