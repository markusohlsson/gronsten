<template>
	<div style="display: flex;justify-content: space-between;position:relative;margin-bottom:100px;">
		<div class="slide-in-left">
			<img style="height:70vh; width:30vw; object-fit: cover;margin-top:100px;margin-left:15px;" src="../assets/beekeepers.jpg">
		</div>
		<div style="display:flex;align-items:center;justify-content:center; margin-right:20px;">
			<h1 class="slide-in-right" style="font-size: 240px;color:#DAA520">Om oss</h1>
			<div style="position:absolute;width:30%;right:20px;;bottom:15px;">
				<p style="color:#36454F">Grönstenen Biodling drivs av Pontus och Anna Hallström. Vi har idag fem bigårdar och vår hemmabigård har vi i villaträdgården i Hässelby Villastad.</p>
			</div>
		</div>
	</div>
	<div class="about-wrapper">
		<div class="about-list-wrapper">
			<h2 class="about-title">Vi på Grönstenen Biodling:</h2>
			<ul class="about-list">
				<li><span>Bidrar till pollineringen av växterna kring våra bigårdar samtidigt som vi producerar en god och nyttig honung.</span></li>
				<li>Värmebehandlar inte vår honung, vare sig den flytande eller fasta.</li>
				<li>Vingklipper inte våra drottningar.</li>
				<li>Behandlar våra bin mot sjukdomar och skadedjur med ekologiska metoder.</li>
				<li>Använder övervägande trämaterial i våra kupor.</li>
				<li>Tillverkar våra bikupor själva, använder svenskt trä, skyddar utsidan med svensk rå kallpressad linolja och vattenlöslig akrylatfärg.</li>
			</ul>
		</div>
		<div class="image-wrapper">
			<img src="../assets/bigard_1.jpg"/>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.about-title {
		text-align: center
	}
	.about-wrapper {
		display: flex;
		align-items: center;
		color: #36454F;
		margin-bottom: 50px; /* Optional: Add margin between each section */
		padding: 20px; /* Add padding to create space around the content */
	}

	.about-wrapper > div {
		flex: 1; /* Take up remaining space */
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-left: 20px; /* Add margin between image and text */
	}

	.image-wrapper {
		flex: 1;
		display: flex;
		justify-content: center; /* Center align image horizontally */
		align-items: center; /* Center align image vertically */
	}

	.image-wrapper img {
		width: 100%;
		height: auto;
		display: block;
		object-fit: cover; /* Maintain aspect ratio and cover container */
	}
		
	ul.about-list {
		list-style-type: none; /* Remove default bullets */
		padding-left: 0; /* Remove default padding */
		text-align: left;
		font-size:18px;
	}
	ul.about-list li {
		width:80%;
		margin-top:10px;
		position: relative; /* Required for absolute positioning of the icon */
		padding-left: 30px; /* Adjust padding to make space for the icon */
		overflow: visible; /* Ensure list markers are visible */
	}
	ul.about-list li::before {
		content: "";
		background-image: url('../assets/honeycomb.png'); /* Set custom logo */
		background-size: contain; /* Adjust as necessary */
		background-repeat: no-repeat;
		position: absolute;
		left: 0;
		top: 50%;
		transform: translateY(-50%); /* Center the icon vertically */
		width: 20px; /* Adjust based on your logo size */
		height: 20px; /* Adjust based on your logo size */
	}
</style>