var lyrics_mode = "1";
function ativar_lyrics() {


    if (lyrics_mode == "1") {
        lyrics_mode = "0";
        document.getElementById("lyrics_atual_change").style.display = "block";


    } else if (lyrics_mode == "0") {
        document.getElementById("lyrics_atual_change").style.display = "none";
        lyrics_mode = "1";
    }
}


function changesong_BL() {
    buscar2();
    document.getElementById("music").src = "musicas/Blinding Lights - The Weekend/The Weeknd - Blinding Lights (Official Video) (320 kbps).mp3";
    document.getElementById("album").src = "musicas/Blinding Lights - The Weekend/Blinding Lights - The Weekend.jpg";
    document.getElementById("autor").innerHTML = "The Weekend";
    document.getElementById("nomedamusica").innerHTML = "Blinding Lights";
    document.getElementById("backgroundgradiente").style.height = "100%";
    document.getElementById("lyrics_position_button").style.display = "block";
    document.getElementById("song_title").style.display = "none";
    document.getElementById("part1").innerHTML = "Yeah <br/> I've been tryna call <br/> I've been on my own for long enough <br/> Maybe you can show me how to love, maybe  <br/> I'm going through withdrawals  <br/> You don't even have to do too much  <br/> You can turn me on with just a touch, baby  <br/> I look around and  <br/> Sin City's cold and empty (oh)  <br/> No one's around to judge me (oh)  <br/> I can't see clearly when you're gone <br/> I said, ooh, I'm blinded by the lights <br/> No, I can't sleep until I feel your touch <br/> I said, ooh, I'm drowning in the night <br/> Oh, when I'm like this, you're the one I trust <br/> (Hey, hey, hey) <br/> I'm running out of time <br/> 'Cause I can see the sun light up the sky <br/> So I hit the road in overdrive, baby, oh <br/> The city's cold and empty (oh) <br/> No one's around to judge me (oh) <br/> I can't see clearly when you're gone <br/> I said, ooh, I'm blinded by the lights <br/> No, I can't sleep until I feel your touch <br/> I said, ooh, I'm drowning in the night <br/> Oh, when I'm like this, you're the one I trust <br/> I'm just walking by to let you know (by to let you know) <br/> I can never say it on the phone (say it on the phone) <br/> Will never let you go this time (ooh) <br/> I said, ooh, I'm blinded by the lights <br/> No, I can't sleep until I feel your touch <br/> (Hey, hey, hey) <br/> I said, ooh, I'm blinded by the lights <br/> No, I can't sleep until I feel your touch <br/> ";

}


function changesong_CON() {
    buscar2();
    document.getElementById("music").src = "musicas/Congratulations - Post Malone/Post Malone - Congratulations ft. Quavo (320 kbps).mp3";
    document.getElementById("album").src = "musicas/Congratulations - Post Malone/Post Malone - Congratulations.jpg";
    document.getElementById("autor").innerHTML = "Post Malone";
    document.getElementById("nomedamusica").innerHTML = "Congratulations";
    document.getElementById("backgroundgradiente").style.height = "89%";
    document.getElementById("lyrics_position_button").style.display = "block";
    document.getElementById("song_title").style.display = "none";
    document.getElementById("part1").innerHTML = "Mm-mmm <br/> Yeah, yeah <br/> Mm-mmm <br/> Yeah <br/> My momma called, seen you on TV, son <br/> Said shit done changed ever since we was on <br/> I dreamed it all ever since I was young <br/> They said I wouldn't be nothing <br/> Now they always say congratulations <br/> Worked so hard, forgot how to vacation <br/> They ain't never had the dedication <br/> People hatin', say we changed and look, we made it <br/> Yeah, we made it <br/> They was never friendly, yeah <br/> Now I'm jumping out the Bentley, yeah <br/> And I know I sound dramatic, yeah <br/> But I know I had to have it, yeah <br/> For the money, I'm a savage, yeah <br/> I be itching like a addict, yeah <br/> I'm surrounded, twenty bad bitches, yeah <br/> But they didn't know me last year, yeah <br/> Everyone wanna act like they important <br/> (Yeah, yeah, yeah, yeah, yeah, yeah) <br/> But all that mean nothing when I saw my dog <br/> (Yeah, yeah, yeah, yeah, yeah, yeah) <br/> Everyone counting on me, drop the ball <br/> (Yeah, yeah, yeah, yeah, yeah, yeah) <br/> Everything costing like I'm at the bottom, yeah, yeah <br/> If you fuck with winning, put your lighters to the sky <br/> How could I make sense when I got millions on my mind? <br/> Coming with that bullshit, I just put it to the side <br/> Balling since a baby, they could see it in my eyes <br/> My momma called, seen you on TV, son <br/>";
    document.getElementById("part2").innerHTML = "Said shit done changed ever since we was on <br/> I dreamed it all ever since I was young <br/> They said I wouldn't be nothing <br/> Now they always say congratulations <br/> Worked so hard, forgot how to vacation <br/> They ain't never had the dedication <br/> People hatin', say we changed and look we made it <br/> Yeah, we made it <br/> I was patient, yeah, oh <br/> I was patient, aye, oh <br/> Now I can scream that we made it <br/> Now everyone, everywhere I go, they say 'gratulations <br/> Young nigga, young nigga, graduation <br/> I pick up the rock and I ball, baby <br/> I'm looking for someone to call, baby <br/> But right now, I got a situation <br/> Nothing but old Ben-Ben Franklins <br/> Big rings, champagne <br/> My life is like a ball game <br/> But instead, I'm in the trap though <br/> Pot so big, call it Super Bowl <br/> Super Bowl, call the hoes, get in the Rolls <br/> Top-floor lifestyle, Huncho and Post <br/> Malone, I got a play on my phone, aye <br/> You know what I'm on, aye <br/> Huncho Houdini is gone, aye <br/> My momma called, seen you on TV, son <br/> Said shit done changed ever since we was on <br/> I dreamed it all ever since I was young <br/> They said I wouldn't be nothing <br/> Now they always say congratulations <br/> Worked so hard, forgot how to vacation <br/> They ain't never had the dedication <br/> People hatin', say we changed and look we made it <br/> Yeah, we made it <br/> Hey, hey <br/> Hey, hey <br/> Hey, hey <br/> Hey, hey <br/>";
}

