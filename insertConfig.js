var config;

//fetch config from server root
$.get("config.json", (res, status) => {
    //success
    config = res;
    insertDetailsFromConfig();
}).fail(() => {
    //error
    alert("Oh no! There was an error loading the most recent details.");
});

/* Iterate through all span.detail sections and insert the appropriate keys.
 *
 * This program interperates the appropriate key for a span.detail by looking at its 'key' attribute.
 * If no corresponding value is found in the config, fills the detail with "#ERROR:<KEY>#"
 */
function insertDetailsFromConfig() {
    $("span.detail").each((index, element)=>{
        let key = $(element).attr("key");
        if(config[key]===undefined){
            $(element).text(`#ERROR:${key}#`);
        }else{
            $(element).text(config[key]);
        }
    });
    $("a.detail").each((index, element)=>{
        let key = $(element).attr("key");
        if(config[key]===undefined){
            $(element).attr("href","/");
        }else{
            $(element).attr("href",config[key]);
        }
    });
}