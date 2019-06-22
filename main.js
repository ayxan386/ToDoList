function add()
{
    const list = document.getElementById("list");
    let newItem = document.createElement("li");
    newItem.innerHTML += '<input type="checkbox" class="list-checked"></input> ';
    newItem.innerHTML += document.getElementById("newItem").value + " ";
    newItem.innerHTML += '<button onclick="deleteSelf(this)">❌</button>';
    let newColor = "black";
    let clor = document.getElementsByName("prio");
    for(let i =0;i<clor.length;i++)
    {
        if(clor[i].checked)
        {
            newColor = clor[i].value;
            break;
        }
    }
    newItem.style.color = newColor;
    list.appendChild(newItem);
}
function deleteSelf(item)
{
    let par = item.parentElement;
    let parpar = par.parentElement;
    parpar.removeChild(par);
}