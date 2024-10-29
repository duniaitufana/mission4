"use strict";
const sectionMain = document.querySelector('.main-content');
const btnAddTask = document.querySelector('.btn-add-task > div:nth-of-type(1)');
const sectionManageTask = document.querySelector('.section-manage-task');
const btnSubmitTask = document.querySelector('.section-manage-task .submit');
const labelTextarea = document.querySelector('label[for="input-task"] > span');
const textArea = document.querySelector('.input-task textarea');
const labelInfoTask = document.querySelector('label[for="date"] > span');
const valueDate = document.getElementById('date');
const valueTime = document.getElementById('time');
const valueOptions = document.querySelectorAll('.opt-priority');
const option = document.querySelectorAll('.opt-priority > option');
const btnSubmitTask_edit = document.querySelector('.section-edit-task .submit-edit');
const labelTextareaEdit = document.querySelector('.section-edit-task > form .input-task > label[for="input-task"] > span');
const textAreaEdit = document.querySelector('.section-edit-task > form .input-task textarea');
const labelInfoTaskEdit = document.querySelector('.section-edit-task > form .input-info-task label[for="date"] > span');
const valueDateEdit = document.getElementById('date-edit');
const valueTimeEdit = document.getElementById('time-edit');
const valueOptionsEdit = document.querySelectorAll('.section-edit-task > form > .input-info-task .opt-priority');
const optionEdit = document.querySelectorAll('.section-edit-task > form > .input-info-task .opt-priority > option');
const labelTitleTaskEdit = document.querySelector('.section-edit-task > form .input-task > label[for="input-title-task"] > span');
const inputTitleEdit = document.querySelector('.section-edit-task > form .input-task > input[name="title-task"]');
const sectionEditTask = document.querySelector('.section-edit-task');
const sectionListTaskDoneHead = document.querySelector('.section-list-task-done-head')
const sectionListTaskHead = document.querySelector('.section-list-task-head');
const labelTitleTask = document.querySelector('label[for="input-title-task"] > span');
const inputTitle = document.querySelector('input[name="title-task"]');
const listTask = document.querySelectorAll('.list-task');
const editTask = document.querySelectorAll('.edit-task');
const headEdit = document.querySelectorAll('.section-list-task-head-edit');
const removerBg = document.querySelector('.remover-bg');
const timeNowP = document.querySelector('.time-now');
const infoNullTask = document.querySelector('.info-null-task');
const infoNullTaskProgress = document.querySelector('.info-null-task-progress');
const infoNullTaskDone = document.querySelector('.info-null-task-done');
const getSVGInSwitchEl = document.querySelectorAll('.switch-list svg,.switch-progress svg,.switch-done svg');
const switchEl = document.querySelector('.switch');
const mainContentDiv = document.querySelector('.main-content > div');
const widthContentTask = document.querySelector('.main-content > div section');
const listCalender_ = document.querySelector('.list-calender');

textArea.value = "";
getSVGInSwitchEl[0].style.borderBottom = ".6rem solid #387478";
const now = new Date();
valueDate.setAttribute("value",`${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`);

