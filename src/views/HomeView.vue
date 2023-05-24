<script>
import background from "../assets/images/background.jpeg"
import brand from "../assets/images/brand.png"

export default (await import('vue')).defineComponent({
  data() {
    return {
      background,
      brand
    }
  }
})

</script>
<template>
  <div>
    <header>
      <div class="line-contact">
        <div class="container flex justify-content-between">
          <div class="contacts">
            <p>
              <font-awesome-icon class="top-icons" icon="fa-solid fa-phone" /> (81) 3373-2369
            </p>
            <p>
              <font-awesome-icon class="top-icons" icon="fa-solid fa-envelope" /> saviogomes@tisaude.com
            </p>
            <p>
              <font-awesome-icon class="top-icons" icon="fa-solid fa-location-dot" />Rua Matriz de Barros
            </p>
          </div>
          <div class="social-media">
            <font-awesome-icon class="top-icons" :icon="['fab', 'square-facebook']" />
            <font-awesome-icon class="top-icons" :icon="['fab', 'square-twitter']" />
            <font-awesome-icon class="top-icons" :icon="['fab', 'linkedin']" />
            <font-awesome-icon class="top-icons" :icon="['fab', 'square-instagram']" />
          </div>
        </div>
      </div>
      <div class="container flex justify-content-between">
        <div class="brand">
          <img :src="brand" alt="brand">
        </div>
        <nav>
          <ul class="flex menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Doctors</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </nav>
      </div>
      <div class="background-header" :style="'background-image:url(' + background + ')'">
        <div class="shadow">
          <div class="container-banner flex justify-content-center">
            <div class="container">
              <div class="row flex flex-wrap">
                <div class="col-lg-6 flex flex-direction-column justify-content-center tc-white">
                  <h1 class="fs-45">Exceptional Health Care for Woman</h1>
                  <p>Em um dado instante, tudo o que o cirurgião sabe de repente se torna importante para a solução do
                    problema. Você não pode fazer isso uma hora depois ou amanhã. Você também não pode ir à biblioteca e
                    pesquisar
                  </p>
                  <div class="flex t-margin-3">
                    <button class="btn-solid-white r-margin-3">Agendamentos</button>
                    <button class="btn-solid-inline">Saiba Mais</button>
                  </div>
                </div>
                <div class="col-lg-6">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <main>
    </main>
    <footer>
    </footer>
  </div>
</template>
