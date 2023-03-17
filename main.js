const speakers = [
    {
        name:'James Oletik',
        aboutem:'Co-founder and CEO Club TT motorsport',
        bio:'A kenyan WRC racer and founder of clubTT motorsport with several won titles in WRC Championship',
        id:'first',
        image:'images/speaker1.png',
    },
    {
        name:'Mercy Kaptum',
        aboutem:'WRC racer',
        bio:'A  Female kenyan WRC racer,that has put ladies on the rally map in her outstanding perfomance last year',
        id:'second',
        image:'images/speaker2.png',
    },
    {
        name:'Parsali Olerek',
        aboutem:'Retired WRC racer',
        bio:'A former WRC racer and   2021,WRC winner,Currently lead coach in Kenya Airways rally team',
        id:'third',
        image:'images/speaker3.png',
    },
    {
        name:'Peter Opondo',
        aboutem:'Mechanic and race car-tuner',
        bio:'A kenyan Mechanic that has specialised in tuning cars to peek performance for rally-purposes',
        id:'fourth',
        image:'images/speaker4.png',
    },
    {
        name:'Sam Hamilton',
        aboutem:'Co-founder and CEO Sunset GT ',
        bio:'A kenyan enthusiast that has specialised in tuning cars to peek performance for rally-purposes',
        id:'fifth',
        image:'images/speaker5.png',
    },
    {
        name:'Jeff Onsense',
        aboutem:'Co-founder and CEO Sport Nation_254',
        bio:'A kenyan WRC racer and founder of Sport Nation_254,Famous for his many won titles in drag races in Kenya',
        id:'sixth',
        image:'images/speaker6.png',
    },    
];
const featuredSpeakers = document.querySelector('.featured-speakers');

const speakersTop = document.createElement('div');
speakersTop.classList.add("speakers_top");
featuredSpeakers.appendChild(speakersTop);


const header = document.createElement('h3');
header.innerHTML="Featured Speakers";
speakersTop.append(header);

const indicator = document.createElement("div");
indicator.classList.add("indicator");
featuredSpeakers.append(indicator);

const speakerList = document.createElement('div');
speakerList.classList.add('speaker-list');
featuredSpeakers.append(speakerList);



window.onload = function(){
    loadSpeakers();
}

let tmp='';


function loadSpeakers(){

        if(window.screen.width < 768){
            for (let i = 0; i < 2; i++){
    
                    tmp += 
                    `<div id="${speakers[i].id}" class="speaker">
                    <div class="photo-bg"><img src="${speakers[i].image}" alt="Image of the speaker"></div>
                    <div class="speaker-details">
                        <h5>${speakers[i].name}</h5>
                        <p class="about-em">${speakers[i].aboutem}</p>
                        <p class="bio" >${speakers[i].bio}</p>
                    </div>
                </div>`;
                    
    
                speakerList.innerHTML = tmp; 

                const showMore = document.createElement('div');
                showMore.classList.add('show-container');
                speakerList.appendChild(showMore);

                const btnShow = document.createElement('button');
                btnShow.setAttribute('id','showMore');
                btnShow.innerHTML = 'More';
                showMore.append(btnShow);

                const span = document.createElement('span');
                span.innerHTML = '&#9660;';
                btnShow.appendChild(span);

                // button show more
btnShow.addEventListener('click',function(){
    tmp = '';
    speakers.forEach(speaker => {
    
        tmp += 
        `<div id="${speaker.id}" class="speaker">
        <div class="photo-bg"><img src="${speaker.image}" alt="Image of the speaker"></div>
        <div class="speaker-details">
            <h5>${speaker.name}</h5>
            <p class="about-em">${speaker.aboutem}</p>
            <p class="bio" >${speaker.bio}</p>
        </div>
    </div>`;
        
    });
    speakerList.innerHTML = tmp;


});

        }

        }else{
            speakers.forEach(speaker => {
    
                    tmp += 
                    `<div id="${speaker.id}" class="speaker">
                    <div class="photo-bg"><img src="${speaker.image}" alt="Image of the speaker"></div>
                    <div class="speaker-details">
                        <h5>${speaker.name}</h5>
                        <p class="about-em">${speaker.aboutem}</p>
                        <p class="bio" >${speaker.bio}</p>
                    </div>
                </div>`;
                    
                });
                speakerList.innerHTML = tmp;
        }

};



window.onresize = function(){
    tmp='';
    loadSpeakers();
}