function changesong_HW() {
    buscar2();
    document.getElementById("music").src = "musicas/Heat Waves - Glass Animals/Glass Animals - Heat Waves (Official Video) (320 kbps).mp3";
    document.getElementById("album").src = "musicas/Heat Waves - Glass Animals/Heat Waves - Glass Animal.jpg";
    document.getElementById("autor").innerHTML = "Glass Animals";
    document.getElementById("nomedamusica").innerHTML = "Heat Waves";
    document.getElementById("backgroundgradiente").style.height = "89%";
    document.getElementById("lyrics_position_button").style.display = "block";
    document.getElementById("song_title").style.display = "none";
    document.getElementById("part1").innerHTML = "Road shimmer <br/> Wiggling the vision <br/> Heat heat waves <br/> I'm swimming in a mirror <br/> Road shimmer <br/> Wiggling the vision <br/> Heat heat waves <br/> I'm swimming in a <br/> Sometimes, all I think about is you <br/> Late nights in the middle of June <br/> Heat waves been faking me out <br/> Can't make you happier now <br/> Sometimes, all I think about is you <br/> Late nights in the middle of June <br/> Heat waves been faking me out <br/> Can't make you happier now <br/> Usually I put <br/> Something on TV <br/> So we never think <br/> About you and me <br/> But today I see <br/> Our reflections <br/> Clearly in Hollywood <br/> Laying on the screen <br/> You just need a better life than this <br/> You need something I can never give <br/> Fake water all across the road <br/> It's gone now, the night has come, but <br/> Sometimes, all I think about is you <br/> Late nights in the middle of June <br/> Heat waves been faking me out <br/> Can't make you happier now <br/> You can't fight it <br/> You can't breathe <br/> You say something so loving, but <br/> Now I've got to let you go <br/> You'll be better off in someone new <br/> I don't wanna be alone <br/> You know it hurts me too <br/> You look so broken when you cry <br/> One more and then I'll say goodbye <br/> Sometimes, all I think about is you <br/> Late nights in the middle of June <br/> Heat waves been faking me out <br/> Can't make you happier now <br/> Sometimes, all I think about is you <br/> Late nights in the middle of June <br/> Heat waves been faking me out <br/> Can't make you happier now <br/> I just wonder what you're dreaming of <br/> When you sleep and smile so comfortable <br/> I just wish that I could give you that <br/> That look that's perfectly un-sad <br/> Sometimes, all I think about is you <br/> Late nights in the middle of June <br/> Heat waves been faking me out <br/> Heat waves been faking me out <br/> Sometimes, all I think about is you <br/> Late nights in the middle of June <br/> Heat waves been faking me out <br/> Can't make you happier now <br/> Sometimes, all I think about is you <br/> Late nights in the middle of June <br/> Heat waves been faking me out <br/> Can't make you happier now <br/> Road shimmer <br/> Wiggling the vision <br/> Heat heat waves <br/> I'm swimming in a mirror <br/> Road shimmer <br/> Wiggling the vision <br/> Heat heat waves <br/> I'm swimming in a mirror <br/> ";

}

function changesong_L() {
    buscar2();
    document.getElementById("music").src = "musicas/Logic - 1-800-237-8255/Logic - 1-800-273-8255 ft. Alessia Cara, Khalid (Official Video) (320 kbps).mp3";
    document.getElementById("album").src = "musicas/Logic - 1-800-237-8255/Logic.png";
    document.getElementById("autor").innerHTML = "1-800-237-8255";
    document.getElementById("nomedamusica").innerHTML = "Logic";
    document.getElementById("backgroundgradiente").style.height = "89%";
    document.getElementById("lyrics_position_button").style.display = "block";
    document.getElementById("song_title").style.display = "none";
    document.getElementById("part1").innerHTML = "I've been on the low <br/> I been taking my time <br/> I feel like I'm out of my mind <br/> It feel like my life ain't mine <br/> Who can relate? Woo <br/> I've been on the low <br/> I been taking my time <br/> I feel like I'm out of my mind <br/> It feel like my life ain't mine <br/> I don't wanna be alive <br/> I don't wanna be alive <br/> I just wanna die today <br/> I just wanna die <br/> I don't wanna be alive <br/> I don't wanna be alive <br/> I just wanna die <br/> And let me tell you why <br/> All this other shit I'm talkin' 'bout, they think they know it <br/> I've been prayin' for somebody to save me, no one's heroic <br/> And my life don't even matter, I know it, I know it <br/> I know I'm hurtin' deep down but can't show it <br/> I never had a place to call my own <br/> I never had a home, ain't nobody callin' my phone <br/> Where you been? Where you at? What's on your mind? <br/> They say every life precious but nobody care about mine <br/> I've been on the low <br/> I been taking my time <br/> I feel like I'm out of my mind <br/> It feel like my life ain't mine <br/> Who can relate? Woo <br/> I've been on the low <br/> I been taking my time <br/> I feel like I'm out of my mind <br/> It feel like my life ain't mine <br/> I want you to be alive <br/> I want you to be alive <br/> You don't gotta die today <br/> You don't gotta die <br/> I want you to be alive <br/> I want you to be alive <br/> You don't gotta die <br/> Now let me tell you why <br/> It's the very first breath <br/> When your head's been drownin' underwater";
    document.getElementById("part2").innerHTML = "And it's the lightness in the air <br/> When you're there, chest to chest with a lover <br/> It's holdin' on, though the road's long <br/> And seein' light in the darkest things <br/> And when you stare at your reflection, finally knowin' who it is <br/> I know that you'll thank God you did <br/> I know where you been, where you are, where you goin' (yeah, yeah) <br/> I know you're the reason I believe in life <br/> What's the day without a little night? <br/> I'm just tryna shed a little light <br/> It can be hard <br/> It can be so hard <br/> But you gotta live right now <br/> You got everything to give right now <br/> I've been on the low <br/> I been taking my time <br/> I feel like I'm out of my mind <br/> It feel like my life ain't mine <br/> Who can relate? Woo <br/> I've been on the low <br/> I been taking my time <br/> I feel like I'm out of my mind <br/> It feel like my life ain't mine <br/> I finally wanna be alive (finally wanna be alive) <br/> I finally wanna be alive (hey) <br/> I don't wanna die today <br/> I don't wanna die <br/> I finally wanna be alive (finally wanna be alive) <br/> I finally wanna be alive (oh) <br/> I don't wanna die (no, I don't wanna die) <br/> I don't wanna die <br/> (I just wanna live) <br/> (I just wanna live) <br/> Pain don't hurt the same, I know <br/> The lane I travel feels alone <br/> But I'm moving 'til my legs give out <br/> And I see my tears melt in the snow <br/> But I don't wanna cry <br/> I don't wanna cry anymore <br/> I wanna feel alive <br/> I don't even wanna die anymore <br/> Oh, I don't wanna <br/> I don't wanna <br/> I don't even wanna die anymore <br/> ";

}

