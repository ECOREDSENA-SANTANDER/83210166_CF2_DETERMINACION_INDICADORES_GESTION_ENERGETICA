<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Cálculo e interpretación de Indicadores de Desempeño Energético

    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        p.mb-4 Una vez comprendidos los distintos tipos de Indicadores de Desempeño Energético (IDEs) y establecida la Línea Base Energética (LBE), el siguiente paso crítico es la implementación práctica, es decir, el cálculo real de estos indicadores y, lo más relevante, su correcta aplicación. 
        .bg9.p-4.mb-lg-0.mb-4
          p.mb-1 El cálculo de un IDE consiste en una operación matemática que relaciona el consumo de energía con las variables de impacto relevantes. La precisión de este cálculo depende directamente de la calidad y disponibilidad de los datos utilizados.
      .col-lg-6.col-md-9.col-10
        img(src='@/assets/curso/tema3/1.png', alt='')


    .titulo.mb-5.mt-lg-3(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Principios generales para el cálculo

        
    .row.justify-content.align-items-stretch.mb-5
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .bg15.p-4.h-100
          .row.justify-content-center
            .col-8
              img.img-t.img-a.imt3.mb-4(src='@/assets/curso/tema3/2.svg', alt='')
            p.mb-0 #[b Identificación del IDE:] definir con claridad qué indicador se calculará (por ejemplo, kWh / unidad producida, eficiencia de una caldera).
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .bg15.p-4.h-100
          .row.justify-content-center
            .col-8
              img.img-t.img-a.imt3.mb-4(src='@/assets/curso/tema3/3.svg', alt='')
            p.mb-0 #[b Recopilación de datos:] garantizar que se disponga de todos los datos necesarios tanto para el numerador (consumo de energía) como para el denominador (variable de impacto, cuando corresponda). Ambos deben corresponder al mismo período de tiempo.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .bg15.p-4.h-100
          .row.justify-content-center
            .col-8
              img.img-t.img-a.imt3.mb-4(src='@/assets/curso/tema3/4.svg', alt='')
            p.mb-0 #[b Unidades consistentes:] asegurar la homogeneidad en las unidades de medida para evitar errores en el cálculo. En caso necesario, realizar conversiones (por ejemplo, de m³ de gas a kWh).
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .bg15.p-4.h-100
          .row.justify-content-center
            .col-8
              img.img-t.img-a.imt3.mb-4(src='@/assets/curso/tema3/5.svg', alt='')
            p.mb-0 #[b Fórmula definida:] emplear la fórmula adecuada según el tipo de IDE que se calcule.
          
     
    .titulo-linea.mb-5
      h3.mb-0.ps-2.pe-2 Ejemplos de cálculo por tipo de IDE:


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        AcordionA.activo(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-0(data-aos="fade-left")
          .row.justify-content-center.align-items.p-0(titulo="IDEs absolutos (consumo total)")
            .col-lg-11.mb-0
              p.mb-4.mx-lg-3 #[b Fórmula:] Consumo total de energía= ∑ Consumo por fuente de energía.
              p.mb-4.mx-lg-3 #[b Datos necesarios:] registros de facturas de electricidad, gas, diésel, etc., en un período específico.
              p.mb-4.mx-lg-3 #[b Ejemplo:] una fábrica consume 50.000 kWh de electricidad y 10.000 m³ de gas natural en un mes. 
              ul.lista-ul.mx-lg-3.mb-0
                li.d-flex.mb-1
                  i.fas.fa-circle
                  p.mb-0 Si 1 m³ de gas natural equivale a 10 kWh (valor aproximado para fines ilustrativos).
                li.d-flex.mb-1
                  i.fas.fa-circle
                  p.mb-0 Consumo de gas en kWh = 10.000 m3 × 10 kWh / m3 = 100.000 kWh.
                li.d-flex.mb-0
                  i.fas.fa-circle
                  p.mb-0 Consumo total de energía del mes = 50.000 kWh (electricidad) + 100.000 kWh (gas) = 150.000 kWh.
          .row.justify-content-center.align-items.p-0(titulo="IDEs relativos (intensidad energética / consumo específico)")
            .col-lg-11.mb-0
              .titulo-sexto.mb-4.mx-lg-3
                h5 Figura 1. 
                | Fórmula ecuación 1 - IDE relativo
              img.img-t.mx-lg-3.mb-4(src='@/assets/curso/tema3/7.svg', alt='Es una ecuación que hace referencia al cálculo de indicador de desempeño energético relativo y es igual al consumo total de energía sobre variable de actividad o producción.')
              p.mb-4.mx-lg-3 #[b Datos necesarios:] consumo de energía y la medida de actividad / producción para el mismo período.
              p.mb-4.mx-lg-3 #[b Ejemplo:]
              ul.lista-ul.mx-lg-3.mb-0
                li.d-flex.mb-1
                  i.fas.fa-circle
                  p.mb-0 La misma fábrica consume 150.000 kWh en un mes y produce 30.000 unidades de producto. 
                li.d-flex.mb-0
                  i.fas.fa-circle
                  p.mb-0 Intensidad energética = 150.000 kWh / 30.000 unidades = 5 kWh / unidad producida.
          .row.justify-content-center.align-items.p-0(titulo="IDEs basados en rendimiento (eficiencia de equipos / sistemas)")
            .col-lg-11.mb-0
              .titulo-sexto.mb-4.mx-lg-3
                h5 Figura 2. 
                | Fórmula ecuación 2 - IDE basado en rendimiento
              img.img-t.mx-lg-3.mb-4(src='@/assets/curso/tema3/8.svg', alt='Es una ecuación que hace referencia al cálculo de indicador de desempeño energético de rendimiento expresado en porcentaje y se calcula energía útil de salida sobre energía de entrada por cien.')
              p.mb-4.mx-lg-3 #[b Datos necesarios:] medidas de la energía que el equipo produce (útil) y la energía que consume (entrada).
              p.mb-4.mx-lg-3 #[b Ejemplo:]
              ul.lista-ul.mx-lg-3.mb-4
                li.d-flex.mb-1
                  i.fas.fa-circle
                  p.mb-0 Una caldera consume 1.000 unidades de energía de combustible y produce 850 unidades de energía en forma de vapor útil. 
                li.d-flex.mb-0
                  i.fas.fa-circle
                  p.mb-0 Eficiencia de la caldera = (850 unidades / 1.000 unidades) × 100 % = 85 %.
              .bg16.p-4.mb-0
                p.mb-0 #[b Nota:] para Coeficiente de Rendimiento (COP) en sistemas de refrigeración / calefacción, la fórmula es simplemente salida de calor / frío / entrada eléctrica. Un COP de 3.0 significa 3 unidades de frío por cada 1 unidad eléctrica.
          .row.justify-content-center.align-items.p-0(titulo="IDEs normalizados (ajustados)")
            .col-lg-11.mb-0
              p.mb-4.mx-lg-3 #[b Fórmula:] utiliza un modelo matemático (comúnmente regresión) para predecir el consumo esperado.
              p.mb-4.mx-lg-3 #[b Proceso:]
              ul.lista-ul.mx-lg-3.mb-4
                li.d-flex.mb-1
                  i.fas.fa-circle.t3
                  p.mb-0 Primero, se establece la Línea Base Energética (LBE) a través de un análisis de regresión, que define la relación entre el consumo de energía y las variables de impacto (ejemplo, temperatura, producción).
                li.d-flex.mb-0
                  i.fas.fa-circle.t3
                  p.mb-0 La LBE se expresa como una ecuación.
              p.mb-4.mx-lg-3 #[b Ejemplo:]
              ul.lista-ul.mx-lg-3.mb-4
                li.d-flex.mb-1
                  i.fas.fa-circle
                  p.mb-0 Consumo esperado=(a* Temperatura)+(b* Producción)+c
                li.d-flex.mb-0
                  i.fas.fa-circle
                  p.mb-0 Luego, el IDE normalizado se calcula comparando el consumo real con el consumo esperado por la LBE, ajustado a las condiciones actuales de las variables de impacto.
              p.mb-4.mx-lg-3 #[b Ejemplo:]
              ul.lista-ul.mx-lg-3.mb-0
                li.d-flex.mb-1
                  i.fas.fa-circle
                  p.mb-0 Un edificio tiene una LBE para la climatización de kWh / mes = (20 × GDC) + (15 × GDR) + 5.000. En un mes específico, hubo 200 GDC y 50 GDR. Donde GDC y GDR corresponden a #[em Direct Current Generator y Alternating Current Generator], respectivamente. 
                li.d-flex.mb-1
                  i.fas.fa-circle
                  p.mb-0 Consumo esperado (LBE) = (20 × 200) + (15 × 50) + 5.000 = 4.000 + 750 + 5.000 = 9.750 kWh.
                li.d-flex.mb-0
                  i.fas.fa-circle
                  p.mb-0 Desempeño normalizado = 9.000 kWh (real) vs. 9.750 kWh (esperado). Esto indica una mejora del desempeño.
      .col-lg-3
        img.d-none.d-lg-block(src='@/assets/curso/tema3/6.png', alt='')


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo-sexto.mb-4
          h5 Figura 3. 
          | Ejemplo gráfico de tendencia de mejora y/o deterioro
        .bg17.p-4.mb-2
          img.img-t.img-a(src='@/assets/curso/tema3/9.svg', alt='La gráfica representa la tendencia de consumo en kilovatio hora durante un año convencional, en este caso para el año 2016.')
        figcaption Fuente: https://www.researchgate.net/figure/Comportamiento-del-consumo-mensual-y-su-tendencia-durante-el-ano-2016_fig4_351618193
          


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12    
        TabsA.color-acento-botones
          .tarjeta.bg17.p-lg-5.p-4(titulo="Estacionalidad")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-12
                h4.mb-4 Estacionalidad
                p.mb-4 Patrones de consumo que se repiten anualmente (por ejemplo, mayor consumo en invierno por calefacción).
                .row.justify-content-center.align-items-center.mb-0
                  .col-lg-11
                    .titulo-sexto.mb-4
                      h5 Figura 4. 
                      | Ejemplo gráfico de tendencia estacional
                    img.mb-2(src='@/assets/curso/tema3/10.svg', alt='Gráfico comparativo de la demanda real y la demanda estacional de energía en marzo de 2020')
                    figcaption.mb-0 #[b Fuente:] https://www.aeqenergia.com/blog/comportamiento-del-consumo-electrico-durante-el-covid-19/ 
          .tarjeta.bg17.p-lg-5.p-4(titulo="Variabilidad")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-12
                h4.mb-4 Estacionalidad
                p.mb-4 La dispersión de los datos alrededor de la LBE.
                p.mb-4 #[b Identificación de desviaciones significativas:] buscar puntos de datos que se alejen considerablemente de la LBE. Estas desviaciones pueden indicar: 
                ul.lista-ul.mb-0
                  li.d-flex.mb-2
                    i.fas.fa-bolt
                    p.mb-0 #[b Oportunidades:] un IDE muy alto puede señalar un área de desperdicio o ineficiencia.
                  li.d-flex.mb-2
                    i.fas.fa-bolt
                    p.mb-0 #[b Problemas:] fallos de equipos, mal funcionamiento, cambios en los patrones operativos no esperados.
                  li.d-flex.mb-0
                    i.fas.fa-bolt
                    p.mb-0 #[b Éxito de medidas:] una caída abrupta tras la implementación de una acción de mejora.


    .titulo.mb-5.mt-lg-3(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Evaluación del progreso hacia los objetivos energéticos


    p.mb-5 Los IDEs son las métricas clave para saber si la organización está en camino de alcanzar sus objetivos y metas energéticas. 


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-md-6.col-9.mb-lg-0.mb-4
        img(src='@/assets/curso/tema3/11.png', alt='')
      .col-lg-9
        AcordionA.activo(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-0(data-aos="fade-left")
          .row.justify-content-center.align-items.p-0(titulo="Comparación con metas")
            .col-lg-11.mb-0
              p.mb-0.mx-lg-3 El IDE actual se compara directamente con la meta establecida (ejemplo, "reducir la intensidad energética a 4 kWh / unidad para fin de año").
          .row.justify-content-center.align-items.p-0(titulo="Análisis de la brecha")
            .col-lg-11.mb-0
              p.mb-0.mx-lg-3 Calcular la diferencia entre el IDE actual y el valor objetivo. Esto ayuda a determinar cuánto más se necesita mejorar. 
          .row.justify-content-center.align-items.p-0(titulo="Acciones correctivas / preventivas")
            .col-lg-11.mb-0
              p.mb-0.mx-lg-3 Si el progreso es insuficiente, la interpretación de los IDEs debe llevar a la identificación y aplicación de acciones correctivas o preventivas para volver al rumbo.


    .titulo.mb-5.mt-lg-3(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Detección de áreas de bajo rendimiento o potencial de mejora


    p.mb-5 La correcta interpretación de los Indicadores de Desempeño Energético (IDEs) es esencial para transformar los datos en decisiones concretas. No se trata solo de medir el consumo energético, sino de entender el contexto operativo, identificar oportunidades de mejora y actuar de forma estratégica para optimizar la eficiencia. A continuación, se presentan los principales enfoques para interpretar los IDEs:


    TabsC.color-primario.mb-5(data-aos="fade-right")
      .py-3.py-md-4.bg9.px-3(titulo="IDEs elevados (en términos de consumo)")
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-11
            .row.justify-content-center.align-items-center.p-lg-4.p-3
              .col-lg-4.col-md-8.col-10.order-lg-1.order-md-2.order-2
                img.mb-0(src='@/assets/curso/tema3/12.svg', alt='')
              .col-lg-8.order-lg-2.order-md-1.order-1
                p.mb-4 Si un IDE relativo (ejemplo, kWh / unidad) es consistentemente alto en un proceso o equipo, esto indica que se está gastando demasiada energía para el resultado obtenido. Esto apunta a: 
                ul.lista-ul.mb-0
                  li.d-flex.mb-2
                    i.fas.fa-bolt
                    p.mb-0 #[b Ineficiencias operativas:] malas prácticas, ajustes incorrectos, operación en condiciones no óptimas.
                  li.d-flex.mb-2
                    i.fas.fa-bolt
                    p.mb-0 #[b Tecnología obsoleta:] equipos antiguos con baja eficiencia.
                  li.d-flex.mb-4.mb-lg-0
                    i.fas.fa-bolt
                    p.mb-0 #[b Falta de mantenimiento:] equipos sucios, desgastados, con fugas.
      .py-3.py-md-4.bg9.px-3(titulo="IDEs bajos (en términos de eficiencia / rendimiento)")
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-11
            .row.justify-content-center.align-items-center.p-lg-4.p-3
              .col-lg-4.col-md-8.col-10.order-lg-1.order-md-2.order-2
                img.mb-0(src='@/assets/curso/tema3/13.svg', alt='')
              .col-lg-8.order-lg-2.order-md-1.order-1
                p.mb-4 Si un IDE basado en rendimiento (ejemplo, eficiencia de la caldera) es bajo, sugiere que el equipo no está convirtiendo la energía de entrada en energía útil de manera efectiva, lo que se traduce en pérdidas.
                ul.lista-ul.mb-0
                  li.d-flex.mb-2
                    i.fas.fa-bolt
                    p.mb-0 #[b Comparación interna:] comparar el IDE de un proceso o equipo con el de otro similar dentro de la misma organización puede revelar cuál es el "mejor en su clase" y dónde existen oportunidades de replicar el éxito.
                  li.d-flex.mb-4.mb-lg-0
                    i.fas.fa-bolt
                    p.mb-0 #[b Análisis de raíz causa:] cuando un IDE muestra un desempeño deficiente o una desviación, la interpretación debe extenderse a un análisis de raíz causa para entender el "por qué" detrás del número. Esto puede implicar revisar registros de operación, programas de mantenimiento, etc.


    p.mb-5 La interpretación efectiva de los IDEs es el puente entre los datos y las acciones. Permite a las organizaciones no solo medir su desempeño, sino también entenderlo, aprender de él y, lo más importante, mejorarlo de manera continua y sistemática. Este proceso es el corazón de la norma ISO 50001 y de una gestión energética exitosa.


    .tarjeta.color-primario.des.p-4.mb-0(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img.img-a.img-t.mx-lg-4(src="@/assets/curso/tema1/video.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0.mx-lg-4
              h4.mb-3 Cálculo Línea Base Consumo Energético, para complementar el tema abordado
              p.mb-0 Se invita a explorar el siguiente video.
            .col-sm-auto.pe-lg-5
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=M6eZkijypBo" target="_blank")
                span Ir al video
                i.fas.fa-file-video

</template>

<script>
export default {
  name: 'Tema3',
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
