const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const dropdowns=document.querySelectorAll(".dropdown select");
const btn=document.querySelector("form button");
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");
const msg=document.querySelector(".msg p");
// for(let code in countryList)
// {
//     console.log(code);
// }


for(let select of dropdowns)
{
for(currCode in countryList)
{
 let newOption=document.createElement("option");
 newOption.innerText=currCode;
 newOption.value=currCode;
 if(select.name=="from" && currCode=="USD")
 {
    newOption.selected="selected";
 }
 else if(select.name=="to" && currCode=="INR")
    {
       newOption.selected="selected";
    }
 select.append(newOption);
 
//  let logoChange=document.querySelector("img");
//  const str="https://flagsapi.com/";
//  str=str+countryList[currCode]+"/flat/64.png";
//  logoChange.setAttribute("src",str);

}
select.addEventListener("change",(evt)=>{
    updateLogo(evt.target);
});
}

const updateLogo=(ele)=>{
  let currCode=ele.value;
  let countryCode=countryList[currCode];
  let src=`https://flagsapi.com/${countryCode}/flat/64.png`
 
  let image=ele.parentElement.querySelector("img");
  image.src=src;

}

btn.addEventListener("click",(evt)=>{
evt.preventDefault();
updateExchangeRate();
});

const updateExchangeRate=async ()=>{
    let amt=document.querySelector(".amount input");
    let amtValue=amt.value;
    if(amtValue<0 || amtValue==="")
    {
        amtValue=1;
        amt.value=1;
    console.log(amtValue);
    
    }
    console.log(fromCurr,toCurr);
    // let NEW_URL=`${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    let URL=
    `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    let response=await fetch(URL);
    let data=await response.json();
    // let rate=data[toCurr.value.toLowerCase()];
    console.log(rate);
    let finalAmt=amtValue*rate;
    msg.innerText=`${amtValue} ${fromCurr.value} = ${finalAmt} ${toCurr.value}`;
}

window.addEventListener("load",()=>{
  updateExchangeRate();
});