const createPresetInput = document.getElementById("preset_create_input");
const presetName = document.getElementById("preset_name");
const presetDescription = document.getElementById("preset_description");
const createPreset = document.getElementById("create_preset");
const addPreset = document.getElementById("add_preset");
const presetsDiv = document.getElementById("presets");
console.log(createPresetInput);
createPresetInput.style.display = "none";
createPreset.style.display = "block";
createPreset.addEventListener("click", function () {
  createPresetInput.style.display = "block";
  createPreset.style.display = "none";
});
function presetElement(name, description) {
  // create the div for preset element
  console.log({ name });
  console.log({ description });
  const ElementParentDiv = document.createElement("div");
  const presetNameButton = document.createElement("button");
  presetNameButton.innerText = name;
  const presetDescriptionP = document.createElement("p");
  presetDescriptionP.innerText = description;
  ElementParentDiv.appendChild(presetNameButton);
  ElementParentDiv.appendChild(presetDescriptionP);
  presetsDiv.appendChild(ElementParentDiv);
  console.log(ElementParentDiv);
  console.log(presetsDiv);
}
// show all presets on action clicked
function showPreset() {
  console.log("show func");
  chrome.storage.sync.get("allPresets", (obj) => {
    if (obj.allPresets) {
      console.log("show presets", obj.allPresets);
      // show presets in popup.html
      obj.allPresets.map((preset) => {
        const { presetName, presetDescription } = preset;
        console.log(presetName);
        console.log(presetDescription);
        presetElement(presetName, presetDescription);
      });
      // presetsDiv.innerText = " preset available ";
    } else {
      // show 'no preset available text' in popup.html
      presetsDiv.innerText = "no preset available now";
    }
  });
}
showPreset();
// set the preset in local storage when 'add' button is clicked
addPreset.addEventListener("click", function () {
  console.log("add clicked");
  createPresetInput.style.display = "none";
  createPreset.style.display = "block";

  chrome.storage.sync.get("allPresets", (obj) => {
    if (obj.allPresets) {
      console.log({ obj });
      let current = obj.allPresets;
      chrome.storage.sync.set(
        {
          allPresets: [
            ...current,
            {
              presetName: presetName.value,
              presetDescription: presetDescription.value,
            },
          ],
        },
        showPreset(presetName.value, presetDescription.value)
      );
    } else {
      console.log("its new");
      chrome.storage.sync.set({
        allPresets: [
          {
            presetName: presetName.value,
            presetDescription: presetDescription.value,
          },
        ],
      });
    }
  });
  // function onRemoved() {
  //   console.log("OK");
  // }

  // function onError(e) {
  //   console.log(e);
  // }

  // let removeKitten = chrome.storage.sync.remove("allPresets");
  // removeKitten.then(onRemoved, onError);
});

// const createPresetInput = document.getElementById("preset_create_input");
// const presetName = document.getElementById("preset_name");
// const presetDescription = document.getElementById("preset_description");
// const createPreset = document.getElementById("create_preset");
// const addPreset = document.getElementById("add_preset");
// console.log(createPresetInput);
// createPresetInput.style.display = "none";
// createPreset.style.display = "block";
// createPreset.addEventListener("click", function () {
//   createPresetInput.style.display = "block";
//   createPreset.style.display = "none";
// });
// const fetchPresets = () => {
//   return new Promise((resolve) => {
//     chrome.storage.sync.get("allPresets", (obj) => {
//       resolve(obj ? JSON.parse(JSON.stringify(obj)) : []);
//     });
//   });
// };
// addPreset.addEventListener("click", function () {
//   console.log("add clicked");
//   createPresetInput.style.display = "none";
//   createPreset.style.display = "block";
//   let currentPresets = [];
//   let allPresets = "all";
//   console.log(presetName.value);
//   console.log(presetDescription.value);

//   const addNewPresetEventHandler = async () => {
//     const newPreset = {
//       presetName: presetName.value,
//       presetDescription: presetDescription.value,
//     };

//     currentPresets = await fetchPresets();

//     await chrome.storage.sync.set(
//       {
//         allPresets: JSON.stringify([...currentPresets, newPreset]),
//       },
//       function (data) {
//         console.log("Value is set to " + data);
//         console.log("Value is " + JSON.stringify(currentPresets));
//       }
//     );
//   };
//   addNewPresetEventHandler();
// });
