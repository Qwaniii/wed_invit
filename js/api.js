class Api {
    constructor() {
        // send to private 
        // this.url = "https://api.telegram.org/bot7063713067:AAEOTHGN_x-StvgR7SGEUxcxTBOJKg6qXgs/sendMessage?chat_id=5200592838&text=";
        // send to group chat
        this.url = "https://api.telegram.org/bot7063713067:AAEOTHGN_x-StvgR7SGEUxcxTBOJKg6qXgs/sendMessage?chat_id=-1002131519980&text=";
    }

    sendMessage(name, body) {
        return fetch(`${this.url}${name}%0A${body}`, {
            method: "POST",
            headers: {
                "Accept": "application/json", 
                "Content-Type": "application/json"
            },
        });
    }
}