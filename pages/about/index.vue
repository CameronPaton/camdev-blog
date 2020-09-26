<template>
    <main class="mt-56 lg:mt-24 grid grid-cols-4 grid-rows-7 h-auto">
        <div id="row1" class="h-screen col-start-1 col-end-5 col-span-4 row-span-1 row-start-1 row-end-2 relative flex items-start justify-start" data-aos="fade-up" data-aos-delay="400" data-aos-once="true">
            <img src="../../assets/images/23.png" class="z-10 absolute lg:h-32" data-aos="fade" data-aos-delay="800" data-aos-once="true">
        </div>

        <div id="row2" class="row-span-1 row-start-2 row-end-3 col-start-1 col-end-5 col-span-4 lg:grid lg:grid-cols-2 flex flex-col">
            <div class="col-span-1 col-start-1 col-end-2"><img class="w-full h-full" src="../../assets/images/berlin.jpg"></div>
            <div class="col-span-1 col-start-2 col-end-3 flex items-center"><div class="bg-white md:w-10/12 xl:w-9/12 aboutMe mb-8 mx-3 -mt-5 md:mx-auto md:my-8 md:-mt-10 lg:-ml-10 lg:mt-10 lg:mb-3 shadow-lg">
                <div class="p-5 text-sm lg:text-base m-5">
                    <span class="greeting lg:text-5xl text-4xl">Hi, I'm Cameron,</span>
                    <br>
                    <p>I'm a self-taught Web Designer and Developer. Love all things internet and technology, as well as health and fitness and I don't mind the odd travel event, so this blog won't just be about the digital world but a bit of all round lifestyle in there too. </p>
                    <br>
                    <p>The content in this site will be quite broad ranging, but I also have a portfolio site which will focus mainly on Web Development in terms of skills and projects. There will be a link to that added here in the near future, which will be my own personal site. This though will be where I will be adding future content that may be useful for individuals or small to medium-sized businesses aiming to promote themselves or their company online, so stay in touch.</p>
                </div>
            </div></div>
            
        </div>

        <div id="row3" class="h-auto row-span-1 row-start-3 row-end-4 col-start-1 col-end-5 col-span-4 lg:grid lg:grid-cols-3 flex flex-col">
            <div class="col-span-1 col-start-1 col-end-2 bg-green-100 p-8">
                <span class="text-base md:text-xl lg:text-2xl font-bold">Why blog?</span>
                <p class="mt-3">This blog is built using NuxtJS and styled with Tailwind. NuxtJS is a higher-level framework that builds on top of VueJS. One of the reasons I built this blog site was to demonstrate my knowledge of the VueJS framework. Learning in web development and design never stops though and I feel like writing blog articles will help to absorb the information better.</p>
                <br>
                <p>I also want to contribute and give back because there were alot of articles I read that helped me to solve a problem, so maybe one of the problems I've come across and solved may save you time.</p>
            
            </div>
            <div class="col-span-1 col-start-2 col-end-3 bg-yellow-100 p-8">
                <span class="text-base md:text-xl lg:text-2xl font-bold">What I'm doing now...</span>
                <p class="mt-3">Right now I'm producing products such as this blog site and aiming to write out some articles. The categories include: <span class="font-bold text-green-500">Design</span>, covering website design techniques; <span class="font-bold text-purple-500">Technology</span> which could be either hardware or software based; <span class="font-bold text-blue-500">Development</span>, which is website development; <span class="font-bold text-yellow-600">Reviews</span>, which could be anything such as books or films; <span class="font-bold text-red-800">Health</span>, which covers all things fitness and nutrition and <span class="font-bold text-teal-400">Media</span>, which will be any digital media such as photography, videos, vlogging or blogging.</p>
            </div>
            <div class="col-span-1 col-start-3 col-end-4 bg-blue-100 p-8">
                <span class="text-base md:text-xl lg:text-2xl font-bold">What I'm doing in the future...</span>
                <p class="mt-3">In the future I will be building a personal portfolio site which will be a showcase of all the projects I intend to create. I aim to produce at least one blog or vlog a month and create an online course. I also want to take on freelance projects and build sites for clients but that will involve setting up a freelance business model which I haven't done yet so freelance projects are on hold right now. </p>
            </div>
        </div>
        

        <div id="row4" class="row-start-4 row-end-5 col-start-1 col-end-5 col-span-4">
            <div id="parallaxImage"></div>
        </div>

        <div id="row5" class="bg-yellow-500 py-8 row-start-5 row-end-6 col-start-1 col-end-5 col-span-4 flex flex-col justify-center items-center">
            <div>Web Designer.</div>
                <span>i design websites like this/</span>
            <div>Frontend Developer.</div>
                <span>i focus mainly on the Frontend/</span>
            <div>VueJS Dev.</div>
                <span>Vue is my framework of choice/</span>
            <div>Blogger.</div>
                <span>See the Blog page for Articles I've written/</span>   
            <div>Vlogger.</div>
                <span>Youtube videos created to supplement blog articles/</span>
            <div>Online Content Creator.</div>
                <span>content development for the web/</span>
            <div>Search Engine Optimiser.</div>
                <span>i get to the top of Google/</span>
            <div>Digital Marketer.</div>
                <span>product promotion through reviews/</span>
            <div>Online Critic.</div>
                <span>reviews on digital products/</span>
            <div>Digital Consultant.</div>
                <span>analysis on the digital impact of your business/</span>
            <div>Freelancer.</div>
                <span>only doing selected projects at the moment/</span>
            <div>Online Course Creator.</div>
                <span>future online courses will be available/</span>
            <div>Ebook Writer.</div>
                <span>free content and paid/</span>
        </div>

        <div id="row6" class="bg-purple-200 row-start-6 row-end-7 col-start-1 col-end-5 col-span-4 hidden">
            <div> Link to portfolio with screenshot of homepage, button with link. To see more about my projects and skills, visit my personal portfolio page : button. (Add later when portfolio is done)</div>
        </div>

        <div id="row7" class="bg-gray-700 h-auto row-start-7 row-end-8 col-start-1 col-end-5 col-span-4">
            <div class="text-base md:text-lg text-center p-8 text-white"> 
                You can follow me on social media at the links below and enter your email address further down to get updates on any new articles or content.
            </div>
                <div class="smediaIcons grid grid-cols-3 gap-8 grid-rows-2 p-5 m-8 md:flex md:flex-row md:items-center md:justify-between">
                    <a href="https://www.pinterest.co.uk/cameronpaton86/" target="_blank"><img class="h-12 w-12" src="~/assets/images/pinterest.png" alt="pinterest"></a>
                    <a href="https://github.com/CameronPaton" target="_blank"><img class="h-12 w-12" src="~/assets/images/github.png" alt="github"></a>
                    <a href="https://www.linkedin.com/in/cameronpaton86/" target="_blank"><img class="h-12 w-12" src="~/assets/images/linkedIn.png" alt="linkedIn"></a>
                    <a href="https://www.instagram.com/cameronpaton86/" target="_blank"><img class="h-12 w-12" src="~/assets/images/instagram.png" alt="instagram"></a>
                    <a href="https://www.youtube.com/channel/UCGgCELpqeHXqdlN2jYO_DrA" target="_blank"><img class="h-12 w-12" src="~/assets/images/youtube.png" alt="youtube"></a>
                    <a href="https://twitter.com/cameronpaton86" target="_blank"><img class="h-12 w-12" src="~/assets/images/twitter.png" alt='twitter'></a>
                </div>
        </div>



    </main>
