
const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const express = require('express')
const expressApp = express()

var ParseConformance = require('fhir').ParseConformance;
var FhirVersions = require('fhir').Versions;
var Fhir = require('fhir').Fhir;

var port = process.env.PORT || 3000;

//const dotenv = require-dev('dotenv').config()


const bot = new Telegraf(process.env.BOT_TOKEN)

/*telegraf*/
bot.start((ctx) => ctx.reply(`Erolife is a store that sells products related to adult sexual or erotic entertainment for adult people, such as vibrators, lingerie, clothing, intimate cosmetics, massage oils with. All the products are the best quality for your comfort and pleasure.
Want to know more about us?, innoerolife_bot offers home deliveries in Innopolis.\n
/products (access to our catalog on our website)\n
/questions (FAQ of commonly asked questions)\n
/delivery (contact our seller at Innopolis for prices in-home delivery)\n
(sex shops are regulated by law, with access not legally permitted to minors +18)')`))

bot.launch()

expressApp.listen(port,function(){
console.log("listen to port: "+port);
});