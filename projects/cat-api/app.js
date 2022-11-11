const cat_result = document.getElementById("gallery");
const errorData = document.getElementById("errorBox");


btn_generate.addEventListener("click", function () {
  const nums = document.getElementById("inp-box").value;

  errorData.innerHTML = "";

  if(!nums.match(/^[0-9]+$/)){
    return errorData.innerHTML = "Enter a valid number";
  }
  if(parseInt(nums) > 10){
    return errorData.innerHTML = "Number should be less than or equal to 10";
  }

  allimages = "";
  fetch(
    `https://api.thecatapi.com/v1/images/search?limit=${nums}&page=10&order=Desc`
  )
    .then((res) => res.json())
    .then((res) => {
      for (let i = 0; i < nums; i++) {
        allimages += `
     <img src=${res[i].url} alt="cat" />
     `;
      }
      cat_result.innerHTML = allimages;
    });
});
