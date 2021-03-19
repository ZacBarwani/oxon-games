<script>
	import Topbar from "../components/Topbar.svelte";
	import HeroCarousel from '../components/HeroCarousel.svelte';
	import Card from "../components/Card.svelte";
	import {onMount} from 'svelte';


	let topSellersAmt = 10;
	let topSellers = [];
	for (var i = 0; i < topSellersAmt; i++){
		topSellers.push({});
	}

	let onSaleAmt = 40;
	let onSale = [];
	for (var i = 0; i < onSaleAmt; i++){
		onSale.push({});
	}

	const apiKey = "3dc5968d3f544c268777aa19dbbb16b3";

	async function getCards(){
		
		const gameRequest = {
			method: 'GET'
		};

		
		await fetch(`https://api.rawg.io/api/games?key=${apiKey}&page_size=${topSellersAmt}`, gameRequest)
		.then(response =>{
			return response.json();
		})
		.then(data => {
			topSellers = data.results;
		});

		await fetch(`https://api.rawg.io/api/games?key=${apiKey}&page=2&page_size=${onSaleAmt}`, gameRequest)
		.then(response =>{
			return response.json();
		})
		.then(data => {
			onSale = data.results;
		});
	}



	onMount(() => {
		getCards();
	});
	
	function redirect(id){
		alert(id);
        if(id != 0){
            window.location.href=`/game?id=${id}`;
        }
    }

</script>

<style>
	@use "sass:color";

	.page-content{
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		
		
		height: auto;
		z-index: 1;
		padding: 0;
		margin: 0;
		
	}

	.block{
		padding: 0;
		
		
		margin-bottom: 50px;
		overflow: hidden;
	}

	.row{
		
		display: flex;
		flex-direction: row;
	}

	.centered-h{
		display: flex;
		justify-content: center;
	}

	.centered-v{
		display: flex;
		align-items: center;
	}

	.outset{
		background: $grey-mid;
		

		padding: 40px;
		
		border-radius: 0px;

		box-shadow: 0px px 2px black;
	}

	.outset::after{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background: white;
	}

	.inset{
		background: $grey-dark;
	}

	.grid-boxes{
		overflow-x: auto;
		padding: 40px;
		box-sizing: border-box;

		display: grid;	

		grid-template-rows: 300px;
		grid-auto-columns: 200px;
		grid-auto-flow: column;
		gap: 10px 40px;
	
	}

	.grid-squares{
		
		overflow-x: auto;
			
		box-sizing: border-box;
		width: 100%;
		height: auto;

		display: grid;	
		padding: 40px;
		
	}

	@media (min-width: $breakpoint-tablet){
		.carousel-grid{
			grid-template-columns: 1fr 1fr;
		}

		.individual{
			margin-left: 12vw;
			margin-right: 12vw;
		}

		.block{
			margin: 50px;
		}

		.grid-squares{
			overflow-x: auto;
			box-sizing: border-box;

			display: grid;	

			grid-auto-rows: 150px 150px 150px;
			grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
			grid-auto-flow: row;
			gap: 20px 20px;
		}

		#side-padding{
			display: none;
		}

		.inset{
			
			margin: 0;
		}
	}

	@media (max-width: $breakpoint-tablet){
		.grid-squares{
			overflow-x: auto;
			padding: 40px;
			margin: 0;
			box-sizing: border-box;

			display: grid;	

			grid-template-rows: 150px 150px;
			grid-auto-columns: 150px;
			grid-auto-flow: column;
			gap: 40px 40px;

		}

		#side-padding{
			display: block;
			width: 0; padding-right: 20px;
		}
	}
</style>




<div style="margin: 0">
	
</div>


<section class="page-content" >

	<Topbar dynamic={true}/>
	
	<section class="block">
		<HeroCarousel/>	
	</section>

	<section class="block">

		

		<div class="row centered-h centered-v outset shadowed">
			<h2>Top sellers</h2>
		</div>
		<div class="row centered-v inset">
			<div class="grid-boxes">
				{#each topSellers as game}
					<Card name={game.name} img={game.background_image} id={game.id}/>
				{/each}
				<div style="width: 0; padding-right: 20px;"></div>
			</div>
		</div>
		
	</section>

	<section class="block">
		<div>
			<div class="row centered-h centered-v outset shadowed">
				<h2>Up to 50% off</h2>
			</div>
			<div class="row centered-v inset">
				<div class="grid-squares">
					{#each onSale as game}
						<Card name={game.name} img={game.background_image} id={game.id}/>
					{/each}
					<div id="side-padding"></div>
				</div>
			</div>

		</div>
	</section>
</section>

