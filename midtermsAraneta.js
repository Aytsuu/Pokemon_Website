let intro = document.querySelector('.intro');
let image = document.querySelector('.pokeball');
let pokeballs = document.querySelectorAll('.ball');
let popupContainer = document.querySelector('.popup-container');
let popup = document.querySelectorAll('.popup');
let cry = document.querySelectorAll('.cry');
let fadein = document.querySelectorAll('.container');
let sound = document.querySelector('.fi-rr-music-note');
let sliders = document.querySelectorAll('.slider');
let trainer = document.querySelectorAll('.trainer');
let trainersIcon = document.querySelectorAll('.trainers img');


window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(() =>{
        
        pokeballs.forEach((img, idx)=>{
            setTimeout(()=>{
                img.classList.add('active');
            }, (idx + 1) * 400)
        });

        setTimeout(()=>{
            pokeballs.forEach((img, idx) =>{
                setTimeout(()=>{
                    img.classList.remove('active');
                    img.classList.add('fade');
                }, (idx + 1) * 50)
            })
        },2000)

        setTimeout(()=>{
            intro.style.top = '-100vh';
        },2300)
    })
})

document.querySelectorAll('.image-containers .container').forEach(container =>{
    container.onclick = () =>{
        popupContainer.style.display = 'block';
        let clickedPokemon = container.getAttribute('data-name');
        popup.forEach(popup=>{
            let pokemon = popup.getAttribute('data-target');
            if(clickedPokemon == pokemon){
                popup.classList.add('active');
                cry.forEach(cry=>{
                    let pokemoncry = cry.getAttribute('data-source');
                    if(clickedPokemon == pokemoncry){
                        var sound = document.getElementById(pokemoncry);
                        sound.volume = 0.3;
                        sound.play();
                    }
                })
            }
            else{
                popup.classList.remove('active');
            }
        })
    }
});
popup.forEach(close=>{
    close.querySelector('.fa-times').onclick = () =>{
        close.classList.remove('active');
        popupContainer.style.display = 'none';
    }
})

document.querySelectorAll('.popup-container .popup .text-container4 .evolve-container img').forEach(img =>{
    img.onclick = () =>{
        popupContainer.style.display = 'block';
        let clickedPokemon = img.getAttribute('data-name');
        popup.forEach(popup=>{
            let pokemon = popup.getAttribute('data-target');
            if(clickedPokemon == pokemon){
                popup.classList.add('active');
                cry.forEach(cry=>{
                    let pokemoncry = cry.getAttribute('data-source');
                    if(clickedPokemon == pokemoncry){
                        var sound = document.getElementById(pokemoncry);
                        sound.volume = 0.3;
                        sound.play();

                    }
                })
            }
            else{
                popup.classList.remove('active');
            }
        })
    }
})
popup.forEach(close=>{
    close.querySelector('.fa-times').onclick = () =>{
        close.classList.remove('active');
        popupContainer.style.display = 'none';
    }
})

document.querySelectorAll('.trainers img').forEach(img=>{
    img.onclick = () =>{
        let clickedChacter = img.getAttribute('data-name');
        trainer.forEach(trainer=>{
            let getTrainer = trainer.getAttribute('data-target');
            let element = document.getElementById(getTrainer);
            if(clickedChacter == getTrainer){
                element.style.display = 'unset';
            }
            else{
                element.style.display = 'none';
            }
        })
    }
})

let appearOptions = {
    threshold: 1
}
let appearOnsScroll = new IntersectionObserver
(function(
    entries,appearOnsScroll
){
    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            return;
        }
        else{
            entry.target.classList.add('appear');
            appearOnsScroll.unobserve(entry.target);
        }
    })
},appearOptions);

fadein.forEach(fadein =>{
    appearOnsScroll.observe(fadein);
});

sliders.forEach(slider =>{
    appearOnsScroll.observe(slider);
});
trainersIcon.forEach(trainers=>{
    appearOnsScroll.observe(trainers)
})

let count = 0;
function playStop(icon){
    icon.classList.toggle('fi-sr-music-note');
    if(count == 0){
        count = 1;
        document.getElementById('sound').currentTime = 0;
        document.getElementById('sound').play();

    }
    else{
        count = 0;
        document.getElementById('sound').pause();
    }
}

    