import {Vampire5thND} from './die.js';
import {Vampire5thHD} from './die.js';

Hooks.once("init", async function () {
    CONFIG.Dice.terms["n"] = Vampire5thND;
	CONFIG.Dice.terms["h"] = Vampire5thHD;
});

Hooks.once('diceSoNiceReady', (dice3d) => {
    dice3d.addSystem({id:"vampire5thB",name:"Vampire 5th Black"},"exclusive");
    dice3d.addDicePreset({
      type:"dn",
      labels:[
        'modules/vampire5th-dice-roller/images/FailureB.webp', 
        'modules/vampire5th-dice-roller/images/FailureB.webp', 
        'modules/vampire5th-dice-roller/images/FailureB.webp', 
        'modules/vampire5th-dice-roller/images/FailureB.webp',
        'modules/vampire5th-dice-roller/images/FailureB.webp', 
        'modules/vampire5th-dice-roller/images/SuccessB.webp',
		'modules/vampire5th-dice-roller/images/SuccessB.webp',
		'modules/vampire5th-dice-roller/images/SuccessB.webp',
		'modules/vampire5th-dice-roller/images/SuccessB.webp',
		'modules/vampire5th-dice-roller/images/CriticalSuccessB.webp'
      ],
      bumpMaps:[
        'modules/vampire5th-dice-roller/images/FailureBump.webp', 
        'modules/vampire5th-dice-roller/images/FailureBump.webp', 
        'modules/vampire5th-dice-roller/images/FailureBump.webp', 
        'modules/vampire5th-dice-roller/images/FailureBump.webp',
        'modules/vampire5th-dice-roller/images/FailureBump.webp', 
        'modules/vampire5th-dice-roller/images/SuccessBump.webp',
		'modules/vampire5th-dice-roller/images/SuccessBump.webp',
		'modules/vampire5th-dice-roller/images/SuccessBump.webp',
		'modules/vampire5th-dice-roller/images/SuccessBump.webp',
		'modules/vampire5th-dice-roller/images/CriticalSuccessBump.webp'
      ],
      system: "vampire5thB"
    });
	dice3d.addDicePreset({
      type:"dh",
      labels:[
        'modules/vampire5th-dice-roller/images/BestialFailureB.webp', 
        'modules/vampire5th-dice-roller/images/FailureB.webp', 
        'modules/vampire5th-dice-roller/images/FailureB.webp', 
        'modules/vampire5th-dice-roller/images/FailureB.webp',
        'modules/vampire5th-dice-roller/images/FailureB.webp', 
        'modules/vampire5th-dice-roller/images/SuccessB.webp',
		'modules/vampire5th-dice-roller/images/SuccessB.webp',
		'modules/vampire5th-dice-roller/images/SuccessB.webp',
		'modules/vampire5th-dice-roller/images/SuccessB.webp',
		'modules/vampire5th-dice-roller/images/MessyCriticalB.webp'
      ],
      bumpMaps:[
        'modules/vampire5th-dice-roller/images/BestialFailureBump.webp', 
        'modules/vampire5th-dice-roller/images/FailureBump.webp', 
        'modules/vampire5th-dice-roller/images/FailureBump.webp', 
        'modules/vampire5th-dice-roller/images/FailureBump.webp',
        'modules/vampire5th-dice-roller/images/FailureBump.webp', 
        'modules/vampire5th-dice-roller/images/SuccessBump.webp',
		'modules/vampire5th-dice-roller/images/SuccessBump.webp',
		'modules/vampire5th-dice-roller/images/SuccessBump.webp',
		'modules/vampire5th-dice-roller/images/SuccessBump.webp',
		'modules/vampire5th-dice-roller/images/MessyCriticalBump.webp'
      ],
	  colorset:"v5hb",
      system: "vampire5thB"
    });
	dice3d.addColorset({
		name:'v5hb',
		description:'Vampire 5th Hunger Dice',
		category:'Vampire 5th',
		foreground:'#CDB800',
		background:'#790914',
		outline:'black',
		edge:'#6F0000',
		texture:'none'
	},"no");
});