function changesong_ML() {
    buscar2();
    document.getElementById("music").src = "musicas/Major Lazer - Know No Better/Major Lazer – Know No Better (Lyrics) ft. Camila Cabello, Travis Scott, Quavo (320 kbps).mp3";
    document.getElementById("album").src = "musicas/Major Lazer - Know No Better/major-lazer-know-no-better-59490a464cff5.jpg";
    document.getElementById("autor").innerHTML = "Major Lazer";
    document.getElementById("nomedamusica").innerHTML = "Know No Better";
    document.getElementById("backgroundgradiente").style.height = "89%";
    document.getElementById("lyrics_position_button").style.display = "block";
    document.getElementById("song_title").style.display = "none";
    document.getElementById("part1").innerHTML = "Yeah <br/> Straight up! <br/> Wrist lookin' like it been dipped <br/> Dipped in that, dipped in that, dipped in that <br/> Script lookin' like it been flipped <br/> Flippin' that, flippin' that, flippin' that <br/> Pull up in that foreign, my God <br/> Whole squad get in that, get in that <br/> Please say it ain't true <br/> I had to go and cop two <br/> Hell nah, we can't fit in that <br/> Wild ones, like we fresh out the cage <br/> Showtime baby, fresh off the stage <br/> Bad lil' mama, fresh off the page <br/> Front like you love it, but you know that you hate it <br/> Yeah you know no better (no better) <br/> Yeah you know no better <br/> Yeah you know no better, ooh <br/> Yeah, you know no better <br/> Say you different, who you kidding? <br/> Yeah, you know no better <br/> O-oh, save that talk for the ones who don't know no better <br/> 'Cause baby I know you better <br/> 'Cause baby I know no better <br/> Baby I know you better (baby I know) <br/> Baby I know you better <br/> Baby I know you better (straight up) <br/> Baby I know you better <br/> Baby I know, I know no better <br/> Top dropped off on my whip <br/> Wippin' that, wippin' that, wippin' that <br/> Yellow and that purple on mix <br/> Mixin' that, mixin' that, mixin' that <br/> Copped my bitch from the tropics (yeah) <br/> You know where she sitting at <br/> Taking shots, pouring bottle after bottle after bottle <br/> Hell nah, we ain't sipping that ";
    document.getElementById("part2").innerHTML = "Wild ones, like we fresh out the cage <br/> Showtime baby, fresh off the stage <br/> Bad lil' mama, fresh off the page <br/> Front like you love it, but you know that you hate it <br/> Yeah you know no better (no better) <br/> Yeah you know no better <br/> Yeah you know no better, ooh <br/> Yeah, you know no better <br/> Say you different, who you kidding? <br/> Yeah, you know no better <br/> O-oh, save that talk for the ones who don't know no better <br/> 'Cause baby I know you better <br/> 'Cause baby I know no better <br/> Baby I know you better (baby I know) <br/> Baby I know you better <br/> Baby I know you better <br/> Baby I know you better <br/> Baby I know, I know no better <br/> Quavo! <br/> Drop top on the whip (drop top) <br/> Dab of ranch on the chips (dab) <br/> Ice cream gave her chills (ice cream) <br/> Too much cash pay the bills <br/> I make her ride Mercedes (skrr skrr) <br/> I can afford the latest <br/> Baby ignore the ratings (ignore 'em) <br/> Just pull up, we pop out, we raging <br/> We know no better (no) <br/> Stack my bread up (stack) <br/> Don't get fed up (nope) <br/> Ain't gonna let up (yeah) <br/> You told me to shut up (shut up) <br/> But I'ma do better (huh?) <br/> It's not my race (woo!) <br/> Get out my face (get out) <br/> Drop my case (drop it) <br/> Which way? (where?) <br/> Dat way <br/> Yeah, you know no better <br/> Say you different, who you kidding? <br/> Yeah, you know no better <br/> O-oh, save that talk for the ones who don't know no better <br/> 'Cause baby I know you better <br/> Baby I know you better (straight up) <br/> Baby I know you better <br/> Baby I know you better <br/> Baby I know you better <br/> Baby I know, I know no better <br/> ";

}

function changesong_DT() {
    buscar2();
    document.getElementById("music").src = "musicas/No Idea - Don Toliver/Don Toliver - No Idea [Official Music Video] (320 kbps).mp3";
    document.getElementById("album").src = "musicas/No Idea - Don Toliver/No Idea - Don Toliver.jpg";
    document.getElementById("autor").innerHTML = "Don Toliver";
    document.getElementById("nomedamusica").innerHTML = "No Idea";
    document.getElementById("backgroundgradiente").style.height = "89%";
    document.getElementById("lyrics_position_button").style.display = "block";
    document.getElementById("song_title").style.display = "none";
    document.getElementById("part1").innerHTML = "I know, I know, I know that you're drunk (yeah) <br/> Tell me what you want after this club (oh) <br/> You know I get nasty (know I get nasty) <br/> Uber ride to my house, I called a taxi (Uber ride to my house, yeah) <br/> I'm picky with my women, I'm deciding (oh) <br/> Call me to your crib and I'm sliding (yeah) <br/> I'm picky with my women, I'm deciding (oh) <br/> Call me to your crib and I'm sliding (call me to your crib and I'm) <br/> First things first let me get that introduction (let me get that intro) <br/> We on a long road to self destruction (self destruction) <br/> You were so in love <br/> You weren't gon' tell me nothing (you were so in love) <br/> Let me get this clear (uh, huh), 'cause I had no idea (yeah) <br/> Feeling like I did too much (much) <br/> I'm feeling like I did too much (much) <br/> Well let's get naughtier (naughtier), yeah I mean naughtier (naughtier) <br/> I'm feeling like I did too much (much) <br/> I'm feeling like I did too much (much) <br/> Yeah, let's party, yeah (party, yeah) <br/> Yeah, I need all of ya (all of ya) <br/> Uh, uh, uh, uh, yeah <br/> Uh, uh, uh, uh, yeah <br/> Uh, uh, uh, uh, yeah <br/> Uh, uh, uh, uh, yeah <br/> Uh, uh, uh, uh, yeah <br/> Uh, uh, uh, uh, yeah <br/> Uh, uh, uh, uh, yeah <br/> Uh, uh, uh, uh, yeah <br/> First things first let me get that introduction <br/> We on a long road to self destruction <br/> You were so in love, you weren't gon' tell me nothing <br/> Let me get this clear 'cause I had no idea <br/> Feeling like I did too much <br/> I'm feeling like I did too much <br/> Well let's get naughtier, yeah I mean naughtier <br/> I'm feeling like I did too much <br/> I'm feeling like I did too much <br/> Yeah, let's party, yeah <br/> Yeah, I need all of ya (all of ya) <br/> Since you've been gone, I've been just okay <br/> I know you mad, you didn't see it my way <br/> Since I've been gone, I've been out of space <br/> I let lil' Shawty, come here, take your place <br/> Ooh, you got it (got it) <br/> You couldn't keep my love, you too exotic (couldn't keep my love, yeah) <br/> You want a paper plane, I don't mind (you want a paper plane, yeah) <br/> I wonder why your girl always smiling (wonder why your girl, yeah) <br/> ";

}

function changesong_ROM() {
    buscar2();
    document.getElementById("music").src = "musicas/Rain on me - Lady Gaga/Lady Gaga, Ariana Grande - Rain On Me (Official Music Video) (320 kbps).mp3";
    document.getElementById("album").src = "musicas/Rain on me - Lady Gaga/Lady gaga, Ariana Grande - Rain on Me.png";
    document.getElementById("autor").innerHTML = "Lady Gaga, Ariana Grande";
    document.getElementById("nomedamusica").innerHTML = "Rain on me";
    document.getElementById("backgroundgradiente").style.height = "89%";
    document.getElementById("lyrics_position_button").style.display = "block";
    document.getElementById("song_title").style.display = "none";
    document.getElementById("part1").innerHTML = "I didn't ask for a free ride <br/> I only asked you to show me a real good time <br/> I never asked for the rainfall <br/> At least I showed up, you showed me nothing at all <br/> It's coming down on me <br/> Water like misery <br/> It's coming down on me <br/> I'm ready, rain on me <br/> I'd rather be dry, but at least I'm alive <br/> Rain on me, rain, rain <br/> Rain on me, rain, rain <br/> I'd rather be dry, but at least I'm alive <br/> Rain on me, rain, rain <br/> Rain on me <br/> Rain on me <br/> Mmh, oh yeah, baby <br/> Rain on me <br/> Livin' in a world where no one's innocent <br/> Oh, but at least we try, mmh <br/> Gotta live my truth, not keep it bottled in <br/> So I don't lose my mind, baby, yeah <br/> I can feel it on my skin (It's coming down on me) <br/> Teardrops on my face (Water like misery) <br/> Let it wash away my sins (It's coming down on me) <br/> Let it wash away, yeah <br/> I'd rather be dry, but at least I'm alive <br/> Rain on me, rain, rain <br/> Rain on me, rain, rain <br/> I'd rather be dry, but at least I'm alive <br/> Rain on me, rain, rain <br/> Rain (Rain) on (On) me <br/> Rain on me <br/> Rain on me <br/> Oh yeah, yeah <br/> Rain on me, ooh yeah <br/> Rain on me <br/> Rain on me, ooh <br/> Hands up to the sky <br/> I'll be your galaxy <br/> I'm about to fly <br/> Rain on me, tsunami <br/> Hands up to the sky <br/> I'll be your galaxy <br/> I'm about to fly <br/> Rain on me (Rain on me) <br/> I'd rather be dry, but at least I'm alive (Rain on me) <br/> Rain on me, rain, rain <br/> Rain on me, rain, rain (Rain on me) <br/> I'd rather be dry, but at least I'm alive (At least I'm alive) <br/> Rain on me, rain, rain (Rain on me) <br/> Rain on me (Rain on me) <br/> I hear the thunder coming down <br/> Won't you rain on me? <br/> Eh, eh, yeah (Rain on, woo) <br/> I hear the thunder coming down <br/> Won't you rain on me? <br/> Eh, eh, yeah <br/> Rain on me <br/> ";

}

