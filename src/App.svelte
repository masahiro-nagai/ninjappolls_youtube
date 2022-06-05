<script>
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	import PollList from "./components/PollList.svelte";
	import CreatePollForm from "./components/CreatePollForm.svelte";
	import Tabs from "./shared/Tabs.svelte"
	//tabs
	let items = ["Current Polls","Add New Poll"];
	let activeItem = "Current Polls";
	const tabChange = (e) =>{
		activeItem = e.detail;
	}
	// test polls
	
	const handleAdd = (e) =>{
		const poll =e.detail;
		polls =[poll,...polls];
		console.log(polls)
		activeItem = "Current Polls";
	}
	const handleVote = (e) =>{
		const{id,option} = e.detail;

		let coppiedPolls =[...polls];
		let upvotedPolls = coppiedPolls.find((poll)=>poll.id == id);
		if(option==='a'){
			upvotedPolls.votesA++;
		}
		if(option==='b'){
			upvotedPolls.votesB++;
		}
		polls = coppiedPolls;
	}
</script>
<Header />
<main>
	<Tabs {activeItem} {items} on:tabChange={tabChange}/>
	{#if activeItem === "Current Polls"}
		<PollList on:vote={handleVote}/>
	{:else if activeItem === "Add New Poll"}
		<CreatePollForm on:add={handleAdd}/>
	{/if}
	
</main>
<Footer />
<style>
	main{
		max-width: 960px;
		margin: 40px auto;
	}
</style>