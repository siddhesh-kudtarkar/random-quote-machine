$(document).ready(function() {
    let quotes = [{
        "quote": "Be yourself; everyone else is already taken.",
        "author": "Oscar Wilde"
    }, {
        "quote": "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        "author": "Marilyn Monroe"
    }, {
        "quote": "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        "author": "Albert Einstein"
    }, {
        "quote": "So many books, so little time.",
        "author": "Frank Zappa"
    }, {
        "quote": "A room without books is like a body without a soul.",
        "author": "Marcus Tullius Cicero"
    }, {
        "quote": "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        "author": "Bernard M. Baruch"
    }, {
        "quote": "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        "author": "Dr. Seuss"
    }, {
        "quote": "A friend is someone who knows all about you and still loves you.",
        "author": "Elbert Hubbard"
    }, {
        "quote": "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        "author": "Ralph Waldo Emerson"
    }, {
        "quote": "It is better to be hated for what you are than to be loved for what you are not.",
        "author": "Andre Gide"
    }];
    
    let bgColors = [
        '#F8F161',
        '#F56353',
        '#A5F57D',
        '#7CF4E3',
        '#8CB7F5',
        '#F991E3',
        '#F9A753',
        '#9DB5F4',
        '#88F1C0',
        '#80CDF4'
    ];
    
    let textColors = [
        '#939D07',
        '#FB1D05',
        '#38F806',
        '#07219D',
        '#3467AF',
        '#F107BF',
        '#F3800A',
        '#1253F5',
        '#07F788',
        '#044668'
    ];

    $.fn.newQuote = () => {
        let randomIndex = Math.floor(Math.random() * quotes.length);
        let quote = quotes[randomIndex];
        let bgColor = bgColors[randomIndex];
        let textColor = textColors[randomIndex];

        $("#text").html('<i class="fa fa-lg fa-quote-left"></i> ' + quote.quote);
        $("#author").text("- " + quote.author);

        $("body").css("background-color", bgColor);
        $("#text").css("color", textColor);
        $("#author").css("color", textColor);
        $("#new-quote").css("background-color", textColor);
        $("#tweet-quote").css("background-color", textColor);
        $("#tumblr-quote").css("background-color", textColor);
    }

    $(() => $.fn.newQuote());

    $("#new-quote").click(() => {
        $.fn.newQuote();
    });
});