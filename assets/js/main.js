// Descrizione
// Riprodurre una poco conosciuta web app di messaggistica.

var app = new Vue(
  {
    el: '#root',
    data: {
      index: 0,
      search: '',
      message: '',
      contacts: [
      	{
      		name: 'Michele',
      		avatar: '_1',
      		visible: true,
      		messages: [
      			{
      				date: '12/01/2020 15:30:55',
      				text: 'Hai portato a spasso il cane?',
      				status: 'sent'
      			},
      			{
      				date: '12/01/2020 15:50:00',
      				text: 'Ricordati di dargli da mangiare',
      				status: 'sent'
      			},
      			{
      				date: '12/01/2020 16:15:22',
      				text: 'Tutto fatto!',
      				status: 'received'
      			}
      		],
      	},
        {
      		name: 'Fabio',
      		avatar: '_2',
      		visible: false,
      		messages: [
            {
      				date: '10/01/2020 15:30:55',
      				text: 'Hai portato a spasso il cane?',
      				status: 'sent'
      			},
      			{
      				date: '10/01/2020 15:50:00',
      				text: 'Ricordati di dargli da mangiare',
      				status: 'sent'
      			},
      			{
      				date: '10/01/2020 15:55:22',
      				text: 'Yep',
      				status: 'received'
      			}
      		],
      	},
        {
      		name: 'Samuele',
      		avatar: '_3',
      		visible: false,
      		messages: [
            {
      				date: '10/01/2020 21:30:55',
      				text: 'Hai portato a spasso il cane?',
      				status: 'sent'
      			},
      			{
      				date: '10/01/2020 21:35:00',
      				text: 'Ricordati di dargli da mangiare',
      				status: 'sent'
      			},
      			{
      				date: '10/01/2020 22:15:22',
      				text: 'Tutto fatto!',
      				status: 'received'
      			}
      		],
      	},
      	{
      		name: 'Luisa',
      		avatar: '_6',
      		visible: false,
      		messages: [
            {
      				date: '10/01/2020 15:30:55',
      				text: 'Lo sai che ha aperto una nuova pizzeria?',
      				status: 'sent'
      			},
      			{
      				date: '10/01/2020 15:50:00',
      				text: 'Si, ma preferirei andare al cinema',
      				status: 'received'
      			}
      		],
      	},
        {
      		name: 'Marco',
      		avatar: '_7',
      		visible: false,
      		messages: [
      			{
      				date: '10/01/2020 20:30:55',
      				text: 'Ciao Marco, come stai?',
      				status: 'sent'
      			},
      			{
      				date: '10/01/2020 20:50:00',
      				text: 'Ti va di andare a bere un caffè?',
      				status: 'sent'
      			},
      			{
      				date: '10/01/2020 21:15:22',
      				text: 'Ciao! Tutto bene grazie! Domani alle 8:00? :)',
      				status: 'received'
      			}
      		],
      	},
        {
      		name: 'Fabio',
      		avatar: '_8',
      		visible: false,
      		messages: [
      			{
      				date: '10/01/2020 15:30:55',
      				text: 'Hai portato a spasso il cane?',
      				status: 'sent'
      			},
      			{
      				date: '10/01/2020 15:50:00',
      				text: 'Ricordati di dargli da mangiare',
      				status: 'sent'
      			},
      			{
      				date: '10/01/2020 16:15:22',
      				text: 'Tutto fatto!',
      				status: 'received'
      			}
      		],
      	},
        {
      		name: 'Alessandro',
      		avatar: '_5',
      		visible: false,
      		messages: [
      			{
      				date: '10/01/2020 15:30:55',
      				text: 'Hai portato a spasso il cane?',
      				status: 'sent'
      			},
      			{
      				date: '10/01/2020 15:50:00',
      				text: 'Ricordati di dargli da mangiare',
      				status: 'sent'
      			},
      			{
      				date: '10/01/2020 16:15:22',
      				text: 'Tutto fatto!',
      				status: 'received'
      			}
      		],
      	},
        {
          name: 'Giorgio',
          avatar: '_4',
          visible: false,
          messages: [
            {
      				date: '10/01/2020 20:30:55',
      				text: 'Ciao Marco, come stai?',
      				status: 'sent'
      			},
      			{
      				date: '10/01/2020 20:50:00',
      				text: 'Ti va di andare a bere un caffè?',
      				status: 'sent'
      			},
      			{
      				date: '10/01/2020 21:15:22',
      				text: 'Ciao! Tutto bene grazie! Domani alle 8:00? :)',
      				status: 'received'
      			}
          ],
        }
      ]
    },
    computed: {

    },
    methods: {
      // funzione per ottenere l'ora e i minuti dei messaggi
      getTime: function(date){
        let dateTime = new Date(date);
        let hours = dateTime.getHours();
        let minutes = dateTime.getMinutes();
        return `${hours}:${minutes}`;
      },
      // funzione contatto attivo
      addActive: function(contact, i){
        this.contacts.forEach((contact, i) => {
          contact.visible = false;
        });
        let index = this.contacts.indexOf(contact);
        this.contacts[index].visible = true;
      },
      // funzione per ottenere ora ultimo accesso
      lastAccess: function(i){
        const messages = this.contacts[i].messages;
        const last = messages.length - 1;
        return messages[last].date;
      },
      // funzione invio messaggio da input chat
      msgSend: function(){
        let index;
        this.contacts.forEach((contact, i) => {
          if (contact.visible == true) {
            index = i;
          }
        });
        // dayjs
        const date = dayjs().format('HH:mm');
        console.log(date);
        const message = {
          // console.log(this.message);
          text: this.message,
          date,
          status: 'sent'
        };
        this.contacts[index].messages.push(message);

        this.message = '';

        // risposta automatica 'ok' dopo 1 secondo
        setTimeout(() => {
          const date = dayjs().format('HH:mm');
          const message = {
            text: 'Ok',
            date,
            status: 'received'
          }
          this.contacts[index].messages.push(message);
        }, 1000);
      }
    }
  }
);