function changesong_SS() {
    buscar2();
    document.getElementById("music").src = "musicas/Summertime Sadness - Lana Del Rey/Lana Del Rey - Summertime Sadness (Official Music Video) (320 kbps).mp3";
    document.getElementById("album").src = "musicas/Summertime Sadness - Lana Del Rey/Summertime Sadness - Lana Del Rey.jpg";
    document.getElementById("autor").innerHTML = "Lana Del Rey";
    document.getElementById("nomedamusica").innerHTML = "Summertime Sadness";
    document.getElementById("backgroundgradiente").style.height = "89%";
    document.getElementById("lyrics_position_button").style.display = "block";
    document.getElementById("song_title").style.display = "none";
    document.getElementById("part1").innerHTML = " Kiss me hard before you go <br/> Summertime sadness <br/> I just wanted you to know <br/> That baby, you the best <br/> I got my red dress on tonight <br/> Dancin' in the dark, in the pale moonlight <br/> Done my hair up real big, beauty queen style <br/> High heels off, I'm feelin' alive <br/> Oh, my God, I feel it in the air <br/> Telephone wires above are sizzlin' like a snare <br/> Honey, I'm on fire, I feel it everywhere <br/> Nothin' scares me anymore <br/> (One, two, three, four) <br/> Kiss me hard before you go <br/> Summertime sadness <br/> I just wanted you to know <br/> That baby, you the best <br/> I got that summertime, summertime sadness <br/> Su-su-summertime, summertime sadness <br/> Got that summertime, summertime sadness <br/> Oh, oh-oh, oh-oh <br/> I'm feelin' electric tonight <br/> Cruisin' down the coast, goin' about 99 <br/> Got my bad baby by my heavenly side <br/> I know if I go, I'll die happy tonight <br/> Oh, my God, I feel it in the air <br/> Telephone wires above are sizzlin' like a snare <br/> Honey, I'm on fire, I feel it everywhere <br/> Nothin' scares me anymore <br/> (One, two, three, four) <br/> Kiss me hard before you go <br/> Summertime sadness <br/> I just wanted you to know <br/> That baby, you the best <br/> I got that summertime, summertime sadness <br/> Su-su-summertime, summertime sadness <br/> Got that summertime, summertime sadness <br/> Oh, oh-oh, oh-oh <br/> Think I'll miss you forever <br/> Like the stars miss the sun in the morning sky <br/> Later's better than never <br/> Even if you're gone, I'm gonna drive (drive), drive <br/> I got that summertime, summertime sadness <br/> Su-su-summertime, summertime sadness <br/> Got that summertime, summertime sadness <br/> Oh, oh-oh, oh-oh <br/> Kiss me hard before you go <br/> Summertime sadness <br/> I just wanted you to know <br/> That baby, you the best <br/> I got that summertime, summertime sadness <br/> Su-su-summertime, summertime sadness <br/> Got that summertime, summertime sadness <br/> Oh, oh-oh, oh-oh <br/> ";

}

function changesong_UTI() {
    buscar2();
    document.getElementById("music").src = "musicas/Under the Influence - Chis Brown/Chris Brown - Under The Influence (Audio) (320 kbps).mp3";
    document.getElementById("album").src = "musicas/Under the Influence - Chis Brown/Under Influence - Chris Brown.jpg";
    document.getElementById("autor").innerHTML = "Chris Brown";
    document.getElementById("nomedamusica").innerHTML = "Under the Influence";
    document.getElementById("backgroundgradiente").style.height = "89%";
    document.getElementById("lyrics_position_button").style.display = "block";
    document.getElementById("song_title").style.display = "none";
    document.getElementById("part1").innerHTML = "Get up, get up <br/> Kiddominant on the beat, better run it back <br/> Fuckin' Robitussin <br/> I don't know why this shit got me lazy right now, yeah <br/> Can't do Percocets or Molly <br/> I'm turnin' one, tryna live it up here right, right, right <br/> Baby, you can <br/> Ride it, ooh, yeah <br/> Bring it over to my place <br/> And you be like <br/> 'Baby, who cares?' <br/> But I know you care <br/> Bring it over to my place <br/> You don't know what you did, did to me <br/> Your body lightweight speaks to me <br/> I don't know what you did, did to me <br/> Your body lightweight speaks to me <br/> I can make it hurricane on it <br/> Hunnid bands, make it rain on it <br/> Tie it up, put a chain on it <br/> Make you tattoo my name on it, oh <br/> Make you cry like a baby, yeah <br/> Let's GoPro and make a video, yeah <br/> Make you cry like a baby, yeah <br/> Let's GoPro and make a video <br/> Oh, yeah, yeah, yeah, yeah <br/> Baby, you can <br/> Ride it, ooh, yeah <br/> Bring it over to my place <br/> And you be like <br/> 'Baby, who cares?' <br/> But I know you care <br/> Bring it over to my place <br/> You don't know what you did, did to me <br/> Your body lightweight speaks to me <br/> I don't know what you did, did to me <br/> Your body lightweight speaks to me <br/> Baby, you can <br/> Ride it, ooh, yeah <br/> And you be like <br/> 'Baby, who cares?' <br/> But I know you care <br/> ";

}




