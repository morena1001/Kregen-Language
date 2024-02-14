const tabable = ["Rules", "Translations", "Dictionary", "Legacy"];
const tabs = document.getElementsByClassName("item");
const tabTabs = [];
const toggle = [false, false, false, false];


window.onload = () => {
    for (let i = 0; i < tabs.length; i++) {
        if (tabable.includes(tabs[i].innerHTML)) {
            tabTabs.push(tabs[i]);
        }
    }

    for (let i = 0; i < tabTabs.length; i++) {
        tabTabs[i].addEventListener("click", function(e) {
            for (let j = 0; j < 4; j++) {
                if (toggle[j]) {
                    document.getElementById(tabTabs[j].parentElement.lastElementChild.id).setAttribute("style", "display: none");
                    toggle[j] = false;
                    break;
                }
            }

            document.getElementById(e.target.parentElement.lastElementChild.id).setAttribute("style", "display: inline-block");
            toggle[tabable.indexOf(e.target.innerHTML)] = true;
        });
    } 
}

document.addEventListener("click", function(e) {
    if (e.target.id != "text") {
        for (let i = 0; i < 4; i++) {
            if (toggle[i]) {
                document.getElementById(tabTabs[i].parentElement.lastElementChild.id).setAttribute("style", "display: none");
                    toggle[i] = false;
                    break;
            }
        }
    }
})
