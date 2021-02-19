<template>
  <div class="container" v-if="modal && !alredyOpened">
    <div class="modal">
      <div v-if="leadInserted">
        <div class="main-claim">
          <h2 class="main-claim-title">
            E-mail recebido. Para confirmar sua inscrição, siga os passos abaixo:
          </h2>
          <ul>
            <li>
              <p class="main-claim-text">1 - Acesse seu e-mail</p>
            </li>
            <li>
              <p class="main-claim-text">2 - Clique no nosso e-mail</p>
            </li>
            <li>
              <p class="main-claim-text">3 - Confirme sua Inscrição</p>
            </li>
          </ul>
          <h3 class="main-claim-subtitle">Te vejo dia 8 de fevereiro!</h3>
        </div>
      </div>
      <div class="modal-container" v-else>
        <div class="video">
          <iframe class="video" width="100%" height="100%" border='none' src="https://www.youtube.com/embed/PNGoav7zaoQ"></iframe>
        </div>
        <div class="main" >
          <div class="main-claim">
            <h2 class="main-claim-title">
              7 dias que irão mudar o seu ano!
            </h2>
            <p class="main-claim-text" >100% ONLINE E GRATUITO</p>
            <h3 class="main-claim-subtitle">INSCREVA-SE AGORA</h3>
          </div>
          <form
            id='form'
            class="form"
            @submit.prevent="checkForm"
          >
            <input
              id='name'
              v-model='name'
              type='text'
              name='name'
              placeholder='Nome completo'
            >
            <input
              id='email'
              v-model='email'
              type='text'
              name='email'
              placeholder='Digite seu e-mail'
            >
            <button class="button">
              QUERO PARTICIPAR
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script async src='https://www.google-analytics.com/analytics.js'></script>
<script>
import CustomerService from '../services/CustomerService'

export default {
  name: 'HipertrophtyWeekForm',
  data: () => ({
      modal: true,
      alredyOpened: false,
      imageLink: '',
      errors: [],
      name: null,
      email: null,
      movie: null,
      leadInserted: false,
    }),
    methods: {
    closeModalBtn() {
      this.modal = false;
      this.alredyOpened = true;
    },
    validEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    checkForm(e) {
      e.preventDefault();

      this.errors = [];

      if (!this.name) {
        this.errors.push("Name required.");
      }
      if (!this.email) {
        this.errors.push('Email required.');
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Valid email required.');
      }

      if (!this.errors.length) {
        CustomerService.sendCustomer(this.name, this.email)
        ga('send', {
          hitType: 'event',
          eventCategory: 'lead',
          eventAction: 'capture',
        });
        this.leadInserted = true
      }
    },
  },
}
</script>

<style scoped>
.container {
  width: 100%;
  align-items: center;
  justify-content: center;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translate3D(50px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3D(0px, 0, 0);
  }
}

.modal {
  background-color: white;
  width: 100%;
  max-width: 400px;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
  margin: 0 auto;
}

.modal-container {
  align-items: center;
  justify-content: center;
}

.video {
  border-radius: 10px;
  border: none;
}

.main-claim {
  text-align: left;
  font-family: "Open Sans Condensed", sans-serif;
}

.main-claim-title {
  margin: 16px 0 8px;
  line-height: .9;
  font-size: 26px;
}

.main-claim-text {
  font-weight: 600;
  font-family: "Dosis", sans-serif;
}

.main-claim-subtitle {
  margin: 0;
  font-family: Dosis, sans-serif;
  background-color: yellow;
  font-size: 1.4em;
  width: 250px;
}

.form input {
  height: 40px;
  width: 100%;
  margin-top: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  letter-spacing: 1px;
  font-size: 16px;
  color: #777;
}

.button {
  height: 40px;
  width: 100%;
  margin-top: 16px;
  background-color: #fff000;
  border: none;
  border-radius: 5px;
  padding: 10px;
  letter-spacing: 1px;
  font-size: 16px;
  color: #000;
  font-weight: 700;
}

.btn {
  width: 30px;
  height: 30px;
  position: absolute;
  border-radius: 50%;
  border: none;
  background-color: white;
  font-weight: 800;
  top: -10px;
  left: -10px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, .3);
  background-color: yellow;
}

.btn:hover {
  cursor: pointer;
}

.image {
  width: 100%;
  max-width: 600px;
}

/* @media only screen and (min-width: 600px) {
  .modal {
    max-width: 620px;
    width: 100%;
    margin: 0 auto;
  }

  .modal-container {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }

  .video {
    height: 290px;
  }

  .main {
    width: 45%;
    padding-left: 8px;
  }

  .main-claim-title {
    margin: 0;
    font-size: 26px;
    padding-bottom: 8px;
  }

  .main-claim-text {
    font-size: 20px;
    padding-bottom: 8px;
  }

  .main-claim-subtitle {
    font-size: 1.2em;
    width: 100%;
  }
} */
</style>