Hooks.once('diceSoNiceReady', (dice3d) => {
    dice3d.addSystem({id:"vampire5thW",name:"Vampire 5th White"},"exclusive");
    dice3d.addDicePreset({
      type:"dn",
      labels:[
        'modules/vampire5th-dice-roller/images/FailureW.webp', 
        'modules/vampire5th-dice-roller/images/FailureW.webp', 
        'modules/vampire5th-dice-roller/images/FailureW.webp', 
        'modules/vampire5th-dice-roller/images/FailureW.webp',
        'modules/vampire5th-dice-roller/images/FailureW.webp', 
        'modules/vampire5th-dice-roller/images/SuccessW.webp',
		'modules/vampire5th-dice-roller/images/SuccessW.webp',
		'modules/vampire5th-dice-roller/images/SuccessW.webp',
		'modules/vampire5th-dice-roller/images/SuccessW.webp',
		'modules/vampire5th-dice-roller/images/CriticalSuccessW.webp'
      ],
      bumpMaps:[
        'modules/vampire5th-dice-roller/images/FailureBump.webp', 
        'modules/vampire5th-dice-roller/images/FailureBump.webp', 
        'modules/vampire5th-dice-roller/images/FailureBump.webp', 
        'modules/vampire5th-dice-roller/images/FailureBump.webp',
        'modules/vampire5th-dice-roller/images/FailureBump.webp', 
        'modules/vampire5th-dice-roller/images/SuccessBump.webp',
		'modules/vampire5th-dice-roller/images/SuccessBump.webp',
		'modules/vampire5th-dice-roller/images/SuccessBump.webp',
		'modules/vampire5th-dice-roller/images/SuccessBump.webp',
		'modules/vampire5th-dice-roller/images/CriticalSuccessBump.webp'
      ],
      system: "vampire5thW"
    });
	dice3d.addDicePreset({
      type:"dh",
      labels:[
        'modules/vampire5th-dice-roller/images/BestialFailureB.webp', 
        'modules/vampire5th-dice-roller/images/FailureB.webp', 
        'modules/vampire5th-dice-roller/images/FailureB.webp', 
        'modules/vampire5th-dice-roller/images/FailureB.webp',
        'modules/vampire5th-dice-roller/images/FailureB.webp', 
        'modules/vampire5th-dice-roller/images/SuccessB.webp',
		'modules/vampire5th-dice-roller/images/SuccessB.webp',
		'modules/vampire5th-dice-roller/images/SuccessB.webp',
		'modules/vampire5th-dice-roller/images/SuccessB.webp',
		'modules/vampire5th-dice-roller/images/MessyCriticalB.webp'
      ],
      bumpMaps:[
        'modules/vampire5th-dice-roller/images/BestialFailureBump.webp', 
        'modules/vampire5th-dice-roller/images/FailureBump.webp', 
        'modules/vampire5th-dice-roller/images/FailureBump.webp', 
        'modules/vampire5th-dice-roller/images/FailureBump.webp',
        'modules/vampire5th-dice-roller/images/FailureBump.webp', 
        'modules/vampire5th-dice-roller/images/SuccessBump.webp',
		'modules/vampire5th-dice-roller/images/SuccessBump.webp',
		'modules/vampire5th-dice-roller/images/SuccessBump.webp',
		'modules/vampire5th-dice-roller/images/SuccessBump.webp',
		'modules/vampire5th-dice-roller/images/MessyCriticalBump.webp'
      ],
	  colorset:"v5hw",
      system: "vampire5thW"
    });
	dice3d.addColorset({
		name:'v5hw',
		description:'Vampire 5th Hunger Dice',
		category:'Vampire 5th',
		foreground:'#CDB800',
		background:'#790914',
		outline:'black',
		edge:'#6F0000',
		texture:'none'
	},"no");
});