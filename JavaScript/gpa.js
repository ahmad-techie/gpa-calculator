window.onload=function(){
    let btn = document.getElementById("calc-btn");
    if(btn){
        btn.addEventListener("click", () => {
            let gradeInput1 = document.getElementById("option1-grade").value;
            let gradeInput2 = document.getElementById("option2-grade").value;
            let gradeInput3 = document.getElementById("option3-grade").value;
            let gradeInput4 = document.getElementById("option4-grade").value;
            let gradeInput5 = document.getElementById("option5-grade").value;
        
            let creditInput1 = document.getElementById("class1-credit").value;
            let creditInput2 = document.getElementById("class2-credit").value;
            let creditInput3 = document.getElementById("class3-credit").value;
            let creditInput4 = document.getElementById("class4-credit").value;
            let creditInput5 = document.getElementById("class5-credit").value;
        
            let gradePoint1 = gradeInput1 * creditInput1;
            let gradePoint2 = gradeInput2 * creditInput2;
            let gradePoint3 = gradeInput3 * creditInput3;
            let gradePoint4 = gradeInput4 * creditInput4;
            let gradePoint5 = gradeInput5 * creditInput5;
        
        
            let totalGradePoints = parseInt(gradePoint1) + parseInt(gradePoint2) + parseInt(gradePoint3) + parseInt(gradePoint4) + parseInt(gradePoint5);
            
        
            let totalCredits = parseInt(creditInput1) + parseInt(creditInput2) + parseInt(creditInput3) + parseInt(creditInput4)+ parseInt(creditInput5);
           
        
            let gpa = totalGradePoints / totalCredits;
            
            let totalGPA = document.getElementById("total-gpa").innerText = gpa.toFixed(1);
        })
        
    }
  }

