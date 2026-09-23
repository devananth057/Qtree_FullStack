let a=0;
let b=0;
let r=0;

function Handle_Value_a(event)
{
   console.log(event.target.value)
   a=Number(event.target.value)
}

function Handle_Value_b(event)
{
    console.log(event.target.value)
   b=Number(event.target.value)
}

function add()
{
    r =a+b;
    console.log(r);
    const l=document.getElementById("Result")
    l.innerText=r;

}

function sub()
{
    r =a-b;
    console.log(r);
    const l=document.getElementById("Result")
    l.innerText=r;

}

function mul()
{
    r =a*b;
    console.log(r);
    const l=document.getElementById("Result")
    l.innerText=r;

}
function div()
{
    if(b==0)
    {
        
        const l=document.getElementById("Result")
    l.innerText="undefined";
        
    }
    else
    {
         r =a/b;
    console.log(r);
    const l=document.getElementById("Result")
    l.innerText=r;

    }
   

}






