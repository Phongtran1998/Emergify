exports.handler = (event, context, callback) => {

    if(event.request.type === 'LaunchRequest') {

        const output = {
            response: {
                outputSpeech: {
                    type: 'PlainText',
                    text: 'Welcome to Hospital App'
                },
                shouldEndSession: false
            }
        };

        callback(null, output);
    }

     else if (event.request.type === 'IntentRequest'){

         if(event.request.intent.name === 'list'){

        const output = {
            response: {
                outputSpeech: {
                    type: 'PlainText',
                    text: 'George Hospital, Theresa Hospital, Lionel Hospital'
                },
                shouldEndSession: false
            }
        };

           callback(null, output);
         }


     else if (event.request.type === 'IntentRequest'){

         if(event.request.intent.name === 'heartDisease'){

        const output = {
            response: {
                outputSpeech: {
                    type: 'PlainText',
                    text: 'George Hospital has the best rating for heart disease cases'
                },
                shouldEndSession: false
            }
        };

           callback(null, output);
         }



     else if (event.request.type === 'IntentRequest'){

         if(event.request.intent.name === 'best'){

        const output = {
            response: {
                outputSpeech: {
                    type: 'PlainText',
                    text: 'George Hospital has the best rating overall'
                },
                shouldEndSession: false
            }
        };

           callback(null, output);
         }




     else if (event.request.type === 'IntentRequest'){

         if(event.request.intent.name === 'cancer'){

        const output = {
            response: {
                outputSpeech: {
                    type: 'PlainText',
                    text: 'Theresa Hospital has the best rating for cancer cases'
                },
                shouldEndSession: false
            }
        };

           callback(null, output);
         }


     else if (event.request.type === 'IntentRequest'){

         if(event.request.intent.name === 'diabetes'){

        const output = {
            response: {
                outputSpeech: {
                    type: 'PlainText',
                    text: 'Lionel Hospital has the best rating for diabetes cases'
                },
                shouldEndSession: false
            }
        };

           callback(null, output);
         }
    } }}}}
};