function changesong() {

    var musica = document.getElementById("search_text").value;
    if (musica == "Blinding Lights") {
        document.getElementById("music").src = "musicas/Blinding Lights - The Weekend/The Weeknd - Blinding Lights (Official Video) (320 kbps).mp3";
        document.getElementById("album").src = "musicas/Blinding Lights - The Weekend/Blinding Lights - The Weekend.jpg";
        document.getElementById("autor").innerHTML = "The Weekend";
        document.getElementById("nomedamusica").innerHTML = "Blinding Lights";
        document.getElementById("backgroundgradiente").style.height = "89%";
        document.getElementById("lyrics_position_button").style.display = "block";
        document.getElementById("song_title").style.display = "none";
        document.getElementById("part1").innerHTML = "Yeah <br/> I've been tryna call <br/> I've been on my own for long enough <br/> Maybe you can show me how to love, maybe  <br/> I'm going through withdrawals  <br/> You don't even have to do too much  <br/> You can turn me on with just a touch, baby  <br/> I look around and  <br/> Sin City's cold and empty (oh)  <br/> No one's around to judge me (oh)  <br/> I can't see clearly when you're gone <br/> I said, ooh, I'm blinded by the lights <br/> No, I can't sleep until I feel your touch <br/> I said, ooh, I'm drowning in the night <br/> Oh, when I'm like this, you're the one I trust <br/> (Hey, hey, hey) <br/> I'm running out of time <br/> 'Cause I can see the sun light up the sky <br/> So I hit the road in overdrive, baby, oh <br/> The city's cold and empty (oh) <br/> No one's around to judge me (oh) <br/> I can't see clearly when you're gone <br/> I said, ooh, I'm blinded by the lights <br/> No, I can't sleep until I feel your touch <br/> I said, ooh, I'm drowning in the night <br/> Oh, when I'm like this, you're the one I trust <br/> I'm just walking by to let you know (by to let you know) <br/> I can never say it on the phone (say it on the phone) <br/> Will never let you go this time (ooh) <br/> I said, ooh, I'm blinded by the lights <br/> No, I can't sleep until I feel your touch <br/> (Hey, hey, hey) <br/> I said, ooh, I'm blinded by the lights <br/> No, I can't sleep until I feel your touch <br/> ";

    } else if (musica == "Congratulations") {
        document.getElementById("music").src = "musicas/Congratulations - Post Malone/Post Malone - Congratulations ft. Quavo (320 kbps).mp3";
        document.getElementById("album").src = "musicas/Congratulations - Post Malone/Post Malone - Congratulations.jpg";
        document.getElementById("autor").innerHTML = "Post Malone";
        document.getElementById("nomedamusica").innerHTML = "Congratulations";
        document.getElementById("backgroundgradiente").style.height = "89%";
        document.getElementById("lyrics_position_button").style.display = "block";
        document.getElementById("song_title").style.display = "none";
        document.getElementById("part1").innerHTML = "Mm-mmm <br/> Yeah, yeah <br/> Mm-mmm <br/> Yeah <br/> My momma called, seen you on TV, son <br/> Said shit done changed ever since we was on <br/> I dreamed it all ever since I was young <br/> They said I wouldn't be nothing <br/> Now they always say congratulations <br/> Worked so hard, forgot how to vacation <br/> They ain't never had the dedication <br/> People hatin', say we changed and look, we made it <br/> Yeah, we made it <br/> They was never friendly, yeah <br/> Now I'm jumping out the Bentley, yeah <br/> And I know I sound dramatic, yeah <br/> But I know I had to have it, yeah <br/> For the money, I'm a savage, yeah <br/> I be itching like a addict, yeah <br/> I'm surrounded, twenty bad bitches, yeah <br/> But they didn't know me last year, yeah <br/> Everyone wanna act like they important <br/> (Yeah, yeah, yeah, yeah, yeah, yeah) <br/> But all that mean nothing when I saw my dog <br/> (Yeah, yeah, yeah, yeah, yeah, yeah) <br/> Everyone counting on me, drop the ball <br/> (Yeah, yeah, yeah, yeah, yeah, yeah) <br/> Everything costing like I'm at the bottom, yeah, yeah <br/> If you fuck with winning, put your lighters to the sky <br/> How could I make sense when I got millions on my mind? <br/> Coming with that bullshit, I just put it to the side <br/> Balling since a baby, they could see it in my eyes <br/> My momma called, seen you on TV, son <br/>";
        document.getElementById("part2").innerHTML = "Said shit done changed ever since we was on <br/> I dreamed it all ever since I was young <br/> They said I wouldn't be nothing <br/> Now they always say congratulations <br/> Worked so hard, forgot how to vacation <br/> They ain't never had the dedication <br/> People hatin', say we changed and look we made it <br/> Yeah, we made it <br/> I was patient, yeah, oh <br/> I was patient, aye, oh <br/> Now I can scream that we made it <br/> Now everyone, everywhere I go, they say 'gratulations <br/> Young nigga, young nigga, graduation <br/> I pick up the rock and I ball, baby <br/> I'm looking for someone to call, baby <br/> But right now, I got a situation <br/> Nothing but old Ben-Ben Franklins <br/> Big rings, champagne <br/> My life is like a ball game <br/> But instead, I'm in the trap though <br/> Pot so big, call it Super Bowl <br/> Super Bowl, call the hoes, get in the Rolls <br/> Top-floor lifestyle, Huncho and Post <br/> Malone, I got a play on my phone, aye <br/> You know what I'm on, aye <br/> Huncho Houdini is gone, aye <br/> My momma called, seen you on TV, son <br/> Said shit done changed ever since we was on <br/> I dreamed it all ever since I was young <br/> They said I wouldn't be nothing <br/> Now they always say congratulations <br/> Worked so hard, forgot how to vacation <br/> They ain't never had the dedication <br/> People hatin', say we changed and look we made it <br/> Yeah, we made it <br/> Hey, hey <br/> Hey, hey <br/> Hey, hey <br/> Hey, hey <br/>";


    } else if (musica == "Heat Waves") {
        document.getElementById("music").src = "musicas/Heat Waves - Glass Animals/Glass Animals - Heat Waves (Official Video) (320 kbps).mp3";
        document.getElementById("album").src = "musicas/Heat Waves - Glass Animals/Heat Waves - Glass Animal.jpg";
        document.getElementById("autor").innerHTML = "Glass Animals";
        document.getElementById("nomedamusica").innerHTML = "Heat Waves";
        document.getElementById("backgroundgradiente").style.height = "89%";
        document.getElementById("lyrics_position_button").style.display = "block";
        document.getElementById("song_title").style.display = "none";
        document.getElementById("part1").innerHTML = "Road shimmer <br/> Wiggling the vision <br/> Heat heat waves <br/> I'm swimming in a mirror <br/> Road shimmer <br/> Wiggling the vision <br/> Heat heat waves <br/> I'm swimming in a <br/> Sometimes, all I think about is you <br/> Late nights in the middle of June <br/> Heat waves been faking me out <br/> Can't make you happier now <br/> Sometimes, all I think about is you <br/> Late nights in the middle of June <br/> Heat waves been faking me out <br/> Can't make you happier now <br/> Usually I put <br/> Something on TV <br/> So we never think <br/> About you and me <br/> But today I see <br/> Our reflections <br/> Clearly in Hollywood <br/> Laying on the screen <br/> You just need a better life than this <br/> You need something I can never give <br/> Fake water all across the road <br/> It's gone now, the night has come, but <br/> Sometimes, all I think about is you <br/> Late nights in the middle of June <br/> Heat waves been faking me out <br/> Can't make you happier now <br/> You can't fight it <br/> You can't breathe <br/> You say something so loving, but <br/> Now I've got to let you go <br/> You'll be better off in someone new <br/> I don't wanna be alone <br/> You know it hurts me too <br/> You look so broken when you cry <br/> One more and then I'll say goodbye <br/> Sometimes, all I think about is you <br/> Late nights in the middle of June <br/> Heat waves been faking me out <br/> Can't make you happier now <br/> Sometimes, all I think about is you <br/> Late nights in the middle of June <br/> Heat waves been faking me out <br/> Can't make you happier now <br/> I just wonder what you're dreaming of <br/> When you sleep and smile so comfortable <br/> I just wish that I could give you that <br/> That look that's perfectly un-sad <br/> Sometimes, all I think about is you <br/> Late nights in the middle of June <br/> Heat waves been faking me out <br/> Heat waves been faking me out <br/> Sometimes, all I think about is you <br/> Late nights in the middle of June <br/> Heat waves been faking me out <br/> Can't make you happier now <br/> Sometimes, all I think about is you <br/> Late nights in the middle of June <br/> Heat waves been faking me out <br/> Can't make you happier now <br/> Road shimmer <br/> Wiggling the vision <br/> Heat heat waves <br/> I'm swimming in a mirror <br/> Road shimmer <br/> Wiggling the vision <br/> Heat heat waves <br/> I'm swimming in a mirror <br/> ";

    } else if (musica == "Logic") {
        document.getElementById("music").src = "musicas/Logic - 1-800-237-8255/Logic - 1-800-273-8255 ft. Alessia Cara, Khalid (Official Video) (320 kbps).mp3";
        document.getElementById("album").src = "musicas/Logic - 1-800-237-8255/Logic.png";
        document.getElementById("autor").innerHTML = "1-800-237-8255";
        document.getElementById("nomedamusica").innerHTML = "Logic";
        document.getElementById("backgroundgradiente").style.height = "89%";
        document.getElementById("lyrics_position_button").style.display = "block";
        document.getElementById("song_title").style.display = "none";
        document.getElementById("part1").innerHTML = "I've been on the low <br/> I been taking my time <br/> I feel like I'm out of my mind <br/> It feel like my life ain't mine <br/> Who can relate? Woo <br/> I've been on the low <br/> I been taking my time <br/> I feel like I'm out of my mind <br/> It feel like my life ain't mine <br/> I don't wanna be alive <br/> I don't wanna be alive <br/> I just wanna die today <br/> I just wanna die <br/> I don't wanna be alive <br/> I don't wanna be alive <br/> I just wanna die <br/> And let me tell you why <br/> All this other shit I'm talkin' 'bout, they think they know it <br/> I've been prayin' for somebody to save me, no one's heroic <br/> And my life don't even matter, I know it, I know it <br/> I know I'm hurtin' deep down but can't show it <br/> I never had a place to call my own <br/> I never had a home, ain't nobody callin' my phone <br/> Where you been? Where you at? What's on your mind? <br/> They say every life precious but nobody care about mine <br/> I've been on the low <br/> I been taking my time <br/> I feel like I'm out of my mind <br/> It feel like my life ain't mine <br/> Who can relate? Woo <br/> I've been on the low <br/> I been taking my time <br/> I feel like I'm out of my mind <br/> It feel like my life ain't mine <br/> I want you to be alive <br/> I want you to be alive <br/> You don't gotta die today <br/> You don't gotta die <br/> I want you to be alive <br/> I want you to be alive <br/> You don't gotta die <br/> Now let me tell you why <br/> It's the very first breath <br/> When your head's been drownin' underwater";
        document.getElementById("part2").innerHTML = "And it's the lightness in the air <br/> When you're there, chest to chest with a lover <br/> It's holdin' on, though the road's long <br/> And seein' light in the darkest things <br/> And when you stare at your reflection, finally knowin' who it is <br/> I know that you'll thank God you did <br/> I know where you been, where you are, where you goin' (yeah, yeah) <br/> I know you're the reason I believe in life <br/> What's the day without a little night? <br/> I'm just tryna shed a little light <br/> It can be hard <br/> It can be so hard <br/> But you gotta live right now <br/> You got everything to give right now <br/> I've been on the low <br/> I been taking my time <br/> I feel like I'm out of my mind <br/> It feel like my life ain't mine <br/> Who can relate? Woo <br/> I've been on the low <br/> I been taking my time <br/> I feel like I'm out of my mind <br/> It feel like my life ain't mine <br/> I finally wanna be alive (finally wanna be alive) <br/> I finally wanna be alive (hey) <br/> I don't wanna die today <br/> I don't wanna die <br/> I finally wanna be alive (finally wanna be alive) <br/> I finally wanna be alive (oh) <br/> I don't wanna die (no, I don't wanna die) <br/> I don't wanna die <br/> (I just wanna live) <br/> (I just wanna live) <br/> Pain don't hurt the same, I know <br/> The lane I travel feels alone <br/> But I'm moving 'til my legs give out <br/> And I see my tears melt in the snow <br/> But I don't wanna cry <br/> I don't wanna cry anymore <br/> I wanna feel alive <br/> I don't even wanna die anymore <br/> Oh, I don't wanna <br/> I don't wanna <br/> I don't even wanna die anymore <br/> ";

    } else if (musica == "Know No Better") {
        document.getElementById("music").src = "musicas/Major Lazer - Know No Better/Major Lazer – Know No Better (Lyrics) ft. Camila Cabello, Travis Scott, Quavo (320 kbps).mp3";
        document.getElementById("album").src = "musicas/Major Lazer - Know No Better/major-lazer-know-no-better-59490a464cff5.jpg";
        document.getElementById("autor").innerHTML = "Major Lazer";
        document.getElementById("nomedamusica").innerHTML = "Know No Better";
        document.getElementById("backgroundgradiente").style.height = "89%";
        document.getElementById("lyrics_position_button").style.display = "block";
        document.getElementById("song_title").style.display = "none";
        document.getElementById("part1").innerHTML = "Yeah <br/> Straight up! <br/> Wrist lookin' like it been dipped <br/> Dipped in that, dipped in that, dipped in that <br/> Script lookin' like it been flipped <br/> Flippin' that, flippin' that, flippin' that <br/> Pull up in that foreign, my God <br/> Whole squad get in that, get in that <br/> Please say it ain't true <br/> I had to go and cop two <br/> Hell nah, we can't fit in that <br/> Wild ones, like we fresh out the cage <br/> Showtime baby, fresh off the stage <br/> Bad lil' mama, fresh off the page <br/> Front like you love it, but you know that you hate it <br/> Yeah you know no better (no better) <br/> Yeah you know no better <br/> Yeah you know no better, ooh <br/> Yeah, you know no better <br/> Say you different, who you kidding? <br/> Yeah, you know no better <br/> O-oh, save that talk for the ones who don't know no better <br/> 'Cause baby I know you better <br/> 'Cause baby I know no better <br/> Baby I know you better (baby I know) <br/> Baby I know you better <br/> Baby I know you better (straight up) <br/> Baby I know you better <br/> Baby I know, I know no better <br/> Top dropped off on my whip <br/> Wippin' that, wippin' that, wippin' that <br/> Yellow and that purple on mix <br/> Mixin' that, mixin' that, mixin' that <br/> Copped my bitch from the tropics (yeah) <br/> You know where she sitting at <br/> Taking shots, pouring bottle after bottle after bottle <br/> Hell nah, we ain't sipping that ";
        document.getElementById("part2").innerHTML = "Wild ones, like we fresh out the cage <br/> Showtime baby, fresh off the stage <br/> Bad lil' mama, fresh off the page <br/> Front like you love it, but you know that you hate it <br/> Yeah you know no better (no better) <br/> Yeah you know no better <br/> Yeah you know no better, ooh <br/> Yeah, you know no better <br/> Say you different, who you kidding? <br/> Yeah, you know no better <br/> O-oh, save that talk for the ones who don't know no better <br/> 'Cause baby I know you better <br/> 'Cause baby I know no better <br/> Baby I know you better (baby I know) <br/> Baby I know you better <br/> Baby I know you better <br/> Baby I know you better <br/> Baby I know, I know no better <br/> Quavo! <br/> Drop top on the whip (drop top) <br/> Dab of ranch on the chips (dab) <br/> Ice cream gave her chills (ice cream) <br/> Too much cash pay the bills <br/> I make her ride Mercedes (skrr skrr) <br/> I can afford the latest <br/> Baby ignore the ratings (ignore 'em) <br/> Just pull up, we pop out, we raging <br/> We know no better (no) <br/> Stack my bread up (stack) <br/> Don't get fed up (nope) <br/> Ain't gonna let up (yeah) <br/> You told me to shut up (shut up) <br/> But I'ma do better (huh?) <br/> It's not my race (woo!) <br/> Get out my face (get out) <br/> Drop my case (drop it) <br/> Which way? (where?) <br/> Dat way <br/> Yeah, you know no better <br/> Say you different, who you kidding? <br/> Yeah, you know no better <br/> O-oh, save that talk for the ones who don't know no better <br/> 'Cause baby I know you better <br/> Baby I know you better (straight up) <br/> Baby I know you better <br/> Baby I know you better <br/> Baby I know you better <br/> Baby I know, I know no better <br/> ";


    } else if (musica == "No Idea") {
        document.getElementById("music").src = "musicas/No Idea - Don Toliver/Don Toliver - No Idea [Official Music Video] (320 kbps).mp3";
        document.getElementById("album").src = "musicas/No Idea - Don Toliver/No Idea - Don Toliver.jpg";
        document.getElementById("autor").innerHTML = "Don Toliver";
        document.getElementById("nomedamusica").innerHTML = "No Idea";
        document.getElementById("backgroundgradiente").style.height = "89%";
        document.getElementById("lyrics_position_button").style.display = "block";
        document.getElementById("song_title").style.display = "none";
        document.getElementById("part1").innerHTML = "I know, I know, I know that you're drunk (yeah) <br/> Tell me what you want after this club (oh) <br/> You know I get nasty (know I get nasty) <br/> Uber ride to my house, I called a taxi (Uber ride to my house, yeah) <br/> I'm picky with my women, I'm deciding (oh) <br/> Call me to your crib and I'm sliding (yeah) <br/> I'm picky with my women, I'm deciding (oh) <br/> Call me to your crib and I'm sliding (call me to your crib and I'm) <br/> First things first let me get that introduction (let me get that intro) <br/> We on a long road to self destruction (self destruction) <br/> You were so in love <br/> You weren't gon' tell me nothing (you were so in love) <br/> Let me get this clear (uh, huh), 'cause I had no idea (yeah) <br/> Feeling like I did too much (much) <br/> I'm feeling like I did too much (much) <br/> Well let's get naughtier (naughtier), yeah I mean naughtier (naughtier) <br/> I'm feeling like I did too much (much) <br/> I'm feeling like I did too much (much) <br/> Yeah, let's party, yeah (party, yeah) <br/> Yeah, I need all of ya (all of ya) <br/> Uh, uh, uh, uh, yeah <br/> Uh, uh, uh, uh, yeah <br/> Uh, uh, uh, uh, yeah <br/> Uh, uh, uh, uh, yeah <br/> Uh, uh, uh, uh, yeah <br/> Uh, uh, uh, uh, yeah <br/> Uh, uh, uh, uh, yeah <br/> Uh, uh, uh, uh, yeah <br/> First things first let me get that introduction <br/> We on a long road to self destruction <br/> You were so in love, you weren't gon' tell me nothing <br/> Let me get this clear 'cause I had no idea <br/> Feeling like I did too much <br/> I'm feeling like I did too much <br/> Well let's get naughtier, yeah I mean naughtier <br/> I'm feeling like I did too much <br/> I'm feeling like I did too much <br/> Yeah, let's party, yeah <br/> Yeah, I need all of ya (all of ya) <br/> Since you've been gone, I've been just okay <br/> I know you mad, you didn't see it my way <br/> Since I've been gone, I've been out of space <br/> I let lil' Shawty, come here, take your place <br/> Ooh, you got it (got it) <br/> You couldn't keep my love, you too exotic (couldn't keep my love, yeah) <br/> You want a paper plane, I don't mind (you want a paper plane, yeah) <br/> I wonder why your girl always smiling (wonder why your girl, yeah) <br/> ";

    } else if (musica == "Rain On Me") {
        document.getElementById("music").src = "musicas/Rain on me - Lady Gaga/Lady Gaga, Ariana Grande - Rain On Me (Official Music Video) (320 kbps).mp3";
        document.getElementById("album").src = "musicas/Rain on me - Lady Gaga/Lady gaga, Ariana Grande - Rain on Me.png";
        document.getElementById("autor").innerHTML = "Lady Gaga, Ariana Grande";
        document.getElementById("nomedamusica").innerHTML = "Rain on me";
        document.getElementById("backgroundgradiente").style.height = "89%";
        document.getElementById("lyrics_position_button").style.display = "block";
        document.getElementById("song_title").style.display = "none";
        document.getElementById("part1").innerHTML = "I didn't ask for a free ride <br/> I only asked you to show me a real good time <br/> I never asked for the rainfall <br/> At least I showed up, you showed me nothing at all <br/> It's coming down on me <br/> Water like misery <br/> It's coming down on me <br/> I'm ready, rain on me <br/> I'd rather be dry, but at least I'm alive <br/> Rain on me, rain, rain <br/> Rain on me, rain, rain <br/> I'd rather be dry, but at least I'm alive <br/> Rain on me, rain, rain <br/> Rain on me <br/> Rain on me <br/> Mmh, oh yeah, baby <br/> Rain on me <br/> Livin' in a world where no one's innocent <br/> Oh, but at least we try, mmh <br/> Gotta live my truth, not keep it bottled in <br/> So I don't lose my mind, baby, yeah <br/> I can feel it on my skin (It's coming down on me) <br/> Teardrops on my face (Water like misery) <br/> Let it wash away my sins (It's coming down on me) <br/> Let it wash away, yeah <br/> I'd rather be dry, but at least I'm alive <br/> Rain on me, rain, rain <br/> Rain on me, rain, rain <br/> I'd rather be dry, but at least I'm alive <br/> Rain on me, rain, rain <br/> Rain (Rain) on (On) me <br/> Rain on me <br/> Rain on me <br/> Oh yeah, yeah <br/> Rain on me, ooh yeah <br/> Rain on me <br/> Rain on me, ooh <br/> Hands up to the sky <br/> I'll be your galaxy <br/> I'm about to fly <br/> Rain on me, tsunami <br/> Hands up to the sky <br/> I'll be your galaxy <br/> I'm about to fly <br/> Rain on me (Rain on me) <br/> I'd rather be dry, but at least I'm alive (Rain on me) <br/> Rain on me, rain, rain <br/> Rain on me, rain, rain (Rain on me) <br/> I'd rather be dry, but at least I'm alive (At least I'm alive) <br/> Rain on me, rain, rain (Rain on me) <br/> Rain on me (Rain on me) <br/> I hear the thunder coming down <br/> Won't you rain on me? <br/> Eh, eh, yeah (Rain on, woo) <br/> I hear the thunder coming down <br/> Won't you rain on me? <br/> Eh, eh, yeah <br/> Rain on me <br/> ";

    } else if (musica == "Summertime Sadness") {
        document.getElementById("music").src = "musicas/Summertime Sadness - Lana Del Rey/Lana Del Rey - Summertime Sadness (Official Music Video) (320 kbps).mp3";
        document.getElementById("album").src = "musicas/Summertime Sadness - Lana Del Rey/Summertime Sadness - Lana Del Rey.jpg";
        document.getElementById("autor").innerHTML = "Lana Del Rey";
        document.getElementById("nomedamusica").innerHTML = "Summertime Sadness";
        document.getElementById("backgroundgradiente").style.height = "89%";
        document.getElementById("lyrics_position_button").style.display = "block";
        document.getElementById("song_title").style.display = "none";
        document.getElementById("part1").innerHTML = " Kiss me hard before you go <br/> Summertime sadness <br/> I just wanted you to know <br/> That baby, you the best <br/> I got my red dress on tonight <br/> Dancin' in the dark, in the pale moonlight <br/> Done my hair up real big, beauty queen style <br/> High heels off, I'm feelin' alive <br/> Oh, my God, I feel it in the air <br/> Telephone wires above are sizzlin' like a snare <br/> Honey, I'm on fire, I feel it everywhere <br/> Nothin' scares me anymore <br/> (One, two, three, four) <br/> Kiss me hard before you go <br/> Summertime sadness <br/> I just wanted you to know <br/> That baby, you the best <br/> I got that summertime, summertime sadness <br/> Su-su-summertime, summertime sadness <br/> Got that summertime, summertime sadness <br/> Oh, oh-oh, oh-oh <br/> I'm feelin' electric tonight <br/> Cruisin' down the coast, goin' about 99 <br/> Got my bad baby by my heavenly side <br/> I know if I go, I'll die happy tonight <br/> Oh, my God, I feel it in the air <br/> Telephone wires above are sizzlin' like a snare <br/> Honey, I'm on fire, I feel it everywhere <br/> Nothin' scares me anymore <br/> (One, two, three, four) <br/> Kiss me hard before you go <br/> Summertime sadness <br/> I just wanted you to know <br/> That baby, you the best <br/> I got that summertime, summertime sadness <br/> Su-su-summertime, summertime sadness <br/> Got that summertime, summertime sadness <br/> Oh, oh-oh, oh-oh <br/> Think I'll miss you forever <br/> Like the stars miss the sun in the morning sky <br/> Later's better than never <br/> Even if you're gone, I'm gonna drive (drive), drive <br/> I got that summertime, summertime sadness <br/> Su-su-summertime, summertime sadness <br/> Got that summertime, summertime sadness <br/> Oh, oh-oh, oh-oh <br/> Kiss me hard before you go <br/> Summertime sadness <br/> I just wanted you to know <br/> That baby, you the best <br/> I got that summertime, summertime sadness <br/> Su-su-summertime, summertime sadness <br/> Got that summertime, summertime sadness <br/> Oh, oh-oh, oh-oh <br/> ";

    } else if (musica == "Under The Influence") {
        document.getElementById("music").src = "musicas/Under the Influence - Chis Brown/Chris Brown - Under The Influence (Audio) (320 kbps).mp3";
        document.getElementById("album").src = "musicas/Under the Influence - Chis Brown/Under Influence - Chris Brown.jpg";
        document.getElementById("autor").innerHTML = "Chris Brown";
        document.getElementById("nomedamusica").innerHTML = "Under the Influence";
        document.getElementById("backgroundgradiente").style.height = "89%";
        document.getElementById("lyrics_position_button").style.display = "block";
        document.getElementById("song_title").style.display = "none";
        document.getElementById("part1").innerHTML = "Get up, get up <br/> Kiddominant on the beat, better run it back <br/> Fuckin' Robitussin <br/> I don't know why this shit got me lazy right now, yeah <br/> Can't do Percocets or Molly <br/> I'm turnin' one, tryna live it up here right, right, right <br/> Baby, you can <br/> Ride it, ooh, yeah <br/> Bring it over to my place <br/> And you be like <br/> 'Baby, who cares?' <br/> But I know you care <br/> Bring it over to my place <br/> You don't know what you did, did to me <br/> Your body lightweight speaks to me <br/> I don't know what you did, did to me <br/> Your body lightweight speaks to me <br/> I can make it hurricane on it <br/> Hunnid bands, make it rain on it <br/> Tie it up, put a chain on it <br/> Make you tattoo my name on it, oh <br/> Make you cry like a baby, yeah <br/> Let's GoPro and make a video, yeah <br/> Make you cry like a baby, yeah <br/> Let's GoPro and make a video <br/> Oh, yeah, yeah, yeah, yeah <br/> Baby, you can <br/> Ride it, ooh, yeah <br/> Bring it over to my place <br/> And you be like <br/> 'Baby, who cares?' <br/> But I know you care <br/> Bring it over to my place <br/> You don't know what you did, did to me <br/> Your body lightweight speaks to me <br/> I don't know what you did, did to me <br/> Your body lightweight speaks to me <br/> Baby, you can <br/> Ride it, ooh, yeah <br/> And you be like <br/> 'Baby, who cares?' <br/> But I know you care <br/> ";

    }
}

