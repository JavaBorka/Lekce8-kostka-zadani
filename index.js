console.log('funguju!');

/**** CVIČENÍ 2 - KOSTKA ******/

// Naklonujte si repozitář se stránkou, která zobrazuje hrací kostku. Doplňte do stránky JavaScriptový program, který zařídí, že když uživatel zmáčkne na stránce libovolnou klávesu, na kostce se zobrazí číslo o jedna vyšší. Po šestce zobrazte opět jedničku.

// Nápověda: Rozumným postupem je vytvořit si proměnnou side, která bude obsahovat číslo strany kostky. Tuto proměnnou můžete vždy při stisknutí klávesy navýšit o jedna a z této hodnoty zkonstruovat řetězec pro atribut src.


let cislo = 1
const side = () => {

    //cislo = cislo + 1
    cislo += 1

    if (cislo === 7) {
        cislo = 1
    }

    const image = document.querySelector('.dice')
    image.src = 'img/side' + cislo + '.svg'
}

document.addEventListener('click', side)

