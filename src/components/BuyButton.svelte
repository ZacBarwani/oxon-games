<script>
    import { onMount } from "svelte";


    export let url;
    export let activeOnUrl = false;
    export let label;
    
    let active = activeOnUrl && url == window.location.pathname;
</script>

<style lang="scss">

    .cont{
        display: inline-block;
        background-color: $grey-bg;
        height: auto;
        padding-top: 15px;
        padding-bottom: 15px;
        overflow: hidden;
    }    

    .button{
        font-size: 20px;
        font-weight: 1;

        align-items: center;
        justify-content: center;
        transition: transform 0.1s, background-color 0.1s;
        background-color: $mid-green;

        margin: 0px;
        padding: 30px;
        
        

        width: auto;
        
    }

    .button:hover{
        background-color: $muted-green;
        transform: scale(1.0);
        transition: transform 0.1s, background-color 0.1s;
        cursor: pointer;
    }

    .button:active{
        transform: scale(1);
        background-color: $vibrant-green;
    }

    .label{
        font-size: 20px;
        font-weight: 1;

        align-items: center;
        justify-content: center;
        transition: transform 0.1s, background-color 0.1s;
        

        margin: 0px;
        padding: 15px;
        
        border-radius: 10px;

        width: auto;
    }

    span{
        text-decoration: none;
        color: white;
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; 
    }


    

    @media (min-width: $breakpoint-tablet){

    }

    @media (max-width: $breakpoint-tablet){
        .button{
            width: 100%;
            height: 230px;
        }
    }
</style>

<template class="active">

</template>

<div class="cont">
    <span on:click={() => active ? false : window.location.href = `${url}`} href={url} class="button" class:active>
        <slot/>
    </span>
    <span class="label">
        £{label}
    </span>
</div>