const correctOptions=['A','A','A','B','C'];
const quizee=document.querySelector('.quiz-form');
const res=document.querySelector('.reslt');


quizee.addEventListener('submit',e=>{
    e.preventDefault();
    let count=0;
    const userAnswers=[quizee.Q1.value,quizee.Q2.value,quizee.Q3.value,quizee.Q4.value,quizee.Q5.value];
userAnswers.forEach((answer,index)=>{
if(answer===correctOptions[index])
{
    count++;
}

});
//console.log(count);
//  display result
let output=0;
scrollTo(0,0);
res.classList.remove('d-none');
const timer=setInterval(()=>{
    
    res.querySelector('span').textContent=`${output}`;
    if(output==count)
    {
        clearInterval(timer);
    }
    else{
        output++;

    }
},10);

//         percentage formula                 (value/total value)×100%

//scrollTo(0,0);
});

//alert('total scoree is: ' + count);
//alert("Total score is : "+ count);
