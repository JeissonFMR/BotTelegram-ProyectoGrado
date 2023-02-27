const { Telegraf } = require('telegraf');

//BASE DE DATOS
const { Pool, Client } = require("pg");

//CONSUMIR API
const axios = require("axios");

//WEB SCRAPING
const puppeteer = require('puppeteer');
const randomUseragent = require('random-useragent');
const { setTimeout } = require("timers");
const { error } = require('console');

const bot = new Telegraf('5358976147:AAElyGvKden2fyCjAGCoViW5DyFwhTnTxAI');
const cliente = new Client({
  user: "postgres",
  host: "localhost",
  database: "banderasbot",
  password: "postgres",
  port: 5432,
});
cliente.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

//TODO: COMMANDOS
bot.start(async (ctx) => {

  var nameUser = ctx.message.from.first_name;
  var number = ctx.message.from.id;


  setTimeout(() => {

    const msjInicio = '```👋🏻 Hola! 🤖 Soy Adel, el asistente virtual de la Universidad CESMAG 🏫. 💻 Comprendo el lenguaje humano, así que puedes escribirme o hablarme. 🗣️ Te dejo este ejemplo de mi funcionalidad. 🤳👆```'
    ctx.replyWithPhoto({ source: './images/inicio.jpeg' }, { caption: msjInicio, parse_mode: 'Markdown' });
  }, 1000);

  setTimeout(() => {
    ctx.reply(`Me alegra mucho conocerte *${nameUser}* 🤗\n Estoy aquí para ayudarte con los siguientes temas: \n
        ● 🔒Cambio de contraseña para las plataformas Ruah, Tau y Zeus.\n
        ● 📧Información de correo electronico institucional.\n
        ¿En que te puedo colaborar ? 🤔`, { parse_mode: 'Markdown' })
  }, 3000);

  setTimeout(() => {
    ctx.reply(`🔥🔥🔥 *_Igualmente, te comento que integro unos comandos ocultos para que puedas personalizar tu experiencia. Envíame un mensaje cuando necesites mirar cualquiera de los comandos para que te ayude._* 🤩\nLos comandos disponibles son: \n\n*● Opciones:* Muestra de nuevo el menú para que puedas seguir utilizando mi servicio 🤓\n*● Ayudar_encuesta:* Califica mi servicio y ayúdame a mejorar 🤗 \n*● Mejoras:* Sugiere alguna opción nueva para que yo la incorpore 🤝\n*● AcercaDe:* Obtén información sobre mí y mis desarrolladores 🤩`, { parse_mode: 'Markdown' })
  }, 5000);

});

