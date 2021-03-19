<script>
    import { onMount } from "svelte";


    export let url;
    export let activeOnUrl = false;
    
    let active = activeOnUrl && url == window.location.pathname;
</script>

<style lang="scss">

    

    .button{
        font-size: 20px;
        font-weight: 3;
        flex: 1 1;

        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.1s, background-color 0.1s;
        

        margin: 10px;
        padding: 15px;
        

        
        
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


    .button:hover{
        background-color: rgba($grey-border, 0.2);
        transform: scale(1.0);
        transition: transform 0.1s, background-color 0.1s;
        cursor: pointer;
    }

    .button:active{
        transform: scale(1);
        background-color: $grey-border;
    }

    .active{
        background-color: $grey-border;
        transform: scale(1);
        transition: transform 0.1s, background-color 0.1s;
    }

    .active:hover{
        background-color: $grey-mid;
        transform: scale(1);
        cursor: default;
        transition: transform 0.1s, background-color 0.1s;
    }

    @media (min-width: $breakpoint-tablet){

    }

    @media (max-width: $breakpoint-tablet){
        .button{
            width: 100%;
            height: 230px;
            border: 3px solid $grey-dark;
            background-color: $grey-dark;
            font-size: 30px;
            font-weight: 3;
        }
    }
</style>

<template class="active">

</template>

<span on:click={() => active ? false : window.location.href = `${url}`} href={url} class="button" class:active>
    <slot/>
</span>