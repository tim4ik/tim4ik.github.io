function nod(n, m) {
    if(m > 0) { 
      var k = n%m;
      return nod(m, k); 
    } 
    else { 
      return Math.abs(n);  
    }
  }
var a1=Number(prompt("From?"));
var a2=Number(prompt("To?"));
var a3=0;
for(var i=a1;i<=a2;i++)
{
    a3+=i;
}
alert(`Sum = ${a3}`);
var x=Number(prompt("x?"));
var y=Number(prompt("y?"));
alert(`NSD = ${nod(x,y)}`);
var n=Number(prompt("Number?"));
var cnt=0;
for(var i=0;i<n;i++)
{
    if(n%i==0)
    {
        cnt++;
    }
}
prompt()