nom=prompt('Quel est votre prénom svp ?');
alert(DireBonjour(nom));


var nbquestionsfin=0;
var pointsquiz=0;

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

    btn.onclick=recommencer;
    btn.style.backgroundColor = "white";
    btn.style.border = "2px solid black";
    btn.style.color = "black";
}


function recommencer()
{
    window.location.href = "https://liorbeer07-ship-it.github.io/liorbeer07-ship-it/QUIZ.html";
    
}


function pick_1()
{
    const check1 =  document.getElementsByName('case1');
    
    var un = 0;

    
    if(check1[0].checked)
    {
        un += 1;
        pointsquiz+=1;
    }
    if(check1[1].checked)
    {
        pointsquiz += -2;
        un += -10;
    }
    if(check1[2].checked)
    {
        pointsquiz += -2;
        un += -10;
    }
    if(check1[3].checked)
    {
        un += 1;
        pointsquiz +=1;
    }
    if(un==0)
    {
        document.getElementById("l1a").innerHTML="Dommage, vous avez 0 bonnes réponses sur 2. Les bonnes réponses étaient : <b>250 + 1750</b> et <b>0.6 + 95.3 + 4.1 + 3900</b>";
    }
    else if(un==1)
    {
        document.getElementById("l1a").innerHTML="Presque, vous avez 1 bonnes réponse sur 2. Les bonnes réponses étaient : <b>250 + 1750</b> et <b>0.6 + 95.3 + 4.1 + 3900</b>";
    }
    else if(un==2)
    {
        document.getElementById("l1a").innerHTML="Bravo ! Vous avez les 2 bonnes réponses.";
        confetti();
    }
    else if(un<0)
    {
        document.getElementById("l1a").innerHTML="Vous avez une ou plusieurs réponses fausses ! Les bonnes réponses étaient : <b>250 + 1750</b> et <b>0.6 + 95.3 + 4.1 + 3900</b> ";
    }
    
    un = 0;
    nbquestionsfin+=1;
    document.getElementById("valider_1").style.display = "none";
    bouton_fin();
    
}


function pick_2()
{
    const check2 =  document.getElementsByName('case2');
    
    var deux = 0;
    
    if(check2[0].checked)
    {
        pointsquiz += -2;
        deux+=-10;
    }
    if(check2[1].checked)
    {
        deux += 1;
        pointsquiz+= 1;
    }
    if(check2[2].checked)
    {
        pointsquiz += -2;
        deux+=-10;
    }
    if(check2[3].checked)
    {
        deux += 1;
        pointsquiz+= 1;
    }
    if(deux==0)
    {
        document.getElementById("l2a").innerHTML="Dommage, vous avez 0 bonnes réponses sur 2. Les bonnes réponses étaient : <b>Un garçon</b> et <b>...c'est jaune...on ne peut pas en dire pus...</b>";
    }
    else if(deux==1)
    {
        document.getElementById("l2a").innerHTML="Presque, vous avez 1 bonnes réponses sur 2. Les bonnes réponses étaient : <b>Un garçon</b> et <b>...c'est jaune...on ne peut pas en dire plus...</b>";
    }
    else if(deux==2)
    {
        document.getElementById("l2a").innerHTML="Bravo ! Vous avez les 2 bonnes réponses sur 2.";
        confetti();
    }
    else if(deux<0)
    {
        document.getElementById("l2a").innerHTML="Vous avez une ou plusieurs réponses fausses ! Les bonnes réponses étaient : <b>Un garçon</b> et <b>...c'est jaune...on ne peut pas en dire plus...</b>";
    }
    deux = 0;
    nbquestionsfin+=1;
    document.getElementById("valider_2").style.display = "none";
    bouton_fin();
}

