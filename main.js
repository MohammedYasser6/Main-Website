const headerBtns = document.querySelectorAll("header .glow-on-hover")
const subApps = document.querySelectorAll(".sub-app-container")

headerBtns.forEach(btn => {
    btn.addEventListener("click" , (e)=>{
        e.stopPropagation();
        console.log(e.target);
        
        const name = e.target.name;
        subApps.forEach(app=>{
            if (app.id == name) {
                
                app.classList.remove("hidden")
            }else{

                app.classList.add("hidden")
            }
        })
    })
});