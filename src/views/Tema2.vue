<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Establecimiento de Líneas Base Energéticas (LBE) y variables de seguimiento
    
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        p.mb-4 Una vez comprendidos los diversos tipos de Indicadores de Desempeño Energético (IDEs) y su propósito, el siguiente paso fundamental en la gestión energética es establecer un punto de referencia sólido contra el cual medir el progreso. En este contexto surge la Línea Base Energética (LBE), una herramienta indispensable para evaluar la mejora continua y justificar las inversiones en eficiencia. Asimismo, se definen las variables de seguimiento necesarias para el cálculo y ajuste de los IDEs
        .bg9.p-4
          p.mb-0.mx-lg-3 #[b Definición de LBE:] la Línea Base Energética (LBE) es un punto de referencia cuantitativo que refleja el consumo o desempeño energético de una organización, proceso, equipo o instalación durante un período específico y bajo condiciones definidas. Puede entenderse como la “fotografía” del consumo energético previo a la implementación o evaluación de acciones de mejora. La norma ISO 50001 define la LBE como “una referencia cuantitativa que proporciona una base para comparar el desempeño energético”.
      .col-lg-6
        img(src='@/assets/curso/tema2/1.png', alt='')


    .titulo.mb-5.mt-lg-3(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Propósito fundamental de la LBE


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3
        img(src='@/assets/curso/tema2/2.png', alt='')
      .col-lg-9
        AcordionA.activo(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-0(data-aos="fade-left")
          .row.justify-content-center.align-items.p-0(titulo="Cuantificar la mejora")
            .col-lg-11.mb-0
              p.mb-0.mx-lg-3 Permite determinar si las iniciativas de eficiencia energética alcanzan los ahorros esperados. Sin una LBE, resulta imposible evaluar el progreso real.
          .row.justify-content-center.align-items.p-0(titulo="Evaluar la efectividad")
            .col-lg-11.mb-0
             p.mb-0.mx-lg-3 Ofrece una métrica clara para verificar la eficacia de las medidas operacionales, los cambios de comportamiento o las inversiones tecnológicas.
          .row.justify-content-center.align-items.p-0(titulo="Servir como referencia continua")
            .col-lg-11.mb-0
             p.mb-0.mx-lg-3 Actúa como estándar frente al cual se compara el desempeño energético actual y futuro, incluso tras la implementación de mejoras.
          .row.justify-content-center.align-items.p-0(titulo="Apoyar la toma de decisiones")
            .col-lg-11.mb-0
             p.mb-0.mx-lg-3 En combinación con los IDEs, aporta la base para justificar inversiones en proyectos de eficiencia energética, al demostrar su retorno potencial.
          .row.justify-content-center.align-items.p-0(titulo="Demostrar conformidad (ISO 50001)")
            .col-lg-11.mb-0
             p.mb-0.mx-lg-3 La norma exige el establecimiento de una LBE como requisito para evidenciar la mejora continua y obtener certificación.


    separador
    #t_2_1.titulo-segundo.mb-5
      h2 2.1 Metodologías para el cálculo de la LBE










</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