var atividade_01 = "off";

function buscar() {

    changesong();
    var musica = document.getElementById("search_text").value;

    if ((musica == "Blinding Lights") || (musica == "Congratulations") || (musica == "Heat Waves") || (musica == "Logic") || (musica == "Know No Better") || (musica == "No Idea") || (musica == "Rain On Me") || (musica == "Summertime Sadness") || (musica == "Under The Influence")) {
        document.getElementById("catalogo").style.display = "none";
        document.getElementById("ver1").style.display = "block";
        return false;
    } else {
        document.getElementById("ver10").style.display = "block";
        return false;
    }

}

function buscar2() {

    document.getElementById("catalogo").style.display = "none";
    document.getElementById("ver1").style.display = "block";
    return false;


}




var music = document.getElementById('music'); // id for audio element
var duration = music.duration; // Duration of audio clip, calculated here for embedding purposes
var pButton = document.getElementById('pButton'); // play button
var playhead = document.getElementById('playhead'); // playhead
var timeline = document.getElementById('timeline'); // timeline

// timeline width adjusted for playhead
var timelineWidth = timeline.offsetWidth - playhead.offsetWidth;

// play button event listenter
pButton.addEventListener("click", play);

// timeupdate event listener
music.addEventListener("timeupdate", timeUpdate, false);

