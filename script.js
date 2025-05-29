
const projectVideo1 = document.getElementById('projectVideo1');
const projectVideo2 = document.getElementById('projectVideo2');
const projectVideo3 = document.getElementById('projectVideo3');

const hoverSign = document.querySelector(".hover-sign");

const videos = [projectVideo1, projectVideo2, projectVideo3];

    videos.forEach(function(video) {
        
            video.addEventListener('mouseover', function(){
                video.play();
                hoverSign.classList.add("active")
            });

            video.addEventListener('mouseout', function(){
                video.pause();
                hoverSign.classList.remove("active")
            });
        
    });
