<script>
    import Icon from 'svelte-awesome';
    import {search} from 'svelte-awesome/icons';

    let popout = false;
    function onpressed(){
        popout = true;
    }
</script>

<style lang="scss">
    @use "sass:color";

    #searchcontainer{
        padding: 0;

        display: flex;
        flex-direction: row;
        justify-content: center;
        text-align: center;
        align-items: center;

        background: $grey-dark;

        flex-shrink: 1;

        
    }

    #searchbar{
        background: none;
        padding-left: 15px;
        border: none;
        outline: none;
        margin: 0;

        flex: 1;

        color: white;


    }

    #searchbutton{
        display: inline-block;
        width: 50px;
        height: 50px;
        text-align: center;
        border: none;
        outline: none;
        margin: auto;
        margin: 0;
        background: none;
        cursor: pointer;
        color: white;

    }

    @keyframes bleed-bg{
        0%{
            background: $grey-mid;
        }

        50%{
            transform: scale(1.2);
            transition: transform 0.1s;
        }

        100%{
            background: none;
        }
    }

    #searchbutton:active{
        background-color: $grey-mid;
        
    }

    .popout{
        animation: bleed-bg 1s;
    }

    @media (min-width: $breakpoint-tablet){
        #searchcontainer{
            flex-grow: 1;
        }
    }

    @media (max-width: $breakpoint-tablet){
        #searchbar{
            display: inline-block;
            flex-basis: 40%;
            width: 0%;
            
        }

        #searchcontainer{
            width: 80vw;
            display: flex;
            padding: 0;
            margin: 0;
            font-size: 30px;
            padding: 0;
        }

        #searchbutton{
            height: 100%;
        }
    }
</style>

<div id="searchcontainer">
    <input id="searchbar" type="text" placeholder="Search..."/>
    <button id="searchbutton" class="{popout ? 'popout' : ''}" on:mousedown={onpressed} on:animationend={() => popout = false}><Icon scale="1.5" data={search}/></button>
</div>

