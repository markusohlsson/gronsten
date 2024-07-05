<template>
    <div>
        <div class="contact-hero-wrapper" >
            <div class="contact-hero-text-wrapper">
                <h1 class="slide-in-left contact-hero-title">Kontakt</h1>
                <div class="contact-hero-text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facere deserunt similique exercitationem labore error omnis rem, assumenda placeat quo doloribus necessitatibus fugit ipsum voluptatibus minima iure harum nulla repellat.</p>
                </div>
            </div>
            <div class="slide-in-right">
                <img class="contact-hero-image" src="../assets/apiary.jpg" loading="lazy">
            </div>
        </div>
        <div class="contact-wrapper" >
            <form class="contact-form" @submit.prevent="onSubmit">
                <label for="name">Namn</label>
                <input name="name" type="text" placeholder="John Doe" v-model="name" required>
                <label for="email">Email</label>
                <input name="email" type="text" placeholder="John.doe@mail.com" v-model="email" required>
                <label for="subject">Ämne</label>
                <input name="subject" type="text" placeholder="Ämne" v-model="subject" required>
                <label for="message">Meddelande</label>
                <textarea name="message" type="text" placeholder="Meddelande..." v-model="message" required></textarea>
                <button type="submit">Skicka</button>
            </form>
            <div class="contact-details">
                <div>
                    <h2><span class="material-symbols-outlined">pin_drop</span>Adress</h2>
                    <h3>Lupinvägen 34</h3>
                    <h3>165 70 Hässelby</h3>
                    <h3>Sverige</h3>
                </div>
                <div>
                    <h2><span class="material-symbols-outlined">call</span>Kontakt</h2>
                    <h3>+46 (0)708 88 77 10</h3>
                </div>
                <div>
                    <h2><span class="material-symbols-outlined">mail</span>E-post</h2>
                    <h3>info@gronsten.se</h3>
                </div>
            </div>
        </div>
    </div>
    <div class="google-maps">
        <iframe v-if="isMobile" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2032.5543722215014!2d17.826604000000003!3d59.37377600000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9fef935a29f7%3A0x45673cfacd9a95e4!2sLupinv%C3%A4gen%2034%2C%20165%2070%20H%C3%A4sselby!5e0!3m2!1ssv!2sse!4v1720210089942!5m2!1ssv!2sse" width="300" height="175" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <iframe v-if="!isMobile" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2032.5543617569808!2d17.824028777705806!3d59.37377617463588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9fef935a29f7%3A0x45673cfacd9a95e4!2sLupinv%C3%A4gen%2034%2C%20165%2070%20H%C3%A4sselby!5e0!3m2!1ssv!2sse!4v1720023822980!5m2!1ssv!2sse" width="100%" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>  
    </div>
    <div class="contact-confirmation" v-if="messageSent">
        <span class="material-symbols-outlined close" @click="messageSent = false">close</span>
        <span class="material-symbols-outlined checkmark" >check</span>
        <h2>Ditt meddelande har skickats</h2>
        <p>Vi återkommer så fort som möjligt</p>
    </div>
    <div class="contact-confirmation" v-if="error">
        <span class="material-symbols-outlined close" @click="messageSent = false">close</span>
        <span class="material-symbols-outlined error" >error</span>
        <h2>Ditt meddelande har inte skickats skickats</h2>
        <p>Vänligen försök igen eller kontakta oss direkt på</p>
        <p>info@gronsten.se</p>
        <p>+46 (0) 708 88 77 10</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name:'',
            email:'',
            subject:'',
            message:'',
            messageSent: false,
            error: false,
        }
    },
    computed: {
        isMobile() {
    // Assuming mobile view is less than 768px width
    return window.innerWidth < 768;
  	},
    },
    methods : {
        async onSubmit() {
            try {
            const response = await fetch("https://formcarry.com/s/c2wtAXTAV8D", {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: this.name,
                email: this.email,
                subject: this.subject,
                message: this.message
            })
            });

            if (response.ok) {
                this.name ='';
                this.email = '';
                this.subject ='';
                this.message = '';
                this.messageSent = true;
                const result = await response.json();
            } else {
                this.error =true;
            }
        } catch (error) {
            this.error = true;
        }

        }
    },
}
</script>
<style scoped>
@media (max-width: 768px) {
    .contact-hero-wrapper {
        display:flex;
        flex-direction: column-reverse;
        margin-bottom:50px;
        position:relative;
        .contact-hero-text-wrapper {
            .contact-hero-title{
                font-size: 72px;
                text-align:center;
                color:#DAA520;
            }
            .contact-hero-text {
                font-size:16px;
                padding:10px;
                margin:5px;
                color:#36454F;
            }
        }
        .contact-hero-image {
            height:30vh;
            object-fit:cover;
            width:100%;
        }
    }
    .contact-form {
        color:#36454F;
    display:flex;
    flex-direction: column;
    align-items: center;
    gap:5px;
    font-size:20px;
    input {
        width:80%;
        height:30px;
        border:1px solid #36454F;
    }
    textarea {
        height: 200px;
        width:80%;
        border: 1px solid #36454F;
    }
    button {
        background-color:#DAA520;
        color:#36454F;
        width:150px;
        border:0;
        padding:20px;
        margin-top:10px;
        border-radius: 15px;
        font-size:16px;

    }
}
.material-symbols-outlined {
    margin-right:5px;
    font-size:26px;
    overflow: hidden;
}
.contact-details {
    margin-top:25px;
    margin-bottom:25px;
    text-align: center;
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    h2 {
        margin-bottom:10px;
        font-size:24px;
        color: #DAA520;
        vertical-align: middle;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top:10px;
    }
    h3 {
        font-size:16px;
    }
}
    .google-maps {
        display:flex;
        justify-content: center;
        margin-bottom:25px;
    }
    .contact-confirmation {
    position: fixed;
    right: 10%;
    top: 50%;
    transform: translateY(-50%);
    width: 80vw;
    height: 50vh;
    background-color: white;
    text-align: center;
    border:1px solid grey;
  .close {
    position:absolute;
    top:0;
    right:0;
    font-size:45px;
    color:#36454F
  }
  .checkmark {
    font-size:300px;
    color:rgb(0, 190, 0);
  }
  .error {
    font-size:300px;
    color:red;
  }
}
}
@media (min-width: 769px) {
.contact-hero-wrapper {
    display: flex;
    justify-content: space-between;
    position:relative;
    margin-bottom:100px;
}
.contact-hero-text-wrapper {
   display:flex;
   align-items:center;
   justify-content:center;
}
.contact-hero-title {
    font-size: 240px;
    color:#DAA520;
}
.contact-hero-text {
    position:absolute;
    width:30%;
    left:15px;
    bottom:15px;
    color:#36454F
}
.contact-hero-image {
    height:70vh; 
    width:30vw; 
    object-fit: cover;
    margin-top:100px;
    margin-right:15px;
}
.contact-confirmation {
    position: fixed;
  right: 25%;
  top: 50%;
  transform: translateY(-50%);
  width: 40vw;
  height: 50vh;
  background-color: white;
  text-align: center;
  border:1px solid grey;
  .close {
    position:absolute;
    top:0;
    right:0;
    font-size:45px;
    color:#36454F
  }
  .checkmark {
    font-size:300px;
    color:green;
  }
  .error {
    font-size:300px;
    color:red;
  }
}
.google-maps {
    margin: 0 auto;
    width:80vw;
    margin-bottom:50px;
}
.contact-wrapper {
    margin-top:50px;
    margin-bottom:50px;
    display:flex;
    width: 100%;
    justify-content: space-evenly
}
.contact-form {
    width: 40%;
    display:flex;
    flex-direction: column;
    gap:5px;
    font-size:20px;
    input {
        width:80%;
        height:30px;
        border:1px solid #36454F;
    }
    textarea {
        height: 200px;
        width:80%;
        border: 1px solid #36454F;
    }
    button {
        background-color:#DAA520;
        color:#36454F;
        width:150px;
        border:0;
        padding:20px;
        margin-top:10px;
        border-radius: 15px;
        font-size:16px;

    }
}
.material-symbols-outlined {
    margin-right:5px;
    font-size:26px;
    overflow: hidden;
}
.contact-details {
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    h2 {
        font-size:24px;
        color: #DAA520;
        vertical-align: middle;
        display: flex;
        align-items: center;

    }
}
}
</style>