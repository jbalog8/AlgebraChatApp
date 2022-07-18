export class Message {
    constructor ({ messageText, createdAt, user }) {
        this.messageText = messageText;
        this.createdAt = createdAt ? new Date(createdAt) : new Date();
        this.user = user;
    }

    displayCreatedAt() {
        return this.createdAt.toLocaleString();
    }
}