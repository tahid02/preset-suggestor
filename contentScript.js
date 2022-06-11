(() => {
  window.addEventListener("load", myMain, false);
  // create dropdown div
  function createDropdownDiv() {
    const dropdownDiv = document.createElement("div");

    dropdownDiv.innerHTML = `
        <div style="display: flex; justify-content: space-between;padding-bottom:1rem" id="ext_textDropdown">
            <div 
              style="display: flex;
                    align-items: flex-end;  
                    font-size: .9rem;
                    font-weight: 500;">
              <div>Cover Letter</div>
            </div>
            <div class="select-menu ">
                <div class="select-btn" style="background-color:#FAC213;border:1px solid black">
                  <span class="sBtn-text">Select a cover letter preset</span>
                    <img src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" style="width:1rem" alt="arrow" />
                </div>

                <ul class="options" style="height:30vh;overflow-y:scroll;position:absolute" >

                </ul>
              </div>
            </div>
     `;
    return dropdownDiv;
  }
  function myMain(evt) {
    var jsInitChecktimer = setInterval(checkForJS_Finish, 1000);

    function checkForJS_Finish() {
      let coverArea = document.getElementsByClassName("cover-letter-area")[0];
      // let coverArea = document.getElementsByTagName("label")[3];
      console.log("first", typeof coverArea);
      console.log("cov", coverArea);
      if (coverArea) {
        // stop searching for cover letter area element
        clearInterval(jsInitChecktimer);
        // now , create dropdown
        const dropdown = createDropdownDiv();
        // append this dropdown in the found cover letter area element
        coverArea.prepend(dropdown);
        document.getElementById("cover_letter_label").remove();

        const optionMenu = document.querySelector(".select-menu"),
          selectBtn = optionMenu.querySelector(".select-btn"),
          optionsUl = optionMenu.querySelector(".options"),
          sBtn_text = optionMenu.querySelector(".sBtn-text");

        console.log(optionsUl);
        // toggle select btn
        selectBtn.addEventListener("click", () =>
          optionMenu.classList.toggle("active")
        );
        // show all the available preset in option list
        chrome.storage.sync.get("allPresets", (obj) => {
          if (obj.allPresets) {
            console.log(obj.allPresets);
            obj.allPresets.map((preset) => {
              let itemLi = document.createElement("li");
              itemLi.className = "option";
              itemLi.innerHTML = `<span class="option-text">${preset.presetName}</span>`;
              optionsUl.appendChild(itemLi);
            });
          } else {
            // show 'no preset available text' in dropdown
            optionsUl.innerText = "no preset available ";
          }
        });

        // show selected preset cover letter in input field
        optionsUl.addEventListener("click", (e) => {
          sBtn_text.innerText = e.target.innerText;
          optionMenu.classList.remove("active");
          console.log(e.target.innerText);
          // filter the cover letter by selected preset name
          chrome.storage.sync.get("allPresets", (obj) => {
            if (obj.allPresets) {
              console.log(obj.allPresets);
              let cover = obj.allPresets.filter(
                (preset) => preset.presetName === e.target.innerText
              );
              console.log({ cover });
              const coverTextArea = document.getElementsByTagName("textarea");
              console.log(coverTextArea);
              coverTextArea[0].value = cover[0].presetDescription;
            }
          });
        });
      }
    }
  }
})();