// makes timeline clickable
timeline.addEventListener("click", function (event) {
    moveplayhead(event);
    music.currentTime = duration * clickPercent(event);
}, false);

// returns click as decimal (.77) of the total timelineWidth
function clickPercent(event) {
    return (event.clientX - getPosition(timeline)) / timelineWidth;
}

// makes playhead draggable
playhead.addEventListener('mousedown', mouseDown, false);
window.addEventListener('mouseup', mouseUp, false);

// Boolean value so that audio position is updated only when the playhead is released
var onplayhead = false;

// mouseDown EventListener
function mouseDown() {
    onplayhead = true;
    window.addEventListener('mousemove', moveplayhead, true);
    music.removeEventListener('timeupdate', timeUpdate, false);
}

// mouseUp EventListener
// getting input from all mouse clicks
function mouseUp(event) {
    if (onplayhead == true) {
        moveplayhead(event);
        window.removeEventListener('mousemove', moveplayhead, true);
        // change current time
        music.currentTime = duration * clickPercent(event);
        music.addEventListener('timeupdate', timeUpdate, false);
    }
    onplayhead = false;
}
// mousemove EventListener
// Moves playhead as user drags
function moveplayhead(event) {
    var newMargLeft = event.clientX - getPosition(timeline);

    if (newMargLeft >= 0 && newMargLeft <= timelineWidth) {
        playhead.style.marginLeft = newMargLeft + "px";
    }
    if (newMargLeft < 0) {
        playhead.style.marginLeft = "0px";
    }
    if (newMargLeft > timelineWidth) {
        playhead.style.marginLeft = timelineWidth + "px";
    }
}

// timeUpdate
// Synchronizes playhead position with current point in audio
function timeUpdate() {
    var playPercent = timelineWidth * (music.currentTime / duration);
    playhead.style.marginLeft = playPercent + "px";
    if (music.currentTime == duration) {
        pButton.className = "";
        pButton.className = "fas fa-play";
    }
}

//Play and Pause
function play() {
    // start music
    if (music.paused) {
        music.play();
        // remove play, add pause
        pButton.className = "";
        pButton.className = "fas fa-pause";
    } else { // pause music
        music.pause();
        // remove pause, add play
        pButton.className = "";
        pButton.className = "fas fa-play";
    }
}

// Gets audio file duration
music.addEventListener("canplaythrough", function () {
    duration = music.duration;
}, false);

// getPosition
// Returns elements left position relative to top-left of viewport
function getPosition(el) {
    return el.getBoundingClientRect().left;
}


function logoreturn() {

    location.reload();
}