bot.command('Adel_muestra_estadisticas', async (ctx) => {
  const nameUserEstadisticas = ctx.message.from.first_name;
  let cont1 = await cliente.query("SELECT count(puntaje)FROM nps where puntaje = 1");
  let cont2 = await cliente.query("SELECT count(puntaje)FROM nps where puntaje = 2");
  let cont3 = await cliente.query("SELECT count(puntaje)FROM nps where puntaje = 3");
  let cont4 = await cliente.query("SELECT count(puntaje)FROM nps where puntaje = 4");
  let cont5 = await cliente.query("SELECT count(puntaje)FROM nps where puntaje = 5");
  let cont6 = await cliente.query("SELECT count(puntaje)FROM nps where puntaje = 6");
  let cont7 = await cliente.query("SELECT count(puntaje)FROM nps where puntaje = 7");
  let cont8 = await cliente.query("SELECT count(puntaje)FROM nps where puntaje = 8");
  let cont9 = await cliente.query("SELECT count(puntaje)FROM nps where puntaje = 9");
  let cont10 = await cliente.query("SELECT count(puntaje)FROM nps where puntaje = 10");

  //Conteo E,D,A
  let contEstudiantes = await cliente.query("SELECT count(votante)FROM nps where votante = 'E'");
  contadorE = contEstudiantes.rows;
  let conteoEstudiantes = contadorE.map((estudiantes) => estudiantes.count)
  conteoEstudiantes = parseInt(conteoEstudiantes)

  let contDocentes = await cliente.query("SELECT count(votante)FROM nps where votante = 'D'");
  contadorD = contDocentes.rows;
  let conteoDocentes = contadorD.map((docentes) => docentes.count)
  conteoDocentes = parseInt(conteoDocentes)

  let contAdministrativos = await cliente.query("SELECT count(votante)FROM nps where votante = 'A'");
  contadorA = contAdministrativos.rows;
  let conteoAdministradores = contadorA.map((administradores) => administradores.count)
  conteoAdministradores = parseInt(conteoAdministradores)
  //Fin conteo E,D,A

  //Conteo NPS
  contadores = cont1.rows;
  let mapQueryContadores = contadores.map((cont) => cont.count);
  mapQueryContadores = parseInt(mapQueryContadores)
  contadores2 = cont2.rows;
  let mapQueryContadores2 = contadores2.map((cont) => cont.count);
  mapQueryContadores2 = parseInt(mapQueryContadores2)
  contadores3 = cont3.rows;
  let mapQueryContadores3 = contadores3.map((cont) => cont.count);
  mapQueryContadores3 = parseInt(mapQueryContadores3)
  contadores4 = cont4.rows;
  let mapQueryContadores4 = contadores4.map((cont) => cont.count);
  mapQueryContadores4 = parseInt(mapQueryContadores4)
  contadores5 = cont5.rows;
  let mapQueryContadores5 = contadores5.map((cont) => cont.count);
  mapQueryContadores5 = parseInt(mapQueryContadores5)
  contadores6 = cont6.rows;
  let mapQueryContadores6 = contadores6.map((cont) => cont.count);
  mapQueryContadores6 = parseInt(mapQueryContadores6)
  contadores7 = cont7.rows;
  let mapQueryContadores7 = contadores7.map((cont) => cont.count);
  mapQueryContadores7 = parseInt(mapQueryContadores7)
  contadores8 = cont8.rows;
  let mapQueryContadores8 = contadores8.map((cont) => cont.count);
  mapQueryContadores8 = parseInt(mapQueryContadores8)
  contadores9 = cont9.rows;
  let mapQueryContadores9 = contadores9.map((cont) => cont.count);
  mapQueryContadores9 = parseInt(mapQueryContadores9)
  contadores10 = cont10.rows;
  let mapQueryContadores10 = contadores10.map((cont) => cont.count);
  mapQueryContadores10 = parseInt(mapQueryContadores10)


  let totalcont = mapQueryContadores + mapQueryContadores2 + mapQueryContadores3 + mapQueryContadores4 + mapQueryContadores5 + mapQueryContadores6 + mapQueryContadores7 + mapQueryContadores8 + mapQueryContadores9 + mapQueryContadores10

  setTimeout(() => {
    ctx.reply(`*${nameUserEstadisticas}*\nEscribiste una palabra clave ...\n*TE TENGO LOS SIGUIENTES RESULTADOS ACTUALIZADOS DE LAS ENCUESTAS👇👇👇*`, { parse_mode: 'Markdown' })
  }, 2000);
  setTimeout(() => {
    ctx.reply(`*TOTAL DE PERSONAS ENCUESTADAS ➡️ ${totalcont}*\n*NPS 0➡️MUY POCO PROBABLE😔😔*\n*NPS 10➡️MUY PROBABLE🔥🔥* \n*Puntaje NPS   |   Personas votaron*\n 
    NPS 1️⃣  *|*  ${mapQueryContadores} Personas\n 
    NPS 2️⃣  *|*  ${mapQueryContadores2} Personas\n 
    NPS 3️⃣  *|*  ${mapQueryContadores3} Personas\n
    NPS 4️⃣  *|*  ${mapQueryContadores4} Personas\n
    NPS 5️⃣  *|*  ${mapQueryContadores5} Personas\n
    NPS 6️⃣  *|*  ${mapQueryContadores6} Personas\n
    NPS 7️⃣  *|*  ${mapQueryContadores7} Personas\n
    NPS 8️⃣  *|*  ${mapQueryContadores8} Personas\n
    NPS 9️⃣  *|*  ${mapQueryContadores9} Personas\n
    NPS 🔟  *|*  ${mapQueryContadores10} Personas\n\n*Estudiantes :* ${conteoEstudiantes}\n*Docentes :* ${conteoDocentes}\n*Administrativos :* ${conteoAdministradores}`, { parse_mode: 'Markdown' })
  }, 3500);
})

bot.command(['AyudarEncuesta', 'ayudarencuesta'], async (ctx) => {
  var number = ctx.message.from.id; //TODO: es el id del usuario, se lo toma como numero ya que la biblioteca no da el numero actualmente
  const nameUser = ctx.message.from.first_name;
  await cliente.query("update estadosmessages set estado='encuesta' where telefono='" + number + "'")
  /**ENCUESTA AYUDA */
  setTimeout(() => {
    ctx.reply(`${nameUser} ¡*Has escrito una palabra clave!*\n\nEsto ayudará a entender cómo te ha parecido mi interacción contigo 🤗 Me encantaría leer tu opinión para ver cómo puedo mejorar. 🤔`, { parse_mode: 'Markdown' })
  }, 2000);
  setTimeout(() => {
    ctx.replyWithPhoto({ source: './images/nps.jpeg' }, {
      caption: `¿Qué tan probable es que me recomiendes con tus conocidos? 🤔\nEscribe un número entre 0 y 10 siendo: \n*10: Es muy probable. 🤩* \n *0: Muy poco probable.  🚫*`, parse_mode: 'Markdown'
    });
  }, 4000);

  /**FIN ENCUESTA AYUDA */
})

