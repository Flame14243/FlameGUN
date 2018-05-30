const  Discord  =  gerektirir ( ' discord.js ' );
const  client  =  yeni  Discord.Client ();

istemci . on ( ' hazır ' , () => {
    Konsol . log ( ' Hazırım! ' );
});

istemci . on ( ' message ' , mesaj  => {on
    eğer ( mesaj . content  ===  ' ping ' ) {
    	mesajı . cevap ( ' pong ' );
  	}
});

// BU ŞEKİLDE OLMALIDIR
istemci . giriş ( süreç . env . BOT_TOKEN );
