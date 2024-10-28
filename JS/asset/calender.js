"use strict";
const listCalender = document.querySelector('.list-calender');const listCalenderDiv = document.querySelector('.list-calender-div');
const today = new Date();
const getMonth_ = String(today).split(" ");
function getData() {
    return new Promise((res, err) => {
        fetch("/Api/api.json").then(data=>{
            res(data.json());
        })
    })
}

getData().then(data=>{
    const monthNow = data[today.getMonth()];

   monthNow.forEach((data,index) => {
        const div = document.createElement('div');
        div.dataset.date = `${index + 1}`;
        div.innerHTML = `<h4>${getMonth_[1]}</h4><span>${data}</span>`;
        listCalenderDiv.appendChild(div);
   });
   const widthDiv = document.querySelector('.list-calender-div > div')
   const widthAllDiv = widthDiv.clientWidth * monthNow.length;
   listCalenderDiv.style.transform = `translateX(-${(getMonth_[2] - 1) * (widthAllDiv / monthNow.length)}px)`
   const getDivId = document.querySelector(`[data-date="${getMonth_[2]}"]`);
   getDivId.style.borderBottom = `5px solid var(--color-task-bg-p)`;
   getDivId.style.backgroundColor = `#62958479`;
   getDivId.style.borderRadius = `1rem`;
if (getDivId.getBoundingClientRect().left <= 10) {
     getDivId.style.marginLeft = "1rem";
}
//    const getTransform = getComputedStyle(listCalenderDiv).transform.match(/matrix\([.+]\)/g);
});