function validationTime(getDataTime) {
    const lowtimeValue = getDataTime.find(data=>{
        return data >= Number(valueTime.value.replace(/[:]/g,""));
    });
    if (lowtimeValue) {
        const valueOption = valueOptions[0].options.selectedIndex;
        const div = document.createElement('div');
        div.classList.add('list-task');
        div.dataset.time = `${Number(valueTime.value.replace(/[:]/g,""))}`;
        div.dataset.priority = `${option[valueOption].value}`;
        div.innerHTML = `<div>
                            <div class="radio-task">
                                <div></div>
                            </div>
                            <div class="radio-task-line"></div>
                        </div>
                        <div>
                            <div>
                            <h4 class="title-task">${inputTitle.value} &vert; ${option[valueOption].value}</h4><span class="time-task">${valueTime.value}</span>
                            </div>
                            <p>${textArea.value}</p>
                            <div class="edit-task" data-hide="close" data-task="list">
                                <svg class="w-6 h-6 text-gray-800 dark:text-white trash-bin" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="red" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                                </svg>
                                <svg class="w-6 h-6 text-gray-800 dark:text-white edit-task-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
                                </svg>
                                
                            </div>
                        </div>`;
        const addListTask = document.querySelectorAll(`.list-task[data-time="${lowtimeValue}"]`);
        addListTask[addListTask.length - 1].insertAdjacentElement("beforebegin",div);
        valueDate.value = `${now[1]-now[2]-now[3]}`;
        inputTitle.value = "";
        textArea.value = "";
        valueTime.value = "00:00";
        sectionManageTask.dataset.hide = "close";
    } else {
        const hightimeValue = getDataTime[getDataTime.length - 1];
        const valueOption = valueOptions[0].options.selectedIndex;
        const div = document.createElement('div');
        div.classList.add('list-task');
        div.dataset.time = `${Number(valueTime.value.replace(/[:]/g,""))}`;
        div.dataset.priority = `${option[valueOption].value}`;
        div.innerHTML = `<div>
                            <div class="radio-task">
                                <div></div>
                            </div>
                            <div class="radio-task-line"></div>
                        </div>
                        <div>
                            <div>
                            <h4 class="title-task">${inputTitle.value} &vert; ${option[valueOption].value}</h4><span class="time-task">${valueTime.value}</span>
                            </div>
                            <p>${textArea.value}</p>
                            <div class="edit-task" data-hide="close" data-task="list">
                                <svg class="w-6 h-6 text-gray-800 dark:text-white trash-bin" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="red" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                                </svg>
                                <svg class="w-6 h-6 text-gray-800 dark:text-white edit-task-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
                                </svg>
                                
                            </div>
                        </div>`;
        const addListTask = document.querySelectorAll(`.list-task[data-time="${hightimeValue}"]`);
        addListTask[addListTask.length - 1].insertAdjacentElement("afterend",div);
        valueDate.value = `${now[1]-now[2]-now[3]}`;
        inputTitle.value = "";
        textArea.value = "";
        valueTime.value = "00:00";
        sectionManageTask.dataset.hide = "close";          
    }
}

function addTask() {
    const valueOption = valueOptions[0].options.selectedIndex;
    const div = document.createElement('div');
    div.classList.add('list-task');
    div.dataset.time = `${Number(valueTime.value.replace(/[:]/g,""))}`;
    div.dataset.priority = `${option[valueOption].value}`;
    div.dataset.datetask = `${valueDate.value}`;
    div.innerHTML = `<div>
                        <div class="radio-task">
                            <div></div>
                        </div>
                        <div class="radio-task-line"></div>
                    </div>
                    <div>
                        <div>
                        <h4 class="title-task">${inputTitle.value} &vert; ${option[valueOption].value}</h4><span class="time-task">${valueTime.value}</span>
                        </div>
                        <p>${textArea.value}</p>
                        <div class="edit-task" data-hide="close" data-task="list">
                            <svg class="w-6 h-6 text-gray-800 dark:text-white trash-bin" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="red" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                            </svg>
                            <svg class="w-6 h-6 text-gray-800 dark:text-white edit-task-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
                            </svg>
                            
                        </div>
                    </div>`;
    sectionListTaskHead.insertAdjacentElement("afterend",div);
    valueDate.value = `${now[1]-now[2]-now[3]}`;
    inputTitle.value = "";
    textArea.value = "";
    valueTime.value = "00:00";
    sectionManageTask.dataset.hide = "close";
}

function addEditTask(getIndex) {
    const listTask = document.querySelectorAll('.list-task');
    const valueOption = valueOptionsEdit[0].options.selectedIndex;
    listTask[getIndex].dataset.time = `${Number(valueTimeEdit.value.replace(/[:]/g,""))}`;
    listTask[getIndex].dataset.priority = `${optionEdit[valueOption].value}`;
    listTask[getIndex].innerHTML = `<div>
                                    <div class="radio-task">
                                        <div></div>
                                    </div>
                                    <div class="radio-task-line"></div>
                                </div>
                                <div>
                                    <div>
                                    <h4 class="title-task">${inputTitleEdit.value} &vert; ${optionEdit[valueOption].value}</h4><span class="time-task">${valueTimeEdit.value}</span>
                                    </div>
                                    <p>${textAreaEdit.value}</p>
                                    <div class="edit-task" data-hide="close" data-task="list">
                                        <svg class="w-6 h-6 text-gray-800 dark:text-white trash-bin" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="red" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                                        </svg>
                                        <svg class="w-6 h-6 text-gray-800 dark:text-white edit-task-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
                                        </svg>
                                        
                                    </div>
                                </div>`;
    inputTitle.value = "";
    textArea.value = "";
    valueTime.value = "";
    sectionManageTask.dataset.hide = "close";
    removerBg.style.display = "none";
    sectionEditTask.style.display = "none"; 
}

