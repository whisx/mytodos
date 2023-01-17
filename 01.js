var l = document.querySelector('.notes');
l.addEventListener('click',function(ev) {
    if(ev.target.tagName === 'P') {
        ev.target.classList.toggle('checked');
    }
},false);

function add() {
    let v = document.getElementById("inp").value;
    const para = document.createElement("p");
    const node = document.createTextNode(`${v}`);
    para.appendChild(node);
    if(v === '') {
        alert("you must write something!");
    }
    else {
    const element = document.getElementById("div1");
    element.appendChild(para);

    document.getElementById("inp").value = "";

    let s = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    s.className = "close";
    s.appendChild(txt);
    para.appendChild(s);

    let c = document.getElementsByClassName("close");
    for(let i=0;i<c.length;i++)
    {
        c[i].onclick = function() {
            let d = this.parentElement;
            d.style.display = "none";
        }
    }
    }
}