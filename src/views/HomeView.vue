<script>
import background from "../assets/images/background.jpeg"
import brand from "../assets/images/brand.png"
import doctors from "../assets/images/doctors.jpeg"
import medica from "../assets/images/medica.jpeg"
export default (await import('vue')).defineComponent({
  data() {
    return {
      background,
      brand,
      doctors,
      medica
    }
  }
})

</script>

<template>
  <div>
    <header>
      <div class="line-contact">
        <div class="container flex justify-content-between">
          <div class="contacts color-gray-4">
            <p><font-awesome-icon class="top-icons" :icon="['fas', 'phone']" /> 99999-0326</p>
            <p><font-awesome-icon class="top-icons" :icon="['fas', 'envelope']" /> savio.gomes@tisaude.com</p>
            <p><font-awesome-icon class="top-icons" :icon="['fas', 'location-dot']" /> Rua Mariz e Barros, 311</p>
          </div>
          <div class="social-media">
            <font-awesome-icon class="top-icons" :icon="['fab', 'square-facebook']" />
            <font-awesome-icon class="top-icons" :icon="['fab', 'square-twitter']" />
            <font-awesome-icon class="top-icons" :icon="['fab', 'linkedin']" />
            <font-awesome-icon class="top-icons" :icon="['fab', 'square-instagram']" />
          </div>
        </div>
      </div>
      <div class="container flex justify-content-between align-items-center">
        <div class="brand">
          <img :src="brand" alt="">
        </div>
        <nav>
          <ul class="flex menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Serviços</a></li>
            <li><a href="#">Doutores</a></li>
            <li><a href="#">Contatos</a></li>
          </ul>
        </nav>
      </div>
    </header>
    <main>
      <div class="container-full background-header" :style="'background-image: url(' + backheader + ')'">
        <div class="shadow"></div>
        <div class="container-banner flex justify-content-center">
          <div class="container">
            <div class="row flex flex-wrap">
              <div class="col-lg-6 -t-margin-90 flex flex-direction-column justify-content-center tc-white">
                <h1 class="fs-45 b-margin-2">
                  Cuidados de Saúde Excepcionais para Mulheres
                </h1>
                <p class="t-margin-0">
                  O melhor médico é aquele que mais esperança inspira. A medicina
                  é o remédio para todas as dores humanas, apenas o amor é um mal
                  que não tem cura. O melhor médico é aquele que recebe os que
                  foram desenganados por todos os outros. Medicina é a arte de
                  compartilhar a vida.
                </p>
                <div class="flex t-margin-3">
                  <button class="btn-solid-white r-margin-3">Agendamentos</button>
                  <button class="btn-inline-white">Saiba Mais</button>
                </div>
              </div>
              <div class="col-lg-6"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="container flex bg-white -t-margin-90 box-shadow-1 border-radius-10 z-index-9">
        <div class="box-header flex justify-content-around flex-direction-column">
          <font-awesome-icon class="tc-purple fs-30" :icon="['fas', 'house-chimney-medical']" />
          <h2 class="t-center tc-purple">850</h2>
          <p class="t-center fw-bold tc-gray-400">Leitos</p>
        </div>
        <div class="box-header flex justify-content-around flex-direction-column">
          <font-awesome-icon class="tc-purple fs-30" :icon="['fas', 'people-group']" />
          <h2 class="t-center tc-purple">25000+</h2>
          <p class="t-center fw-bold tc-gray-400">Pacientes Satisfeitos</p>
        </div>
        <div class="box-header flex justify-content-around flex-direction-column">
          <font-awesome-icon class="tc-purple fs-30" :icon="['fas', 'user-doctor']" />
          <h2 class="t-center tc-purple">750</h2>
          <p class="t-center fw-bold tc-gray-400">Médicos e Enfermeiros</p>
        </div>
        <div class="box-header flex justify-content-around flex-direction-column">
          <font-awesome-icon class="tc-purple fs-30" :icon="['fas', 'award']" />
          <h2 class="t-center tc-purple">18</h2>
          <p class="t-center fw-bold tc-gray-400">Anos de Mercado</p>
        </div>
      </div>
      <div class="container t-margin-50">
        <div class="row flex flex-wrap">
          <div class="col-lg-6 flex flex-direction-column justify-content-center">
            <div class="box-image-about">
              <img :src="doctors" class="doctors-image" alt="" />
            </div>
          </div>
          <div class="col-lg-6 flex flex-direction-column justify-content-center">
            <div class="doctorAboutDescription">
              <h1 class="b-margin-1 tc-gray-300">Sobre Nosso Hospital</h1>
              <p class="line-h-1 b-margin-2 fw-4 tc-gray-400">
                O melhor médico é aquele que mais esperança inspira. A medicina é
                o remédio para todas as dores humanas, apenas o amor é um mal que
                não tem cura. O melhor médico é aquele que recebe os que foram
                desenganados por todos os outros. Medicina é a arte de
                compartilhar a vida.
              </p>
              <p class="t-margin-2 tc-gray-400">
                <font-awesome-icon class="tc-purple" :icon="['fas', 'circle-check']" /> Navegue em Nosso Site
              </p>
              <p class="t-margin-2 tc-gray-400">
                <font-awesome-icon class="tc-purple" :icon="['fas', 'circle-check']" /> Escolha entre vários serviços
              </p>
              <p class="t-margin-2 tc-gray-400 b-margin-2">
                <font-awesome-icon class="tc-purple" :icon="['fas', 'circle-check']" /> Feedbacks
              </p>
              <button class="btn-solid-primary t-margin-3">Agendamentos</button>
            </div>
          </div>
        </div>
      </div>
      <div class="container t-margin-50">
        <div class="servico-hospital-title x-padding-1 b-margin-4">
          <h1 class="b-margin-1 tc-gray-300">Nossos Serviços</h1>
        </div>
        <div class="row flex flex-wrap ">
          <div class="col-lg-3 x-padding-1 b-margin-2">
            <div class="box-service box-shadow-1 flex justify-content-around flex-direction-column">
              <font-awesome-icon class="tc-purple fs-30" :icon="['fas', 'user-doctor']" />
              <h2 class="t-center tc-purple">Profissionais</h2>
              <p class="t-center fw-bold tc-gray-400">
                O melhor médico é aquele que mais esperança inspira.
              </p>
            </div>
          </div>
          <div class="col-lg-3 x-padding-1 b-margin-2">
            <div class="box-service box-shadow-1 flex justify-content-around flex-direction-column">
              <font-awesome-icon class="tc-purple fs-30" :icon="['fas', 'clipboard-list']" />
              <h2 class="t-center tc-purple">Diagnóstico</h2>
              <p class="t-center fw-bold tc-gray-400">
                O melhor médico é aquele que mais esperança inspira.
              </p>
            </div>
          </div>
          <div class="col-lg-3 x-padding-1 b-margin-2">
            <div class="box-service box-shadow-1 flex justify-content-around flex-direction-column">
              <font-awesome-icon class="tc-purple fs-30" :icon="['fas', 'hospital']" />
              <h2 class="t-center tc-purple">Doenças</h2>
              <p class="t-center fw-bold tc-gray-400">
                O melhor médico é aquele que mais esperança inspira.
              </p>
            </div>
          </div>
          <div class="col-lg-3 x-padding-1 b-margin-2 ">
            <div class="box-service box-shadow-1 flex justify-content-around flex-direction-column">
              <font-awesome-icon class="tc-purple fs-30" :icon="['fas', 'tooth']" />
              <h2 class="t-center tc-purple">Odontologia</h2>
              <p class="t-center fw-bold tc-gray-400">
                O melhor médico é aquele que mais esperança inspira.
              </p>
            </div>
          </div>
          <div class="col-lg-3 x-padding-1 b-margin-2">
            <div class="box-service box-shadow-1 flex justify-content-around flex-direction-column">
              <font-awesome-icon class="tc-purple fs-30" :icon="['fas', 'heart-pulse']" />
              <h2 class="t-center tc-purple">Cardiologia</h2>
              <p class="t-center fw-bold tc-gray-400">
                O melhor médico é aquele que mais esperança inspira.
              </p>
            </div>
          </div>
          <div class="col-lg-3 x-padding-1 b-margin-2">
            <div class="box-service box-shadow-1 flex justify-content-around flex-direction-column">
              <font-awesome-icon class="tc-purple fs-30" :icon="['fas', 'tablets']" />
              <h2 class="t-center tc-purple">Farmácia</h2>
              <p class="t-center fw-bold tc-gray-400">
                O melhor médico é aquele que mais esperança inspira.
              </p>
            </div>
          </div>
          <div class="col-lg-3 x-padding-1 b-margin-2">
            <div class="box-service box-shadow-1 flex justify-content-around flex-direction-column">
              <font-awesome-icon class="tc-purple fs-30" :icon="['fas', 'dna']" />
              <h2 class="t-center tc-purple">Neurologia</h2>
              <p class="t-center fw-bold tc-gray-400">
                O melhor médico é aquele que mais esperança inspira.
              </p>
            </div>
          </div>
          <div class="col-lg-3 x-padding-1 b-margin-2">
            <div class="box-service box-shadow-1 flex justify-content-around flex-direction-column">
              <font-awesome-icon class="tc-purple fs-30" :icon="['fas', 'truck-medical']" />
              <h2 class="t-center tc-purple">Ambulatorio</h2>
              <p class="t-center fw-bold tc-gray-400">
                O melhor médico é aquele que mais esperança inspira.
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- parte de nossas especialidades , ajustes de CSS-->
      <div class="container t-margin-50">
        <div class="servico-hospital-title x-padding-1 b-margin-4">&nbsp;
          <h1 class="b-margin-1 tc-gray-300">Nossas Especialidades</h1>
        </div>
        <div class="row flex flex-wrap ">
          <div class="col-lg-3 x-padding-1 b-margin-2">
            <div class="box-service box-shadow-1 flex justify-content-around flex-direction-column">
              <font-awesome-icon class="tc-purple fs-30" :icon="['fas', 'user-doctor']" />
              <h2 class="t-center tc-purple">Médicos Certitificados</h2>
              <p class="t-center fw-bold tc-gray-400">
                O melhor médico é aquele que mais esperança inspira.
              </p>
            </div>
          </div>
          <div class="col-lg-3 x-padding-1 b-margin-2">
            <div class="box-service box-shadow-1 flex justify-content-around flex-direction-column">
              <font-awesome-icon class="tc-purple fs-30" :icon="['fas', 'clipboard-list']" />
              <h2 class="t-center tc-purple">Emergência</h2>
              <p class="t-center fw-bold tc-gray-400">
                O melhor médico é aquele que mais esperança inspira.
              </p>
            </div>
          </div>
          <div class="col-lg-5 x-padding-1 b-margin-2">
            <div class="box-service box-shadow-1 flex justify-content-around flex-direction-column">
              <font-awesome-icon class="tc-purple fs-30" :icon="['fas', 'hospital']" />
              <h2 class="t-center tc-purple">Tecnologia EAD</h2>
              <p class="t-center fw-bold tc-gray-400">
                O melhor médico é aquele que mais esperança inspira.
              </p>
            </div>
          </div>
          <div class="col-lg-5 x-padding-1 b-margin-2 ">
            <div class="box-service  flex justify-content-around flex-direction-column">
              <font-awesome-icon class="tc-purple fs-30" :icon="['fas', 'truck-medical']" />
              <h2 class="t-center tc-purple">Ambulância</h2>
              <p class="t-center fw-bold tc-gray-400">
                O melhor médico é aquele que mais esperança inspira.
              </p>
            </div>
          </div>

          <div class="col-lg-3 x-padding-1 b-margin-2">
            <div class="box-image-about"><img :src="medica" class="doctors-image" alt=""></div>
          </div>
        </div>
      </div>
    </main>
    <footer>

    </footer>
  </div>
</template>