function reset(){
    if (sectionManageTask.dataset.hide === "close") {
        labelTitleTaskEdit.innerText = "*";
        labelTextareaEdit.innerText = "*";
        labelInfoTaskEdit.innerText ="*";
    } else {
        labelTitleTask.innerText = "*";
        labelTextarea.innerText = "*";
        labelInfoTask.innerText ="*";
    }

}

function validationInput(getData) {
    if (!textArea.value && !inputTitle.value && !valueTime.value && !valueDate.value) {
        reset();
        labelTitleTask.innerText = "* Harap isi kolom input";
        labelTextarea.innerText = "* Harap masukkan task anda";
        labelInfoTask.innerText = "Harap masukkan jam dan tanggal";
    }else if (!textArea.value && !inputTitle.value) {
        reset();
        labelTextarea.innerText = "* Harap masukkan task anda";
        labelTitleTask.innerText = "* Harap isi kolom input";
    }else if (!valueTime.value && !textArea.value || !valueDate.value && !textArea.value) {
        reset();
        labelInfoTask.innerText = "* Harap masukkan jam dan tanggal";
        labelTextarea.innerText = "* Harap masukkan task anda";   
    }else if (!valueTime.value && !inputTitle.value || !valueDate.value && !inputTitle.value) {
        reset();
        labelInfoTask.innerText = "* Harap masukkan jam dan tanggal";
        labelTitleTask.innerText = "* Harap isi kolom input";   
    }else if (!textArea.value) {
        reset();    
        labelTextarea.innerText = "* Harap masukkan task anda";
    }else if (!inputTitle.value) {
        reset();
        labelTitleTask.innerText = "* Harap isi kolom input";   
    }else if (!valueTime.value) {
        reset();
        labelInfoTask.innerText = "* Harap masukkan jam dan tanggal";   
    }else if (!valueDate.value) {
        reset();
        labelInfoTask.innerText = "* Harap masukkan jam dan tanggal";   
    }else {
        reset()
        validationTime(getData);
        removerBg.style.display = "none";
    } 
}

function getMonth() {
    
}

function newValidationInput() {
    if (!textArea.value && !inputTitle.value && !valueTime.value && !valueDate.value) {
        reset();
        labelTitleTask.innerText = "* Harap isi kolom input";
        labelTextarea.innerText = "* Harap masukkan task anda";
        labelInfoTask.innerText = "Harap masukkan jam dan tanggal";
    }else if (!textArea.value && !inputTitle.value) {
        reset();
        labelTextarea.innerText = "* Harap masukkan task anda";
        labelTitleTask.innerText = "* Harap isi kolom input";
    }else if (!valueTime.value && !textArea.value || !valueDate.value && !textArea.value) {
        reset();
        labelInfoTask.innerText = "* Harap masukkan jam dan tanggal";
        labelTextarea.innerText = "* Harap masukkan task anda";   
    }else if (!valueTime.value && !inputTitle.value || !valueDate.value && !inputTitle.value) {
        reset();
        labelInfoTask.innerText = "* Harap masukkan jam dan tanggal";
        labelTitleTask.innerText = "* Harap isi kolom input";   
    }else if (!textArea.value) {
        reset();    
        labelTextarea.innerText = "* Harap masukkan task anda";
    }else if (!inputTitle.value) {
        reset();
        labelTitleTask.innerText = "* Harap isi kolom input";   
    }else if (!valueTime.value) {
        reset();
        labelInfoTask.innerText = "* Harap masukkan jam dan tanggal";   
    }else if (!valueDate.value) {
        reset();
        labelInfoTask.innerText = "* Harap masukkan jam dan tanggal";   
    }else {
        reset()
        addTask();
        removerBg.style.display = "none";
    } 
}

