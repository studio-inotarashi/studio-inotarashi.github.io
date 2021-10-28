function ScanCookie(variable)
{
    cook = document.cookie;
    variable += "=";
    place = cook.indexOf(variable,0);
    if (place <= -1)
        return("0" );
    else
    {
        end = cook.indexOf(";",place)
        if (end <= -1) return(unescape(cook.substring(place+variable.length,cook.length)));
        else return(unescape(cook.substring(place+variable.length,end)));
    }
}
function CreationCookie(nom,valeur,permanent)
{
    if(permanent)
    {
        dateExp = new Date(2020,11,11);
        dateExp = dateExp.toGMTString();
            ifpermanent = '; expires=' + dateExp + ';';
    }
    else
        ifpermanent = '';
    document.cookie = nom + '=' + escape(valeur) + ifpermanent;
}
if(ScanCookie("dejapopup" )==0)
{
    var msg="ATTENTION : PAGE PORNOGRAPHIQUE RESERVEE A UN PUBLIC DE PLUS DE 18 ANS\n\nCette page Internet est réservé à un public majeur et averti et est conforme à toutes les réglementations en vigueur. Il contient des textes, des photos et des vidéos classées X qui peuvent être choquantes pour certaines sensibilités.\n\nCLIQUEZ SUR OK POUR CONTINUER, ANNULER POUR QUITTER.."

    if(confirm(msg))
        CreationCookie("dejapopup","oui",false)

    else
        window.location.replace('../index.html');
}
