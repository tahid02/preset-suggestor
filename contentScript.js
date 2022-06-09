(() => {
  // create the div for preset element
  let main = document.getElementsByClassName("GutterDivStyled-sc-19aqteq-0")[5];

  const dropdownDiv = document.createElement("div");
  const coverLetter = document.createElement("input");
  main.prepend(dropdownDiv);
  main.prepend(coverLetter);
  // style="position: absolute;z-index:100;width:10rem
  dropdownDiv.innerHTML = `
 <div class="select-menu ">
   <div class="select-btn">
     <span class="sBtn-text">Select your option</span>
     <i class="bx bx-chevron-down"></i>
   </div>
 
   <ul class="options" style="height:30vh;overflow-y:scroll" >
  
     
   </ul>
 </div>`;

  const optionMenu = document.querySelector(".select-menu"),
    selectBtn = optionMenu.querySelector(".select-btn"),
    optionsUl = optionMenu.querySelector(".options"),
    sBtn_text = optionMenu.querySelector(".sBtn-text");
  console.log("opt", optionsUl);
  selectBtn.addEventListener("click", () =>
    optionMenu.classList.toggle("active")
  );
  optionsUl.addEventListener("click", (e) => {
    sBtn_text.innerText = e.target.innerText;
    optionMenu.classList.remove("active");
    console.log(e.target.innerText);

    chrome.storage.sync.get("allPresets", (obj) => {
      if (obj.allPresets) {
        console.log(obj.allPresets);
        let cover = obj.allPresets.filter(
          (preset) => preset.presetName === e.target.innerText
        );
        console.log({ cover });
        coverLetter.value = cover[0].presetDescription;
      }
    });
  });

  console.log(main);

  chrome.storage.sync.get("allPresets", (obj) => {
    if (obj.allPresets) {
      console.log(obj.allPresets);
      obj.allPresets.map((preset) => {
        const { presetName, presetDescription } = preset;
        let itemLi = document.createElement("li");
        itemLi.className = "option";
        itemLi.innerHTML = `<span class="option-text">${presetName}</span>`;
        optionsUl.appendChild(itemLi);
        console.log(main);
      });
    } else {
      // show 'no preset available text' in dropdown
      optionsUl.innerText = "no preset available now";
    }
  });
})();
