function DireBonjour(x)
{
    return ('Bonjour ' + x+',nous allons découvrir quel type de verre vous êtes !');
}
nom=prompt('Quel est votre prénom svp ?');
alert(DireBonjour(nom));

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
    else if((value1==tutu && value2=="tutu") || (value2=="tutu" && value3=="tutu") || (value1=="tutu" && value3=="tutu"))
    {
        document.getElementById("LA").innerHTML=nom+", Vous vous métamorphosez en verre de cantine car vous rêvez de remonter le temps !";
    }
    else if((value1==tata && value2=="tata") || (value2=="tata" && value3=="tata") || (value1=="tata" && value3=="tata"))
    {
        document.getElementById("LA").innerHTML=nom+", Vous ne connaissez pas l'existence des verres, par conséquent, vous êtes un ver de terre !";
    }
}
