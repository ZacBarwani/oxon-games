<script>

    import {onMount} from 'svelte';
    import Searchbar from './Searchbar.svelte';
    import TopbarButton from './TopbarButton.svelte';
    import Icon from 'svelte-awesome';
    import { bars } from 'svelte-awesome/icons';
    import anime from 'animejs';


    export let dynamic = true;
    export let scrollThreshold = window.innerHeight * 0.25;

    let mobile = window.matchMedia(`(max-width: 1024px)`).matches;

    let state = !dynamic;
    $: {
        state;
        
        if(!mobile && dynamic){
            anime({
                targets: document.querySelector("#bar"),
                height: () => state ? "100px" : "0px",
                easing: `linear`,
                duration: 50
            });
        } 
    }

    //binded
    let scrollY;
    $:{
        scrollY;
        if(!mobile){
            state = scrollY > scrollThreshold;
        }
    }

    function hamburgerClicked(event){
        
        state = !state;


        anime({
            targets: document.querySelector("#bar"),
            left: () => state ? '0' : '-100vw',
            easing: 'linear'
        });
    }


    function onResize(){
        
        mobile = window.matchMedia("(max-width: 1024px)").matches;
        if(mobile){
            state = false;
            document.querySelector("#bar").style.height = "100vh";
            document.querySelector("#bar").style.left = state ? 0 : "-100vw";
        } else{
            document.querySelector("#bar").style.height = "100px";
            document.querySelector("#bar").style.left = 0;
        }
    };



    

</script>

<style>
    @use "sass:color";
    
    #logo{
        color: $vibrant-red;
        text-decoration: none;
        font-size: 30px;
        font-weight: 2;
    }

    #hamburger{
        display: none;
    }

    #bar{
        z-index: 3;
        overflow-y: hidden;

        background: $glass-mid;
        backdrop-filter: blur(10px);
        display: flex;
        width: 100%;
        padding: 0;
        margin: 0;
        

        box-shadow: 0 5px 10px black;

        top: 0;
        left: 0;
        
        
    }

    .dynamic{
        height: 0px;
        position: fixed;
    }

    .notdynamic{
        height: 100px;
        position: sticky;
        top: 0;
    }


    @media (min-width: $breakpoint-tablet){
        #logo-column{
            flex-basis: 20%;
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        #button-container{
            flex-basis: 40%;
            padding: 0;
        }

        #searchbar{
            flex-basis: 50%;
        }

        .bar-item{
            display: flex;
            align-items: center;
            justify-content: center;
            
            margin: 0;
            padding: 30px;
        }


        #dropdown{
            display: none;
        }
        
    }

    

    @media (max-width: $breakpoint-tablet){
        #bar{
            position: fixed;
            height: 100vh;
            margin: 0;
            display: flex;
            flex: 1;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
        

            padding: 40px;
            margin: 0;

            left: -100%;

            
        }

        #dropdown{
            display: block;
        }

        .bar-item{
            display: flex;
            flex-direction: column;
            width: 80%;
            justify-self: center;
            justify-content: center;
            align-items: center;
            box-sizing: border-box;
            flex-grow: 1;
        }

        #logo{
            margin-bottom: 30px;
            font-size: 50px;
        }

        #button-container{
            display: flex;
        }

        #hamburger{
            display: block;
            z-index: 3;
            padding: 20px;
            
            top: 1%;

            cursor: pointer;

            transition: transform 0.2s;
            
        }

        #swipe-area{
            height: 100%;
            position: fixed;
            left: 0;
            top: 0;

            z-index: 3;
        }

        .active-hamburger{
            opacity: 1;
            transform: rotate(90deg);
        }

        .inactive-hamburger{
            left: 0;
            
        }

        .expanded{
            
            padding-bottom: 10vh; padding-top: 10vh;
            left: 0;
            
        }
    }

</style>

<svelte:window bind:scrollY on:resize={onResize}/>


<div id="bar" class:notdynamic={!dynamic} class:dynamic>
    <div class="bar-item" id="logo-column">
        <a href="./" id="logo">
            <h2>Oxon Games</h2>
        </a>
    </div>

    <div class="bar-item" id="searchbar">
        <Searchbar/>
    </div>

    <div class="bar-item" id="button-container">
        <TopbarButton activeOnUrl={true} url="./games.html">Games</TopbarButton>
        <TopbarButton activeOnUrl={true} url="./about.html">About</TopbarButton>
        <TopbarButton activeOnUrl={true} url="./contact.html">Contact</TopbarButton>
        <TopbarButton activeOnUrl={true} url="./basket.html">Basket</TopbarButton>
    </div>

    
</div>

<div id="swipe-area">   
    <div id="hamburger" on:click={hamburgerClicked} class:active-hamburger={state} class:inactive-hamburger={!state}>
        <span><Icon data={bars} scale="2.5"/></span>
    </div>
</div>
