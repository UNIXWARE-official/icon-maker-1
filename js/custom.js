
    // add event listener to settings form
    const form = document.querySelector('form');
    //form.addEventListener('change', apply_settings);

    // add sample output
    select_icon('tiktok (brands)');
    const output = document.querySelector('svg');
    console.log(output)
});

let settings = {};

const items = [];
let svg = {};

function apply_settings() {
    for (let f of form.getElementsByTagName('input')) {
        settings[f.id] = f.value;
    }

    let cHsl = "hsl(" + settings["c-h"] + ", " + settings["c-l"] + "% , " + settings["c-s"] + "%)";
    let bgHsl = "hsl(" + settings["bg-h"] + ", " + settings["bg-l"] + "% , " + settings["bg-s"] + "%)";

    //output.style.borderRadius = settings["b-radius"] + "%";
    //output.padding = settings["i-padding"] + "px";
    //output.fill = cHsl;
    //output.style.backgroundColor = bgHsl;

    //document.getElementById('p-val').innerHTML = padding;
    //document.getElementById('b-val').innerHTML = radius + "%";
}

function select_icon(key) {
    document.getElementById('output').innerHTML = svg[key];
    apply_settings();
}

$.getJSON("json/svgs.json", function(data) {
    svg = data;
    select_icon('apple (brands)');
    $.each(data, function(key, val) {
        items.push("<button type=\"button\" class=\"mt-2 mr-2 btn btn-light\" onclick=\"select_icon('" + key + "')\">" + val + " " + key + "</button>");
    });
    document.getElementById('input-icon').innerHTML = items.join("");
});

function save_svg() {
    let svg = document.getElementsByTagName('svg')[0];
    console.log(svg);
    alert('should download image');
}