function editValidationInput(getIndex) {
    if (!textAreaEdit.value && !inputTitleEdit.value && !valueTimeEdit.value && !valueDateEdit.value) {
        reset();
        labelTitleTaskEdit.innerText = "* Harap isi kolom input";
        labelTextareaEdit.innerText = "* Harap masukkan task anda";
        labelInfoTaskEdit.innerText = "* Harap masukkan jam dan tanggal";
    }else if (!textAreaEdit.value && !inputTitleEdit.value) {
        reset();
        labelTextareaEdit.innerText = "* Harap masukkan task anda";
        labelTitleTaskEdit.innerText = "* Harap isi kolom input";
    }else if (!valueTimeEdit.value && !textAreaEdit.value || !valueDateEdit.value && !textAreaEdit.value) {
        reset();
        labelInfoTaskEdit.innerText = "* Harap masukkan jam dan tanggal";
        labelTextareaEdit.innerText = "* Harap masukkan task anda";   
    }else if (!valueTimeEdit.value && !inputTitleEdit.value || !valueDateEdit.value && !inputTitleEdit.value) {
        reset();
        labelInfoTaskEdit.innerText = "* Harap masukkan jam dan tanggal";
        labelTitleTaskEdit.innerText = "* Harap isi kolom input";   
    }else if (!textAreaEdit.value) {
        reset();    
        labelTextareaEdit.innerText = "* Harap masukkan task anda";
    }else if (!inputTitleEdit.value) {
        reset();
        labelTitleTaskEdit.innerText = "* Harap isi kolom input";   
    }else if (!valueTimeEdit.value) {
        reset();
        labelInfoTaskEdit.innerText = "* Harap masukkan jam dan tanggal";   
    }else if (!valueDateEdit.value) {
        reset();
        labelInfoTaskEdit.innerText = "* Harap masukkan jam dan tanggal";   
    }else {
        reset();
        addEditTask(getIndex);
        removerBg.style.display = "none";
    } 
}


function timer() {
    setInterval(()=>{
        const listTask = document.querySelectorAll('.list-task');
        const now = String(new Date()).split(" ");
        const convert = now[4].split(":");
        const timeNow = Number(`${convert[0]}${convert[1]}`);
        const [...get] = listTask;
        timeNowP.innerText = `${now[1]} ${now[2]}, ${now[3]} - ${now[4]}`;
        const getDataTime = get.map(data=>{
           return Number(data.dataset.time);
        });
        const findData = getDataTime.find(data=>{
            return data === timeNow;
        });
        if (findData) {
            const getData = document.querySelectorAll(`.list-task[data-time="${findData}"]`);
            const changeDataList = document.querySelectorAll(`.list-task[data-time="${findData}"] > div:nth-of-type(2) > .edit-task`);

            changeDataList.forEach(data=>{
                data.innerHTML = `<svg class="w-6 h-6 text-gray-800 dark:text-white trash-bin" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="red" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                </svg>
                <svg class="w-6 h-6 text-gray-800 dark:text-white done-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clip-rule="evenodd"/>
                </svg>`;
                data.dataset.task = "progress";
            });
            getData.forEach((data,index)=>{
                const taskProgress = document.querySelectorAll('.task-progress');
                const div = document.createElement('div');
                div.classList.add('task-progress');
                const innerContent = data.innerHTML;
                div.innerHTML = innerContent;
                if (taskProgress.length <= 0) {
                    const getHeadProgress = document.querySelector('.section-list-task-progress-head');
                    getHeadProgress.insertAdjacentElement("afterend",div);
                } else {
                    const arr = taskProgress;
                    arr[arr.length - 1].insertAdjacentElement("afterend",div);
                }

                getData.forEach(data=>{
                    data.remove();
                })
                validationBtnEditisAvailable();
                timer();
            })
        } else {
            timer();
        }
    },1000)
}

