let HeaderText = {
    [0]: {
        "title": "ROLEPLAY DIVERSIFICAT",
        "desc": "Bucură-te de cel mai diversificat roleplay. Administratorii monitorizează frecvent nivelul de Roleplay, fiind pregătiți oricând"
    },
    [1]: {
        "title": "JOACĂ-TE AȘA CUM ÎȚI DOREȘTI",
        "desc": "La noi pe server niciodată nu o să te plictisești, imaginația fiind singurul tău obstacol"
    },
    [2]: {
        "title": "NUMĂR MARE DE OPȚIUNI",
        "desc": "Devino ceea ce tu vrei să fii. Un număr mare de facțiuni cât și de afaceri sunt disponibile pentru tine"
    }
}
let h = 0;
setInterval(() => {
    h += 1;
    if (HeaderText[h] == undefined) h = 0;
    for (let i = 0; i <= 2; i++) {
        let dot = document.getElementById(`dot_${i}`);
        if (dot.classList.contains("dotActive")) {
            dot.classList.remove("dotActive");
        }
    }
    document.getElementById(`dot_${h}`).classList.add("dotActive");
    document.getElementById(`dotTitle`).innerHTML = HeaderText[h]["title"];
    document.getElementById(`dotDesc`).innerHTML = HeaderText[h]["desc"];
}, 5000);
let whyBox = {
    ["economy"]: {
        "title": "Afacere",
        "desc": "Totodată, server-ul oferă un sistem de afaceri. Jucătorul are posibilitatea de a deține propria sa</br>afacere, de la un magazin simplu până la un atelier auto sau chiar o firmă de transport."
    },
    ["factions"]: {
        "title": "Suport",
        "desc": "Experimentează facțiunile legale cât și cele ilegale, Faction Management Team fiind mereu<br/>la dispoziție pentru nelămuririle întâmpinate."
    },
    ["p2win"]: {
        "title": "Donații",
        "desc": "Toate donațiile sunt complet opționale, iar cei care donează drept mulțumire vor avea<br/>acces la facilități premium."
    }
}
let selectedWHYUS;
WHYUS_Cat_Select = (c) => {
    let WHYUS = document.getElementById(c);
    if (selectedWHYUS == undefined) {
        selectedWHYUS = WHYUS;
    } else {
        selectedWHYUS.classList.remove("active");
    }
    WHYUS.classList.add("active");
    document.getElementById(`RightImg_title`).innerHTML = whyBox[WHYUS.id]["title"];
    document.getElementById(`RightImg_desc`).innerHTML = whyBox[WHYUS.id]["desc"];
    document.getElementById(`RightImg`).style.backgroundImage = `url(../img/whyus/${WHYUS.id}.png)`;
    selectedWHYUS = WHYUS;
};
WHYUS_Cat_Select("economy");