function pick_3()
{
    const check3 =  document.getElementsByName('case3');
    
    var trois = 0;
    if(check3[0].checked)
    {
        pointsquiz += -2;
        trois+=-10;
    }
    if(check3[1].checked)
    {
        pointsquiz += -2;
        trois+=-10;
    }
    if(check3[2].checked)
    {
        trois += 1;
        pointsquiz+= 1;
    }
    if(check3[3].checked)
    {
        trois += 1;
        pointsquiz+= 1;
    }
    if(trois==0)
    {
        document.getElementById("l3a").innerHTML="Dommage, vous avez 0 bonne réponse sur 2. Les bonnes réponses étaient : <b>Qui va l'acheter de toute façon ?</b> et <b>60%</b>";
    }
    else if(trois==1)
    {
        document.getElementById("l3a").innerHTML="Presque, vous avez 1 bonnes réponses sur 2. Les bonnes réponses étaient : <b>Qui va l'acheter de toute façon ?</b> et <b>60%</b>";
    }
    else if(trois==2)
    {
        document.getElementById("l3a").innerHTML="Bravo ! Vous avez les 2 bonnes réponses sur 2.";
        confetti();
    }
    else if(trois<0)
    {
        document.getElementById("l3a").innerHTML="Vous avez une ou plusieurs réponses fausses ! Les bonnes réponses étaient : <b>Qui va l'acheter de toute façon ?</b> et <b>60%</b>";
    }
    
    
    trois = 0;
    nbquestionsfin+=1;
    document.getElementById("valider_3").style.display = "none";
    bouton_fin();
}


function bouton_fin()
{
    if (nbquestionsfin==5)
    {
        const btn = document.createElement("button");
        btn.textContent = "Recommencer";
        btn.onclick = recommencer;
        document.getElementById("restarthere").appendChild(btn);
        btn.style.backgroundColor = "white";
        btn.style.border = "2px solid black";
        btn.style.color = "black";

		const btn2 = document.createElement("button");
		btn2.textContent="Voir les résultats";
		btn2.onclick=resultats;
		document.getElementById("resultshere").appendChild(btn2);
		btn2.style.border="2px solid white";
		btn2.background="#CC27F5";
		btn2.style.color = "white";
    }
}

function resultats()
{
	document.getElementById("note").innerHTML = pointsquiz+"/10";
	if (pointsquiz<5)
	{
		document.getElementById("lesresultats").innerHTML = "C'est pas fou";
	}
	else if (pointsquiz==10)
	{
		document.getElementById("lesresultats").innerHTML = "C'est parfait Bravo !";
	}
	else if (pointsquiz<0)
	{
		document.getElementById("lesresultats").innerHTML = "Un score négatif ??? Vraiment ? Retournez sur notre site !";
	}
	else
	{
		document.getElementById("lesresultats").innerHTML = "C'est pas mal du tout!";
	}
}
    


function opene()
{
    const t = document.getElementById("Id_Reponse");
    const texte = t.value;
    
    if(texte=="")
    {
        document.getElementById("lala").innerHTML = "Veuillez écrire une marque.";
    }
    else if (texte.toLowerCase()=="dior")
    {
        document.getElementById("lala").innerHTML = "Oui ! Bravo ! Vous avez trouvez la bonne réponse !";
        t.disabled=true;
        pointsquiz+=2;
        confetti();
        nbquestionsfin+=1;
        document.getElementById("valider_1_1").style.display = "none";
    }
    else if (texte.toLowerCase()!="dior")
    {
        document.getElementById("lala").innerHTML = "Non, dommage ! Vous y êtes presque !";
        t.disabled=true;
        nbquestionsfin+=1;
        document.getElementById("valider_1_1").style.display = "none";
    } 
bouton_fin();
}


function selection()
{
    const selecteur = document.getElementById("choix");
	const monChoix=selecteur[selecteur.selectedIndex];
    if (monChoix.value=="no")
	{
		document.getElementById("latablee").innerHTML = "Veuillez choisir une réponse";
	}
	else if(monChoix.value=="ze")
	{
		document.getElementById("latablee").innerHTML = "Vous n'avez pas tort...";
		nbquestionsfin+=1
		document.getElementById("valider_tables").style.display = "none";
		pointsquiz+=2;
	}
	else if(monChoix.value=="tr")
	{
		document.getElementById("latablee").innerHTML = "Faux ! Un petit tour sur la partie Tables s'impose...";
		nbquestionsfin+=1
		document.getElementById("valider_tables").style.display = "none";
	}
	else if(monChoix.value=="ci")
	{
		document.getElementById("latablee").innerHTML = "Bravo bonne réponse !";
		nbquestionsfin+=1
		document.getElementById("valider_tables").style.display = "none";
		pointsquiz+=2
	}
bouton_fin()
}

