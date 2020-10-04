function lockedProfile() {
    document.querySelector("#main").addEventListener("click", handler);
 
        console.log(document.querySelector("#main"))

    function handler(e) {
        console.log(e.target.parentNode.querySelector('input').checked);
        if (e.target.type == "submit") {
            const parent = e.target.parentNode;
 
            let isLocked = parent.querySelector('input').checked;
            if (!isLocked) {
                let hiddenDiv = e.target.previousElementSibling;
                
                
                hiddenDiv.style.display = hiddenDiv.style.display === 'block' ? 'none' : 'block';
                e.target.textContent = e.target.textContent === 'Hide it' ? 'Show more' : 'Hide it';
            }
        }
    }
}