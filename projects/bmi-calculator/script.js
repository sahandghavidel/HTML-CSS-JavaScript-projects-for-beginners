function fun()
    {
        var cm = document.getElementById("cm").value ;
        cm = cm/100;
        var w = document.getElementById("weight").value;
        var bmi = w/(cm*cm);
        document.getElementById("bmi").value = bmi;
        if(bmi<18.5)
        {
            document.querySelector("h4").innerHTML = 'Under weight';
        }
        else if(bmi>=18.5 && bmi <=24.9)
        {
            document.querySelector("h4").innerHTML = 'Normal weight';
        }
        else if(bmi>=25 && bmi <= 29.9)
        {
            document.querySelector("h4").innerHTML = 'Overweight';
        }
        else if(bmi>=30)
        {
            document.querySelector("h4").innerHTML = 'Obesity';
        }
    }