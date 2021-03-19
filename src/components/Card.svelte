<script>
    export let name = "";
    export let img = "";
    export let id = 0;

    function redirect(){
        if(id != 0){
            window.location.href=`./game.html?id=${id}`;
        }
    }
</script>

<style>

    .card{
        

        display:flex;
        position: relative;
        flex-direction: column;

        justify-content: flex-end;


        background-color: $grey-mid;
        background-size: cover;
        background-position: top;

        
        padding: 12px;

        
        
        z-index: 0;
        
        box-shadow: -10px 10px 20px black;

        * {
            z-index: 2;
            opacity: 0;
            transition: opacity 0.1s;
        }
    }

    .card-text{
        padding: 0px;
        text-overflow: ellipsis;
        flex-grow: 0;
        min-height: 0;
        min-width: 0;
        
        
        margin-bottom: 10px;
        
        
    }

    a{
        margin-left: 0;
        color: $grey-light;
        font-weight: 3;
        cursor: pointer;
    }

    .card::after{
        content: '';
        position: absolute;
        background: linear-gradient(#00000000, black);
        width: 100%;
        height: 100%;

        opacity: 0;

        top:0;
        left:0;
        z-index: 1;
        
        transition: opacity 0.25s;
    }

    @media all and (max-width: $breakpoint-tablet){
        
    }

    @media all and (min-width: $breakpoint-tablet){
    }

    @media all and (hover: hover){
        .card{
            *{
                opacity: 0;
            }
        }
        
        .card::after{
            opacity: 0;
        }
        
        .card:hover::after{
            opacity: 1;
        }

        .card:hover{
            cursor: pointer;

            * {
                z-index: 2;
                opacity: 1;
            }
        }
    }

    @media all and (hover: none){
        .card{
            overflow: hidden;
        }

        .card::after{
            
            content: '';
            position: absolute;
            background: linear-gradient(#00000000, black);
            width: 100%;
            height: 100%;


            top:0;
            left:0;
            z-index: 1;
            transition: opacity 0.25s;
        }
    }

</style>

<div class="card" style="background-image: url({img})" on:click={redirect}>
    <div class="card-text">
        <b>{name}</b>
    </div>
    <a>Learn more</a>
</div>