bot.command(['Opciones', 'opciones'], async (ctx) => {

  var number = ctx.message.from.id; //TODO: es el id del usuario, se lo toma como numero ya que la biblioteca no da el numero actualmente
  const nameUser = ctx.message.from.first_name;

  //TODO: OBTENER EL ESTADO
  const resEstado = await cliente.query("select estado from estadosmessages where telefono='" + number + "'")
  estadoData = resEstado.rows;
  let mapQueryEstado = estadoData.map((estadodb) => estadodb.estado);
  const estadoDb = mapQueryEstado[0] //en esta variable esta el estado
  // console.log(estadoDb + " el estado es este actual");

  if (estadoDb !== 'encuesta') {
    if (estadoDb !== 'espera') {
      await cliente.query("update estadosmessages set estado='start' where telefono='" + number + "'")
      setTimeout(() => {
        ctx.reply(`${nameUser} *¡Has escrito el comando para el menú principal!*\nTe muestro mis ayudas a continuación: 👇👇\n\n● 🔒Cambio de contraseña para las plataformas Ruah, Tau y Zeus.\n● 📧Información de correo electronico institucional.\n\n Mis comandos son los siguientes 👇👇\n*● Opciones:* Muestra de nuevo el menú para que puedas seguir utilizando mi servicio 🤓\n*● AyudarEncuesta:* Califica mi servicio y ayúdame a mejorar 🤗 \n*● Mejoras:* Sugiere alguna opción nueva para que yo la incorpore 🤝\n*● AcercaDe:* Obtén información sobre mí y mis desarrolladores 🤩\n
      ¿En que te puedo colaborar? 🤔`, { parse_mode: 'Markdown' })
      }, 2000);
    }
  } else if (estadoDb !== 'espera') {
    return
  }


})

bot.command(['acercade', 'Acercade', 'AcercaDe'], async (ctx) => {
  var number = ctx.message.from.id; //TODO: es el id del usuario, se lo toma como numero ya que la biblioteca no da el numero actualmente
  const nameUser = ctx.message.from.first_name;

  //TODO: OBTENER EL ESTADO
  const resEstado = await cliente.query("select estado from estadosmessages where telefono='" + number + "'")
  estadoData = resEstado.rows;
  let mapQueryEstado = estadoData.map((estadodb) => estadodb.estado);
  const estadoDb = mapQueryEstado[0] //en esta variable esta el estado
  // console.log(estadoDb + " el estado es este actual");

  if (estadoDb !== 'encuesta') {
    if (estadoDb !== 'espera') {
      await cliente.query("update estadosmessages set estado='start' where telefono='" + number + "'")
      setTimeout(() => {
        ctx.reply(`🤩 *Esta idea fue desarrollada por un equipo de estudiantes de Ingeniería de Sistemas y su asesor como parte de una investigación de grado, con el fin de contribuir a los procesos académicos en la Jefatura de Software, aportando soluciones innovadoras y eficientes.* 💪\n\nLos desarrolladores fueron:\nBrayan Camilo Jamanoy Bacca 👉👉 3238146048\nJeisson Fernando Montenegro Rosero\nJorge Albeiro Rivera Rosero\n\n\n*UNICESMAG 2023*`, { parse_mode: 'Markdown' })
      }, 2000);
    }
  } else if (estadoDb !== 'espera') {
    return
  }
})

bot.command(['Mejoras', 'mejoras'], async (ctx) => {
  var number = ctx.message.from.id; //TODO: es el id del usuario, se lo toma como numero ya que la biblioteca no da el numero actualmente
  const nameUser = ctx.message.from.first_name;

  //TODO: OBTENER EL ESTADO
  const resEstado = await cliente.query("select estado from estadosmessages where telefono='" + number + "'")
  estadoData = resEstado.rows;
  let mapQueryEstado = estadoData.map((estadodb) => estadodb.estado);
  const estadoDb = mapQueryEstado[0] //en esta variable esta el estado
  // console.log(estadoDb + " el estado es este actual");

  if (estadoDb !== 'encuesta') {
    if (estadoDb !== 'espera') {
      await cliente.query("update estadosmessages set estado='start' where telefono='" + number + "'")
      setTimeout(() => {
        ctx.reply(`${nameUser} ¡*Has escrito una palabra clave!*\n\nEsto me ayudará a mejorar mis futuras actualizaciones\n 🤩😎 🤔*UNICESMAG 2023*\n\n Ingresa a este link 👇👇\nhttps://forms.gle/uGTCf9sV6gnJxHKU9`, { parse_mode: 'Markdown' })
      }, 2000);
    }
  } else if (estadoDb !== 'espera') {
    return
  }
})
//FIN COMMANDOS

