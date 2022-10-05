

document.onreadystatechange = function settime() {


finised_project = document.querySelector('.bussiness-follower').children[0].children[0]
enrolled_project = document.querySelector('.bussiness-follower').children[1].children[0]
team_work = document.querySelector('.bussiness-follower').children[2].children[0]
satisfaction_rate = document.querySelector('.bussiness-follower').children[3].children[0]

    count = 1;
    setInterval( () => {
        if (count <= 1093)  {  
            count++;  
            finised_project.innerText = count;    
        }
    }, 10);

    count = 1;
    setInterval( () => {
    if (count <= 3355)  {  
        count++;  
        enrolled_project.innerText = count;    
    }
    }, 10);

    count = 1;
    setInterval( () => {
    if (count <= 40)  {  
        count++;  
        team_work.innerText = count;    
    }
    }, 10);

    count = 1;
    setInterval( () => {
    if (count <= 70)  {  
        count++;  
        satisfaction_rate.innerText = count;    
    }
    }, 10);
}


setTimeout(() =>{
    document.querySelector('.bussiness-h1').innerText = "We have made your work is easy"
},3000);