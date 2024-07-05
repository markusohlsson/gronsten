<template>
    <div class="video-container">
      <video autoplay muted loop>
        <source src="../assets/Hero.mp4" loading="lazy">
      </video>
      <div class="text-overlay">
        <h1 class="gronsten-title">Grönstenen Biodling</h1>
        <div class="line-wrapper">
            <h1>NÄRPRODUCERAD</h1>
        </div>
        <h2>SVENSK HONUNG</h2>
        <h3>Från egen bigård i Hässelby</h3>
      </div>
    </div>
  </template>


<style scoped>
  /* @media (max-width: 768px) {} */
.gronsten-title {

  @media (max-width: 768px) {
    font-size:44px;
  }
  font-size:84px;
}
.video-container {
  @media (max-width:768px) {
    height:100vh;
  }
  position: relative;
  height: 90vh;
  width: 100%;
}

video {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  object-fit: cover;
  height: 100%;
  width: 100%;
}

.text-overlay {
  position: absolute;

  left: 50%;
    top: 50%; /* Center vertically */
  transform: translate(-50%, -50%); /* Center horizontally and adjust for height */
  text-align: center;
  color: white;
  z-index: 1; /* Ensure text overlay stays above the video */
}


h1, h2, h3 {
  margin: 0;
  letter-spacing: 0.1em;

}
h1 {
  @media (max-width: 768px) {
    font-size:18px;
  }
    font-size: 24px;
}

h2 {
  @media (max-width: 768px) {
    font-size:28px;
  }
    text-shadow: #0f0f0f 3px 3px 3px;
    font-size:64px;
    color: #DAA520;
}

h3 {
  @media (max-width: 768px) {
    font-size:16px;
  }
    font-size:28px;
}

.line-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.line-wrapper::before,
.line-wrapper::after {
  content: '';
  flex: 1;
  height: 2px; /* Adjust height as needed */
  background-color: white; /* Line color */
}

.line-wrapper::before {
  margin-right: 10px; /* Space between line and text */
}

.line-wrapper::after {
  margin-left: 10px; /* Space between line and text */
}


</style>