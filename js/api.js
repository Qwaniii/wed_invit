class Api {
    constructor() {
        this.url = "https://api.telegram.org/bot7063713067:AAEOTHGN_x-StvgR7SGEUxcxTBOJKg6qXgs/sendMessage?chat_id=5200592838&text=";
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