</template>

<script>

    export default {
        head() {
            return {
                title: 'About Me',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'About me'
                    },
					{
						name: 'keywords', 
						content: 'about me, who am I'
					}
                ]
            }
        },
    }
</script>



<style scoped>
#row1 {
    background-image: url('../../assets/images/porsche.JPG');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

#row1 img {
    height: 80%;
}

#row1:after{
  content: '';
  background: rgba(255,0,0,0.7);
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
}

#row2 {
    height: auto;
}

.greeting {
    font-family: 'Mrs Saint Delafield', cursive;
    color: #8e0b0b;
    font-weight: bold;
}

h2 {
    font-size: 1.5em;
    text-decoration: none;
    color: black;
    font-weight: bold;
    display: block;
    text-align: center;
}

h2:after {
  content: '';
  display: block;
  margin: 0 auto;
  width: 5%;
  padding-top: 20px;
  border-bottom: 2px solid #8e0b0b;
  margin-bottom: 10px;
}

#row4 {
    height: 500px;
    background-image: url('../../assets/images/IMG_0267.jpeg');
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    background-attachment: fixed;
}



#row5 {
    height: auto;
}

#row5 div {
    font-size: 3em;
    font-weight: bold;
    padding-bottom: 5px;
    padding-top: 20px;
}

#row5 span{
    font-size: 1.2em;
}

#row5 span:after {
  content: '';
  display: block;
  margin: 0 auto;
  width: 40%;
  border-bottom: 2px solid #8e0b0b;
  padding: 20px;
}

#row6 {
    height: 500px;
    
}

.smediaIcons {
    justify-items: center;
}

@media screen and (max-width: 1024px){
    #row1 img {
    height: 60%;
    }
    #row4 {
        background-attachment: scroll;
    }
}

@media screen and (max-width: 768px){
  #row1 img {
    height: 40%;
    }
  #row5 div {
      font-size: 2em;
    }
 #row5 span {
     font-size: 0.9em;
 }
}

@media screen and (max-width: 500px){
  #row1{
      background-position: right;
  }
  #row5 div {
    font-size: 1.5em;
  }
}

@media screen and (max-width: 300px){
  
  #row5 div {
      font-size: 1em;
    }
 #row5 span {
     font-size: 0.5em;
 }
}




</style>

<!--

-->