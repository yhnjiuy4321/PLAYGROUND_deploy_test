import App from './App.vue' // Import the App.vue file
import { createApp } from 'vue' // Import createApp function
import carousel from './components/carousel.vue'
import medals from './components/medals.vue'
import paris_footer from './components/footer.vue'


const app = createApp(App)// Create a new Vue app instance

app.component('carousel', carousel);
app.component('medals', medals);
app.component('paris_footer', paris_footer);

app.mount('#app')