<template>
	<div class="about-hero-wrapper">
		<div class="slide-in-left">
			<img class="about-hero-image" src="../assets/beekeepers.jpg"  loading="lazy">
		</div>
		<div class="about-hero-text">
			<h1 class="slide-in-right about-hero-title">Om oss</h1>
			<div class="about-hero-info">
				<p class="about-hero-info-text">Grönstenen Biodling drivs av Pontus och Anna Hallström. Vi har idag fem bigårdar och vår hemmabigård har vi i villaträdgården i Hässelby Villastad.</p>
			</div>
		</div>
	</div>
	<div class="about-wrapper">
		<div class="about-list-wrapper">

			<h2 class="about-title">Vi på Grönstenen Biodling:</h2>
			<div class="about-mobile">
			<span class="material-symbols-outlined left-arrow" @click="prevItem">arrow_back_ios</span>
			<ul class="about-list" ref="aboutList">
				<li v-for="(item, idx) in currentItem" class="about-list-item" :key="idx" :class="animationClass">{{ item }}</li>
			</ul>
			<span class="material-symbols-outlined right-arrow" @click="nextItem">arrow_forward_ios</span>
			</div>
			<div class="pause-play-container">
				<span class="material-symbols-outlined pause-play-button" v-if="isLoopPaused"  @click="toggleLoop">play_circle</span>
				<span class="material-symbols-outlined pause-play-button" v-else  @click="toggleLoop">pause_circle</span>
			</div>
			<div class="progress-bar-container">
				<div class="progress-bar" :style="{ width: progressBarWidth }"></div>
				<div class="favicon-container" :style="{ left: beePosition }">
					<img src="../assets/bee.ico" alt="Favicon" class="favicon">
				</div>
			</div>
			
		</div>
		<div class="image-wrapper">
			<img src="../assets/bigard_1.jpg" loading="lazy"/>
		</div>
	</div>
</template>
<script>
import Hammer from 'hammerjs';
export default {
  data() {
    return {
      items: [
        'Bidrar till pollineringen av växterna kring våra bigårdar samtidigt som vi producerar en god och nyttig honung.',
        'Värmebehandlar inte vår honung, vare sig den flytande eller fasta.',
        'Vingklipper inte våra drottningar.',
        'Behandlar våra bin mot sjukdomar och skadedjur med ekologiska metoder.',
        'Använder övervägande trämaterial i våra kupor.',
        'Tillverkar våra bikupor själva, använder svenskt trä, skyddar utsidan med svensk rå kallpressad linolja och vattenlöslig akrylatfärg.'
      ],
		currentIndex: 0,
		swipeDirection: null,
		animationClass:'',
		isLoopPaused: false,
		loopIntervalId: null,
    };
  },
  computed: {
	isMobile() {
    // Assuming mobile view is less than 768px width
    return window.innerWidth < 768;
  	},
	currentItem() {
		if (this.isMobile) {
      		return [this.items[this.currentIndex]]; // Return only current item for mobile
			} else {
			return this.items; // Return all items if not mobile
		}
	},
	progressBarWidth() {
            // Calculate the width of the progress bar based on currentIndex and total items
            if (this.items.length === 0) return '0%'; // Handle edge case

            const progress = (this.currentIndex / (this.items.length - 1)) * 100;
			if(this.currentIndex === 0) {
				const progress = 0
			}
            return `${progress}%`;
	},
	beePosition() {
            // Calculate the position of the bee icon relative to the progress bar
            const progressBarWidth = parseFloat(this.progressBarWidth); // Convert to float
            return `calc(${progressBarWidth}% - 8px)`; // Adjust 8px based on bee icon width
    }
  },
  methods: {
	prevItem() {
		this.animationClass = 'slide-in-left';
		if(this.currentIndex > 0) {
			this.swipeDirection = 'left';
			this.currentIndex -= 1;
		} else {
			this.swipeDirection = null;
			this.currentIndex = this.items.length -1;
		}
		this.resetAnimationClass();
	},
	nextItem() {
		this.animationClass = 'slide-in-right';
		if(this.currentIndex < this.items.length -1) {
			this.swipeDirection = 'right';
			this.currentIndex +=1;
		} else {
			this.swipeDirection = null;
			this.currentIndex = 0;
		}
		this.resetAnimationClass();
	},
	handleSwipe(event) {
		if(event.direction === Hammer.DIRECTION_LEFT) {
			this.nextItem();
		} else if (event.direction === Hammer.DIRECTION_RIGHT) {
			this.prevItem();
		}
	},
	resetAnimationClass() {
      setTimeout(() => {
        this.animationClass = '';
      }, 500);
    },
	toggleLoop() {
      this.isLoopPaused = !this.isLoopPaused;
      if (!this.isLoopPaused) {
        // Start the loop if not paused
        this.startLoop();
      } else {
        // Clear the interval if paused
        clearInterval(this.loopIntervalId);
      }
    },
    startLoop() {
      this.loopIntervalId = setInterval(() => {
        if (!this.isLoopPaused) {
          this.nextItem();
        }
      }, 3000); // Change currentItem every 3 seconds
    }
  },
  mounted() {
	const hammer = new Hammer(this.$refs.aboutList);
	hammer.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });
    hammer.on('swipe', this.handleSwipe);
	if(this.isMobile) {
		this.startLoop();
	}

  },
  beforeDestroy() {
    // Clean up interval when component is destroyed
    clearInterval(this.loopIntervalId);
  }
};
</script>

