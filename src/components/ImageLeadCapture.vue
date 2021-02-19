<template>
  <div class="container" v-if="modal && !alredyOpened" @click="closeModal">
    <div class="modal">
      <button class="btn" @click="closeModalBtn">X</button>
      <a :href="urlTo" target="_blank">
        <img class="image" :src="url" alt="offer"/>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageLeadCapture',
  data: () => ({
      modal: true,
      alredyOpened: false,
      mobile: false,
      urlTo: 'https://pay.hotmart.com/Y22323637W?off=hg6uzaay&checkoutMode=10',
      url: 'http://static.photongroup.com/blog/leadcapture/new-product/offer-desk.jpg'
    }),
    methods: {
    setNewUrl(size) {
      if (size > 600) {
        this.url = 'http://static.photongroup.com/blog/leadcapture/new-product/offer-desk.jpg'
      } else {
        this.url = 'http://static.photongroup.com/blog/leadcapture/new-product/offer-mob.jpg'
      }
    },
    closeModal({target, currentTarget}) {
      if(target === currentTarget) this.modal = false;
      this.alredyOpened = true;
    },
    closeModalBtn() {
      this.modal = false;
      this.alredyOpened = true;
    },
  },
  created() {
    const width = window.innerWidth
    this.setNewUrl(width)
  }
}
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 2281px;
  max-width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  text-align: center;
  background-color: rgba(0, 0, 0, .5);
  animation: fadeIn .3s forwards;
  z-index: 2000;
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
  position: relative;
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
  width: 600px;
  max-width: 100%;
}
</style>