function getDeleteAndEdit(){  
    const trashBin = document.querySelectorAll('[data-task="list"] .trash-bin');
    const listTask = document.querySelectorAll('.list-task');
    if (trashBin.length > 0) {
        const editTaskIcon = document.querySelectorAll('[data-task="list"] .edit-task-icon');
        trashBin.forEach((data,index)=>{
        data.addEventListener("click",()=>{
        listTask[index].remove();
        validationBtnEditisAvailable();
        })
        });
        editTaskIcon.forEach((data,index)=>{
            data.addEventListener("click",()=>{
                sectionEditTask.style.display = "flex";
                removerBg.style.display = "block";
                const getTitle = document.querySelector('.list-task > div:nth-of-type(2) > div .title-task').innerText;
                const arrTitle = getTitle.split(" ");
                inputTitleEdit.value = `${arrTitle[0]}`;
                valueTimeEdit.value = `${document.querySelector('.list-task > div:nth-of-type(2) > div .time-task').innerText}`;
                textAreaEdit.value = `${document.querySelector('.list-task > div:nth-of-type(2) > p').innerText}`;
                btnSubmitTask_edit.addEventListener("click",()=>{
                editValidationInput(index);
               
                });
                headEdit.forEach(data=>{
                    data.dataset.hide = "close";
                }) 
            })
            
        })
        }
}

function getTrashAndDone() {
    const progressTask = document.querySelectorAll('.task-progress');
    const trashBin = document.querySelectorAll('[data-task="progress"] .trash-bin');
    const doneTaskIcon = document.querySelectorAll('[data-task="progress"] .done-icon');
    trashBin.forEach((data,index)=>{
        data.addEventListener("click",()=>{
        progressTask[index].remove();
        headEdit.forEach(data=>{
            data.dataset.hide = "close";
        })
        validationBtnEditisAvailable();});
    });
    doneTaskIcon.forEach((data,index)=>{
        data.addEventListener("click",()=>{
        const changeDataTask = document.querySelectorAll('[data-task="progress"]');
        changeDataTask[index].innerHTML = `<svg class="w-6 h-6 text-gray-800 dark:text-white trash-bin" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="red" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                </svg><svg xmlns="http://www.w3.org/2000/svg" class="line-through" fill="white" width="20" height="20" viewBox="0 0 512 512"><path d="M161.3 144c3.2-17.2 14-30.1 33.7-38.6c21.1-9 51.8-12.3 88.6-6.5c11.9 1.9 48.8 9.1 60.1 12c17.1 4.5 34.6-5.6 39.2-22.7s-5.6-34.6-22.7-39.2c-14.3-3.8-53.6-11.4-66.6-13.4c-44.7-7-88.3-4.2-123.7 10.9c-36.5 15.6-64.4 44.8-71.8 87.3c-.1 .6-.2 1.1-.2 1.7c-2.8 23.9 .5 45.6 10.1 64.6c4.5 9 10.2 16.9 16.7 23.9L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l448 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-209.9 0-.4-.1-1.1-.3c-36-10.8-65.2-19.6-85.2-33.1c-9.3-6.3-15-12.6-18.2-19.1c-3.1-6.1-5.2-14.6-3.8-27.4zM348.9 337.2c2.7 6.5 4.4 15.8 1.9 30.1c-3 17.6-13.8 30.8-33.9 39.4c-21.1 9-51.7 12.3-88.5 6.5c-18-2.9-49.1-13.5-74.4-22.1c-5.6-1.9-11-3.7-15.9-5.4c-16.8-5.6-34.9 3.5-40.5 20.3s3.5 34.9 20.3 40.5c3.6 1.2 7.9 2.7 12.7 4.3c0 0 0 0 0 0s0 0 0 0c24.9 8.5 63.6 21.7 87.6 25.6c0 0 0 0 0 0l.2 0c44.7 7 88.3 4.2 123.7-10.9c36.5-15.6 64.4-44.8 71.8-87.3c3.6-21 2.7-40.4-3.1-58.1l-75.7 0c7 5.6 11.4 11.2 13.9 17.2z"/></svg>`;
        changeDataTask[index].dataset.hide = "close";
        editTask.forEach(data=>{
            data.dataset.hide = "close";
        });
        changeDataTask[index].dataset.task = "done";
        const getInnerContent = progressTask[index].innerHTML;
        const taskDone = document.querySelectorAll('.task-done');
        headEdit.forEach(data=>{
            data.dataset.hide = "close";
        });
        if (taskDone.length <= 0) {
            const div = document.createElement('div');
            div.classList.add('task-done');
            div.innerHTML = getInnerContent;
            sectionListTaskDoneHead.insertAdjacentElement("afterend",div);
        } else {
            const div = document.createElement('div');
            div.classList.add('task-done');
            div.innerHTML = getInnerContent;
            taskDone[taskDone.length - 1].insertAdjacentElement("afterend",div);
        }
        progressTask[index].remove();
        validationBtnEditisAvailable();
    });
    });

}

