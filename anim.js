let coll = document.getElementsByClassName('collapsable');

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener('click', function(){
        let content = this.nextElementSibling;
        coll[i].classList.toggle("active");

        if(content.style.maxHeight)
            content.style.maxHeight = null;
        else
            content.style.maxHeight = content.scrollHeight + "px";

    });
}