<script>
    import Topbar from '../components/Topbar.svelte';
    import ScreenshotCarousel from '../components/ScreenshotCarousel.svelte';
    import BuyButton from '../components/BuyButton.svelte';

    const apiKey = "3dc5968d3f544c268777aa19dbbb16b3";

    const urlParams = new URLSearchParams(window.location.search);
    let gameId = urlParams.get('id');

    let gameName = "Loading...";
    let gameImage = "";
    let gameDesc = "Loading...";

    let screenshots = []


    async function fetchGameInfo(){
        const gameRequest = {
			method: 'GET'
		};

		
		await fetch(`https://api.rawg.io/api/games/${gameId}`, gameRequest)
		.then(response =>{
			return response.json();
		})
		.then(data => {
            gameName = data.name;
            gameImage = data.background_image;
            var newDesc = data.description;
            newDesc = newDesc.replace("<br>", "<br><br>");
            newDesc = newDesc.replace("<br />", "<br><br>");
            newDesc = newDesc.replace("<br/>", "<br><br>");
            gameDesc = newDesc;
        });
        
        await fetch(`https://api.rawg.io/api/games/${gameId}/screenshots`, gameRequest)
        .then(response =>{
            return response.json();
        })
        .then(data => {
            screenshots = data.results;
            data.
        })
    }

    fetchGameInfo();
</script>

<style>

    #whole-page-container{
        display: grid;
        grid-template-columns: 60vw 25vw;
        box-sizing: border-box;
        grid-auto-flow: row;
        padding-left: 6vw;
        padding-right: 6vw;
        gap: 0px 50px;

        justify-content: left;
        margin-top: 50px;
    }

    #purchase-widget-cont{
        height: 100%;
        position: sticky;
        top: 150px;
    }

    #purchase-widget{
        width: 100%;
        height: auto;
        padding-top: 0;
        padding: 40px;
        background-color: $glass-mid;
        backdrop-filter: blur(15px);
        
       

        box-sizing: border-box;
        box-shadow: -2px 2px 10px black;
    }

    #page-content{
        z-index: 3;
        padding: 0;
    }

    .block{
        
        padding: 0;
        margin-top: 50px;
        width: 100%;
        box-shadow: -2px 2px 10px black;
        
    }

    .outset{
        background-color: $glass-mid;
        backdrop-filter: blur(15px);
        padding: 40px;
        display: flex;
        flex-direction: column;
        
    }

    .inset{
        padding: 40px;
        padding-top: 20px;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: minmax(1fr, 400px);

        background-color: $glass-dark;
        backdrop-filter: blur(10px);
        
        
    }

    #covertitle{
        
        margin-top: 50vh;
        height: 50vmin;
        display: flex;
        justify-content: center;
        align-items: center;
        
        h1{
            padding: 40px;
            background: $glass-mid;
            backdrop-filter: blur(10px);
        }
    }

    #coverimage{
        z-index: 0;
        height: 100%;
        width: 100%;
        background-size: cover;
        background-position: top;
        position: fixed;
        box-shadow: 0px -400px 300px inset black;
        top: 0; left: 0;
    }

    @media (max-width: $breakpoint-tablet){
        #whole-page-container{
            display: flex;
            padding: 0;
            flex-direction: column;
        }   

        #purchase-widget{
            position: static;
        }

    }
</style>





<div id="coverimage" style="background-image: url({gameImage}); z-index: -1;">
</div>



<div id="covertitle">
    <h1>{gameName}</h1>
</div>

<Topbar dynamic={false}/>
<div id="whole-page-container">
    
    <div>
        <ScreenshotCarousel screenshotsFetched={screenshots} />
    </div>

    <div id="purchase-widget-cont">
        <section id="purchase-widget">
            <h2>{gameName}</h2>
            <br>
            <div>
                <BuyButton label="39.99">Buy</BuyButton>
            </div>
        </section>
    </div>

    <section id="page-content">
        <div class="block">
            <div class="outset">
                <h1>Description</h1>
            </div>
            <div class="inset">
                <div id="desc">{@html gameDesc}</div>
            </div>
        </div>
        
        <div class="block">
            <div class="outset">
                <h1>DLC</h1>
            </div>
            <div class="inset">
                Test
            </div>
        </div>
    </section>

    
</div>



