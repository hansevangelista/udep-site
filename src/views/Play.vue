<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'


const router = useRouter()

const token = localStorage.getItem("token")
console.log({ token })

if(!token) {
  router.push('/signup')
}

const user = ref({ name: '' })

onMounted(() => {
  main()
})

async function main() {
  console.log('main ...')

  const url = import.meta.env.VITE_SERVER + '/api/play?token=' + token

  const res = await fetch(url)
                    .then((res) => res.json())
  console.log({ res })

  user.value = res.user
}

function logout() {
  console.log('logout ...')

  localStorage.removeItem("token")
  router.push('/signup')
}

const username = ref(null)
const sending = ref(false)
const error = ref(null)

async function submit() {
  console.log('submit ...')

  if(!username.value) return error.value = 'ingrese username'


  const data = {
    id: user.value.id,
    username: username.value,
  }
  console.log({ data })

  const url = import.meta.env.VITE_SERVER + '/api/play'

  sending.value = true

  const res = await fetch(url, {
                      method: "POST",
                      body: JSON.stringify(data),
                      headers: {
                        "Content-Type": "application/json",
                      },
                    })
                    .then((res) => res.json())
  console.log({ res })

  sending.value = false

  user.value.username = username.value
}

function reset() {
  console.log('reset ...')
  error.value = false
}

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
            <li><a @click="logout">Cerrar sesión</a></li>
          </ul>
        </details>

        <RouterLink to="/">
          <img src="@/assets/logo.png" class="h-12 md:h-14 lg:h-16">
        </RouterLink>
      </div>
      <div class="navbar-center hidden md:flex">
        <ul class="menu menu-horizontal px-1" style="color: #fff; font-size: 16px; font-weight: bold;">
          <li><a>Home</a></li>
          <li><a>Premios</a></li>
          <li><a>Ranking</a></li>
          <li><a @click="logout">Cerrar sesión</a></li>
        </ul>
      </div>
      <div class="navbar-end">
        <!-- <RouterLink class="btn btn-neutral text-xl lg:text-2xl" to="/play">JUGAR</RouterLink> -->

        <button class="btn btn-neutral text-xl lg:text-2xl">{{ user.name }}</button>
      </div>
    </div>
  </div>

  <div style="background: #000; padding-top: 80px;">
    <iframe src="https://www.spatial.io/embed/UDEP-Race-665645a0311b7a214398dd5b?share=5898297976289270910" allow="camera; fullscreen; autoplay; display-capture; microphone; clipboard-write" style="margin: auto; width: 100%;"></iframe>
  </div>

  <section class="bg-white">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-md sm:text-center">
            <h2 class="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Para participar de los premios registra tu usuario de Spatial</h2>
            <p class="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl">Registra tu usuario de Spatial para poder participar formalmente de UDEP Race y la puedes encontrar aquí</p>
            <div>
                <div v-if="user.username">
                  <h2 class="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                    {{ user.username }}
                  </h2>
                </div>

                <small style="color: red;" v-if="error">{{ error }}</small>

                <div v-if="!user.username" class="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                    <div class="relative w-full">
                        <input class="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500" placeholder="spatial.io/@username" type="email" id="email" required="" v-model="username" @keyup="reset">
                    </div>
                    <div>
                        <button v-if="!sending" type="submit" class="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary border-primary sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300" @click="submit">Subscribe</button>

                        <button v-if="sending" type="submit" class="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300" disabled style="background: #ccc;">Subscribe</button>
                    </div>
                </div>
                <div v-if="!user.username" class="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer">Copia el link de tu username de spatial</div>
            </div>
        </div>
    </div>
  </section>

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
        <a>
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
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="fill-current">
            <path
              d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
          </svg>
        </a>
        <a>
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
