<script>
    import Topbar from '../components/Topbar.svelte';
</script>

<style>
    .content{
        margin: 20px;
        background-color: $grey-mid;
        padding: 30px;
        line-height: 1.4em;
    }
</style>

<Topbar dynamic={false}/>
<div class="content">
    <h2>Contact us</h2>
    <p>
        Mobile Number: Number Here<br>
        Email: Email here<br>
        Address: Address here
    </p>
    
</div>