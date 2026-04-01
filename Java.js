nom=prompt('Quel est votre prénom svp ?');
alert(DireBonjour(nom));

function DireBonjour(x)
{
    return ('Bonjour ' + x+',nous allons découvrir quel type de verre vous êtes !');
}

function change()
{
    var v=prompt("Choisissez une couleur (en anglais ou en hexadécimal)");
    document.body.style.backgroundColor = v;
}

function question()
{
    var radios1 =  document.getElementsByName('1');
    var radios2 =  document.getElementsByName('2');
    var radios3 =  document.getElementsByName('3');
    var value1;
    var value2;
    var value3;

    for(var i = 0; i < radios1.length; i++)
    {
        if(radios1[i].checked)
        {
            value1 = radios1[i].value;
        }
    }
    
     for(var i = 0; i < radios2.length; i++)
    {
        if(radios2[i].checked)
        {
            value2 = radios2[i].value;
        }
    }
    
     for(var i = 0; i < radios3.length; i++)
    {
        if(radios3[i].checked)
        {
            value3 = radios3[i].value;
        }
    }
    
    if((value1=="toto" && value2=="toto") || (value2=="toto" && value3=="toto") || (value1=="toto" && value3=="toto"))
    {
        document.getElementById("LA").innerHTML=nom+", Vous êtes le verre oeuf cassé, par décret du roi !";
    }
    else if((value1=="titi" && value2=="titi") || (value2=="titi" && value3=="titi") || (value1=="titi" && value3=="titi"))
    {
        document.getElementById("LA").innerHTML=nom+", Vous serez une pinte car rien ne vous ravi plus que votre teint alcoolisé !";
    }
    else if((value1=="tutu" && value2=="tutu") || (value2=="tutu" && value3=="tutu") || (value1=="tutu" && value3=="tutu"))
    {
        document.getElementById("LA").innerHTML=nom+", Vous vous métamorphosez en verre de cantine car vous rêvez de remonter le temps !";
    }
    else if((value1=="tata" && value2=="tata") || (value2=="tata" && value3=="tata") || (value1=="tata" && value3=="tata"))
    {
        document.getElementById("LA").innerHTML=nom+", Vous ne connaissez pas l'existence des verres, par conséquent, vous êtes un ver de terre !";
    }
    else
    {
        document.getElementById("LA").innerHTML=nom+", Vous êtes le verre en verre le plus vert que tous les vers aient vu vers ici de tout l'hiver !";
    }
    const btn = document.getElementById("valider");
    btn.textContent = "Recommencer";

    
    btn.style.backgroundColor = "white";
    btn.style.border = "2px solid black";
    btn.style.color = "black";
}


function recommencer()
{
    window.location.href = "https://liorbeer07-ship-it.github.io/liorbeer07-ship-it/QUIZ.html";
    
}


function pick()
{
    const check1 =  document.getElementsByName('case1');
    const check2 =  document.getElementsByName('case2');
    const check3 =  document.getElementsByName('case3');
    var p = 0

    
    if(check1[0].checked)
    {
        p += 1;
    }
    if(check1[3].checked)
    {
        p += 1;
    }
    if(p==0)
    {
        document.getElementById("l1a").innerHTML="Dommage, vous avez 0 bonnes réponses sur 2. Les bonnes réponses étaient : <b>250 + 1750</b> et <b>0.6 + 95.3 + 4.1 + 3900</b>"
    }
    else if(p==1)
    {
        document.getElementById("l1a").innerHTML="Presque, vous avez 1 bonnes réponse sur 2. Les bonnes réponses étaient : <b>250 + 1750</b> et <b>0.6 + 95.3 + 4.1 + 3900</b>"
    }
    else if(p==2)
    {
        document.getElementById("l1a").innerHTML="Bravo ! Vous avez les 2 bonnes réponses."
    }
    
    p = 0;


    
    if(check2[1].checked)
    {
        p += 1;
    }
    if(check2[3].checked)
    {
        p += 1;
    }
    if(p==0)
    {
        document.getElementById("l2a").innerHTML="Dommage, vous avez 0 bonnes réponses sur 2. Les bonnes réponses étaient : <b>Un garçon</b> et <b>...c'est jaune...on ne peut pas en dire pus...</b>"
    }
    else if(p==1)
    {
        document.getElementById("l2a").innerHTML="Presque, vous avez 1 bonnes réponses sur 2. Les bonnes réponses étaient : <b>Un garçon</b> et <b>...c'est jaune...on ne peut pas en dire pus...</b>"
    }
    else if(p==2)
    {
        document.getElementById("l2a").innerHTML="Bravo ! Vous avez les 2 bonnes réponses sur 2."
    }
    
    p = 0;



    if(check3[2].checked)
    {
        p += 1;
    }
    if(check1[3].checked)
    {
        p += 1;
    }
    if(p==0)
    {
        document.getElementById("l3a").innerHTML="Dommage, vous avez 0 bonne réponse sur 2. Les bonnes réponses étaient : <b>Qui va l'acheter de toute façon ?</b> et <b>60%</b>"
    }
    else if(p==1)
    {
        document.getElementById("l3a").innerHTML="Presque, vous avez 1 bonnes réponses sur 2. Les bonnes réponses étaient : <b>Qui va l'acheter de toute façon ?</b> et <b>60%</b>"
    }
    else if(p==2)
    {
        document.getElementById("l3a").innerHTML="Bravo ! Vous avez les 2 bonnes réponses sur 2."
    }
    
    p = 0;
}

