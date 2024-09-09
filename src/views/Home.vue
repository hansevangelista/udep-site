<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>

  <div class="ur-header-wrapper">
    <div class="navbar ur-header">
      <div class="navbar-start">
        <details class="dropdown">
          <summary tabindex="0" role="button" class="btn btn-ghost md:hidden ur-burguer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </summary>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><a>Home</a></li>
            <li><a>Premios</a></li>
            <li><a>Ranking</a></li>
          </ul>
        </details>

        <img src="@/assets/logo.png" class="h-12 md:h-14 lg:h-16">
      </div>
      <div class="navbar-center hidden md:flex">
        <ul class="menu menu-horizontal px-1" style="color: #fff; font-size: 16px; font-weight: bold;">
          <li><a>Home</a></li>
          <li><a>Premios</a></li>
          <li><a>Ranking</a></li>
        </ul>
      </div>
      <div class="navbar-end">
        <RouterLink class="btn btn-primary text-xl lg:text-2xl" to="/play">JUGAR</RouterLink>
      </div>
    </div>
  </div>

  <div class="hero bg-base-200 min-h-screen ur-hero" style="place-items: normal;">
    <div class="hero-content flex-col md:flex-row ur-hero-inner" style="justify-content: flex-start;">
      <div style="max-width: 746px; flex: 1;">
        <img src="@/assets/computer.png" class="w-4 md:w-6">
        <p class="py-4 text-lg md:text-xl" style="color: #F3F4F6;">
          ¡Compite en nuestro nuevo juego!
        </p>
        <img src="@/assets/logo-big.png" class="w-40 py-2 mx-auto md:mx-0 md:w-60 lg:w-80">
        <p class="py-6 text-base md:text-lg" style="color: #F3F4F6;">
          Conoce la oferta académica de la Universidad de Piura a través de una emocionante carrera de obstáculos.
          Participa de una experiencia nueva y gana increibles premios.
        </p>
        <RouterLink class="btn btn-primary text-xl mt-2 lg:text-2xl" to="/play">Jugar Ahora</RouterLink>
      </div>
      <div style="flex: 1;">
        <!-- <img src="@/assets/persons.png" class="hidden md:block" style="width: 100%;" /> -->
      </div>
    </div>
  </div>

  <div class="hero my-20 md:my-32 ur-hero2-wrapper">
    <div class="hero-content flex-col lg:flex-row-reverse ur-hero2 md:py-8 lg:px-20">
      <div style="flex: 1;">
        <img
          src="@/assets/persons2.png" class="" style="width: 100%;" />
      </div>
      <div style="flex: 1;">
        <h1 class="text-5xl font-bold ur-hero2-title" style="color: #F3F4F6;">PARTICIPA POR INCREIBLES PREMIOS</h1>
        <p class="py-6" style="color: #F3F4F6;">
          Juega UDEP Race y gana asesorías vocacionales personalizadas(*), merchandising oficinal de UDEP ¡Y mucho más!
        </p>
        <small style="color: #F3F4F6;">
          * Comienza tu aventura universitaria de la mano de especialistas. Serán 50 los ganadores.
        </small> <br><br>
        <RouterLink class="btn btn-primary text-xl lg:text-2xl" to="/play">Jugar</RouterLink>
      </div>
    </div>
  </div>

  <div class="hero bg-base-200">
    <div class="hero-content flex-col lg:flex-row" style="max-width: 100%; padding: 0;">
      <div style="flex: 1;">
        <div style="max-width: 600px; margin-left: 0; float: right; padding: 20px;">
          <h1 class="text-5xl font-bold ur-hero3-title">juega solo o con amigos</h1>
          <p class="py-6">
            Compite contra tu propio tiempo, o con amigos para hacerlo más divertido
          </p>
          <RouterLink class="btn btn-primary text-xl lg:text-2xl" to="/play">Jugar Ahora</RouterLink>
        </div>
      </div>
      <div style="background: linear-gradient(180deg, #3584E5 0%, #1D497F 100%); flex: 1;">
        <img
          src="@/assets/persons3.png"
          class="pt-20" />
      </div>
    </div>
  </div>

  <footer class="footer bg-neutral text-neutral-content p-10 ur-footer">
    <aside>
      <img src="@/assets/logo.png" class="h-12 md:h-14 lg:h-16">
      <p>
        Proyecto por la universidad de Piura
      </p>
    </aside>
    <nav>
      <h6 class="footer-title">Social</h6>
      <div class="grid grid-flow-col gap-4">
        <a href="https://www.udep.edu.pe/admision-piura/">
          <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="fill-current">
            <path d="M5.84577 20C4.91798 20.0015 4.01065 19.7024 3.23881 19.1405C2.46696 18.5787 1.86535 17.7793 1.51024 16.8439C1.15513 15.9084 1.0625 14.879 1.2441 13.886C1.4257 12.893 1.87335 11.9813 2.53031 11.2663L6.26045 7.1964C7.14045 6.23817 8.3328 5.70002 9.57591 5.70002C10.819 5.70002 12.0114 6.23817 12.8914 7.1964C13.0685 7.40251 13.1651 7.67572 13.1609 7.95823C13.1567 8.24074 13.052 8.51038 12.8688 8.7101C12.6857 8.90983 12.4386 9.02396 12.1797 9.02834C11.9208 9.03273 11.6706 8.92703 11.4818 8.73361C10.9758 8.18301 10.2904 7.87383 9.57591 7.87383C8.86137 7.87383 8.17597 8.18301 7.66997 8.73361L3.93983 12.8046C3.43434 13.3562 3.15036 14.1045 3.15036 14.8846C3.15036 15.2709 3.22008 15.6535 3.35553 16.0104C3.49099 16.3673 3.68953 16.6916 3.93983 16.9647C4.19012 17.2379 4.48726 17.4546 4.81428 17.6024C5.1413 17.7502 5.4918 17.8263 5.84577 17.8263C6.56063 17.8263 7.24622 17.5164 7.75171 16.9647L8.23517 16.4371C8.32805 16.3361 8.43824 16.256 8.55947 16.2015C8.6807 16.147 8.81057 16.119 8.94169 16.1193C9.07281 16.1195 9.2026 16.148 9.32365 16.203C9.44469 16.258 9.55463 16.3384 9.64718 16.4398C9.73973 16.5412 9.81308 16.6614 9.86304 16.7937C9.91301 16.926 9.9386 17.0678 9.93837 17.2109C9.93814 17.354 9.91209 17.4956 9.8617 17.6277C9.81131 17.7598 9.73757 17.8798 9.64469 17.9808L9.16123 18.5085C8.72583 18.9831 8.20881 19.3592 7.63984 19.6152C7.07087 19.8712 6.46117 20.0019 5.84577 20Z"/>
            <path d="M11.0722 14.3015C10.4564 14.3026 9.84656 14.1709 9.2776 13.914C8.70863 13.6571 8.19177 13.2801 7.75669 12.8046C7.57511 12.5994 7.47464 12.3246 7.47691 12.0393C7.47918 11.7541 7.58401 11.4812 7.76883 11.2795C7.95365 11.0778 8.20367 10.9634 8.46504 10.9609C8.7264 10.9584 8.97821 11.0681 9.16621 11.2663C9.67969 11.8012 10.3623 12.0997 11.0722 12.0997C11.782 12.0997 12.4646 11.8012 12.9781 11.2663L16.7072 7.1964C16.958 6.92353 17.157 6.59934 17.2927 6.2424C17.4285 5.88546 17.4983 5.50279 17.4983 5.11632C17.4983 4.72986 17.4285 4.34719 17.2927 3.99025C17.157 3.63331 16.958 3.30912 16.7072 3.03625C16.194 2.50111 15.5116 2.20249 14.8018 2.20249C14.092 2.20249 13.4095 2.50111 12.8964 3.03625L12.1527 3.84783C11.9657 4.05182 11.712 4.16636 11.4476 4.16626C11.1832 4.16616 10.9296 4.05142 10.7427 3.84728C10.5558 3.64315 10.4508 3.36634 10.4509 3.07775C10.451 2.78916 10.5562 2.51243 10.7432 2.30844L11.4868 1.49686C12.3661 0.537926 13.5585 -0.000509703 14.8016 3.62062e-07C16.0446 0.000510427 17.2366 0.539924 18.1153 1.49958C18.9939 2.45923 19.4873 3.76051 19.4868 5.11716C19.4863 6.4738 18.9921 7.77468 18.1128 8.73361L14.3826 12.8035C13.9483 13.2786 13.4322 13.6555 12.8642 13.9125C12.2961 14.1696 11.6871 14.3018 11.0722 14.3015Z"/>
          </svg>
        </a>
        <a href="https://www.tiktok.com/@udepconecta?_t=8oqHg4zgusH&_r=1">
          <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="fill-current">
            <path id="Vector" d="M14.5472 0H11.1766V13.6232C11.1766 15.2464 9.88028 16.5797 8.26701 16.5797C6.65373 16.5797 5.35736 15.2464 5.35736 13.6232C5.35736 12.029 6.62493 10.7246 8.1806 10.6667V7.24639C4.75238 7.30433 1.98679 10.1159 1.98679 13.6232C1.98679 17.1594 4.81 20 8.29583 20C11.7816 20 14.6048 17.1304 14.6048 13.6232V6.63767C15.8724 7.56522 17.428 8.11594 19.0701 8.14495V4.72464C16.535 4.63768 14.5472 2.55072 14.5472 0Z"/>
          </svg>
        </a>
        <a href="https://www.tiktok.com/@udepconecta?_t=8oqHg4zgusH&_r=1">
          <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="fill-current">
            <path id="Vector" d="M10.3201 1.80078C12.992 1.80078 13.3084 1.8125 14.3592 1.85937C15.3358 1.90234 15.8631 2.06641 16.2147 2.20313C16.6795 2.38281 17.0154 2.60156 17.3631 2.94922C17.7147 3.30078 17.9295 3.63281 18.1092 4.09766C18.2459 4.44922 18.41 4.98047 18.4529 5.95312C18.4998 7.00781 18.5115 7.32422 18.5115 9.99219C18.5115 12.6641 18.4998 12.9805 18.4529 14.0313C18.41 15.0078 18.2459 15.5352 18.1092 15.8867C17.9295 16.3516 17.7108 16.6875 17.3631 17.0352C17.0115 17.3867 16.6795 17.6016 16.2147 17.7813C15.8631 17.918 15.3319 18.082 14.3592 18.125C13.3045 18.1719 12.9881 18.1836 10.3201 18.1836C7.64826 18.1836 7.33185 18.1719 6.28107 18.125C5.30451 18.082 4.77716 17.918 4.4256 17.7813C3.96075 17.6016 3.62482 17.3828 3.27716 17.0352C2.9256 16.6836 2.71075 16.3516 2.53107 15.8867C2.39435 15.5352 2.23029 15.0039 2.18732 14.0313C2.14044 12.9766 2.12872 12.6602 2.12872 9.99219C2.12872 7.32031 2.14044 7.00391 2.18732 5.95312C2.23029 4.97656 2.39435 4.44922 2.53107 4.09766C2.71075 3.63281 2.9295 3.29688 3.27716 2.94922C3.62872 2.59766 3.96075 2.38281 4.4256 2.20313C4.77716 2.06641 5.30841 1.90234 6.28107 1.85937C7.33185 1.8125 7.64826 1.80078 10.3201 1.80078ZM10.3201 0C7.60529 0 7.26544 0.0117187 6.19904 0.0585938C5.13654 0.105469 4.40607 0.277344 3.77325 0.523438C3.1131 0.78125 2.5545 1.12109 1.99982 1.67969C1.44122 2.23438 1.10138 2.79297 0.843567 3.44922C0.597473 4.08594 0.425598 4.8125 0.378723 5.875C0.331848 6.94531 0.320129 7.28516 0.320129 10C0.320129 12.7148 0.331848 13.0547 0.378723 14.1211C0.425598 15.1836 0.597473 15.9141 0.843567 16.5469C1.10138 17.207 1.44122 17.7656 1.99982 18.3203C2.5545 18.875 3.1131 19.2188 3.76935 19.4727C4.40607 19.7188 5.13263 19.8906 6.19513 19.9375C7.26154 19.9844 7.60138 19.9961 10.3162 19.9961C13.0311 19.9961 13.3709 19.9844 14.4373 19.9375C15.4998 19.8906 16.2303 19.7188 16.8631 19.4727C17.5194 19.2188 18.0779 18.875 18.6326 18.3203C19.1873 17.7656 19.5311 17.207 19.785 16.5508C20.0311 15.9141 20.2029 15.1875 20.2498 14.125C20.2967 13.0586 20.3084 12.7188 20.3084 10.0039C20.3084 7.28906 20.2967 6.94922 20.2498 5.88281C20.2029 4.82031 20.0311 4.08984 19.785 3.45703C19.5389 2.79297 19.199 2.23438 18.6404 1.67969C18.0858 1.125 17.5272 0.78125 16.8709 0.527344C16.2342 0.28125 15.5076 0.109375 14.4451 0.0625C13.3748 0.0117188 13.035 0 10.3201 0Z"/>
            <path id="Vector_2" d="M10.3201 4.86328C7.48419 4.86328 5.18341 7.16406 5.18341 10C5.18341 12.8359 7.48419 15.1367 10.3201 15.1367C13.1561 15.1367 15.4568 12.8359 15.4568 10C15.4568 7.16406 13.1561 4.86328 10.3201 4.86328ZM10.3201 13.332C8.48029 13.332 6.9881 11.8398 6.9881 10C6.9881 8.16016 8.48029 6.66797 10.3201 6.66797C12.16 6.66797 13.6522 8.16016 13.6522 10C13.6522 11.8398 12.16 13.332 10.3201 13.332Z"/>
            <path id="Vector_3" d="M16.8592 4.66013C16.8592 5.32419 16.3201 5.85935 15.66 5.85935C14.9959 5.85935 14.4608 5.32028 14.4608 4.66013C14.4608 3.99606 14.9998 3.46091 15.66 3.46091C16.3201 3.46091 16.8592 3.99997 16.8592 4.66013Z"/>
        </svg>
        </a>
        <a href="https://x.com/UdepConecta">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="fill-current">
            <path
              d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
          </svg>
        </a>
        <!-- <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="fill-current">
            <path
              d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
          </svg>
        </a> -->
        <a href="https://www.facebook.com/udepconecta">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="fill-current">
            <path
              d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
          </svg>
        </a>
      </div>
    </nav>
  </footer>

</template>
