(() => {
  window.addEventListener("load", myMain, false);
  function myMain(evt) {
    var jsInitChecktimer = setInterval(checkForJS_Finish, 1000);

    function checkForJS_Finish() {
      let area = document.getElementsByClassName("cover-letter-area")[0];
      console.log("first", typeof area);
      if (area) {
        console.log("hello bitch");
        console.log("dom loaded");

        // create the div for preset element

        console.log("mahtab says hello");
        console.log(area);
        clearInterval(jsInitChecktimer);
        const coverLetter = document.createElement("input");
        area.appendChild(coverLetter);
      }
    }
  }
  // let main = document.querySelector(".cover-letter-area");
  // console.log("loaded", main);
  // const dropdownDiv = document.createElement("div");
  // const coverLetter = document.createElement("input");

  // dropdownDiv.innerHTML = `
  //     <div class="select-menu ">
  //       <div class="select-btn">
  //         <span class="sBtn-text">Select your option</span>
  //         <i class="bx bx-chevron-down"></i>
  //       </div>

  //       <ul class="options" style="height:30vh;overflow-y:scroll" >

  //       </ul>
  //     </div>`;
  // const optionMenu = document.querySelector(".select-menu"),
  //   selectBtn = optionMenu.querySelector(".select-btn"),
  //   optionsUl = optionMenu.querySelector(".options"),
  //   sBtn_text = optionMenu.querySelector(".sBtn-text");
  // console.log("opt", optionsUl);
  // // toggle select btn
  // selectBtn.addEventListener("click", () =>
  //   optionMenu.classList.toggle("active")
  // );
  // // show selected preset cover letter in input field
  // optionsUl.addEventListener("click", (e) => {
  //   sBtn_text.innerText = e.target.innerText;
  //   optionMenu.classList.remove("active");
  //   console.log(e.target.innerText);
  //   // filter the cover letter by selected preset name
  //   chrome.storage.sync.get("allPresets", (obj) => {
  //     if (obj.allPresets) {
  //       console.log(obj.allPresets);
  //       let cover = obj.allPresets.filter(
  //         (preset) => preset.presetName === e.target.innerText
  //       );
  //       console.log({ cover });
  //       coverLetter.value = cover[0].presetDescription;
  //     }
  //   });
  // });

  // console.log(main);
  // // show all the available preset in option list
  // chrome.storage.sync.get("allPresets", (obj) => {
  //   if (obj.allPresets) {
  //     console.log(obj.allPresets);
  //     obj.allPresets.map((preset) => {
  //       let itemLi = document.createElement("li");
  //       itemLi.className = "option";
  //       itemLi.innerHTML = `<span class="option-text">${preset.presetName}</span>`;
  //       optionsUl.appendChild(itemLi);
  //       console.log(main);
  //     });
  //   } else {
  //     // show 'no preset available text' in dropdown
  //     optionsUl.innerText = "no preset available ";
  //   }
  // });
})();