function getDoneAndClear() {
    const doneTask = document.querySelectorAll('.task-done');
    const trashBin = document.querySelectorAll('[data-task="done"] .trash-bin');
    const lineThrough = document.querySelectorAll('.line-through');
    const getTitleDone = document.querySelectorAll('.task-done > div:nth-of-type(2) > div h4');
    const getPDone = document.querySelectorAll('.task-done > div:nth-of-type(2) p');
    trashBin.forEach((data,index)=>{
        data.addEventListener("click",()=>{
        doneTask[index].remove();
        headEdit.forEach(data=>{
            data.dataset.hide = "close";
        })
        validationBtnEditisAvailable();});
    });
    lineThrough.forEach((data,index)=>{
        data.addEventListener("click",()=>{
            if (getTitleDone[index].style.textDecoration !== "line-through" && getPDone[index].style.textDecoration !== "line-through") {
                getTitleDone[index].style.textDecoration = "line-through";
                getPDone[index].style.textDecoration = "line-through";
            } else {
                getTitleDone[index].style.textDecoration = "none";
                getPDone[index].style.textDecoration = "none";
            }
        })
    })

}

function validationEdit(getdata) {
    if (getdata.dataset.hide === "close") {
        headEdit.forEach(data=>{
        data.dataset.hide = "close";
        })
        getdata.dataset.hide = "open";
    } else {
        getdata.dataset.hide = "close";
    }
}

function validationBtnEditisAvailable() {
    const dataList_list = document.querySelectorAll('.edit-task[data-task="list"]');
    const dataList_progress = document.querySelectorAll('.edit-task[data-task="progress"]');
    const dataList_done = document.querySelectorAll('.edit-task[data-task="done"]');
    function reset() {
        infoNullTask.style.display="flex";
        infoNullTaskProgress.style.display="flex";
        infoNullTaskDone.style.display="flex";
        headEdit[0].dataset.isavailable = "false";
        headEdit[1].dataset.isavailable = "false";
        headEdit[2].dataset.isavailable = "false";
    }
    if (dataList_list.length <= 0 && dataList_progress.length <= 0 && dataList_done.length <= 0) {
        reset();
        infoNullTask.style.display="flex";
        infoNullTaskProgress.style.display="flex";
        infoNullTaskDone.style.display="flex";
        headEdit[0].dataset.isavailable = "false";
        headEdit[1].dataset.isavailable = "false";
        headEdit[2].dataset.isavailable = "false";
    } else if(dataList_list.length > 0 && dataList_progress.length > 0) {
        reset();
        infoNullTask.style.display="none";
        infoNullTaskProgress.style.display="none";
        headEdit[0].dataset.isavailable = "true";
        headEdit[1].dataset.isavailable = "true";
    } else if(dataList_list.length > 0 && dataList_done.length > 0) {
        reset();
        infoNullTask.style.display="none";
        infoNullTaskDone.style.display="none";
        headEdit[0].dataset.isavailable = "true";
        headEdit[2].dataset.isavailable = "true";
    }else if(dataList_progress.length > 0 && dataList_done.length > 0) {
        reset();
        infoNullTaskProgress.style.display="none";
        infoNullTaskDone.style.display="none";
        headEdit[1].dataset.isavailable = "true";
        headEdit[2].dataset.isavailable = "true";
    }else if(dataList_list.length > 0) {
        reset();
        infoNullTask.style.display="none";
        headEdit[0].dataset.isavailable = "true";
    }else if(dataList_done.length > 0) {
        reset();
        infoNullTaskDone.style.display="none";
        headEdit[2].dataset.isavailable = "true";
    } else if(dataList_progress.length > 0) {
        reset();
        infoNullTaskProgress.style.display="none";
        headEdit[1].dataset.isavailable = "true";
    } else {
        reset();
        infoNullTask.style.display="none";
        infoNullTaskProgress.style.display="none";
        infoNullTaskDone.style.display="none";
        headEdit[0].dataset.isavailable = "true";
        headEdit[1].dataset.isavailable = "true";
        headEdit[2].dataset.isavailable = "true";
    }
}

