<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Identificación y clasificación de Indicadores de Gestión Energética (IDEs)
      

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        p.mb-4 En el contexto actual, donde la eficiencia y la sostenibilidad constituyen imperativos estratégicos, la gestión energética adquiere un papel crucial en las organizaciones. Dentro de este marco, los Indicadores de Desempeño Energético (IDEs) se consolidan como herramientas analíticas esenciales.
        .bg1.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-5.col-md-8(data-aos="fade-right")
              .bg2.p-2
                img.img-a.img-t(src='@/assets/curso/tema1/2.svg', alt='')
            .col-lg-7.p-4(data-aos="fade-left")
              p.mb-0.mx-lg-0.mx-3 Un IDE es una medida cuantificable que proporciona información sobre el desempeño energético de una organización, un sistema, un equipo o un proceso específico. Su valor radica en la capacidad de transformar el complejo uso de la energía en datos claros y comprensibles, permitiendo evaluar la eficiencia, identificar oportunidades de mejora y monitorear el avance hacia los objetivos energéticos.
        p.mb-0 Más que un simple dato de consumo, un IDE constituye una métrica diseñada para relacionar el uso de energía con factores relevantes de la actividad organizacional. Esta relación puede ser absoluta (consumo total), relativa (intensidad energética por unidad de producción o servicio) o enfocada en la eficiencia de la conversión de energía (rendimiento de equipos y sistemas).
      .col-lg-3
        img.d-none.d-lg-block(src='@/assets/curso/tema1/1.png', alt='')

    
    p.mb-5 El propósito de implementar y monitorear IDEs en un sistema de gestión energética es múltiple:


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        LineaTiempoD.color-secundario.activo
          .row.justify-content-center.align-items-center.mb-0(numero="1" titulo="Medición objetiva del desempeño actual")
            .col-lg-12
              p.mb-0 Al cuantificar el consumo y establecer una base de conocimiento sobre su uso.
          .row.justify-content-center.align-items-center.mb-0(numero="2" titulo="Monitoreo del progreso y evaluación de la efectividad")
            .col-lg-12
              p.mb-0 Verificando el impacto de las acciones de mejora y ajustando estrategias.
          .row.justify-content-center.align-items-center.mb-0(numero="3" titulo="Definición de objetivos y metas energéticas realistas")
            .col-lg-12
              p.mb-0 Sustentadas en datos medibles y verificables.
          .row.justify-content-center.align-items-center.mb-0(numero="4" titulo="Facilitación de la comparación y el <em>benchmarking</em>")
            .col-lg-12
              p.mb-0 Tanto interno como externo, para evaluar niveles de eficiencia.
          .row.justify-content-center.align-items-center.mb-0(numero="5" titulo="Identificación de oportunidades de mejora y optimización")
            .col-lg-12
              p.mb-0 Destacando procesos o equipos con bajo rendimiento.
          .row.justify-content-center.align-items-center.mb-0(numero="6" titulo="Comunicación transparente y responsable del desempeño")
            .col-lg-12
              p.mb-0 Fortaleciendo la confianza de las partes interesadas.
          .row.justify-content-center.align-items-center.mb-0(numero="7" titulo="Soporte para la toma de decisiones informadas")
            .col-lg-12
              p.mb-0 Orientadas a inversiones y políticas de gestión energética.
          .row.justify-content-center.align-items-center.mb-0(numero="8" titulo="Cumplimiento con la norma ISO 50001")
            .col-lg-12
              p.mb-0 Donde los IDEs son requisito fundamental para evidenciar la mejora continua.
      .col-lg-6
        img.d-none.d-lg-block(src='@/assets/curso/tema1/3.png', alt='', data-aos="fade-right")
    
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-md-2.col-5
        img.mb-lg-0.mb-md-0.mb-4(src='@/assets/curso/tema1/4.svg', alt='', data-aos="fade-right")
      .col-lg-11.col-md-10
        p.mb-0 Los Indicadores de Desempeño Energético representan herramientas estratégicas que permiten comprender, gestionar y optimizar el uso de la energía. Su aplicación impulsa la eficiencia operativa, reduce costos, minimiza el impacto ambiental y respalda el cumplimiento de estándares internacionales como la ISO 50001.
    
    
    .titulo.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Identificación de tipos de IDEs según variables de consumo
    
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .bloque-texto-g.color-secundario.p-4.p-lg-5.p-md-4.mb-0(data-aos="fade-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/5.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-4.p-md-4
            p.mb-0 La evaluación del desempeño energético no puede basarse en una única métrica universal. La diversidad de operaciones y objetivos dentro de las organizaciones exige la utilización de distintos Indicadores de Desempeño Energético (IDEs), capaces de reflejar múltiples dimensiones del uso y la eficiencia de la energía. Comprender los diferentes tipos de IDEs permite seleccionar aquellos que mejor se ajusten a las necesidades específicas y que proporcionen la información más relevante para la toma de decisiones y el seguimiento del progreso.
    

    .titulo-linea.mb-5
      h3.mb-0.ps-2.pe-2 A. IDEs absolutos (consumo total por fuente)

    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p.mb-4 Los IDEs absolutos cuantifican la cantidad total de energía consumida por una entidad definida (organización, planta, departamento, proceso o equipo) durante un periodo determinado. Se expresan en unidades de energía como kilovatios - hora (kWh), megavatios - hora (MWh), gigajulios (GJ), British Thermal Units (BTU), termias, entre otras.
        .bg3.p-4.mb-0
          h4.mb-4.mt-lg-3 ¿Cómo funcionan? 
          p.mb-lg-3.mb-0 Estos indicadores son los más sencillos de medir, pues suelen obtenerse directamente de las facturas de servicios públicos o de los contadores generales. Ofrecen una visión global del volumen total de energía utilizada, lo que resulta útil para el control presupuestal y la identificación de tendencias de consumo en el tiempo.
      .col-lg-5
        img.d-none.d-lg-block(src='@/assets/curso/tema1/6.png', alt='', data-aos="fade-right")
      
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-md-2.col-5
        img.mb-lg-0.mb-md-0.mb-4(src='@/assets/curso/tema1/7.svg', alt='', data-aos="fade-right")
      .col-lg-11.col-md-10
        p.mb-0 #[b Limitaciones:] su principal restricción es que no relacionan el consumo energético con el nivel de actividad, producción u otros factores que inciden en el uso de la energía. Así, un incremento en el consumo absoluto puede deberse tanto a un aumento en la producción (lo cual no necesariamente implica ineficiencia) como a un uso ineficiente. De igual forma, una reducción puede estar asociada a mejoras en la eficiencia o a una disminución de la actividad.
    
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-md-9.col-10
        img.mb-lg-0.mb-5(src='@/assets/curso/tema1/8.svg', alt='', data-aos="fade-right")
      .col-lg-8
        h5.mb-4 Aplicaciones comunes: 
        ul.lista-ul
          li.d-flex.mb-2
            i.fas.fa-bolt
            p.mb-0 Seguimiento del gasto total en energía.
          li.d-flex.mb-2
            i.fas.fa-bolt
            p.mb-0 Comparación del consumo total en distintos periodos (por ejemplo, año a año o mes a mes).
          li.d-flex.mb-2
            i.fas.fa-bolt
            p.mb-0 Establecimiento de metas de reducción del consumo total (por ejemplo: disminuir el consumo eléctrico en un 5 %).
          li.d-flex.mb-2
            i.fas.fa-bolt
            p.mb-0 Reportes generales de consumo energético a la alta dirección o a partes interesadas externas.
    
    
    h5.mb-5 Ejemplos: 
    
    
    .row.justify-content-center.align-items-stretch.mb-4.mb-lg-5
      .col-lg-5.col-md-6.mb-lg-0.mb-4
        .bg4.p-3.h-100
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-2
              img.img-t.img-a.mb-lg-0.mb-4(src='@/assets/curso/tema1/9.svg', alt='', data-aos="fade-right")
            .col-lg-10
              p.mb-0 El consumo total de electricidad de la fábrica en el último año fue de 12.000 MWh.
      .col-lg-5.col-md-6.mb-4
        .bg4.p-3.h-100
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-2
              img.img-t.img-a.mb-lg-0.mb-4(src='@/assets/curso/tema1/10.svg', alt='', data-aos="fade-right")
            .col-lg-10
              p.mb-0 El consumo mensual de gas natural de la caldera central es de 5.000 m³.
    
    
    .titulo-linea.mb-5
      h3.mb-0.ps-2.pe-2 B. IDEs relativos (intensidad energética por unidad de producción, servicio, área, etc.)
    
    
    p.mb-5 Estos IDEs vinculan el consumo de energía con una métrica cuantificable de la actividad, la producción o el servicio proporcionado. Esto permite evaluar la eficiencia con la que se usa la energía para lograr un determinado resultado.
    
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .bg3.p-4.mb-lg-0.mb-4
          h4.mb-4.mt-lg-2 ¿Cómo funcionan? 
          p.mb-lg-2.mb-0 Los IDEs relativos son mucho más informativos para evaluar el desempeño energético que los absolutos, ya que toman en cuenta el "trabajo realizado" o el #[em "output"] generado con la energía consumida. Una disminución en la intensidad energética o el consumo específico generalmente señala una mejora en la eficiencia. La clave para su efectividad radica en la selección de una métrica de actividad o producción que tenga una correlación directa y significativa con el consumo de energía.
      .col-lg-5.col-md-7.col-10
        img(src='@/assets/curso/tema1/11.png', alt='', data-aos="fade-right")
    
    
    h4.mb-5 Subcategorías principales: 

    
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.col-md-6.pe-lg-0.pe-md-0.mb-lg-0.mb-4
        .bg5.p-lg-5.p-4.h-100
          .row.justify-content-center.align-items-center.mb-4
            .col-lg-3
              img.img-t.img-a.mb-lg-0.mb-4(src='@/assets/curso/tema1/12.svg', alt='', data-aos="fade-right")
            .col-lg-9
              h3.mb-0 Intensidad energética
          p.mb-4 Expresa la cantidad de energía consumida por unidad de salida o actividad de una entidad. La unidad en el denominador puede ser diversa y aplicable a distintos sectores. 
          ul.lista-ul.mb-0
            li.d-flex.mb-0
              i.fas.fa-bolt
              p.mb-0 #[b Ejemplos:] kilovatio - hora por tonelada de producto fabricado (kWh / ton), BTU por pie cuadrado de espacio de oficina (BTU / ft²), litros de combustible por kilómetro recorrido (L / km), kilovatio - hora por empleado a tiempo completo (kWh / FTE).
      .col-lg-6.col-md-6.ps-lg-0.ps-md-0.mb-lg-0.mb-4
        .bg6.p-lg-5.p-4.h-100
          .row.justify-content-center.align-items-center.mb-4
            .col-lg-3
              img.img-t.img-a.mb-lg-0.mb-4(src='@/assets/curso/tema1/12.svg', alt='', data-aos="fade-right")
            .col-lg-9
              h3.mb-0 Consumo específico
          p.mb-4 Se enfoca en la cantidad de energía requerida para producir una unidad específica y bien definida de producto o servicio. A menudo se usa para procesos muy particulares. 
          ul.lista-ul.mb-0
            li.d-flex.mb-0
              i.fas.fa-bolt
              p.mb-0 #[b Ejemplos:] kilogramos de vapor por kilogramo de producto calentado (kg vapor / kg producto), metros cúbicos de gas natural por unidad de vidrio fabricado (m³ / unidad), kilovatio - hora por unidad ensamblada.


    h4.mb-5 Aplicaciones comunes: 
    

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-lg-0.mb-4
        ol.lista-ol--cuadro.lista-ol--separador
          li.d-flex
            .lista-ol--cuadro__vineta
              span.text-black 1
            p.mb-0 Evaluación de la eficiencia energética de procesos productivos o de servicio.
          li.d-flex
            .lista-ol--cuadro__vineta
              span.text-black 2
            p.mb-0 Comparación del desempeño energético entre diferentes instalaciones o líneas de producción que generan el mismo tipo de bien o servicio.
          li.d-flex 
            .lista-ol--cuadro__vineta
              span.text-black 3
            p.mb-0 Seguimiento de la mejora de la eficiencia a lo largo del tiempo, ajustada por variaciones en la producción o actividad.
          li.d-flex 
            .lista-ol--cuadro__vineta
              span.text-black 4
            p.mb-0 Establecimiento de objetivos de eficiencia energética por unidad de producción o servicio.
      .col-lg-3.col-md-6.col-10
        img.mb-lg-0.mb-4(src='@/assets/curso/tema1/13.svg', alt='', data-aos="fade-right")
      .col-lg-4
        .bg7.p-lg-5.p-4
          h5.mb-4 Ejemplos específicos: 
          ul.lista-ul.mb-0
            li.d-flex.mb-3
              i.fas.fa-bolt
              p.mb-0 La intensidad energética correspondiente a la línea de producción de botellas plásticas es de 0.8 kWh por botella.
            li.d-flex.mb-0
              i.fas.fa-bolt
              p.mb-0 El consumo específico de gas para secado es de 0.5 m³ por kg de material procesado.

    
    .titulo-linea.mb-5
      h3.mb-0.ps-2.pe-2 C. IDEs de eficiencia (rendimiento de equipos, sistemas y procesos)


    p.mb-5 Estos IDEs miden la eficiencia con la que un equipo o sistema específico transforma la energía de entrada en energía útil de salida. Representan la relación entre el beneficio energético obtenido y la energía total suministrada.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .bg3.p-4.mb-0
          h4.mb-4.mt-lg-3 ¿Cómo funcionan? 
          p.mb-lg-4.mb-0 Estos indicadores se centran en la eficiencia intrínseca de la maquinaria y de los sistemas de infraestructura. Un rendimiento más alto significa que una mayor proporción de la energía suministrada se convierte en trabajo útil o en el resultado deseado, mientras que una menor proporción se pierde, típicamente en forma de calor. La medición de estos IDEs a menudo requiere instrumentación específica instalada directamente en los equipos.
      .col-lg-5
        img.d-none.d-lg-block(src='@/assets/curso/tema1/14.png', alt='', data-aos="fade-right")


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-md-2.col-5
        img.mb-lg-0.mb-md-0.mb-4(src='@/assets/curso/tema1/7.svg', alt='', data-aos="fade-right")
      .col-lg-11.col-md-10
        p.mb-0 #[b Expresión:] generalmente se expresan como un porcentaje (%) o como un coeficiente adimensional (por ejemplo: Coeficiente de Rendimiento – COP, Relación de Eficiencia Energética Estacional – SEER, Factor de Eficiencia Energética – EER).


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        h4.mb-4 Aplicaciones comunes: 
        ol.lista-ol--cuadro.lista-ol--separador
          li.d-flex
            .lista-ol--cuadro__vineta
              span.text-black 1
            p.mb-0 Evaluación del desempeño de equipos individuales de alto consumo: motores, bombas, compresores, calderas, sistemas HVAC #[em (Heating, Ventilation, and Air Conditioning)] y sistemas de iluminación.
          li.d-flex
            .lista-ol--cuadro__vineta
              span.text-black 2
            p.mb-0 Identificación de equipos ineficientes que podrían ser candidatos para optimización, mantenimiento avanzado o reemplazo.
          li.d-flex
            .lista-ol--cuadro__vineta
              span.text-black 3
            p.mb-0 Seguimiento del mantenimiento y la degradación del rendimiento de los equipos a lo largo del tiempo.
          li.d-flex
            .lista-ol--cuadro__vineta
              span.text-black 4
            p.mb-0 Verificación del cumplimiento de las especificaciones de eficiencia de los equipos según fabricantes o normativas.
      .col-lg-7
        .bg8.p-4
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-5.col-md-6.col-10
              img.mb-lg-0.mb-4(src='@/assets/curso/tema1/15.svg', alt='', data-aos="fade-right")
            .col-lg-7
              h5.mb-4 Ejemplos específicos: 
              ul.lista-ul.mb-0
                li.d-flex.mb-3
                  i.fas.fa-bolt
                  p.mb-0 La eficiencia de una caldera de vapor es del 88 %, lo que significa que el 12 % de la energía del combustible se pierde.
                li.d-flex.mb-3
                  i.fas.fa-bolt
                  p.mb-0 El Coeficiente de Rendimiento (COP) de un #[em chiller] es de 3.5, indicando que por cada unidad de energía eléctrica consumida se generan 3.5 unidades de frío.
                li.d-flex.mb-3
                  i.fas.fa-bolt
                  p.mb-0 Las nuevas luminarias LED presentan una eficacia luminosa de 120 lúmenes por vatio (lm / W), superando a las anteriores de 80 lm / W.
    
    
    .titulo-linea.mb-5
      h3.mb-0.ps-2.pe-2 D. IDEs normalizados (ajustados por variables externas como temperatura, ocupación)
    
    
    p.mb-5 Los IDEs normalizados son IDEs (generalmente relativos o de rendimiento) que se ajustan matemáticamente para compensar la influencia de variables externas significativas que afectan el consumo energético, pero que la organización no controla directamente. Estas variables pueden incluir condiciones ambientales (temperatura exterior, humedad), niveles de ocupación, horas de operación, cambios en la mezcla de productos, entre otras.
    
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .bg3.p-4.mb-0
          h4.mb-4.mt-lg-3 ¿Cómo funcionan? 
          p.mb-lg-4.mb-0 La normalización permite una comparación mucho más precisa y justa del desempeño energético a lo largo del tiempo, ya que elimina el "ruido" o las fluctuaciones causadas por condiciones ajenas a la eficiencia operativa real. Esto es crucial en sectores donde el consumo energético es altamente sensible a factores externos, como edificios (temperatura ambiente) o industrias con producción variable.
      .col-lg-5
        img.d-none.d-lg-block(src='@/assets/curso/tema1/16.png', alt='', data-aos="fade-right")
    
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-md-2.col-5
        img.mb-lg-0.mb-md-0.mb-4(src='@/assets/curso/tema1/7.svg', alt='', data-aos="fade-right")
      .col-lg-11.col-md-10
        p.mb-0 #[b Metodologías de ajuste:] las metodologías pueden variar desde simples ratios o factores de corrección hasta modelos estadísticos más complejos, como el análisis de regresión (simple o múltiple), que establece una relación matemática entre el consumo de energía y las variables de ajuste. 
    
    
    .row.justify-content-center.align-items-center.mb-0
      .col-lg-7.mb-lg-0.mb-4
        h4.mb-4 Aplicaciones comunes: 
        ol.lista-ol--cuadro.lista-ol--separador
          li.d-flex
            .lista-ol--cuadro__vineta
              span.text-black a
            p.mb-0 Evaluación del desempeño energético a lo largo de periodos con condiciones climáticas o de operación muy diferentes (ejemplo invierno vs. verano en un edificio).
          li.d-flex
            .lista-ol--cuadro__vineta
              span.text-black b
            p.mb-0 Comparación del desempeño energético de edificios con distintos niveles de ocupación o uso.
          li.d-flex 
            .lista-ol--cuadro__vineta
              span.text-black c
            p.mb-0 Seguimiento de la mejora de la eficiencia en procesos industriales con variaciones en la mezcla de productos o las condiciones de operación (ejemplo distintos tipos de vidrio en una fábrica).
          li.d-flex 
            .lista-ol--cuadro__vineta
              span.text-black d
            p.mb-0 Cálculo más preciso del ahorro energético real logrado por las medidas de eficiencia, aislando el efecto de las variables externas.
      .col-lg-5
        .bg7.p-4
          h5.mb-4.mt-lg-4 Ejemplos específicos: 
          ul.lista-ul.mb-0
            li.d-flex.mb-2
              i.fas.fa-bolt
              p.mb-0 El consumo energético registrado en el edificio de oficinas, normalizado por grados día de calefacción y refrigeración (kWh / GDD), mostró una mejora del 7 % este año, a pesar de un invierno más frío.
            li.d-flex.mb-0
              i.fas.fa-bolt
              p.mb-0 La intensidad energética correspondiente a la planta manufacturera, se ajusta por el tipo y volumen de producción, permitiendo una comparación precisa de la eficiencia operativa mes a mes.



    separador
    #t_1_1.titulo-segundo.mb-5
      h2 1.1 Clasificación de tipos de indicadores de eficiencia energética según su aplicación


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-md-9.col-10
        img.mb-lg-0.mb-4(src='@/assets/curso/tema1/17.png', alt='', data-aos="fade-right")
      .col-lg-7
        p.mb-0 La verdadera potencia de los Indicadores de Desempeño Energético (IDEs) se alcanza cuando son seleccionados y aplicados estratégicamente para satisfacer necesidades específicas de evaluación y mejora dentro de una organización. Clasificar los IDEs por su aplicación permite orientar los esfuerzos de medición y análisis hacia los aspectos más relevantes para cumplir los objetivos de gestión energética.


    .titulo.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Seguimiento del desempeño global de la organización


    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Propósito" :icono="require('@/assets/curso/tema1/18.svg')")
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-4.col-md-9.col-10.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/22.png', alt='Texto que describa la imagen')
          .col-lg-7
            p.mb-0 Estos IDEs brindan una visión general del consumo y la eficiencia energética a nivel de toda la organización o de una instalación completa. Su objetivo primordial es ofrecer una perspectiva macro del desempeño energético total y de las tendencias generales a lo largo del tiempo. Son especialmente útiles para la alta dirección y para reportes de cumplimiento.
      .py-4.py-md-5(titulo="Características" :icono="require('@/assets/curso/tema1/19.svg')")
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-4.col-md-9.col-10.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/23.png', alt='Texto que describa la imagen')
          .col-lg-7
            p.mb-0 Suelen ser IDEs absolutos (como el consumo total de energía por fuente) o relativos que consideran la producción o la actividad total de la organización (por ejemplo, la intensidad energética por unidad de ingreso o por número de empleados). Generalmente se calculan con menor frecuencia (mensual, trimestral o anual).
      .py-4.py-md-5(titulo="Aplicaciones comunes" :icono="require('@/assets/curso/tema1/20.svg')")
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-4.col-md-9.col-10.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/24.png', alt='Texto que describa la imagen')
          .col-lg-7
            ul.lista-ul.mb-0
              li.d-flex.mb-4
                i.fas.fa-bolt
                p.mb-0 Establecer y monitorear el progreso hacia objetivos energéticos estratégicos (ejemplo: reducir el consumo total de energía en un 10 % en cinco años).
              li.d-flex.mb-4
                i.fas.fa-bolt
                p.mb-0 Comunicar el desempeño energético general en informes de sostenibilidad, reportes anuales o a juntas directivas.
              li.d-flex.mb-4
                i.fas.fa-bolt
                p.mb-0 Realizar comparaciones de alto nivel (#[em benchmarking]) con otras organizaciones del sector o con promedios de la industria.
              li.d-flex.mb-0
                i.fas.fa-bolt
                p.mb-0 Servir como punto de partida para identificar áreas que requieren un análisis más detallado a nivel de proceso o equipo.
      .py-4.py-md-5(titulo="Ejemplos específicos" :icono="require('@/assets/curso/tema1/21.svg')")
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-4.col-md-9.col-10.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/25.png', alt='Texto que describa la imagen')
          .col-lg-7
            ul.lista-ul.mb-0
              li.d-flex.mb-4
                i.fas.fa-bolt
                p.mb-0 Consumo total anual de electricidad, gas natural y diésel de toda la corporación.
              li.d-flex.mb-4
                i.fas.fa-bolt
                p.mb-0 Intensidad energética de la empresa en kWh por millón de dólares de ventas.
              li.d-flex.mb-0
                i.fas.fa-bolt
                p.mb-0 Costo energético total como porcentaje del costo operativo total de la compañía.


    .titulo.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Evaluación de la eficiencia de procesos específicos


    TabsB.color-acento-contenido.ta2.mb-5
      .py-4.py-md-5(titulo="Propósito" :icono="require('@/assets/curso/tema1/18.svg')")
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-4.col-md-9.col-10.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/26.png', alt='Texto que describa la imagen')
          .col-lg-7
            p.mb-0 Estos IDEs se centran en analizar la eficiencia energética de procesos concretos (productivos, de servicios o de apoyo) dentro de la organización. Su finalidad es identificar dónde el consumo energético es elevado en relación con la salida del proceso y dónde existen mayores oportunidades de optimización.
      .py-4.py-md-5(titulo="Características" :icono="require('@/assets/curso/tema1/19.svg')")
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-4.col-md-9.col-10.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/27.png', alt='Texto que describa la imagen')
          .col-lg-7
            p.mb-0 Suelen ser IDEs relativos (consumo específico por unidad producida, energía por unidad de servicio) o basados en el rendimiento de los sistemas clave (ejemplo: eficiencia de un horno, consumo de energía por ciclo de una máquina). Requieren instrumentación más específica y una frecuencia de monitoreo más alta.
      .py-4.py-md-5(titulo="Aplicaciones comunes" :icono="require('@/assets/curso/tema1/20.svg')")
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-4.col-md-9.col-10.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/28.png', alt='Texto que describa la imagen')
          .col-lg-7
            ul.lista-ul.mb-0
              li.d-flex.mb-4
                i.fas.fa-bolt
                p.mb-0 Identificar los procesos más intensivos en energía dentro de una instalación.
              li.d-flex.mb-4
                i.fas.fa-bolt
                p.mb-0 Evaluar el impacto de mejoras implementadas en procesos particulares (ejemplo: cambio de bomba, optimización de un ciclo de secado).
              li.d-flex.mb-4
                i.fas.fa-bolt
                p.mb-0 Comparar la eficiencia de diferentes líneas de producción o procesos similares dentro de la misma planta o entre plantas.
              li.d-flex.mb-4
                i.fas.fa-bolt
                p.mb-0 Establecer objetivos de eficiencia para procesos individuales.
              li.d-flex.mb-0
                i.fas.fa-bolt
                p.mb-0 Optimizar variables operacionales (temperatura, presión, caudal, tiempo de ciclo).
      .py-4.py-md-5(titulo="Ejemplos específicos" :icono="require('@/assets/curso/tema1/21.svg')")
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-4.col-md-9.col-10.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/29.png', alt='Texto que describa la imagen')
          .col-lg-7
            ul.lista-ul.mb-0
              li.d-flex.mb-3
                i.fas.fa-bolt
                p.mb-0 Consumo de electricidad por tonelada de acero fundido en el horno de arco eléctrico (kWh / ton).
              li.d-flex.mb-3
                i.fas.fa-bolt
                p.mb-0 Metros cúbicos de gas natural por unidad de vidrio templado producido (m³ / unidad).
              li.d-flex.mb-3
                i.fas.fa-bolt
                p.mb-0 Kilogramos de vapor por kilogramo de producto esterilizado en la autoclave (kg vapor / kg).
              li.d-flex.mb-0
                i.fas.fa-bolt
                p.mb-0 Energía consumida por ciclo de lavado en la lavandería industrial (kWh / ciclo).


    .titulo.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Monitoreo del rendimiento de equipos individuales.


    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Propósito" :icono="require('@/assets/curso/tema1/18.svg')")
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-4.col-md-9.col-10.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/30.png', alt='Texto que describa la imagen')
          .col-lg-7
            p.mb-0 Estos IDEs se emplean para evaluar la eficiencia y el estado operativo de equipos de alto consumo energético, como motores, bombas, compresores, sistemas de iluminación o equipos de climatización (HVAC). Su objetivo es asegurar un funcionamiento óptimo y detectar fallos, degradaciones de rendimiento o usos inadecuados que aumenten el consumo.
      .py-4.py-md-5(titulo="Características" :icono="require('@/assets/curso/tema1/19.svg')")
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-4.col-md-9.col-10.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/31.png', alt='Texto que describa la imagen')
          .col-lg-7
            p.mb-0 En su mayoría son IDEs basados en el rendimiento (eficiencia de un motor, COP de un #[em chiller,] lúmenes por vatio de una luminaria) o relativos, que relacionan el consumo del equipo con su salida o tiempo de operación (ejemplo: energía por hora de uso). Requieren mediciones directas y, en muchos casos, continuas.
      .py-4.py-md-5(titulo="Aplicaciones comunes" :icono="require('@/assets/curso/tema1/20.svg')")
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-4.col-md-9.col-10.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/32.png', alt='Texto que describa la imagen')
          .col-lg-7
            ul.lista-ul.mb-0
              li.d-flex.mb-4
                i.fas.fa-bolt
                p.mb-0 Establecer criterios de eficiencia para la adquisición de nuevos equipos y verificar su cumplimiento.
              li.d-flex.mb-4
                i.fas.fa-bolt
                p.mb-0 Realizar seguimiento del rendimiento de los equipos a lo largo del tiempo para determinar necesidades de mantenimiento o reemplazo.
              li.d-flex.mb-4
                i.fas.fa-bolt
                p.mb-0 Evaluar el impacto de mejoras de mantenimiento o de nuevas tecnologías en la eficiencia de equipos específicos.
              li.d-flex.mb-4
                i.fas.fa-bolt
                p.mb-0 Optimizar la operación de los equipos (ejemplo: evitar el funcionamiento en vacío de un compresor, ajustar horarios de iluminación).
              li.d-flex.mb-0
                i.fas.fa-bolt
                p.mb-0 Comparar el rendimiento de equipos similares para identificar los más eficientes.
      .py-4.py-md-5(titulo="Ejemplos específicos" :icono="require('@/assets/curso/tema1/21.svg')")
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-4.col-md-9.col-10.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/33.png', alt='Texto que describa la imagen')
          .col-lg-7
            ul.lista-ul.mb-0
              li.d-flex.mb-3
                i.fas.fa-bolt
                p.mb-0 Eficiencia del motor de la bomba de agua (%).
              li.d-flex.mb-3
                i.fas.fa-bolt
                p.mb-0 Coeficiente de Rendimiento (COP) de un equipo de aire acondicionado.
              li.d-flex.mb-3
                i.fas.fa-bolt
                p.mb-0 Lúmenes por vatio (lm / W) de luminarias en una nave industrial.
              li.d-flex.mb-0
                i.fas.fa-bolt
                p.mb-0 Consumo de energía por hora de funcionamiento de un compresor (kWh / hora).


    .titulo.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Comparación con líneas base y objetivos


    TabsB.color-acento-contenido.ta2.mb-5
      .py-4.py-md-5(titulo="Propósito" :icono="require('@/assets/curso/tema1/18.svg')")
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-4.col-md-9.col-10.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/34.png', alt='Texto que describa la imagen')
          .col-lg-7
            p.mb-0 Estos IDEs permiten evaluar el progreso hacia los objetivos y metas energéticas de la organización. Su función es cuantificar mejoras, verificar el cumplimiento de objetivos y demostrar la mejora del desempeño energético exigida por estándares como ISO 50001.
      .py-4.py-md-5(titulo="Características" :icono="require('@/assets/curso/tema1/19.svg')")
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-4.col-md-9.col-10.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/35.png', alt='Texto que describa la imagen')
          .col-lg-7
            p.mb-0 Pueden ser absolutos o relativos, pero siempre se analizan en relación con la Línea Base Energética (LBE) y los objetivos establecidos. Usualmente se expresan como porcentajes de mejora o desviación respecto a la LBE, o como ahorros cuantificados.
      .py-4.py-md-5(titulo="Aplicaciones comunes" :icono="require('@/assets/curso/tema1/20.svg')")
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-4.col-md-9.col-10.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/36.png', alt='Texto que describa la imagen')
          .col-lg-7
            ul.lista-ul.mb-0
              li.d-flex.mb-4
                i.fas.fa-bolt
                p.mb-0 Medir el éxito de las iniciativas de eficiencia energética y validar ahorros.
              li.d-flex.mb-4
                i.fas.fa-bolt
                p.mb-0 Identificar si se cumplen las metas de reducción de consumo o mejora de eficiencia en los plazos previstos.
              li.d-flex.mb-4
                i.fas.fa-bolt
                p.mb-0 Comunicar el progreso a la dirección, auditores externos y partes interesadas.
              li.d-flex.mb-4
                i.fas.fa-bolt
                p.mb-0 Detectar áreas con avances más lentos o que requieren acciones correctivas.
              li.d-flex.mb-0
                i.fas.fa-bolt
                p.mb-0 Servir de base para la revisión por la dirección del sistema de gestión energética, requisito clave de ISO 50001.
      .py-4.py-md-5(titulo="Ejemplos específicos" :icono="require('@/assets/curso/tema1/21.svg')")
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-4.col-md-9.col-10.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/37.png', alt='Texto que describa la imagen')
          .col-lg-7
            ul.lista-ul.mb-0
              li.d-flex.mb-3
                i.fas.fa-bolt
                p.mb-0 Porcentaje de reducción del consumo total de energía respecto a la línea base del año anterior.
              li.d-flex.mb-3
                i.fas.fa-bolt
                p.mb-0 Porcentaje de mejora en la intensidad energética (kWh / unidad producida) en relación con el objetivo establecido para el trimestre.
              li.d-flex.mb-0
                i.fas.fa-bolt
                p.mb-0 Ahorro energético anual logrado (en kWh o en unidades monetarias) en comparación con la LBE ajustada por variables de impacto.


    .tarjeta.color-primario.des.p-4.mb-0(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img.img-a.img-t.mx-lg-4(src="@/assets/curso/tema1/video.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0.mx-lg-4
              p.mb-3 Para complementar, acceda al siguiente video:
              h4.mb-0 Qué son los indicadores de desempeño energético.
            .col-sm-auto.pe-lg-5
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=viuap_gcFn0&ab_channel=FrancescFornieles" target="_blank")
                span Ir al video
                i.fas.fa-file-video


</template>

<script>
export default {
  name: 'Tema1',
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