//TODO: LOGICA DE TODO
bot.on(['text', 'voice'], async (ctx) => {


  // console.log(ctx);
  // console.log(JSON.stringify(ctx.message) + '😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀');
  // console.log(ctx.message.chat);
  // console.log()

  //VARIABLES A UTILIZAR EN EL APP
  var nameUser = ctx.message.from.first_name;
  var msjText = '';
  var number = ctx.message.from.id; //TODO: es el id del usuario, se lo toma como numero ya que la biblioteca no da el numero actualmente

  if (ctx.message.hasOwnProperty("text")) {

    var expresionRegular = /^[a-zA-Z0-9]{1}.*/; //Expresión regular

    let validacionCaracteres = expresionRegular.test(ctx.message.text);
    if (validacionCaracteres) {
      msjText = ctx.message.text

    } else {
      ctx.reply('¿Comó? 🤨🤨🤨')
    }


  } else if (ctx.message.hasOwnProperty("voice")) {
    const fs = require('fs')
    const audioId = ctx.message.voice.file_id;
    console.log(audioId + '😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀');
    const audio = await ctx.telegram.getFile(audioId);
    const audioUrl = `https://api.telegram.org/file/bot${bot.token}/${audio.file_path}`;
    let fileName1 = `audio_${Date.now()}.oga`
    let pathName = `/home/jeisson/Escritorio/files/${fileName1}`;

    const audioFile = await axios({
      method: 'get',
      url: audioUrl,
      responseType: 'stream'
    });

    let audioStream = fs.createWriteStream(pathName);
    audioFile.data.pipe(audioStream);

    audioStream.on('finish', () => {
      console.log(`¡Audio descargado como ${fileName1}`);
    })

    let fileSinExtension = fileName1.split('.')[0]
    let response2 = await axios.post("http://127.0.0.1:5002/predecir/" + fileSinExtension);
    let = { data } = response2;
    console.log(data);
    msjText = data.auidio

  }

  if (msjText != '') {
    try {
      let response = await axios.post("http://127.0.0.1:5000/predecir/" + msjText);
      let = { data } = response;

      let data_insultos = data.insultos;
      var insultos_numero = data_insultos[0]
      insultos_palabra = data_insultos[1]
      var data_maxcore = data.maxscore;
      var data_tag = data.tag;
      var data_nocontesta = data.nocontesta;
      var data_resp = data.respuestasj;
    } catch {
      console.log(error);
    }
    // impresiones de as variables anteriores
    // console.log(data_insultosfalse);
    // console.log(data.respuestasj);
    // console.log(data_maxcore);


    /**
      * GUARDAR EN LA DB TODOS LOS MENSAJES
    */
    try {
      await cliente.query("INSERT INTO public.mensajes(id, usuario, telefono, fecha_msj, msj_enviado, plataforma, msj_recibido) VALUES (default, '" + nameUser + "', '" + number + "', current_timestamp, '" + msjText + "', 'Telegram', ' ');")
    } catch (error) {
      await cliente.query("INSERT INTO public.mensajes(id, usuario, telefono, fecha_msj, msj_enviado, plataforma, msj_recibido) VALUES (default, '" + nameUser + "', '" + number + "', current_timestamp, 'sql', 'Comando SQLInjection detectado WhatsApp', ' ');")
    }


    /**ID ULTIMO DE LA DB - MENSAJES */
    const idMensajes = await cliente.query("select * from mensajes where telefono='" + number + "' ORDER BY id DESC")
    todoMensaje = idMensajes.rows;
    let mapQueryIdMensajes = todoMensaje.map((test2) => test2.id);
    const idDataMensaje = mapQueryIdMensajes[0] //en esta variable esta el id quye tiene el registro en la db MENSAJES

    console.log(idDataMensaje + " es el ide de la base de datos MENSAJE");


    /**VALIDA SI EL NUMERO EXISTE EN LA DB  DE ESTADOS*/
    const res = await cliente.query("select * from estadosmessages where telefono='" + number + "'")
    numberTel = res.rows;
    let mapQuerymsj = numberTel.map((test) => test.telefono);
    let mapQueryId = numberTel.map((test) => test.id);
    //console.log(mapQuerymsj[0] + " es el numero");
    const numero = mapQuerymsj[0] ////en esta variable esta el numero de telefono
    const idData = mapQueryId[0] //en esta variable esta el id quye tiene el registro en la db
    console.log(numero + " es el numeroooooooooo");
    console.log(idData + " es el ide de la base de datos");

    if (number != numero) {
      const insertNumero = await cliente.query("insert into estadosmessages(id,telefono,estado) values (DEFAULT, '" + number + "', 'start')")
      console.log(insertNumero.rows);
      console.log("se inserto!");
    }
    /**
  * TODO: METODOS
  */
    /**VALIDACION PLATAFORMA */
    async function validacion_plataforma() {
      try {
        mrtauruah = msjText.toUpperCase();
        if (
          mrtauruah.includes("RUAH")
        ) {

          const msjCambioCOntraseñaRuah = "🔐 Para el cambio de contraseña *Ruah*, por favor, introduce tu correo electrónico registrado en la universidad 📧. ¡Consigue una contraseña segura y única!"
          //CAMBIO EL ESTADO A RUAH
          const queryUpdateRuah = await cliente.query("update estadosmessages set estado='ruah' where telefono='" + number + "'")
          console.log(queryUpdateRuah.rows);
          console.log("se actualizooo!");


          ctx.reply(msjCambioCOntraseñaRuah, { parse_mode: 'Markdown' })
          await cliente.query("update mensajes set msj_recibido='" + msjCambioCOntraseñaRuah + "' where id='" + idDataMensaje + "'")
        } else if (mrtauruah.includes("TAU")) {
          const msjCambioCOntraseñaTau = "🔐 Para el cambio de contraseña *Tau*, por favor, introduce tu documento de identidad 📧.  ¡Consigue una contraseña segura y única!"
          //CAMBIO EL ESTADO A TAU
          const queryUpdateTau = await cliente.query("update estadosmessages set estado='tau' where telefono='" + number + "'")
          console.log(queryUpdateTau.rows);
          console.log("se actualizooo!");
          ctx.reply(msjCambioCOntraseñaTau, { parse_mode: 'Markdown' })
          await cliente.query("update mensajes set msj_recibido='" + msjCambioCOntraseñaTau + "' where id='" + idDataMensaje + "'")
            .then((result) => {
              console.log("Result: ", result);
            })
            .catch((erro) => {
              console.error("Error when sending: ", erro); //return object error
            });
        } else if (mrtauruah.includes("ZEUS")) {
          const msjCambioCOntraseñaZeus = "🔐 Para el cambio de contraseña *Zeus*, por favor, introduce tu documento de identidad 📧.  ¡Consigue una contraseña segura y única!"
          //CAMBIO EL ESTADO A TAU
          const queryUpdateZeus = await cliente.query("update estadosmessages set estado='zeus' where telefono='" + number + "'")
          console.log(queryUpdateZeus.rows);
          console.log("se actualizooo! a zeus");
          ctx.reply(msjCambioCOntraseñaZeus, { parse_mode: 'Markdown' })
          await cliente.query("update mensajes set msj_recibido='" + msjCambioCOntraseñaZeus + "' where id='" + idDataMensaje + "'")
        }
        else {
          especificarPlataforma = `Lo siento *${nameUser}* 🤔me debes especificar en tu pregunta la plataforma a la que te refieres 💻 para poder ayudarte mejor 🤝. Ya sea *Ruah* o *Tau*`
          ctx.reply(especificarPlataforma, { parse_mode: 'Markdown' }) //FIXME: reply
          await cliente.query("update mensajes set msj_recibido='" + especificarPlataforma + "' where id='" + idDataMensaje + "'")
        }
      } catch (error) {
        console.log(error);
      }
    }
    /**FIN VALIDACION PLATAFORMA */


    /**ENCUESTA NPS */
    const npsEncuesta = async () => {
      setTimeout(() => {
        ctx.reply(`${nameUser}  ¿Cómo te ha parecido mi trabajo? ¡Me encantaría leer tu opinión!🤔 Por favor, toma unos minutos para completar esta encuesta 📝, ¡se agradece mucho! 🙏`)
      }, 2000);
      setTimeout(() => {
        ctx.replyWithPhoto({ source: './images/nps.jpeg' }, {
          caption: `¿Qué tan probable es que me recomiendes con tus conocidos? 🤔\nEscribe un número entre 0 y 10 siendo: \n*10: Es muy probable. 🤩* \n *0: Muy poco probable.  🚫*`, parse_mode: 'Markdown'
        });
      }, 4000);


    }

    const npsEncuesta2 = async () => {
      await cliente.query("update estadosmessages set estado='votante' where id='" + idData + "'")
      setTimeout(() => {
        ctx.reply(`${nameUser} ¿Cuál es tu rol en la Universidad🤔?\n\n*E: Estudiante*\n*D: Docente*\n*A: Administrativo*`, { parse_mode: 'Markdown' })
      }, 2000);
    }
    /**FIN ENCUESTA NPS */

    //SCRAPING RUAH
    const webScrapingRuah = async (msjruah, idData) => {
      await cliente.query("update estadosmessages set estado='espera' where id='" + idData + "'")
      try {
        ctx.reply(`Por favor *${nameUser}* espera un momento. 🤝🤖`, { parse_mode: 'Markdown' }) //FIXME: A REPLY
        const header = randomUseragent.getRandom((ua) => {
          return ua.browserName === 'Chrome'
        });
        const browser = await puppeteer.launch({
          headless: true,
          ignoreHTTPSErrors: true,
        });
        console.log(msjruah + "es el msj ruahhhhhhhhhhhhhhhhhhhhhhhhhhh");
        const page = await browser.newPage();


        await page.setUserAgent(header);

        await page.setViewport({ width: 1366, height: 768 });

        await page.setDefaultNavigationTimeout(60000);

        try {
          await page.goto(`https://ruah.unicesmag.edu.co/recuperarclave`);

          const recuperarClave = await page.waitForSelector('#email');

          await recuperarClave.type(msjruah);
          await page.click('.btn-raised')

          let msjinforuah = await page.waitForSelector('#swal2-content')

          const mensajePlataformaRuah = await page.evaluate(msjinforuah => msjinforuah.innerText, msjinforuah);
          await cliente.query("update mensajes set msj_recibido='" + mensajePlataformaRuah + "' where id='" + idDataMensaje + "'")
          await browser.close()
          if (mensajePlataformaRuah.includes('enviado') && mensajePlataformaRuah.includes('contraseña')) {
            ctx.reply(mensajePlataformaRuah) //FIXME: REPLY
            await cliente.query("update estadosmessages set estado='encuesta' where id='" + idData + "'")
            ctx.reply('💥💥*NOTA:*💥💥  📣📢Ten en cuenta que si utilizas Zeus la contraseña cambio por la que ha sido enviada al correo electronico.', { parse_mode: 'Markdown' })
            npsEncuesta()
          } else {
            ctx.reply(`😕 ¡Vaya! La dirección de correo electrónico no se pudo encontrar. ¡No te preocupes! Aquí tienes dos opciones para solucionarlo:\n\n*1.* 🔁 Volver a escribir el correo\n*2.* 🤔 Hacer otra pregunta\n\n¡Elige la opción que prefieras escribiendo *1* o *2* 🤗`, { parse_mode: 'Markdown' })
            await cliente.query("update estadosmessages set estado='opcion' where id='" + idData + "'")
          }
        } catch (error) {
          await browser.close()
          errorCaragRuah = `Disculpame *${nameUser}* 🥹 lo que sucede es que hay muchas peticiones hacia la plataforma en este momento. Por favor vuelve a escribir tu correo`
          ctx.reply(errorCaragRuah, { parse_mode: 'Markdown' }) //FIXME: reply
          await cliente.query("update estadosmessages set estado='ruah' where id='" + idData + "'")
          await cliente.query("update mensajes set msj_recibido='" + errorCaragRuah + "' where id='" + idDataMensaje + "'")
        }
      } catch (error) {
        console.log(error);
      }
    }
    //FIN SCRAPING RUAH

    //SCRAPING TAU
    const webScrapingTau = async (msjtau, idData) => {
      ctx.reply(`Por favor *${nameUser}* espera un momento.🤝🤖`, { parse_mode: 'Markdown' })
      await cliente.query("update estadosmessages set estado='espera' where id='" + idData + "'")
      const header = randomUseragent.getRandom((ua) => {
        return ua.browserName === 'Chrome'
      });
      const browser = await puppeteer.launch({
        headless: true,
        ignoreHTTPSErrors: true,
      });
      console.log(msjtau + "es el msj tauuuuuuuuuuuuuuu");
      const page = await browser.newPage();
      await page.setUserAgent(header);
      await page.setDefaultNavigationTimeout(0);
      await page.setViewport({ width: 1366, height: 768 });

      await page.goto(`https://uv4.unicesmag.edu.co/login/forgot_password.php`);
      const recuperarClave = await page.waitForSelector('#id_username');

      await recuperarClave.type(msjtau);

      await cliente.query("update estadosmessages set estado='encuesta' where id='" + idData + "'")
      //demorar 3 sg
      await page.click('#id_submitbuttonusername')


      let msjinfotau = await page.waitForSelector('#notice')

      const mensajePlataformaTau = await page.evaluate(msjinforuah => msjinforuah.innerText, msjinfotau);
      await cliente.query("update mensajes set msj_recibido='" + mensajePlataformaTau + "' where id='" + idDataMensaje + "'")
      ctx.reply(mensajePlataformaTau) //FIXME: REPLY
      await browser.close()
      npsEncuesta()

    }
    //FIN SCRAPING tau

    //SCRAPING ZEUS
    const webScrapingZeus = async (msjzeus, idData) => {

      try {
        ctx.reply(`Por favor *${nameUser}* espera un momento. 🤝🤖`, { parse_mode: 'Markdown' })
        await cliente.query("update estadosmessages set estado='espera' where id='" + idData + "'")
        const header = randomUseragent.getRandom((ua) => {
          return ua.browserName === 'Chrome'
        });
        const browser = await puppeteer.launch({
          headless: true,
          ignoreHTTPSErrors: true,
        });
        console.log(msjzeus + "es el msj ZEUSSSSSSS");
        const page = await browser.newPage();


        await page.setUserAgent(header);

        await page.setViewport({ width: 1366, height: 768 });

        await page.setDefaultNavigationTimeout(60000);
        try {
          await page.goto(`https://zeusacad.unicesmag.edu.co/`);
          await page.waitForTimeout(5000)
          const enlace = await page.$('a');
          // Hacemos clic en el enlace
          await enlace.click();
          await page.waitForTimeout(2000)

          const recuperarClave = await page.waitForSelector('#textfield-1040-inputEl');
          await recuperarClave.type(msjzeus);

          await page.click('#button-1041-btnInnerEl')

          await page.waitForTimeout(3000)
          const elementHandle = await page.$('#messagebox-1001-displayfield-inputEl');
          const mensajeZeus = await elementHandle.evaluate(element => element.textContent);
          // console.log(mensajeZeus);
          await browser.close()
          if (mensajeZeus.includes('enviado') && mensajeZeus.includes('contraseña')) {
            client
              .reply(message.from, mensajeZeus, message.id)
              .then((result) => {
                chat.lastReceivedKey._serialized
                console.log('Result: ', result); //return object success
              }).catch((erro) => {
                console.error('Error when sending: ', erro); //return object error
              });
            await cliente.query("update estadosmessages set estado='encuesta' where id='" + idData + "'")
            ctx.reply('💥💥 *NOTA:* 💥💥  📣📢Ten en cuenta la contraseña  de Ruah cambio por la que ha sido enviada al correo electronico.')
            npsEncuesta()
          } else {
            ctx.reply(`😕 ¡Vaya! La dirección de correo electrónico no se pudo encontrar. ¡No te preocupes! Aquí tienes dos opciones para solucionarlo:\n\n*1.* 🔁 Volver a escribir el correo\n*2.* 🤔 Hacer otra pregunta\n\n¡Elige la opción que prefieras escribiendo *1* o *2* 🤗`, { parse_mode: 'Markdown' })
            await cliente.query("update estadosmessages set estado='opcionZeus' where id='" + idData + "'")
          }
        } catch (error) {
          await browser.close()
          errorCaragRuah = `Disculpame *${nameUser}* 🥹 lo que sucede es que hay muchas peticiones hacia la plataforma en este momento. Por favor vuelve a escribir tu correo`
          ctx.reply(errorCaragRuah, { parse_mode: 'Markdown' })
          await cliente.query("update estadosmessages set estado='zeus' where id='" + idData + "'")
          await cliente.query("update mensajes set msj_recibido='" + errorCaragRuah + "' where id='" + idDataMensaje + "'")
        }
      } catch (error) {
        console.log(error);
      }
    }
    //FIN SCRAPING ZEUS

    function azar(date) {
      return date[Math.floor(Math.random() * date.length)];
    }
    /**
     * FIN METODOS
     */

    //TODO: OBTENER EL ESTADO
    const resEstado = await cliente.query("select estado from estadosmessages where telefono='" + number + "'")
    estadoData = resEstado.rows;
    let mapQueryEstado = estadoData.map((estadodb) => estadodb.estado);
    const estadoDb = mapQueryEstado[0] //en esta variable esta el estado
    console.log(estadoDb + " el estado es este actual");


    //TODO: VALIDACIONES DE ESTADO
    const esCorreoElectronico = correoElectronico => /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/i.test(correoElectronico);
    const correo = esCorreoElectronico(msjText)

    if (estadoDb == 'ruah') {
      errorCorreoRuah = "⚠️¡Atención! 🧐Revisa cuidadosamente que el correo electrónico que has introducido sea correcto y válido. 🤔Inténtalo de nuevo para asegurarte de que está bien escrito."
      if (correo) {
        webScrapingRuah(msjText, idData)
      } else {
        ctx.reply(errorCorreoRuah)
        await cliente.query("update mensajes set msj_recibido='" + errorCorreoRuah + "' where id='" + idDataMensaje + "'")
      }
    } else if (estadoDb == 'tau') {
      errorUserTau = "Inténtalo de nuevo, recuerda que los números de documento de identidad deben ser exactos para que sean válidos. 🤓"
      if (!isNaN(msjText)) {
        if (msjText.length > 5 && msjText.length <= 15) {
          webScrapingTau(msjText, idData)
        } else {
          ctx.reply(errorUserTau)
          await cliente.query("update mensajes set msj_recibido='" + errorUserTau + "' where id='" + idDataMensaje + "'")
        }

      } else {
        errorTau = "🤔 Un número de documento de identidad debe estar compuesto solo de números ➡️ 🔢"
        ctx.reply(errorTau)
        await cliente.query("update mensajes set msj_recibido='" + errorTau + "' where id='" + idDataMensaje + "'")
      }


    } else if (estadoDb == 'zeus') {
      errorCorreoZeus = "⚠️¡Atención! 🧐Revisa cuidadosamente que el correo electrónico que has introducido sea correcto y válido. 🤔Inténtalo de nuevo para asegurarte de que está bien escrito."
      if (correo) {
        webScrapingZeus(msjText, idData)
      } else {
        ctx.reply(errorCorreoZeus, { parse_mode: 'Markdown' })
        await cliente.query("update mensajes set msj_recibido='" + errorCorreoZeus + "' where id='" + idDataMensaje + "'")
      }

    } else if (estadoDb == 'encuesta') {
      if (!isNaN(msjText)) {
        parseInt(msjText)
        if (msjText >= 0 && msjText <= 10) {
          if (msjText.includes(".") || msjText.includes(",")) {
            ctx.reply('💡Escribe un número entero del 0 al 10') //FIXME: REPLY
          } else {
            await cliente.query("INSERT INTO nps(id, telefono, puntaje, msj_enviado_nps)VALUES (default, '" + number + "', '" + msjText + "', '' )")
            npsEncuesta2()
          }
        } else {
          ctx.reply('💡Escribe un número entero del 0 al 10') //FIXME: REPLY
        }
      } else {
        ctx.reply('💡Escribe un número entero del 0 al 10') //FIXME: REPLY
      }
    } else if (estadoDb == 'votante') {
      const letra = msjText.toUpperCase()
      if (letra == 'A' || letra == 'D' || letra == 'E') {
        msj_nps = `🙌👍 ¡Muchas gracias por tomarte el tiempo para participar en esta encuesta! 🤩 Tu opinión es invaluable para nosotros. ¡Muchas gracias por contribuir con tu punto de vista! 🤝💯`
        ctx.reply(msj_nps) //FIXME:reply

        const idMensajes = await cliente.query("select * from nps where telefono='" + number + "' ORDER BY id DESC")
        todoMensaje = idMensajes.rows;
        let mapQueryIdMensajes = todoMensaje.map((test2) => test2.id);
        const idDataNPS = mapQueryIdMensajes[0] //en esta variable esta el id quye tiene el registro en la db MENSAJES
        await cliente.query("update nps set msj_enviado_nps='" + msj_nps + "', votante='" + letra + "' where id='" + idDataNPS + "'")
        await cliente.query("update estadosmessages set estado='start' where id='" + idData + "'")
        setTimeout(() => {
          seguirAccion = `¿Qué más puedo hacer por ti? 🤝`
          ctx.reply(seguirAccion)
        }, 1000);
      } else {
        msj_nps = `Solo tienes permitido escribir una letra:\n*E: Estudiante*\n*D: Docente*\n*A: Administrativo*`
        ctx.reply(msj_nps, { parse_mode: 'Markdown' }) //FIXME:reply
      }

    }

    else if (estadoDb == 'espera') {
      const paciencia = `Por favor *${nameUser}* 🤗, ten paciencia, estoy trabajando en tu solicitud. 💪 Tendrás tu respuesta lo antes posible. 🤞 ¡Gracias!`
      ctx.reply(paciencia, { parse_mode: 'Markdown' })

      cliente.query("update mensajes set msj_recibido='" + paciencia + "' where  id='" + idDataMensaje + "'")

    } else if (estadoDb == 'opcion') {
      if (msjText == '1') {
        const msjOpt1 = `📧 Por favor, vuelve a escribir tu correo electrónico 🔍y verifica que esté escrito correctamente 🔎.`
        ctx.reply(msjOpt1)
        cliente.query("update mensajes set msj_recibido='" + msjOpt1 + "' where  id='" + idDataMensaje + "'")
        await cliente.query("update estadosmessages set estado='ruah' where id='" + idData + "'")

      } else if (msjText == '2') {
        const msjOpt2 = `¿Qué más puedo hacer por ti? 🤝`
        ctx.reply(msjOpt2)
        cliente.query("update mensajes set msj_recibido='" + msjOpt2 + "' where  id='" + idDataMensaje + "'")
        await cliente.query("update estadosmessages set estado='start' where id='" + idData + "'")
      } else {
        ctx.reply(`No existe la opción escrita. 🚫🤔⚠`)
      }
    } else if (estadoDb == 'opcionZeus') {
      if (msjText == '1') {
        ctx.reply(`📧 Por favor, vuelve a escribir tu correo electrónico personal🔍y verifica que esté escrito correctamente 🔎.`)
        await cliente.query("update estadosmessages set estado='zeus' where id='" + idData + "'")

      } else if (msjText == '2') {
        ctx.reply(`¿Qué más puedo hacer por ti? 🤝`)
        await cliente.query("update estadosmessages set estado='start' where id='" + idData + "'")
      } else {
        ctx.reply(`No existe la opción escrita. 🚫🤔⚠`)
      }
    }
    else {
      //logica
      if (insultos_numero === 1) {
        ctx.reply(insultos_palabra)
        await cliente.query("update mensajes set msj_recibido='" + insultos_palabra + "' where  id='" + idDataMensaje + "'")
      } else {
        if (data_nocontesta === 'Nada') { //si viene una prediccion
          if (data_maxcore > "0.5") {
            if (data_tag == "Contraseña_ruah") {
              setTimeout(() => {
                validacion_plataforma();
              }, 2000);

            }
            else if (data_tag == "Contraseña_tau") {
              setTimeout(() => {
                validacion_plataforma();
              }, 2000);

            } else if (data_tag == "Contraseña_zeus") {
              setTimeout(() => {
                validacion_plataforma();
              }, 2000);
            } else {
              setTimeout(async () => {
                test = azar(data_resp);
                ctx.reply(test)

                await cliente.query("update mensajes set msj_recibido='" + test + "' where  id='" + idDataMensaje + "'")
              }, 1000);
            }
          } else {
            setTimeout(async () => {
              noCOmprende = "No entiendo lo que quieres decir, ¿podrías explicármelo de otra manera por favor? 🤔🤗"
              try {
                ctx.reply(noCOmprende)
                await cliente.query("update mensajes set msj_recibido='" + noCOmprende + "' where  id='" + idDataMensaje + "'")
              } catch (error) {
                ctx.reply(noCOmprende)
                await cliente.query("update mensajes set msj_recibido='" + noCOmprende + "' where  id='" + idDataMensaje + "'")
              }
            }, 2000);


          }
        } else {
          ctx.reply(data_nocontesta)
          await cliente.query("update mensajes set msj_recibido='" + data_nocontesta + "' where  id='" + idDataMensaje + "'")
        }
      }
    }
  }



});

bot.on(["audio", "document", "photo", "sticker", "video", "video_note", "location", "contact", "new_chat_members", "left_chat_member", "new_chat_title", "new_chat_photo", "delete_chat_photo", "group_chat_created", "supergroup_chat_created", "channel_chat_created", "migrate_to_chat_id", "migrate_from_chat_id", "pinned_message", "web_app_data"], (ctx) => {



  var nameUser = ctx.message.from.first_name;

  ctx.reply(`Lo siento *${nameUser}*, no te comprendo 🤷‍♂️. Por el momento solo comprendo lo que envias por audio 🔊 o escrito 📝.`, { parse_mode: 'Markdown' })



})


async function start() {
  const ngrok = require('ngrok');
  const port = 6000;
  // Iniciar Ngrok y obtener la URL de reenvío
  const url = await ngrok.connect(port);

  console.log(`Webhook disponible en la URL: ${url}`);


  bot.launch(

    {
      webhook: {
        // Public domain for webhook; e.g.: example.com
        domain: url,

        // Port to listen on; e.g.: 8080
        port: port,
      },
    });
}
start()