function switchValidation() {
    getSVGInSwitchEl.forEach(data=>{
        data.style.borderBottom = "0";
    })
}

function warnResizeCalender(){
    listCalender_.innerHTML = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 512 512" width="30" height="30" xml:space="preserve">
<polygon style="fill:#FFA418;" points="0,477.703 256,477.703 289.391,256 256,34.297 "/>
<polygon style="fill:#FF8A1E;" points="256,34.297 256,477.703 512,477.703 "/>
<g>
	<circle style="fill:#324860;" cx="256" cy="405.359" r="16.696"/>
	<rect x="239.304" y="177.185" style="fill:#324860;" width="33.391" height="178.087"/>
</g>
</svg><p>Anda melakukan resize di browser, silahkan refresh untuk mendapatkan tanggal di bagian ini</p>`;
    listCalender_.style.textAlign = "center";
    listCalender_.style.fontSize = "1.7rem";
    listCalender_.style.padding = "3rem 2rem";
}

btnAddTask.addEventListener("click",()=> {
    
    if (sectionManageTask.dataset.hide === "close") {
        sectionManageTask.dataset.hide = "open";
        removerBg.style.display = "block";
    } else {
        sectionManageTask.dataset.hide = "close";
    }
})

btnSubmitTask.addEventListener("click",()=> {
    const listTask = document.querySelectorAll('.list-task');

    if (listTask.length <= 0) {
        newValidationInput();
        validationBtnEditisAvailable();
    } else {
        const [...get] = listTask;
        const getDataTime = get.map(data=>{
           return Number(data.dataset.time);
        });
        getDataTime.sort((a,b)=>{
            return a-b;
        });
        validationInput(getDataTime);
    }
    // console.log(Number(valueDate.value.replace(/[-]/g,"")));
    // console.log();
})

headEdit.forEach((data,index)=>{
    validationBtnEditisAvailable();
    data.addEventListener("click",()=>{
        const dataList_list = document.querySelectorAll('.edit-task[data-task="list"]');
        const dataList_progress = document.querySelectorAll('.edit-task[data-task="progress"]');
        const dataList_done = document.querySelectorAll('.edit-task[data-task="done"]');
        const editTask = document.querySelectorAll('.edit-task');
        validationEdit(data);
        getDeleteAndEdit();
        getTrashAndDone();
        getDoneAndClear();

        if (headEdit[0].dataset.hide === "open") {
            dataList_list.forEach(data=>{
                data.dataset.hide = "open";
            });
        }else if(headEdit[1].dataset.hide === "open"){
            dataList_progress.forEach(data=>{
                data.dataset.hide = "open";
            });
        }else if(headEdit[2].dataset.hide === "open"){
            dataList_done.forEach(data=>{
                data.dataset.hide = "open";
            });
        } else {
            editTask.forEach(data=>{
                data.dataset.hide = "close";
            })
        }
    })
})

removerBg.addEventListener("click",()=>{
    if (sectionEditTask.style.display === "flex") {
        reset();
        removerBg.style.display = "none";
        sectionEditTask.style.display = "none";
    } else {
        reset();
        removerBg.style.display = "none";
        sectionManageTask.dataset.hide = "close";

    }
})

getSVGInSwitchEl.forEach((data,index)=>{
    data.addEventListener("click",()=>{
        mainContentDiv.style.transform = `translateX(-${(widthContentTask.clientWidth + 20)* index}px)`;
        switchValidation();
        data.style.borderBottom = ".6rem solid #387478";
    })
    data.addEventListener("mouseenter",()=>{
        data.parentElement.style.backgroundColor = "#38747863";
    });
    data.addEventListener("mouseleave",()=>{
        data.parentElement.style.backgroundColor = "";
    });
})

window.addEventListener("resize",()=>{
    mainContentDiv.style.transform = "translateX(0px)"
    switchValidation();
    getSVGInSwitchEl[0].style.borderBottom = ".6rem solid #387478";
    warnResizeCalender();
})

timer();