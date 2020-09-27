<template>
  <div>
    <app-header />
    <Nuxt />
    <app-footer></app-footer>
  </div>
</template>

<script>
import appHeader from "../components/appheader";
import appFooter from "../components/appfooter";

export default {
  components: {
    'app-header': appHeader,
    'app-footer': appFooter
  }
}
</script>
<style>

body {
  font-family: 'Montserrat', sans-serif;
}

.coreContent h2 {
  text-align: center;
  margin: 20px 0;
  font-size: 1.5em;
  font-weight: bold;
  padding: 10px; 
}

.coreContent h2:after {
  content: '';
  display: block;
  margin: 0 auto;
  width: 10%;
  padding-top: 20px;
  border-bottom: 2px solid #cbb26a;
}

.coreContent h3 {
  text-align: center;
  margin: 20px 0;
  font-size: 1.1em;
  font-weight: bold;
  padding: 10px; 
}

.coreContent p {
  padding: 0.5em;
  margin: 0.5em 0;
  font-size: 1em;
  line-height: 160%;
}

.coreContent ul li {
  list-style: outside;
  padding:0.5em;
  font-size: 1em;
  letter-spacing: 0.1em;
}

.coreContent ul {
  margin-left: 2.0em;
  padding: 0.5em;
}

.coreContent ol li {
  list-style: decimal;
  padding:0.5em;
}

.coreContent ol {
  margin-left: 2.0em;
  padding: 0.5em;
}

.coreContent figure {
  margin: 1em 0;
}

.coreContent blockquote {
  margin: 1em auto;
  padding: 0.5em;
  border-left: solid 4px coral;
  font-weight: bold;
  font-size: 1.2em;
}

@media screen and (min-width: 768px){
  .coreContent p, .coreContent ul li {
    font-size: 1.2em;
  }
  .coreContent h2 {
    font-size: 2em;
    
  }
  .coreContent h3 {
    font-size: 1.5em;
    
  }
}

</style>