<style scoped>

@media(max-width:769px) {
	.pause-play-container {
		text-align:center;
		color:#DAA520;
		.pause-play-button {
			font-size:32px;
		}
	}
	.about-hero-wrapper {
		display:flex;
		flex-direction:column;
		margin-bottom:50px;
		position:relative;
	}
	.about-hero-image {
		height:30vh;
		object-fit:cover;
		width:100%;
	}
	.about-hero-title {
		font-size: 72px;
        text-align: center;
        color:#DAA520;
	}
	.about-hero-info {
		font-size:16px;
        padding:10px;
        margin:5px;
        color:#36454F;
	}
	.image-wrapper {
		width:100%;
		display:flex;
		justify-content: center;
		img {
			width:90%;
		}
	}
	.about-list-wrapper {
		.about-title {
			color:#36454F;
			text-align: center;
		}
	}
	.about-list {
		color:#36454F;
		margin:0 auto;
		height:250px;
		width:250px;
		overflow:hidden;
	}
	.about-list-item {
		display: flex;
		justify-content: center;
		align-items: center;
		width:100%;
		height:100%;
		text-align: center;
	}
	.about-mobile {
		display:flex;
		justify-content: center;
		align-items: center;
	}
	.right-arrow {
		color: #DAA520;
		margin-right:10px;
		font-size:32px;
	}
	.left-arrow {
		margin-left:10px;
		font-size:32px;
		color: #DAA520;
	}
	.progress-bar-container {
		margin:0 auto;
		width:80%;
		height: 5px;
		background-color: #ddd;
		margin-top: 10px;
	}

	.progress-bar-container {
    position: relative;
    height: 5px;
    background-color: #ddd;
    margin-top: 10px;
	margin-bottom:20px;
}

.progress-bar {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: #DAA520; /* Adjust color as needed */
}

.favicon-container {
    position: absolute;
    top: -5px; /* Adjust to position the favicon where you want */
    right: 0;
    width: 16px; /* Adjust width and height as per your favicon size */
    height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.favicon {
    width: 100%;
    height: 100%;
}
	}
@media (min-width:769px) {
	.pause-play-container {
		display:none;
	}
	.progress-bar-container {
		display: none;
	}
	.right-arrow {
		display:none;
	}
	.left-arrow {
		display:none;
	}
	.about-wrapper {
		display: flex;
		align-items: center;
		color: #36454F;
		margin-bottom: 50px; 
		padding: 20px; 
		.about-title {
		text-align: center
	}

	}

	.about-wrapper > div {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-left: 20px; 
	}

	.image-wrapper {
		flex: 1;
		display: flex;
		justify-content: center; 
		align-items: center; 
	}

	.image-wrapper img {
		width: 100%;
		height: auto;
		display: block;
		object-fit: cover; 
	}
		
	ul.about-list {
		list-style-type: none; 
		padding-left: 0;
		text-align: left;
		font-size:18px;
	}
	ul.about-list li {
		width:80%;
		margin-top:10px;
		position: relative;
		padding-left: 30px; 
		overflow: visible; 
	}
	ul.about-list li::before {
		content: "";
		background-image: url('../assets/honeycomb.png'); 
		background-size: contain; 
		background-repeat: no-repeat;
		position: absolute;
		left: 0;
		top: 50%;
		transform: translateY(-50%); 
		width: 20px;
		height: 20px; 
	}

	.about-hero-wrapper {
		display:flex;
		justify-content: space-between;
		position:relative;
		margin-bottom:100px;
    .about-hero-image {
      height:70vh;
      width:30vw;
      object-fit:cover;
      margin-top:100px;
      margin-left:15px;
    }
    .about-hero-text {
      display:flex;
      align-items:center;
      justify-content: center;
      margin-right:20px;
      .about-hero-title {
        font-size:240px;
        color:#DAA520;
      }
    }
    .about-hero-info {
      position:absolute;
      width:30%;
      right:20px;
      bottom:15px;
      .about-hero-info-text {
        color:#36454F;
      }
    }
}
}
	
</style>