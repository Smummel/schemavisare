
const monday = document.getElementById('mon');
const tuesday = document.getElementById('tue');
const wednesday = document.getElementById('wed');
const thursday = document.getElementById('thu');
const friday = document.getElementById('fri');

function generate(){

    let LessonDay = document.getElementById('day').value;
    let LessonBegin = document.getElementById('begin').value;
    let LessonEnd = document.getElementById('end').value;
    let LessonColor = document.getElementById('color').value;
    let LessonName = document.getElementById('name').value;
    let textColor = document.getElementById('textColor').value;

    


    let newLesson = document.createElement('div');
    newLesson.style.backgroundColor = LessonColor;
    newLesson.innerHTML = LessonName;
    newLesson.style.color = textColor;
    newLesson.classList = 'lesson';
    newLesson.style.gridRowStart = LessonBegin;
    newLesson.id = LessonName;
    newLesson.style.gridRowEnd = LessonEnd;
    document.getElementById(LessonDay).append(newLesson);
    console.log('created',LessonDay,LessonBegin,LessonEnd,LessonColor,LessonName);
}

function remove(){
    
    let LessonName = document.getElementById('name').value;
    let theLesson = document.getElementById(LessonName);
    console.log(theLesson)
    theLesson.parentNode.removeChild(theLesson);
}