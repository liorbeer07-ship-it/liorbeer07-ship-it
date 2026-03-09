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
    var valeur1;
    var valeur2;
    var valeur3;

    for(var i = 0; i < radios1.length; i++)
    {
        if(radios1[i].checked)
        {
            valeur1 = radios1[i].value;
        }
    }
    
     for(var i = 0; i < radios2.length; i++)
    {
        if(radios2[i].checked)
        {
            valeur2 = radios2[i].value;
        }
    }
    
     for(var i = 0; i < radios3.length; i++)
    {
        if(radios3[i].checked)
        {
            valeur3 = radios3[i].value;
        }
    }
    if((value1==toto & value2==toto) || (value2==toto & value3==toto) || (value1==toto & value3==toto))
    {
        
    }
    else if((value1==toto & value2==toto) || (value2==toto & value3==toto) || (value1==toto & value3==toto))
}
