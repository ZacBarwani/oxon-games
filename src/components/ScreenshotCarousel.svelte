<script>
    import {onMount} from 'svelte';
    import anime from 'animejs';

    //Ajax
    export let screenshotsFetched = [];
    
    let currentlyActive = 0;
    $: {
        
    }

    let screenshots = [];
    $: {
        screenshots = [];
        screenshotsFetched.forEach((e) => {
            screenshots.push({
                src: e.image
            });
            
        });
    }


    //Carousel Controls
    var moveNextInterval;
    function resetTimer(){
        if(moveNextInterval != null){
            clearInterval(moveNextInterval);
        }
        moveNextInterval = setInterval(moveToNext, 7000);
    }

    function moveToNext(){
        if(currentlyActive + 1 < screenshots.length){
            currentlyActive++;
        } else{
            currentlyActive = 0;
        }
    }

    function selectScreenshot(i){
        currentlyActive = i;
        resetTimer();
    }

    onMount(() => {
        resetTimer();
    })
</script>

<style>
    #screenshot-container{
        position: relative;
        background-color: $glass-dark;
        backdrop-filter: blur(10px);
        height: 600px;
        overflow: hidden;
        
        z-index: 0;
        box-shadow: -2px 2px 10px black;
        
        
    }

    .screenshot{
        position: absolute;
        opacity: 0;
        
        overflow: show;


        width: 100%;
        height: 100%;
        z-index: 1;
 
        background-position: center;
        background-size:auto;
        
        transition: opacity 0.1s;
        box-shadow: 0px -100px 100px black inset;
    }

    #thumbnail-container{
        max-width: 100%;
        background: $glass-dark;
        backdrop-filter: blur(10px);
        display: grid;
        grid-template-rows: 100px;
        grid-auto-columns: 180px;
        grid-auto-flow: column;
        
        overflow-x: auto;

        overflow-y: show;
        overflow-x: auto;


        gap: 40px;
        padding: 40px;

        box-shadow: -2px 2px 10px black;
    }

    .thumbnail{
        width: 100%;
        background-size: cover;
        
        z-index: 1;

        border: 0px solid transparent;
        transition: box-shadow 0.2s, transform 0.1s, border 0.1s;
        

        box-sizing: border-box;
        
        filter: drop-shadow(-10px 10px 5px black);

    }

    .thumbnail:hover{
        cursor: pointer;
        transform: scale(1.1);
    }

    .active{
        display: block;
        opacity: 1;
    }

    .active-thumbnail{
        transform: scale(1.1);
        border: 2px solid $grey-border;
    }

    @media (max-width: $breakpoint-tablet){
        .screenshot{
            width: 100%;
            background-size: contain;
            background-repeat: no-repeat;
        }
    }
</style>

<div style="z-index: 0; position: relative;">
    <div id="screenshot-container">
        {#each screenshots as screenshot, i}
            <div class="screenshot" style="background-image: url({screenshot.src})" class:active={i == currentlyActive} alt="A screenshot of the game."/>
        {/each}
    </div>
    <div id="thumbnail-container">
        {#each screenshots as screenshot, i}
            <div class='thumbnail' style="background-image: url({screenshot.src})" class:active-thumbnail={i == currentlyActive} on:click={() => selectScreenshot(i)}>
            </div>
        {/each}
    </div>
</div>