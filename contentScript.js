(() => {
  // show all presets on action clicked

  // create the div for preset element
  let main = document.getElementsByClassName("GutterDivStyled-sc-19aqteq-0")[5];
  console.log(main);
  //   main.innerText = "hello";
  //   let show = false;

  const dropdownDiv = document.createElement("div");
  const selectPresetBtn = document.createElement("button");
  selectPresetBtn.innerText = "select preset from here";
  const presetNameListUl = document.createElement("ul");
  presetNameListUl.style.position = "absolute";

  //   const presetLi = document.createElement("li");
  dropdownDiv.appendChild(selectPresetBtn);
  dropdownDiv.appendChild(presetNameListUl);
  main.prepend(dropdownDiv);
  presetNameListUl.addEventListener("click", function (e) {
    console.log(e.target.innerText);
  });
  presetNameListUl.style.display = "none";
  selectPresetBtn.addEventListener("click", function () {
    presetNameListUl.style.display = "block";
  });

  console.log(presetNameListUl);
  chrome.storage.sync.get("allPresets", (obj) => {
    if (obj.allPresets) {
      console.log("show drpdown", obj.allPresets);
      // show presets in dropdown list
      obj.allPresets.map((preset) => {
        const { presetName, presetDescription } = preset;
        console.log(presetName);
        console.log(presetDescription);
        let itemBtn = document.createElement("button");
        itemBtn.innerText = presetName;

        itemBtn.addEventListener("click", function () {
          presetNameListUl.style.display = "none";
        });
        presetNameListUl.appendChild(itemBtn);
      });
    } else {
      // show 'no preset available text' in dropdown
      presetNameListUl.innerText = "no preset available now";
    }
  });
})();
