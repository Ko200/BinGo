function checkset(){
    nums=document.getElementsByTagName("input");
    sum=0;
    for(i=0;i<nums.length;i++)
    {
        if(Number(nums[i].value)==0)
            return false;
        sum+=Number(nums[i].value);
    }
    return (sum==325);
}


$("form").submit((e)=>{
    e.preventDefault();
    if(!checkset())
    {
        alert("dont repeat numbers");
    }
    $("input").attr("disabled",true);
})[0].onreset=(e)=>{
    $("input").attr("disabled",false);
};

$("div.border-dark").click((e)=>{
        if(e.target.children[0].disabled==true)
        {
            e.target.style.background="#ff0000";
        }
        
})