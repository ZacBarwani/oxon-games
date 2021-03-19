<script>
    let gone = false;
    let scrollY = 0;
    $: gone = scrollY > 50;

</script>

<style lang="scss">



    .hero-image-section{
        position: relative;
        display: flex;

        
        padding: 0;
        top: 0;
        left: 0;
    
        height: 80vmin;

        box-sizing: border-box;
    }

    .hero-image-section::after{
        content: '';

        
        background-image: url('/images/hades.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: top;
        
        
        position: absolute;
        left: 0; top: 0;

        width: 100%;
        height: 100%;


        
        box-sizing: border-box;
    }

    .hero-text-cont{
        z-index: 1;
    }

    .carousel-controls{
        display: none;
    }

    @media (min-width: $breakpoint-tablet){
        .hero-image-section::after{
            box-shadow: 0 -30vh 100px black inset;
        }

        .hero-image-section{
            flex-direction: column;
            justify-content: flex-end;
            
            
        }

        .hero-text-cont{
            width: 100%;
            
            margin-bottom: 6vh;
            display: flex;
        }

        .hero-text{
            flex-basis: 60%;
            padding: 40px;
        }

        .carousel-controls{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-grow: 1;
            height: 100%;

            transition: opacity 5s;
        }

        @keyframes flash{
            0%{
                opacity: 0;
            }

            10%{
                opacity: 0;
            }

            90%{
                opacity: 1;
            }

            100%{
                opacity: 1;
            }
        }

        .flashing{
            opacity: 1;
            animation: flash 2.5s infinite alternate ;
            
        }

        .gone{
            opacity: 0;
            transition: opacity 0.5s;
        }

    }

    @media (max-width: $breakpoint-tablet){
        .hero-image-section::after{
            
        }

        .hero-text-cont{
            

            display: flex;
            flex-direction: column;
            justify-content: flex-end;

            box-shadow: 0px -50vh 200px black inset;
            

            border-radius: 10px;
        }

        .hero-text{
            padding: 40px;
            margin-bottom: 6vh;
        }

        .hero-text-cont::after{
            background-color: $grey-dark;
            z-index: 100;
            position: absolute;
            top: 0;
            left: 0;
        }
    }

</style>

<svelte:window bind:scrollY/>

<div class="hero-image-section">

    <div class="hero-text-cont">
        <div class="hero-text">
            <h1>Hades</h1>
            <p>Hades is a god-like rogue-like dungeon crawler that combines the best aspects of Supergiant's critically acclaimed titles, including the fast-paced action of Bastion, the rich atmosphere and depth of Transistor, and the character-driven storytelling of Pyre.</p>
        </div>

        <div class="carousel-controls" class:gone>
            <h1 class="flashing" >Scroll for more</h1>
        </div>
    </div>
</div>

